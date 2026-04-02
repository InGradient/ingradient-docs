# Queue Management

- 문서명: Queue Management
- 목적: Queue CRUD, pause/resume, concurrency, priority policy 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `../operations.md`

## 목적

Queue는 job과 worker 사이의 중간 계층이다. runtime별, backend별로 job을 분류하고, priority와 concurrency를 제어한다.

## 핵심 엔티티

| 필드 | 설명 |
|------|------|
| queue_name | PK (예: `detection-infer`, `training-gpu`) |
| runtime | 연결된 runtime |
| backend_type | 연결된 backend |
| queue_type | inference, training, utility |
| priority_policy | FIFO, priority-based |
| concurrency_limit | 동시 실행 가능 job 수 |
| queued_count | 현재 대기 중 job 수 |
| running_count | 현재 실행 중 job 수 |
| paused | 일시정지 여부 |
| oldest_waiting_at | 가장 오래 대기 중인 job 시각 |

## API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/queues` | Queue 목록 |
| `GET` | `/api/queues/{queue_name}` | Queue 상세 |
| `POST` | `/api/queues/{queue_name}/pause` | 일시정지 |
| `POST` | `/api/queues/{queue_name}/resume` | 재개 |
| `POST` | `/api/queues/{queue_name}/concurrency` | 동시성 변경 |

## Pool 구조

### 초기 pool

- `inference-pool` → inference queue들
- `training-pool` → training queue들
- `utility-pool` → utility queue들

### 확장 시 (runtime별 분리)

- `detection-infer-pool`, `foundation-train-pool`
- `medical-infer-pool`, `medical-train-pool`
- `utility-cpu-pool`

## Priority 정책

| Job Class | 설명 | 우선순위 |
|-----------|------|----------|
| Class A | 실시간/준실시간 추론 | 최우선 |
| Class B | batch 추론 | 일반 |
| Class C | 대형 학습 | 낮음 |
| Class D | preprocessing/export | 최하위 |

## Concurrency 제어

- queue별 `concurrency_limit` 설정
- limit 도달 시 새 job은 queued 상태 유지
- 운영자가 ops console 또는 API로 limit 조정 가능
- limit 변경은 audit log 기록

## Pause / Resume

- pause: 새 job 실행 중단, 기존 실행 중인 job은 계속
- resume: 대기 중 job부터 실행 재개
- pause/resume은 audit log 기록

## Backlog 관리

| 지표 | 설명 |
|------|------|
| queue wait time | 대기 시간 (realtime/interactive/batch별 threshold) |
| queued_count | 대기 중 job 수 |
| oldest_waiting_at | head-of-line blocking 감지 |
| rejection reason | scheduler 거부 사유 분포 |

backlog alert threshold는 `../operations.md` 참조.

## 기술 구현

- Redis 기반 queue (priority, retry, delayed job 지원)
- job 적재: orchestrator가 `queued` 전이 시 Redis에 push
- job 인출: scheduler가 worker 가용 시 pop
- 상태 동기화: Redis queue state ↔ PostgreSQL job status

## v1 범위

- 초기 3개 pool (inference, training, utility)
- Queue 목록/상세 조회
- pause/resume
- concurrency limit 조정
- backlog 지표 표시

## v1.1 이후

- Queue 독립 전체 페이지 (ops console)
- priority bucket split 시각화
- queue별 throughput 통계
- 동적 queue 생성/삭제

## 관련 문서

- `../api_contract.md`, `../operations.md`, `training_scheduler.md`
