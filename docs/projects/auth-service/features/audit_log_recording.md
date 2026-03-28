# 감사 로그 기록

- 문서명: 감사 로그 기록
- 목적: 주요 이벤트를 fire-and-forget 방식으로 DB에 비동기 기록하는 감사 로그 시스템을 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §9

## 1. 기능 개요

- 기능 이름: 감사 로그 기록
- 한 줄 정의: 인증, 사용자, 조직, 멤버십, 라이선스, 디바이스 관련 이벤트를 stdout + DB에 비동기 기록한다.

## 2. 문제 정의

- 보안 감사와 문제 추적을 위해 모든 중요 이벤트의 기록이 필요하다.
- 로그 기록이 API 응답 시간에 영향을 주지 않아야 한다.

## 3. 목표

- 보안 목표: 모든 중요 이벤트를 누락 없이 기록한다.
- 운영 목표: 요청 처리를 차단하지 않으면서 안정적으로 기록한다.

## 4. 범위 / 비범위

- 포함: fire-and-forget 비동기 기록, stdout JSON 출력, DB 비동기 삽입, 이벤트 유형별 메타 필드
- 비범위: 감사 로그 조회 API (audit_log_query.md에서 다룸), 보존 정책, 내보내기

## 5. 사용자 시나리오

### 시스템 흐름 — 이벤트 기록

1. 참여자: auth-service 내부
2. 기본 흐름: 비즈니스 로직이 `audit.log(event, meta)` 호출 → stdout에 JSON 라인 출력 (운영 로그) → DB에 비동기 INSERT (fire-and-forget)
3. 예외 흐름: DB INSERT 실패 → stderr 경고 로그 → 요청에 영향 없음 (응답은 이미 반환됨)
4. 로그 구조: `{ id, event, user_id, org_id, meta, created_at }`

### 이벤트 범위

**인증**: login_success, login_fail (사유: user_not_found/invalid_password/locked/disabled), admin_login, logout, logout_all, token_refresh, token_reuse_detected

**비밀번호**: password_change, password_reset_request, password_reset_complete, admin_password_reset

**사용자**: user_create, user_update (changed_fields), user_delete, user_disable, user_enable, user_unlock, user_role_change, admin_force_logout

**조직**: org_create, org_update (changed_fields), org_status_change, org_disable

**멤버십**: membership_add, membership_remove, membership_role_change, membership_suspend

**프로젝트**: project_create, project_update, project_delete, project_member_add, project_member_remove, project_member_role_change

**라이선스/디바이스**: license_assign, license_renew, license_issue, license_revoke, device_register, device_revoke, device_delete, device_deactivate

**초대**: invitation_send, invitation_accept, invitation_cancel, invitation_resend, join_code_create, join_code_use, join_code_disable

**엔타이틀먼트**: entitlement_issue, entitlement_revoke

## 6. UI / UX 방향

- 해당 없음 (백엔드 내부 시스템). 조회 UI는 audit_log_query.md 참조.

## 7. 데이터 / API / 권한 영향

- 테이블: `audit_logs` (id UUID, event VARCHAR, user_id UUID nullable, org_id UUID nullable, meta JSONB, created_at TIMESTAMPTZ)
- 내부 API: `audit.log(event: string, meta: object)` — 서비스 레이어에서 호출
- 외부 API: 없음 (기록 전용)
- meta 필드 예시: `{ login_id, reason, ip, user_agent }` (login_fail), `{ admin_id, target_user_id, changed_fields }` (user_update)

## 8. 테스트 계획

- unit: audit.log 호출 시 stdout 출력 확인, meta 직렬화
- integration: 로그인 실패 → audit_logs 테이블에 login_fail 레코드 존재 확인, DB 실패 시 요청 정상 완료 확인
- e2e: 다양한 이벤트 트리거 후 DB 감사 로그 레코드 검증

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: stdout 로그를 로그 수집기(Fluentd, CloudWatch 등)로 수집 설정 권장

## 10. 오픈 이슈

- 조회 API 미구현 → audit_log_query.md 참조
- 보존 정책 미구현 → audit_log_query.md 참조
- DB INSERT 실패 시 재시도 없음 (fire-and-forget). 별도 큐 도입 여부 검토 필요
