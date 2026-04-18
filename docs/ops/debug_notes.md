# Debug Notes

- 문서명: Debug Notes
- 목적: 구조적이거나 재발 가능성이 큰 디버깅 사례를 기록한다.
- 적용 범위: 전사 공통으로 참고 가치가 있는 문제
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `troubleshooting.md`

## 기록 대상
- 재현이 어려운 문제
- 레이어 간 경계 문제
- 릴리즈 후 다시 만날 가능성이 높은 버그

## 최소 기록 항목
- 증상
- 재현 조건
- 원인
- 해결 방식
- 재발 방지 아이디어


### 증상

Deflectometry 시퀀스 촬영(9 step) 후 다음 문제가 복합적으로 발생:

1. **패턴 뱃지(SequenceSwitcherBar) 소멸** — 라벨링 진입 후 10~30초 뒤 갑자기 패턴 전환 버튼이 사라짐
2. **Save 후 라벨링 모드에서 안 나감** — Save 버튼 클릭 → 스피너가 8~22초간 회전 → 라벨링 화면에 계속 머무름
3. **Save 후 라벨링 화면에 계속 머무름** (스피너 없이) — setPendingCapture(null)이 호출되었음에도 화면 전환 안 됨
4. **라벨링 진입 자체가 안 됨** — 시퀀스 done 후 Capturing 상태에서 멈춤

### 재현 조건

- Edge .exe (빌드된 설치 파일)에서 online 모드
- Deflectometry 프로젝트, phase_shift_count=4, capture_directions=both, include_solid=true → 9 step
- 고객사 네트워크가 불안정 (간헐적 online ↔ offline 전환)
- 고해상도 산업용 카메라 (이미지 ~1MB/장, lossless WebP 변환에 3~4초/장)

### 원인 (5개, 발견 순서)

#### 원인 1: Pydantic 모델에 시퀀스 설정 필드 누락

**증상**: 촬영이 항상 5 step (레거시)으로 실행됨. Backend Logs에 `phase_shift_count=None`.

**원인**: `backend/app/main.py`의 `DeflectometryConfig` Pydantic 모델에 `phase_shift_count`, `capture_directions` 등 시퀀스 설정 필드가 정의되지 않아 `model_dump()` 시 누락 → `_build_pattern_labels()`가 None을 받아 레거시 5 패턴 생성.

**해결**: Pydantic 모델에 시퀀스 설정 필드 추가 (`05ff6de`).

#### 원인 2: 이중 업로드 경로에서 동기 업로드 블로킹 (13분)

**증상**: 촬영 완료 후 "Capturing..." 상태에서 13분간 멈춤.

**원인**: Python 백엔드 `_run_sequence()`에서 online 모드일 때 `_upload_images()`를 동기 호출. Platform이 이미지당 lossless WebP 재변환에 90초 소요 → 9장 × 90초 = 13분. 이 동안 시퀀스가 `done`으로 전환되지 않아 UI가 멈춤.

**해결**: `_upload_images()` 호출 제거 + `_upload_images()` 메서드 삭제. sync queue가 백그라운드 업로드 담당 (v0.0.4 Feature 1).

#### 원인 3: saveSequenceImages와 handleLabelSave의 race condition

**증상**: 라벨링 중 bbox가 사라짐, 패턴 뱃지 소멸.

**원인 (1차 시도 — fire-and-forget)**: `saveSequenceImages`를 fire-and-forget으로 실행하면, 백그라운드 `saveLabeledImage` IPC가 `INSERT OR REPLACE`로 사용자 bbox를 빈 배열로 덮어씀.

**원인 (2차 시도 — await 복원)**: `await saveSequenceImages`를 라벨링 진입 후에 실행하면, 9장 WebP 변환(30초)이 같은 IPC 채널을 블로킹 → 라벨 저장 IPC가 22초 대기.

**최종 해결**:
- `saveSequenceImages`를 fire-and-forget으로 실행
- `image.repo.ts`에 `insertLabeledImageIfNotExists()` 추가 (`INSERT OR IGNORE`)
- `saveLabeledImage` IPC에 `skipIfExists` 플래그 추가
- 시퀀스 이미지 저장 시 `skipIfExists: true`로 호출 → 이미 라벨 저장된 이미지는 건너뜀

#### 원인 4: connectivity 변경으로 Workspace unmount → captureGroup 리셋

**증상**: 라벨링 중 갑자기 패턴 뱃지가 사라짐. `[DEBUG Workspace] UNMOUNTED` 로그 확인.

**원인**: `App.tsx`에서 online Workspace와 offline Workspace가 별개 JSX 분기에서 렌더링됨. 고객사 네트워크 불안정으로 connectivity 이벤트가 `online=false` → `online=true`로 깜빡이면 → `App.tsx`가 online 분기 → offline 분기 → online 분기로 전환 → Workspace가 unmount → remount → `useState` 초기값 `captureGroup = null`로 리셋.

