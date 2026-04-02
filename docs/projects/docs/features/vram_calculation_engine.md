# VRAM Calculation Engine

- 문서명: VRAM Calculation Engine
- 목적: GPU 스케줄링을 위한 VRAM 가용량 계산 로직을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `training_scheduler.md`

## 목적

단순 free VRAM이 아닌, 안전 마진을 포함한 정확한 가용량 계산으로 OOM을 예방하고 안정적인 GPU 스케줄링을 지원한다.

## 계산 요소

| 요소 | 설명 | 예시 |
|------|------|------|
| `total_vram_mb` | GPU 전체 VRAM | 24576 (24GB) |
| `system_reserve_mb` | OS/driver 예약 | 500 |
| `runtime_reserve_mb` | runtime 프로세스 기본 메모리 | 200-500 |
| `fragmentation_margin_mb` | 메모리 단편화 여유 | 512 |
| `warm_footprint_mb` | 로드된 모델의 상주 메모리 합계 | 가변 |
| `active_job_committed_mb` | 현재 실행 중 job의 committed VRAM | 가변 |
| `spike_buffer_mb` | peak 사용량 대비 안전 여유 | 1024 |

## 가용량 계산

```
available_for_scheduling_mb =
  total_vram_mb
  - system_reserve_mb
  - runtime_reserve_mb
  - fragmentation_margin_mb
  - warm_footprint_mb
  - active_job_committed_mb
  - spike_buffer_mb
```

## 핵심 메트릭

| 메트릭 | 설명 |
|--------|------|
| `committed_vram_mb` | 현재 사용 약속된 VRAM (active + scheduled) |
| `available_for_scheduling_mb` | 새 job에 할당 가능한 VRAM |
| `safety_margin_mb` | 전체 안전 마진 합계 |
| `peak_recent_vram_mb` | 최근 실행에서의 peak 사용량 |

## Scheduler 연동

GPU 스케줄링 시 VRAM 계산 사용:

1. job의 `resource_request.vram_class`에서 필요 VRAM 산출
2. 후보 GPU의 `available_for_scheduling_mb` 확인
3. 필요 VRAM ≤ 가용 VRAM인 GPU만 후보
4. exclusive mode면 전체 available_for_scheduling 확보 필요
5. restricted sharing이면 sharing 제한 내에서 확인

## Profiling 연동

| 데이터 | 출처 | 용도 |
|--------|------|------|
| model warm footprint | model 로드 시 측정 | warm_footprint_mb 계산 |
| job peak VRAM | JobAttempt.peak_vram_mb | spike_buffer 보정 |
| OOM 이력 | 최근 OOM 기록 | safety margin 조정 |

## Phase별 성숙도

| Phase | 접근 | 설명 |
|-------|------|------|
| Phase 1 | 보수적 고정값 | 안전 마진을 크게 잡고 고정 |
| Phase 2 | profiling 기반 | 실제 측정값으로 마진 보정 |
| Phase 3 | 동적 조정 | 실시간 메트릭으로 자동 조정 |

## v1 범위

- 보수적 고정값 기반 계산
- 6개 요소 기본 적용
- available_for_scheduling 기반 스케줄링
- peak_recent_vram 기록

## v1.5 이후

- profiling 데이터 반영
- model별 warm footprint 프로파일
- 동적 safety margin 조정

## 관련 문서

- `training_scheduler.md`, `gpu_sharing_policy.md`, `oom_detection_recovery.md`
