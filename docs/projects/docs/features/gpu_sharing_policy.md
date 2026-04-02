# GPU Sharing Policy

- 문서명: GPU Sharing Policy
- 목적: Exclusive, Restricted Sharing, Open Sharing 모드별 GPU 공유 정책을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `training_scheduler.md`

## 목적

GPU를 여러 job이 공유할 때의 규칙을 정의한다. 안정성 우선 원칙에 따라 초기에는 보수적으로 운영하고, profiling 데이터가 축적되면 점진적으로 공유를 확대한다.

## 공유 모드

### Exclusive

| 항목 | 설명 |
|------|------|
| 대상 | training, high-risk medical, profiling 없는 신규 모델 |
| 동작 | GPU를 단일 job이 독점 |
| 제약 | 다른 job은 해당 GPU에 스케줄링 불가 |
| 장점 | OOM 위험 최소, 성능 예측 가능 |
| 단점 | GPU 활용률 낮음 |

### Restricted Sharing

| 항목 | 설명 |
|------|------|
| 대상 | 검증된 가벼운 inference, warm worker 기반 짧은 job |
| 동작 | 제한된 수의 job이 GPU 공유 |
| 제약 | max concurrent job 제한, 높은 safety margin |
| 조건 | 동일 queue 또는 동일 risk tier |
| 장점 | GPU 활용률 향상 |
| 단점 | OOM 가능성 존재 (마진으로 완화) |

### Open Sharing

| 항목 | 설명 |
|------|------|
| 대상 | v1에서 도입하지 않음 |
| 이유 | 안정성보다 혼란이 커질 가능성 |
| 시점 | v2 이후 검토 |

## Sharing Mode 결정 로직

```
job이 training? → Exclusive
job이 medical + high-risk? → Exclusive
model에 profiling 없음? → Exclusive
model이 검증된 inference + warm? → Restricted Sharing
그 외 → Exclusive (안전 기본값)
```

## Restricted Sharing 세부 규칙

| 규칙 | 값 |
|------|-----|
| max_concurrent_jobs | GPU당 2-3 (VRAM 기반) |
| safety_margin | Exclusive 대비 1.5배 |
| 허용 job class | Class A (realtime inference), Class B (batch inference) |
| 금지 job class | Class C (training), Class D (utility with large memory) |
| queue 제한 | 동일 runtime의 inference queue만 |

## Job 생성 시 sharing 필드

| 필드 | 값 | 설명 |
|------|-----|------|
| `resource_request.exclusive_mode` | `none` | sharing 허용 |
| | `restricted` | restricted sharing |
| | `exclusive` | 독점 |

## VRAM 연동

- Exclusive: 전체 `available_for_scheduling_mb` 확보
- Restricted Sharing: `committed_vram_mb + safety_margin` 기준, 나머지 VRAM에서 추가 job 허용
- 상세 계산은 `vram_calculation_engine.md` 참조

## Ops Console 표시

- GPU card: sharing_mode 표시 (exclusive / restricted)
- Worker table: 현재 sharing 상태, concurrent job 수
- Job 상세: exclusive_mode 값

## Phase별 계획

| Phase | 정책 | 설명 |
|-------|------|------|
| Phase 1 | Exclusive only | 모든 GPU job 독점 |
| Phase 2 | Restricted Sharing 도입 | 검증된 inference만 |
| Phase 3 | Open Sharing 검토 | profiling 기반 정밀 공유 |

## v1 범위

- Exclusive 모드 구현
- `exclusive_mode` 필드 처리
- Ops Console 표시

## v1.5 범위

- Restricted Sharing 구현
- max_concurrent_jobs 제한
- sharing 대상 검증 로직

## 관련 문서

- `training_scheduler.md`, `vram_calculation_engine.md`, `oom_detection_recovery.md`
