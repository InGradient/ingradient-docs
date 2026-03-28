# SSO / OAuth / OIDC 연동

- 문서명: SSO / OAuth / OIDC 연동
- 목적: 외부 IdP(Google, Microsoft 등)를 통한 SSO 로그인과 JIT 사용자 프로비저닝을 구현한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §1, feature-requirements.md §1.3

## 1. 기능 개요

- 기능 이름: SSO / OAuth / OIDC 연동
- 한 줄 정의: OAuth 2.0 / OpenID Connect 기반 외부 IdP 로그인을 지원하고, SSO 첫 로그인 시 사용자를 자동 생성한다.

## 2. 문제 정의

- `sso.service.ts`가 존재하지만 `notImplemented()` throw만 한다.
- 엔터프라이즈 고객이 자사 IdP(Google Workspace, Azure AD)와 통합을 요구한다.
- SSO 없이는 대형 조직의 온보딩이 사용자별 수동 계정 생성에 의존한다.

## 3. 목표

- 사용자 목표: 회사 계정(Google, Microsoft)으로 한 번에 로그인한다.
- 운영 목표: 대형 조직의 사용자 관리 부담을 줄이고, IdP 기반 접근 제어를 위임한다.

## 4. 범위 / 비범위

- 포함: OAuth 2.0 / OIDC Authorization Code Flow, Google/Microsoft 프로바이더, 조직별 IdP 설정, JIT provisioning, IdP 계정-로컬 계정 연결
- 비범위: SAML 2.0 (P3), IdP 로컬 비밀번호 비활성화 옵션 (추후), 소셜 로그인(GitHub, GitLab)은 2차

## 5. 사용자 시나리오

### 기본 흐름 — SSO 로그인

1. 참여자: SSO가 설정된 조직의 사용자
2. 선행 조건: 조직에 IdP가 설정되어 있다
3. 기본 흐름: 로그인 페이지 → "Google로 로그인" 클릭 → `GET /auth/sso/:provider/authorize?org_code=xxx` → IdP 리다이렉트 → 인증 → 콜백 `GET /auth/sso/:provider/callback` → id_token 검증 → 로컬 계정 매칭 → Access/Refresh Token 발급
4. 예외 흐름: 로컬 계정 없음 + JIT 활성 → 자동 계정 생성 + 멤버십 생성. JIT 비활성 → "계정을 찾을 수 없습니다" 에러.
5. 로그 포인트: `sso_login_success`, `sso_login_fail`, `sso_jit_provision`

### 기본 흐름 — IdP 설정 (관리자)

1. 참여자: 조직 관리자 또는 System Admin
2. 기본 흐름: Admin Console → 조직 설정 → SSO 탭 → 프로바이더 선택 → client_id, client_secret, redirect_uri 입력 → 저장 → 테스트 연결
3. 예외 흐름: 잘못된 credentials → 테스트 연결 실패 → 에러 메시지

## 6. UI / UX 방향

- 로그인 페이지: 조직 코드 입력 또는 이메일 도메인 감지 → SSO 버튼 동적 표시
- Admin Console: 조직 설정에 SSO 탭 추가 (프로바이더 목록, 설정 폼, 테스트 버튼)
- SSO 로그인 후 MFA가 설정되어 있으면 MFA challenge로 이어진다

## 7. 데이터 / API / 권한 영향

- 새 테이블: `idp_configs` (org_id, provider, client_id, client_secret_encrypted, scopes, jit_enabled, default_role_id)
- 새 테이블: `user_idp_links` (user_id, provider, external_id, email)
- 새 API:
  - `GET /auth/sso/:provider/authorize` — IdP 인증 URL 생성 + 리다이렉트
  - `GET /auth/sso/:provider/callback` — 콜백 처리 + 토큰 발급
  - `POST /organizations/:orgId/idp-configs` — IdP 설정 CRUD
  - `GET /organizations/:orgId/idp-configs`
  - `DELETE /organizations/:orgId/idp-configs/:id`
- 의존성: `openid-client` 또는 직접 OAuth 2.0 구현
- migration: idp_configs, user_idp_links 테이블 생성

## 8. 테스트 계획

- unit: state/nonce 생성 및 검증, id_token 파싱, JIT provisioning 로직
- integration: mock IdP 서버로 전체 Authorization Code Flow 테스트
- e2e: Google OAuth 테스트 계정으로 로그인 → 계정 자동 생성 → 토큰 발급 확인

## 9. 릴리즈 고려사항

- release note: Google, Microsoft SSO 지원 추가
- user guide: 조직별 SSO 설정 가이드
- ops: IdP client_secret 암호화 키 필요, callback URL을 IdP에 등록해야 함

## 10. 오픈 이슈

- SSO 전용 로그인(로컬 비밀번호 비활성화) 정책은 추후 phase
- SAML 2.0은 P3로 이관
- 이메일 도메인 기반 자동 IdP 감지 로직의 구체적 설계 필요
