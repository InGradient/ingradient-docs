# SSE / Realtime Event Stream

- 문서명: SSE / Realtime Event Stream
- 목적: SSE 기반 실시간 이벤트 스트림, topic subscribe, reconnect 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`

## 목적

Ops console이 polling 없이 실시간으로 상태 변화를 반영할 수 있도록 SSE(Server-Sent Events) 기반 이벤트 스트림을 제공한다.

## 아키텍처

- v1: SSE (Server-Sent Events) — 단방향, HTTP 기반
- v1.5+: WebSocket 확장 가능 (양방향 필요 시)
- UI 데이터 모델: REST snapshot + SSE patch

## 이벤트 타입

| 이벤트 | 설명 |
|--------|------|
| `job.created` | 새 job 생성 |
| `job.queued` | job이 queue에 적재 |
| `job.started` | job 실행 시작 |
| `job.progress` | 장시간 job 진행률 |
| `job.succeeded` | job 성공 완료 |
| `job.failed` | job 실패 |
| `worker.heartbeat` | worker heartbeat 수신 |
| `worker.status_changed` | worker 상태 변경 |
| `gpu.metrics_updated` | GPU 메트릭 갱신 |
| `model.loaded` | 모델 preload 완료 |
| `queue.backlog_changed` | queue backlog 변화 |
| `alert.opened` | 새 alert 발생 |
| `alert.resolved` | alert 해소 |

## Topic 기반 Subscribe

| Topic | 포함 이벤트 |
|-------|------------|
| `overview` | KPI 변화, 전체 요약 |
| `jobs` | job.* 이벤트 |
| `workers` | worker.*, gpu.* 이벤트 |
| `queues` | queue.* 이벤트 |
| `alerts` | alert.* 이벤트 |

클라이언트는 필요한 topic만 subscribe하여 불필요한 트래픽을 줄인다.

## Event Payload

```json
{
  "event_id": "evt_123",
  "event_type": "job.status_changed",
  "occurred_at": "2026-03-29T09:00:00Z",
  "source_type": "job",
  "source_id": "job_123",
  "correlation_id": "corr_123",
  "payload_version": "v1",
  "payload": {
    "before_status": "queued",
    "after_status": "running",
    "entity_version": 17,
    "entity": { "job_id": "job_123", "status": "running" }
  }
}
```

## Reconnect

- reconnect 시 마지막 `event_id` 이후 이벤트 재동기화
- 서버는 최근 N분(또는 N개) 이벤트를 버퍼에 유지
- 버퍼 범위를 초과하면 full snapshot 재요청 필요

## 실시간성 적용 범위

| 강실시간 (SSE) | 약실시간 (polling/수동) |
|---------------|----------------------|
| Overview KPI | Settings |
| Queue backlog | Historical analytics |
| Worker/GPU health | Installed model 목록 |
| Running job progress | |
| Critical alerts | |

## v1 범위

- SSE endpoint 구현
- 13개 이벤트 타입
- topic 기반 subscribe
- reconnect + event_id 기반 재동기화
- ops console 실시간 반영

## v1.5 이후

- WebSocket 확장
- per-entity subscribe (특정 job/worker만)
- event replay API

## 관련 문서

- `../api_contract.md`, `alert_event_system.md`, `ops_console.md`
