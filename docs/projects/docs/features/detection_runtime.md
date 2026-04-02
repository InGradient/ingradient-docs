# Detection Runtime

- 문서명: Detection Runtime
- 목적: YOLO, LTDETR 기반 object detection runtime의 범위와 실행 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `runtime_contract.md`, `../architecture.md`

## 목적

Detection runtime은 object detection 모델(YOLO, LTDETR)의 학습, 추론, fine-tuning을 실행한다. v1.5 (Phase 3)에서 상용 수준으로 구현한다.

## 지원 모델

| 모델 | 프레임워크 | 작업 |
|------|-----------|------|
| YOLO (v5/v8) | Ultralytics | inference, training, fine-tuning |
| LTDETR | LightlyTrain | inference, training, fine-tuning |
| DINOv3 계열 detection | LTDETR 경로 | inference, training |
| Dinomaly | Dinomaly (PyTorch) | inference, training |

DINOv3 + YOLO custom head 조합은 v1에서 지원하지 않는다. LTDETR 경로로 통합한다.

Dinomaly는 DINOv2/v3를 frozen encoder로 사용하여 비지도 이상 탐지(anomaly detection)를 수행한다. 정상 이미지만으로 학습하며 픽셀별 이상 히트맵을 출력한다. CVPR 2025.

## 지원 작업

| task_type | 설명 |
|-----------|------|
| `object_detection` | bbox 기반 객체 탐지 |
| `classification` | 이미지 분류 (detection 모델 기반) |
| `anomaly_detection` | 비지도 이상 탐지 (히트맵 + 이상 점수) |

## Runtime Contract 구현

`runtime_contract.md`의 7개 메서드를 구현한다.

- `can_accept`: runtime=detection, GPU 가용, model compatibility 확인
- `prepare_model`: model weight 로드, warm loading 지원
- `prepare_inputs`: 이미지 전처리 (resize, normalize)
- `execute`: YOLO/LTDETR 추론 또는 학습 실행
- `collect_metrics`: loss, mAP, inference latency 등
- `persist_outputs`: 결과 (bbox, confidence) 저장, checkpoint 저장
- `cleanup`: GPU 메모리 해제

## Warm Model Loading

- 자주 사용하는 모델을 GPU 메모리에 상주 (preload)
- cold start 최소화
- preload 상태: cold → warming → warm → in_use → cooldown → evicted
- preload 정책은 `training_scheduler.md` 참조

## 실행 환경

- GPU 필수 (inference, training 모두)
- `detection-infer-pool` 또는 `training-pool`에서 실행
- restricted sharing 가능 (검증된 inference)

## v1.5 범위 (Phase 3)

- YOLO inference + training
- LTDETR inference + training
- warm model loading
- restricted sharing 일부
- customer install option 검증

## v2 이후

- 고급 augmentation pipeline
- multi-GPU training
- ONNX export 자동화

## 관련 문서

- `runtime_contract.md`, `model_registry_and_byom.md`, `training_scheduler.md`
