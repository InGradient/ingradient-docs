# Job Lifecycle

- 문서명: Job Lifecycle
- 목적: Job 상태 머신, Attempt 분리, retry/cancel 정책, event 발행 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../data_model.md`, `../api_contract.md`

## 목적

Orchestrator가 관리하는 Job lifecycle은 AI Platform의 핵심이다. training, inference, utility 모든 job이 동일한 상태 모델을 따른다.

## Job 상태 머신

### 정상 흐름

`created → queued → scheduled → preparing → running → succeeded`

### 실패 / 취소 / 타임아웃

| 전이 | 조건 |
|------|------|
| `running → failed` | 실행 중 에러 |
| `queued → cancelled` | 대기 중 취소 |
| `running → cancel_requested → cancelled` | 실행 중 취소 |
| `running → timed_out` | max_runtime_sec 초과 |
| `failed → queued` | retry 정책에 의한 재시도 |
| `failed → dead_letter` | retry 소진 |

### 전체 상태 (11개)

`created`, `queued`, `scheduled`, `preparing`, `running`, `succeeded`, `failed`, `cancel_requested`, `cancelled`, `timed_out`, `dead_letter`

## JobAttempt 분리

- 하나의 Job이 여러 번 실행될 수 있으므로 시도 단위를 분리한다
- retry 시 새 `JobAttempt` 생성 (attempt_no 증가)
- 각 attempt에 독립적인 worker, GPU, routing, 결과 기록

### JobAttempt 핵심 필드

- `job_id`, `attempt_no` (복합 PK)
- `worker_id`, `node_id`, `assigned_gpu_ids` (실행 자원)
- `selected_backend`, `routing_reason`, `routing_reason_code` (라우팅)
- `result_status`, `failure_code`, `failure_message` (결과)
- `peak_vram_mb`, `runtime_ms` (메트릭)

## Job 유형

| job_type | 설명 | 대표 사용처 |
|----------|------|-------------|
| `training` | 모델 학습 | YOLO training, MedSAM fine-tuning |
| `inference` | 모델 추론 | object detection, segmentation |
| `utility` | 전처리/후처리 | preprocessing, export, report |

## Orchestrator 책임

- Job 상태 전이 관리
- queue에 job 적재 (queued)
- scheduler에 스케줄링 요청 (scheduled → preparing)
- worker 실행 완료 수신 (succeeded / failed)
- retry 판단 및 재적재
- event 발행 (job.created, job.started, job.succeeded, job.failed 등)

## Retry 정책

- retry 가능 조건: `failure_code`가 retryable
- 최대 retry 횟수: job 설정 또는 기본값
- retry 간 backoff: TBD
- 동일 조건 즉시 무한 재시도 금지 (OOM 등)
- retry 소진 시 `dead_letter` 전이

## Cancel 정책

- `queued` 상태: 즉시 `cancelled`
- `running` 상태: `cancel_requested` → worker에 cancel signal → `cancelled`
- 실행 중인 attempt는 graceful shutdown 시도
- cancel은 audit log 기록

## Event 발행

Job 상태 전이마다 이벤트 발행:

- `job.created`, `job.queued`, `job.scheduled`
- `job.started`, `job.progress`
- `job.succeeded`, `job.failed`
- `job.cancel_requested`, `job.cancelled`
- `job.timed_out`, `job.dead_letter`

이벤트는 SSE로 ops console에 전달. 상세는 `sse_realtime.md` 참조.

## Job 생성 시 검증

1. model_id/model_version_id가 유효하고 `ready` 상태인지
2. recipe_name이 runtime과 호환되는지
3. resource_request가 합리적 범위인지
4. input_artifacts가 접근 가능한지 (선택적 사전 검증)

## v1 범위

- Job 생성 (training, inference, utility)
- 11개 상태 전이
- JobAttempt 분리 + retry
- cancel (queued + running)
- idempotency key
- 기본 event 발행

## v1.5 이후

- scheduled job (예약 실행)
- job dependency chain
- priority preemption

## 관련 문서

- `../data_model.md`, `../api_contract.md`, `training_scheduler.md`, `execution_routing.md`
