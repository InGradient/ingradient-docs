# auth-service Features

- 버전: 0.0.3
- 마지막 수정일: 2026-03-28

## 이 문서의 역할

이 README는 auth-service의 전체 기능 목록과 간략한 설명을 담는 인덱스다. 개별 기능의 상세 명세가 필요할 때만 features 폴더 내 문서를 읽으면 된다. 기능 전체 그림을 파악할 때는 이 README만으로 충분하다.

## 기능 목록

### 인증 / 세션

| 기능 | 설명 | 문서 |
|------|------|------|
| 로그인 | Login ID + 비밀번호 인증, Access Token + Refresh Token 발급 | [login_refresh_flow.md](./login_refresh_flow.md) |
| 토큰 갱신 | Refresh Token으로 Access Token 재발급 | [login_refresh_flow.md](./login_refresh_flow.md) |
| 로그아웃 | 세션 취소, Refresh Token 폐기 | [login_refresh_flow.md](./login_refresh_flow.md) |
| 세션 관리 | 활성 세션 목록 조회, 개별 세션 취소 | [login_refresh_flow.md](./login_refresh_flow.md) |
| 토큰 검증 | Access Token 유효성 검증 API (downstream 서비스용) | [login_refresh_flow.md](./login_refresh_flow.md) |
| 계정 잠금 | 로그인 5회 실패 시 15분 자동 잠금 | [account_lock_password_reset.md](./account_lock_password_reset.md) |
| 비밀번호 재설정 | forgot-password → 토큰 발급 → 새 비밀번호 설정 | [account_lock_password_reset.md](./account_lock_password_reset.md) |
| Admin 로그인 | System Admin 전용 로그인, `is_admin` claim 포함 토큰 발급 | [admin_bootstrap_auth.md](./admin_bootstrap_auth.md) |
| Bootstrap 인증 | 서비스 간 통신용 BOOTSTRAP_SECRET 기반 인증 | [admin_bootstrap_auth.md](./admin_bootstrap_auth.md) |

### 사용자 관리

| 기능 | 설명 | 문서 |
|------|------|------|
| 사용자 CRUD | 생성, 조회, 수정, 삭제 (soft delete) | [user_management.md](./user_management.md) |
| 계정 상태 관리 | ACTIVE, DISABLED, INVITED, LOCKED 상태 전환 | [user_management.md](./user_management.md) |
| System Admin 플래그 | isSystemAdmin으로 시스템 전체 관리 권한 부여 (역할 시스템과 독립) | [user_management.md](./user_management.md) |
| Edge 자격증명 | 여러 사용자의 Edge 인증 정보 일괄 발급 | [user_management.md](./user_management.md) |
| 사용자 활동 조회 | 특정 사용자의 활동 로그 조회 | [user_management.md](./user_management.md) |

### 조직 / Product

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 CRUD | 생성, 조회, 수정 (이름/상태). 상태: ACTIVE, SUSPENDED, DISABLED | [organization_license_admin.md](./organization_license_admin.md) |
| Product CRUD | 생성, 조회, 수정, 삭제. 상태: ACTIVE, DISABLED, ARCHIVED | [product_membership.md](./product_membership.md) |
| Product 멤버 관리 | Product에 멤버 추가/삭제, Product별 역할 부여 | [product_membership.md](./product_membership.md) |

### 멤버십

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 멤버십 | 사용자를 조직에 추가, 역할 부여, 정지, 삭제 | [organization_license_admin.md](./organization_license_admin.md) |
| 멤버십 상태 관리 | ACTIVE, INVITED, SUSPENDED, EXPIRED 상태 전환 | [product_membership.md](./product_membership.md) |
| Product 멤버십 | Membership 하위로 Product별 역할 부여 | [product_membership.md](./product_membership.md) |

### 역할 / 권한

| 기능 | 설명 | 문서 |
|------|------|------|
| 시스템 역할 | ADMIN, ORGANIZER, MEMBER 3개 기본 역할 (GLOBAL scope, seed) | [role_permission.md](./role_permission.md) |
| 역할 코드 매핑 | JWT role_code로 매핑 (OWNER/ADMIN→admin, MANAGER/ORGANIZER→organizer, 그 외→member) | [role_permission.md](./role_permission.md) |
| 커스텀 역할 | ORGANIZATION 또는 PRODUCT scope로 커스텀 역할 생성 가능 | [role_permission.md](./role_permission.md) |
| 권한 관리 | resource:action 패턴 권한 정의, RolePermission으로 역할에 매핑 | [role_permission.md](./role_permission.md) |

