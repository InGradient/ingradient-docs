# IP 허용/차단 리스트

- 문서명: IP 허용/차단 리스트
- 목적: IP 기반 접근 제어와 의심 IP 자동 차단으로 보안을 강화한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: IP 허용/차단 리스트
- 한 줄 정의: 조직 또는 시스템 단위로 IP 허용/차단 리스트를 관리하고, 반복 실패 IP를 자동 차단한다.

## 2. 문제 정의

- 특정 IP에서의 무차별 대입 공격을 효과적으로 차단할 수 없다.
- 엔터프라이즈 고객은 사내 IP만 허용하는 화이트리스트 기능을 요구한다.

## 3. 목표

- 사용자 목표: 조직 관리자가 허용 IP 범위를 설정하여 외부 접근을 제한한다.
- 운영 목표: 반복 로그인 실패 IP를 자동 차단하고 관리자에게 알린다.

## 4. 범위 / 비범위

- 포함: IP 허용 리스트 (allowlist), IP 차단 리스트 (blocklist), CIDR 지원, 자동 차단 (N회 실패 시 임시 차단), 조직별/전역 설정
- 비범위: WAF 연동, 국가별 차단 (GeoIP 기반)

## 5. 사용자 시나리오

### 기본 흐름 — IP 허용 리스트 설정

1. 참여자: 조직 관리자
2. 선행 조건: ADMIN 역할
3. 기본 흐름: `POST /organizations/:orgId/ip-rules` (type: allow, cidr: "10.0.0.0/8") → 허용 리스트 추가 → 허용 범위 외 IP 로그인 → 403
4. 예외 흐름: 잘못된 CIDR 형식 → 400
5. 로그 포인트: `ip_rule_created`, `ip_blocked_access`

## 6. UI / UX 방향

- Admin Console → 조직 설정 → IP 접근 제어 탭
- 허용/차단 리스트 관리, 자동 차단된 IP 목록 확인 및 해제

## 7. 데이터 / API / 권한 영향

- 새 테이블: `ip_rules` (org_id nullable, type: allow/block, cidr, reason, auto_blocked, expires_at)
- 새 API: `GET/POST/DELETE /organizations/:orgId/ip-rules`, `GET/POST/DELETE /admin/ip-rules` (전역)
- 미들웨어: 인증 전 IP 체크 미들웨어 추가

## 8. 테스트 계획

- unit: CIDR 매칭 로직, 허용/차단 우선순위 판단
- integration: 차단 IP → 로그인 시도 → 403 확인
- e2e: 자동 차단 → 관리자 해제 → 재접근 허용

## 9. 릴리즈 고려사항

- release note: IP 기반 접근 제어 기능 추가
- ops: 자동 차단 임계값 설정 (기본 20회/시간)

## 10. 오픈 이슈

- 허용 리스트 모드 시 관리자 자신의 IP 실수 차단 방지
- 자동 차단 해제 시간 기본값 (1시간 vs 24시간)
