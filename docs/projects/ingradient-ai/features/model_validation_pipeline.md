# Model Validation Pipeline

- 문서명: Model Validation Pipeline
- 목적: 모델 등록 시 수행하는 6단계 검증 파이프라인을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `model_registry_and_byom.md`, `../api_contract.md`

## 목적

모델을 registry에 등록할 때 artifact 무결성, runtime 호환성, 로드 가능성을 자동 검증하여 검증되지 않은 모델이 운영에 투입되는 것을 방지한다.

## Validation 상태

| 상태 | 설명 |
|------|------|
| `not_requested` | 검증 미요청 |
| `pending` | 검증 대기 |
| `running` | 검증 실행 중 |
| `passed` | 검증 통과 |
| `failed` | 검증 실패 |
| `warning` | 통과했으나 주의사항 있음 |

## 6단계 검증

### 1. Artifact 존재 확인

- storage_uri에 artifact 파일이 존재하는지
- 필수 sidecar artifact(config, preprocessing pipeline) 존재 확인

### 2. Checksum 검증

- 등록 시 제공된 checksum과 storage의 실제 파일 checksum 비교
- sha256 기준

### 3. Framework / Runtime 호환성

- `framework`와 `adapter_type`이 대상 `runtime`에서 지원되는지
- 예: YOLO weight → detection runtime 호환 확인

### 4. Model Load Test

- 실제 worker에서 모델을 GPU/CPU에 로드 시도
- 로드 성공 여부, 소요 시간, 메모리 점유량 기록

### 5. Sample Inference Test (선택)

- 샘플 입력으로 추론 실행
- 출력 형식과 schema 일치 확인
- 실행 시간, 결과 유효성 기록

### 6. Metadata Completeness

- input_schema, output_schema 존재 여부
- compatibility_notes 작성 여부
- usage_mode에 맞는 필수 필드 확인 (resume_trainable → optimizer/scheduler state)

## 트리거

| 트리거 | 방법 |
|--------|------|
| API 호출 | `POST /api/models/{model_id}/versions/{version_id}/validate` |
| Console 액션 | Models 상세 → Validate Version 버튼 |
| 자동 (선택) | version 생성 시 자동 validation job 생성 |

## 검증 결과

- validation_status 업데이트 (passed / failed / warning)
- 검증 리포트 생성 (validation_report_ref)
- sample inference 결과 저장 (sample_inference_report_ref)
- ops console에서 요약 + 상세 리포트 조회 가능

## 실패 시 동작

- `failed` → 해당 version은 promote 불가
- 실패 사유 기록 (어느 단계에서, 무슨 에러)
- 운영자가 수정 후 재검증 가능

## Resume Trainable 추가 검증

resume_trainable 모드의 모델은 추가 확인:

- optimizer state 파일 존재
- scheduler state 파일 존재
- epoch/step state 존재
- 이들이 없으면 validation failed

## v1 범위

- 6단계 중 1-4 필수 구현 (artifact, checksum, compatibility, load test)
- 5-6 선택 구현
- API + Console 트리거
- validation_status 추적
- 검증 리포트 기본 저장

## v1.5 이후

- 자동 validation (version 생성 시)
- A/B 비교 validation (기존 version과 성능 비교)
- validation 이력 조회

## 관련 문서

- `model_registry_and_byom.md`, `artifact_storage.md`, `../api_contract.md`
