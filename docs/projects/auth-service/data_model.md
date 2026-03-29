# auth-service Data Model

- 문서명: auth-service Data Model
- 목적: auth-service의 데이터 엔티티와 관계를 정의한다.
- 상태: Draft
- Owner: Auth
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `api_contract.md`

## 데이터 개요

auth-service는 identity와 access primitive를 소유한다. 다른 서비스는 auth DB를 직접 읽지 않고 API를 통해 조회한다.

## 핵심 엔티티

### User

사용자 계정.

| 필드 | 설명 |
|------|------|
| id | PK |
| email | 이메일 |
| loginId | 로그인 식별자 (unique) |
| displayName | 표시 이름 |
| passwordHash | 비밀번호 해시 |
| status | AccountStatus (ACTIVE, DISABLED, INVITED, LOCKED, PENDING) |
| isSystemAdmin | 시스템 관리자 플래그. 역할 시스템과 독립 |
| failedLoginAttempts | 연속 로그인 실패 횟수 |
| lockedUntil | 계정 잠금 해제 시각 |
| lastLoginAt | 마지막 로그인 시각 |
| deletedAt | 소프트 삭제 |

### Organization

사용자와 Product를 묶는 최상위 단위.

| 필드 | 설명 |
|------|------|
| id | PK |
| code | 고유 식별 코드 (unique) |
| name | 조직 이름 |
| status | OrganizationStatus (ACTIVE, SUSPENDED, DISABLED) |
| metadata | JSON 메타데이터 |
| deletedAt | 소프트 삭제 |

### Product

조직 하위 Product.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization (optional) |
| code | 고유 식별 코드 (unique) |
| name | Product 이름 |
| status | ProductStatus (ACTIVE, DISABLED, ARCHIVED) |
| metadata | JSON 메타데이터 |
| deletedAt | 소프트 삭제 |

### Membership

User와 Organization의 관계.

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | FK → User |
| organizationId | FK → Organization |
| roleId | FK → Role |
| status | MembershipStatus (ACTIVE, INVITED, SUSPENDED, EXPIRED) |
| joinedAt | 가입 시각 |
| expiresAt | 만료 시각 |
| deletedAt | 소프트 삭제 |

### ProductMembership

User의 Product별 역할. Membership 하위.

| 필드 | 설명 |
|------|------|
| id | PK |
| membershipId | FK → Membership |
| productId | FK → Product |
| roleId | FK → Role (optional, 별도 역할 부여 시) |
| status | ACTIVE, DISABLED 등 |
| deletedAt | 소프트 삭제 |

### Role

역할 정의.

| 필드 | 설명 |
|------|------|
| id | PK |
| code | 역할 코드 (ADMIN, ORGANIZER, MEMBER 등) |
| name | 표시 이름 |
| description | 설명 |
| scopeType | ScopeType (GLOBAL, ORGANIZATION, PRODUCT) |
| isSystem | 시스템 기본 역할 여부 |
| organizationId | FK → Organization (ORGANIZATION scope일 때) |

시드 데이터:

| 코드 | Scope | 설명 |
|------|-------|------|
| ADMIN | GLOBAL | Ingradient team. 전체 시스템 관리 |
| ORGANIZER | GLOBAL | 조직 관리자. 라이선스 범위 내 사용자/디바이스 관리 |
| MEMBER | GLOBAL | 인가된 플랫폼 사용자 |
| ORG_ADMIN | GLOBAL | 조직 관리자. 조직 내 멤버/디바이스/라이선스 관리 |
| ORG_MEMBER | GLOBAL | 조직 일반 멤버 |

### Permission

권한 정의. `resource:action` 패턴.

| 필드 | 설명 |
|------|------|
| id | PK |
| resource | 대상 리소스 (예: users) |
| action | 행위 (예: create) |
| code | 고유 권한 코드 (예: users:create) |
| description | 설명 |

### RolePermission

Role과 Permission의 매핑 (junction table).

| 필드 | 설명 |
|------|------|
| roleId | FK → Role |
| permissionId | FK → Permission |

### Session

로그인 세션.

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | FK → User |
| refreshTokenHash | Refresh Token 해시 |
| tokenFamilyId | 토큰 패밀리 식별자 |
| clientId | 클라이언트 식별자 |
| userAgent | 브라우저/앱 정보 |
| ipAddress | 접속 IP |
| status | SessionStatus (ACTIVE, REVOKED, EXPIRED) |
| lastUsedAt | 마지막 사용 시각 |
| expiresAt | 만료 시각 |
| revokedAt | 취소 시각 |

