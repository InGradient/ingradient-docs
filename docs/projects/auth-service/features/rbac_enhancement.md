# 역할 계층 + 와일드카드 권한 + 권한 검사 API

- 문서명: 역할 계층 + 와일드카드 권한 + 권한 검사 API
- 목적: RBAC 시스템을 확장하여 역할 상속, 와일드카드 권한, 외부 권한 검사 API를 제공한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: RBAC 확장
- 한 줄 정의: 역할 계층(상속), 와일드카드 권한 패턴, 외부 서비스용 권한 검사 API를 추가하여 세분화된 접근 제어를 지원한다.

## 2. 문제 정의

- 현재 역할 간 상속 관계가 없어 상위 역할에 하위 권한을 일일이 할당해야 한다.
- `resource:*` 같은 와일드카드 패턴이 없어 권한 관리가 번거롭다.
- 외부 서비스가 권한을 확인할 표준 API가 없다.

## 3. 목표

- 사용자 목표: 역할 계층을 통해 자연스러운 권한 상속을 구현한다.
- 운영 목표: 와일드카드로 권한 수를 줄이고, 권한 검사 API로 일관된 접근 제어를 제공한다.

## 4. 범위 / 비범위

- 포함: 역할 계층 (parent_role_id), 와일드카드 권한 (`resource:*`, `*:read`), 권한 검사 API (`POST /auth/check-permission`)
- 비범위: ABAC(Attribute-Based Access Control), 동적 정책 엔진

## 5. 사용자 시나리오

### 기본 흐름 — 권한 검사 API

1. 참여자: 외부 서비스
2. 선행 조건: 유효한 서비스 토큰
3. 기본 흐름: `POST /auth/check-permission` (user_id, resource, action, org_id) → `{ allowed: true/false, reason: "..." }`
4. 예외 흐름: 사용자 미존재 → 404, 권한 미정의 → `{ allowed: false }`
5. 로그 포인트: `permission_check`

## 6. UI / UX 방향

- Admin Console → 역할 관리 → 부모 역할 선택 드롭다운
- 권한 할당 시 와일드카드 패턴 입력 지원

## 7. 데이터 / API / 권한 영향

- Role 테이블 확장: `parent_role_id` (자기참조 FK)
- Permission 매칭 로직: 와일드카드 (`*`) 지원 추가
- 새 API: `POST /auth/check-permission` (user_id, resource, action, context)
- 권한 해석 순서: 본인 역할 권한 → 부모 역할 권한 (재귀)

## 8. 테스트 계획

- unit: 와일드카드 매칭 (`product:*` → `product:read` 허용), 계층 탐색 로직
- integration: 부모 역할 권한 상속 확인, check-permission API 응답 검증
- e2e: 외부 서비스 → 권한 검사 → 접근 제어 적용

## 9. 릴리즈 고려사항

- release note: RBAC 확장 (역할 계층, 와일드카드 권한, 권한 검사 API)
- migration: Role 테이블에 parent_role_id 컬럼 추가

## 10. 오픈 이슈

- 순환 참조 방지 로직
- 와일드카드 우선순위 (명시적 deny vs 와일드카드 allow)
