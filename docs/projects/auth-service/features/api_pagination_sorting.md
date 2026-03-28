# API 페이지네이션 및 정렬

- 문서명: API 페이지네이션 및 정렬
- 목적: 모든 목록 API에 페이지네이션과 정렬 파라미터를 추가하여 대량 데이터 환경에서도 안정적으로 동작하게 한다.
- 적용 범위: auth-service 전체 목록 API
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §3, §4, §15, feature-requirements.md §14

## 1. 기능 개요

- 기능 이름: API 페이지네이션 및 정렬
- 한 줄 정의: 사용자, 조직, 멤버십 등 모든 목록 API에 offset 기반 페이지네이션과 정렬 파라미터를 도입한다.

## 2. 문제 정의

- 현재 모든 목록 API가 전체 결과를 한 번에 반환한다.
- 사용자/조직 수가 증가하면 응답 시간 증가, 메모리 초과, 클라이언트 렌더링 문제가 발생한다.
- 정렬이 `createdAt desc`로 하드코딩되어 있어 유연한 데이터 탐색이 불가능하다.

## 3. 목표

- 사용자 목표: 대량 목록에서 빠르게 원하는 데이터를 찾는다.
- 운영 목표: DB 쿼리 부하를 제한하고 응답 크기를 예측 가능하게 만든다.

## 4. 범위 / 비범위

- 포함: offset 기반 페이지네이션 (`page`, `pageSize`), 정렬 (`sort`, `order`), 응답 형식 통일
- 비범위: cursor 기반 페이지네이션 (추후 필요 시), 전문 검색 (Elasticsearch 등)

## 5. 사용자 시나리오

### 기본 흐름

1. 참여자: Admin Console 사용자, API 소비자
2. 선행 조건: 인증된 사용자
3. 기본 흐름: `GET /users?page=1&pageSize=20&sort=name&order=asc` → `{ items: [...], total: 150, page: 1, pageSize: 20 }`
4. 예외 흐름: pageSize > 100 → 400 에러 반환. page가 범위 초과 → 빈 items 배열 반환.
5. 시스템 반응: SQL에 LIMIT/OFFSET + ORDER BY 적용
6. 로그 포인트: 없음 (기존 요청 로그로 충분)

## 6. UI / UX 방향

- Admin Console 목록 페이지에 페이지 네비게이션 추가 (이전/다음, 페이지 번호)
- 컬럼 헤더 클릭으로 정렬 전환 (asc ↔ desc)
- 기본값: page=1, pageSize=20, sort=createdAt, order=desc

## 7. 데이터 / API / 권한 영향

- 대상 엔드포인트: `GET /users`, `GET /organizations`, `GET /organizations/:orgId/memberships`, `GET /organizations/:orgId/invitations`, `GET /organizations/:orgId/devices`, `GET /roles`, `GET /permissions`
- 응답 형식 변경: `[...]` → `{ items: [...], total: number, page: number, pageSize: number }`
- 쿼리 파라미터 추가: `page` (기본 1), `pageSize` (기본 20, 최대 100), `sort`, `order` (asc|desc)
- 허용 정렬 필드는 엔드포인트별로 정의 (예: users → name, createdAt, email)
- **하위 호환성**: 기존 응답이 배열이었으므로 breaking change. 소비 클라이언트(Admin Console, platform)와 동시 배포 필요.
- migration: 불필요

## 8. 테스트 계획

- unit: 페이지네이션 파라미터 파싱, 기본값 적용, 최대값 검증
- integration: 50건 데이터에서 page=3&pageSize=10 → 올바른 슬라이스 반환, 정렬 순서 검증
- e2e: Admin Console에서 페이지 이동, 정렬 전환 동작 확인

## 9. 릴리즈 고려사항

- release note: 목록 API 응답 형식 변경 (breaking change)
- user guide: 페이지네이션 파라미터 사용법
- ops: 기존 API 소비자에게 사전 공지 필요

## 10. 오픈 이슈

- 감사 로그 조회 API는 별도 기능(audit_log_query)에서 다루므로 여기서 제외
- cursor 기반은 데이터 규모가 만 건 이상이 될 때 재검토
