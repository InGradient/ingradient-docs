# Training Scheduler

- 문서명: Training Scheduler
- 목적: GPU 스케줄링, queue/pool 정책, VRAM 계산, OOM 대응, preload, alert 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `../operations.md`

## 목적

training scheduler는 GPU를 최대한 많이 쓰는 것보다 예측 가능하고 안정적인 실행을 우선한다.

## Pool 구조

### 초기 pool

- `inference-pool`, `training-pool`, `utility-pool`

### 확장 시

- `detection-infer-pool`, `foundation-train-pool`, `medical-infer-pool`, `medical-train-pool`, `utility-cpu-pool`

## Job Class

| Class | 설명 | 예시 |
|-------|------|------|
| A | 실시간/준실시간 추론 | interactive inference |
| B | batch 추론 | 대량 이미지 처리 |
| C | 대형 학습 | full training |
| D | preprocessing/export/report | data pipeline |

## GPU 스케줄링 판단 기준

GPU 스케줄러는 backend selection 이후 단계에서 동작한다. self-hosted 내부에서 worker/GPU 후보를 선택할 때 아래 순서로 판단한다.

1. runtime compatibility
2. worker health
3. queue policy compatibility
4. GPU class compatibility
5. committed VRAM + safety margin 충족
6. sharing/exclusive 정책 충족
7. model locality (warm model 우선)
8. 최근 OOM/에러 이력
9. node imbalance 완화

## VRAM 계산 원칙

단순 free VRAM만 보고 스케줄링하지 않는다. 아래를 모두 고려한다.

| 항목 | 설명 |
|------|------|
| system reserve | OS/driver 예약 |
| runtime reserve | runtime 프로세스 기본 메모리 |
| fragmentation margin | 메모리 단편화 여유 |
| warm footprint | 로드된 모델의 상주 메모리 |
| active job footprint | 현재 실행 중인 job의 committed VRAM |
| spike buffer | peak 사용량 대비 안전 여유 |

핵심 개념: `committed_vram_mb`, `available_for_scheduling_mb`, `safety_margin_mb`, `peak_recent_vram_mb`

## 공유 정책

| 모드 | 대상 | 제약 |
|------|------|------|
| **Exclusive** | training, high-risk medical, 신규 모델 | GPU 독점 |
| **Restricted Sharing** | 검증된 가벼운 inference, warm worker 짧은 job | max concurrent 제한, 높은 safety margin |
| **Open Sharing** | 초기 버전에서 도입하지 않음 | - |

## 모델 Preload 정책

### 선정 기준

- 최근 호출 빈도, cold start 비용, warm footprint 수용 가능성, queue pressure

### 규칙

- runtime별 preload 상한 설정
- 미사용 시간이 길면 unload 후보
- manual override 가능
- preload 실패는 alert로 기록

### Preload 상태

| 상태 | 설명 |
|------|------|
| `cold` | 로드되지 않음 |
| `warming` | 로드 진행 중 |
| `warm` | 로드 완료, 대기 |
| `in_use` | 실행 중 |
| `cooldown` | 사용 종료 후 대기 |
| `evicted` | 메모리 부족으로 제거됨 |

## OOM 대응 정책

1. 동일 조건 즉시 무한 재시도 금지
2. job attempt에 peak VRAM, failure code 기록
3. 가능한 recipe만 batch downscale retry 허용
4. 필요 시 exclusive mode로 downgrade 후 재시도
5. 반복 OOM → worker를 `oom_recent` 상태로 표시
6. 특정 worker에서 반복 → drain 또는 maintenance 권고

운영자 확인 포인트: 모델 warm footprint 변화, 최근 worker 재시작 이력, 동일 node 다른 GPU 동일 현상 여부

## Alert 기준

### Critical

| Signal | 기준 |
|--------|------|
| node heartbeat lost | 90초 |
| repeated OOM burst | 30분 내 3회 |
| model load fail on production default | 즉시 |
| queue backlog over critical | queue 유형별 (realtime 15초, interactive 120초, batch 1800초) |
| GPU overheat | 85°C 이상 |

### Warning

| Signal | 기준 |
|--------|------|
| queue wait time 상승 | queue 유형별 (realtime 5초, interactive 30초, batch 300초) |
| no heartbeat worker | 15초 |
| worker restart 급증 | 30분 내 3회 |
| backend saturation | 10분 평균 85% 이상 |
| GPU temperature | 80°C 이상 |
| locality miss rate | 20% 초과 |
| storage access error | 5분 내 3회 |

### Info

- worker started/stopped, model preload complete, queue resumed

상세 threshold 테이블은 `../operations.md` 참조.

## 단계별 성숙도

| Phase | 내용 |
|-------|------|
| Phase 1 | 보수적 exclusivity, 수동 preload, 기본 alert, 수동 backend preference |
| Phase 2 | restricted sharing, profiling 기반 admission, queue별 정책 차등, Vertex AI offload |
| Phase 3 | quota enforcement, 예약 배치, MIG/hard partition, cost 기반 최적화 |

## 의사결정 체크리스트

운영 정책 변경 전 확인:

- inference 안정성을 깨는가?
- profiling 근거가 충분한가?
- UI에서 설명 가능한가?
- rollback 가능한가?
- 특정 runtime에만 적용해야 하는가?

## 관련 문서

- `../operations.md`
