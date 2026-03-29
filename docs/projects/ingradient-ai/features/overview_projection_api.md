# Overview Projection API

- 문서명: Overview Projection API
- 목적: Ops Console Overview 페이지를 위한 집계 projection API를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `ops_console.md`

## 목적

Overview 페이지는 전체 시스템 건강 상태를 10초 안에 파악해야 한다. 이를 위해 여러 엔티티의 상태를 사전 집계한 projection API를 제공한다.

## API

`GET /api/overview`

## OverviewSummary

| 필드 | 설명 |
|------|------|
| active_jobs | 현재 실행 중인 job 수 |
| queued_jobs | 대기 중인 job 수 |
| healthy_gpu_count | 건강한 GPU 수 |
| total_gpu_count | 전체 GPU 수 |
| running_workers | 실행 중인 worker 수 |
| loaded_models | 로드된 모델 수 |
| error_jobs_last_hour | 최근 1시간 실패 job 수 |
| avg_queue_wait_ms | 평균 대기 시간 |
| avg_gpu_utilization_pct | 평균 GPU 사용률 |

## QueueSummary

| 필드 | 설명 |
|------|------|
| queue_name | queue 이름 |
| backend_type | 연결된 backend |
| queued_count | 대기 수 |
| running_count | 실행 수 |
| avg_wait_ms | 평균 대기 시간 |
| p95_wait_ms | p95 대기 시간 |
| head_of_line_blocking | HOL blocking 여부 |
| scheduler_reject_reason_counts | 스케줄러 거부 사유 분포 |

## WorkerSummary

| 필드 | 설명 |
|------|------|
| worker_id | worker ID |
| runtime | runtime 유형 |
| status | 현재 상태 |
| active_job_id | 실행 중인 job |
| loaded_model_count | 로드된 모델 수 |
| assigned_gpu_ids | 할당된 GPU |
| recent_oom_count | 최근 OOM 횟수 |

## BackendSummary

| 필드 | 설명 |
|------|------|
| backend_id | backend ID |
| backend_type | backend 유형 |
| status | 현재 상태 |
| execution_mode | 실행 모드 |
| estimated_wait_ms | 예상 대기 시간 |
| queued_jobs | 대기 job 수 |
| running_jobs | 실행 job 수 |

## 비정상 상태 강조

Overview API 응답에 아래 이상 징후를 포함:

| 징후 | 조건 |
|------|------|
| `backlog_spike` | queue wait time이 warning threshold 초과 |
| `no_heartbeat_detected` | heartbeat 없는 node/worker 존재 |
| `error_jobs_spike` | 최근 1시간 실패율 급증 |
| `repeated_oom` | OOM burst 감지 |
| `gpu_overheat` | GPU 온도 warning 초과 |

## 실시간 갱신

- Overview는 강실시간 대상 (SSE로 갱신)
- KPI 값 변화 시 `overview.kpi_changed` 이벤트
- 클라이언트는 REST snapshot + SSE patch로 최신 상태 유지

## Ops Console 연동

- KPI row: OverviewSummary의 각 필드를 KPI Card로 표시
- KPI 클릭 → 해당 필터가 적용된 상세 페이지 이동 (예: error_jobs → Jobs Failed 탭)
- GPU/worker 요약: WorkerSummary
- Queue 상태 카드: QueueSummary

## v1 범위

- OverviewSummary, QueueSummary, WorkerSummary, BackendSummary
- 비정상 상태 강조 기본 구현
- SSE 연동

## v1.5 이후

- 시간대별 trend 미니 차트 데이터
- 커스텀 KPI 구성

## 관련 문서

- `../api_contract.md`, `ops_console.md`, `sse_realtime.md`, `../operations.md`
