# ingradient-ai Architecture

## 내부 구조 개요

`ingradient-ai`는 하나의 단일 worker가 아니라 아래 계층으로 나뉜다.

- gateway
- orchestrator
- backend routing layer
- model registry
- experiment or analytics module
- worker runtimes
- provider adapters
- telemetry pipeline
- ops console

## 핵심 서비스 책임

### gateway

- 외부 job request intake
- schema validation
- auth / authz 연계
- idempotency key 처리
- 초기 job record 생성

### orchestrator

- job lifecycle state machine
- queue coordination
- scheduler policy
- retry policy
- event 발행

### model registry

- model / version 메타
- artifact location와 checksum
- lineage와 stage 관리
- internal trained, external uploaded, pretrained source 구분

### backend routing layer

- preferred backend 해석
- candidate backend 계산
- fallback / overflow 정책 적용
- routing reason 기록

### worker runtimes

- detection
- foundation
- medical
- utility

## 실행 흐름

### inference

1. gateway가 request를 받는다
2. job이 생성된다
3. orchestrator가 routing 정책을 적용한다
4. worker 또는 external backend가 실행한다
5. 결과 artifact와 status가 저장된다

### training

1. training request가 접수된다
2. training pool로 queue된다
3. dataset reference, config, checkpoint를 확인한다
4. 장시간 heartbeat, progress, checkpoint를 남긴다
5. 최종 model version과 metrics를 registry에 반영한다

### utility

1. preprocessing, export, report 같은 job이 생성된다
2. CPU 또는 GPU 필요 여부에 따라 queue가 분기된다
3. 결과 artifact가 downstream에서 다시 참조된다

## runtime contract

모든 runtime은 최소한 아래를 만족해야 한다.

- `can_accept(job)`
- `prepare_model(model_ref)`
- `prepare_inputs(artifact_refs)`
- `execute(job_context)`
- `collect_metrics(run_context)`
- `persist_outputs(result)`
- `cleanup(job_context)`

## 확장 포인트

- provider 수 증가 시 routing layer 분리
- experiment API 분리
- usage analytics와 quota enforcement 강화
- ops console을 운영 action 중심으로 확장

