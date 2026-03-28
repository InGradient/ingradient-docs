# auth-service Roadmap

## 현재 범위

- shared auth and membership service
- admin 운영 시스템으로의 확장
- license 관리 이관
- offline and edge support

## 단계별 계획

### 1. core auth 안정화

- login, refresh, verify
- membership and project access
- role and permission facts

### 2. admin 운영 기능 확장

- 사용자 목록과 상세
- 조직 관리
- role 관리
- account security controls

### 3. license and edge integration

- license issuance
- node-locked registration
- offline entitlement
- device and edge support

### 4. 보안과 감사 강화

- audit logs
- account lock
- usage and activity visibility
- future MFA or SSO 고려

### 5. 프로덕션 안정화 (P0)

- 이메일 발송 구현 (stub → SMTP/SendGrid/SES): [email_notification_system.md](./features/email_notification_system.md)
- API 페이지네이션 및 정렬: [api_pagination_sorting.md](./features/api_pagination_sorting.md)
- 감사 로그 조회 API + 내보내기 + 보존 정책: [audit_log_query.md](./features/audit_log_query.md)
- 라이선스 한도 검사: [license_usage_enforcement.md](./features/license_usage_enforcement.md)
- Rate limit Redis 전환 + 전역 적용: [rate_limit_redis.md](./features/rate_limit_redis.md)
- Health check 확장 (DB/Redis 상태): [health_check_deep.md](./features/health_check_deep.md)

### 6. 엔터프라이즈 보안 (P1)

- MFA/2FA (TOTP): [mfa_totp.md](./features/mfa_totp.md)
- SSO / OAuth / OIDC: [sso_oauth_oidc.md](./features/sso_oauth_oidc.md)
- 비밀번호 정책 강화: [password_policy_enhancement.md](./features/password_policy_enhancement.md)
- 세션 생명주기 관리: [session_lifecycle.md](./features/session_lifecycle.md)
- Admin 대시보드: [admin_dashboard.md](./features/admin_dashboard.md)
- JWT 키 rotation: [jwt_key_rotation.md](./features/jwt_key_rotation.md)

## 우선순위

1. 공통 제품이 신뢰할 수 있는 auth contract
2. license migration
3. admin 운영성
4. 확장 보안 기능
5. **프로덕션 안정화 (P0)** — 이메일, 페이지네이션, 감사 로그 조회, 라이선스 한도, rate limit, health check
6. **엔터프라이즈 보안 (P1)** — MFA, SSO, 비밀번호 정책, 세션 관리, 대시보드, JWT rotation

## 기술 부채

- 기존 platform에 있던 일부 책임의 이관 완료가 필요
- business permission 해석 경계가 더 분명해져야 한다

## 미결정 사항

- SSO 도입 시점 → [sso_oauth_oidc.md](./features/sso_oauth_oidc.md) 참조
- MFA 범위 → [mfa_totp.md](./features/mfa_totp.md) 참조
- API key와 service auth 확장 범위

