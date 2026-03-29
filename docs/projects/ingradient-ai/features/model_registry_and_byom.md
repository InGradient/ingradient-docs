# Model Registry And BYOM

- 문서명: Model Registry And BYOM
- 목적: 모델 등록, 검증, 버전 관리, BYOM 허용 범위를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `../data_model.md`, `../api_contract.md`

## 목적

AI Platform은 내부 학습 모델, 외부 업로드 모델, pretrained checkpoint, provider-managed 모델을 공용 실행 자산으로 등록, 검증, 재사용한다.

## 지원 모델 유형

| source_type | 설명 | 예시 |
|-------------|------|------|
| `internal_trained` | 플랫폼 내부 학습 결과 | YOLO, MedSAM, LTDETR 학습 결과 |
| `external_uploaded` | 외부 환경에서 준비된 weight | 기존 YOLO weight, segmentation checkpoint |
| `foundation_pretrained` | pretrained backbone/checkpoint | DINOv3, ImageNet pretrained |
| `provider_managed` | 외부 provider가 관리하는 모델 | Vertex AI endpoint |

## 사용 모드 (usage_mode)

| 모드 | 설명 | 조건 |
|------|------|------|
| `inference_only` | 추론만 가능 | serving artifact 완전 |
| `fine_tunable` | fine-tuning 가능 | backbone/weight 존재 |
| `resume_trainable` | 학습 재개 가능 | optimizer, scheduler, epoch/step state 존재 |

## Registry 구조

### Model → ModelVersion → ModelArtifact

- **Model**: 논리적 모델 family (운영자가 선택하는 상위 엔티티)
- **ModelVersion**: 개별 weight/checkpoint 버전 (승격/rollback/validation 대상)
- **ModelArtifact**: 실제 파일 또는 bundle

### 운영 포인터

Model에 아래 포인터를 분리 관리한다. 버전 상태와 혼동하지 않는다.

- `default_version_id`: 기본 추론 버전
- `production_version_id`: 운영 확정 버전
- `latest_version_id`: 최신 등록 버전

## ModelVersion Lifecycle

### 상태 전이

`uploaded → registered → validating → validated → ready → deprecated/disabled/archived`

오류 경로: `registered → error`, `validating → error`

### lifecycle_status (9개)

`uploaded`, `registered`, `validating`, `validated`, `ready`, `deprecated`, `disabled`, `archived`, `error`

### validation_status (6개)

`not_requested`, `pending`, `running`, `passed`, `failed`, `warning`

### release_channel

`none`, `staging`, `experimental`

## 검증 규칙

모델 등록 시 validator가 확인하는 항목:

1. artifact 존재 여부
2. checksum 일치
3. framework/runtime 호환성
4. minimal model load test
5. optional sample inference test
6. metadata completeness

resume의 경우 추가 확인: optimizer state, scheduler state, epoch/step state

## 등록 메타데이터 최소 기준

- model_name, version_label, runtime, task_type, framework, adapter_type
- source_type, usage_mode, artifact_uri, checksum
- input_schema, output_schema
- base_checkpoint_ref, parent_model_ref
- inference_capable, fine_tuning_capable, resume_capable

## 핵심 시나리오

### A. 외부 모델 업로드 → 추론

1. artifact upload 또는 external storage ref 등록
2. metadata 입력 + checksum 검증
3. adapter compatibility validation
4. `ready` 전환 후 inference job에서 선택 가능

### B. 기존 모델을 base checkpoint로 재학습

1. registry 모델 선택
2. training job에서 `base_checkpoint_ref`로 지정
3. recipe가 fine-tuning 또는 resume mode로 실행

### C. 내부 학습 결과 → 새 버전 등록

1. training job 완료 → best checkpoint 선택
2. 기존 model family에 새 `ModelVersion`으로 연결
3. lineage에 `training_job_id`, `base_checkpoint_ref` 반영

### D. 승격과 rollback

- 승격: `validated`/`ready` 버전만 `Promote to Default`/`Promote to Production` 가능
- rollback: 1-click, 실행 중인 job은 기존 version 유지, 새 job부터 새 version 적용
- 모든 승격/rollback은 audit trail 기록

## 운영 규칙

- artifact overwrite 금지 → 항상 새 ModelVersion 생성
- validator 확인 전까지 바로 serving 투입 금지
- lineage 추적 필수 (previous_version, base_checkpoint, training_job)
- overwrite처럼 보이는 UI 라벨 금지

## BYOM 허용 범위

| 허용 | 비허용 |
|------|--------|
| 지원 adapter가 이해하는 weight 포맷 | 임의 Python code가 동봉된 custom execution bundle |
| 지원 runtime이 로드 가능한 모델 자산 | 검증되지 않은 arbitrary runtime injection |
| 명시된 schema와 메타데이터를 갖춘 등록 | 포맷 불명확한 checkpoint 자동 인식 |

## v1 범위

### 지원 모델

- Detection: YOLO, LTDETR
- Medical: MedSAM / MedSAM2, nnU-Net
- Foundation: DINOv3 계열 backbone

### v1 액션

- version history 조회, Upload New Version, Register Artifact
- Validate Version, Promote to Default, Rollback

### v1.5 추가

- Promote to Production, staging/experimental 라벨
- internal training result 직접 연결, preload refresh 연동

### v2 추가

- canary/percentage rollout, backend별 version pinning
- scheduled promotion, approval workflow

## UI 요구사항

- Models 상세: current default/production version, validation summary, rollback candidates
- 버전 테이블: version, status, validation_status, source_type, created_at, artifact size
- 탭 구조: Available Models, Installed Models, Loaded Models
- destructive action은 confirmation + 영향 범위 요약

## 관련 문서

- `../data_model.md`, `../api_contract.md`
