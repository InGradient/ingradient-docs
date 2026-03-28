# ingradient-ai Deployment

## 실행 형태

AI Platform은 단일 배포가 아니라 아래 조합을 전제로 한다.

- central managed SaaS
- dedicated customer cloud project
- customer self-hosted or on-prem
- hybrid

기본 원칙은 control plane과 execution plane 분리다.

## 권장 배포 구성

### Control Plane

대상:

- gateway
- orchestrator
- model registry
- experiment or analytics API
- ops console

권장 배포:

- stateless API는 cloud service
- metadata DB와 shared storage는 managed infra

### Execution Plane

대상:

- detection runtime
- foundation runtime
- medical runtime
- utility runtime

권장 배포:

- IDC GPU cluster 우선
- 필요 시 cloud GPU fallback
- 일부 batch training은 managed custom job 활용 가능

## 권장 인프라

- Artifact Registry
- Cloud Storage
- metadata DB
- queue or coordination store
- secret manager
- telemetry stack

## 설치 단위

### Core Modules

- gateway
- orchestrator
- metadata db
- queue
- ops console

### Optional Runtime Modules

- detection
- foundation
- medical
- utility
- provider adapters

## 환경별 차이

### Central Managed SaaS

- 중앙 운영
- 공용 ops console
- 공용 registry와 usage aggregation

### Dedicated Customer Project

- customer-owned data boundary
- 별도 IAM, billing, storage

### On-Prem

- 외부 API 차단 가능성
- storage와 registry 대체 경로 필요
- 경량 설치 profile 필요

### Hybrid

- control plane은 cloud
- 민감한 실행은 customer-side GPU
- 일부 생성형 기능은 managed provider

## 배포 검증 포인트

- gateway health
- queue enqueue / dequeue
- worker registration and heartbeat
- storage read / write
- artifact path and checksum
- representative training and inference flow

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_deployment_and_distribution_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_service_architecture.md`

