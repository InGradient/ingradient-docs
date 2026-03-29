# Notification Integration

- 문서명: Notification Integration
- 목적: Alert를 외부 채널(Slack, email 등)로 전달하는 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `alert_event_system.md`

## 목적

Critical alert가 발생했을 때 ops console 외에도 Slack, email 등 외부 채널로 알림을 전달하여 운영자가 빠르게 인지할 수 있게 한다.

## 지원 채널 (예정)

| 채널 | 프로토콜 | 우선순위 |
|------|----------|----------|
| Slack | Webhook | v1.5 |
| Email | SMTP / API | v1.5 |
| Webhook (커스텀) | HTTP POST | v2 |
| PagerDuty | API | v2 |

## Notification Rule

| 필드 | 설명 |
|------|------|
| rule_id | PK |
| name | 규칙 이름 |
| severity_filter | 어떤 severity에 적용 (critical, warning) |
| source_type_filter | 어떤 source에 적용 (worker, node, queue 등) |
| event_type_filter | 어떤 event_type에 적용 |
| channel | 전달 채널 |
| channel_config | 채널별 설정 (webhook URL, email 주소 등) |
| enabled | 활성화 여부 |
| cooldown_minutes | 동일 규칙 재알림 대기 시간 |

## 알림 흐름

1. AlertEvent 생성 (severity=critical)
2. Notification rule 매칭 (severity, source_type, event_type 필터)
3. 매칭된 rule의 channel로 알림 전송
4. cooldown 적용 (동일 rule 반복 알림 방지)
5. 전송 결과 기록 (성공/실패)

## 알림 메시지 포맷

| 필드 | 내용 |
|------|------|
| 제목 | `[Critical] {event_type}: {message}` |
| 본문 | source entity 정보, 발생 시각, ops console 링크 |
| 액션 링크 | ops console 해당 entity 페이지 direct link |

## Mute 연동

- `alert_event_system.md`의 mute 기능과 연동
- muted event는 notification 발송하지 않음
- mute 해제 시 notification 재활성화

## v1 범위

- 없음 (ops console alert strip으로만 운영)

## v1.5 범위

- Slack webhook 기본 지원
- Email 기본 지원
- notification rule CRUD
- cooldown 기본 적용

## v2 범위

- custom webhook
- PagerDuty 연동
- notification 이력 조회
- escalation chain 연동

## 관련 문서

- `alert_event_system.md`, `../operations.md`
