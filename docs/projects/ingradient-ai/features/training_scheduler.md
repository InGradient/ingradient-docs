# Training Scheduler

## 목적

training scheduler는 GPU를 최대한 많이 쓰는 것보다 예측 가능하고 안정적인 실행을 우선한다. 이 문서는 queue, worker pool, GPU scheduling, OOM 대응 기준을 정리한다.

## pool 구조

- `inference-pool`
- `training-pool`
- `utility-pool`

확장 시:

- `detection-infer-pool`
- `foundation-train-pool`
- `medical-infer-pool`
- `medical-train-pool`
- `utility-cpu-pool`

## job class

- `Class A`
  - 실시간/준실시간 추론
- `Class B`
  - batch 추론
- `Class C`
  - 대형 학습
- `Class D`
  - preprocessing/export/report

## GPU scheduling 판단 기준

- runtime compatibility
- worker health
- queue policy compatibility
- GPU class compatibility
- committed VRAM + safety margin
- sharing/exclusive 정책
- model locality
- 최근 OOM/에러 이력
- node imbalance 완화 여부

## VRAM 계산 원칙

- free VRAM만 보고 스케줄링하지 않는다.
- 아래 값을 함께 본다.
  - system reserve
  - runtime reserve
  - fragmentation margin
  - warm footprint
  - active job footprint
  - spike buffer

## 공유 정책

- `Exclusive`
  - 대부분 training
  - high-risk medical job
- `Restricted Sharing`
  - 검증된 가벼운 inference
- `Open Sharing`
  - 초기 버전에서는 도입하지 않음

## OOM 대응

- 동일 조건 무한 재시도 금지
- peak vram, failure code 기록
- 가능한 recipe만 downscale retry 허용
- 반복 OOM이면 worker를 `oom_recent`로 표시
- 특정 worker에서 반복되면 drain 또는 maintenance 권고

## alert 예시

- critical
  - node heartbeat lost
  - repeated OOM burst
  - queue backlog over threshold
- warning
  - restart count 급증
  - queue wait time 상승
  - locality miss rate 상승

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_scheduler_and_operations_plan.md`
