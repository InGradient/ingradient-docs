# SAML 2.0

- 문서명: SAML 2.0
- 목적: 엔터프라이즈 고객의 SAML 2.0 기반 SSO를 지원한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: SAML 2.0
- 한 줄 정의: SAML 2.0 SP(Service Provider) 역할로 외부 IdP(Okta, Azure AD 등)와 연동하여 SSO를 지원한다.

## 2. 문제 정의

- 대형 엔터프라이즈 고객은 OIDC보다 SAML 2.0을 사용하는 경우가 많다.
- 현재 OIDC만 지원하여 SAML 기반 조직을 수용하지 못한다.

## 3. 목표

- 사용자 목표: 기업 SSO 포털에서 SAML 인증으로 서비스에 접근한다.
- 운영 목표: SAML IdP 설정 CRUD, 메타데이터 교환, JIT provisioning을 지원한다.

## 4. 범위 / 비범위

- 포함: SAML 2.0 SP 구현, IdP 메타데이터 임포트, Assertion 파싱/검증, JIT 사용자 생성, SP 메타데이터 노출
- 비범위: SAML IdP 역할 (SP 전용), SLO(Single Logout)

## 5. 사용자 시나리오

### 기본 흐름 — SAML SSO 로그인

1. 참여자: 사용자
2. 선행 조건: 조직에 SAML IdP가 설정됨
3. 기본 흐름: 로그인 → "SSO로 로그인" 선택 → SAML AuthnRequest → IdP 로그인 → SAML Response (POST binding) → Assertion 검증 → 사용자 매핑/생성 → Access Token 발급
4. 예외 흐름: Assertion 서명 검증 실패 → 401, 매핑 실패 → 에러 페이지
5. 로그 포인트: `saml_login_success`, `saml_login_fail`

## 6. UI / UX 방향

- Admin Console → 조직 → SSO 설정 → SAML IdP 추가 (메타데이터 URL 또는 XML 업로드)
- 로그인 페이지: 조직 도메인 입력 → SAML 리다이렉트

## 7. 데이터 / API / 권한 영향

- `idp_configs` 테이블 확장: protocol 필드에 `saml` 추가, saml_metadata_url, saml_certificate, entity_id
- 새 엔드포인트: `GET /auth/saml/metadata` (SP 메타데이터), `POST /auth/saml/callback` (ACS)
- 의존성: `saml2-js` 또는 `passport-saml`

## 8. 테스트 계획

- unit: SAML Assertion 파싱, 서명 검증, 속성 매핑
- integration: Mock IdP → AuthnRequest → Response → 토큰 발급
- e2e: Okta/Azure AD 테스트 IdP 연동

## 9. 릴리즈 고려사항

- release note: SAML 2.0 SSO 지원 추가
- ops: SP 인증서 관리, ACS URL 설정

## 10. 오픈 이슈

- SP-initiated vs IdP-initiated SSO 둘 다 지원 여부
- SAML 속성 → 사용자 필드 매핑 커스터마이즈
