# Multi-Environment Config

- 문서명: Multi-Environment Config
- 목적: Local, On-Prem, Cloud 환경별 설정 분기와 인프라 차이를 정의한다.
- 상태: Draft
- Owner: AI / DevOps
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../deployment.md`, `../operations.md`

## 목적

AI Platform은 Local(개발), On-Prem(고객 IDC), Cloud(GCP) 등 다양한 환경에서 동작한다. 환경별로 인프라, 설정, 운영 정책이 달라지는 부분을 관리한다.

## 환경 유형

| 환경 | 용도 | 특징 |
|------|------|------|
| Local | 개발/테스트 | Docker Compose, 단일 머신 |
| Cloud SaaS | 중앙 운영 | GKE + Cloud Run + GCS |
| Cloud Dedicated | 고객 전용 | 고객 GCP 프로젝트, 별도 IAM |
| On-Prem | 고객 IDC | 외부 접근 제한, S3-compatible |
| Hybrid | 혼합 | control plane은 cloud, 실행은 customer GPU |

## 환경별 인프라 매핑

| 구성 요소 | Local | Cloud | On-Prem |
|-----------|-------|-------|---------|
| Control Plane | Docker Compose | Cloud Run | K8s / VM |
| GPU Workers | Docker (CPU 시뮬) | GKE GPU | IDC GPU |
| Metadata DB | Docker PostgreSQL | Cloud SQL | self-hosted PostgreSQL |
| Queue | Docker Redis | Memorystore | self-hosted Redis |
| Object Storage | Local filesystem / MinIO | GCS | S3-compatible (MinIO) |
| Secret | .env file | Secret Manager | Vault / env |
| Telemetry | stdout | Cloud Logging | ELK / 자체 |

## 환경 변수 관리

### 공통 (모든 환경)

- `DATABASE_URL` — PostgreSQL 연결
- `REDIS_URL` — Redis 연결
- `STORAGE_BACKEND` — gcs / s3 / local
- `STORAGE_BUCKET` — bucket/경로
- `AUTH_SERVICE_URL` — auth-service 주소

### Cloud 전용

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `SECRET_MANAGER_PREFIX`

### On-Prem 전용

- `S3_ENDPOINT` — S3-compatible endpoint
- `S3_ACCESS_KEY`, `S3_SECRET_KEY`
- `VAULT_ADDR` — Vault 주소 (선택)

## 환경별 운영 차이

| 항목 | Local | On-Prem | Cloud |
|------|-------|---------|-------|
| Alert 강도 | 약하게 (개발 편의) | 기본 | 기본 + SLA |
| 수동 복구 | 개발 편의 | 문서화 중요 | 자동화 우선 |
| 핵심 지표 | 기능 검증 | storage fallback | 비용 + autoscaling |
| External provider | 차단 | 차단 가능 | 허용 |
| GPU 노드 | 미사용/CPU 시뮬 | IDC GPU | GKE GPU |

## 설정 파일 구조

```
config/
├── default.yaml        # 공통 기본값
├── local.yaml          # Local 오버라이드
├── cloud.yaml          # Cloud 오버라이드
├── cloud-dedicated.yaml # Dedicated 오버라이드
├── onprem.yaml         # On-Prem 오버라이드
└── hybrid.yaml         # Hybrid 오버라이드
```

로드 순서: `default.yaml` → `{environment}.yaml` → 환경 변수 → DB dynamic policy

## v1 범위

- Local + Cloud SaaS 환경 지원
- Docker Compose (local), Terraform + Helm (cloud)
- 환경 변수 기반 설정 분기

## v1.5 이후

- On-Prem 경량 설치 profile
- Dedicated customer 환경 자동화
- Hybrid 환경 지원
- install manifest 연동

## 관련 문서

- `../deployment.md`, `../operations.md`, `install_manifest.md`
