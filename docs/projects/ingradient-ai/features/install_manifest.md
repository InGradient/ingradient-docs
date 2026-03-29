# Install Manifest

- 문서명: Install Manifest
- 목적: 배포 profile별 모듈 선택, schema versioning, 설치 구성을 정의한다.
- 상태: Draft
- Owner: AI / DevOps
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../deployment.md`

## 목적

AI Platform은 단일 구성이 아니라 환경별로 runtime, provider, feature를 선택적으로 포함하는 모듈형 설치를 지원한다. Install manifest가 이 구성을 정의한다.

## Manifest 구조

```yaml
apiVersion: ingradient-ai/v1alpha1
kind: InstallManifest
metadata:
  name: customer-a-production
  environment: dedicated
  region: asia-northeast3

core:
  gateway: enabled
  orchestrator: enabled
  model_registry: enabled
  ops_console: enabled
  metadata_db: cloud_sql
  queue: memorystore_redis
  storage: gcs

runtimes:
  detection: enabled
  foundation: disabled
  medical: disabled
  utility: enabled

providers:
  vertex_custom_job: disabled
  vertex_batch_prediction: disabled
  vertex_endpoint: disabled

features:
  usage_analytics: enabled
  advanced_scheduling: disabled
  experiment_tracking: disabled
```

## 모듈 분류

### Core Modules (필수)

gateway, orchestrator, metadata DB, queue, ops console

### Optional Runtime Modules

| 모듈 | 설명 |
|------|------|
| detection | YOLO, LTDETR runtime |
| foundation | DINOv3, embedding runtime |
| medical | MedSAM, nnU-Net runtime |
| utility | preprocessing, export runtime |

### Optional Provider Connectors

| 모듈 | 설명 |
|------|------|
| vertex_custom_job | Vertex AI training offload |
| vertex_batch_prediction | Vertex AI batch inference |
| vertex_endpoint | Vertex AI online serving |

### Optional Feature Packs

| 모듈 | 설명 |
|------|------|
| usage_analytics | 사용량 집계, 차트 |
| advanced_scheduling | profiling 기반 스케줄링 |
| experiment_tracking | 실험 관리 |

## 환경별 기본 Profile

| Profile | Core | Runtimes | Providers | Features |
|---------|------|----------|-----------|----------|
| Local Dev | all | utility | none | none |
| SaaS Standard | all | detection, utility | optional | analytics |
| Customer Dedicated | all | 선택 | 정책별 | 선택 |
| On-Prem Minimal | all | 선택 | 차단 | minimal |

## Schema Versioning

| 버전 | 단계 | 설명 |
|------|------|------|
| v1alpha1 | 초기 | 구조 실험, breaking change 가능 |
| v1beta1 | 안정화 | 주요 구조 확정, 소소한 변경 가능 |
| v1 | 확정 | backward compatible 보장 |

## Backward Compatibility 규칙

- 필드 추가: 항상 허용 (default 값 필수)
- 필드 삭제: deprecated 단계 거쳐야 함
- 필드 의미 변경: 새 필드로 대체
- 이전 버전 manifest는 최소 2 버전 동안 지원

## v1 범위

- v1alpha1 schema 정의
- core + utility runtime 기본 manifest
- Local Dev, SaaS Standard profile

## v1.5 이후

- v1beta1 schema
- customer-specific manifest 생성 도구
- manifest validation CLI
- runtime/provider 동적 활성화

## 관련 문서

- `../deployment.md`, `multi_environment_config.md`
