# 핵심 CRUD (사용자, 조직, Product)

- 적용 범위: auth-service
- 상태: Released (v0.0.1)
- 마지막 수정일: 2026-03-29

## 개요

사용자, 조직, Product의 기본 생성/조회/수정/삭제와 멤버십 매핑.

## 사용자

- `POST /users` — 관리자/Bootstrap이 사용자 생성
- `GET /users`, `GET /users/:id` — 조회
- `PATCH /users/:id` — 수정 (이름, 이메일, 역할, 상태)
- `DELETE /users/:id` — soft delete
- 상태: ACTIVE, DISABLED, INVITED, LOCKED

## 조직

- `POST /organizations` — 생성 (code unique)
- `GET /organizations`, `GET /organizations/:id` — 조회
- `PATCH /organizations/:id` — 수정 (이름, 상태)
- 상태: ACTIVE, SUSPENDED, DISABLED

## Product

- `POST /products` — 생성 (code unique, 조직 연결)
- `GET /products`, `PATCH /products/:id`, `DELETE /products/:id`
- `POST /products/:id/members` — Product 멤버 배정
- `GET /auth/me?product_code=xxx` — Product 컨텍스트 조회

## 멤버십

- `POST /organizations/:orgId/memberships` — 조직 멤버 추가
- `PATCH /memberships/:id` — 역할 변경
- `POST /memberships/:id/suspend` — 정지
- `DELETE /memberships/:id` — 제거

## 역할 / 권한

- `POST /roles`, `POST /permissions` — CRUD
- `POST /roles/:id/permissions` — 매핑
- scope: GLOBAL / ORGANIZATION / PRODUCT
- 시드: ADMIN, ORGANIZER, MEMBER
