# 로그인

## 진입 경로

- `/admin/login` — 미인증 상태에서 자동 리다이렉트

## 화면 구조

- 중앙 정렬 카드:
  - INGRADIENT 로고
  - "Auth Admin" 제목
  - Login ID 입력 필드
  - 비밀번호 입력 필드
  - "Sign in" 버튼

## 주요 인터랙션

- **Sign in 클릭**: 인증 요청 → 성공 시 사용자 목록 페이지(`/admin/users`)로 이동
- **인증 실패**: 카드 상단에 에러 Alert 표시 ("Invalid credentials" 등)
- **로딩 중**: 버튼 텍스트가 "Signing in…"으로 변경, 버튼 비활성화

## 상태별 화면

- 기본: 빈 폼
- 로딩: 버튼 비활성화 + "Signing in…"
- 에러: 상단 Alert (빨간색)
