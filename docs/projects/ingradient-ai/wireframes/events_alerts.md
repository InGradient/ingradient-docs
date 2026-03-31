# Events & Alerts

## 진입 경로

- Left Nav "Events & Alerts" 클릭
- Overview Recent Alerts Strip 행 클릭
- 다른 페이지의 관련 이벤트 링크 클릭

## 화면 구조

### 상단

- 페이지 제목 "Events & Alerts"
- Severity 필터 버튼 (토글): Critical | Warning | Info
  - 기본: 전체 선택
  - 다중 선택 가능
- Status 필터: All | Open | Acknowledged | Muted | Resolved
- Source Type 필터: All | job | worker | gpu | node | model | queue | backend
- 시간 범위 필터 (날짜 선택기: from ~ to)

### Event Stream Table

- 컬럼:
  - Time (절대 시각)
  - Severity (뱃지: Critical=빨강, Warning=주황, Info=파랑)
  - Source Type (뱃지: job / worker / gpu / node / model / queue)
  - Source (해당 entity ID — truncated, 링크)
  - Event Type (예: worker.oom, job.failed, queue.backlog_high, model.load_failed)
  - Message (truncated, 전체 텍스트 툴팁)
  - Status (뱃지: open / acknowledged / muted / resolved)
- 테이블 특성:
  - 최신순 정렬 (가장 최근 이벤트가 상단)
  - Critical 이벤트는 행 배경 강조 (연한 빨강)
  - 행 클릭 시 Alert Detail Drawer 열림
  - 새 이벤트는 SSE로 실시간 추가 (상단에 삽입, 하이라이트 애니메이션)

### 하단

- 페이지네이션

---

## Alert Detail Drawer

행 클릭 시 열리는 상세 패널.

### Drawer 상단

- Event ID (복사 버튼)
- Severity 뱃지 (큰 사이즈)
- Status 뱃지

### 상세 정보

- Time (ISO 형식)
- Event Type
- Source Type + Source ID (전체, 링크)
- Message (전체 텍스트)
- Payload (JSON — 코드 블록, 접을 수 있음)

### Acknowledged Info (acknowledged 상태일 때)

- Acknowledged By
- Acknowledged At

### Related Entities

- Source entity 링크 (클릭 시 해당 페이지로 이동):
  - Job → Jobs 페이지
  - Worker → Workers & GPU 페이지
  - Model → Models 페이지
  - Queue → Queues 페이지

### 액션 버튼

- "Acknowledge" (open 상태일 때): 이 alert을 확인했음을 표시
- "Mute" (open/acknowledged 상태일 때): 음소거 기간 선택 (1h / 4h / 24h / custom) → 해당 기간 동안 동일 유형 alert 숨김
- "Escalate": 에스컬레이션 (담당자/채널 지정)
- "Resolve" (open/acknowledged 상태일 때): 해결 완료 표시

## 주요 인터랙션

- **Severity 필터 토글**: 해당 severity만 표시/숨김
- **행 클릭**: detail drawer 열림
- **Source 링크 클릭**: 해당 entity 상세 페이지로 이동
- **"Acknowledge" 클릭**: 즉시 상태 변경 → 토스트
- **"Mute" 클릭**: 기간 선택 드롭다운 → 확인 → 토스트
- **"Escalate" 클릭**: 에스컬레이션 모달 (담당자/채널 선택) → 확인 → 토스트
- **"Resolve" 클릭**: 확인 다이얼로그 → 상태 변경 → 토스트
- **실시간 업데이트**: 새 이벤트가 SSE로 도착하면 테이블 상단에 삽입 + 하이라이트

## 상태별 화면

- loading: 테이블 스켈레톤
- empty: "이벤트가 없습니다" 안내
- 필터 결과 없음: "조건에 맞는 이벤트가 없습니다" 안내 + 필터 초기화 버튼
- critical 다수: 상단에 요약 배너 ("N개의 미확인 Critical alert이 있습니다")
