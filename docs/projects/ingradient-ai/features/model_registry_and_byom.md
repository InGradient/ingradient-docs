# Model Registry And BYOM

## 목적

AI Platform은 내부 학습 모델만이 아니라 외부 업로드 모델과 pretrained checkpoint까지 공용 실행 자산으로 등록, 검증, 재사용해야 한다. 이 문서는 그 기준을 정리한다.

## 지원 대상

- 내부 학습 모델
- 외부 업로드 모델
- foundation/pretrained checkpoint
- provider-managed 모델

## 핵심 엔티티

- `Model`
- `ModelVersion`
- `ModelArtifact`

## source type

- `internal_trained`
- `external_uploaded`
- `foundation_pretrained`
- `provider_managed`

## usage mode

- `inference_only`
- `fine_tunable`
- `resume_trainable`

## 등록 메타데이터 최소 기준

- model name
- version
- runtime
- task type
- framework
- adapter type
- source type
- usage mode
- artifact location
- checksum
- input/output schema
- validation status
- lifecycle status
- base checkpoint ref
- parent model ref

## 운영 규칙

- artifact overwrite는 허용하지 않는다.
- 새 weight/checkpoint는 항상 새 `ModelVersion`으로 등록한다.
- validator가 runtime/adapter 호환성을 확인하기 전까지 바로 serving에 올리지 않는다.
- lineage를 추적할 수 있어야 한다.

## v1 범위

- YOLO
- LTDETR
- MedSAM / MedSAM2
- nnU-Net
- DINOv3 계열 backbone

## 비허용 범위

- 무제한 arbitrary custom code execution
- runtime contract 없이 weight만 올려 운영에 바로 투입

## 관련 문서

- `../data_model.md`
- `../api_contract.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_model_registry_and_byom_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_model_version_lifecycle_plan.md`
