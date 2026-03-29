# 이메일 인증

- 문서명: 이메일 인증
- 목적: 사용자 이메일 소유권을 검증하여 계정 신뢰성을 높인다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: 이메일 인증
- 한 줄 정의: 회원가입 또는 이메일 변경 시 인증 토큰을 발송하여 이메일 소유권을 확인하는 기능을 제공한다.

## 2. 문제 정의

- 이메일 인증 없이 계정이 생성되면 스팸 가입, 타인 이메일 도용 위험이 존재한다.
- 이메일 변경 시에도 새 이메일 소유권 확인이 필요하다.

## 3. 목표

- 사용자 목표: 이메일 인증을 통해 계정을 활성화한다.
- 운영 목표: 인증된 이메일로만 알림/비밀번호 재설정이 가능하도록 보장한다.

## 4. 범위 / 비범위

- 포함: 가입 시 이메일 인증, 이메일 변경 시 재인증, 인증 토큰 발송/검증, 조직별 인증 필수 설정
- 비범위: 전화번호 인증, 이메일 존재 여부 사전 확인 API

## 5. 사용자 시나리오

### 기본 흐름 — 가입 후 이메일 인증

1. 참여자: 신규 가입 사용자
2. 선행 조건: 자가 가입 완료
3. 기본 흐름: 가입 완료 → 인증 이메일 수신 → `GET /auth/verify-email?token=xxx` → 계정 상태 ACTIVE로 전환
4. 예외 흐름: 토큰 만료(24h) → 재발송 요청 `POST /auth/resend-verification`
5. 로그 포인트: `email_verification_success`, `email_verification_fail`

## 6. UI / UX 방향

- 가입 직후 "이메일을 확인해주세요" 안내 페이지
- 인증 링크 클릭 → 성공 페이지 → 로그인으로 이동

## 7. 데이터 / API / 권한 영향

- User 테이블 확장: `email_verified` (boolean), `email_verified_at` (timestamp)
- 새 API: `GET /auth/verify-email`, `POST /auth/resend-verification`
- 이메일 템플릿: `email_verification` 추가
- 조직 설정: `require_email_verification` (boolean)

## 8. 테스트 계획

- unit: 토큰 생성/검증, 만료 체크
- integration: 가입 → 이메일 발송 → 토큰 검증 → 상태 전환
- e2e: 미인증 상태에서 로그인 차단 확인

## 9. 릴리즈 고려사항

- release note: 이메일 인증 기능 추가
- 기존 사용자: 마이그레이션 시 email_verified=true로 설정

## 10. 오픈 이슈

- 인증 토큰 유효 기간 (24시간 vs 72시간)
- 초대로 가입한 사용자는 이메일 인증 생략 여부
