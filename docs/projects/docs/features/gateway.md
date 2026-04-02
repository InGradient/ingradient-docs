# Gateway

- 문서명: Gateway
- 목적: API 진입점으로서의 요청 수신, 검증, 인증, job record 생성 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `../architecture.md`

## 목적

Gateway는 AI Platform의 단일 API 진입점이다. 모든 외부 요청을 수신하고, 검증/인증을 거친 뒤 내부 서비스로 전달한다.

## 책임

- 외부 job request intake
- request schema validation
- auth / authz 연계 (auth-service 토큰 검증)
- idempotency key 처리
- 초기 job record 생성
- 요청을 orchestrator로 전달

## 비책임

- job 상태 전이 결정 (orchestrator 책임)
- GPU/worker 선택 (scheduler 책임)
- backend routing 정책 적용 (routing layer 책임)
- model artifact 관리 (model-registry 책임)

## 핵심 API

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/jobs` | Job 생성 (핵심 진입점) |
| `GET` | `/api/jobs` | Job 목록 조회 |
| `GET` | `/api/jobs/{job_id}` | Job 상세 조회 |
| `POST` | `/api/jobs/{job_id}/cancel` | Job 취소 |
| `POST` | `/api/jobs/{job_id}/retry` | Job 재시도 |
| `POST` | `/api/jobs/{job_id}/clone` | Job 복제 |
| `POST` | `/api/jobs/{job_id}/reprioritize` | 우선순위 변경 |

Gateway는 위 Job API 외에도 Model, Worker, Queue, Event, Analytics API를 모두 프록시한다. 전체 endpoint는 `../api_contract.md` 참조.

## Schema Validation

`POST /api/jobs` 필수 필드:

- `job_type` (training, inference, utility)
- `task_type` (object_detection, classification, segmentation 등)
- `runtime` (detection, foundation, medical, utility)
- `model_id` 또는 `model_name`
- `recipe_name`
- `resource_request` (gpu_count, vram_class, exclusive_mode)

선택 필드: `execution_preference`, `preferred_backend`, `fallback_policy`, `priority`, `idempotency_key`, `input_artifacts`

## Idempotency Key 처리

- `idempotency_key`가 있으면 동일 key 중복 요청 시 기존 job 반환
- key 유효 기간: TBD (최소 24시간 권장)
- key 없으면 매 요청마다 새 job 생성

## 인증 흐름

1. 요청 header에서 auth token 추출
2. auth-service에 토큰 검증 요청
3. caller의 scope (project, tenant) 확인
4. 필요 auth scope 충족 여부 검증 (예: `jobs.write`)
5. scope 미충족 시 `403 forbidden` 반환

service-to-service 인증과 operator 인증을 구분한다.

## 응답 규칙

- 성공: `{ "data": {}, "meta": { "request_id", "api_version" } }`
- 에러: `{ "error": { "code", "message", "details", "retryable" }, "meta": {...} }`
- cursor pagination (기본 limit=50, 최대 200)
- optimistic lock: `version`/`etag` + `If-Match` → `409 version_conflict`

## 에러 분류

| 코드 | 발생 시점 |
|------|-----------|
| `validation_error` | 필수 필드 누락, 타입 불일치 |
| `unauthorized` | 토큰 없음 또는 만료 |
| `forbidden` | scope 부족 |
| `conflict` | idempotency key 충돌 |
| `unsupported_runtime` | 미지원 runtime |

## v1 범위

- Job CRUD + action API (cancel, retry, clone, reprioritize)
- schema validation (필수 필드, enum 검증)
- auth-service 토큰 검증
- idempotency key 기본 처리
- 표준 응답 envelope + 에러 코드

## v1.5 이후

- rate limiting
- request throttling per tenant
- API versioning 확장

## 관련 문서

- `../api_contract.md`, `../architecture.md`, `auth_integration.md`
