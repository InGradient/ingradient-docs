# Auth API

- 문서명: Auth API
- 목적: auth-service의 외부 계약과 신뢰 모델을 정의한다.
- 적용 범위: 사용자 인증, 세션, 조직, 멤버십, 권한 기초 정보
- 상태: Draft
- Owner: Auth Service
- Reviewer: Platform / Medilabel / AI Owners
- 마지막 수정일: 2026-04-03
- 관련 SSOT 문서: `api_principles.md`, `../ops/security_access_control.md`

## 범위
- 로그인, 로그아웃, 토큰 발급, 리프레시, 검증
- 사용자, 조직, 프로젝트 접근 메타데이터
- 멤버십과 역할 기초 정보 전달

## 인증 플로우
- 사용자는 auth-service를 통해 로그인한다.
- auth-service는 access token과 refresh token을 발급한다.
- downstream 서비스는 JWT 검증 또는 `/auth/verify`로 토큰을 신뢰한다.
- refresh token은 rotation 방식으로 관리된다 — 사용 시 기존 토큰은 폐기되고 새 토큰이 발급된다.
- 토큰 재사용이 감지되면 해당 token family 전체가 폐기된다 (token reuse detection).

## 세션 관리
- 각 refresh token은 session 레코드로 관리된다.
- session은 `tokenFamilyId`로 그룹화되며, 재사용 감지 시 family 단위로 폐기한다.
- 로그아웃 시 해당 session의 refresh token이 폐기된다.
- `/auth/logout-all`로 사용자의 모든 활성 session을 폐기할 수 있다.
- `GET /auth/sessions`로 활성 session 목록을 조회할 수 있다.

## 토큰 구조
- 알고리즘: HS256, header에 `kid` (key ID) 포함
- 최소 claim: `sub`, `iss`, `aud`, `exp`, `iat`
- 추가 claim: `org_id`, `login_id`, `role_code`, `jti`, `is_admin`
- 도메인 또는 deployment 경계를 위한 issuer / audience를 분리한다
- project별 business permission은 downstream 서비스에서 해석한다
- access token TTL: `ACCESS_TOKEN_TTL_SECONDS` (기본 3600초)
- refresh token TTL: 기본 30일

## 조직과 멤버십 API
- organization 목록 조회
- membership 조회
- project access resolution
- 사용자 초대와 활성화

## 권한 정보 전달 방식
- auth-service는 baseline authorization facts를 제공한다
- downstream 서비스는 자기 도메인의 세부 permission을 추가 판단한다

## Rate Limiting
- 전역: 100 req/min per IP
- 인증 엔드포인트 (`/auth/login`, `/auth/signup`, `/auth/forgot-password`): 10 req/min per IP
- Redis 사용 가능 시 Redis 기반, 불가 시 in-memory fallback

## 에러 규칙
- 인증 실패, 만료, 비활성 계정, 권한 부족은 분리된 코드로 응답한다
- 사용자 메시지와 내부 디버깅 메시지는 구분한다
- 계정 잠금: 5회 연속 실패 시 15분간 잠금 (`lockedUntil`)
- MFA 활성화된 계정: 로그인 시 `MFA_REQUIRED` 응답과 함께 5분 유효 `mfa_token` 반환
- 비밀번호 만료: `PASSWORD_EXPIRED` 응답으로 비밀번호 변경 유도

