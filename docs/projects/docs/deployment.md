# ingradient-ai Deployment

- 문서명: ingradient-ai Deployment
- 목적: AI Platform의 배포 환경, 인프라 구성, 패키징 전략, 환경별 차이를 정의한다.
- 상태: Draft
- Owner: AI / DevOps
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`

## 실행 형태

AI Platform은 control plane과 execution plane을 분리하여 아래 조합으로 배포한다.

| 배포 모드 | 설명 |
|-----------|------|
| Central Managed SaaS | 중앙 운영, 공용 ops console |
| Dedicated Customer Cloud | 고객 소유 data boundary, 별도 IAM/billing |
| Customer Self-Hosted / On-Prem | 외부 API 차단 가능, 경량 설치 profile |
| Hybrid | control plane은 cloud, 민감 실행은 customer-side GPU |

## GCP 기준 아키텍처

| 역할 | GCP 서비스 | 용도 |
|------|-----------|------|
| Container Registry | Artifact Registry | 서비스/worker 이미지 |
| Object Storage | Cloud Storage (GCS) | 모델 artifact, checkpoint, export |
| Metadata DB | Cloud SQL (PostgreSQL) | 엔티티 메타데이터, 상태, audit |
| Queue / Coordination | Memorystore (Redis) | job queue, priority, retry, coordination |
| Control Plane | Cloud Run | gateway, orchestrator, model-registry, ops-console |
| GPU Workers | GKE GPU Node Pool | detection, foundation, medical runtime |
| CPU Workers | GKE CPU Node Pool | utility, CPU inference |
| Secret | Secret Manager | provider API key, DB credential |
| Telemetry | Cloud Logging / Monitoring | infra 수준 로그, 메트릭 |

On-Prem 대체: GCS → S3-compatible, Cloud SQL → self-hosted PostgreSQL, Memorystore → self-hosted Redis

## 기술 스택 (v1 고정)

- Metadata DB: PostgreSQL
- Queue: Redis
- Object Storage: GCS (primary), S3-compatible (fallback)
- Realtime: SSE (v1), WebSocket (v1.5+)
- Telemetry: OpenTelemetry-compatible
- UI Data: REST snapshot + SSE patch
- Deployment: Terraform (infra), Helm/Kustomize (app), Docker Compose (local)

## Control Plane 서비스

| 서비스 | 배포 대상 | 역할 |
|--------|-----------|------|
| gateway | Cloud Run | API 진입점, validation, routing |
| orchestrator | Cloud Run | job lifecycle, state transition |
| model-registry | Cloud Run | model/version 관리 |
| experiment-api | Cloud Run | 실험/분석 API |
| ops-console | Cloud Run | 운영 콘솔 UI + BFF |

## Execution Plane 서비스

| 서비스 | 배포 대상 | 역할 |
|--------|-----------|------|
| detection-runtime | GKE GPU | YOLO, LTDETR 실행 |
| foundation-runtime | GKE GPU | DINOv3, embedding |
| medical-runtime | GKE GPU | MedSAM, nnU-Net |
| utility-runtime | GKE CPU/GPU | preprocessing, export |

## 설치 단위

### Core Modules (필수)

gateway, orchestrator, metadata DB, queue, ops console

### Optional Runtime Modules

detection, foundation, medical, utility, provider adapters

### Optional Feature Packs

usage analytics, advanced scheduling, experiment tracking

## 패키징 전략

| 패키징 | 도구 | 대상 |
|--------|------|------|
| Container Image | Docker | 모든 서비스/worker |
| App Deployment | Helm / Kustomize | Kubernetes 환경 |
| Infra Provisioning | Terraform | GCP 리소스 |
| Local Dev | Docker Compose | 개발/테스트 |

## 환경별 차이

| 항목 | Central SaaS | Dedicated | On-Prem | Hybrid |
|------|-------------|-----------|---------|--------|
| Control Plane | Cloud Run | Cloud Run (고객 GCP) | K8s / VM | Cloud Run |
| Execution | GKE GPU | GKE GPU (고객 GCP) | IDC GPU | IDC GPU |
| Storage | GCS | GCS (고객 bucket) | S3-compatible | GCS + local |
| External Provider | 허용 | 정책별 | 차단 가능 | 선택적 |
| Secret | Secret Manager | Secret Manager | Vault / env | 혼합 |

## 배포 검증 포인트

- [ ] gateway health check
- [ ] queue enqueue / dequeue 정상
- [ ] worker registration + heartbeat
- [ ] storage read / write
- [ ] artifact path + checksum 검증
- [ ] representative training + inference flow 실행
