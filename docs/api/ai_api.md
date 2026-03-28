# AI API

- 문서명: AI API
- 목적: platform / medilabel과 ai 서비스 사이의 계약을 정의한다.
- 적용 범위: training, inference, model registry, artifact, logs, metrics
- 상태: Draft
- Owner: AI Platform
- Reviewer: Platform / Medilabel Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_principles.md`, `../ai/model_lifecycle.md`, `../ai/training_job_policy.md`

## AI 서비스 범위
- training job 생성과 상태 관리
- inference 요청과 결과 저장
- model registry와 version lifecycle
- logs, metrics, artifact access

## Training API
- job 생성
- queue 등록
- 상태 조회
- retry / resume 가능 여부 확인

## Inference API
- online serving 요청
- batch inference 요청
- 결과 위치 또는 결과 summary 반환

## Model API
- model 등록
- version 조회
- stage promotion
- rollback과 deprecation 상태 조회

## Artifact API
- training logs
- checkpoints
- evaluation result
- exported model packages

## 상태, 로그, 메트릭 전달 규칙
- job status는 polling 가능한 resource로 제공한다
- 로그와 메트릭은 correlation id 또는 job id로 연결한다
- callback을 쓰면 재처리 규칙을 함께 정의한다

