# Dataset / Input Reference

- 문서명: Dataset / Input Reference
- 목적: platform/medilabel의 데이터를 AI가 참조하는 방식과 immutable lineage 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../data_model.md`, `../project_overview.md`

## 목적

AI 서비스는 dataset, image, labeling 데이터를 직접 소유하지 않는다. platform과 medilabel이 소유하는 데이터를 snapshot reference로 참조하여 학습/추론에 사용한다.

## SoT 경계

| 데이터 | SoT 서비스 | AI에서의 역할 |
|--------|------------|---------------|
| dataset, image, labeling | platform / medilabel | 참조만 (snapshot reference) |
| model, job, artifact | ingradient-ai | 소유 |

## Input Artifacts

Job 생성 시 `input_artifacts` 필드로 입력 데이터를 지정한다.

| 필드 | 설명 |
|------|------|
| artifact_id | 기존 artifact reference ID (선택) |
| storage_uri | object storage 경로 (필수) |
| artifact_type | image, volume, text, json, checkpoint, mask, embedding |
| content_type | MIME type |
| checksum | sha256 (선택) |
| size_bytes | 파일 크기 |
| role | primary-input, reference, prompt, auxiliary |

### 규칙

- 최대 100개 artifact
- `artifact_id` 또는 `storage_uri` 중 하나 이상 필수
- training job은 dataset reference (storage URI prefix) 사용
- inference job은 개별 파일 reference 사용

## Snapshot Reference 모델

### Training Job 입력

1. platform/medilabel이 dataset snapshot 생성 (특정 시점의 데이터 고정)
2. snapshot의 storage URI를 AI job의 `input_artifacts`에 전달
3. AI는 해당 URI의 데이터를 읽기 전용으로 사용
4. snapshot은 immutable — 학습 중 데이터 변경 불가

### Inference Job 입력

1. 개별 이미지/볼륨의 storage URI를 전달
2. 또는 platform이 batch 입력 목록을 제공

## Immutable Lineage

- job에 사용된 input_artifacts는 변경/삭제 불가
- job 결과와 입력 데이터의 관계를 추적 가능해야 함
- lineage: input_artifacts → job → attempt → output_artifacts → model_version

## Output Reference

Job 결과도 immutable artifact reference로 저장:

- `output_prefix`: 결과 저장 경로 (예: `gs://bucket/jobs/job_123/outputs/`)
- 결과 artifact는 `persist_outputs`에서 생성
- output artifact는 다른 job의 input으로 재사용 가능

## 의존 서비스 인터페이스

| 서비스 | AI가 필요한 것 |
|--------|---------------|
| platform | dataset snapshot URI, 프로젝트별 데이터 경로 |
| medilabel | 의료 데이터 snapshot URI |
| auth-service | storage 접근 권한 확인 |

## v1 범위

- input_artifacts 필드 처리 (storage_uri 기반)
- snapshot reference 읽기 전용 접근
- output_prefix 기반 결과 저장
- immutable lineage 기본 추적

## v1.5 이후

- dataset snapshot 자동 생성 요청 API
- input validation (접근 가능성 사전 검증)
- 대용량 dataset streaming

## 관련 문서

- `../data_model.md`, `../project_overview.md`, `artifact_storage.md`, `job_lifecycle.md`
