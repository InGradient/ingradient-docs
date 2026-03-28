# ingradient-ai Data Model

- 문서명: ingradient-ai Data Model
- 목적: AI 서비스의 데이터 엔티티와 관계를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `api_contract.md`

## 데이터 개요

AI 서비스는 model, job, execution metadata, artifact reference를 소유한다. dataset과 labeling 데이터는 platform 또는 medilabel이 소유하며, AI는 참조만 한다.

## 핵심 엔티티

### Model

모델 레지스트리의 최상위 단위.

| 필드 | 설명 |
|------|------|
| model_id | PK |
| name | 모델 이름 |
| task_type | 태스크 유형 (detection, classification, segmentation 등) |
| source_type | internal_trained, external_uploaded, pretrained |
| usage_mode | inference_only, fine_tunable, resume_trainable |
| owner_id | 소유자 |
| project_id | 소속 프로젝트 |
| status | 상태 |
| created_at | 생성 시각 |

### ModelVersion

모델의 특정 버전. artifact와 연결된다.

| 필드 | 설명 |
|------|------|
| version_id | PK |
| model_id | FK → Model |
| version_tag | 버전 태그 (v1, v2 등) |
| stage | dev, staging, production, archived |
| artifact_path | artifact 저장 경로 (object storage) |
| artifact_checksum | artifact 무결성 검증용 |
| metrics_summary | 주요 메트릭 요약 (JSON) |
| training_job_id | FK → Job (학습으로 생성된 경우) |
| created_at | 생성 시각 |

### Job

모든 실행의 공통 단위 (training, inference, utility).

| 필드 | 설명 |
|------|------|
| job_id | PK |
| job_type | training, inference, utility |
| task_type | detection, classification, segmentation 등 |
| runtime | 실행 런타임 (detection, foundation, medical, utility) |
| queue_name | 대기열 이름 |
| status | pending, queued, running, completed, failed, cancelled |
| preferred_backend | 요청자가 지정한 선호 backend |
| selected_backend | 실제 선택된 backend |
| execution_preference | gpu_preferred, cpu_allowed, gpu_required 등 |
| fallback_policy | retry_same, try_next, fail_fast |
| model_id | FK → Model |
| model_version_id | FK → ModelVersion |
| recipe_name | 실행 레시피 |
| input_refs | 입력 데이터 참조 (snapshot, dataset 등) |
| config | 실행 설정 (JSON) |
| created_at, started_at, finished_at | 시각 정보 |
| created_by | 요청자 |
| project_id | 소속 프로젝트 |

### JobAttempt

한 Job의 각 실행 시도.

| 필드 | 설명 |
|------|------|
| attempt_id | PK |
| job_id | FK → Job |
| attempt_no | 시도 번호 |
| worker_id | 실행 worker |
| node_id | 실행 노드 |
| assigned_gpu_ids | 할당된 GPU 목록 |
| selected_backend | 이 시도의 backend |
| selected_accelerator | GPU 모델 |
| routing_reason | 라우팅 결정 사유 |
| status | running, completed, failed |
| failure_code | 실패 시 에러 코드 |
| started_at, finished_at | 시각 정보 |

### ArtifactReference

실행 결과로 생성된 산출물 참조.

| 필드 | 설명 |
|------|------|
| artifact_id | PK |
| job_id | FK → Job |
| attempt_no | 시도 번호 |
| artifact_type | model_checkpoint, metrics, logs, export, report |
| storage_path | object storage 경로 |
| checksum | 무결성 검증 |
| size_bytes | 파일 크기 |
| created_at | 생성 시각 |

### ExecutionTarget

실행 가능한 backend/worker 정보.

| 필드 | 설명 |
|------|------|
| target_id | PK |
| backend_type | self_hosted, gke_gpu, gke_cpu, vertex_training, managed_batch 등 |
| node_id | 노드 식별자 |
| gpu_ids | 사용 가능한 GPU 목록 |
| gpu_model | GPU 모델 (예: A100, T4) |
| vram_mb | GPU 메모리 |
| status | available, busy, draining, offline |
| last_heartbeat | 마지막 heartbeat 시각 |

### MetricsLog

학습/추론 중 기록되는 메트릭.

| 필드 | 설명 |
|------|------|
| log_id | PK |
| job_id | FK → Job |
| attempt_no | 시도 번호 |
| epoch / step | 학습 진행 위치 |
| metric_name | 메트릭 이름 (loss, accuracy, mAP 등) |
| metric_value | 값 |
| created_at | 기록 시각 |

## 엔티티 관계

```
Model ─── ModelVersion ─── ArtifactReference
              │
              └── training_job_id ──┐
                                    │
Job ──┬── JobAttempt ───────────────┘
      │       │
      │       └── ArtifactReference
      │
      └── ExecutionTarget (routing)

Job ── MetricsLog
```

## 저장 위치

| 데이터 | 저장소 |
|--------|--------|
| 엔티티 메타데이터 (model, job, attempt 등) | AI metadata DB |
| Artifact 파일 (checkpoint, logs, export) | Object storage |
| 실행 캐시 (model preload, queue state) | Cache (Redis 등) |

## SoT 경계

| 데이터 | SoT 서비스 | AI에서의 역할 |
|--------|------------|---------------|
| dataset, image, labeling | platform / medilabel | 참조만 (snapshot reference) |
| model, job, artifact metadata | ingradient-ai | 소유 |
| identity, membership | auth-service | 토큰 검증으로 사용 |
| artifact 파일 | ingradient-ai | 소유 (object storage에 저장) |

## 주의사항

- dataset ownership은 platform 또는 medilabel에 있다. AI는 snapshot reference로만 접근한다
- artifact reference는 immutable input/output lineage를 유지해야 한다
- job과 attempt는 분리되어 있으므로 retry 시 새 attempt가 생성된다
