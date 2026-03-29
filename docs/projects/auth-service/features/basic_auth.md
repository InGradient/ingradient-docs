# 기본 인증

- 적용 범위: auth-service
- 상태: Released (v0.0.1)
- 마지막 수정일: 2026-03-29

## 개요

JWT 기반 인증 시스템의 초기 구현. 로그인, 토큰 발급, Guard 미들웨어를 포함한다.

## 포함 항목

- JWT 발급 (HS256, jose 라이브러리)
- Access Token (기본 1시간 TTL, sub/org_id/login_id/role_code/jti 클레임)
- Refresh Token (48바이트 랜덤, SHA256 해시 저장, 기본 30일)
- `POST /auth/login` — login_id + password 인증
- `POST /auth/logout` — 세션 취소
- `POST /auth/verify` — downstream 서비스용 토큰 검증
- Guard 미들웨어: requireBearer, requireAdmin, adminOrBootstrap, bearerOrBootstrap
- Bootstrap Secret 인증 (`X-Bootstrap-Secret` 헤더)
- bcrypt(12) 비밀번호 해싱
