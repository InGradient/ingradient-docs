# 라이선스 사용량 추적 및 한도 검사

- 문서명: 라이선스 사용량 추적 및 한도 검사
- 목적: 조직 라이선스의 maxUsers/maxDevices 한도를 실제 검사하여 초과 추가를 차단한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §8, feature-requirements.md §8

## 1. 기능 개요

- 기능 이름: 라이선스 사용량 추적 및 한도 검사
- 한 줄 정의: 멤버/디바이스 추가 시점에 라이선스 한도를 검사하고, 사용량 현황을 API로 제공한다.

## 2. 문제 정의

- DB에 maxUsers, maxDevices가 저장되어 있으나 멤버/디바이스 추가 시 한도 검사를 하지 않는다.
- 라이선스 조회 API가 현재 사용량(current_users, current_devices)을 반환하지 않는다.
- 한도 없이 무제한 추가가 가능하여 라이선스 정책이 무의미하다.

## 3. 목표

- 사용자 목표: 관리자가 라이선스 사용 현황을 한눈에 파악한다.
- 운영 목표: 라이선스 초과를 자동 차단하여 정책을 강제한다.

## 4. 범위 / 비범위

- 포함: 멤버 추가 시 maxUsers 검사, 디바이스 등록 시 maxDevices 검사, 사용량 조회 API 확장, Admin Console 사용량 표시
- 비범위: 사용량 초과 시 기능 제한/경고 알림 (P2), 라이선스 갱신 전용 엔드포인트 (P3)

## 5. 사용자 시나리오

### 기본 흐름 — 멤버 추가 시 한도 검사

1. 참여자: 조직 관리자
2. 선행 조건: 조직에 라이선스가 할당되어 있다
3. 기본 흐름: `POST /organizations/:orgId/memberships` → 현재 ACTIVE 멤버 수 조회 → maxUsers와 비교 → 한도 이내면 멤버 추가
4. 예외 흐름: 한도 초과 → 409 CONFLICT 응답 (`LICENSE_LIMIT_EXCEEDED`, `"User limit reached: 10/10"`)
5. 시스템 반응: 감사 로그에 `license_limit_exceeded` 기록
6. 로그 포인트: `membership_add`, `license_limit_exceeded`

### 기본 흐름 — 사용량 조회

1. `GET /organizations/:orgId/license` 응답에 `currentUsers`, `currentDevices` 필드 추가
2. Admin Console 라이선스 카드에 "5 / 10 users", "3 / 5 devices" 형태로 표시

## 6. UI / UX 방향

- Admin Console 라이선스 섹션에 사용량 게이지 바 추가
- 한도 80% 이상 → 경고 색상, 100% → 위험 색상
- 멤버/디바이스 추가 실패 시 토스트 메시지로 한도 초과 안내

## 7. 데이터 / API / 권한 영향

- API 변경: `GET /organizations/:orgId/license` 응답에 `currentUsers`, `currentDevices` 필드 추가
- 검사 삽입 지점:
  - `POST /organizations/:orgId/memberships` → membershipService에 한도 검사 추가
  - `POST /devices/register` → deviceService에 한도 검사 추가
  - `POST /invitations/accept` → 수락 시점에도 한도 검사
  - `POST /join-codes/use` → 코드 사용 시점에도 한도 검사
- 새 에러 코드: `LICENSE_LIMIT_EXCEEDED` (HTTP 409)
- migration: 불필요 (런타임 COUNT 쿼리)

## 8. 테스트 계획

- unit: 한도 비교 로직, 라이선스 없는 조직의 기본 동작 (무제한 or 차단)
- integration: maxUsers=2인 조직에 멤버 2명 추가 → 3번째 시도 시 409 반환, 디바이스도 동일
- e2e: Admin Console에서 한도 도달 상태에서 멤버 추가 시도 → 에러 메시지 확인

## 9. 릴리즈 고려사항

- release note: 라이선스 한도 검사 활성화, 사용량 조회 추가
- ops: 기존에 한도 초과 상태인 조직이 있을 수 있음 → 배포 전 현황 점검 필요

## 10. 오픈 이슈

- 라이선스 없는 조직의 기본 정책: 무제한 허용 vs 기본 한도 적용 → 결정 필요
- soft limit (경고만) vs hard limit (차단) 정책을 조직별로 설정할지 검토
