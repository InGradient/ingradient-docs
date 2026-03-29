# Alert / Event System

- 문서명: Alert / Event System
- 목적: AlertEvent lifecycle, threshold 모니터링, acknowledge/mute/escalate 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../operations.md`, `../api_contract.md`

## 목적

AI Platform에서 발생하는 이상 상황을 감지하여 운영자에게 알리고, 대응 상태를 추적한다.

## AlertEvent 엔티티

| 필드 | 설명 |
|------|------|
| event_id | PK |
| severity | critical, warning, info |
| source_type | job, worker, node, gpu, queue, model, storage |
| source_id | 원인 엔티티 ID |
| event_type | 이벤트 유형 (예: `worker.no_heartbeat`, `job.repeated_failure`) |
| message | 사람이 읽을 수 있는 메시지 |
| payload | 상세 데이터 (JSON) |
| status | open, acknowledged, muted, resolved, escalated |
| acknowledged_by | 확인한 운영자 |
| created_at | 발생 시각 |

## 상태 전이

`open → acknowledged → resolved`

분기:
- `open → muted` (유사 이벤트 무시)
- `open → escalated` (상위 담당자에게 전달)
- `acknowledged → resolved` (조치 완료)

## Severity 기준

| 등급 | 의미 | 대응 |
|------|------|------|
| **Critical** | 즉시 조치 필요 | alert 생성 + 운영자 확인 필수 |
| **Warning** | 추세 감시 + 선제 조치 | 추세 모니터링 |
| **Info** | 정보성 기록 | 기록만 |

## Threshold 기반 자동 생성

operations.md의 threshold 테이블에 따라 자동 생성:

- queue wait time 초과 → warning/critical alert
- no heartbeat → warning/critical alert
- repeated OOM → warning/critical alert
- GPU overheat → warning/critical alert
- storage error burst → warning/critical alert

전체 threshold는 `../operations.md` 참조.

## API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/events` | Event 목록 (필터: severity, source_type, event_type, status) |
| `POST` | `/api/events/{event_id}/acknowledge` | 확인 |

## Ops Console 표시

- **Events & Alerts 페이지**: severity 필터, event stream, 관련 entity 링크
- **Alert Strip**: critical/open event를 모든 페이지 상단에 노출
- **Overview**: 최근 critical event 요약

## 운영자 액션

| 액션 | 설명 |
|------|------|
| acknowledge | 이벤트 확인 (내가 보고 있다) |
| mute similar | 동일 유형 이벤트 일시 무시 |
| open related entity | 원인 entity(job, worker, model)로 이동 |
| escalate | 상위 담당자에게 전달 |

## v1 범위

- threshold 기반 alert 자동 생성 (critical + warning)
- event 목록 조회 + acknowledge
- ops console alert strip
- Events & Alerts 페이지

## v1.5 이후

- mute rule 관리
- escalation policy
- notification 연동 (Slack, email)
- custom alert rule 생성

## 관련 문서

- `../operations.md`, `../api_contract.md`, `sse_realtime.md`, `audit_log.md`
