# Raw Frame Capture — 무손실 이미지 캡처

- 문서명: Raw Frame Capture
- 목적: Deflectometry 시퀀스 촬영 시 카메라 raw frame을 무손실로 저장하여 AI 학습 품질을 보장하고, 인코딩 지연 없이 촬영/라벨링을 즉시 수행할 수 있게 한다.
- 적용 범위: ingradient-edge
- 상태: Draft
- Owner: Dev
- 마지막 수정일: 2026-04-07

## 1. 기능 개요

- 기능 이름: Raw Frame Capture
- 한 줄 정의: 카메라 raw frame을 JPEG 손실 없이 무손실 저장. 촬영은 빠르게, 인코딩은 백그라운드에서, 라벨링은 즉시.

## 2. 문제 정의

### 현재 이미지 파이프라인

```
카메라 하드웨어 (GigE/USB)
  → 백엔드 캡처 루프: cv2.VideoCapture.read() → raw BGR numpy array
  → cv2.imencode(".jpg", frame, [JPEG_QUALITY, 80]) → JPEG bytes ← 여기서 손실 발생
  → streamer.current_frame에 저장
  → deflectometry: streamer.get_frame() → JPEG bytes
  → _decode_jpeg() → numpy array (이미 JPEG 손실 있음)
  → Edge: numpy → lossless WebP 변환 (3초/장) ← 여기서 블로킹
```

### 문제점

1. **JPEG q80 손실**: 카메라에서 받은 원본 데이터가 JPEG 인코딩을 거치면서 손실 발생. AI 학습(특히 deflectometry phase unwrapping)에 부적합할 수 있음.
2. **lossless WebP 인코딩 블로킹**: 3초/장 × 9장 = 27초. 이 동안 촬영 반응 지연, Images 즉시 표시 불가, IPC 블로킹.
3. **이중 인코딩**: JPEG로 한번, WebP로 또 한번 — 불필요한 CPU 사용 + 첫 번째 인코딩의 손실을 복원 불가.

## 3. 목표

### 사용자 목표
- 촬영 속도: ~6.5초 유지 (현재와 동일)
- 라벨링: 촬영 직후 즉시 가능
- Images 탭: 촬영 직후 즉시 표시

### 기술 목표
- AI 학습용: 완전 무손실 (카메라 raw → lossless WebP, JPEG 경유 없음)
- 인코딩 블로킹 제거: lossless WebP 변환은 백그라운드에서 수행
- Platform 업로드: lossless WebP 완료 후 전송

## 4. 범위

### 포함하는 것

| 수정 | 내용 |
|------|------|
| 카메라 스트리머에 raw frame 제공 | `current_raw_frame: np.ndarray` 추가. 각 백엔드에서 JPEG 인코딩 전에 보관. |
| deflectometry에서 raw frame 사용 | `streamer.get_raw_frame()`으로 무손실 numpy 획득. JPEG은 프리뷰용으로만 사용. |
| Python 백엔드에서 raw 디스크 저장 | saving 단계에서 raw numpy를 임시 파일로 저장 (.npy). SequenceImage에 raw_file_path 포함. |
| Edge Phase 1: JPEG 즉시 저장 | saveOriginalOnly=true로 JPEG 디스크 저장 + DB INSERT. Images에서 즉시 표시. |
| Edge Phase 2: raw → WebP 변환 | raw 파일 읽기 → lossless WebP 변환 → file_path 교체 → raw/JPEG 삭제. |
| sync queue: 인코딩 완료 후 업로드 | Phase 2 전까지 sync_state를 encoding으로 설정하여 sync queue에서 건너뛰기. |

### 포함하지 않는 것
- 일반 단일 캡처 (deflectometry 아닌 일반 촬영): 기존 JPEG → WebP 흐름 유지
- 카메라 스트리밍 프리뷰: JPEG 유지 (실시간 프리뷰에 무손실 불필요)

## 5. 사용자 시나리오

