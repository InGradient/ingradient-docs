# Artifact Storage

- 문서명: Artifact Storage
- 목적: Object storage 연동, artifact 관리, checksum 검증, immutable lineage 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../data_model.md`, `../deployment.md`

## 목적

AI Platform의 모든 모델 weight, checkpoint, 실행 결과, 입출력 데이터는 object storage에 저장되며, metadata DB에는 참조(URI, checksum)만 보관한다.

## Storage 구성

| 역할 | 기본 저장소 | On-Prem 대체 |
|------|-----------|-------------|
| 모델 artifact | GCS | S3-compatible |
| Checkpoint | GCS | S3-compatible |
| Job 입력/출력 | GCS | S3-compatible |
| Export 결과 | GCS | S3-compatible |

## Artifact 유형

| artifact_type | 설명 | 예시 |
|---------------|------|------|
| `checkpoint` | 모델 학습 checkpoint | .pt, .ckpt |
| `model_weight` | 최종 모델 weight | .pt, .onnx |
| `image` | 입력 이미지 | .png, .jpg, .dcm |
| `volume` | 3D 볼륨 데이터 | .nii, .nrrd |
| `mask` | 세그멘테이션 마스크 | .png, .npy |
| `json` | 설정, 메타데이터 | .json |
| `metrics` | 학습/추론 메트릭 | .json, .csv |
| `export` | 내보내기 결과 | .zip |
| `report` | 리포트 | .html, .pdf |

## ModelArtifact 엔티티

| 필드 | 설명 |
|------|------|
| artifact_id | PK |
| model_id, version_id | FK |
| storage_uri | object storage 경로 |
| checksum | sha256 해시 |
| size_bytes | 파일 크기 |
| artifact_type | 유형 |
| role | primary-weight, config, sidecar 등 |

## Immutability 원칙

- 한번 저장된 artifact는 수정/삭제하지 않는다
- 새 weight/checkpoint는 항상 새 ModelVersion으로 등록
- job input/output artifact reference도 immutable
- lineage 추적: artifact → version → model, artifact → job → attempt

## Checksum 검증

- 업로드 시: client가 제공한 checksum과 서버 계산 checksum 비교
- 다운로드 시: storage에서 읽은 후 checksum 재검증
- preload 시: worker가 artifact 로드 전 checksum 확인
- 불일치 시: `artifact_access_failed` 에러 + alert

## Storage URI 규칙

```
gs://{bucket}/{prefix}/{entity_type}/{entity_id}/{artifact_type}/{filename}
```

예시:
- `gs://ai-artifacts/models/mdl_yolo/versions/v1/weights/best.pt`
- `gs://ai-artifacts/jobs/job_123/outputs/export.zip`

## Credential 관리

- storage credential은 Secret Manager에 보관
- worker는 service account 또는 credential injection으로 접근
- credential rotation 지원
- credential 만료/오류 시 `storage_error` alert

## v1 범위

- GCS 기반 artifact upload/download
- checksum 검증 (upload, preload)
- ModelArtifact CRUD
- job input/output artifact reference
- immutable lineage 유지

## v1.5 이후

- S3-compatible backend 지원 (On-Prem)
- artifact lifecycle (retention, archival)
- large artifact streaming upload
- artifact deduplication

## 관련 문서

- `../data_model.md`, `../deployment.md`, `model_registry_and_byom.md`
