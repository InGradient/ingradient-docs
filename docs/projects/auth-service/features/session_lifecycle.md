# 세션 생명주기 관리

- 문서명: 세션 생명주기 관리
- 목적: 세션 자동 정리, 동시 세션 제한, 토큰 즉시 무효화, 본인 전체 로그아웃을 구현한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §2, feature-requirements.md §2

## 1. 기능 개요

- 기능 이름: 세션 생명주기 관리
- 한 줄 정의: 만료 세션 자동 정리, 동시 세션 수 제한, access token 즉시 무효화(블랙리스트), 본인 전체 로그아웃을 지원한다.

## 2. 문제 정의

- 만료된 세션 레코드가 DB에 누적되어 비대화된다 (lazy check도 없음).
- 동시 세션 제한이 없어 하나의 계정으로 무제한 디바이스에서 로그인 가능하다.
- access token은 만료까지 유효하여 계정 비활성화/권한 변경 시 즉시 차단이 불가능하다.
- 본인 전체 세션 종료 옵션이 없다 (관리자 강제 로그아웃만 존재).

## 3. 목표

- 사용자 목표: 모든 디바이스에서 한 번에 로그아웃할 수 있다.
- 운영 목표: DB 비대화를 방지하고, 보안 사고 시 즉시 세션을 무효화한다.

## 4. 범위 / 비범위

- 포함: 만료 세션 정리 크론, 동시 세션 제한 (최대 N개), access token 블랙리스트 (Redis jti), 본인 전체 로그아웃
- 비범위: 세션 활동 기반 자동 연장, 지리 기반 세션 감지

## 5. 사용자 시나리오

### 기본 흐름 — 본인 전체 로그아웃

1. 참여자: 사용자
2. 선행 조건: 여러 디바이스에서 로그인 상태
3. 기본 흐름: `POST /auth/logout-all` → 본인의 모든 refresh token 폐기 + 활성 access token jti를 블랙리스트에 등록
4. 시스템 반응: 다른 디바이스에서 API 호출 시 401 반환
5. 로그 포인트: `session_logout_all`

### 기본 흐름 — 동시 세션 제한

1. 참여자: 사용자 (조직 설정에 max_sessions=3)
2. 기본 흐름: 4번째 디바이스에서 로그인 → 가장 오래된 세션 자동 폐기 → 새 세션 생성
3. 예외 흐름: 정책이 "새 로그인 거부"이면 → `{ code: "MAX_SESSIONS_EXCEEDED" }` 반환
4. 로그 포인트: `session_evicted`, `session_limit_exceeded`

### 시스템 흐름 — 만료 세션 정리

1. 크론 (일 1회) → `refresh_tokens` 테이블에서 `expires_at < NOW()` 레코드 배치 삭제
2. 삭제 건수 로그 기록

## 6. UI / UX 방향

- 세션 목록 페이지에 "모든 디바이스에서 로그아웃" 버튼 추가
- Admin Console 조직 설정에 동시 세션 제한 필드 (max_sessions, 초과 정책 드롭다운)

## 7. 데이터 / API / 권한 영향

- 새 API:
  - `POST /auth/logout-all` — 본인 전체 세션 종료 ✅ 구현 완료 (requireBearer → sessionsRepo.revokeByUserId)
- Redis 사용: access token 블랙리스트 (`blacklist:{jti}`, TTL = access token 잔여 만료 시간)
- 토큰 검증 변경: JWT 검증 + Redis 블랙리스트 조회 추가 (`POST /auth/verify` 경로)
- 조직 설정 확장: `org_settings.max_sessions` (number, null=무제한), `org_settings.session_limit_policy` (evict_oldest | reject_new)
- 크론 잡: `expired-session-cleanup` (일 1회, 배치 삭제 1000건씩)
- JWT에 `jti` 클레임이 이미 포함되어 있어야 함 (미포함 시 추가 필요)
- migration: org_settings 확장

## 8. 테스트 계획

- unit: 블랙리스트 등록/조회, 세션 카운트 검사, 크론 배치 삭제 로직
- integration: max_sessions=2 → 3번째 로그인 시 가장 오래된 세션 폐기 확인, 블랙리스트된 토큰으로 /verify 시 거부
- e2e: 여러 디바이스 로그인 → "모든 디바이스에서 로그아웃" → 다른 세션 401 확인

## 9. 릴리즈 고려사항

- release note: 전체 로그아웃, 동시 세션 제한, 세션 자동 정리 추가
- ops: 크론 작업 등록, Redis 의존성 확인, 블랙리스트로 인한 Redis 메모리 사용량 모니터링

## 10. 오픈 이슈

- access token 블랙리스트의 Redis 의존으로 Redis 장애 시 동작 정책 (fail-open vs fail-close)
- 기본 max_sessions 값 결정 (null=무제한 vs 기본 5 등)
- 크론 실행 방식: node-cron in-process vs 외부 스케줄러