### PasswordResetToken

비밀번호 재설정 토큰.

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | FK → User |
| tokenHash | 토큰 해시 (unique) |
| expiresAt | 만료 시각 |
| usedAt | 사용 시각 |

### License

조직 라이선스.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization (unique, 조직당 1개) |
| planCode | 플랜 코드 (기본: standard) |
| maxUsers | 최대 사용자 수 (기본: 10) |
| maxDevices | 최대 디바이스 수 (기본: 5) |
| offlineEnabled | 오프라인 기능 허용 (기본: true) |
| offlineMaxDays | 오프라인 최대 유효일 (기본: 7) |
| offlineGraceMode | 유예 모드 (기본: read_only) |
| featuresJson | 기능 플래그 JSON |
| status | LicenseStatus (ACTIVE, SUSPENDED) |
| expiresAt | 만료 시각 |

### Device

Edge 디바이스.

| 필드 | 설명 |
|------|------|
| id | PK |
| licenseId | FK → License (optional) |
| organizationId | FK → Organization (optional) |
| deviceUid | 하드웨어 고유 식별자 (unique) |
| name | 디바이스 이름 |
| mode | online, offline |
| licenseKey | 라이선스 키 |
| status | DeviceStatus (PENDING, ACTIVE, REVOKED) |
| registeredAt | 등록 시각 |
| approvedAt | 승인 시각 |
| approvedByUserId | 승인자 |
| revokedAt | 취소 시각 |
| revokedByUserId | 취소자 |
| lastSeenAt | 마지막 확인 시각 |

### OfflineEntitlement

오프라인 접근 토큰.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization |
| userId | 대상 사용자 |
| deviceId | FK → Device |
| jti | JWT ID (unique) |
| tokenVersion | 토큰 버전 (현재 1) |
| validUntil | 유효 기간 |
| scopeJson | 범위 (role, features) |
| status | EntitlementStatus (ACTIVE, REVOKED) |
| issuedAt | 발급 시각 |
| revokedAt | 취소 시각 |
| revokedByUserId | 취소자 |

### Invitation

조직 초대.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization |
| email | 초대 대상 이메일 |
| roleId | FK → Role (부여할 역할) |
| token | 초대 토큰 (unique) |
| status | InvitationStatus (PENDING, ACCEPTED, EXPIRED, CANCELLED) |
| expiresAt | 만료 시각 |
| invitedByUserId | 초대자 |
| acceptedUserId | 수락한 사용자 (optional) |

### JoinCode

공개 가입 코드.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization |
| code | 가입 코드 (unique) |
| defaultRoleId | FK → Role (기본 부여 역할) |
| maxUses | 최대 사용 횟수 (optional) |
| usedCount | 사용된 횟수 |
| expiresAt | 만료 시각 (optional) |
| status | JoinCodeStatus (ACTIVE, EXPIRED, DISABLED) |

### AuditLog

감사 로그.

| 필드 | 설명 |
|------|------|
| id | PK |
| event | 이벤트 유형 |
| userId | 행위자 (optional) |
| orgId | 대상 조직 (optional) |
| meta | JSON 메타데이터 |
| createdAt | 발생 시각 |

주요 이벤트: `login_success`, `login_fail`, `logout`, `logout_all`, `account_locked`, `member_added`, `member_removed`, `member_role_changed`, `org_created`, `device_registered`, `device_revoked`, `invitation_created`, `invitation_accepted`, `join_code_used`, `password_reset_requested`, `password_reset_completed`, `license_assigned`, `entitlement_issued`, `entitlement_revoked`, `entitlement_renewed`, `sso_login_success`, `sso_jit_provision`, `session_revoked_by_admin`

### Webhook (v0.0.2)

웹훅 등록.

| 필드 | 설명 |
|------|------|
| id | PK |
| url | 콜백 URL |
| secret | HMAC 서명 시크릿 |
| events | 구독 이벤트 목록 (문자열 배열) |
| status | WebhookStatus (ACTIVE, DISABLED) |
| orgId | 대상 조직 (optional) |

### WebhookLog (v0.0.2)

웹훅 발송 로그.

