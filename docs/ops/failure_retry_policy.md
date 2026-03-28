# Failure Retry Policy

- 문서명: Failure Retry Policy
- 목적: 장애, timeout, retry, 복구 규칙을 정의한다.
- 적용 범위: API 호출, queue job, edge sync, ingest, export, artifact 처리
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `monitoring_observability.md`, `incident_response.md`

## 1. 실패 유형 분류

- validation failure
- auth or permission failure
- transient infra failure
- upstream dependency failure
- business rule failure
- terminal execution failure

## 2. timeout 정책

- interactive API는 짧고 예측 가능한 timeout을 둔다
- training, export, ingest 같은 장시간 작업은 job 모델로 분리한다
- edge sync는 네트워크 특성상 더 긴 timeout과 reconnect 여지를 둔다

## 3. retry 정책

자동 retry 대상:

- transient network error
- temporary storage unavailability
- queue race or lock contention

자동 retry 금지 대상:

- validation failure
- permission denied
- deterministic business conflict

원칙:

- exponential backoff 사용
- retry 횟수와 마지막 실패 이유를 기록
- idempotency key로 중복 실행을 방지

## 4. partial failure 처리

- 여러 파일 업로드나 batch job은 가능한 단위로 쪼갠다
- 성공 / 실패 대상을 구분해 기록한다
- 전체 재시도 대신 실패한 하위 단위 재시도를 우선한다

## 5. 서비스별 적용 포인트

### platform and medilabel

- upload와 ingest는 분리한다
- export와 training request는 job resource로 관리한다

### ai

- job 상태 전이와 retry reason을 명확히 기록한다
- OOM은 설정 조정 없이 무한 retry하지 않는다

### edge

- offline 중에는 local queue에 저장하고 복귀 후 재시도한다
- 앱 재시작 후에도 retry 가능한 상태를 복구한다

## 6. operator 개입 기준

- dead-letter 성격의 반복 실패
- 특정 고객이나 프로젝트에 집중된 실패
- queue 적체가 운영 목표를 넘는 경우
- destructive action이 필요한 복구

## 7. 복구 검증

- 상태 일관성 확인
- duplicate 여부 확인
- 사용자-facing 상태 갱신 확인
- 필요 시 troubleshooting 문서 업데이트

