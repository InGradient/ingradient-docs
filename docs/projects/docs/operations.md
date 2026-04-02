# ingradient-ai Operations

- 문서명: ingradient-ai Operations
- 목적: AI Platform의 운영 메트릭, alert threshold, runbook, KPI를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `features/training_scheduler.md`

## 운영 목적

- job 처리량과 안정성을 유지한다
- queue 적체와 worker 이상을 빠르게 파악한다
- GPU 자원을 예측 가능하게 운영한다
- 비용과 성능을 함께 본다

## 운영 원칙

- 최대 활용보다 예측 가능한 안정성 우선
- training과 inference 분리
- backend selection과 worker admission control 분리
- CPU 실행은 명시적으로 허용된 recipe에만 허용
- 운영 조치와 runbook이 같은 상태 모델을 공유

## 핵심 메트릭

### Queue / Job

queue wait time, queued/running count, job success rate, retry rate, cancel rate

### Worker / GPU

GPU utilization, committed/reserved VRAM, worker restart count, recent OOM, node heartbeat

### Model / Backend

model load failure, preload miss/eviction, backend saturation, fallback ratio

## Alert Threshold 테이블

| Signal | Scope | Warning | Critical | Action |
|--------|-------|---------|----------|--------|
| queue wait time | realtime queue | 5초 | 15초 | worker 증설 / backlog 조사 |
| queue wait time | interactive queue | 30초 | 120초 | preload / worker 확인 |
| queue wait time | batch queue | 300초 | 1800초 | overflow / batch backend 검토 |
| no heartbeat | worker | 15초 | 45초 | drain / restart |
| no heartbeat | node | 30초 | 90초 | maintenance / host 확인 |
| repeated OOM | worker | 15분 내 2회 | 30분 내 3회 | drain, profile 재평가 |
| worker restart | worker | 30분 내 3회 | 30분 내 5회 | crash loop 조사 |
| backend saturation | backend | 10분 avg 85% | 10분 avg 95% | overflow / 증설 |
| GPU temperature | GPU | 80°C | 85°C | cooling / scheduling 완화 |
| preload eviction | loaded model | 60분 미사용+pressure | 180분 미사용+pressure | unload 후보 |
| locality miss rate | queue/runtime | 20% | 40% | preload / placement 검토 |
| storage error | storage path | 5분 내 3회 | 5분 내 10회 | artifact path / credential 점검 |

원칙: Critical은 alert 생성 + 운영자 확인 필수. Warning은 추세 감시 + 선제 조치.

## 운영 액션

cancel, retry, reprioritize, requeue, preload/unload, drain worker, cordon node, maintenance mark

## Runbook

### 1. Queue Backlog 대응

1. queue detail에서 backlog 원인 확인
2. active worker 수와 model locality 상태 확인
3. pause/throttle/concurrency limit 확인
4. worker 증설 또는 drain 해제

### 2. Worker 이상 대응

1. heartbeat 확인
2. 최근 error/OOM/restart 이력 확인
3. active job 유무 확인
4. drain 후 재시작 또는 maintenance 전환

### 3. Model Preload 실패 대응

1. artifact checksum + storage 접근 확인
2. 디스크 여유 공간 확인
3. runtime/version compatibility 확인
4. 다른 worker에서 재현 여부 확인

### 4. 반복 실패 Job 대응

1. job attempt history 확인
2. error trace + failure code 확인
3. recipe/profile mismatch 점검
4. clone with override가 나은지 판단

### 5. Backend Overflow 대응

1. backend summary에서 saturated backend 확인
2. queue가 realtime인지 batch인지 확인
3. overflow rule scope 확인
4. external execution 금지면 self-hosted 증설 우선
5. 필요 시 vertex fallback 수동/정책 활성화

## KPI

### 안정성

success rate, failure rate, repeated OOM rate, no-heartbeat incidents

### 효율성

avg GPU/CPU utilization, idle GPU ratio, CPU vs GPU execution ratio, model reload count, avg queue wait

### 운영 반응성

alert acknowledge time, failure triage time, backlog recovery time

## 환경별 운영 차이

| 항목 | Local | On-Prem | Cloud |
|------|-------|---------|-------|
| Alert 강도 | 약하게 | 기본 | 기본 + SLA |
| 수동 복구 | 개발 편의 | 문서화 중요 | 자동화 우선 |
| 핵심 지표 | 기능 검증 | storage fallback | 비용 + autoscaling |

## 로그와 관측

- control plane logs (gateway, orchestrator, model-registry)
- execution worker logs (runtime별)
- job attempt history
- runtime metrics (GPU utilization, VRAM, temperature)
- alert events
- usage trend summary
