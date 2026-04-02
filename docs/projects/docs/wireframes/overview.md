# Overview

## 진입 경로

- Ops Console 접속 시 기본 페이지
- Left Nav "Overview" 클릭

## 화면 구조

### KPI Row

- 카드 형태로 최대 8개의 핵심 지표를 한 줄에 표시한다
- 각 카드: 라벨, 숫자 값, 변화 추이 (↑↓)
- 카드 목록:
  - Active Jobs (실행 중 job 수)
  - Queued Jobs (대기 중 job 수)
  - Healthy GPUs (정상 GPU 수 / 전체 GPU 수)
  - Running Workers (실행 중 worker 수)
  - Error Jobs (최근 1시간 에러 job 수)
  - Avg Queue Wait (평균 대기 시간)
  - GPU Utilization (평균 GPU 활용률 %)
  - Loaded Models (GPU에 로딩된 model 수)
- 각 카드 클릭 시 해당 상세 페이지로 이동 (예: Queued Jobs 클릭 → Jobs 페이지 Queued 탭)

### Summary Zone

- GPU Summary Card와 Queue Summary Card를 나란히 표시한다

**GPU Summary Card:**
- backend별 GPU 상태 요약 (healthy / degraded / maintenance 수)
- 전체 VRAM 사용률 바

**Queue Summary Card:**
- runtime별 queue 상태 요약 (대기 수, 실행 수, 평균 대기 시간)
- 각 queue 클릭 시 Queues 페이지 해당 queue 상세로 이동

### Running Jobs Strip

- 현재 실행 중인 job을 최대 8개까지 카드 형태로 가로 나열한다
- 각 카드: Job ID (truncated), runtime 뱃지, model 이름, 진행 시간, worker
- 8개 초과 시 "View all →" 링크 (Jobs 페이지 Running 탭으로 이동)
- 카드 클릭 시 Jobs 페이지에서 해당 job 상세 drawer 열림

### Recent Alerts Strip

- severity 순서로 최근 이벤트를 5~10개 표시한다 (Critical → Warning → Info)
- 각 행: 시각, severity 뱃지, 출처, 메시지 (truncated)
- "View all →" 링크 (Events & Alerts 페이지로 이동)
- 행 클릭 시 Events & Alerts 페이지에서 해당 이벤트 상세로 이동

### 24h Trend Charts

- 최대 4개의 소형 차트를 2×2 그리드로 배치한다
- 차트 목록:
  - Job 처리량 추이 (시간별 성공/실패 수)
  - 실패율 추이 (시간별 실패 비율)
  - GPU 활용률 추이 (시간별 평균)
  - Queue 대기 시간 추이 (시간별 평균)

## 주요 인터랙션

- **KPI 카드 클릭**: 해당 상세 페이지로 이동
- **Queue 카드 클릭**: Queues 페이지 해당 queue 상세로 이동
- **Running Job 카드 클릭**: Jobs 페이지 해당 job drawer 열림
- **Alert 행 클릭**: Events & Alerts 해당 이벤트 상세로 이동
- **차트 구간 호버**: 해당 시점의 상세 수치 툴팁
- **실시간 업데이트**: KPI 숫자, queue 대기 수, running job 진행률은 SSE로 자동 갱신

## 상태별 화면

- loading: KPI 카드 스켈레톤, 차트 영역 스켈레톤
- 정상: 모든 KPI가 초록/파랑 톤, alert 없음
- 이상: 빨강/주황 KPI 강조, alert strip에 critical 이벤트 표시
- SSE 연결 끊김: 상단에 "실시간 연결이 끊겼습니다. 새로고침하세요" 배너
