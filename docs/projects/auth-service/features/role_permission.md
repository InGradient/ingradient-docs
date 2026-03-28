# 역할 및 권한 관리

- 문서명: 역할 및 권한 관리
- 목적: RBAC 기반 역할 CRUD, 권한 정의, 역할-권한 매핑, 시스템 역할 시드를 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §6, role_permission_flow.md

## 1. 기능 개요

- 기능 이름: 역할 및 권한 관리
- 한 줄 정의: 스코프(GLOBAL/ORGANIZATION/PROJECT)별 역할을 정의하고, resource:action 패턴 권한을 매핑하여 RBAC를 구성한다.

## 2. 문제 정의

- 멀티 프로덕트 환경에서 일관된 역할/권한 체계가 필요하다.
- 조직별, 프로젝트별로 다른 역할을 부여할 수 있어야 한다.
- downstream 서비스가 JWT의 `role_code`를 기반으로 접근 제어를 판단한다.

## 3. 목표

- 사용자 목표: 관리자가 역할과 권한을 유연하게 구성한다.
- 운영 목표: 전체 서비스에 일관된 인가 기반을 제공한다.

## 4. 범위 / 비범위

- 포함: 역할 CRUD (scope_type, is_system), 권한 CRUD (resource:action 패턴), 역할-권한 매핑 (다대다), 시스템 역할 시드 (ADMIN/ORGANIZER/MEMBER), 역할 코드 매핑 (JWT role_code 변환)
- 비범위: 권한 검사 API (P1), 와일드카드 권한 (P3), 역할 계층 (P3)

## 5. 사용자 시나리오

### 기본 흐름 — 역할 생성

1. 참여자: System Admin
2. 기본 흐름: `POST /roles { code, name, scope_type, organization_id?, description? }` → scope_type 검증 (GLOBAL/ORGANIZATION/PROJECT) → 역할 생성
3. 시스템 반응: `is_system = false` (사용자 정의 역할)

### 기본 흐름 — 권한 정의 및 매핑

1. 참여자: System Admin
2. 기본 흐름: `POST /permissions { resource, action, code, description? }` → 권한 생성 (예: `{ resource: "datasets", action: "write", code: "datasets:write" }`) → `POST /roles/:id/permissions { permission_ids: [...] }` → 역할에 권한 바인딩 (기존 유지, additive)
3. 예외 흐름: 역할/권한 미존재 → 404

### 시스템 흐름 — 역할 코드 매핑

1. 로그인/토큰 갱신 시 멤버십의 role을 JWT `role_code`로 변환
2. 매핑 규칙: OWNER/ADMIN → `"admin"`, MANAGER/ORGANIZER → `"organizer"`, 그 외 → `"member"`
3. downstream 서비스는 `role_code`로 접근 레벨을 판단

### 시스템 흐름 — 시드 역할

1. 서비스 초기화 시 seed 스크립트 실행
2. GLOBAL scope 시스템 역할: ADMIN, ORGANIZER, MEMBER (`is_system = true`)
3. 조직 생성 시 자동: org_admin, org_member (ORGANIZATION scope)

## 6. UI / UX 방향

- Admin Console에서 직접적인 역할/권한 관리 UI는 현재 미구현
- 사용자/멤버십 관리 시 역할 드롭다운으로 선택

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /roles { code, name, scope_type, organization_id?, description? }` — admin
  - `POST /permissions { resource, action, code, description? }` — admin
  - `POST /roles/:id/permissions { permission_ids }` — admin (additive 바인딩)
  - `DELETE /roles/:id/permissions/:permissionId` — admin
- 테이블: `roles` (id, code, name, scope_type, organization_id, is_system), `permissions` (id, resource, action, code, description), `role_permissions` (role_id, permission_id)
- scope_type: GLOBAL (시스템 전체), ORGANIZATION (조직 범위), PROJECT (프로젝트 범위)

## 8. 테스트 계획

- unit: 역할 코드 매핑 로직, scope_type 검증
- integration: 역할 생성 → 권한 정의 → 매핑 → 로그인 시 JWT role_code 확인
- e2e: 멤버십 역할 변경 → 토큰 갱신 → 새 role_code 반영 확인

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: seed 스크립트로 기본 역할 생성. 커스텀 역할은 Admin API로 추가.

## 10. 오픈 이슈

- `POST /auth/check-permission` 엔드포인트 미구현 → gap-analysis §6 참조
- 와일드카드 권한 (`datasets:*`, `*:read`) 미지원 → P3
- 역할 계층 (상위 역할이 하위 권한 포함) 미구현 → P3
- 기본 역할 시드 범위 확인 필요 (전체 기본 역할이 자동 생성되는지)
