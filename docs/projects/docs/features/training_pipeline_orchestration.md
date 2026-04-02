# Training Pipeline Orchestration

- 문서명: Training Pipeline Orchestration
- 목적: multi-step 학습 파이프라인의 생성, 실행, 모니터링, step 간 자동 연결을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `model_training_combinations.md`, `model_training_pipelines.md`, `job_lifecycle.md`, `recipe_management.md`

## 목적

backbone 사전학습 → downstream detection처럼 여러 학습 단계를 하나의 파이프라인으로 묶어 관리한다. 개별 Job 수동 생성 대신, **pipeline을 정의하면 step 간 연결과 순차 실행을 플랫폼이 처리**한다.

## Pipeline 엔티티

### 필드

| 필드 | 설명 |
|------|------|
| pipeline_id | 고유 ID |
| name | 파이프라인 이름 |
| status | draft / running / completed / failed / partially_completed / cancelled |
| steps | Step 목록 (순서 보장) |
| created_by | 생성자 |
| created_at | 생성 시각 |
| updated_at | 마지막 갱신 시각 |

### Status 전이

```
draft → running → completed
                → failed
                → partially_completed (일부 step만 성공)
                → cancelled
```

- `draft`: 생성만 하고 실행하지 않은 상태. step 편집 가능
- `running`: 하나 이상의 step이 실행 중
- `completed`: 모든 step 성공
- `failed`: 하나의 step이 실패하여 이후 step이 중단됨
- `partially_completed`: 일부 step 성공 + 일부 미실행 (수동 중단 등)
- `cancelled`: 사용자가 실행을 취소함

## Step 엔티티

### 필드

| 필드 | 설명 |
|------|------|
| step_id | 고유 ID |
| pipeline_id | 소속 pipeline |
| order | 실행 순서 (0-based) |
| name | step 이름 |
| status | pending / running / completed / failed / skipped |
| recipe_name | 사용할 recipe |
| runtime | 실행 runtime |
| model_id | 대상 model |
| base_checkpoint_ref | 초기 checkpoint — `previous_step_output` 또는 특정 model version ID |
| input_artifacts | 입력 데이터 URI 목록 |
| execution_config | GPU count, VRAM class, priority 등 |
| job_id | 실행된 Job ID (실행 후) |
| output_model_version_id | 산출물 ModelVersion ID (완료 후) |
| started_at | 실행 시작 시각 |
| finished_at | 실행 완료 시각 |
| error | 실패 시 에러 정보 |

### Step 간 자동 연결

step의 `base_checkpoint_ref`가 `previous_step_output`이면:
1. 이전 step 완료 시 `output_model_version_id`를 확인한다
2. 다음 step의 Job 생성 시 `base_checkpoint_ref`에 해당 model version ID를 자동 지정한다
3. 이전 step이 실패하면 이후 step은 실행하지 않는다

## 실행 흐름

### Pipeline 생성

1. 사용자가 이름 + step 목록을 정의한다
2. 각 step에 recipe, model, input artifacts, execution 설정을 입력한다
3. step 간 연결 방식을 지정한다 (이전 step 산출물 / 직접 선택 / 없음)
4. `Save as Draft` (저장만) 또는 `Save & Run` (저장 + 즉시 실행)

### Pipeline 실행

1. 첫 번째 pending step의 Job을 생성한다
2. Job이 완료되면 산출물을 ModelVersion으로 registry에 등록한다
3. 다음 step의 `base_checkpoint_ref`를 자동 연결하고 Job을 생성한다
4. 모든 step 완료 시 pipeline status → `completed`
5. step 실패 시 pipeline status → `failed`, 이후 step은 `pending` 유지

### 실패 후 재실행

1. 실패한 step의 설정을 수정한다 (Edit Step)
2. "Run"을 클릭하면 **실패한 step부터** 순차 재실행한다
3. 이전에 성공한 step의 산출물은 그대로 재사용한다

### 부분 실행

- "Run This Step": 특정 step만 단독 실행 (이전 step 산출물이 존재해야 함)
- "Run All": 처음부터 전체 재실행 (기존 산출물 무시)

## 템플릿

자주 사용하는 학습 조합을 템플릿으로 제공한다.

| 템플릿 | Step 구성 |
|--------|-----------|
| Lightly SSL → LTDETR Detection | `lightly-ssl-train` → `ltdetr-train` |
| Lightly Distillation → LTDETR Detection | `lightly-distill-train` → `ltdetr-train` |
| timm Backbone → LTDETR Detection | (backbone 등록) → `ltdetr-train` |
| Lightly SSL → Dinomaly | `lightly-ssl-train` → `dinomaly-train` |
| Lightly Distillation → Dinomaly | `lightly-distill-train` → `dinomaly-train` |

템플릿 선택 시 step 구성이 사전 입력되며, 사용자가 model/데이터셋/설정을 채운다.

## Job과의 관계

- Pipeline의 각 step은 실행 시 독립적인 Job으로 생성된다
- Job에 `pipeline_id`, `step_id` 필드가 추가된다
- Jobs 페이지에서 pipeline 소속 여부를 Pipeline 컬럼으로 확인할 수 있다
- Job detail drawer에서 소속 pipeline 링크로 이동할 수 있다

## Model Registry와의 관계

- 각 step의 산출물은 ModelVersion으로 자동 등록된다
- ModelVersion의 `training_job_id`로 step의 Job에 연결된다
- Models detail의 Lineage 시각화에서 pipeline 전체 흐름이 표시된다

## v1 범위

- Pipeline CRUD (생성, 조회, 수정, 삭제)
- Step 순차 실행 + 자동 연결
- 실패 후 재실행
- 템플릿 기본 제공
- Jobs/Models 연결

## v2 이후

- 분기 파이프라인 (step A → step B + step C 동시)
- 스케줄 실행 (주기적 재학습)
- 파이프라인 버전 관리
- 외부 트리거 (API/webhook으로 실행)

## 관련 문서

- `model_training_combinations.md` — 학습 조합 정의
- `model_training_pipelines.md` — 학습 파이프라인 흐름 상세
- `job_lifecycle.md` — Job 상태 머신
- `recipe_management.md` — Recipe 호환성
- `model_registry_and_byom.md` — 산출물 등록, lineage