| 필드 | 설명 |
|------|------|
| id | PK |
| webhookId | FK → Webhook |
| event | 이벤트 유형 |
| payload | 발송 페이로드 (JSON) |
| statusCode | HTTP 응답 코드 |
| success | 성공 여부 |
| error | 에러 메시지 (실패 시) |
| attempt | 시도 횟수 |

### IdpConfig (v0.0.2)

조직별 SSO IdP 설정.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization |
| provider | IdP 유형 (google, microsoft) |
| clientId | OAuth client ID |
| clientSecretEncrypted | OAuth client secret (암호화 저장) |
| scopes | OAuth scope |
| jitEnabled | JIT 자동 계정 생성 여부 |
| defaultRoleId | FK → Role (JIT 시 부여할 기본 역할) |

@@unique: (organizationId, provider)

### UserIdpLink (v0.0.2)

사용자-IdP 연결.

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | FK → User |
| provider | IdP 유형 |
| externalId | IdP 측 사용자 식별자 |
| email | IdP 제공 이메일 |

@@unique: (provider, externalId)

### OrgSecuritySettings (v0.0.3)

조직별 보안 정책 설정.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization (unique, 조직당 1개) |
| mfaRequired | MFA 필수 여부 (기본: false) |
| passwordMinLength | 비밀번호 최소 길이 (기본: 8) |
| passwordRequireUpper | 대문자 필수 (기본: false) |
| passwordRequireLower | 소문자 필수 (기본: true) |
| passwordRequireNumber | 숫자 필수 (기본: true) |
| passwordRequireSpecial | 특수문자 필수 (기본: false) |
| passwordHistoryCount | 비밀번호 이력 검사 수 (기본: 0 = 비활성) |
| passwordMaxAgeDays | 비밀번호 최대 수명 일수 (기본: 0 = 무제한) |
| maxConcurrentSessions | 최대 동시 세션 수 (기본: 0 = 무제한) |
| sessionTimeoutMinutes | 세션 타임아웃 분 (기본: 0 = 무제한) |
| selfRegistration | 자가 회원가입 허용 (기본: false) |

### OrgAllowedDomain (v0.0.3)

조직별 허용 이메일 도메인 (자동 가입).

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK -> Organization |
| domain | 이메일 도메인 (예: company.com) |
| defaultRoleId | FK -> Role (자동 부여 역할, optional) |

@@unique: (organizationId, domain)

### ServiceClient (v0.0.3)

서비스 간 인증용 클라이언트.

| 필드 | 설명 |
|------|------|
| id | PK |
| name | 클라이언트 이름 |
| clientId | 고유 클라이언트 ID (unique) |
| clientSecretHash | 클라이언트 시크릿 bcrypt 해시 |
| scopes | 허용 범위 (문자열 배열) |
| status | ACTIVE, DISABLED |
| lastUsedAt | 마지막 사용 시각 |

### KnownLoginLocation (v0.0.3)

사용자 로그인 위치 이력 (의심 로그인 탐지).

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | FK -> User |
| ipAddress | IP 주소 |
| lastSeen | 마지막 확인 시각 |

@@unique: (userId, ipAddress)

### AlertHistory (v0.0.3)

알림 발송 이력 (라이선스 만료 등 중복 방지).

| 필드 | 설명 |
|------|------|
| id | PK |
| type | 알림 유형 |
| targetId | 대상 ID |
| channel | 발송 채널 |
| sentAt | 발송 시각 |

### IpRule (v0.0.3)

IP 접근 제어 규칙.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK -> Organization (optional) |
| type | ALLOW 또는 DENY |
| cidr | IP 또는 CIDR |
| description | 설명 (optional) |

### ErasureRequest (v0.0.3)

GDPR 삭제 요청.

| 필드 | 설명 |
|------|------|
| id | PK |
| userId | 삭제 대상 사용자 |
| requestedBy | 요청자 |
| reason | 사유 (optional) |
| status | PENDING, PROCESSED |
| processedAt | 처리 시각 |

### User 모델 변경 (v0.0.3)

| 추가 필드 | 설명 |
|-----------|------|
| emailVerified | 이메일 인증 여부 (기본: false) |
| avatarUrl | 프로필 이미지 URL (optional) |
| locale | 언어/로케일 (기본: en) |
| timezone | 타임존 (기본: UTC) |

### Role 모델 변경 (v0.0.3)

