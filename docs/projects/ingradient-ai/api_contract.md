# ingradient-ai API Contract

## API 개요

AI Platform API는 단순 모델 호출 API가 아니라 job, worker, backend, model, alert 엔티티를 공통 언어로 다루는 control plane API다.

핵심 범위:

- training job 생성과 상태 추적
- inference job 생성과 결과 조회
- model / model version 등록과 상태 관리
- worker, node, GPU, queue 상태 조회
- logs, metrics, artifacts, attempts 조회
- ops console projection API

## 핵심 엔티티

### Job

모든 실행의 공통 단위다.

주요 필드:

- `job_id`
- `job_type`
- `task_type`
- `runtime`
- `queue_name`
- `status`
- `preferred_backend`
- `selected_backend`
- `execution_preference`
- `fallback_policy`
- `model_id`
- `model_version_id`
- `recipe_name`
- `created_at`, `started_at`, `finished_at`

### JobAttempt

한 job의 각 실행 시도 단위다.

주요 필드:

- `attempt_no`
- `worker_id`
- `node_id`
- `assigned_gpu_ids`
- `routing_reason`
- `failure_code`
- `peak_vram_mb`
- `runtime_ms`

### Model / ModelVersion

모델 메타와 버전 메타를 분리한다.

- `Model`
  - family, runtime, task, framework, lifecycle
- `ModelVersion`
  - source_type, usage_mode, validation_status, stage, artifact refs

### Worker / Node / GPUDevice

운영 콘솔과 스케줄링이 공유하는 자원 엔티티다.

## 주요 API 그룹

### 1. Job Submission API

예시 범위:

- training job 생성
- inference job 생성
- utility job 생성

응답 원칙:

- 생성 직후 `job_id`와 초기 상태를 반환
- 장시간 결과는 polling 가능한 job resource로 제공

### 2. Job Query API

예시 범위:

- job 목록 조회
- status별 필터
- runtime, model, queue, worker, requester 필터
- job 상세 조회

job 상세에는 최소 아래가 포함되어야 한다.

- summary
- timeline
- input / output artifacts
- attempt history
- runtime metrics
- backend routing
- error trace

### 3. Job Action API

예시 범위:

- cancel
- retry
- clone
- reprioritize
- requeue

원칙:

- destructive action은 audit trail을 남긴다
- 상태 전이 불가한 action은 명확한 conflict로 응답한다

### 4. Model Registry API

예시 범위:

- model 등록
- model version 조회
- validate version
- promote default or production
- rollback
- preload / unload 대상 조회

### 5. Resource API

예시 범위:

- node 목록과 health
- GPU 상태
- worker 상태
- queue 상태
- backend saturation

### 6. Event / Alert / Analytics API

- alert list
- critical event stream
- usage trend summary
- backend별 usage aggregation

## 인증 규칙

- upstream 제품 서비스 또는 운영 콘솔만 접근한다
- service-to-service 인증과 operator 인증을 구분한다
- project or tenant scope 조회는 caller scope를 명시해야 한다

## 에러 규칙

구분해야 하는 주요 오류:

- validation failure
- unsupported runtime / recipe
- backend policy conflict
- quota exceeded
- artifact access failure
- worker unavailable
- model compatibility failure

## 실시간성 규칙

강실시간이 필요한 영역:

- running job progress
- worker and GPU health
- queue backlog
- critical alerts

약실시간 또는 polling 기반:

- model registry lists
- historical analytics
- settings and policy views

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_data_model_and_api_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_model_version_lifecycle_plan.md`

