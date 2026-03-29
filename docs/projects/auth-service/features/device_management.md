# 디바이스 관리

- 문서명: 디바이스 관리
- 목적: 온라인 Edge 디바이스의 등록, 승인/취소, 목록 조회, 삭제를 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §8.2

## 1. 기능 개요

- 기능 이름: 디바이스 관리
- 한 줄 정의: Edge 앱이 서버에 접속할 때 Device UID 기반으로 디바이스를 등록하고, 관리자가 승인/취소/삭제한다.

## 2. 문제 정의

- Edge 디바이스의 중앙 관리가 필요하다.
- 디바이스 수를 추적하여 라이선스 한도와 대조해야 한다.
- 폐기된 디바이스의 접근을 차단해야 한다.

## 3. 목표

- 사용자 목표: 관리자가 조직의 디바이스를 한눈에 파악하고 제어한다.
- 운영 목표: 디바이스 수를 라이선스 한도 내로 관리한다.

## 4. 범위 / 비범위

- 포함: 디바이스 등록 (자동, ACTIVE), 목록 조회 (조직별), 폐기 (REVOKED), 삭제 (폐기된 것만), 재등록 (ACTIVE 시 업데이트)
- 비범위: 디바이스 하트비트/last_seen 추적 (P2), 디바이스 승인 워크플로우 (현재 자동 승인), 오프라인 디바이스 (offline_license_entitlement.md에서 다룸)

## 5. 사용자 시나리오

### 기본 흐름 — 디바이스 등록

1. 참여자: Edge 앱 (사용자 토큰으로 인증)
2. 선행 조건: 사용자가 조직에 속해 있다, 조직에 라이선스가 할당되어 있다
3. 기본 흐름: `POST /devices/register { device_uid, name }` → 토큰에서 org_id 추출 → 라이선스 존재 확인 → 디바이스 한도 확인 → 기존 device_uid 조회
   - 신규: 디바이스 생성 (status = ACTIVE, mode = online, approved_at = now)
   - 기존 ACTIVE: 200 반환 (정보 업데이트)
   - 기존 REVOKED: 400 DEVICE_REVOKED
4. 예외 흐름: 조직 없음 → 401 NO_ORGANIZATION. 라이선스 없음 → 403 NO_LICENSE. 한도 초과 → 403 DEVICE_LIMIT_REACHED.
5. 로그 포인트: `device_register`

### 기본 흐름 — 디바이스 폐기

1. 참여자: Admin 또는 Bootstrap
2. 기본 흐름: `POST /devices/:id/revoke` → 존재 확인 → 이미 REVOKED 확인 (400 ALREADY_REVOKED) → status = REVOKED, revoked_at = now, revoked_by_user_id 설정 → 디바이스 세션/토큰 무효화
3. 로그 포인트: `device_revoke`

### 기본 흐름 — 디바이스 삭제

1. 참여자: Admin 또는 Bootstrap
2. 선행 조건: 디바이스가 REVOKED 상태
3. 기본 흐름: `DELETE /devices/:id` → REVOKED 확인 (400 MUST_REVOKE_FIRST if ACTIVE) → 하드 삭제
4. 로그 포인트: `device_delete`

## 6. UI / UX 방향

- Admin Console 라이선스/디바이스 통합 페이지: 온라인 디바이스 목록 (device_uid, name, 상태, 등록일)
- 폐기 버튼 (확인 다이얼로그), 삭제 버튼 (폐기된 것만 활성)
- 상태별 필터, 검색

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /devices/register { device_uid, name }` — bearer (Edge 앱)
  - `GET /organizations/:orgId/devices` — bearer 또는 bootstrap
  - `POST /devices/:id/revoke` — bearer 또는 bootstrap
  - `DELETE /devices/:id` — bearer 또는 bootstrap
- 테이블: `devices` (id, organization_id, license_id, device_uid, name, mode, status, license_key, registered_at, approved_at, last_seen_at, revoked_at, revoked_by_user_id)
- 디바이스 상태: ACTIVE, REVOKED
- 디바이스 모드: online, offline

## 8. 테스트 계획

- unit: 한도 검사, 재등록 로직, 상태 전이 규칙
- integration: 등록 → 목록 조회 → 폐기 → 삭제 전체 플로우, 한도 초과 시 403 확인
- e2e: Admin Console에서 디바이스 목록 확인 → 폐기 → 삭제

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: 디바이스 하트비트 구현 완료 (`POST /devices/:id/heartbeat`)

## 10. 오픈 이슈

- ~~디바이스 하트비트 (`POST /devices/:id/heartbeat`) 미구현~~ → v0.0.2에서 구현 완료
- 디바이스 승인 워크플로우 (PENDING → ACTIVE) 미구현, 현재 등록 즉시 ACTIVE
- ~~라이선스 한도 검사 미구현~~ → v0.0.2에서 maxDevices 검사 구현 완료