### 초대 / 가입

| 기능 | 설명 | 문서 |
|------|------|------|
| Invitation | 이메일로 조직 초대, 역할 지정. 상태: PENDING, ACCEPTED, EXPIRED, CANCELLED | [invitation_join_code.md](./invitation_join_code.md) |
| Join Code | 공개 가입 코드 생성, 최대 사용 횟수/만료 설정. 상태: ACTIVE, EXPIRED, DISABLED | [invitation_join_code.md](./invitation_join_code.md) |

### 라이선스

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 라이선스 | 조직당 1개 라이선스 할당 (maxUsers, maxDevices, offlineMaxDays, featuresJson) | [organization_license_admin.md](./organization_license_admin.md) |
| 라이선스 사용량 조회 | 현재 사용자/디바이스 수 vs 한도 조회 | [organization_license_admin.md](./organization_license_admin.md) |
| 오프라인 디바이스 라이선스 | fingerprint 기반 오프라인 디바이스 라이선스 발급/취소 | [offline_license_entitlement.md](./offline_license_entitlement.md) |

### 디바이스

| 기능 | 설명 | 문서 |
|------|------|------|
| 디바이스 등록 | Device UID (fingerprint) 기반 등록. 상태: PENDING | [device_management.md](./device_management.md) |
| 디바이스 승인/취소 | Admin이 승인 (ACTIVE) 또는 취소 (REVOKED) | [device_management.md](./device_management.md) |
| 디바이스 목록 | 조직별 디바이스 조회, 삭제 | [device_management.md](./device_management.md) |

### 오프라인 엔타이틀먼트

| 기능 | 설명 | 문서 |
|------|------|------|
| Entitlement 발급 | 디바이스+사용자 바인딩 오프라인 JWT 발급 (RS256) | [offline_license_entitlement.md](./offline_license_entitlement.md) |
| Entitlement 취소 | JTI 기반 취소 | [offline_license_entitlement.md](./offline_license_entitlement.md) |
| Entitlement 목록 | 조직별 엔타이틀먼트 조회 | [offline_license_entitlement.md](./offline_license_entitlement.md) |

### 감사 로그

| 기능 | 설명 | 문서 |
|------|------|------|
| Audit Log | 주요 이벤트 자동 기록 (login, member 변경, device, invitation, license, entitlement 등) | [audit_log_recording.md](./audit_log_recording.md) |

## 상세 기능 문서

현재 상세 문서가 작성된 기능:

### v0.0.1 기능

- [project_setup.md](./project_setup.md) — 프로젝트 초기화 (Fastify, Prisma, Docker, 환경변수, 로그, 에러 핸들링)
- [basic_auth.md](./basic_auth.md) — 기본 인증 (JWT, 로그인, Guard, Bootstrap)
- [core_crud.md](./core_crud.md) — 핵심 CRUD (사용자, 조직, Product, 멤버십, 역할/권한)
- [license_migration.md](./license_migration.md) — 라이선스 시스템 이관
- [admin_ui_initial.md](./admin_ui_initial.md) — Admin UI 초기 버전

### v0.0.2 기능

- [login_refresh_flow.md](./login_refresh_flow.md) — 로그인, 토큰 갱신, 로그아웃 흐름
- [organization_license_admin.md](./organization_license_admin.md) — 조직, 라이선스, 관리자 운영
- [account_lock_password_reset.md](./account_lock_password_reset.md) — 계정 잠금, 비밀번호 재설정
- [admin_bootstrap_auth.md](./admin_bootstrap_auth.md) — Admin 로그인, Bootstrap 인증
- [user_management.md](./user_management.md) — 사용자 CRUD, 상태 관리, System Admin, Edge 자격증명
- [product_membership.md](./product_membership.md) — Product CRUD, Product/조직 멤버십 관리
- [role_permission.md](./role_permission.md) — 역할/권한 CRUD, 시스템 역할 시드, 역할 코드 매핑
- [invitation_join_code.md](./invitation_join_code.md) — 이메일 초대, 가입 코드
- [device_management.md](./device_management.md) — 온라인 디바이스 등록, 승인/취소, 목록
- [offline_license_entitlement.md](./offline_license_entitlement.md) — 오프라인 라이선스, 비활성화 코드, 엔타이틀먼트
- [audit_log_recording.md](./audit_log_recording.md) — 감사 로그 fire-and-forget 기록

