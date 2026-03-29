# OOM Detection & Recovery

- 문서명: OOM Detection & Recovery
- 목적: OOM 감지, 기록, 자동 대응, worker 상태 전환 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `training_scheduler.md`, `../operations.md`

## 목적

GPU Out-of-Memory(OOM) 발생 시 무한 재시도를 방지하고, 원인을 기록하며, 가능한 경우 안전하게 복구한다.

## OOM 감지

| 감지 방법 | 설명 |
|-----------|------|
| Worker 프로세스 에러 | CUDA OOM 에러 캐치 |
| GPU 메트릭 | VRAM 사용량 100% 도달 |
| Job failure_code | `oom_killed`, `cuda_out_of_memory` |

## OOM 발생 시 기록

JobAttempt에 아래를 기록:

| 필드 | 내용 |
|------|------|
| failure_code | `cuda_out_of_memory` |
| peak_vram_mb | OOM 발생 시점의 peak VRAM |
| failure_message | 에러 상세 |
| model warm footprint | 해당 시점의 모델 메모리 |
| sharing 상태 | exclusive / restricted |
| concurrent job 수 | 동시 실행 중이던 job 수 |

## 자동 대응 흐름

```
OOM 발생
  → 동일 조건 즉시 재시도 금지
  → peak_vram_mb, failure_code 기록
  → batch downscale 가능?
    → Yes: batch size 줄여서 retry
    → No: exclusive mode 가능?
      → Yes: exclusive mode로 downgrade 후 retry
      → No: retry 실패 → dead_letter 또는 manual
```

### 규칙

1. **동일 조건 즉시 무한 재시도 금지** — 같은 resource_request로 즉시 retry하면 또 OOM
2. **batch downscale retry** — recipe가 지원하는 경우만, batch size를 줄여서 재시도
3. **exclusive mode downgrade** — restricted sharing에서 OOM이면 exclusive로 전환 후 재시도
4. **반복 OOM → worker 상태 전환** — 30분 내 3회 OOM → worker를 `oom_recent`로 표시
5. **특정 worker 반복** — 같은 worker에서 계속 OOM → drain 또는 maintenance 권고

## Worker `oom_recent` 상태

| 항목 | 설명 |
|------|------|
| 진입 조건 | 30분 내 OOM 3회 |
| 효과 | 해당 worker의 스케줄링 신뢰도 저하 |
| 스케줄러 반응 | 다른 건강한 worker 우선 선택 |
| 해제 조건 | drain 후 재시작, 또는 일정 시간 OOM 미발생 |

## Alert

| Signal | Warning | Critical |
|--------|---------|----------|
| OOM burst | 15분 내 2회 | 30분 내 3회 |

## 운영자 확인 포인트

- 모델 warm footprint 변화 (최근 업데이트 후 증가했는지)
- 최근 worker 재시작 이력
- 같은 node의 다른 GPU에서도 동일 현상인지
- sharing 모드가 적절한지 (restricted → exclusive 전환 필요?)
- recipe의 memory profile이 정확한지

## Ops Console 표시

- Job 상세: failure_code=OOM, peak_vram_mb, retry 이력
- Worker table: oom_recent 상태 강조, recent OOM count
- GPU card: peak VRAM 표시
- Events: OOM burst alert

## v1 범위

- OOM 감지 + peak_vram 기록
- 동일 조건 즉시 재시도 방지
- oom_recent worker 상태 전환
- OOM burst alert

## v1.5 이후

- batch downscale retry 자동화
- exclusive mode 자동 downgrade
- OOM 패턴 분석 (어떤 model + recipe 조합에서 빈번한지)
- VRAM profiling 기반 예방

## 관련 문서

- `training_scheduler.md`, `retry_policy_engine.md`, `vram_calculation_engine.md`, `../operations.md`
