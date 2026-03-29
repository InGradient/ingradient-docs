# auth-service Architecture

- 문서명: auth-service Architecture
- 목적: auth-service의 내부 구조와 모듈 구성을 설명한다.
- 상태: Draft
- Owner: Auth
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `data_model.md`, `api_contract.md`, `../../api/auth_api.md`

## 내부 구조 개요

auth-service는 INGRADIENT 전체의 인증, 인가, 조직/Product 접근 기초 사실을 관리하는 중앙 서비스다.

- 사용자 identity와 인증 (로그인, 세션, 토큰)
- 조직과 Product 관리
- 멤버십과 역할/권한 관리
- 라이선스와 디바이스 관리
- 초대와 가입 코드
- 오프라인 엔타이틀먼트 발급
- 감사 로그

## 모듈 구성

| 모듈 | 책임 |
|------|------|
| auth | 로그인, 로그아웃, 토큰 갱신, 비밀번호 재설정, 토큰 검증 |
| users | 사용자 CRUD, 계정 상태 관리, Edge 자격증명 발급 |
| organizations | 조직 CRUD, 상태 관리 |
| products | Product CRUD, Product 멤버 관리 |
| memberships | 조직 멤버십 CRUD, 역할 변경, 정지/삭제 |
| roles | 역할 조회/생성, 권한 할당 |
| permissions | 권한 조회/생성 |
| sessions | 세션 조회, 개별 세션 취소 |
| tokens (jwt) | Access Token / Refresh Token / Admin Token 서명 및 검증 |
| licenses | 조직 라이선스 할당, 오프라인 디바이스 라이선스 발급/취소 |
| devices | 디바이스 등록, 조회, 승인, 취소 |
| invitations | 이메일 초대 생성, 수락, 취소 |
| join-codes | 가입 코드 생성, 사용, 비활성화 |
| offline (entitlements) | 오프라인 엔타이틀먼트 발급/취소, RS256 JWT |
| audit | 감사 로그 기록 |

## 역할 체계

### System Admin

`User.isSystemAdmin` 플래그로 관리한다. 역할(Role) 시스템과 독립적이다.
- 조직 생성, 사용자 관리, 라이선스 할당 등 시스템 전체 관리 권한
- Admin 전용 토큰에 `is_admin: true` claim 포함

### 시스템 역할 (Global Scope)

seed로 생성되는 3개 기본 역할이다.

| 코드 | 이름 | 설명 |
|------|------|------|
| ADMIN | Admin | Ingradient team. 전체 시스템 관리 |
| ORGANIZER | Organizer | 조직 관리자. 라이선스 범위 내에서 사용자와 디바이스 관리 |
| MEMBER | Member | 인가된 플랫폼 사용자 |

### 역할 코드 매핑 (mapRoleCode)

JWT Access Token의 `role_code` claim에는 아래 3개 값만 들어간다.

```
DB 코드        → JWT role_code
OWNER, ADMIN   → 'admin'
MANAGER, ORGANIZER → 'organizer'
그 외          → 'member'
```

레거시 코드(OWNER, MANAGER)와의 호환을 위한 매핑이다.

### 역할 Scope

| Scope | 설명 |
|-------|------|
| GLOBAL | 시스템 전체 적용. 시드 역할 3개가 여기에 해당 |
| ORGANIZATION | 조직별 커스텀 역할 |
| PRODUCT | Product별 커스텀 역할 |

### 역할과 비즈니스 권한의 분리

auth-service는 역할과 권한의 기초 사실만 소유한다. "이 화면에서 export 버튼을 보여줄 것인가" 같은 최종 비즈니스 권한 해석은 각 downstream 서비스(platform, edge 등)가 담당한다.

## 인증 흐름

### Access Token

- 알고리즘: HS256
- TTL: 기본 3600초 (1시간), `ACCESS_TOKEN_TTL_SECONDS`로 설정
- Claims: `sub`, `org_id`, `login_id`, `role_code`, `jti`, `iat`, `exp`

### Refresh Token

- TTL: 기본 30일, `REFRESH_TOKEN_TTL_DAYS`로 설정
- Session 테이블에 `refreshTokenHash`로 저장

### Offline Entitlement Token

- 알고리즘: RS256 (비대칭)
- 발급 대상: 특정 디바이스 + 사용자 바인딩
- Claims: `sub`, `org_id`, `device_id`, `device_uid`, `role`, `features`, `license_exp`, `token_version`
- 대상: ingradient-edge

### Bootstrap 인증

- `BOOTSTRAP_SECRET` 환경변수 기반
- 서비스 간 통신 또는 초기 관리자 작업에 사용
- 일반 사용자 JWT와 독립

## 인증 Guard

| Guard | 용도 |
|-------|------|
| requireBearer | 유효한 Access Token 필수 |
| requireAdmin | System Admin 권한 필수 |
| adminOrBootstrap | Admin 또는 Bootstrap 인증 허용 |
| bearerOrBootstrap | Bearer 토큰 또는 Bootstrap 인증 허용 |

## 보안 정책

| 항목 | 값 |
|------|-----|
| 로그인 실패 최대 횟수 | 5회 |
| 계정 잠금 시간 | 15분 |
| API JSON 케이스 | 외부: snake_case, 내부: camelCase |

## 외부 인터페이스

- 모든 서비스는 auth-service의 토큰 검증 API를 통해 인증한다
- Downstream 서비스가 membership과 product access를 조회한다
- Edge는 오프라인용 Entitlement 토큰을 auth-service로부터 발급받는다

## 확장 포인트

- Domain-separated deployment
- SSO / OAuth provider integration (향후)
- Organization/Product scope 커스텀 역할 확장
