# Admin 로그인 및 Bootstrap 인증

- 문서명: Admin 로그인 및 Bootstrap 인증
- 목적: System Admin 전용 로그인 경로와 서비스 간 통신용 Bootstrap 인증을 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §12, §13.3

## 1. 기능 개요

- 기능 이름: Admin 로그인 및 Bootstrap 인증
- 한 줄 정의: System Admin 전용 로그인 엔드포인트와 `X-Bootstrap-Secret` 기반 서비스 간 인증을 제공한다.

## 2. 문제 정의

- Admin Console은 일반 사용자와 분리된 인증 경로가 필요하다.
- 서비스 초기 셋업이나 서비스 간 통신에서 사용자 토큰 없이 인증할 수단이 필요하다.

## 3. 목표

- 사용자 목표: System Admin이 Admin Console에 안전하게 접속한다.
- 운영 목표: downstream 서비스가 auth-service API를 호출할 수 있다.

## 4. 범위 / 비범위

- 포함: Admin 로그인 (`is_system_admin` 검사), Admin 전용 토큰 (`is_admin` claim), Bootstrap Secret 헤더 인증, Bootstrap 접근 감사 로그
- 비범위: client_credentials grant (P2), Admin 세션 분리 (현재 동일 세션 체계 사용)

## 5. 사용자 시나리오

### 기본 흐름 — Admin 로그인

1. 참여자: System Admin
2. 선행 조건: `is_system_admin = true`인 계정
3. 기본 흐름: `POST /auth/admin-login { login_id, password }` → 일반 로그인과 동일한 검증 → `is_system_admin` 확인 → 토큰 발급 (`org_id = ""`, `is_admin = true`)
4. 예외 흐름: `is_system_admin = false` → 403 SYSTEM_ADMIN_REQUIRED
5. 로그 포인트: `admin_login`

### 기본 흐름 — Bootstrap 인증

1. 참여자: downstream 서비스 (platform, ai, edge 등)
2. 선행 조건: `BOOTSTRAP_SECRET` 환경변수 설정
3. 기본 흐름: 요청에 `X-Bootstrap-Secret` 헤더 포함 → 서버에서 환경변수와 비교 → 일치 시 `adminOrBootstrap` 미들웨어 통과
4. 예외 흐름: 불일치 → 401 Unauthorized
5. 로그 포인트: Bootstrap 접근 시 감사 로그 (엔드포인트, IP)

## 6. UI / UX 방향

- Admin Console 로그인 페이지: 일반 로그인과 동일한 폼, `/auth/admin-login` 호출
- 401 응답 시 자동 리다이렉트 (apiFetch 인터셉터)

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /auth/admin-login { login_id, password }` — 인증 불필요, rate limit 10회/분
- 미들웨어: `adminOrBootstrap` — Bearer 토큰의 `is_admin` claim 또는 `X-Bootstrap-Secret` 헤더 중 하나 충족
- 환경변수: `BOOTSTRAP_SECRET`
- 토큰 차이: `is_admin = true`, `org_id = ""` (조직 컨텍스트 없음)

## 8. 테스트 계획

- unit: `is_system_admin` 검사 로직, Bootstrap 헤더 비교
- integration: Admin 로그인 성공/실패, Bootstrap 헤더로 보호된 엔드포인트 접근
- e2e: Admin Console 로그인 → 대시보드 진입

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: `BOOTSTRAP_SECRET`은 프로덕션에서 충분히 긴 랜덤 값으로 설정. 초기 셋업 후 교체 권장.

## 10. 오픈 이슈

- Bootstrap Secret 프로덕션 비활성화 옵션 (`BOOTSTRAP_ENABLED=false`) 미구현 → gap-analysis §11 참조
- client_credentials 기반 서비스 인증으로의 전환 시점 미결정
