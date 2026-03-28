# 초대 및 가입 코드

- 문서명: 초대 및 가입 코드
- 목적: 이메일 초대와 공개 가입 코드를 통한 조직 온보딩 흐름을 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §7

## 1. 기능 개요

- 기능 이름: 초대 및 가입 코드
- 한 줄 정의: 이메일 초대 토큰 또는 공개 가입 코드로 사용자를 조직에 유입시킨다.

## 2. 문제 정의

- 조직에 새 멤버를 추가하는 경로가 관리자 직접 생성 외에도 필요하다.
- 이메일 초대는 특정 사용자를, 가입 코드는 불특정 다수를 대상으로 한다.

## 3. 목표

- 사용자 목표: 초대 링크 클릭 또는 코드 입력만으로 조직에 합류한다.
- 운영 목표: 조직 관리자가 자율적으로 멤버를 유입시킬 수 있다.

## 4. 범위 / 비범위

- 포함: 이메일 초대 (생성, 수락, 취소, 만료), 가입 코드 (생성, 사용, 비활성화, 사용 횟수 제한, 만료)
- 비범위: 초대 재발송 (P0 — email_notification_system에서 다룸), 도메인 기반 자동 가입 (P3), SSO JIT provisioning (P1)

## 5. 사용자 시나리오

### 기본 흐름 — 이메일 초대

1. 참여자: 조직 관리자, 초대 대상자
2. 선행 조건: 관리자가 조직의 admin 권한 보유
3. 기본 흐름:
   - 관리자: `POST /organizations/:orgId/invitations { email, role_id, ttl_hours? }` → 토큰 생성 (32바이트 hex) → 초대 생성 (status = PENDING, 기본 TTL 24시간, 최대 720시간) → 이메일 발송 (현재 stub)
   - 대상자: 이메일의 링크 클릭 → 로그인 → `POST /invitations/accept { token }` → 토큰/상태/만료 검증 → 멤버십 생성 (초대에 지정된 역할) → status = ACCEPTED
4. 예외 흐름: 이미 PENDING 초대 존재 → 409 INVITATION_ALREADY_PENDING. 이미 멤버 → 409 ALREADY_MEMBER. 만료 → 400 INVITATION_EXPIRED.
5. 로그 포인트: `invitation_send`, `invitation_accept`, `invitation_cancel`

### 기본 흐름 — 가입 코드

1. 참여자: 조직 관리자, 가입 대상자
2. 기본 흐름:
   - 관리자: `POST /organizations/:orgId/join-codes { default_role_id, max_uses?, expires_at? }` → 8자 코드 생성 (base64url, 대문자) → status = ACTIVE
   - 대상자: `POST /join-codes/use { code }` → 코드 유효성 검사 (존재, ACTIVE, 미만료, 사용 한도) → 멤버 중복 확인 → 멤버십 생성 → used_count 증가 → 한도 도달 시 status = EXHAUSTED
3. 예외 흐름: 코드 미존재 → 404 CODE_NOT_FOUND. 비활성 → 400 CODE_INACTIVE. 만료 → 400 CODE_EXPIRED. 한도 초과 → 400 CODE_MAX_USES_REACHED.
4. 로그 포인트: `join_code_create`, `join_code_use`, `join_code_disable`

## 6. UI / UX 방향

- Admin Console 조직 상세 → 초대 탭: 초대 목록 (상태, 이메일, 역할, 만료일), 새 초대 생성 폼, 취소 버튼
- Admin Console 조직 상세 → 가입 코드 탭: 코드 목록 (코드, 사용량/한도, 만료일, 상태), 새 코드 생성 폼, 비활성화 버튼

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /organizations/:orgId/invitations` — bearer + org admin
  - `GET /organizations/:orgId/invitations` — bearer (org 멤버)
  - `POST /invitations/accept { token }` — bearer
  - `DELETE /invitations/:id` — bearer + org admin 또는 초대자
  - `POST /organizations/:orgId/join-codes` — bearer + org admin
  - `GET /organizations/:orgId/join-codes` — bearer (org 멤버)
  - `POST /join-codes/use { code }` — bearer
  - `DELETE /join-codes/:id` — bearer + org admin
- 테이블: `invitations` (id, organization_id, email, role_id, token, status, expires_at, invited_by_user_id, accepted_user_id), `join_codes` (id, organization_id, code, default_role_id, max_uses, used_count, expires_at, status)
- 초대 상태: PENDING → ACCEPTED | EXPIRED | CANCELLED
- 코드 상태: ACTIVE → EXPIRED | DISABLED | EXHAUSTED

## 8. 테스트 계획

- unit: 토큰 생성, 만료 검사, 사용 횟수 검사, 상태 전이 로직
- integration: 초대 생성 → 수락 → 멤버십 확인, 코드 생성 → 사용 → 한도 도달 시 EXHAUSTED
- e2e: Admin Console에서 초대 생성 → 대상 계정으로 수락 → 멤버 목록 확인

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: 초대 이메일은 현재 stub. 실제 발송은 email_notification_system 참조.

## 10. 오픈 이슈

- 초대 재발송 기능 미구현 → email_notification_system.md에서 다룸
- 초대 수락 시 이메일 불일치 정책 (초대 이메일 vs bearer 이메일) 미결정
- 만료 초대의 lazy expire 처리 (조회 시 상태 전환)는 구현되어 있으나 크론 정리 없음
