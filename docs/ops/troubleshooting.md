# Troubleshooting

- 문서명: Troubleshooting
- 목적: 반복되는 운영 문제에 대한 빠른 진단 가이드를 제공한다.
- 적용 범위: 사용자와 운영자가 다시 만날 가능성이 높은 문제
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Support / QA
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `debug_notes.md`, `incident_response.md`

## 기록 대상
- 고객 환경에서 재발 가능한 문제
- 설치, 배포, auth, sync, job 실행 관련 대표 이슈

## 기록 형식
- 증상
- 가능한 원인
- 확인 순서
- 복구 방법
- 관련 로그와 메트릭

## 운영 원칙
- 사소한 1회성 이슈는 넣지 않는다
- edge, AI, auth, upload 같은 큰 흐름 위주로 유지한다

---

## Auth — Platform 로그인 후 모든 API 401 Unauthorized

### 증상
- 로그인 자체는 성공 (auth-service에서 `login_success` 로그 확인)
- 프론트에서 `[auth] unexpected IAM response shape` 경고
- 이후 모든 API 요청 (`/api/projects`, `/api/me/*` 등) 401

### 가능한 원인

1. **AUTH_SERVICE_BASE가 외부 IP로 설정됨** — 같은 머신이더라도 외부 IP는 방화벽/NAT에 의해 접근 불가할 수 있다. Platform 백엔드가 auth-service `/api/auth/me`로 토큰 검증 요청을 보내지만 timeout → `None` 반환 → 401.
2. **PyJWT 미설치** — `ACCESS_TOKEN_SECRET`이 설정되어 있어도 PyJWT가 없으면 JWT 로컬 검증이 건너뛰어진다. 이 경우 auth-service HTTP 호출 fallback에 의존하게 되는데, 1번과 겹치면 인증 불가.
3. **auth-service MFA/비밀번호 만료 응답** — MFA가 활성화되었거나 비밀번호가 만료된 계정은 로그인 시 403을 반환한다. 이전 버전에서는 200으로 잘못된 body를 반환하여 빈 토큰 세션이 생성되는 문제가 있었다.

### 확인 순서

1. auth-service 로그에서 `login_success` 확인 — 로그인 자체가 실패하는지 여부 구분
2. `curl -s http://localhost:{AUTH_PORT}/api/auth/me -H "Authorization: Bearer test"` — auth-service 로컬 접근 가능 확인
3. `.env`의 `AUTH_SERVICE_BASE` 값으로 같은 curl 테스트 — 외부 IP timeout 여부 확인
4. `python -c "import jwt"` — PyJWT 설치 여부 확인
5. auth-service 로그에서 `org_id: null` — 사용자가 조직에 소속되지 않은 경우 확인

### 복구 방법

- `AUTH_SERVICE_BASE`를 `http://localhost:{PORT}`로 변경
- `pip install PyJWT` — JWT 로컬 검증 활성화 (외부 호출 불필요, 더 빠르고 안정적)
- Platform 백엔드 재시작

### 관련 로그와 메트릭
- 프론트 콘솔: `[auth] unexpected IAM response shape`
- Platform 백엔드: 별도 에러 로그 없음 (`get_current_user`가 `None` 반환 시 라우트에서 401)
- auth-service: `login_success` / `login_fail` audit 로그

