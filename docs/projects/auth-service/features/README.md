# auth-service Features

- 버전: 0.0.2
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
| 세션 관리 | 활성 세션 목록 조회, 개별 세션 취소 | |
| 토큰 검증 | Access Token 유효성 검증 API (downstream 서비스용) | |
| 계정 잠금 | 로그인 5회 실패 시 15분 자동 잠금 | |
| 비밀번호 재설정 | forgot-password → 토큰 발급 → 새 비밀번호 설정 | |
| Admin 로그인 | System Admin 전용 로그인, `is_admin` claim 포함 토큰 발급 | |
| Bootstrap 인증 | 서비스 간 통신용 BOOTSTRAP_SECRET 기반 인증 | |

### 사용자 관리

| 기능 | 설명 | 문서 |
|------|------|------|
| 사용자 CRUD | 생성, 조회, 수정, 삭제 (soft delete) | |
| 계정 상태 관리 | ACTIVE, DISABLED, INVITED, LOCKED 상태 전환 | |
| System Admin 플래그 | isSystemAdmin으로 시스템 전체 관리 권한 부여 (역할 시스템과 독립) | |
| Edge 자격증명 | 여러 사용자의 Edge 인증 정보 일괄 발급 | |
| 사용자 활동 조회 | 특정 사용자의 활동 로그 조회 | |

### 조직 / 프로젝트

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 CRUD | 생성, 조회, 수정 (이름/상태). 상태: ACTIVE, SUSPENDED, DISABLED | [organization_license_admin.md](./organization_license_admin.md) |
| 프로젝트 CRUD | 생성, 조회, 수정, 삭제. 상태: ACTIVE, DISABLED, ARCHIVED | |
| 프로젝트 멤버 관리 | 프로젝트에 멤버 추가/삭제, 프로젝트별 역할 부여 | |

### 멤버십

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 멤버십 | 사용자를 조직에 추가, 역할 부여, 정지, 삭제 | [organization_license_admin.md](./organization_license_admin.md) |
| 멤버십 상태 관리 | ACTIVE, INVITED, SUSPENDED, EXPIRED 상태 전환 | |
| 프로젝트 멤버십 | Membership 하위로 프로젝트별 역할 부여 | |

### 역할 / 권한

| 기능 | 설명 | 문서 |
|------|------|------|
| 시스템 역할 | ADMIN, ORGANIZER, MEMBER 3개 기본 역할 (GLOBAL scope, seed) | |
| 역할 코드 매핑 | JWT role_code로 매핑 (OWNER/ADMIN→admin, MANAGER/ORGANIZER→organizer, 그 외→member) | |
| 커스텀 역할 | ORGANIZATION 또는 PROJECT scope로 커스텀 역할 생성 가능 | |
| 권한 관리 | resource:action 패턴 권한 정의, RolePermission으로 역할에 매핑 | |

### 초대 / 가입

| 기능 | 설명 | 문서 |
|------|------|------|
| Invitation | 이메일로 조직 초대, 역할 지정. 상태: PENDING, ACCEPTED, EXPIRED, CANCELLED | |
| Join Code | 공개 가입 코드 생성, 최대 사용 횟수/만료 설정. 상태: ACTIVE, EXPIRED, DISABLED | |

### 라이선스

| 기능 | 설명 | 문서 |
|------|------|------|
| 조직 라이선스 | 조직당 1개 라이선스 할당 (maxUsers, maxDevices, offlineMaxDays, featuresJson) | [organization_license_admin.md](./organization_license_admin.md) |
| 라이선스 사용량 조회 | 현재 사용자/디바이스 수 vs 한도 조회 | |
| 오프라인 디바이스 라이선스 | fingerprint 기반 오프라인 디바이스 라이선스 발급/취소 | |

### 디바이스

| 기능 | 설명 | 문서 |
|------|------|------|
| 디바이스 등록 | Device UID (fingerprint) 기반 등록. 상태: PENDING | |
| 디바이스 승인/취소 | Admin이 승인 (ACTIVE) 또는 취소 (REVOKED) | |
| 디바이스 목록 | 조직별 디바이스 조회, 삭제 | |

### 오프라인 엔타이틀먼트

| 기능 | 설명 | 문서 |
|------|------|------|
| Entitlement 발급 | 디바이스+사용자 바인딩 오프라인 JWT 발급 (RS256) | |
| Entitlement 취소 | JTI 기반 취소 | |
| Entitlement 목록 | 조직별 엔타이틀먼트 조회 | |

### 감사 로그

| 기능 | 설명 | 문서 |
|------|------|------|
| Audit Log | 주요 이벤트 자동 기록 (login, member 변경, device, invitation, license, entitlement 등) | |

## 상세 기능 문서

현재 상세 문서가 작성된 기능:

- [login_refresh_flow.md](./login_refresh_flow.md) — 로그인, 토큰 갱신, 로그아웃 흐름
- [organization_license_admin.md](./organization_license_admin.md) — 조직, 라이선스, 관리자 운영

## 관련 문서

- 내부 아키텍처: `../architecture.md`
- 데이터 모델: `../data_model.md`
- API 계약: `../api_contract.md`
