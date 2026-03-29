# Admin UI 초기 버전

- 적용 범위: auth-service (web/admin-next/)
- 상태: Released (v0.0.1)
- 마지막 수정일: 2026-03-29

## 개요

React + Vite 기반 관리 콘솔의 초기 구현. System Admin 전용.

## 포함 항목

- Admin 전용 로그인 (`POST /auth/admin-login`, isSystemAdmin 필수)
- 정적 파일 서빙 (`@fastify/static`, `/admin/` 경로)
- 사이드바 네비게이션 (접기/펼치기)
- 페이지: Users, Organizations, Products, Licenses
- API 클라이언트 (apiGet, apiPost, apiPatch, apiDelete + Bearer 자동 첨부)
- 401 시 로그인 페이지 자동 리다이렉트
