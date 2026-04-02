# Deployment Architecture

- 문서명: Deployment Architecture
- 목적: 환경별 실제 배포 구조와 설치 방식의 기준을 정의한다.
- 적용 범위: cloud, dedicated customer project, on-prem, hybrid, edge
- 상태: Draft
- Owner: Infra / Platform Architecture
- Reviewer: AI / Edge / Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `system_overview.md`, `environment_strategy.md`, `../ai/execution_routing_policy.md`

## 1. 배포 전략이 중요한 이유

INGRADIENT ecosystem은 단일 cloud web app처럼 배포되지 않는다.

- 공통 SaaS 형태로 운영할 수 있어야 한다.
- 고객사 전용 cloud project에 분리 배포할 수 있어야 한다.
- 일부 고객은 온프레미스 또는 폐쇄망 설치를 요구할 수 있다.
- AI는 self-hosted worker와 managed provider를 동시에 수용해야 한다.
- edge는 설치형 앱으로 별도 배포되고 cloud와 느슨하게 연결된다.

따라서 배포 단위는 repo가 아니라 runtime 역할과 설치 profile 기준으로 설계해야 한다.

## 2. 배포 기본 원칙

- control plane과 execution plane을 분리한다.
- 공통 정책은 유지하되 install manifest나 environment profile로 구성을 바꾼다.
- self-hosted runtime, managed API, external provider를 같은 job 모델에 수용한다.
- 고객사별 data boundary, secret boundary, billing boundary를 분리 가능해야 한다.
- edge는 cloud dependency가 약해도 핵심 기능을 유지할 수 있어야 한다.
- 사용자는 적지만 데이터는 큰 서비스는 정적 프론트와 API를 분리해 비용을 낮추는 패턴을 우선 검토한다.

## 3. 배포 대상 분류

### 3.1 Central Managed SaaS

특징:

- 우리 조직이 중앙 운영
- 공용 auth, 공용 ops console, 공용 AI control plane
- tenant or project 단위 quota와 billing 추적 필요

적합:

- 내부 통합 운영
- 여러 팀이 공통 플랫폼을 공유하는 경우

### 3.2 Dedicated Customer Project on Cloud

특징:

- 고객사별 별도 project 또는 VPC
- 데이터와 로그를 고객 환경에 남길 수 있음
- customer-managed services와 연계 가능

적합:

- 강한 격리 요구
- 과금과 IAM 분리가 필요한 경우

### 3.3 Customer Self-Hosted or On-Prem

특징:

- 외부 API 차단 가능
- storage, queue, registry에 대체 경로 필요
- control plane 일부를 경량 설치로 제공해야 함

적합:

- 의료, 제조, 국방 등 폐쇄망 환경

### 3.4 Hybrid

특징:

- control plane은 cloud
- 일부 runtime은 고객사 내부 GPU
- 일부 생성형 AI는 managed provider API 사용

적합:

- 민감 데이터는 내부 처리하고 나머지는 관리형 서비스 활용이 필요한 경우

## 4. 권장 배포 구조

비용 최적화가 중요한 small-user / large-data 서비스 패턴은 `small_user_large_data_gcp_pattern.md`를 함께 참고한다.

### 4.1 Cloud Application Layer

대상:

- auth-service
- platform
- medilabel
- ai gateway, orchestrator, model registry, ops console

권장 자원:

- stateless API / web: Cloud Run 또는 일반 compute
- metadata DB: managed relational DB
- shared object storage
- secret manager

### 4.2 AI Execution Layer

대상:

- detection / foundation / medical / utility worker
- GPU runtime
- batch processor

권장 자원:

- IDC GPU cluster 우선
- 필요 시 cloud GPU node pool
- 일부 batch training은 managed custom job

### 4.3 Edge Layer

대상:

- installer
- local runtime
- local storage
- camera / device SDK

권장 자원:

- GitHub Releases 또는 installer distribution
- local filesystem / embedded DB

## 5. GCP 기준 권장 구성

### Control Plane

- gateway
- orchestrator
- model registry
- experiment or analytics API
- ops console backend / frontend

권장:

- Cloud Run 또는 일반 CPU node pool

### Execution Plane

- GPU worker
- CPU utility worker
- batch training runtime

권장:

- GKE GPU node pool
- GKE CPU node pool
- 필요 시 managed training jobs

### Shared Services

- Artifact Registry
- Cloud Storage
- Cloud SQL
- Redis or queue coordination
- Cloud Logging / Monitoring
- Secret Manager

## 6. AI 실행 백엔드 선택 기준

### Self-Hosted Worker

적합:

- low-latency inference
- warm model reuse가 중요한 경우
- custom pre / post processing이 복잡한 경우

### Managed Training Job

적합:

- 장시간 학습
- batch성 실험
- 고객 project 내 분리 실행이 필요한 경우

### Managed Endpoint

적합:

- 표준화 가능한 online inference
- 운영자가 직접 scaling을 덜 관리하고 싶은 경우

### External API Provider

적합:

- LLM, 이미지 생성, embedding처럼 API 소비가 더 합리적인 경우
- 다만 데이터 반출 정책이 허용돼야 한다

## 7. 설치 단위 원칙

### Core Modules

- gateway
- orchestrator
- metadata DB
- queue
- ops console

### Optional Runtime Modules

- detection runtime
- foundation runtime
- medical runtime
- utility runtime
- llm or provider adapter

### Optional Integration Modules

- external provider adapters
- customer-specific storage adapter
- edge sync adapter

원칙:

- 코드 fork 대신 install profile로 조합한다.
- 고객별 차이는 config와 module enablement로 흡수한다.

## 8. 저장소와 네트워크 배치

- 서비스 DB는 서비스별로 분리한다.
- object storage는 raw data, snapshot, artifact, export package 저장소로 사용한다.
- edge는 sync 전까지 로컬 저장소를 사용한다.
- AI worker는 가능하면 reference 기반 접근을 사용하고 장기 데이터는 로컬에 중복 저장하지 않는다.

## 9. 배포 시 주의사항

- mutable runtime data는 code deploy와 분리한다.
- destructive migration은 backup 확인 후 진행한다.
- 고객 환경 secret과 issuer / audience는 deployment boundary와 함께 관리한다.
- edge installer upgrade는 local DB migration과 backward compatibility를 확인한다.

## 10. 검증 포인트

- health checks
- auth and service-to-service credential 확인
- storage read / write 확인
- queue enqueue / dequeue 확인
- worker registration / heartbeat 확인
- representative user flow 확인

