# Rate Limit Redis 전환 및 전역 적용

- 문서명: Rate Limit Redis 전환 및 전역 적용
- 목적: in-memory rate limit를 Redis 기반으로 전환하고, 인증 외 전역 API에도 rate limit를 적용한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §11, feature-requirements.md §11

## 1. 기능 개요

- 기능 이름: Rate Limit Redis 전환 및 전역 적용
- 한 줄 정의: rate limit 저장소를 Redis로 전환하여 다중 인스턴스에서 일관되게 동작하고, 전역 API rate limit를 추가한다.

## 2. 문제 정의

- 현재 Fastify 기본 in-memory 저장소를 사용하여 다중 인스턴스 배포 시 rate limit가 인스턴스별로 분산된다.
- 인증 관련 엔드포인트(로그인, 비밀번호)에만 rate limit이 있고, 일반 API는 무제한이다.
- 수평 확장 시 rate limit이 실질적으로 무력화된다.

## 3. 목표

- 사용자 목표: 해당 없음 (인프라 개선)
- 운영 목표: 다중 인스턴스 환경에서 일관된 rate limit를 보장하고, API 남용을 방지한다.

## 4. 범위 / 비범위

- 포함: Redis 기반 sliding window rate limit, 전역 API rate limit (토큰/IP 당), 429 응답 + Retry-After 헤더
- 비범위: IP 허용/차단 리스트 (P3), 의심 IP 자동 차단 (P3), 지리적 접근 제한

## 5. 사용자 시나리오

### 기본 흐름

1. 참여자: API 소비자
2. 선행 조건: Redis가 가용 상태다
3. 기본 흐름: API 요청 → Redis에서 현재 윈도우 카운트 조회 → 한도 이내 → 요청 처리 + 카운트 증가
4. 예외 흐름: 한도 초과 → 429 Too Many Requests + `Retry-After` 헤더 반환
5. 시스템 반응: rate limit 초과 이벤트 로그 기록
6. 로그 포인트: `rate_limit_exceeded`

### Redis 장애 시

1. Redis 연결 실패 → fallback: rate limit 검사 skip (fail-open) + 경고 로그
2. Redis 복구 시 자동 재연결

## 6. UI / UX 방향

- 해당 없음 (인프라). API 응답 헤더에 `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` 포함.

## 7. 데이터 / API / 권한 영향

- 의존성 추가: `@fastify/rate-limit` Redis store 또는 `ioredis` 직접 사용
- rate limit 설정:
  - 인증 엔드포인트: IP당 10회/분 (기존 유지)
  - 전역 API: 토큰당 100회/분, 미인증 IP당 30회/분
- Redis key 패턴: `rl:{endpoint}:{identifier}` (TTL = window 크기)
- 환경변수: `RATE_LIMIT_REDIS_URL` (기존 Redis 인스턴스 공유 또는 별도)
- migration: 불필요

## 8. 테스트 계획

- unit: sliding window 카운트 로직, fallback 동작
- integration: Redis 연동 상태에서 rate limit 동작 검증, 429 응답 + Retry-After 헤더 확인
- e2e: 연속 요청으로 rate limit 트리거 → 429 확인 → 대기 후 재시도 성공

## 9. 릴리즈 고려사항

- release note: 전역 rate limit 적용, Redis 의존성 추가
- ops: Redis 가용성 모니터링 필요. Docker Compose에 이미 Redis 7 포함.

## 10. 오픈 이슈

- 전역 rate limit 수치(100회/분)는 부하 테스트 후 조정 필요
- 엔드포인트별 차등 limit 적용 여부 검토
