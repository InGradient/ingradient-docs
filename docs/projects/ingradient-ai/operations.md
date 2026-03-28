# ingradient-ai Operations

## 운영 목적

- job 처리량과 안정성을 유지한다
- queue 적체와 worker 이상을 빠르게 파악한다
- GPU 자원을 예측 가능하게 운영한다
- 비용과 성능을 함께 본다

## 운영 원칙

- 최대 활용보다 예측 가능한 안정성을 우선한다
- training과 inference를 분리한다
- backend selection과 worker admission control을 분리한다
- CPU 실행은 명시적으로 허용된 recipe에만 연다
- 운영 조치와 runbook이 같은 상태 모델을 공유해야 한다

## 핵심 메트릭

### queue and job

- queue wait time
- queued / running count
- job success rate
- retry rate
- cancel rate

### worker and gpu

- GPU utilization
- committed / reserved VRAM
- worker restart count
- recent OOM
- node heartbeat

### model and backend

- model load failure
- preload miss or eviction
- backend saturation
- fallback ratio

## 경고와 임계치 예시

- realtime queue wait time 상승
- no heartbeat node or worker
- repeated OOM burst
- model load failure on production default model
- storage access error burst

## 운영 액션

- cancel
- retry
- reprioritize
- requeue
- preload / unload
- drain worker
- cordon node
- maintenance mark

## 대표 runbook 방향

### queue backlog 대응

1. queue detail에서 backlog 원인 확인
2. active worker 수 확인
3. model locality와 preload 상태 확인
4. concurrency limit 또는 worker 상태 점검

### worker 이상 대응

1. heartbeat 확인
2. recent restart / OOM 이력 확인
3. active job 유무 확인
4. drain 후 재시작 또는 maintenance 전환

### model preload 실패 대응

1. artifact checksum 확인
2. storage credential 확인
3. runtime compatibility 확인

## 로그와 관측

- control plane logs
- execution worker logs
- job attempt history
- runtime metrics
- alert events
- usage trend summary

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_scheduler_and_operations_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_plan.md`

