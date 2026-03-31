# 인증 (Auth)

## 기능 개요

외부 auth-service와 연동하여 로그인, 회원가입, 세션 관리를 처리한다.

## 문제 정의

프로젝트별 멤버십과 역할 기반 권한이 필요하며, 인증 로직 자체는 중앙 auth-service에 위임하되 세션 상태를 Frontend에서 안정적으로 유지해야 한다.

## 범위 / 비범위

- **포함**: 로그인, 회원가입, 세션 유지/갱신, 로그아웃, 토큰 관리
- **제외**: 사용자 계정 CRUD, MFA, 비밀번호 정책 → auth-service 소관

## 사용자 시나리오

### 로그인

- **선행 조건**: auth-service에 계정이 있고, 해당 프로젝트에 멤버십이 있음
- **기본 흐름**:
  1. `/login` 페이지에서 Login ID + 비밀번호 입력
  2. auth-service `/api/auth/login`에 `project_code=ingradient-platform` 포함 요청
  3. 성공 시 `access_token`, `refresh_token`, `user.projects` 반환
  4. Zustand `useAuthStore`에 세션 저장, localStorage에 토큰 캐시
  5. 대시보드로 리디렉트
- **예외 흐름**:
  - 잘못된 자격 증명 → "Invalid credentials" 표시
  - 멤버십 없음 → "프로젝트 접근 권한이 없습니다" 표시
  - auth-service 장애 → "Auth service is unavailable" 표시

### 회원가입

- **기본 흐름**:
  1. `/signup` 페이지에서 Login ID, 이름, 비밀번호 입력
  2. auth-service `/api/auth/register`에 `project_code` 포함 요청
  3. 계정 생성 + 프로젝트 멤버십 자동 부여
  4. 로그인 페이지로 이동

### 세션 갱신

- 토큰 만료 60초 전에 자동 갱신 스케줄링
- 갱신 실패 시 로그아웃 처리

## UI / UX 방향

| 화면 | 구성 |
|------|------|
| 로그인 | Login ID 입력, 비밀번호 입력, "로그인 유지" 체크박스, 로그인 버튼, 회원가입 링크 |
| 회원가입 | Login ID, 이름, 비밀번호, 비밀번호 확인, 가입 버튼 |

- **상태**: loading (인증 중), error (실패 메시지), 미인증 시 `/login`으로 리디렉트

## 데이터 / API / 권한 영향

- auth-service 의존: `VITE_IAM_BASE` 환경변수로 URL 지정
- 미설정 시 로컬 `/api/auth` 폴백
- JWT 토큰은 모든 API 요청에 `Authorization: Bearer` 헤더로 자동 첨부

## 테스트 계획

- 정상 로그인 → 대시보드 진입
- 잘못된 비밀번호 → 에러 표시
- 토큰 만료 → 자동 갱신 후 API 정상 동작
- auth-service 다운 → 503 에러 표시
