# Troubleshooting

- 문서명: Troubleshooting
- 목적: 반복되는 운영 문제에 대한 빠른 진단 가이드를 제공한다.
- 적용 범위: 사용자와 운영자가 다시 만날 가능성이 높은 문제
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Support / QA
- 마지막 수정일: 2026-04-03
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

---

## Platform — 로그인 후 화면 로딩이 오래 걸림 (빈 화면 또는 스피너 지속)

### 증상
- 로그인 자체는 빠르게 성공
- 로그인 후 앱 진입까지 수 초간 빈 화면 또는 로딩 스피너 표시
- 네트워크 탭에서 API 호출이 순차적으로 실행됨

### 가능한 원인

1. **순차적 초기화 체인** — 앱 진입 시 Auth 검증(`/auth/me`) → Projects 로드(`/api/projects`) → Classes 로드(`/api/projects/{id}/classes`)가 워터폴로 실행된다. 각 단계가 이전 단계 완료를 기다리므로 네트워크 지연이 누적된다.
2. **auth-service 응답 지연** — `/auth/me` 엔드포인트가 사용자, 멤버십, 조직, 라이선스를 포함하는 복합 쿼리를 실행한다. DB 연결 풀 부족이나 cold start 시 500ms 이상 소요될 수 있다.
3. **중복 project-access 쿼리** — `useNotices`, `ProtectedAppShell`, `DashboardPage`에서 같은 `project-access` 쿼리를 각각 실행한다. React Query 캐시가 있지만 첫 로드 시 병렬로 중복 요청이 발생할 수 있다.
4. **공격적인 폴링 간격** — Training models(5초), GPUs(4초), Queue(3초), project-access(10초), comment-mentions(10초) 폴링이 앱 진입 직후부터 시작되어 네트워크 혼잡을 유발한다.

### 확인 순서

1. 브라우저 DevTools Network 탭에서 로그인 후 API 호출 순서와 각 응답 시간 확인
2. auth-service `/auth/me` 응답 시간 확인 — 500ms 이상이면 DB 쿼리 최적화 필요
3. `/api/projects` 응답 시간 확인 — 프로젝트 수가 많으면 페이지네이션 고려
4. `TRAINING_ENABLED=false`인데 training 관련 폴링이 실행되는지 확인

### 개선 방향

- `StoreInitializer`에서 auth 검증과 무관한 데이터(예: dashboard preferences)를 병렬 로드
- project-access 쿼리를 하나의 소스로 통합하여 중복 제거
- training 폴링 간격을 10~15초로 완화
- `ProtectedAppShell`에서 로딩 중 전체 화면 스피너 표시 (빈 화면 대신)

### 관련 파일
- `frontend/app/StoreInitializer.tsx` — 초기화 체인
- `frontend/app/ProtectedAppShell.tsx` — 로딩 상태 분기
- `frontend/hooks/useNotices.ts` — 폴링 쿼리

