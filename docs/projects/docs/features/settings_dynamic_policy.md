# Settings / Dynamic Policy

- 문서명: Settings / Dynamic Policy
- 목적: 설정 계층, 동적 정책 수정 범위, source of truth 규칙을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `../operations.md`

## 목적

AI Platform의 설정은 한 곳에 모두 두지 않는다. secret, static config, dynamic policy를 계층으로 분리하고, UI에서 수정 가능한 범위를 명확히 한다.

## 설정 계층

| 계층 | 대상 | Source of Truth | UI 접근 |
|------|------|----------------|---------|
| **Secret** | provider API key, DB credential, storage key | Secret Manager | 노출 금지 |
| **Static Config** | deployment profile, runtime enable/disable, region | version-controlled config | 읽기 전용 |
| **Dynamic Policy** | alert threshold, queue concurrency, preload default | DB (settings store) | **수정 가능** |
| **UI Local State** | 사용자 뷰 설정, 필터 저장 | 브라우저 | 사용자 개별 |

## 우선순위

1. Secret store (최우선)
2. Static config
3. DB dynamic policy
4. UI local state (최하위)

DB 설정이 static config를 덮어쓰는 것은 명시적으로 허용한 항목에 한한다.

## Dynamic Policy — 수정 가능 항목

| 항목 | 설명 | 기본값 |
|------|------|--------|
| alert threshold (queue wait) | queue 유형별 warning/critical 기준 | operations.md 참조 |
| alert threshold (heartbeat) | no heartbeat warning/critical | 15초/45초 |
| queue concurrency limit | queue별 동시 실행 제한 | queue별 상이 |
| preload default | runtime별 preload 상한 | TBD |
| overflow threshold | backend saturation 기준 | 85%/95% |

## Static Config — 읽기 전용

| 항목 | 설명 |
|------|------|
| deployment profile | SaaS, Dedicated, On-Prem, Hybrid |
| enabled runtimes | detection, foundation, medical, utility |
| provider allowlist | 허용된 external provider |
| region policy | 데이터 residency 제한 |
| backend list | 사용 가능한 backend 목록 |

## API

| Method | Path | 설명 | Scope |
|--------|------|------|-------|
| `GET` | `/api/settings` | 전체 설정 조회 (static + dynamic) | `settings.read` |
| `PUT` | `/api/settings/{key}` | 동적 정책 수정 | `settings.write` |

## 수정 규칙

- dynamic policy만 API/UI로 수정 가능
- 수정 시 before/after 값을 audit log에 기록
- optimistic lock (version) 적용 → 동시 수정 충돌 방지
- static config 수정은 배포 파이프라인으로만 가능

## Ops Console Settings 페이지

v1에서는 독립 전체 페이지가 아닌 다른 페이지에서 read-only 노출:
- Models/Events/Jobs 페이지에서 관련 설정값 표시
- 필요 시 inline 수정 (concurrency limit 등)

v1.1부터 독립 Settings 페이지:
- Static config: read-only 표시
- Dynamic policy: 편집 가능
- Secret: 원문 노출 금지, health check만 표시

## v1 범위

- dynamic policy 기본 항목 수정 (alert threshold, concurrency)
- static config 읽기 전용 노출
- audit log 기록
- optimistic lock

## v1.5 이후

- Settings 독립 페이지
- policy 변경 이력 조회
- provider registry read-only 표시
- credential health check

## 관련 문서

- `../api_contract.md`, `../operations.md`, `audit_log.md`
