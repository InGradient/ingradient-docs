# medilabel Operations

## 운영 목적

- 의료 데이터 업로드와 ingest를 안정적으로 유지한다
- catalog, class, viewer, segmentation 흐름을 보호한다
- auth와 ai dependency를 포함한 product flow를 운영 가능하게 한다

## 핵심 메트릭

- upload success
- ingest latency
- `pending` → `ready` 전환 성공률
- segmentation import failure
- viewer open success
- auth dependency failure

## 상태 모델

### upload session

- created
- uploading
- uploaded
- completed
- failed

### ingest job

- queued
- running
- succeeded
- failed

### data asset

- pending
- processing
- ready
- failed

## 운영상 중요한 정책

- upload와 ingest를 분리한다
- catalog row는 가능한 빨리 생성한다
- segmentation import는 user latest 결과 갱신 동작으로 본다
- anonymized variant는 원본을 대체하는 삭제가 아니라 파생 variant다

## 트러블슈팅 포인트

- file format mismatch
- class mapping invalid
- auto matching 실패
- DICOM to NIfTI 변환 지연
- project membership 또는 settings policy mismatch

## 관련 근거 문서

- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`
- `/home/june/workspace/projects/medilabel/docs/api-spec.md`
- `/home/june/workspace/projects/medilabel/docs/frontend-pages.md`

