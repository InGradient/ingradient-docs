# System Settings (시스템 기본값 관리)

- 적용 범위: auth-service
- 상태: v0.0.4
- Owner: Auth
- 마지막 수정일: 2026-03-29

## 개요

시스템 전체에 적용되는 기본 설정을 Admin이 관리하는 기능. 조직에서 별도 설정하지 않으면 이 기본값이 적용된다.

## 포함 항목

### 보안 정책 기본값
- MFA 필수 여부, 셀프 가입 허용, 계정 잠금 (실패 횟수, 잠금 시간)
- 비밀번호 정책 (최소 길이, 대소문자/숫자/특수문자 필수, 만료, 이력 수)
- 세션 제한 (최대 동시 세션, 세션 타임아웃)

### 토큰/세션 설정
- Access Token TTL (초), Refresh Token TTL (일), 오프라인 Entitlement 기본 유효 기간 (일)

### 시스템 설정
- 시스템 이름, 로고 URL, 기본 역할 코드, 초대 유효 기간, 가입 코드 만료

### 알림 설정
- 이메일 발송 방식 (console/smtp/sendgrid/ses), 발신자 주소, 웹훅 글로벌 활성화

### 라이선스 기본값
- 기본 플랜 코드, maxUsers, maxDevices, 오프라인 설정 (활성화, 최대 일수, 유예 모드)

## API

- `GET /system-settings` — requireAdmin. 현재 설정 반환 (행이 없으면 기본값)
- `PUT /system-settings` — requireAdmin. 부분 업데이트 (지정된 필드만 변경)

## 데이터

- 테이블: `system_settings` — 단일 행, 구조화된 컬럼 (OrgSecuritySettings와 동일 패턴)
- 관련 문서: `data_model.md`

## UI

- Admin Console Settings 페이지 (`/admin/settings`) — 5개 탭으로 구성
- 참조: `wireframes/settings.md`
