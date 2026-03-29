# ingradient-ai Data Model

- 문서명: ingradient-ai Data Model
- 목적: AI 서비스의 데이터 엔티티, 관계, 상태 전이를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `api_contract.md`

## 데이터 개요

AI 서비스는 model, job, execution metadata, artifact reference를 소유한다. dataset과 labeling 데이터는 platform/medilabel이 소유하며, AI는 참조만 한다.

## 핵심 엔티티

### Model

| 필드 | 설명 |
|------|------|
| model_id | PK |
| model_name | 모델 이름 |
| runtime | detection, foundation, medical, utility |
| task_type | 태스크 유형 |
| framework, adapter_type | ML 프레임워크, adapter 유형 |
| lifecycle_status | registered, verifying, ready, deprecated, disabled, error |
| default_version_id | 기본 추론 버전 포인터 |
| production_version_id | 운영 확정 버전 포인터 |
| latest_version_id | 최신 등록 버전 포인터 |

### ModelVersion

| 필드 | 설명 |
|------|------|
| version_id | PK |
| model_id | FK → Model |
| version_label | 버전 태그 |
| source_type | internal_trained, external_uploaded, foundation_pretrained, provider_managed |
| usage_mode | inference_only, fine_tunable, resume_trainable |
| lifecycle_status | uploaded, registered, validating, validated, ready, deprecated, disabled, archived, error |
| validation_status | not_requested, pending, running, passed, failed, warning |
| release_channel | none, staging, experimental |
| artifact_uri, checksum, size_bytes | artifact 정보 |
| previous_version_id, base_checkpoint_ref, training_job_id | lineage 추적 |

### Job

| 필드 | 설명 |
|------|------|
| job_id | PK |
| job_type | training, inference, utility |
| task_type, runtime, queue_name | 실행 분류 |
| status | created, queued, scheduled, preparing, running, succeeded, failed, cancel_requested, cancelled, timed_out, dead_letter |
| preferred_backend, selected_backend | backend 선호/선택 |
| execution_preference | auto, gpu, cpu |
| model_id, model_version_id, recipe_name | 모델/레시피 |
| resource_request | cpu_cores, memory_mb, gpu_count, vram_class, exclusive_mode |
| input_artifacts, output_prefix | I/O |

### JobAttempt

| 필드 | 설명 |
|------|------|
| job_id, attempt_no | 복합 PK |
| worker_id, node_id, assigned_gpu_ids | 실행 자원 |
| selected_backend, routing_reason, routing_reason_code | 라우팅 정보 |
| result_status, failure_code, failure_message | 결과 |
| peak_vram_mb, runtime_ms | 메트릭 |

### Node / GPUDevice / Worker / Queue / Backend

| 엔티티 | 핵심 필드 | 상태 |
|--------|-----------|------|
| Node | node_id, hostname, environment, total_gpu_count, last_heartbeat_at | healthy, degraded, no_heartbeat, maintenance, draining |
| GPUDevice | gpu_id, node_id, total_vram_mb, committed_vram_mb, utilization_pct, health_status | - |
| Worker | worker_id, runtime, node_id, assigned_gpu_ids, active_job_id, loaded_models | starting, healthy, idle, busy, degraded, oom_recent, draining, maintenance, stopped |
| Queue | queue_name, runtime, priority_policy, concurrency_limit, queued_count, paused | - |
| Backend | backend_id, backend_type, status, estimated_wait_ms, queued_jobs, quota_remaining | - |

### AlertEvent / UsageRecord

| 엔티티 | 핵심 필드 |
|--------|-----------|
| AlertEvent | event_id, severity, source_type, source_id, event_type, message, status (open/acknowledged/muted/resolved/escalated) |
| UsageRecord | bucket_time, scope_type, runtime, model_name, job_count, gpu_seconds, avg_wait_ms, oom_count |

### ModelArtifact

| 필드 | 설명 |
|------|------|
| artifact_id | PK |
| model_id, version_id | FK |
| storage_uri, checksum, size_bytes | artifact 파일 정보 |
| artifact_type, role | 유형, 역할 |

## 상태 전이 요약

**Job**: `created → queued → scheduled → preparing → running → succeeded`. 실패: `running → failed`, 취소: `queued/running → cancelled`, 재시도: `failed → queued`

**Worker**: `starting → healthy → idle/busy`. 예외: `busy → degraded`, `healthy → draining → maintenance`, `any → stopped`

**Model**: `registered → verifying → ready`. 예외: `verifying → error`, `ready → deprecated/disabled`

**ModelVersion**: `uploaded → registered → validating → validated → ready`. 운영 제외: `ready → disabled/archived`, 오류: `registered/validating → error`

## 엔티티 관계

```
Model ─── ModelVersion ─── ModelArtifact
              │
              └── training_job_id ──┐
                                    │
Job ──┬── JobAttempt ───────────────┘
      └── Worker ── GPUDevice ── Node
              │
              └── Queue ── Backend
```

## 저장 위치

| 데이터 | 저장소 |
|--------|--------|
| 엔티티 메타데이터 | PostgreSQL (metadata DB) |
| Artifact 파일 | Object storage (GCS / S3-compatible) |
| 실행 캐시 (preload, queue state) | Redis |

## SoT 경계

| 데이터 | SoT 서비스 | AI에서의 역할 |
|--------|------------|---------------|
| dataset, image, labeling | platform / medilabel | 참조만 (snapshot reference) |
| model, job, artifact metadata | ingradient-ai | 소유 |
| identity, membership | auth-service | 토큰 검증으로 사용 |
| artifact 파일 | ingradient-ai | 소유 (object storage) |
