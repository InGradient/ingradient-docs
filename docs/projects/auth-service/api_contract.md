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
- product access facts
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

## v0.0.2에서 추가된 엔드포인트

### 인증 / 세션

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/auth/logout-all` | Bearer | 본인의 모든 세션 종료 |
| GET | `/sessions` | Admin | 전체 활성 세션 목록 (paginated) |
| DELETE | `/sessions/:id` | Admin | 세션 개별 폐기 |

### 디바이스

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/devices/:id/heartbeat` | Bearer/Bootstrap | 디바이스 last_seen 갱신 |

### 오프라인 엔타이틀먼트

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| PATCH | `/entitlements/:jti/renew` | Bearer | 엔타이틀먼트 갱신 (token_version 증가, RS256 재서명) |

### 감사 로그

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/audit-logs` | Admin | 감사 로그 조회 (event, user_id, org_id, from, to 필터 + 페이지네이션) |
| GET | `/audit-logs/export` | Admin | 감사 로그 내보내기 (CSV/JSON) |

### 웹훅

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/webhooks` | Admin | 웹훅 등록 (url, events, secret) |
| GET | `/webhooks` | Admin | 웹훅 목록 |
| DELETE | `/webhooks/:id` | Admin | 웹훅 삭제 |

### SSO

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/auth/sso/:provider/authorize` | Public | IdP 인증 URL 리다이렉트 (org_code 필수) |
| GET | `/auth/sso/:provider/callback` | Public | OAuth 콜백 처리 → 토큰 발급 |
| POST | `/organizations/:orgId/idp-configs` | Admin/Bootstrap | IdP 설정 생성 |
| GET | `/organizations/:orgId/idp-configs` | Admin/Bootstrap | IdP 설정 목록 |
| DELETE | `/organizations/:orgId/idp-configs/:id` | Admin | IdP 설정 삭제 |

### 응답 형식 변경 (BREAKING)

v0.0.2부터 모든 목록 API 응답이 배열 → `{ items, total, page, pageSize }` 형식으로 변경되었다.

```json
{
  "items": [...],
  "total": 150,
  "page": 1,
  "pageSize": 20
}
```

쿼리 파라미터: `page` (기본 1), `page_size` (기본 20, 최대 100), `order` (asc|desc, 기본 desc)

## v0.0.3에서 추가된 엔드포인트

### 조직별 보안 설정

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/organizations/:orgId/security-settings` | Admin/Bootstrap | 조직 보안 설정 조회 (기본값 포함) |
| PUT | `/organizations/:orgId/security-settings` | Admin/Bootstrap | 조직 보안 설정 업데이트 (부분 업데이트) |

### 자가 회원가입 / 이메일 인증

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/auth/signup` | Public (rate limited) | 자가 회원가입 (org_code로 조직 지정 가능) |
| POST | `/auth/send-verification` | Bearer | 이메일 인증 메일 발송 |
| POST | `/auth/verify-email` | Public | 이메일 인증 토큰 검증 |

### 초대 재발송

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/invitations/:id/resend` | Bearer | 초대 재발송 (토큰 재생성 + 이메일 발송) |

### 도메인 자동 가입

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/organizations/:orgId/allowed-domains` | Admin/Bootstrap | 허용 도메인 목록 |
| POST | `/organizations/:orgId/allowed-domains` | Admin/Bootstrap | 허용 도메인 추가 |
| DELETE | `/organizations/:orgId/allowed-domains/:id` | Admin/Bootstrap | 허용 도메인 삭제 |

### 서비스 클라이언트 인증

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/service-clients` | Admin | 서비스 클라이언트 생성 (client_id + client_secret 반환) |
| GET | `/service-clients` | Admin | 서비스 클라이언트 목록 |
| DELETE | `/service-clients/:id` | Admin | 서비스 클라이언트 삭제 |
| POST | `/auth/token` | Public | client_credentials 그랜트로 토큰 발급 |

### IP 접근 제어

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/organizations/:orgId/ip-rules` | Admin/Bootstrap | IP 규칙 목록 |
| POST | `/organizations/:orgId/ip-rules` | Admin/Bootstrap | IP 규칙 추가 (ALLOW/DENY) |
| DELETE | `/organizations/:orgId/ip-rules/:id` | Admin/Bootstrap | IP 규칙 삭제 |

### RBAC 권한 검사

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/auth/check-permission` | Bearer | 권한 검사 (resource + action → allowed boolean) |

### SAML 2.0

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/auth/saml/metadata` | Public | SP 메타데이터 (XML) |
| POST | `/auth/saml/acs` | Public | SAML ACS 엔드포인트 (placeholder) |

### GDPR 삭제 요청

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| POST | `/users/:id/erasure-request` | Admin | 사용자 삭제 요청 생성 |
| GET | `/erasure-requests` | Admin | 삭제 요청 목록 |

### Prometheus 메트릭

| 메서드 | 경로 | 권한 | 설명 |
|--------|------|------|------|
| GET | `/metrics` | Public (no auth) | Prometheus 텍스트 포맷 메트릭 |

### Code Availability Check (v0.0.4)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/organizations/check-code?code=xxx` | adminOrBootstrap | 조직 코드 사용 가능 여부 확인 |
| GET | `/projects/check-code?code=xxx` | requireAdmin | Product 코드 사용 가능 여부 확인 |

### Audit Log Stats (v0.0.4)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/audit-logs/stats?from=&to=` | requireAdmin | 감사 로그 시계열 + 분포 통계 |

### User Approval (v0.0.4)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/users/:id/approve` | requireAdmin | PENDING → ACTIVE 전환. PENDING 아닌 경우 409 |

### System Settings (v0.0.4)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/system-settings` | requireAdmin | 시스템 기본 설정 조회 (행 없으면 기본값 반환) |
| PUT | `/system-settings` | requireAdmin | 시스템 기본 설정 부분 업데이트 |

### API 버저닝

모든 `/api/*` 라우트가 `/v1/*` 프리픽스로도 접근 가능. 두 프리픽스 모두 동일한 핸들러를 공유한다.

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

