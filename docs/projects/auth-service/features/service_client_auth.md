# 서비스 간 인증

- 문서명: 서비스 간 인증
- 목적: 서비스 간 안전한 통신을 위한 client_credentials 흐름과 token delegation을 제공한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: 서비스 간 인증
- 한 줄 정의: OAuth 2.0 client_credentials grant와 token delegation을 통해 서비스 간 M2M(Machine-to-Machine) 인증을 지원한다.

## 2. 문제 정의

- 현재 서비스 간 통신은 BOOTSTRAP_SECRET 단일 키에 의존하여 세분화된 권한 관리가 불가능하다.
- 서비스별 독립적인 자격증명과 스코프 제어가 필요하다.

## 3. 목표

- 사용자 목표: 서비스마다 독립적인 client_id/client_secret을 발급받아 인증한다.
- 운영 목표: 서비스별 스코프를 제한하고 자격증명 로테이션을 지원한다.

## 4. 범위 / 비범위

- 포함: 서비스 클라이언트 등록/관리, client_credentials grant, 서비스 토큰 발급, token delegation (사용자 컨텍스트 전달)
- 비범위: API Gateway 통합, 서비스 메시 mTLS

## 5. 사용자 시나리오

### 기본 흐름 — 서비스 토큰 발급

1. 참여자: 백엔드 서비스
2. 선행 조건: 서비스 클라이언트 등록 완료
3. 기본 흐름: `POST /auth/token` (grant_type=client_credentials, client_id, client_secret) → 서비스 Access Token 발급
4. 예외 흐름: 잘못된 자격증명 → 401, 스코프 초과 → 403
5. 로그 포인트: `service_token_issue`, `service_auth_fail`

## 6. UI / UX 방향

- Admin Console → 서비스 클라이언트 관리 페이지
- 클라이언트 등록, secret 재생성, 스코프 설정

## 7. 데이터 / API / 권한 영향

- 새 테이블: `service_clients` (id, client_id, client_secret_hash, name, scopes, active)
- 새 API: `POST /auth/token` (client_credentials), 서비스 클라이언트 CRUD
- 기존 Bootstrap 인증과 공존, 점진적 마이그레이션

## 8. 테스트 계획

- unit: client_credentials 검증, 스코프 파싱
- integration: 클라이언트 등록 → 토큰 발급 → 보호된 API 접근
- e2e: 서비스 간 호출 체인 테스트

## 9. 릴리즈 고려사항

- release note: 서비스 간 인증 (client_credentials) 지원 추가
- ops: 기존 BOOTSTRAP_SECRET 방식과 병행 운영

## 10. 오픈 이슈

- Bootstrap 인증 → client_credentials 마이그레이션 타임라인
- token delegation 구현 방식 (token exchange vs custom claim)
