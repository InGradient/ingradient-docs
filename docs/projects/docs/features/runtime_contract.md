# Runtime Contract

- 문서명: Runtime Contract
- 목적: 모든 worker runtime이 구현해야 하는 공통 인터페이스를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../architecture.md`

## 목적

detection, foundation, medical, utility 등 모든 runtime이 동일한 인터페이스를 구현하여, orchestrator와 scheduler가 runtime에 무관하게 job을 관리할 수 있게 한다.

## 필수 인터페이스

모든 runtime은 아래 7개 메서드를 구현해야 한다.

### 1. `can_accept(job) → boolean`

- 이 worker가 해당 job을 실행할 수 있는지 판단
- runtime compatibility, 현재 부하, loaded model 상태 확인
- scheduler가 worker 후보 선택 시 호출

### 2. `prepare_model(model_ref) → status`

- 모델을 메모리에 로드 (preload)
- artifact 다운로드, checksum 검증, 메모리 적재
- 이미 로드된 모델이면 skip

### 3. `prepare_inputs(artifact_refs) → prepared_inputs`

- 입력 데이터를 실행 가능한 형태로 준비
- storage에서 다운로드, 전처리, 형식 변환

### 4. `execute(job_context) → result`

- 실제 학습 또는 추론 실행
- job_context에는 model, inputs, config, resource 정보 포함
- 장시간 실행 시 heartbeat와 progress 보고

### 5. `collect_metrics(run_context) → metrics`

- 실행 중/후 메트릭 수집
- GPU utilization, VRAM usage, latency, loss, accuracy 등
- metrics는 job attempt에 기록

### 6. `persist_outputs(result) → artifact_refs`

- 실행 결과를 object storage에 저장
- checkpoint, export, report, metrics 등
- immutable artifact reference 반환

### 7. `cleanup(job_context) → void`

- 실행 후 리소스 정리
- 임시 파일 삭제, GPU 메모리 해제
- 다음 job 수용 준비

## Worker 상태

Worker는 아래 상태를 가진다.

| 상태 | 설명 |
|------|------|
| `starting` | 초기화 중 |
| `healthy` | 정상 대기 |
| `idle` | job 없이 대기 |
| `busy` | job 실행 중 |
| `degraded` | 일부 이상 |
| `oom_recent` | 최근 OOM 발생 |
| `draining` | 신규 job 중단, 기존 완료 대기 |
| `maintenance` | 점검 중 |
| `stopped` | 종료됨 |

## Heartbeat

- worker는 주기적으로 heartbeat 전송 (권장 5-10초)
- heartbeat에 포함: worker_id, status, active_job_id, loaded_models, GPU metrics
- heartbeat 미수신 시 no_heartbeat → drain/restart 대상

## 실행 흐름

```
scheduler → can_accept() → prepare_model() → prepare_inputs()
         → execute() → collect_metrics() → persist_outputs()
         → cleanup() → idle/next job
```

## Runtime별 구현

| Runtime | 주요 프레임워크 | v1 범위 |
|---------|----------------|---------|
| detection | Ultralytics, LTDETR | v1 (Phase 3) |
| foundation | DINOv3, timm | v2 (Phase 5) |
| medical | MedSAM, nnU-Net | v2 (Phase 5) |
| utility | 범용 preprocessing | v1 (Phase 1) |

## v1 범위

- 7개 메서드 인터페이스 정의
- worker 상태 관리 (9상태)
- heartbeat 프로토콜
- utility runtime 최초 구현

## 관련 문서

- `../architecture.md`, `utility_runtime.md`, `detection_runtime.md`
