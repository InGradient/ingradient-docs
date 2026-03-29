# Model Preload Management

- 문서명: Model Preload Management
- 목적: 모델 메모리 로드/언로드의 상태 머신, 선정 기준, eviction 정책을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `training_scheduler.md`, `../operations.md`

## 목적

Worker GPU에 모델을 미리 로드(preload)하여 cold start를 최소화하고, 메모리 부족 시 자동 eviction으로 자원을 관리한다. training_scheduler의 GPU 스케줄링과 연계되지만 독립적인 상태 머신과 정책을 가진다.

## Preload 상태 머신

| 상태 | 설명 |
|------|------|
| `cold` | 로드되지 않음 |
| `warming` | 로드 진행 중 (artifact 다운로드 + GPU 메모리 적재) |
| `warm` | 로드 완료, job 대기 |
| `in_use` | job 실행 중 |
| `cooldown` | job 종료 후 대기 (일정 시간 후 eviction 후보) |
| `evicted` | 메모리 부족으로 제거됨 |

### 전이

```
cold → warming → warm → in_use → cooldown → warm (재사용)
                                            → evicted (pressure)
warming → cold (실패 시)
```

## Preload 대상 선정 기준

| 기준 | 설명 |
|------|------|
| 최근 호출 빈도 | 자주 사용되는 모델 우선 |
| cold start 비용 | 로드 시간이 긴 모델 우선 |
| warm footprint | GPU 메모리 점유량 대비 가치 |
| queue pressure | 해당 모델의 queue backlog 상태 |
| runtime별 preload 상한 | runtime당 최대 preload 수 제한 |

## Eviction 정책

- 미사용 시간 > 60분 + memory pressure → warning (eviction 후보)
- 미사용 시간 > 180분 + memory pressure 지속 → critical (eviction 실행)
- eviction 순서: 가장 오래 미사용 → warm footprint 큰 것 우선
- production default model은 eviction 우선순위 최하위

## API

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/models/{model_id}/versions/{version_id}/preload` | 수동 preload 요청 |
| `POST` | `/api/models/{model_id}/versions/{version_id}/unload` | 수동 unload 요청 |

## Preload 실행 흐름

1. preload 요청 수신 (수동 또는 자동)
2. 대상 worker 선택 (runtime 호환, GPU 가용 VRAM)
3. artifact 다운로드 (storage → worker local)
4. checksum 검증
5. GPU 메모리에 모델 적재
6. 상태 `warm` 전이 + event 발행 (`model.loaded`)

## Preload 실패 대응

1. artifact checksum 불일치 → alert + retry
2. storage 접근 실패 → credential 확인 alert
3. VRAM 부족 → eviction 시도 후 재시도
4. runtime 비호환 → 에러 기록 + alert
5. 동일 worker 실패 반복 → 다른 worker에서 시도

## Model Locality

- scheduler는 warm model이 있는 worker를 우선 선택
- locality miss rate 20% 초과 시 warning alert
- locality miss rate 40% 초과 시 critical alert
- preload 정책 재검토 트리거

## Ops Console 표시

- Models 페이지: Loaded Models 탭 (loaded worker count, warm/cold, memory footprint, last inference)
- Workers & GPU: GPU card에 loaded models 표시
- preload/unload 액션 버튼

## v1 범위

- 수동 preload/unload API
- preload 상태 추적 (6상태)
- eviction 기본 정책
- locality miss rate 모니터링
- ops console Loaded Models 탭

## v1.5 이후

- 자동 preload 추천 (usage 기반)
- preload scheduling (시간대별)
- cross-node preload 최적화

## 관련 문서

- `training_scheduler.md`, `../operations.md`, `artifact_storage.md`, `worker_node_gpu_management.md`
