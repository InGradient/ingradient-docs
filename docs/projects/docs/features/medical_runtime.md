# Medical Runtime

- 문서명: Medical Runtime
- 목적: MedSAM, nnU-Net 기반 의료 영상 segmentation runtime의 범위를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `runtime_contract.md`, `../architecture.md`

## 목적

Medical runtime은 의료 영상(CT, MRI, X-ray) segmentation을 위한 MedSAM, nnU-Net 모델의 학습과 추론을 지원한다. v2 (Phase 5)에서 구현한다.

## 지원 모델

| 모델 | 프레임워크 | 작업 |
|------|-----------|------|
| MedSAM / MedSAM2 | SAM 기반 | promptable segmentation |
| nnU-Net | nnU-Net | automatic segmentation |

## 지원 작업

| task_type | 설명 |
|-----------|------|
| `promptable_segmentation` | prompt 기반 segmentation (MedSAM) |
| `automatic_segmentation` | 자동 segmentation (nnU-Net) |
| `medical_training` | 의료 모델 학습/fine-tuning |

## 특수 요구사항

### 데이터 형식

- 입력: DICOM, NIfTI, PNG (medical image)
- 출력: segmentation mask (NIfTI, PNG, numpy)
- 3D 볼륨 데이터 지원 필요

### preprocessing/postprocessing bundle

- nnU-Net은 model과 함께 preprocessing/postprocessing pipeline이 맞아야 한다
- MedSAM은 prompt (point, box, mask) 입력 처리 필요
- bundle 호환성은 model validation 시 확인

### 보안/격리

- 의료 데이터 특성상 exclusive mode 권장
- data residency policy 필수 확인
- external execution 제한 가능

## Runtime Contract 구현

- `can_accept`: runtime=medical, GPU 가용, exclusive mode 확인
- `prepare_model`: medical model + sidecar artifact 로드
- `prepare_inputs`: DICOM/NIfTI 전처리, prompt 파싱
- `execute`: segmentation 또는 training 실행
- `collect_metrics`: Dice score, Hausdorff distance 등
- `persist_outputs`: mask, metrics 저장
- `cleanup`: GPU 메모리 해제, 임시 볼륨 정리

## 실행 환경

- GPU 필수, exclusive mode 기본
- 대형 3D 모델은 높은 VRAM 요구 (24GB+)
- `medical-infer-pool`, `medical-train-pool`에서 실행
- CPU fallback 비권장

## v2 범위 (Phase 5)

- MedSAM / MedSAM2 inference
- nnU-Net inference + training
- 의료 데이터 전처리 pipeline
- exclusive mode 강제

## 관련 문서

- `runtime_contract.md`, `model_registry_and_byom.md`
