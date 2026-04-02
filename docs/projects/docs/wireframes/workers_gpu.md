# Workers & GPU

## 진입 경로

- Left Nav "Workers & GPU" 클릭
- Overview GPU Summary 카드 클릭
- Jobs detail drawer의 Worker/Node 링크 클릭

## 화면 구조

### 상단

- 페이지 제목 "Workers & GPU"
- Backend 요약 카드 (backend별 상태, 포화도, 대기/실행 job 수)

### Node List (노드 목록)

- 좌측 패널 또는 상단 섹션
- 컬럼:
  - Hostname
  - Status (뱃지: healthy / degraded / no_heartbeat / maintenance / draining)
  - GPUs (정상 / 전체 수)
  - CPU / RAM (사용률 바)
  - Active Workers (수)
  - Last Heartbeat (상대 시간: "3s ago")
- 노드 행 클릭 시 해당 노드의 GPU 그리드 + worker 테이블로 스크롤/필터

### GPU Grid (GPU 상태 그리드)

- 노드별로 GPU를 카드 또는 그리드 셀로 표시한다
- 각 GPU 카드:
  - Device Index (#0, #1, ...)
  - Model Name (GPU 하드웨어명)
  - 활용률 바 (utilization %)
  - VRAM 바 (committed / total MB)
  - 온도 (색상 표시: 정상=초록, 경고=주황, 위험=빨강)
  - Health Status (뱃지)
  - Sharing Mode (뱃지: exclusive / restricted)
  - Running Job ID (있으면 표시, 클릭 시 Jobs 페이지)
  - Loaded Models (목록, 축약)
- GPU 카드 클릭 시 GPU detail drawer 열림

### Worker Table (worker 목록)

- 컬럼:
  - Worker ID (monospace, truncated)
  - Runtime (뱃지)
  - Worker Type
  - Node
  - Status (뱃지: starting / healthy / idle / busy / degraded / oom_recent / draining / maintenance / stopped)
  - Queue Affinity
  - Active Job (Job ID 링크)
  - Loaded Models (수)
  - OOM Count (최근 — 빨간색 강조 시 1 이상)
  - Restart Count
  - Uptime
  - Last Heartbeat
- 행 클릭 시 worker detail drawer 열림

### CPU Pool Status

- CPU 전용 worker 상태 요약 (활성 수, 유휴 수, 실행 중 job 수)

### 하단

- 페이지네이션 (worker 테이블 용)

---

## Worker Detail Drawer

worker 행 클릭 시 열리는 상세 패널.

- Worker ID (전체, 복사 버튼)
- Status 뱃지
- 정보: Runtime, Worker Type, Node, Queue Affinity, Version, Uptime
- Assigned GPUs: GPU 목록 (카드 — 활용률, VRAM, health)
- Loaded Models: model 목록 (이름, 버전, warm/cold 상태, 메모리)
- Active Job: Job ID 링크 + 진행 시간
- Recent History: OOM 횟수, 재시작 횟수, 최근 에러
- 액션 버튼:
  - "Restart": 확인 다이얼로그 → worker 재시작
  - "Drain": 확인 다이얼로그 → 현재 job 완료 후 새 job 차단
  - drain 상태면 "Undrain": drain 해제

## GPU Detail Drawer

GPU 카드 클릭 시 열리는 상세 패널.

- GPU Device 정보: Node, Device Index, Model Name, Total VRAM
- 현재 상태: Utilization %, VRAM 사용량, Temperature, Power Draw
- Health Status
- Sharing Mode
- Assigned Worker (링크)
- Running Job (링크)
- Loaded Models 목록

## 주요 인터랙션

- **노드 행 클릭**: 해당 노드의 GPU/worker로 필터
- **GPU 카드 클릭**: GPU detail drawer 열림
- **Worker 행 클릭**: worker detail drawer 열림
- **"Restart" 클릭**: 확인 다이얼로그 → 재시작 → 토스트
- **"Drain" 클릭**: 확인 다이얼로그 ("현재 job 완료 후 새 job을 받지 않습니다") → drain → 토스트
- **"Cordon" 클릭** (노드): 확인 다이얼로그 ("이 노드에 새 스케줄링을 차단합니다") → cordon → 토스트
- **Job ID 링크 클릭**: Jobs 페이지 해당 job 상세로 이동
- **Model 링크 클릭**: Models 페이지 해당 model 상세로 이동

## 상태별 화면

- loading: 노드 목록 스켈레톤, GPU 그리드 스켈레톤, worker 테이블 스켈레톤
- 노드 empty: "등록된 노드가 없습니다" 안내
- worker empty: "실행 중인 worker가 없습니다" 안내
- 비정상 노드: no_heartbeat/degraded 노드는 빨간/주황 배경 강조
- OOM worker: oom_recent 상태 worker는 빨간 뱃지 + 행 강조
