# Bootstrap 시크릿 프로덕션 비활성화

- 문서명: Bootstrap 시크릿 프로덕션 비활성화
- 목적: 프로덕션 환경에서 Bootstrap 시크릿 인증을 비활성화하여 보안을 강화한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: Bootstrap 시크릿 프로덕션 비활성화
- 한 줄 정의: 서비스 간 인증이 client_credentials로 전환된 후, Bootstrap 시크릿을 프로덕션에서 비활성화하는 기능을 제공한다.

## 2. 문제 정의

- Bootstrap 시크릿은 개발 편의를 위한 임시 인증 수단으로, 프로덕션에서 지속 사용 시 보안 위험이 있다.
- 단일 시크릿으로 모든 서비스가 동일한 권한을 가지는 문제가 있다.

## 3. 목표

- 사용자 목표: 해당 없음 (인프라 기능)
- 운영 목표: Bootstrap 시크릿을 환경별로 활성화/비활성화하여 프로덕션 보안을 강화한다.

## 4. 범위 / 비범위

- 포함: 환경별 Bootstrap 활성화 토글, 비활성화 시 X-Bootstrap-Secret 헤더 무시, 마이그레이션 가이드
- 비범위: Bootstrap 코드 완전 제거 (하위 호환성 유지)

## 5. 사용자 시나리오

### 기본 흐름 — Bootstrap 비활성화

1. 참여자: 운영자
2. 선행 조건: 모든 서비스가 client_credentials로 전환 완료
3. 기본 흐름: `BOOTSTRAP_ENABLED=false` 환경변수 설정 → 서비스 재시작 → X-Bootstrap-Secret 헤더 인증 거부 (401)
4. 예외 흐름: 미전환 서비스 존재 시 → 로그 경고 + 선택적 허용 모드
5. 로그 포인트: `bootstrap_auth_rejected`, `bootstrap_deprecation_warning`

## 6. UI / UX 방향

- 해당 없음 (인프라 설정)

## 7. 데이터 / API / 권한 영향

- 환경변수: `BOOTSTRAP_ENABLED` (default: true → 점진적 false 전환)
- 기존 API 동작: Bootstrap 비활성화 시 `X-Bootstrap-Secret` 인증 미들웨어가 401 반환
- 로그: 비활성화 상태에서 Bootstrap 시도 시 경고 로그

## 8. 테스트 계획

- unit: BOOTSTRAP_ENABLED 플래그에 따른 미들웨어 분기 확인
- integration: 비활성화 상태에서 Bootstrap 헤더 → 401 확인
- e2e: client_credentials 전환 후 Bootstrap 비활성화 → 전체 서비스 정상 동작

## 9. 릴리즈 고려사항

- release note: Bootstrap 시크릿 비활성화 옵션 추가
- ops: 서비스 간 인증 전환 완료 확인 후 순차적으로 비활성화

## 10. 오픈 이슈

- client_credentials 완전 전환 완료 시점과 연동
- Bootstrap 제거가 아닌 비활성화로 유지하는 기간
