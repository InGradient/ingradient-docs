# 사용자 관리

- 문서명: 사용자 관리
- 목적: 사용자 CRUD, 상태 전환, System Admin 플래그, Edge 자격증명 발급, 활동 조회를 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §3

## 1. 기능 개요

- 기능 이름: 사용자 관리
- 한 줄 정의: 관리자가 사용자를 생성/조회/수정/삭제하고, 상태를 전환하며, Edge용 자격증명을 발급한다.

## 2. 문제 정의

- 멀티 프로덕트 환경에서 중앙화된 사용자 관리가 필요하다.
- 사용자 상태(활성, 비활성, 잠금)에 따른 접근 제어가 필요하다.
- Edge 디바이스에서 오프라인 인증을 위한 자격증명 발급이 필요하다.

## 3. 목표

- 사용자 목표: 관리자가 사용자를 효율적으로 관리한다.
- 운영 목표: 사용자 생명주기를 중앙에서 일관되게 통제한다.

## 4. 범위 / 비범위

- 포함: 사용자 CRUD, 상태 관리 (ACTIVE/DISABLED/INVITED/LOCKED/PENDING), System Admin 플래그, Edge 자격증명, 활동 조회, 관리자 강제 로그아웃, 사용자 승인 (PENDING → ACTIVE)
- 비범위: 자가 회원가입 (P2), 이메일 인증 (P2), 프로필 이미지 (P3), 하드 삭제/GDPR (P3)

## 5. 사용자 시나리오

### 기본 흐름 — 사용자 생성

1. 참여자: System Admin
2. 선행 조건: adminOrBootstrap 권한
3. 기본 흐름: `POST /users { login_id, password, display_name, email? }` → login_id 중복 검사 → email 중복 검사 → bcrypt(12) 해시 → 사용자 생성 (status = ACTIVE)
4. 예외 흐름: login_id 중복 → 409 LOGIN_ID_EXISTS. email 중복 → 409 EMAIL_EXISTS.
5. 로그 포인트: `user_create`

### 기본 흐름 — 상태 전환

1. 참여자: System Admin
2. 기본 흐름: `PATCH /users/:id { status: "DISABLED" }` → 상태 변경 → DISABLED 시 해당 사용자의 모든 활성 세션 즉시 폐기
3. 시스템 반응: 비활성 사용자 로그인 시도 → 403 ACCOUNT_DISABLED
4. 로그 포인트: `user_disable`, `user_enable`

### 기본 흐름 — Edge 자격증명

1. 참여자: 서비스 (Bootstrap 또는 Admin)
2. 기본 흐름: `POST /users/edge-credentials` → 여러 사용자의 Edge 인증 정보 (salt + hash) 일괄 생성 → 반환

### 기본 흐름 — 관리자 강제 로그아웃

1. 참여자: System Admin
2. 기본 흐름: `POST /users/:id/logout` → 대상 사용자의 모든 활성 세션 폐기
3. 로그 포인트: `admin_force_logout` (session_count 포함)

## 6. UI / UX 방향

- Admin Console 사용자 목록: 검색 (login_id, name, email), 역할/상태 필터
- 사용자 상세: 프로필 정보, 상태 토글, 비밀번호 초기화, 강제 로그아웃, 멤버십 목록
- 사용자 생성 모달: login_id, 이름, 이메일, 초기 비밀번호 입력

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /users` — adminOrBootstrap
  - `GET /users?query=&role=&status=` — admin
  - `GET /users/:id` — adminOrBootstrap
  - `PATCH /users/:id` — adminOrBootstrap. 변경 가능: display_name, email, role, status, password, is_system_admin, products
  - `DELETE /users/:id` — admin. soft delete (deleted_at 설정). 자기 자신 삭제 불가 (400 CANNOT_DELETE_SELF)
  - `POST /users/:id/logout` — admin
  - `POST /users/:id/approve` — admin. PENDING → ACTIVE 전환 (v0.0.4)
  - `POST /users/edge-credentials` — adminOrBootstrap
- 테이블: `users` (id, login_id, password_hash, display_name, email, status, is_system_admin, failed_login_attempts, locked_until, last_login_at, created_at, updated_at, deleted_at)
- 검증: login_id (3-100자, 영숫자/이메일), display_name (1-200자), email (이메일 형식, nullable)

## 8. 테스트 계획

- unit: 중복 검사, 상태 전환 로직, 검증 규칙
- integration: 생성 → 조회 → 수정 → 삭제 전체 플로우, 비활성화 시 세션 폐기 확인
- e2e: Admin Console에서 사용자 생성 → 목록 확인 → 상태 변경 → 강제 로그아웃

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: 사용자 수 증가 시 페이지네이션 필요 → api_pagination_sorting 참조

## 10. 오픈 이슈

- 페이지네이션 미구현 (api_pagination_sorting.md에서 별도 다룸)
- 하드 삭제 / GDPR 삭제는 P3
- 이메일 인증은 P2 (email_verification 기능으로 분리)
