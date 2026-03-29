# Worker / Node / GPU Management

- 문서명: Worker / Node / GPU Management
- 목적: Worker, Node, GPU 상태 관리, heartbeat, 운영 액션을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../data_model.md`, `../api_contract.md`, `../operations.md`

## 목적

Worker, Node, GPU는 AI Platform의 실행 자원이다. 상태 모니터링, heartbeat, 운영 액션(cordon/drain/restart)을 통해 안정적인 자원 운영을 지원한다.

## 엔티티 계층

```
Node (물리 서버/VM)
  └── GPUDevice (개별 GPU)
  └── Worker (queue consumer, runtime executor)
        └── active_job_id, loaded_models
```

## Node

| 필드 | 설명 |
|------|------|
| node_id, hostname | 식별 |
| environment, region | 배포 환경 |
| total_gpu_count, total_cpu, total_ram_mb | 자원 |
| status | healthy, degraded, no_heartbeat, maintenance, draining |
| last_heartbeat_at, schedulable | 운영 상태 |

## GPUDevice

| 필드 | 설명 |
|------|------|
| gpu_id, node_id, device_index | 식별 |
| model_name (GPU 모델), total_vram_mb | 사양 |
| committed_vram_mb, reserved_vram_mb | 사용량 |
| utilization_pct, temperature_c, power_draw_w | 메트릭 |
| health_status, sharing_mode | 상태 |

## Worker

| 필드 | 설명 |
|------|------|
| worker_id, runtime, worker_type | 식별 |
| node_id, assigned_gpu_ids | 자원 매핑 |
| status | starting, healthy, idle, busy, degraded, oom_recent, draining, maintenance, stopped |
| active_job_id, loaded_models | 실행 상태 |
| queue_affinity, version | 설정 |
| restart_count, last_heartbeat_at | 운영 |

## Heartbeat 프로토콜

- Worker: 5-10초 간격으로 heartbeat 전송
- 포함: worker_id, status, active_job_id, loaded_models, GPU metrics
- no heartbeat: worker 15초(warning), 45초(critical)
- no heartbeat: node 30초(warning), 90초(critical)

## API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/nodes` | Node 목록 |
| `GET` | `/api/nodes/{node_id}` | Node 상세 |
| `GET` | `/api/gpus` | GPU 목록 |
| `GET` | `/api/workers` | Worker 목록 |
| `GET` | `/api/workers/{worker_id}` | Worker 상세 |
| `GET` | `/api/backends` | Backend 목록 |
| `POST` | `/api/workers/{worker_id}/restart` | Worker 재시작 |
| `POST` | `/api/workers/{worker_id}/drain` | Worker drain |
| `POST` | `/api/nodes/{node_id}/cordon` | Node cordon |

## 운영 액션

| 액션 | 대상 | 효과 |
|------|------|------|
| **cordon** | Node | 해당 node에 새 job 스케줄링 중단 |
| **drain** | Worker | 현재 job 완료 후 새 job 중단 |
| **restart** | Worker | worker 프로세스 재시작 |
| **maintenance** | Node/Worker | 점검 상태 전환, 스케줄링 제외 |

- 모든 운영 액션은 audit log 기록
- drain 중인 worker의 active job은 완료까지 유지
- cordon된 node의 기존 worker는 계속 동작

## Ops Console 표시

- **Node list**: status, GPU count, CPU/RAM, active workers, heartbeat
- **GPU grid**: utilization, VRAM, health, running job, loaded models
- **Worker table**: runtime, queue affinity, OOM count, restart count, version
- no heartbeat node/worker는 시각적 강조

## v1 범위

- Node/GPU/Worker 상태 조회
- heartbeat 수신 및 no_heartbeat 감지
- cordon, drain, restart 액션
- Ops Console Workers & GPU 페이지

## 관련 문서

- `../data_model.md`, `../operations.md`, `training_scheduler.md`, `ops_console.md`
