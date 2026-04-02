# ingradient-ai API Contract

- 문서명: ingradient-ai API Contract
- 목적: AI Platform API의 endpoint, 인증, 응답 규칙, 에러 분류를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `data_model.md`, `architecture.md`

## API 개요

AI Platform API는 job, worker, backend, model, alert 엔티티를 공통 언어로 다루는 control plane API다.

## Auth Scope

| Scope | 설명 |
|-------|------|
| `jobs.read` / `jobs.write` | Job 조회 / 생성·액션 |
| `workers.read` / `workers.write` | Worker/Node/GPU 조회 / 액션 |
| `models.read` / `models.write` | Model/Version 조회 / 등록·액션 |
| `queues.read` / `queues.write` | Queue 조회 / 정책 변경 |
| `events.read` / `events.write` | Event/Alert 조회 / acknowledge |
| `analytics.read` | Usage 통계 조회 |
| `settings.read` / `settings.write` | 설정 조회 / 동적 정책 수정 |

## 응답 Envelope

성공: `{ "data": {}, "meta": { "request_id", "api_version" } }`
목록: `{ "data": [], "meta": { ..., "pagination": { "next_cursor", "has_more", "total_count" } } }`
에러: `{ "error": { "code", "message", "details", "retryable" }, "meta": { ... } }`

## 공통 Query 규칙

- cursor pagination (기본 `limit=50`, 최대 200)
- 시간 범위: `from`, `to` (ISO8601 UTC)
- 다중 필터: comma-separated
- 기본 정렬: `created_at desc`
- optimistic lock: `version`/`etag` + `If-Match` → `409 version_conflict`

## Gateway API (Jobs)

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/jobs` | Job 생성 |
| `GET` | `/api/jobs` | Job 목록 (필터: status, runtime, model, queue, worker, priority, requester) |
| `GET` | `/api/jobs/{job_id}` | Job 상세 (current job + latest attempt + projections) |
| `POST` | `/api/jobs/{job_id}/cancel` | 취소 |
| `POST` | `/api/jobs/{job_id}/retry` | 재시도 |
| `POST` | `/api/jobs/{job_id}/clone` | 복제 |
| `POST` | `/api/jobs/{job_id}/reprioritize` | 우선순위 변경 |

`POST /api/jobs` 핵심 필드: `job_type`, `task_type`, `runtime`, `model_id`, `model_version_id`, `recipe_name`, `resource_request`, `input_artifacts`, `execution_preference`, `preferred_backend`, `fallback_policy`, `priority`, `idempotency_key`

## Queue API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/queues` | Queue 목록 |
| `GET` | `/api/queues/{queue_name}` | Queue 상세 |
| `POST` | `/api/queues/{queue_name}/pause` | 일시정지 |
| `POST` | `/api/queues/{queue_name}/resume` | 재개 |
| `POST` | `/api/queues/{queue_name}/concurrency` | 동시성 변경 |

## Worker / Node / GPU API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/nodes` | Node 목록 |
| `GET` | `/api/nodes/{node_id}` | Node 상세 |
| `GET` | `/api/gpus` | GPU 목록 |
| `GET` | `/api/workers` | Worker 목록 |
| `GET` | `/api/workers/{worker_id}` | Worker 상세 |
| `GET` | `/api/backends` | Backend 목록 |
| `GET` | `/api/backends/{backend_id}` | Backend 상세 |
| `POST` | `/api/workers/{worker_id}/restart` | Worker 재시작 |
| `POST` | `/api/workers/{worker_id}/drain` | Worker drain |
| `POST` | `/api/nodes/{node_id}/cordon` | Node cordon |

## Model API

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/models/register` | Model 등록 (`model_name`, `runtime`, `task_type`, `framework`, `adapter_type`) |
| `GET` | `/api/models` | Model 목록 (필터: runtime, task_type, lifecycle_status 등) |
| `GET` | `/api/models/{model_id}` | Model 상세 |
| `GET` | `/api/models/{model_id}/versions` | Version 목록 |
| `GET` | `/api/models/{model_id}/versions/{version_id}` | Version 상세 |
| `POST` | `/api/models/{model_id}/versions` | Version 생성 |
| `POST` | `.../versions/{version_id}/artifacts` | Artifact 첨부 |
| `POST` | `.../versions/{version_id}/validate` | 검증 실행 |
| `POST` | `.../versions/{version_id}/promote-default` | 기본 버전 승격 |
| `POST` | `.../versions/{version_id}/promote-production` | 운영 버전 승격 |
| `POST` | `.../versions/{version_id}/rollback` | Rollback |
| `POST` | `.../versions/{version_id}/preload` | Preload 요청 |
| `POST` | `.../versions/{version_id}/unload` | Unload 요청 |
| `POST` | `.../versions/{version_id}/disable` | 비활성화 |
| `POST` | `.../versions/{version_id}/archive` | 아카이브 |

## Events / Analytics API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/events` | Event 목록 (필터: severity, source_type, event_type, status) |
| `POST` | `/api/events/{event_id}/acknowledge` | Event 확인 |
| `GET` | `/api/analytics/usage` | Usage 통계 |
| `GET` | `/api/analytics/queues` | Queue 분석 |
| `GET` | `/api/analytics/models` | Model 분석 |
| `GET` | `/api/overview` | Overview projection |

## 실시간 이벤트 스트림 (SSE)

이벤트 타입: `job.created`, `job.started`, `job.succeeded`, `job.failed`, `worker.heartbeat`, `worker.status_changed`, `gpu.metrics_updated`, `model.loaded`, `queue.backlog_changed`, `alert.opened`, `alert.resolved`

topic 기반 subscribe: `overview`, `jobs`, `workers`, `queues`, `alerts`
reconnect 시 마지막 `event_id` 이후 재동기화

## 표준 에러 코드

| 코드 | 의미 |
|------|------|
| `validation_error` | 입력 검증 실패 |
| `unauthorized` / `forbidden` | 인증/권한 부족 |
| `not_found` | 리소스 없음 |
| `conflict` / `version_conflict` | 상태 충돌 / optimistic lock |
| `invalid_state_transition` | 허용되지 않는 상태 전이 |
| `unsupported_runtime` / `unsupported_model` | 미지원 런타임/모델 |
| `artifact_access_failed` | Artifact 접근 실패 |
| `provider_unavailable` | 외부 provider 불가 |
| `rate_limited` | 요청 제한 |

## 인증 규칙

- upstream 제품 서비스 또는 운영 콘솔만 접근
- service-to-service 인증과 operator 인증 구분
- project/tenant scope 조회 시 caller scope 명시 필수

## 감사 로그 대상

job priority 변경, job 강제 취소, queue pause/resume, worker restart/drain, model preload/unload/disable, settings 수정
