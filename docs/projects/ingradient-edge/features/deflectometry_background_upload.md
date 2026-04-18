# Deflectometry Background Upload

- 문서명: Deflectometry Background Upload
- 목적: Deflectometry 시퀀스 촬영 후 업로드를 백그라운드로 전환하고, 이중 업로드 제거 및 Platform의 불필요한 이미지 재변환을 제거하여 속도와 비용을 개선한다
- 적용 범위: ingradient-edge, ingradient-platform
- 상태: Draft
- Owner: Dev
- 마지막 수정일: 2026-04-06

## 1. 기능 개요

- 기능 이름: Deflectometry Background Upload
- 한 줄 정의: 촬영 완료 후 즉시 라벨링으로 전환. 이중 업로드를 제거하고 sync queue로 통일. Platform은 WebP를 재변환 없이 저장한다.

## 2. 문제 정의

### 문제 1: 이중 업로드 — 같은 이미지가 두 번 올라감

Online 모드에서 Deflectometry 시퀀스 촬영 시, 같은 이미지가 **두 경로로 중복 업로드**된다:

| 경로 | 누가 | 형식 | 타이밍 | 목적지 |
|------|------|------|--------|--------|
| 1. Python 백엔드 직접 업로드 | `deflectometry.py` `_upload_images()` | JPEG (카메라 원본) | 동기 — 촬영 직후 블로킹 | `POST /api/upload` |
| 2. Electron sync queue | `sync.service.ts` `uploadImageFromDisk()` | WebP (Edge가 변환) | 비동기 — 백그라운드 | `POST /api/upload` |

경로 1에서 업로드한 후, 같은 이미지가 경로 2에서도 다시 업로드된다. Platform은 idempotency key로 중복을 감지하지만, **경로 1의 JPEG와 경로 2의 WebP는 같은 key를 사용하므로** 경로 2는 기존 레코드를 반환하고 실제 업로드는 안 된다. 결과적으로 Platform에는 **JPEG 원본이 저장**되고, Edge에서 변환한 lossless WebP는 사용되지 않는다.

**관련 코드:**
- Edge 경로 1: `ingradient-edge/backend/app/deflectometry.py` 557~571행 (`_upload_images` 호출)
- Edge 경로 2: `ingradient-edge/src/electron/services/sync.service.ts` 70~122행 (`uploadImageFromDisk`)
- idempotency key: 경로 1은 `{sequence_id}:{sequence_step}`, 경로 2도 동일

### 문제 2: 동기 업로드로 UI 13분 멈춤

경로 1이 **동기적**이라, Platform이 이미지 처리를 완료할 때까지 시퀀스가 done으로 전환되지 않는다:

```
촬영 9장 완료 (9초)
  → _upload_images() 시작
  → step 0 업로드... Platform 처리 대기 90초
  → step 1 업로드... Platform 처리 대기 90초
  → ... (9장 × 90초 = ~13분)
  → 전부 완료 → state="done"
  → 프론트엔드가 done 감지 → 라벨링 화면 전환
```

이 13분 동안 UI는 "Capturing..." 상태로 멈추고, 두 번째 촬영도 `Another sequence is already running` 에러로 불가.

**관련 코드:**
- Edge: `deflectometry.py` `_run_sequence()` 557행 — online mode일 때 `_upload_images()` 호출
- Edge: `useDeflectometry.ts` 487행 — `state === 'done'` 감지 후 라벨링 전환

### 문제 3: Platform이 이미 WebP인 이미지를 또 WebP로 변환

`POST /api/upload` 엔드포인트가 수신한 이미지에 대해 **형식 무관하게** 다음을 수행:

```
수신 (JPEG/PNG/WebP 무관)
  → encode_lossless_webp(content)    ← CPU 집약적, 90초/장 (1코어 Cloud Run)
  → GCS 업로드 (원본 WebP)
  → _make_webp_thumb_bytes()         ← 썸네일 생성
  → GCS 업로드 (썸네일)
  → encode_preview_webp()            ← 프리뷰 생성 (max dim > 1024)
  → GCS 업로드 (프리뷰)
```

Edge v0.0.3부터 모든 이미지를 lossless WebP로 변환 후 디스크에 저장한다. sync queue가 이 WebP를 Platform에 보내면, Platform이 **이미 lossless WebP인 파일을 또 lossless WebP로 변환**한다. 이 재변환이 90초/장의 핵심 원인이다.

**관련 코드:**
- Edge WebP 변환: `ingradient-edge/src/electron/services/image-format.service.ts` `encodeLosslessWebp()`
- Platform 재변환: `ingradient-platform/backend/routes/image_upload_routes.py` 92행 `encode_lossless_webp(content)`

### 문제 4: Deflectometry만 JPEG 유지 (v0.0.3 통일 누락)

v0.0.3에서 모든 이미지 저장을 WebP로 통일했지만, Python 백엔드의 deflectometry 캡처는 여전히 JPEG로 하드코딩되어 있다:

```python
# deflectometry.py line 542
mime_type="image/jpeg",
image_data_url=_data_url_from_bytes(frame, "image/jpeg"),
```

