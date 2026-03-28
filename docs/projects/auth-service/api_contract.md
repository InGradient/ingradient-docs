# auth-service API Contract

## API 개요

auth-service는 단순 로그인 API가 아니라 아래 계약을 포함한다.

- login, logout, refresh, verify
- organizations
- users
- memberships and roles
- invitations and join flows
- license issuance and device registration
- offline entitlement or edge-related auth flows

## 핵심 도메인

- user
- organization
- membership
- role / permission
- invitation
- license
- device / node registration
- audit log

## 중요한 계약 포인트

### authentication

- access token
- refresh token
- token rotation
- logout 후 token 무효화

### membership and role

- organization membership
- project access facts
- role codes such as owner, manager, labeler, reviewer, client, viewer

### edge and offline

- offline entitlement
- device registration and re-registration
- license restrictions

### security extensions

최근 schema 기준으로 아래 security 관련 필드가 추가되었다.

- `failed_login_attempts`
- `locked_until`

또한 audit 추적용 `audit_logs` 테이블이 존재한다.

## 에러와 상태

- invalid credentials
- account disabled
- account locked
- invite expired
- join code invalid
- license expired
- offline not enabled

## 관련 근거 문서

- `/home/june/workspace/projects/auth-service/docs/concepts/architecture.md`
- `/home/june/workspace/projects/auth-service/docs/reference/test-scenarios.md`
- `/home/june/workspace/projects/auth-service/docs/plan/license-migration.md`

