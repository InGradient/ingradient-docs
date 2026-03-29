# Recipe Management

- 문서명: Recipe Management
- 목적: Runtime + task 조합의 실행 정의(recipe)를 등록, 관리, 호환성 검증하는 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../architecture.md`, `../api_contract.md`

## 목적

Recipe는 특정 runtime + task_type 조합에서 "어떻게 실행할지"를 정의한다. Job 생성 시 `recipe_name`은 필수 필드이며, recipe가 model, runtime, adapter와 호환되는지 검증해야 한다.

## Recipe란

| 구성 요소 | 설명 |
|-----------|------|
| recipe_name | 고유 식별자 (예: `yolo-infer`, `medsam2-prompt-infer`, `ltdetr-train`) |
| recipe_version | 버전 (예: `1.0.0`) |
| runtime | 실행 runtime (detection, foundation, medical, utility) |
| task_type | 실행 태스크 (object_detection, segmentation, preprocessing 등) |
| adapter_type | 사용 adapter (ultralytics, medsam, nnu-net 등) |
| execution_config | 실행 설정 (batch_size, epochs, learning_rate 등 기본값) |
| input_schema | 필요 입력 형식 |
| output_schema | 출력 형식 |

## Recipe 유형

| 유형 | 예시 | 설명 |
|------|------|------|
| inference | `yolo-infer`, `medsam2-prompt-infer` | 모델 추론 실행 |
| training | `yolo-train`, `ltdetr-train` | 모델 학습 실행 |
| fine-tuning | `yolo-finetune`, `nnu-net-finetune` | 기존 모델 fine-tuning |
| resume | `yolo-resume`, `nnu-net-resume` | 중단된 학습 재개 |
| utility | `preprocess-images`, `export-coco` | 전처리/내보내기 |

## 호환성 매트릭스

Recipe는 아래와 호환되어야 한다:

- **Runtime**: recipe의 runtime과 worker의 runtime 일치
- **Adapter**: recipe의 adapter_type과 model의 adapter_type 일치
- **Model**: model의 framework, task_type과 recipe의 것이 호환
- **Backend**: recipe가 지원하는 backend 목록 확인

## CPU 실행 메타데이터

Recipe별로 CPU 실행 가능 여부를 관리한다:

| 필드 | 설명 |
|------|------|
| `supports_cpu_inference` | CPU 추론 가능 여부 |
| `supports_gpu_inference` | GPU 추론 가능 여부 |
| `recommended_execution_mode` | 권장 실행 모드 |
| `expected_cpu_latency_ms` | 예상 CPU 실행 시간 |
| `expected_gpu_latency_ms` | 예상 GPU 실행 시간 |
| `cpu_memory_requirement_mb` | CPU 메모리 요구 |
| `gpu_vram_requirement_mb` | GPU VRAM 요구 |

이 메타데이터는 execution_routing의 CPU fallback 판단에 사용된다.

## Job 생성 시 검증

1. `recipe_name`이 존재하는 recipe인지
2. recipe의 runtime과 job의 runtime이 일치하는지
3. recipe의 adapter_type과 model의 adapter_type이 호환되는지
4. `base_checkpoint_ref`와 `resume_from_model_ref` 규칙 준수
   - 동시 활성화 금지
   - resume는 `usage_mode=resume_trainable` 모델만
5. resource_request가 recipe의 요구사항을 충족하는지

## 등록 / 관리

- v1에서는 code-level로 recipe 정의 (version-controlled config)
- recipe 목록은 정적으로 관리 (DB가 아닌 config file)
- v1.5 이후 동적 recipe 등록 검토

## v1 범위

- 정적 recipe 정의 (detection: YOLO, LTDETR / utility: preprocess, export)
- Job 생성 시 recipe 호환성 검증
- CPU 실행 메타데이터 기본 관리
- recipe_name, recipe_version Job 필드 기록

## v1.5 이후

- 동적 recipe 등록 API
- recipe versioning
- recipe 성능 프로파일링 연동

## 관련 문서

- `../architecture.md`, `../api_contract.md`, `execution_routing.md`, `model_registry_and_byom.md`