경로 1(직접 업로드)에서 JPEG가 Platform에 올라가고, 경로 2(sync queue)에서는 Edge가 WebP로 변환한 파일이 올라가므로 일관성이 깨져있다.

### 문제 5: 업로드 실패 시 시퀀스 전체 실패

경로 1에서 업로드 중 하나라도 실패하면 `UPLOAD_FAILED` 에러로 시퀀스 전체가 실패 처리된다. 촬영 자체는 성공했는데 네트워크 문제로 전체가 실패하는 것은 과도하다.

**관련 코드:**
- `deflectometry.py` 568행 — upload_error 발생 시 `_mark_error(error_code="UPLOAD_FAILED")`

### 문제 6: 로컬 저장(WebP 변환)이 라벨링 진입을 블로킹

시퀀스가 `done`으로 전환된 후, 프론트엔드가 라벨링 화면으로 진입하기 **전에** `saveSequenceImages()`를 `await`하고 있다. 이 함수는 9장의 이미지를 `saveLabeledImage` IPC로 저장하는데, 각 이미지마다 `encodeLosslessWebp()` (sharp lossless WebP 변환)이 실행된다. 고해상도 이미지 9장의 WebP 변환이 모두 완료되어야 라벨링에 진입한다.

```
시퀀스 done (백엔드)
  → 프론트엔드 done 감지
  → await saveSequenceImages(data)  ← 9장 × WebP 변환 (수초~수십초 블로킹)
  → 라벨링 진입 (setPendingCapture + setActiveTab)
```

**관련 코드:**
- `useDeflectometry.ts` 510행 — `await saveSequenceImages(data)` 이후에 라벨링 진입 로직
- `useDeflectometry.ts` 217행 — `Promise.all(saveLabeledImage...)` — 9장 병렬 WebP 변환
- `image.service.ts` — `saveLabeledImage` IPC 내부에서 `encodeLosslessWebp()` 호출

**해결:** 라벨링 진입(`setPendingCapture`, `setCaptureGroup`)을 먼저 수행한 후, `saveSequenceImages`를 `await`로 실행. 라벨링은 `data.images`의 `image_data_url`(메모리 data URL)로 즉시 진입. 로컬 저장은 라벨링 진입 직후 순차 실행.

**주의:** fire-and-forget으로 하면 `INSERT OR REPLACE`가 사용자가 그린 bbox를 빈 배열로 덮어쓰는 race condition 발생. 반드시 라벨링 진입 후 `await`로 실행해야 함.

## 3. 목표

### 사용자 목표
- 시퀀스 촬영 완료 후 **즉시** 라벨링 화면으로 전환 (5초 이내)
- 업로드 진행 상황은 기존 sync 상태(Images 탭)로 확인 가능

### 운영/비즈니스 목표
- 이중 업로드 제거 → 네트워크/서버 자원 절약
- Cloud Run 이미지 처리 시간: 90초/장 → 수초/장 (재변환 제거)
- 촬영과 업로드 분리 → 네트워크 문제가 촬영을 방해하지 않음

## 4. 범위

### Edge 수정

| 수정 | 해결하는 문제 |
|------|-------------|
| `deflectometry.py`에서 `_upload_images()` 호출 제거 | 문제 1 (이중 업로드), 문제 2 (UI 멈춤), 문제 5 (전체 실패) |
| `useDeflectometry.ts`에서 `saveSequenceImages`를 fire-and-forget으로 변경 | 문제 6 (로컬 저장이 라벨링 블로킹) |
| `_run_sequence()`에서 촬영 완료 → 즉시 `state="done"` 반환 | 문제 2 |
| `"uploading"` 상태 전이 제거 (촬영 flow에서) | 문제 2 |
| `useDeflectometry.ts`에서 uploading 상태 핸들링 간소화 | 문제 2 |

### Platform 수정

| 수정 | 해결하는 문제 |
|------|-------------|
| `image_upload_routes.py`에서 WebP 수신 시 `encode_lossless_webp()` 건너뛰기 | 문제 3 (재변환 90초) |
| `image_direct_upload_routes.py`에서도 동일 적용 | 문제 3 |

### Platform 변경 로직

```python
# image_upload_routes.py 88~94행

# 기존: 모든 형식을 무조건 재변환
webp_bytes = encode_lossless_webp(content)

# 변경: 이미 WebP이면 건너뛰기
is_webp = (
    file.content_type == "image/webp"
    or (file.filename or "").lower().endswith(".webp")
)
if is_webp:
    webp_bytes = content  # 재변환 불필요
else:
    webp_bytes = encode_lossless_webp(content)
```

## 5. 사용자 시나리오

### 기본 흐름 (온라인 모드)
1. 사용자가 촬영 버튼 클릭
2. 9 step 패턴 촬영 진행 (각 step ~1초)
3. 촬영 완료 → 이미지가 로컬에 WebP로 저장 → `sync_state = local_only`
4. 즉시 라벨링 화면으로 전환 (solid 패턴 이미지)
5. 백그라운드에서 sync queue가 9장을 순차 업로드 (WebP → Platform)
6. Platform은 재변환 없이 GCS에 저장, 썸네일/프리뷰만 생성
7. 업로드 완료 → `sync_state = synced`

