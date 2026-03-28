# 이메일 알림 시스템

- 문서명: 이메일 알림 시스템
- 목적: stub 상태인 이메일 발송을 실제 동작하도록 구현하고, 템플릿 기반 이메일 시스템을 도입한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §10, feature-requirements.md §10

## 1. 기능 개요

- 기능 이름: 이메일 알림 시스템
- 한 줄 정의: SMTP 또는 외부 이메일 서비스(SendGrid/SES)를 연동하여 비밀번호 초기화, 초대 등 이메일을 실제 발송한다.

## 2. 문제 정의

- 현재 `StubNotificationService`가 stdout에만 출력하므로 비밀번호 초기화, 초대 플로우가 실제 동작하지 않는다.
- 이메일 템플릿이 없어 발송 내용의 일관성과 브랜딩을 보장할 수 없다.
- P0 항목: 이메일 없이는 셀프서비스 비밀번호 초기화와 초대 수락이 불가능하다.

## 3. 목표

- 사용자 목표: 비밀번호 초기화 링크, 초대 링크를 이메일로 수신한다.
- 운영 목표: 이메일 발송 성공/실패를 추적하고, 환경별(dev/staging/prod) 전략을 분리한다.

## 4. 범위 / 비범위

- 포함: SMTP/SendGrid/SES 연동, 비밀번호 초기화 이메일, 초대 이메일, HTML 템플릿, 발송 로그
- 비범위: 비정상 로그인 경고, 라이선스 만료 경고 (P2), 조직별 브랜딩 (P3)

## 5. 사용자 시나리오

### 기본 흐름 — 비밀번호 초기화 이메일

1. 참여자: 사용자
2. 선행 조건: 계정이 존재하고 이메일이 등록되어 있다
3. 기본 흐름: `POST /auth/forgot-password` → 토큰 생성 → 이메일 큐 적재 → 비동기 발송 → 사용자 수신
4. 예외 흐름: 이메일 발송 실패 → 재시도 (최대 3회, exponential backoff) → 실패 로그 기록
5. 시스템 반응: 발송 성공/실패 감사 로그 기록
6. 로그 포인트: `email_send_success`, `email_send_fail`

### 기본 흐름 — 초대 이메일

1. 참여자: 조직 관리자, 초대 대상자
2. 선행 조건: 관리자가 초대를 생성했다
3. 기본 흐름: `POST /organizations/:orgId/invitations` → 초대 생성 → 이메일 큐 적재 → 발송
4. 예외 흐름: 재발송 요청 시 토큰 재생성 + 만료 갱신 + 재발송

## 6. UI / UX 방향

- Admin Console에서 직접적인 UI 변경은 없다.
- 초대 목록에 "재발송" 버튼 추가 (초대 재발송 기능과 연계).

## 7. 데이터 / API / 권한 영향

- 새 설정: `EMAIL_PROVIDER` (smtp | sendgrid | ses), `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM`
- 새 인터페이스: `NotificationService`의 stub 구현을 실제 구현으로 교체 (환경변수 기반 전략 패턴)
- 새 API: `POST /invitations/:id/resend` (초대 재발송)
- 이메일 템플릿 저장: 파일 시스템 기반 (Handlebars/Mustache), 초기 2종 (password_reset, invitation)
- migration: 불필요

## 8. 테스트 계획

- unit: 템플릿 렌더링, 재시도 로직, provider 선택 로직
- integration: 실제 SMTP 서버(Mailhog)로 발송 확인, 재시도 시나리오
- e2e: forgot-password → 이메일 수신 → reset-password 전체 플로우

## 9. 릴리즈 고려사항

- release note: 이메일 발송 기능 추가, 환경변수 설정 필요
- user guide: 이메일 설정 방법 안내
- ops: Mailhog(dev), 실제 SMTP/SES(prod) 환경 분리. 발송 실패 모니터링 필요.

## 10. 오픈 이슈

- 이메일 큐를 별도 시스템(BullMQ 등)으로 할지 in-process 비동기로 할지 결정 필요
- 조직별 이메일 브랜딩은 추후 phase로 이관
