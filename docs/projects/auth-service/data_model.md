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
| status | AccountStatus (ACTIVE, DISABLED, INVITED, LOCKED) |
| isSystemAdmin | 시스템 관리자 플래그. 역할 시스템과 독립 |
| failedLoginAttempts | 연속 로그인 실패 횟수 |
| lockedUntil | 계정 잠금 해제 시각 |
| lastLoginAt | 마지막 로그인 시각 |
| deletedAt | 소프트 삭제 |

### Organization

사용자와 프로젝트를 묶는 최상위 단위.

| 필드 | 설명 |
|------|------|
| id | PK |
| code | 고유 식별 코드 (unique) |
| name | 조직 이름 |
| status | OrganizationStatus (ACTIVE, SUSPENDED, DISABLED) |
| metadata | JSON 메타데이터 |
| deletedAt | 소프트 삭제 |

### Project

조직 하위 프로젝트.

| 필드 | 설명 |
|------|------|
| id | PK |
| organizationId | FK → Organization (optional) |
| code | 고유 식별 코드 (unique) |
| name | 프로젝트 이름 |
| status | ProjectStatus (ACTIVE, DISABLED, ARCHIVED) |
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

### ProjectMembership

User의 프로젝트별 역할. Membership 하위.

| 필드 | 설명 |
|------|------|
| id | PK |
| membershipId | FK → Membership |
| projectId | FK → Project |
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
| scopeType | ScopeType (GLOBAL, ORGANIZATION, PROJECT) |
| isSystem | 시스템 기본 역할 여부 |
| organizationId | FK → Organization (ORGANIZATION scope일 때) |

시드 데이터:

| 코드 | Scope | 설명 |
|------|-------|------|
| ADMIN | GLOBAL | Ingradient team. 전체 시스템 관리 |
| ORGANIZER | GLOBAL | 조직 관리자. 라이선스 범위 내 사용자/디바이스 관리 |
| MEMBER | GLOBAL | 인가된 플랫폼 사용자 |

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

주요 이벤트: `login_success`, `login_fail`, `logout`, `account_locked`, `member_added`, `member_removed`, `member_role_changed`, `org_created`, `device_registered`, `device_revoked`, `invitation_created`, `invitation_accepted`, `join_code_used`, `password_reset_requested`, `password_reset_completed`, `license_assigned`, `entitlement_issued`, `entitlement_revoked`

## 엔티티 관계

```
User ─┬─ Membership ─┬─ Organization
      │              ├─ Role
      │              └─ ProjectMembership ─┬─ Project
      │                                    └─ Role (optional)
      ├─ Session
      └─ PasswordResetToken

Organization ─┬─ Project
              ├─ Membership
              ├─ License ─── Device ─── OfflineEntitlement
              ├─ Invitation
              └─ JoinCode

Role ─── RolePermission ─── Permission
```

## 저장 위치

- auth-service 전용 relational DB (PostgreSQL + Prisma)

## 주의사항

- 다른 서비스는 auth DB를 직접 읽지 않고 API를 통해 조회한다
- Project-specific authorization 의미 해석은 downstream 서비스에 남긴다
- Edge 오프라인 경로를 위해 auth 데이터 일부가 `.ige` 패키지로 export될 수 있지만 SoT는 auth-service다
