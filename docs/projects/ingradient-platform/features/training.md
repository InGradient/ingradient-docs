# 모델 학습 (Training)

## 기능 개요

데이터셋과 클래스를 기반으로 AI 모델 학습을 설정, 실행, 모니터링하는 실험 관리 화면이다.

## 문제 정의

AI 학습은 단순 버튼 클릭이 아니라, 데이터셋 구성 → 하이퍼파라미터 설정 → GPU 큐 관리 → 실시간 모니터링 → 결과 비교의 전체 실험 워크플로우를 필요로 한다.

## 범위 / 비범위

- **포함**: 모델 생성/설정, 학습 실행/중지/재개, GPU 큐 관리, 실시간 로그/메트릭, 평가 결과, 모델 비교
- **제외**: 실제 GPU 실행 → ingradient-ai, 모델 파일 관리 → Models Library

## 사용자 시나리오

### 학습 설정 및 실행

- **기본 흐름**:
  1. `/training` 페이지에서 "새 모델" 클릭
  2. 모델 설정:
     - 이름, task (`classification` / `object_detection`)
     - 아키텍처 (ResNet, YOLOv8 등)
     - train/validation/test 데이터셋 선택
     - 하이퍼파라미터: epochs, batch_size, learning_rate, optimizer, image_size
  3. "학습 시작" → 큐에 추가
  4. GPU 사용 가능 시 자동 실행
- **예외 흐름**:
  - GPU 모두 사용 중 → 큐 대기 (위치 표시)
  - 데이터셋 비어있음 → 시작 불가 안내

### 학습 모니터링

- 실시간 학습 로그 스트리밍
- 손실 곡선 (train/eval 분리)
- 정확도 곡선
- Epoch 진행률: 현재/전체, 이터레이션 진행
- GPU 사용 히트맵

### 결과 평가

- Confusion matrix 시각화
- 클래스별 precision, recall, F1
- 샘플 예측 결과 (이미지 + 바운딩 박스 + 신뢰도)
- 히트맵 시각화

### 모델 비교

- 두 모델을 나란히 비교 (메트릭, 예측 결과)
- Hold-to-compare: 같은 이미지에 대한 두 모델의 예측 비교

## UI / UX 방향

| 영역 | 구성 |
|------|------|
| 상단 | GPU 상태 표시, 학습 큐 (순서, 모델명, 상태, GPU, 진행률, epoch) |
| 좌측 | 모델 목록 (이름, 아키텍처, 데이터셋, 상태, 최신 메트릭, 생성일) |
| 우측 상세 | 모델 정보, 학습 로그, 메트릭 차트, 평가 결과 |

### 모델 라이프사이클

```
Draft → Queued → Running → Completed / Failed / Stopped
                    ↑          ↓
                    └── Resume (체크포인트에서 재개)
```

- Draft: 설정만 완료, 미실행
- Queued: GPU 대기 중 (GPU 미점유)
- Running: GPU에서 실행 중
- Completed: 정상 완료
- Failed: 오류로 중단
- Stopped: 사용자가 수동 중지

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `GET /api/training/models` | 모델 목록 |
| `POST /api/training/models` | 생성 |
| `POST /api/training/models/{id}/start` | 학습 시작 |
| `POST /api/training/models/{id}/stop` | 중지 |
| `POST /api/training/models/{id}/resume` | 체크포인트에서 재개 |
| `POST /api/training/models/{id}/clone` | 설정 복제 |
| `GET /api/training/models/{id}/events` | 실시간 로그 |
| `GET /api/training/models/{id}/metrics` | 메트릭 |
| `GET /api/training/models/{id}/evaluation` | 평가 결과 |
| `GET /api/training/queue` | 큐 상태 |
| `GET /api/training/gpus` | GPU 상태 |
| `GET /api/training/heatmap` | GPU 사용 히트맵 |

### 하이퍼파라미터

| 파라미터 | 기본값 | 옵션 |
|----------|--------|------|
| epochs | - | 사용자 지정 |
| batch_size | - | 사용자 지정 |
| learning_rate | - | 사용자 지정 |
| optimizer | adamw | `adamw`, `adam`, `sgd` |
| image_size | - | 사용자 지정 |
| channels | 3 | `1`, `3` |
| early_stopping | false | true/false |

### Auto-validation 전략

- `split_train_90_10`: train 데이터의 10%를 자동으로 validation으로 분리
- `reuse_train`: train 데이터를 validation으로도 사용

## 테스트 계획

- 모델 생성 → 큐 추가 → 실행 → 완료 전체 흐름
- GPU 점유 중 새 학습 → 큐 대기 확인
- 학습 중지 → 재개 (체크포인트) → 이어서 학습
- 실시간 로그/메트릭 표시 확인
- Confusion matrix 정확도 검증
- 두 모델 비교 UI 동작

## 관련 문서

- [training_queue_ui.md](./training_queue_ui.md) — 큐 UI 상세 규칙
