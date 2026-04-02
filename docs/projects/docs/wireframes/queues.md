# Queues

## 진입 경로

- Left Nav "Queues" 클릭
- Overview Queue Summary 카드 클릭 (해당 queue 상세로 직접 이동)

## 화면 구조

### 상단 — Backend Summary 카드

backend별 상태를 요약하는 카드를 가로로 나열한다.

각 카드:
- Backend 이름 (예: `self_hosted`, `gke_gpu`)
- Status 뱃지 (healthy / degraded / saturated / maintenance)
- 실행 중 job 수, 대기 job 수
- 포화도 바 (running / capacity)
- 예상 대기 시간 (estimated_wait_ms)

### Queue 테이블

| 컬럼 | 설명 |
|------|------|
| Queue Name | 큐 이름 (monospace) |
| Runtime | runtime 뱃지 |
| Backend | 연결된 backend |
| Type | inference / training / utility 뱃지 |
| Status | Active / **Paused** 뱃지 (paused면 그레이) |
| Queued | 대기 중 job 수 (warning threshold 초과 시 빨간 강조) |
| Running | 실행 중 job 수 |
| Avg Wait | 평균 대기 시간 |
| P95 Wait | p95 대기 시간 |
| Concurrency | concurrency_limit |
| Priority Policy | FIFO / priority-based |

- 행 클릭 시 Queue Detail Drawer 열림
- paused queue: 행 전체 그레이 처리

---

## Queue Detail Drawer

행 클릭 시 오른쪽에서 슬라이드되는 상세 패널.

### Drawer 상단

- Queue 이름 (전체)
- Status 뱃지 (Active / Paused)
- 액션 버튼:
  - Active 상태: **Pause**
  - Paused 상태: **Resume**
  - 항상: **Adjust Concurrency**

### Drawer 본문

**기본 정보:**
- Runtime, Backend, Type, Priority Policy
- Concurrency Limit

**현황 지표:**
- Queued: 현재 대기 중 job 수
- Running: 현재 실행 중 job 수
- Avg Wait / P95 Wait (ms)
- Oldest Waiting At: 가장 오래 대기 중인 job의 시각 (head-of-line blocking 감지)

**Backlog Timeline:**
- 최근 24시간 대기 수 추이를 소형 라인 차트로 표시
- 시간 범위 위에 warning threshold 점선 표시

**Priority Split:**
- priority 등급별 대기 job 수를 수평 바로 표시
  - High / Normal / Low / Class A~D

**Rejection Reasons:**
- scheduler 거부 사유 분포 (표 또는 수평 바)
  - 예: "no_available_worker", "vram_insufficient", "pool_saturated"
  - 각 사유별 건수 + 비율

---

## 주요 인터랙션

- **Pause 클릭**: 확인 다이얼로그 ("새 job 실행을 중단합니다. 실행 중인 job은 계속됩니다.") → pause → 토스트 → Status 뱃지 갱신
- **Resume 클릭**: 확인 다이얼로그 ("대기 중인 job부터 실행을 재개합니다.") → resume → 토스트 → Status 뱃지 갱신
- **Adjust Concurrency 클릭**: 숫자 입력 모달 (현재 값 표시) → 저장 → 토스트 → Concurrency Limit 갱신
- **행 클릭**: Queue Detail Drawer 열림
- **Backend Summary 카드 클릭**: 해당 backend에 속한 queue만 테이블 필터
- **Queued 수 클릭**: Jobs 페이지 해당 queue 필터 + Queued 탭으로 이동

## 상태별 화면

- loading: Backend 카드 스켈레톤, 테이블 스켈레톤
- queue empty: "Queue가 없습니다" 안내
- queue paused: 해당 행 그레이 + "Paused" 뱃지, Drawer 상단에 "이 queue가 일시정지되었습니다" 배너
- queue warning (backlog 초과): Queued 셀 빨간 숫자 + Drawer Backlog Timeline에 warning 구간 빨간 강조
- backend saturated: Backend Summary 카드 빨간 테두리
