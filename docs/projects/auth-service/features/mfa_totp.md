# MFA / 2FA (TOTP)

- 문서명: MFA / 2FA (TOTP)
- 목적: TOTP 기반 다중 인증을 도입하여 보안 수준을 높인다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §1, feature-requirements.md §1.2

## 1. 기능 개요

- 기능 이름: MFA / 2FA (TOTP)
- 한 줄 정의: TOTP(Time-based One-Time Password)와 백업 코드 기반 2차 인증을 지원하고, 조직 단위 MFA 강제 정책을 제공한다.

## 2. 문제 정의

- 비밀번호만으로는 계정 탈취 위험이 존재한다.
- 엔터프라이즈 고객의 보안 요구사항으로 MFA가 필수적이다.
- 현재 MFA 관련 구현이 전혀 없다.

## 3. 목표

- 사용자 목표: Google Authenticator 등 TOTP 앱으로 2차 인증을 수행한다.
- 운영 목표: 조직별 MFA 필수 정책을 강제하여 보안 컴플라이언스를 충족한다.

## 4. 범위 / 비범위

- 포함: TOTP 등록/검증, 백업 코드 발급/사용, 조직별 MFA 강제 정책, MFA 해제 (본인 + 관리자)
- 비범위: SMS OTP, 하드웨어 키(FIDO2/WebAuthn), 신뢰 디바이스 기억 (추후 phase)

## 5. 사용자 시나리오

### 기본 흐름 — MFA 등록

1. 참여자: 사용자
2. 선행 조건: 인증된 상태
3. 기본 흐름: `POST /auth/mfa/setup` → secret + QR URI 반환 → 사용자가 TOTP 앱에 등록 → `POST /auth/mfa/verify` (TOTP 코드 입력) → 등록 완료 + 백업 코드 10개 반환
4. 예외 흐름: 검증 실패 → 재시도 허용, 3회 실패 → 셋업 세션 만료
5. 로그 포인트: `mfa_enable`

### 기본 흐름 — MFA 로그인

1. 참여자: MFA 등록된 사용자
2. 선행 조건: ID/PW 인증 성공
3. 기본 흐름: 로그인 → 1차 인증 성공 → HTTP 403 `{ code: "MFA_REQUIRED", details: { mfa_token: "..." } }` 반환 → `POST /auth/mfa/challenge` (mfa_token + TOTP 코드) → Access/Refresh Token 발급
4. 예외 흐름: TOTP 코드 오류 → 재시도. 백업 코드 사용 → 1회용 소진 + 경고.
5. 로그 포인트: `mfa_verify_success`, `mfa_verify_fail`

### 기본 흐름 — 조직 MFA 강제

1. 참여자: 조직 관리자
2. 선행 조건: 조직 보안 설정 권한
3. 기본 흐름: 조직 설정에서 MFA 필수 활성화 → MFA 미등록 멤버가 로그인 시 MFA 셋업 페이지로 강제 이동
4. 시스템 반응: HTTP 403 `{ code: "MFA_SETUP_REQUIRED" }` 응답

## 6. UI / UX 방향

- 사용자 프로필 → 보안 탭: MFA 등록/해제 버튼, 백업 코드 확인/재생성
- 로그인 플로우: 1차 인증 후 MFA 입력 화면 (6자리 숫자 입력 필드 + "백업 코드 사용" 링크)
- Admin Console: 사용자 목록에 MFA 등록 여부 표시, 관리자 MFA 강제 해제 기능

## 7. 데이터 / API / 권한 영향

- 새 테이블: `user_mfa` (user_id, secret_encrypted, backup_codes_hash, enabled_at)
- 새 API:
  - `POST /auth/mfa/setup` — QR + secret 반환
  - `POST /auth/mfa/verify` — 셋업 완료 검증
  - `POST /auth/mfa/challenge` — 로그인 2차 인증
  - `DELETE /auth/mfa` — MFA 해제 (본인, 현재 비밀번호 필요)
  - `POST /auth/mfa/backup-codes` — 백업 코드 재생성
  - `DELETE /users/:id/mfa` — 관리자 MFA 강제 해제
- 조직 설정 확장: `org_settings.mfa_required` (boolean)
- 로그인 API 응답 변경: MFA 필요 시 HTTP 403 + `{ code: "MFA_REQUIRED", details: { mfa_token: "..." } }` 반환
- migration: user_mfa 테이블 생성, org_settings에 mfa_required 컬럼 추가

## 8. 테스트 계획

- unit: TOTP 생성/검증 로직, 백업 코드 해시/비교, 시간 윈도우 허용 (±1 step)
- integration: MFA 셋업 → 로그인 → challenge 전체 플로우, 백업 코드 사용 후 소진 확인
- e2e: MFA 등록 → 로그아웃 → 재로그인 시 2차 인증 → 성공

## 9. 릴리즈 고려사항

- release note: MFA/2FA 지원 추가
- user guide: TOTP 앱 등록 방법, 백업 코드 관리
- ops: secret 암호화 키 환경변수 추가 필요 (`MFA_ENCRYPTION_KEY`)

## 10. 오픈 이슈

- TOTP secret 암호화 방식 결정 (AES-256-GCM 권장)
- 신뢰 디바이스 기억 기능은 추후 phase
- MFA 등록률이 낮을 경우 강제 정책 유예 기간 필요 여부
