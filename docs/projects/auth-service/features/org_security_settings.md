# 조직별 보안 설정

- 문서명: 조직별 보안 설정
- 목적: 조직 단위로 보안 정책(비밀번호 정책, MFA 필수, 세션 타임아웃)을 개별 설정할 수 있게 한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: 조직별 보안 설정
- 한 줄 정의: 조직마다 비밀번호 복잡도, MFA 필수 여부, 세션 타임아웃 등 보안 정책을 독립적으로 설정하는 기능을 제공한다.

## 2. 문제 정의

- 현재 보안 정책이 시스템 전역으로만 적용되어 조직별 요구사항을 반영할 수 없다.
- 엔터프라이즈 고객은 자체 보안 기준에 맞는 정책을 요구한다.

## 3. 목표

- 사용자 목표: 조직 관리자가 자신의 조직에 맞는 보안 수준을 직접 관리한다.
- 운영 목표: 시스템 관리자가 전역 기본값을 설정하고, 조직이 이를 오버라이드할 수 있도록 한다.

## 4. 범위 / 비범위

- 포함: 비밀번호 정책(복잡도, 길이, 만료), MFA 필수 토글, 세션 타임아웃(idle, absolute), 설정 CRUD API
- 비범위: IP 화이트리스트(별도 기능), SSO 연동 설정(별도 기능)

## 5. 사용자 시나리오

### 기본 흐름 — 보안 설정 변경

1. 참여자: 조직 관리자
2. 선행 조건: ADMIN 역할 보유
3. 기본 흐름: `GET /organizations/:orgId/security-settings` → 현재 설정 확인 → `PATCH /organizations/:orgId/security-settings` → 설정 변경
4. 예외 흐름: 권한 없는 사용자 → 403
5. 로그 포인트: `org_security_settings_update`

## 6. UI / UX 방향

- Admin Console → 조직 상세 → 보안 설정 탭
- 각 항목에 "시스템 기본값 사용" 토글 제공

## 7. 데이터 / API / 권한 영향

- 새 테이블/확장: `org_security_settings` (org_id, password_policy_json, mfa_required, session_idle_timeout, session_absolute_timeout)
- 새 API: `GET/PATCH /organizations/:orgId/security-settings`
- 권한: `organization:manage_security`
- migration: org_security_settings 테이블 생성

## 8. 테스트 계획

- unit: 설정 병합 로직 (전역 기본값 + 조직 오버라이드)
- integration: 설정 변경 후 로그인 시 정책 적용 확인
- e2e: MFA 필수 활성화 → 미등록 멤버 로그인 시 강제 셋업

## 9. 릴리즈 고려사항

- release note: 조직별 보안 설정 기능 추가
- ops: 기존 조직에 대한 기본값 마이그레이션 스크립트 필요

## 10. 오픈 이슈

- 전역 기본값 대비 조직 설정의 최소/최대 범위 제한 여부
- 설정 변경 시 기존 세션에 즉시 적용할지, 다음 로그인부터 적용할지
