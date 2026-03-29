# Overflow Policy Engine

- 문서명: Overflow Policy Engine
- 목적: queue/backend 과부하 시 자동 fallback 트리거 규칙을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `execution_routing.md`, `../operations.md`

## 목적

self-hosted 자원이 포화되었을 때 정책에 따라 managed backend로 자동 overflow하거나, CPU fallback을 적용하는 규칙 엔진. `execution_routing.md`의 fallback/overflow를 구체화한다.

## Overflow 트리거 규칙

| 조건 | 대상 | 액션 |
|------|------|------|
| inference queue wait > X초 | batch inference job | `vertex_batch_prediction` 후보 추가 |
| training queue depth > N | low-priority training | `vertex_custom_job` 우선 |
| self-hosted GPU unavailable | CPU fallback 가능 recipe | CPU queue 전환 |
| `allow_external_execution=false` | 모든 job | 외부 backend 금지 (overflow 불가) |
| `latency_class=realtime` | 해당 job | `vertex_batch_prediction` 금지 |
| maintenance 상태 pool | 해당 pool의 job | 다른 backend 후보로 우회 |

## 규칙 평가 순서

1. job의 `allow_external_execution` 확인
2. job의 `latency_class` 제약 확인
3. customer data_residency_policy 확인
4. 현재 backend pressure 확인
5. 해당하는 overflow rule 매칭
6. fallback backend 후보 생성
7. 후보 중 건강하고 quota 있는 backend 선택

## Backend Pressure 기준

| 지표 | Warning | Critical | Overflow 트리거 |
|------|---------|----------|----------------|
| 10분 avg utilization | 85% | 95% | critical 시 |
| queue wait time | queue 유형별 | queue 유형별 | warning 지속 시 |
| queued_jobs | TBD | TBD | critical 시 |

## CPU Fallback 조건

모두 충족해야 함:
- recipe가 `supports_cpu_inference=true`
- job이 `allow_cpu_fallback=true` 또는 `execution_preference=cpu`
- `latency_class`가 `batch` 또는 `interactive`
- CPU memory 충족

CPU fallback 시 반영:
- 예상 latency 상승
- timeout 기준 변경
- batch size 재조정
- result SLA downgrade

## 라우팅 결과 기록

overflow 발생 시 job에 기록:
- `fallback_applied=true`
- `routing_reason_code` (예: `routing_self_hosted_saturated`)
- `selected_backend` (실제 선택된 backend)
- `policy_rule_id` (적용된 overflow rule)

## 정책 관리

- v1: 정적 규칙 (config file)
- v1.5: DB-backed dynamic policy (settings API로 수정 가능)
- v2: 정책 기반 자동 routing engine

## v1 범위

- 구조만 수용 (overflow 인프라 준비)
- self-hosted 중심 수동 backend preference
- CPU fallback 기본 지원

## v1.5 범위

- Vertex AI offload 실제 적용
- overflow rule 동적 설정
- overflow 발생률 통계

## v2 범위

- queue pressure 기반 자동 overflow
- cost-aware overflow
- SLA-aware overflow

## 관련 문서

- `execution_routing.md`, `backend_health_monitoring.md`, `../operations.md`
