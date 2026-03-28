# Monitoring Observability

- 문서명: Monitoring Observability
- 목적: 운영 관측 체계의 기준을 정의한다.
- 적용 범위: auth, platform, ai, edge, medilabel
- 상태: Draft
- Owner: Infra / Platform
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `failure_retry_policy.md`, `sla_slo_policy.md`, `debug_notes.md`

## 1. 관측 목표

- 장애를 빠르게 탐지한다
- 원인 추적에 필요한 logs, metrics, traces를 연결한다
- 성능, 비용, 자원 사용을 같이 본다
- 운영 콘솔과 디버깅 문서가 같은 신호를 바라보게 한다

## 2. 공통 신호 종류

### logs

- 구조화 로그 사용
- request id, job id, device id, project id 같은 컨텍스트 포함
- 민감 정보는 제외

### metrics

- request count
- latency percentile
- error rate
- queue depth
- retry count
- storage and sync throughput

### traces or correlation

- 긴 흐름은 correlation id로 연결
- auth → product → ai → artifact 생성 흐름이 이어져야 함

## 3. 서비스별 핵심 지표

### auth-service

- login success rate
- token verify latency
- refresh failure

### ingradient-platform / medilabel

- upload success rate
- ingest latency
- export success
- training request success
- viewer open failure

### ingradient-ai

- queue wait time
- job success rate
- GPU utilization
- model load failure
- fallback ratio

### ingradient-edge

- sync lag
- offline duration
- upload retry count
- capture failure

## 4. 로그 표준

- `error`: 즉시 대응이 필요한 실제 실패
- `warn`: 동작은 하지만 문제 가능성이 있는 상태
- `info`: 주요 정상 이벤트
- `debug`: 개발 / 진단용 상세 정보

추가 원칙:

- 로그에는 항상 모듈 또는 기능 컨텍스트를 붙인다
- 장시간 job은 단계별 progress를 남긴다
- unhandled rejection과 process crash는 반드시 수집한다

## 5. 운영 대시보드 구성

### 공통 대시보드

- availability
- latency
- error rate
- dependency health

### AI 운영 대시보드

- queue backlog
- worker and GPU health
- model load state
- cost or usage trend

### Edge 운영 대시보드

- sync failure
- site별 online or offline 상태
- device diagnostics health

## 6. 알림 기준

- SLO 임계치 초과
- queue 적체 급증
- repeated auth failure
- repeated sync failure
- artifact write failure
- GPU saturation or worker unavailable

## 7. 문서와의 연결 원칙

- 반복 문제는 `troubleshooting.md` 또는 `debug_notes.md`에 연결한다
- 주요 incident 후에는 alert 기준과 dashboard gap을 다시 본다

