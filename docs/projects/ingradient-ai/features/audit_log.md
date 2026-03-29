# Audit Log

- 문서명: Audit Log
- 목적: destructive/운영 액션의 감사 로그 기록 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`

## 목적

운영 안전성을 위해 상태를 변경하는 모든 주요 액션을 누가, 언제, 무엇을, 왜 했는지 기록한다.

## 기록 대상

| 대상 | 액션 |
|------|------|
| Job | priority 변경, 강제 취소, retry, requeue |
| Queue | pause, resume, concurrency 변경 |
| Worker | restart, drain |
| Node | cordon, maintenance 전환 |
| Model | preload, unload, disable, enable |
| ModelVersion | validate, promote-default, promote-production, rollback, archive |
| Settings | 동적 정책 수정 |
| Event | acknowledge, mute, escalate |

## Audit Log 필드

| 필드 | 설명 |
|------|------|
| log_id | PK |
| actor | 실행자 (user_id 또는 service_id) |
| actor_type | operator, service, system |
| action | 수행한 액션 (예: `job.cancel`, `model.promote_default`) |
| target_type | 대상 엔티티 유형 (job, worker, model, queue 등) |
| target_id | 대상 엔티티 ID |
| before | 변경 전 상태 (JSON) |
| after | 변경 후 상태 (JSON) |
| reason | 사유 (선택) |
| correlation_id | 요청 추적 ID |
| created_at | 기록 시각 |

## 저장

- PostgreSQL (metadata DB)에 저장
- immutable — 수정/삭제 불가
- retention: TBD (최소 1년 권장)

## 조회

- ops console Events & Alerts 페이지에서 audit log 조회 가능
- 필터: actor, action, target_type, 시간 범위
- API: `GET /api/events` (event_type=audit 필터)

## 규칙

- destructive action은 반드시 audit log를 남긴다
- audit log 기록 실패 시 원본 액션도 실패 처리 (best effort에서 시작, strict로 전환 가능)
- service-to-service 호출도 actor_type=service로 기록
- system 자동화 (scheduler auto-retry 등)도 actor_type=system으로 기록

## v1 범위

- 위 대상 액션 전체 audit log 기록
- ops console에서 기본 조회
- actor, action, target, timestamp 기록

## v1.5 이후

- audit log 검색/필터 강화
- export 기능
- compliance 리포트 생성

## 관련 문서

- `../api_contract.md`, `alert_event_system.md`
