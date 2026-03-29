# 오프라인 라이선스 및 엔타이틀먼트

- 문서명: 오프라인 라이선스 및 엔타이틀먼트
- 목적: 오프라인 환경의 Edge 디바이스를 위한 라이선스 키 발급/폐기와 엔타이틀먼트 토큰 관리를 정의한다.
- 적용 범위: auth-service
- 상태: Released (v0.0.2)
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: feature-requirements.md §8.3, §8.4

## 1. 기능 개요

- 기능 이름: 오프라인 라이선스 및 엔타이틀먼트
- 한 줄 정의: 하드웨어 fingerprint 기반 오프라인 라이선스 키를 발급하고, RS256 JWT 엔타이틀먼트 토큰으로 오프라인 기능 접근 범위를 제어한다.

## 2. 문제 정의

- 네트워크 연결이 없는 환경에서 Edge 디바이스를 인증해야 한다.
- 오프라인 디바이스의 기능 접근 범위를 중앙에서 제어하고 만료 관리해야 한다.
- 라이선스 슬롯 반환을 위한 비활성화 메커니즘이 필요하다.

## 3. 목표

- 사용자 목표: 오프라인 환경에서도 Edge 디바이스를 인증하고 사용한다.
- 운영 목표: 오프라인 디바이스의 라이선스와 기능 접근을 중앙에서 통제한다.

## 4. 범위 / 비범위

- 포함: 오프라인 라이선스 발급 (HMAC 기반, fingerprint → deterministic key), 라이선스 목록/폐기, 비활성화 코드 처리, 엔타이틀먼트 발급 (RS256 JWT)/취소/목록
- 비범위: 엔타이틀먼트 갱신 전용 엔드포인트 (🟡 부분 구현), 오프라인 grace period 자동 관리

## 5. 사용자 시나리오

### 기본 흐름 — 오프라인 라이선스 발급

1. 참여자: Admin 또는 Bootstrap
2. 선행 조건: 조직에 라이선스 할당, offline_enabled = true
3. 기본 흐름: `POST /licenses { fingerprint, label?, org_id?, valid_until? }` → 조직 라이선스 확인 → 디바이스 한도 확인 → fingerprint 중복 확인 (ACTIVE → 400, REVOKED → 재활성화, 신규 → 생성) → HMAC-SHA256(EDGE_LICENSE_SECRET, fingerprint).slice(0, 32)로 라이선스 키 생성 → 디바이스 생성 (mode = offline, status = ACTIVE)
4. 예외 흐름: 조직 라이선스 없음 → 400 ORG_HAS_NO_LICENSE. 이미 등록 → 400 DEVICE_ALREADY_REGISTERED. 한도 초과 → 403 DEVICE_LIMIT_REACHED.
5. 시스템 반응: Edge 디바이스에서 동일한 HMAC 계산으로 키 검증 (서버 통신 불필요)
6. 로그 포인트: `license_issue`

### 기본 흐름 — 비활성화 코드

1. 참여자: Edge 디바이스 (오프라인), Admin (온라인)
2. 기본 흐름: Edge가 `base64url(fingerprint|timestamp|hmac)` 코드 생성 → Admin이 `POST /licenses/deactivate { deactivation_code }` 입력 → 서버가 HMAC 검증 (DEACTIVATION_SECRET) + timestamp 30일 이내 확인 → 디바이스 REVOKED → 라이선스 슬롯 반환
3. 예외 흐름: HMAC 불일치 → 400 INVALID_CODE. 타임스탬프 초과 → 400 INVALID_CODE. 디바이스 없음 → 404 NO_ACTIVE_OFFLINE_DEVICE.
4. 로그 포인트: `device_deactivate`

### 기본 흐름 — 엔타이틀먼트 발급

1. 참여자: Admin 또는 Bootstrap
2. 기본 흐름: `POST /organizations/:orgId/entitlements { user_id, device_uid, scope, valid_days? }` → 디바이스 존재 + ACTIVE 확인 → 조직 라이선스의 offline_enabled 확인 → 엔타이틀먼트 생성 (jti, token_version = 1, scope_json, valid_until) → RS256 JWT 서명 (ENTITLEMENT_PRIVATE_KEY)
3. 로그 포인트: `entitlement_issue`

## 6. UI / UX 방향

- Admin Console 라이선스/디바이스 통합 페이지: 오프라인 라이선스 목록 (fingerprint, label, 상태, 발급일)
- 오프라인 라이선스 발급 폼: fingerprint, label, 조직 선택
- 비활성화 코드 입력 필드 + 처리 버튼
- 엔타이틀먼트 목록 (디바이스, 사용자, 만료일, 상태)

## 7. 데이터 / API / 권한 영향

- API:
  - `POST /licenses { fingerprint, label?, org_id?, valid_until? }` — adminOrBootstrap
  - `GET /licenses?org_id=` — adminOrBootstrap
  - `DELETE /licenses/:fingerprint` — adminOrBootstrap (REVOKED 처리)
  - `POST /licenses/deactivate { deactivation_code }` — adminOrBootstrap
  - 엔타이틀먼트: `POST /organizations/:orgId/entitlements`, `DELETE /entitlements/:id`, `GET /organizations/:orgId/entitlements`
- 테이블: `devices` (mode = offline, license_key 필드), `offline_entitlements` (id, organization_id, user_id, device_id, jti, token_version, valid_until, scope_json, status)
- 환경변수: `EDGE_LICENSE_SECRET` (HMAC 키), `DEACTIVATION_SECRET`, `ENTITLEMENT_PRIVATE_KEY` (RS256)

## 8. 테스트 계획

- unit: HMAC 키 생성 검증, 비활성화 코드 파싱/HMAC 검증, RS256 JWT 생성/검증
- integration: 라이선스 발급 → 목록 조회 → 비활성화 → 슬롯 반환 확인, 엔타이틀먼트 발급 → 취소
- e2e: Admin Console에서 오프라인 라이선스 발급 → 비활성화 코드 입력 → 폐기 확인

## 9. 릴리즈 고려사항

- release note: v0.0.2에 포함
- ops: EDGE_LICENSE_SECRET, DEACTIVATION_SECRET, ENTITLEMENT_PRIVATE_KEY 환경변수 설정 필수

## 10. 오픈 이슈

- ~~엔타이틀먼트 발급/갱신/폐기 플로우~~ → v0.0.2에서 전체 구현 완료 (발급/취소/목록/갱신)
- 오프라인 grace period 자동 관리 미구현
- ~~엔타이틀먼트 갱신 시 token_version 증가~~ → v0.0.2에서 `PATCH /entitlements/:jti/renew` 구현 완료