### P0 — 프로덕션 필수

- [email_notification_system.md](./email_notification_system.md) — 이메일 발송 인프라, 비밀번호 초기화/초대 실제 발송
- [api_pagination_sorting.md](./api_pagination_sorting.md) — 모든 목록 API 페이지네이션 및 정렬
- [audit_log_query.md](./audit_log_query.md) — 감사 로그 조회 API, 필터, 내보내기, 보존 정책
- [license_usage_enforcement.md](./license_usage_enforcement.md) — 라이선스 사용량 추적 및 한도 초과 차단
- [rate_limit_redis.md](./rate_limit_redis.md) — Rate limit Redis 전환 및 전역 적용
- [health_check_deep.md](./health_check_deep.md) — Health check DB/Redis 연결 상태 확장

### P1 — 높은 우선순위

- [mfa_totp.md](./mfa_totp.md) — TOTP 기반 MFA/2FA, 백업 코드, 조직 강제 정책
- [sso_oauth_oidc.md](./sso_oauth_oidc.md) — OAuth/OIDC 외부 IdP 연동, JIT provisioning
- [password_policy_enhancement.md](./password_policy_enhancement.md) — 비밀번호 복잡도, 이력, 만료, 블랙리스트, 조직별 정책
- [session_lifecycle.md](./session_lifecycle.md) — 세션 자동 정리, 동시 제한, 토큰 블랙리스트, 전체 로그아웃
- [admin_dashboard.md](./admin_dashboard.md) — Admin Console 통계 대시보드
- [jwt_key_rotation.md](./jwt_key_rotation.md) — JWT kid 헤더, 다중 키, 무중단 키 교체

### v0.0.3 (계획)

- [org_security_settings.md](./org_security_settings.md) — 조직별 보안 설정 (비밀번호 정책, MFA 필수, 세션 타임아웃)
- [self_registration.md](./self_registration.md) — 자가 회원가입 (POST /auth/signup)
- [email_verification.md](./email_verification.md) — 이메일 인증 (선택적, 조직 설정)
- [service_client_auth.md](./service_client_auth.md) — 서비스 간 인증 (client_credentials + token delegation)
- [suspicious_login_alert.md](./suspicious_login_alert.md) — 비정상 로그인 경고 (새 IP/디바이스 감지)
- [license_expiry_alert.md](./license_expiry_alert.md) — 라이선스 만료 경고
- [domain_auto_join.md](./domain_auto_join.md) — 도메인 기반 자동 가입 + 허용 이메일 도메인
- [log_masking.md](./log_masking.md) — 민감 정보 마스킹 (로그 serializer)
- [metrics_observability.md](./metrics_observability.md) — Prometheus / OpenTelemetry 메트릭
- [bootstrap_disable.md](./bootstrap_disable.md) — Bootstrap 시크릿 프로덕션 비활성화
- [saml_2_0.md](./saml_2_0.md) — SAML 2.0 엔터프라이즈 SSO
- [gdpr_hard_delete.md](./gdpr_hard_delete.md) — 하드 삭제 / GDPR 규정 준수
- [ip_access_control.md](./ip_access_control.md) — IP 허용/차단 리스트 + 의심 IP 자동 차단
- [user_profile_enhancement.md](./user_profile_enhancement.md) — 프로필 이미지 + 언어/로케일
- [api_versioning.md](./api_versioning.md) — API 버저닝 (/v1/ 접두사)
- [rbac_enhancement.md](./rbac_enhancement.md) — 역할 계층 + 와일드카드 권한 + 권한 검사 API

### v0.0.4 기능

- [system_settings.md](./system_settings.md) — 시스템 기본값 관리 (보안 정책, 토큰, 시스템, 알림, 라이선스)

## 관련 문서

- 내부 아키텍처: `../architecture.md`
- 데이터 모델: `../data_model.md`
- API 계약: `../api_contract.md`
