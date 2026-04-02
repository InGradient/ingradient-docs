# Backend Health Monitoring

- 문서명: Backend Health Monitoring
- 목적: Backend별 status, pressure, quota 모니터링 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `execution_routing.md`, `../data_model.md`, `../operations.md`

## 목적

AI Platform은 7종의 backend를 지원한다. 각 backend의 건강 상태, 부하 수준, quota 잔여량을 추적하여 routing과 overflow 판단을 지원한다.

## Backend 엔티티

| 필드 | 설명 |
|------|------|
| backend_id | PK |
| backend_type | self_hosted, gke_gpu, gke_cpu, vertex_custom_job, vertex_batch_prediction, vertex_endpoint, managed_batch |
| execution_mode | gpu, cpu, managed |
| status | healthy, degraded, saturated, maintenance, quota_exceeded, unavailable |
| estimated_wait_ms | 예상 대기 시간 |
| queued_jobs | 대기 중 job 수 |
| running_jobs | 실행 중 job 수 |
| quota_remaining | 잔여 quota (managed backend) |
| last_health_check_at | 마지막 health check |

## Status 정의

| 상태 | 의미 | 라우팅 영향 |
|------|------|-----------|
| `healthy` | 정상 운영 | 기본 후보 |
| `degraded` | 일부 제한 | 주의 후보 |
| `saturated` | 과부하 | overflow 트리거 |
| `maintenance` | 점검 중 | 후보 제외 |
| `quota_exceeded` | 할당량 초과 (managed) | 후보 제외 |
| `unavailable` | 접근 불가 | 후보 제외 |

## Health Check

### Self-Hosted Backend

- worker heartbeat 집계로 판단
- healthy worker 비율, GPU 가용률, queue depth
- 10분 평균 utilization 85% → warning, 95% → critical

### Managed Backend (Vertex AI 등)

- API health check 주기적 실행
- quota 잔여량 확인
- latency 측정
- 에러율 추적

## Pressure 모델

| 지표 | 계산 |
|------|------|
| utilization | running_jobs / capacity |
| queue_pressure | queued_jobs / throughput_rate |
| estimated_wait | queued_jobs * avg_runtime / concurrency |
| quota_pressure | 1 - (quota_remaining / quota_total) |

## Ops Console 표시

- Overview: BackendSummary (type, status, estimated_wait, queued/running)
- Workers & GPU: backend saturation summary
- Jobs: selected_backend 컬럼
- Analytics: backend별 job 수, self-hosted vs external 비율

## Alert

| Signal | Warning | Critical |
|--------|---------|----------|
| utilization | 10분 avg 85% | 10분 avg 95% |
| quota_remaining | 20% 이하 | 5% 이하 |
| health_check_fail | 연속 2회 | 연속 5회 |

## v1 범위

- self-hosted backend status 추적 (worker 집계 기반)
- Backend 목록/상세 API
- Ops Console BackendSummary
- saturation alert

## v1.5 이후

- Managed backend health check
- quota tracking
- backend 성능 이력

## 관련 문서

- `execution_routing.md`, `overflow_policy_engine.md`, `../operations.md`