### 기본 흐름
1. 사용자가 촬영 버튼 클릭
2. 9 step 패턴 촬영 (~6.5초, 기존과 동일)
3. 각 step에서: raw numpy 메모리 보관 + JPEG 프론트엔드 전달
4. 촬영 완료 → 즉시 라벨링 화면 (JPEG data URL)
5. 백그라운드 saving: raw numpy → 임시 .npy 파일 → SequenceImage에 raw_file_path
6. 프론트엔드 Phase 1: JPEG 즉시 디스크 저장 + DB INSERT
7. 프론트엔드 Phase 2: raw .npy 읽기 → lossless WebP 변환 → file_path 교체
8. sync queue: WebP 준비 완료 → Platform 업로드

### Images 탭
- Phase 1 완료 후: JPEG 썸네일로 즉시 표시
- Phase 2 완료 후: WebP 썸네일으로 교체 (사용자에게 차이 없음)

## 6. 데이터 흐름 상세

```
카메라 → raw BGR numpy (6~12MB/장)
  ├─ JPEG q80 인코딩 (빠르게) → data URL → 프론트엔드 (보여주기용)
  └─ raw numpy 메모리 보관

촬영 완료 (saving 단계):
  raw numpy → .npy 임시 파일 (디스크, 6~12MB/장)
  메모리 해제

프론트엔드 Phase 1:
  JPEG data URL → .jpg 디스크 저장 (100~500KB)
  DB INSERT (file_path=.jpg, sync_state=encoding)

프론트엔드 Phase 2 (백그라운드):
  .npy 읽기 → sharp lossless WebP → .webp 디스크 저장
  DB UPDATE (file_path=.webp, sync_state=local_only)
  .npy 삭제, .jpg 삭제

sync queue:
  sync_state=local_only → uploading → synced
```

## 7. 수정 파일

| 파일 | 변경 |
|------|------|
| `backend/app/camera_stream.py` | `current_raw_frame` 추가, `get_raw_frame()` 메서드 |
| `backend/app/backends/opencv_local.py` | 캡처 루프에서 raw frame 보관 |
| `backend/app/backends/cvsCam_backend.py` | 동일 |
| `backend/app/backends/harvesters_backend.py` | 동일 |
| `backend/app/deflectometry.py` | `get_raw_frame()` 사용, raw numpy 보관, .npy 저장 |
| `src/electron/services/image.service.ts` | Phase 2에서 .npy → WebP 변환 로직 |
| `src/ui/features/capture/hooks/useDeflectometry.ts` | saveSequenceImages Phase 1/2 + raw_file_path 전달 |
| `src/electron/db/image.repo.ts` | sync_state에 `encoding` 상태 추가 (선택) |

## 8. 주의사항

- **디스크 사용량**: raw .npy 6~12MB × 9장 = 54~108MB 임시 사용. WebP 변환 후 삭제.
- **메모리**: 촬영 중 9장 raw numpy를 메모리에 보관 = 54~108MB. saving 단계에서 디스크로 flush 후 해제.
- **sync_state 'encoding'**: WebP 변환 완료 전 sync queue가 JPEG를 업로드하는 것 방지. 변환 완료 후 `local_only`로 변경.
- **.npy 정리**: 앱 종료 시 또는 Phase 2 완료 시 삭제. 비정상 종료 시 orphan .npy가 남을 수 있으므로, 앱 시작 시 정리 로직 필요.

## 9. 테스트

- 촬영 속도: ~6.5초 (JPEG 인코딩만, raw 저장은 saving 단계)
- Images 탭: Phase 1 후 즉시 JPEG 표시
- 라벨링: 즉시 가능
- lossless 검증: raw .npy와 .webp의 픽셀 값 비교 (diff = 0)
- Platform Gallery: WebP 업로드 후 정상 표시
- 디스크 정리: Phase 2 후 .npy + .jpg 삭제 확인
- 비정상 종료 후 재시작: orphan .npy 정리 확인
