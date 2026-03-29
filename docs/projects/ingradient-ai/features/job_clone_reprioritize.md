# Job Clone & Reprioritize

- 문서명: Job Clone & Reprioritize
- 목적: Job 복제(clone with override)와 우선순위 변경(reprioritize) 워크플로를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `job_lifecycle.md`

## 목적

실패한 job을 설정 변경 후 재실행(clone)하거나, 대기 중인 job의 우선순위를 조정(reprioritize)하는 운영 워크플로.

## Clone

### 용도

- 실패한 job을 설정 변경 후 재실행
- 성공한 job을 다른 입력으로 재실행
- job 템플릿으로 활용

### API

`POST /api/jobs/{job_id}/clone`

### Clone 동작

1. 원본 job의 설정 복사 (job_type, runtime, model, recipe, resource_request 등)
2. override 필드 적용 (요청에 포함된 필드만 덮어씀)
3. 새 job_id로 생성 (`created` 상태)
4. 원본 job_id를 `cloned_from` 필드로 기록
5. 새 idempotency_key 발급

### Override 가능 필드

- `model_version_id` — 다른 모델 버전으로 실행
- `resource_request` — GPU, VRAM 변경
- `priority` — 우선순위 변경
- `execution_preference` — CPU/GPU 변경
- `preferred_backend` — backend 변경
- `input_artifacts` — 입력 데이터 변경
- `recipe_name`, `recipe_version` — recipe 변경

### 사용 시나리오

- OOM 실패 job → VRAM 증가하여 clone
- 잘못된 model version → 올바른 version으로 clone
- batch inference → 다른 입력 데이터로 clone

## Reprioritize

### 용도

- 대기 중인 job의 우선순위 조정
- 긴급 job 우선 처리
- 대형 training 후순위로 밀기

### API

`POST /api/jobs/{job_id}/reprioritize`

Body: `{ "priority": "high" }`

### Reprioritize 동작

1. job이 `queued` 상태인지 확인 (running은 불가)
2. priority 값 변경
3. queue 내 위치 재조정
4. audit log 기록 (before/after priority)

### 제약

- `queued` 상태에서만 가능
- `running`, `succeeded`, `failed` 등은 reprioritize 불가
- 유효한 priority 값만 허용

## Ops Console 표시

- Job 상세 drawer: Clone, Reprioritize 액션 버튼
- Clone: override 가능 필드를 폼으로 표시
- Reprioritize: priority 드롭다운
- 두 액션 모두 confirmation dialog

## Audit Log

- `job.cloned`: actor, source_job_id, new_job_id, override_fields
- `job.reprioritized`: actor, job_id, before_priority, after_priority

## v1 범위

- Clone 기본 구현 (override 가능)
- Reprioritize 기본 구현
- Ops Console 액션 버튼
- Audit log

## 관련 문서

- `job_lifecycle.md`, `../api_contract.md`, `audit_log.md`
