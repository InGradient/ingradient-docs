# Telemetry Pipeline

- 문서명: Telemetry Pipeline
- 목적: Metrics, logs, traces 수집 파이프라인과 관측 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../operations.md`, `../deployment.md`

## 목적

AI Platform의 모든 서비스와 worker에서 메트릭, 로그, 이벤트를 수집하여 운영 판단과 장애 추적을 지원한다.

## 수집 대상

### Control Plane Logs

- gateway: request/response, validation errors, auth failures
- orchestrator: state transitions, retry decisions, event publishing
- model-registry: model/version CRUD, validation results
- ops-console: user actions, page loads

### Execution Worker Logs

- runtime별 실행 로그 (training progress, inference result)
- GPU metrics (utilization, VRAM, temperature, power)
- heartbeat 기록
- OOM, crash, error 상세

### Job-Level Metrics

| 메트릭 | 설명 |
|--------|------|
| queue_wait_ms | 대기 시간 |
| runtime_ms | 실행 시간 |
| peak_vram_mb | 최대 VRAM 사용량 |
| gpu_utilization_avg | 평균 GPU 사용률 |
| loss, accuracy, mAP | 학습 메트릭 (training job) |

### Infrastructure Metrics

| 메트릭 | 설명 |
|--------|------|
| node_cpu_usage | Node CPU 사용률 |
| node_memory_usage | Node 메모리 사용률 |
| gpu_temperature | GPU 온도 |
| storage_latency | Object storage 접근 지연 |
| redis_queue_depth | Redis queue 깊이 |

## 기술 스택

- App instrumentation: OpenTelemetry-compatible
- Infra monitoring: GCP Cloud Logging / Cloud Monitoring
- Local dev: stdout/stderr + Docker logs

## Job Attempt History

모든 job attempt에 아래를 기록:

- worker_id, node_id, assigned_gpu_ids
- selected_backend, routing_reason, routing_reason_code
- result_status, failure_code, failure_message
- peak_vram_mb, runtime_ms
- started_at, finished_at

이 기록은 ops console의 Job 상세 drawer에서 조회 가능.

## Log 구조화

| 필드 | 설명 |
|------|------|
| timestamp | ISO8601 UTC |
| service | gateway, orchestrator, worker-detection 등 |
| level | debug, info, warn, error |
| correlation_id | 요청 추적 ID |
| job_id, worker_id | 관련 엔티티 |
| message | 로그 메시지 |

## Artifact Reference 저장

- 실행 결과 artifact는 immutable reference로 저장
- artifact_id, storage_uri, checksum, created_at
- lineage: job → attempt → artifact

## v1 범위

- OpenTelemetry 기본 instrumentation (control plane)
- worker heartbeat + GPU metrics 수집
- job attempt history 저장
- structured logging (correlation_id)
- GCP Cloud Logging 연동

## v1.5 이후

- distributed tracing (cross-service)
- custom metrics dashboard
- log aggregation + search
- metrics retention policy

## 관련 문서

- `../operations.md`, `../deployment.md`, `alert_event_system.md`