| 추가 필드 | 설명 |
|-----------|------|
| parentRoleId | FK -> Role (역할 계층 구조, optional) |

### IdpConfig 모델 변경 (v0.0.3)

| 추가 필드 | 설명 |
|-----------|------|
| protocol | 프로토콜 (기본: oidc, saml 가능) |
| samlEntityId | SAML Entity ID (optional) |
| samlCertificate | SAML 인증서 (optional) |

### SystemSettings (v0.0.4)

시스템 전체 기본 설정 (단일 행).

| 필드 | 설명 |
|------|------|
| id | PK |
| defaultMfaRequired | MFA 필수 기본값 (false) |
| defaultPasswordMinLength | 비밀번호 최소 길이 기본값 (8) |
| defaultPasswordRequireUpper | 대문자 필수 기본값 (false) |
| defaultPasswordRequireLower | 소문자 필수 기본값 (true) |
| defaultPasswordRequireNumber | 숫자 필수 기본값 (true) |
| defaultPasswordRequireSpecial | 특수문자 필수 기본값 (false) |
| defaultPasswordHistoryCount | 비밀번호 이력 수 기본값 (0) |
| defaultPasswordMaxAgeDays | 비밀번호 만료 일수 기본값 (0) |
| defaultMaxConcurrentSessions | 최대 동시 세션 기본값 (0 = 무제한) |
| defaultSessionTimeoutMinutes | 세션 타임아웃 기본값 (0 = 무제한) |
| defaultSelfRegistration | 셀프 가입 기본값 (false) |
| defaultAccountLockAttempts | 계정 잠금 실패 횟수 기본값 (5) |
| defaultAccountLockMinutes | 계정 잠금 시간 기본값 (15) |
| accessTokenTtlSeconds | Access Token TTL 기본값 (3600) |
| refreshTokenTtlDays | Refresh Token TTL 기본값 (30) |
| offlineEntitlementDefaultDays | 오프라인 Entitlement 유효 기간 기본값 (7) |
| systemName | 시스템 이름 (INGRADIENT) |
| systemLogoUrl | 시스템 로고 URL (optional) |
| defaultRoleCode | 기본 역할 코드 (MEMBER) |
| invitationTtlHours | 초대 유효 시간 기본값 (72) |
| joinCodeExpiryDays | 가입 코드 만료 일수 기본값 (30) |
| emailProvider | 이메일 발송 방식 (console) |
| emailFromAddress | 발신자 이메일 (noreply@ingradient.io) |
| webhookGlobalEnabled | 웹훅 글로벌 활성화 (true) |
| defaultPlanCode | 기본 플랜 코드 (basic) |
| defaultMaxUsers | 기본 최대 사용자 수 (10) |
| defaultMaxDevices | 기본 최대 디바이스 수 (5) |
| defaultOfflineEnabled | 오프라인 기본 활성화 (false) |
| defaultOfflineMaxDays | 오프라인 최대 일수 기본값 (30) |
| defaultOfflineGraceMode | 오프라인 유예 모드 기본값 (read_only) |

## 엔티티 관계

```
User ─┬─ Membership ─┬─ Organization ─┬─ IdpConfig ─── Role (default)
      │              ├─ Role          │
      │              └─ ProductMembership ─┬─ Product
      │                                    └─ Role (optional)
      ├─ Session
      ├─ PasswordResetToken
      ├─ UserIdpLink
      ├─ KnownLoginLocation
      └─ UserMfa

Organization ─┬─ Product
              ├─ Membership
              ├─ License ─── Device ─── OfflineEntitlement
              ├─ Invitation
              ├─ JoinCode
              ├─ Webhook ─── WebhookLog
              ├─ OrgSecuritySettings
              ├─ OrgAllowedDomain
              └─ IpRule

Role ─┬─ RolePermission ─── Permission
      └─ Role (parent, self-relation)

ServiceClient (standalone)
AlertHistory (standalone)
ErasureRequest (standalone)
SystemSettings (singleton — 시스템 전체 기본값)
```

## 저장 위치

- auth-service 전용 relational DB (PostgreSQL + Prisma)

## 주의사항

- 다른 서비스는 auth DB를 직접 읽지 않고 API를 통해 조회한다
- Product-specific authorization 의미 해석은 downstream 서비스에 남긴다
- Edge 오프라인 경로를 위해 auth 데이터 일부가 `.ige` 패키지로 export될 수 있지만 SoT는 auth-service다