**해결**: Workspace를 단일 JSX 노드로 통합. online/offline 어느 쪽이든 같은 위치에서 렌더링하여 모드 전환 시 unmount하지 않음 (`e7b5bf1`).

#### 원인 5: handleLabelSave에서 동기 업로드 + WebP 재변환

**증상**: Save 버튼 후 8~22초 스피너 → 라벨링에서 안 나감.

**원인 (업로드)**: `handleLabelSave` 내부에서 `remoteImageId`가 없으면 `uploadCapturedImage`를 `await`로 호출. 시퀀스 이미지는 직접 업로드를 제거했으므로 항상 `remoteImageId=none` → Platform에 동기 업로드 시도 → 90초+ 대기.

**해결**: `sequenceId`가 있는 이미지는 `uploadCapturedImage` 건너뜀 (`12b1ace`).

**원인 (WebP)**: `saveLabeledImage` IPC가 이미 디스크에 저장된 시퀀스 이미지를 **다시 lossless WebP 변환** (8초).

**해결**: 시퀀스 이미지는 `saveLabeledImage` 대신 `updateImageBboxes` (bbox만 DB 업데이트, 밀리초 단위) 사용 (`27ee15a`).

#### 원인 6 (추정): setCaptureGroup useCallback stale closure

**증상**: 시퀀스 done 후 `[SEQ post-done]` 로그는 나오지만 `[SEQ labeling-entered]` 로그가 안 나옴. 라벨링에 진입하지 못함.

**원인**: 디버그 로그를 위해 `setCaptureGroup`을 `useCallback`으로 감싸면서 `captureGroup`을 dependency에 포함 → 시퀀스 폴링 effect의 callback이 stale closure를 참조하여 라벨링 진입 코드가 실행되지 않거나 에러 발생.

**해결**: `useCallback` 래퍼 제거, `useState` 원본 setter 사용 (`902ddde`).

### 디버깅 과정에서 추가된 운영 로그 (유지)

| 로그 | 위치 | 용도 |
|------|------|------|
| `[SEQ config]` | `useDeflectometry.ts` | 시퀀스 시작 시 config 확인 |
| `[SEQ post-done]`, `[SEQ labeling-entered]`, `[SEQ labeling-prep]` | `useDeflectometry.ts` | 시퀀스 완료 → 라벨링 진입 과정 추적 |
| `[SEQ save-start]`, `[SEQ save-done]` | `useDeflectometry.ts` | 로컬 디스크 저장 소요 시간 |
| `[LABEL save-start]` ~ `[LABEL save-complete]` | `Workspace.tsx` | 라벨 저장 전체 과정 소요 시간 |
| `[LABEL:save] step1~6` | `useCaptureFlow.ts` | 저장 각 단계별 소요 시간 |
| `[DEBUG Workspace] MOUNTED/UNMOUNTED` | `Workspace.tsx` | Workspace 수명 추적 |
| `[DEBUG captureGroup] pendingCapture=null` | `Workspace.tsx` | 패턴 뱃지 소멸 시점 |
| `[DEBUG setPendingCapture]` | `useCaptureStore.ts` | pendingCapture 상태 변경 추적 |
| `[APP connectivity]`, `[APP mode-change]` | `App.tsx` | 네트워크/모드 전환 추적 |
| `[deflectometry] sequence config received` | `deflectometry.py` | 백엔드가 받은 config 확인 |
| `[upload] uploading step X/Y` | `deflectometry.py` | 업로드 진행 (향후 sync queue로 이관 후 삭제 가능) |

### 재발 방지

1. **Workspace를 조건부 분기로 렌더링하지 않는다** — connectivity/모드 변경으로 unmount되면 모든 useState가 리셋됨
2. **시퀀스 이미지에 `INSERT OR REPLACE`를 사용하지 않는다** — fire-and-forget 저장과 사용자 라벨링이 경합하면 데이터 손실 발생
3. **`useCallback` dependency에 state 값을 넣지 않는다** — stale closure로 effect가 예상과 다르게 동작
4. **시퀀스 이미지의 라벨 저장에서 WebP 재변환/Platform 업로드를 하지 않는다** — 이미 저장된 이미지는 bbox만 업데이트

### 관련 커밋

| 커밋 | 내용 |
|------|------|
| `05ff6de` | Pydantic 모델에 시퀀스 설정 필드 추가 |
| `027e779` | Logs 탭 Copy All 버튼 + 업로드 진행 로그 |
| `668d70f` | fire-and-forget + INSERT OR IGNORE |
| `e7b5bf1` | Workspace 단일 JSX 노드 통합 |
| `12b1ace` | 시퀀스 이미지 라벨 저장 시 동기 업로드 스킵 |
| `27ee15a` | 시퀀스 이미지 라벨 저장 시 WebP 재변환 스킵 |
| `902ddde` | setCaptureGroup useCallback 래퍼 제거 |

