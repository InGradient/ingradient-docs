# ingradient-ai User Guide

- 문서명: ingradient-ai User Guide
- 목적: AI 운영자와 개발자를 위한 주요 작업 흐름 가이드.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28

## 대상 사용자

- **AI 운영자**: ops console로 상태 모니터링, 장애 대응, 운영 액션 실행
- **내부 개발자**: API로 job 생성, model 등록, 결과 조회
- **관리자**: 설정 관리, 사용량 분석

## 시작하기

### 사전 요구사항

- auth-service 계정 (ops console 접근 권한)
- 필요 auth scope: `jobs.read`, `models.read`, `workers.read`, `events.read` (최소)
- ops console URL (환경별 상이)

### 기본 진입 흐름 (Ops Console)

1. **Overview** → 전체 이상 여부 10초 확인
2. **Jobs / Queues / Workers** → 문제 drill-down
3. **Models** → version, preload 상태 확인
4. **Events & Alerts** → critical event 확인

## 주요 작업 흐름

### Job 생성 (API)

```
POST /api/jobs
{
  "job_type": "infer",
  "task_type": "object_detection",
  "runtime": "detection",
  "model_id": "mdl_yolo_v8",
  "model_version_id": "mdlver_yolo_v8_1",
  "recipe_name": "yolo-infer",
  "execution_preference": "auto",
  "preferred_backend": "self_hosted",
  "priority": "normal",
  "resource_request": { "gpu_count": 1, "vram_class": "24gb" },
  "input_artifacts": [{ "storage_uri": "gs://bucket/input/", "role": "primary-input" }]
}
```

응답: `job_id`, 초기 status → polling으로 상태 추적 (`GET /api/jobs/{job_id}`)

### Model 등록 (API)

1. `POST /api/models/register` → `model_name`, `runtime`, `task_type`, `framework`, `adapter_type`
2. `POST /api/models/{model_id}/versions` → version 생성 + artifact URI, checksum
3. `POST .../versions/{version_id}/validate` → 검증 실행
4. 검증 통과 후 `POST .../versions/{version_id}/promote-default` → 기본 버전 승격

### Failed Job 확인 (Console)

1. Jobs → **Failed** 탭 선택
2. 필터: runtime, model, queue, 시간 범위
3. 상세 drawer → **Attempt History**, **Error Trace**, **Routing** 확인
4. 필요 시 retry / clone with override

### Backlog 확인 (Console)

1. Overview 또는 Queues에서 backlog 상승 확인
2. Workers & GPU → worker 부족 / locality 문제 확인
3. 필요 시 preload 요청, drain 해제, concurrency 조정

### Model Version 관리 (Console)

1. Models → model family 선택
2. Version history 확인 (current default, production, latest)
3. **Validate Version** → 검증 실행
4. **Promote to Default** → 새 job부터 적용
5. 문제 시 **Rollback** → 이전 stable 버전으로 즉시 복구

### GPU 모니터링 (Console)

1. Workers & GPU → node list에서 전체 상태 파악
2. GPU grid → utilization, VRAM, health 확인
3. 문제 GPU의 worker 확인 → drain / maintenance 전환
4. backend saturation summary로 overflow 필요 여부 판단

### Event/Alert Triage (Console)

1. Events & Alerts → severity 필터 (Critical 우선)
2. 관련 entity(job, worker, model) 열기
3. acknowledge → 조치 → resolve

## 자주 묻는 문제

### queue에 job이 오래 머무름

원인: worker 부족, model preload 미완료, concurrency limit, queue pause 상태
확인: Queues → backlog timeline, Workers → active count, Models → preload 상태

### worker가 `oom_recent` 상태

의미: 최근 OOM 발생으로 해당 worker의 신뢰도 저하
조치: drain 후 재시작, model warm footprint 확인, exclusive mode 전환 검토

### model load 실패

원인: artifact 경로 오류, checksum 불일치, runtime 비호환, 디스크 부족
확인: Models → version 상세 → validation status, artifact checksum

### artifact가 보이지 않음

원인: storage credential 만료, bucket policy, 잘못된 URI
확인: storage access error alert 확인, credential rotation 필요 여부 점검

## 권한 요구사항

| 역할 | 필요 scope |
|------|-----------|
| 운영자 (읽기) | `jobs.read`, `workers.read`, `models.read`, `queues.read`, `events.read` |
| 운영자 (액션) | 위 + `jobs.write`, `workers.write`, `models.write`, `events.write` |
| 개발자 (API) | `jobs.write`, `models.write` |
| 관리자 | 위 전체 + `settings.write`, `analytics.read` |

## 관련 문서

- `api_contract.md`, `operations.md`
- `features/ops_console.md`, `features/model_registry_and_byom.md`