### 기본 흐름 (오프라인 모드)
1~4는 동일
5. 네트워크 복구 시 sync queue가 자동 업로드 시작
6~7은 동일

### 예외 흐름
- 업로드 중 네트워크 끊김 → `sync_state = upload_failed` → 재시도 (기존 backoff 정책)
- 앱 종료 후 재시작 → stuck `uploading` 상태가 `local_only`로 리셋 → 재시도

## 6. UI / UX 방향

### 변경되는 화면
- **Capture 탭**: 촬영 완료 시 "Uploading sequence" 단계 없이 즉시 라벨링 전환
- **상태바**: "Uploading sequence" → "Saving captured sequence" (로컬 저장만 표시)

### 변경되지 않는 것
- Setup 탭: 변경 없음
- Images 탭: sync 상태 표시는 기존과 동일 (`local_only` → `synced`)
- Settings > Logs: 기존 로그 유지

## 7. 데이터 / API / 권한 영향

### Edge 수정 상세

| 파일 | 변경 내용 |
|------|-----------|
| `backend/app/deflectometry.py` `_run_sequence()` | `if runtime_mode == "online"` 블록 (557~571행) 제거. 촬영 완료 → saving → done으로 바로 전환 |
| `backend/app/deflectometry.py` `_upload_images()` | 메서드 삭제 (더 이상 사용하지 않음) |
| `backend/app/main.py` `SequenceStartRequest` | `auth_token`, `upload_url` 필드 유지 (하위 호환), 하지만 사용하지 않음 |
| `src/ui/features/capture/hooks/useDeflectometry.ts` | `handleRunSequence`에서 `auth_token`, `upload_url` 전송 제거 가능 (선택) |
| `src/ui/features/capture/hooks/useDeflectometry.ts` 510행 | `await saveSequenceImages(data)` → `void saveSequenceImages(data)` (fire-and-forget). 라벨링 진입을 로컬 저장 완료 전에 즉시 수행 |

### Platform 수정 상세

| 파일 | 변경 내용 |
|------|-----------|
| `backend/routes/image_upload_routes.py` 88~94행 | WebP 파일이면 `encode_lossless_webp()` 건너뛰기 |
| `backend/routes/image_direct_upload_routes.py` | 동일한 WebP 건너뛰기 로직 적용 |

### DB/migration
- 불필요 (스키마 변경 없음)

### 권한 변경
- 불필요 (sync queue는 기존 인증 토큰 사용)

## 8. 테스트 계획

### unit
- Edge: `buildPatternLabels(cfg)` → 4-step, both, solid → 9개 레이블 반환 확인
- Edge: `_build_pattern_labels(cfg)` (Python) → 동일 확인
- Platform: WebP 파일 수신 시 `encode_lossless_webp()` 호출되지 않음 확인
- Platform: JPEG/PNG 파일 수신 시 기존대로 `encode_lossless_webp()` 호출 확인

### integration
- 시퀀스 촬영 → 9장 로컬 저장 → `sync_state` 모두 `local_only` 확인
- 시퀀스 done → 즉시 라벨링 전환 (uploading 단계 없음) 확인
- sync queue 트리거 → 9장 WebP 업로드 → `sync_state` 모두 `synced` 확인
- Platform에 WebP로 업로드 → GCS에 재변환 없이 WebP로 저장됨 확인
- Platform에 JPEG로 업로드 → 기존대로 WebP 변환 후 저장됨 확인
- offline 모드 촬영 → 네트워크 복구 → 자동 업로드 확인
- 이중 업로드가 발생하지 않음 확인 (Platform에 같은 이미지가 1번만 저장)

### e2e / scenario
- 촬영 버튼 클릭 → 9 step 완료 → 라벨링 화면 전환까지 5초 이내 확인
- 업로드 중 앱 종료 → 재시작 → 미업로드 이미지 재시도 확인
- Platform Gallery에서 Edge 업로드 이미지가 정상 표시되는지 확인 (썸네일, 프리뷰 포함)

## 9. 릴리즈 고려사항

### release note
- 시퀀스 촬영 후 즉시 라벨링 가능 (업로드 대기 제거)
- 업로드는 백그라운드에서 자동 처리
- 이미지 업로드 속도 개선 (WebP 재변환 제거)

### user guide
- 촬영 워크플로우 변경 없음 (사용자 입장에서 더 빨라질 뿐)

### ops 영향
- Cloud Run 이미지 처리 시간 대폭 감소 (재변환 제거)
- sync queue 업로드 부하 증가 가능 (기존 단건 → 9장 배치, 모니터링 필요)

## 10. 오픈 이슈

- Edge에서 썸네일/프리뷰까지 생성하여 전송할지 (Platform 부하 추가 절감, 추후 검토)
- sync queue의 배치 크기 제한 (현재 제한 없음, 모니터링 후 결정)
