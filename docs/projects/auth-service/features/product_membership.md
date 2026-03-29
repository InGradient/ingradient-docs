# Product 및 멤버십 관리

- 문서명: Product 및 멤버십 관리
- 목적: Product CRUD, Product 멤버 배정, 조직-Product 멤버십 상태 관리를 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §5

## 1. 기능 개요

- 기능 이름: Product 및 멤버십 관리
- 한 줄 정의: 조직 내 Product를 생성/관리하고, 조직 멤버를 Product에 배정하여 접근 범위를 세분화한다.

## 2. 문제 정의

- 조직 단위보다 세밀한 접근 제어가 필요하다 (같은 조직이지만 Product별로 다른 데이터에 접근).
- downstream 서비스(platform, edge, medilabel)가 `product_code`로 Product를 식별한다.
- 조직 멤버십과 Product 멤버십의 관계가 명확해야 한다.

## 3. 목표

- 사용자 목표: 관리자가 Product별로 멤버와 역할을 배정한다.
- 운영 목표: `product_code` 기반으로 downstream 서비스에 일관된 접근 제어를 제공한다.

## 4. 범위 / 비범위

- 포함: Product CRUD (ACTIVE/DISABLED/ARCHIVED), Product 멤버 추가/제거/역할 변경, 멤버십 상태 관리 (ACTIVE/INVITED/SUSPENDED/EXPIRED), Product 컨텍스트 (`product_code`)
- 비범위: Product 간 데이터 격리 (downstream 책임), Product 역할 상속 로직 명확화 (P1)

## 5. 사용자 시나리오

### 기본 흐름 — Product 생성

1. 참여자: System Admin
2. 선행 조건: admin 권한
3. 기본 흐름: `POST /products { code, name, status?, org_id? }` → code 중복 검사 (2-50자, kebab-case) → name 검증 (1-200자) → org_id 존재 확인 → 생성 (status = ACTIVE)
4. 예외 흐름: code 중복 → 409 PRODUCT_CODE_EXISTS
5. 로그 포인트: `product_create`

### 기본 흐름 — Product 멤버 추가

1. 참여자: System Admin
2. 선행 조건: 대상 사용자가 조직 멤버여야 한다
3. 기본 흐름: `POST /products/:id/members { login_id, role }` → 조직 멤버 확인 (400 NOT_ORG_MEMBER) → Product 멤버 중복 확인 (409 ALREADY_PRODUCT_MEMBER) → product_membership 생성
4. 로그 포인트: `product_member_add`

### 기본 흐름 — Product 컨텍스트 조회

1. 참여자: 소비 앱 (platform, edge 등)
2. 기본 흐름: `GET /auth/me?product_code=xxx` → product_code → product_id 해석 → Product 멤버십 확인 → Product 기준 역할/권한 반환
3. 예외 흐름: Product 멤버 아님 → 403 NOT_PRODUCT_MEMBER

### 기본 흐름 — 멤버십 상태 전환

1. 조직 멤버십 정지: `POST /memberships/:id/suspend` → status = SUSPENDED → 조직 관련 세션 폐기
2. 조직 멤버십 삭제: `DELETE /memberships/:id` → soft delete → 하위 product_membership 연쇄 삭제

## 6. UI / UX 방향

- Admin Console Product 목록: 이름, 코드, 상태, 멤버 수
- Product 상세: 멤버 목록 (역할 표시), 멤버 추가/제거
- 조직 상세 → 멤버 탭: 상태 표시, 정지/삭제 버튼

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /products` — admin
  - `GET /products?org_id=&query=&status=` — admin 또는 멤버
  - `PATCH /products/:id { name?, code?, status? }` — admin
  - `DELETE /products/:id` — admin (soft delete)
  - `POST /products/:id/members { login_id, role }` — admin
  - `GET /products/:id/members?query=` — admin 또는 Product 멤버
  - `PATCH /products/:id/members/:memberId { role }` — admin
  - `DELETE /products/:id/members/:memberId` — admin
- 테이블: `products` (id, organization_id, code, name, status, deleted_at), `product_memberships` (id, membership_id, product_id, role_id, status)
- 코드 규칙: `/^[a-z0-9][a-z0-9-]*[a-z0-9]$/`, 2-50자

## 8. 테스트 계획

- unit: code 검증, 조직 멤버 전제 조건 검사, 상태 전환 로직
- integration: Product 생성 → 멤버 추가 → `/auth/me?product_code=` 조회 → 올바른 역할 반환
- e2e: Admin Console에서 Product 생성 → 멤버 배정 → 멤버 역할 변경

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: downstream 서비스가 `product_code`를 환경변수로 사용하므로 코드 변경 시 영향 파악 필요

## 10. 오픈 이슈

- Product 역할 상속 (null이면 조직 역할 사용) 로직이 명시적이지 않음 → gap-analysis §5 참조
- Product 아카이브 시 멤버십 처리 정책 구체화 필요
