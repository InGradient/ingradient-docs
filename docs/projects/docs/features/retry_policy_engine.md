# Retry Policy Engine

- 문서명: Retry Policy Engine
- 목적: Job 실패 시 재시도 판단 로직, backoff, dead_letter 전이 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `job_lifecycle.md`, `../operations.md`

## 목적

Job 실패 시 자동 재시도 여부를 판단하고, 무한 재시도를 방지하며, 재시도 불가한 job을 dead_letter로 분류한다.

## Retry 판단 흐름

```
job failed → failure_code retryable?
  → No: dead_letter
  → Yes: max retry 초과?
    → Yes: dead_letter
    → No: OOM이면 동일 조건 재시도 금지
      → 새 JobAttempt 생성 → queued
```

## Retryable vs Non-Retryable

### Retryable (자동 재시도 대상)

| failure_code | 설명 |
|-------------|------|
| `worker_no_heartbeat` | worker 연결 끊김 |
| `worker_restart` | worker 재시작 |
| `transient_error` | 일시적 에러 |
| `storage_timeout` | storage 접근 타임아웃 |
| `model_not_preloaded` | 모델 미로드 (preload 후 재시도) |
| `scheduler_no_healthy_worker` | 건강한 worker 없음 (잠시 후 재시도) |

### Non-Retryable (즉시 failed 확정)

| failure_code | 설명 |
|-------------|------|
| `validation_error` | 입력 검증 실패 |
| `unsupported_runtime` | 미지원 runtime |
| `unsupported_model` | 미지원 모델 |
| `artifact_checksum_mismatch` | artifact 손상 |
| `job_cancelled_by_user` | 사용자 취소 |
| `job_retry_policy_exhausted` | retry 소진 |

## OOM 특별 처리

- OOM은 retryable이지만 동일 조건 즉시 재시도 금지
- `peak_vram_mb`, `failure_code` 기록
- 가능한 recipe만 batch downscale retry 허용
- 필요 시 exclusive mode로 downgrade 후 재시도
- 반복 OOM (30분 내 3회) → worker를 `oom_recent`로 전환
- 상세는 `oom_detection_recovery.md` 참조

## Retry 설정

| 설정 | 기본값 | 설명 |
|------|--------|------|
| max_retry_count | 3 | 최대 재시도 횟수 |
| retry_backoff | exponential | backoff 전략 |
| initial_delay_ms | 1000 | 첫 재시도 대기 |
| max_delay_ms | 60000 | 최대 대기 |
| retry_on_oom | true (조건부) | OOM 재시도 허용 |

## Dead Letter

- retry 소진 시 job status → `dead_letter`
- dead_letter job은 자동 재시도 불가
- 운영자가 수동으로 `clone with override` 또는 `retry` 가능
- dead_letter 전이는 event + alert 발행

## JobAttempt 기록

각 재시도마다 새 JobAttempt 생성:

- attempt_no 증가
- retry_trigger 기록 (어떤 failure_code로 retry됐는지)
- 이전 attempt의 failure 정보 보존

## Ops Console 표시

- Job 상세 drawer: attempt history (각 attempt의 failure_code, retry_trigger)
- Failed 탭: retry 횟수 표시
- dead_letter 상태 시각적 강조

## v1 범위

- retryable/non-retryable 분류
- max retry + exponential backoff
- OOM 조건부 재시도
- dead_letter 전이
- attempt history 기록

## v1.5 이후

- 커스텀 retry policy per job/recipe
- retry budget per queue
- smart retry (다른 worker/backend로 재시도)

## 관련 문서

- `job_lifecycle.md`, `oom_detection_recovery.md`, `../operations.md`
