# ingradient-ai Manual Tests

- 문서명: ingradient-ai Manual Tests
- 목적: 자동화 테스트로 커버하기 어려운 수동 검증 항목을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28

## Ops Console: Overview

- [ ] Overview 진입 시 KPI row가 10초 이내에 로드되는가
- [ ] backlog 급증 시 시각적 강조가 표시되는가
- [ ] KPI 클릭 시 해당 필터가 적용된 상세 페이지로 이동하는가
- [ ] GPU/worker 요약과 queue 상태 요약이 동시에 보이는가
- [ ] recent events가 시간순으로 표시되는가

## Ops Console: Jobs

- [ ] 상태 탭 (All, Queued, Running, Failed 등) 전환이 정상인가
- [ ] 필터 조합 (runtime + model + status) 적용 후 결과가 정확한가
- [ ] Job 상세 drawer에 Attempt History, Routing, Error Trace가 모두 표시되는가
- [ ] cancel, retry, clone 액션 후 상태가 즉시 반영되는가
- [ ] running job의 progress가 실시간으로 갱신되는가

## Ops Console: Workers & GPU

- [ ] Node list에서 status, GPU count, heartbeat가 정확한가
- [ ] GPU grid에서 utilization, VRAM, health가 표시되는가
- [ ] Worker table에서 runtime, OOM count, restart count가 보이는가
- [ ] cordon, drain, restart 액션 후 상태 변화가 반영되는가
- [ ] no heartbeat node/worker가 시각적으로 강조되는가

## Ops Console: Models

- [ ] Available, Installed, Loaded 탭 전환이 정상인가
- [ ] Version history에서 current default, production, latest가 올바르게 표시되는가
- [ ] Validate Version 실행 후 validation_status가 갱신되는가
- [ ] Promote to Default 후 future job이 새 버전을 사용하는가
- [ ] Rollback 후 이전 stable 버전으로 복구되는가
- [ ] destructive action에 confirmation dialog가 표시되는가

## Ops Console: Events & Alerts

- [ ] severity 필터 (Critical, Warning, Info)가 정확한가
- [ ] acknowledge 후 status가 변경되는가
- [ ] critical alert가 상단 alert strip에 노출되는가

## Backend Routing

- [ ] selected_backend, routing_reason이 Job 상세에 표시되는가
- [ ] fallback_applied 여부가 정확한가
- [ ] `allow_external_execution=false` 설정 시 외부 backend가 선택되지 않는가
- [ ] CPU fallback 시 execution_mode가 cpu로 표시되는가

## Model Registry

- [ ] 외부 모델 upload → register → validate → promote 전체 흐름이 동작하는가
- [ ] artifact checksum 불일치 시 에러가 발생하는가
- [ ] resume_trainable 모드에서 optimizer/scheduler state 없으면 거부되는가
- [ ] lineage (previous_version, base_checkpoint, training_job) 추적이 가능한가

## Job Lifecycle

- [ ] training, inference, utility job 각각 생성 → 완료/실패 흐름이 동작하는가
- [ ] retry 시 새 JobAttempt가 생성되는가
- [ ] cancel 후 상태가 cancel_requested → cancelled로 전이하는가
- [ ] idempotency_key 중복 시 기존 job이 반환되는가

## 상태 전이

- [ ] Job: created → queued → running → succeeded 정상 흐름
- [ ] Job: running → failed → queued (retry) 흐름
- [ ] Worker: starting → healthy → busy → draining → stopped 흐름
- [ ] ModelVersion: uploaded → registered → validating → validated → ready 흐름
- [ ] 허용되지 않는 상태 전이 시 `invalid_state_transition` 에러 반환

## 환경별 검증

- [ ] Local (Docker Compose): 기본 흐름 동작
- [ ] Cloud (GKE + Cloud Run): GPU worker 연결, storage 접근
- [ ] auth-service 토큰 검증 연동
