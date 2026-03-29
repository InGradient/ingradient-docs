# Auth Integration

- 문서명: Auth Integration
- 목적: auth-service 연동, 토큰 검증, scope enforcement 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`

## 목적

AI Platform은 자체 인증을 구현하지 않고 auth-service에 위임한다. 토큰 검증, scope 확인, tenant 격리를 통해 API 보안을 유지한다.

## 인증 유형

| 유형 | 설명 | 사용처 |
|------|------|--------|
| **Operator 인증** | 운영자가 ops console에서 직접 접근 | 콘솔 UI, 운영 API |
| **Service-to-Service** | platform/medilabel이 AI API 호출 | job 생성, 결과 조회 |

두 유형을 구분하여 audit log에 actor 정보를 정확히 기록한다.

## 인증 흐름

1. 요청 header에서 Bearer token 추출
2. auth-service `/api/auth/verify` 호출로 토큰 검증
3. 응답에서 user_id, organization_id, project_id, scopes 확인
4. 요청 API에 필요한 scope 충족 여부 검증
5. project/tenant scope 조회 시 caller scope와 일치 확인

## Auth Scope

| Scope | 필요 API |
|-------|----------|
| `jobs.read` | Job 목록/상세 조회 |
| `jobs.write` | Job 생성, cancel, retry, clone, reprioritize |
| `workers.read` | Worker/Node/GPU 조회 |
| `workers.write` | Worker restart, drain, Node cordon |
| `models.read` | Model/Version 조회 |
| `models.write` | Model 등록, Version 생성, validate, promote, rollback |
| `queues.read` | Queue 조회 |
| `queues.write` | Queue pause/resume, concurrency 변경 |
| `events.read` | Event/Alert 조회 |
| `events.write` | Event acknowledge, mute |
| `analytics.read` | Usage 통계 조회 |
| `settings.read` | 설정 조회 |
| `settings.write` | 동적 정책 수정 |

## Tenant 격리

- 모든 조회 API는 caller의 organization/project scope 내 데이터만 반환
- `requested_scope_type` + `requested_scope_id`로 요청 범위 명시
- cross-tenant 접근 금지

## 에러 응답

| 상황 | 코드 |
|------|------|
| 토큰 없음 또는 만료 | `unauthorized` (401) |
| scope 부족 | `forbidden` (403) |
| tenant scope 불일치 | `forbidden` (403) |

## v1 범위

- auth-service 토큰 검증 연동
- scope enforcement (모든 API)
- service-to-service / operator 구분
- tenant scope 필터링

## v1.5 이후

- fine-grained permission (resource-level)
- API key 기반 인증 (자동화용)
- rate limiting per tenant

## 관련 문서

- `../api_contract.md`, `gateway.md`
