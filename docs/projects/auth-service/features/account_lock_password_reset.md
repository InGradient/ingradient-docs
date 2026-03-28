# 계정 잠금 및 비밀번호 재설정

- 문서명: 계정 잠금 및 비밀번호 재설정
- 목적: brute force 방어를 위한 자동 계정 잠금과 셀프서비스/관리자 비밀번호 재설정 흐름을 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §1.5, §1.6

## 1. 기능 개요

- 기능 이름: 계정 잠금 및 비밀번호 재설정
- 한 줄 정의: 로그인 5회 연속 실패 시 15분 자동 잠금하고, 이메일 토큰 또는 관리자를 통해 비밀번호를 재설정한다.

## 2. 문제 정의

- 비밀번호 brute force 공격에 대한 자동 방어가 필요하다.
- 사용자가 비밀번호를 잊었을 때 관리자 개입 없이 재설정할 수 있어야 한다.
- 관리자가 사용자 비밀번호를 강제로 초기화할 수 있어야 한다.

## 3. 목표

- 사용자 목표: 비밀번호를 잊었을 때 스스로 재설정한다. 잠금 시 대기 후 재시도한다.
- 보안 목표: brute force 공격을 자동으로 차단한다.

## 4. 범위 / 비범위

- 포함: 자동 잠금 (5회/15분), 시간 경과 자동 해제, 관리자 수동 해제, 이메일 기반 비밀번호 재설정, 관리자 임시 비밀번호 발급, 본인 비밀번호 변경
- 비범위: IP 기반 잠금 (P3), MFA 연계 잠금 해제 (P1)

## 5. 사용자 시나리오

### 기본 흐름 — 계정 잠금

1. 참여자: 공격자 또는 비밀번호를 잊은 사용자
2. 선행 조건: 유효한 계정이 존재
3. 기본 흐름: 로그인 실패 → `failed_login_attempts` 증가 → 5회 도달 → `locked_until = now + 15분` 설정 → 이후 로그인 시도 시 403 ACCOUNT_TEMPORARILY_LOCKED (잔여 시간 포함)
4. 예외 흐름: `locked_until` 경과 후 로그인 → 자동 해제 (`failed_login_attempts = 0`, `locked_until = null`) → 정상 로그인
5. 시스템 반응: 성공 로그인 시 `failed_login_attempts` 리셋
6. 로그 포인트: `login_fail` (사유: invalid_password, locked), `login_success`

### 기본 흐름 — 비밀번호 재설정 (사용자)

1. 참여자: 사용자
2. 선행 조건: 이메일이 등록된 계정
3. 기본 흐름: `POST /auth/forgot-password { email }` → 항상 200 반환 (계정 존재 여부 미노출) → 토큰 생성 (32바이트 hex, SHA256 해시 저장, 24시간 만료) → 이메일 발송 → `POST /auth/reset-password { token, password }` → 토큰 검증 → 비밀번호 변경 → `failed_login_attempts` 리셋
4. 예외 흐름: 만료 토큰 → 400 TOKEN_EXPIRED. 이미 사용된 토큰 → 400 TOKEN_ALREADY_USED.

### 기본 흐름 — 비밀번호 재설정 (관리자)

1. 참여자: System Admin
2. 기본 흐름: `POST /users/:id/reset-password` → 임시 비밀번호 생성 (8바이트 base64url) → bcrypt 해시 저장 → 임시 비밀번호를 관리자에게 반환 (사용자에게 out-of-band 전달)

### 기본 흐름 — 본인 비밀번호 변경

1. 참여자: 인증된 사용자
2. 기본 흐름: `PATCH /auth/me { current_password, password }` → 현재 비밀번호 확인 → 새 비밀번호 정책 검증 → 변경
3. 예외 흐름: 현재 비밀번호 불일치 → 400 INVALID_CURRENT_PASSWORD

## 6. UI / UX 방향

- 로그인 페이지: 잠금 시 "N분 후 다시 시도하세요" 메시지 + "비밀번호 재설정" 링크
- 비밀번호 재설정 페이지: 이메일 입력 → 발송 완료 안내 → 토큰 링크 클릭 → 새 비밀번호 입력 폼
- Admin Console 사용자 상세: "비밀번호 초기화" 버튼, "잠금 해제" 버튼

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /auth/forgot-password { email }` — 인증 불필요, rate limit 5회/분
  - `POST /auth/reset-password { token, password }` — 인증 불필요, rate limit 5회/분
  - `PATCH /auth/me { current_password, password }` — Bearer 필요
  - `POST /users/:id/reset-password` — adminOrBootstrap
  - `POST /users/:id/unlock` — admin 전용, `failed_login_attempts = 0`, `locked_until = null` 리셋
- 테이블: `users` (failed_login_attempts, locked_until), `password_reset_tokens` (token_hash, user_id, expires_at, used_at)
- migration: v0.0.2에 포함 완료

## 8. 테스트 계획

- unit: 잠금 판정 로직, 토큰 해시 생성/검증, 만료 검사
- integration: 5회 실패 → 잠금 확인 → 15분 후 해제 확인, forgot → reset 전체 플로우
- e2e: 로그인 실패 반복 → 잠금 메시지 → 비밀번호 재설정 → 재로그인

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: 이메일 발송은 현재 stub. 실제 발송은 email_notification_system 기능 참조.

## 10. 오픈 이슈

- 잠금 횟수/시간의 조직별 커스터마이징은 추후 검토
- 비밀번호 재설정 완료 시 기존 세션 전체 폐기 여부 정책 미결정
