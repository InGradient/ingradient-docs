# 하드 삭제 / GDPR 규정 준수

- 문서명: 하드 삭제 / GDPR 규정 준수
- 목적: 사용자 데이터의 완전 삭제 기능을 제공하여 GDPR 등 개인정보 규정을 준수한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: 하드 삭제 / GDPR 규정 준수
- 한 줄 정의: soft delete된 사용자 데이터를 완전히 제거하고, 개인정보 삭제 요청(Right to Erasure)을 처리하는 기능을 제공한다.

## 2. 문제 정의

- 현재 soft delete만 지원하여 개인정보가 DB에 영구 잔류한다.
- GDPR Article 17 "잊힐 권리"에 따라 개인정보 완전 삭제를 보장해야 한다.

## 3. 목표

- 사용자 목표: 본인의 개인정보 삭제를 요청하고 완전 제거를 보장받는다.
- 운영 목표: 보존 기간 경과 후 자동 하드 삭제, 삭제 요청 처리 워크플로우 구축.

## 4. 범위 / 비범위

- 포함: 하드 삭제 API, 보존 기간 설정, 자동 정리 스케줄러, 삭제 요청 워크플로우, 감사 로그 내 개인정보 익명화
- 비범위: 외부 시스템(platform, medilabel)의 데이터 삭제, 데이터 이식성(Right to Portability)

## 5. 사용자 시나리오

### 기본 흐름 — 개인정보 삭제 요청

1. 참여자: 사용자 또는 관리자
2. 선행 조건: 사용자가 soft delete 상태
3. 기본 흐름: `POST /users/:id/erasure-request` → 삭제 요청 생성 → 보존 기간(30일) 대기 → 자동 하드 삭제 (사용자, 세션, 멤버십, 디바이스 관련 데이터)
4. 예외 흐름: 보존 기간 내 요청 취소 가능, 법적 보존 의무가 있는 경우 관리자 승인 필요
5. 로그 포인트: `erasure_request_created`, `hard_delete_completed`

## 6. UI / UX 방향

- 사용자 설정 → "계정 삭제 요청" 버튼
- Admin Console → 삭제 요청 대기열 관리

## 7. 데이터 / API / 권한 영향

- 새 테이블: `erasure_requests` (user_id, requested_at, scheduled_at, status, completed_at)
- 새 API: `POST /users/:id/erasure-request`, `GET /admin/erasure-requests`
- 감사 로그: 하드 삭제 후 사용자 정보 익명화 (email → hashed, name → "삭제된 사용자")
- 스케줄러: 보존 기간 경과 건 일일 처리

## 8. 테스트 계획

- unit: 하드 삭제 시 관련 테이블 캐스케이드 확인
- integration: 삭제 요청 → 보존 기간 경과 → 자동 삭제 → 조회 불가 확인
- e2e: 감사 로그 내 개인정보 익명화 확인

## 9. 릴리즈 고려사항

- release note: GDPR 개인정보 삭제 요청 및 하드 삭제 기능 추가
- ops: 하드 삭제 전 백업 정책 수립

## 10. 오픈 이슈

- 보존 기간 기본값 (30일 vs 90일)
- 외부 시스템 연동 삭제 (이벤트 발행 vs API 호출)
