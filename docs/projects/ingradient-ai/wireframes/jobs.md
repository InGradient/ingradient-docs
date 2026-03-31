# Jobs

## 진입 경로

- Left Nav "Jobs" 클릭
- Overview KPI 카드 (Active Jobs, Queued Jobs, Error Jobs) 클릭

## 화면 구조

### 상단

- 페이지 제목 "Jobs"
- "+ New Job" 버튼 → Job 생성 모달 열림 ([new_job.md](./new_job.md) 참조)
- 상태별 탭: All | Queued | Running | Succeeded | Failed | Cancelled
  - 각 탭에 해당 상태의 job 수 뱃지 표시
  - 탭 전환 시 테이블 필터 자동 적용

### Filter Bar

- 필터 항목 (인라인):
  - Runtime (드롭다운: All / detection / foundation / medical / utility)
  - Task Type (드롭다운)
  - Model (검색형 드롭다운)
  - Queue (드롭다운)
  - Worker (검색형 드롭다운)
  - Priority (드롭다운: All / critical / high / normal / low)
  - Backend (드롭다운: All / self_hosted / gke_gpu / gke_cpu / vertex_*)
  - 시간 범위 (날짜 선택기: from ~ to)
- "Reset Filters" 버튼

### Main Data Area — Job 테이블 (All / Running / Succeeded / Failed / Cancelled 탭)

- 컬럼:
  - Job ID (monospace, truncated, 전체 ID 툴팁)
  - Job Type (training / inference / utility)
  - Runtime (뱃지)
  - Model / Version
  - Duration (실행 시간)
  - Priority (뱃지: critical=빨강, high=주황, normal=파랑, low=회색)
  - GPU (Auto 또는 GPU:N)
  - Status (뱃지: 상태별 색상)
- 테이블 특성:
  - 고정 헤더 (스크롤 시 유지)
  - 행 클릭 시 오른쪽 상세 drawer 열림

### Main Data Area — Queued 탭 (드래그 가능)

Queued 탭은 일반 테이블 대신 **드래그 가능한 리스트**로 표시한다.

- 각 행 맨 왼쪽에 **⠿ 드래그 핸들** (6점 grip 아이콘)
- 드래그하여 실행 순서를 변경할 수 있다
- 드래그 중: 잡힌 행에 그림자 효과, 다른 행은 밀려나는 애니메이션
- 컬럼: 순서번호(#), Job ID, Type, Runtime, Model, Priority, GPU, 대기 시간
- 행 클릭 시 상세 drawer 열림
- 상단에 안내 문구: "⠿ 핸들을 드래그하여 실행 순서를 변경할 수 있습니다"

### 하단

- 페이지네이션 (이전 / 다음, 현재 페이지 / 전체 페이지, 총 건수)

---

## Job Detail Drawer

행 클릭 시 오른쪽에서 슬라이드되는 상세 패널.

### Drawer 상단

- Job ID (전체, 복사 버튼)
- Status 뱃지 (큰 사이즈)
- 액션 버튼 (상태에 따라 표시):
  - Queued: "Cancel", "Reprioritize"
  - Running: "Cancel"
  - Failed: "Retry", "Clone"
  - Succeeded: "Clone"
  - Cancelled: "Clone"

### Drawer 본문 — 탭 또는 섹션

**Summary:**
- Job Type, Task Type, Runtime, Model/Version
- Queue, Priority, Latency Class
- Created / Scheduled / Started / Finished 시각
- Total Duration
- Pipeline (속한 파이프라인이 있으면 이름 + 링크 → Training Pipeline 페이지)
- Base Checkpoint (training job이면 base_checkpoint_ref 모델 링크)

**Routing:**
- Preferred Backend → Selected Backend
- Execution Mode (GPU / CPU)
- Fallback Applied (예/아니오, 적용 시 사유 코드)
- Routing Reason (사유 코드 + 설명)

**Timeline:**
- 상태 전이를 시간순으로 표시 (created → queued → scheduled → running → succeeded/failed)
- 각 전이: 시각 + 소요 시간

**Attempt History:**
- 시도 번호별 테이블: Attempt #, Worker, Node, GPU, Backend, Duration, Peak VRAM, Failure Code
- 실패한 시도는 빨간색 강조

**Error Trace:**
- Failed 상태일 때만 표시
- 에러 코드, 에러 메시지, 스택 트레이스 (코드 블록)

**Metrics:**
- Peak VRAM (MB), GPU 사용 시간, CPU 사용 시간

**Artifacts:**
- Input Artifacts: storage URI 목록
- Output Artifacts: storage URI 목록 (성공 시)

**Related Entities:**
- Worker 링크 (클릭 시 Workers & GPU 페이지)
- Model 링크 (클릭 시 Models 페이지)
- Queue 링크 (클릭 시 Queues 페이지)
- 관련 Events 링크

## 주요 인터랙션

- **탭 전환**: 해당 상태의 job만 표시 + 탭 뱃지 갱신
- **행 클릭**: 상세 drawer 열림. 다른 행 클릭 시 drawer 내용 교체
- **"Retry" 클릭**: 확인 다이얼로그 → 같은 설정으로 재시도 → 토스트
- **"Clone" 클릭**: 모달 — job 설정이 사전 입력됨, 수정 후 "Create" 클릭
- **"Cancel" 클릭**: 확인 다이얼로그 → 취소 요청 → 토스트
- **"Reprioritize" 클릭**: 우선순위 선택 드롭다운 → 확인 → 토스트
- **"+ New Job" 클릭**: Job 생성 모달 열림 ([new_job.md](./new_job.md) 참조)
- **Related Entity 링크 클릭**: 해당 페이지로 이동 + 해당 entity 상세 열림

## 상태별 화면

- loading: 탭 스켈레톤, 테이블 스켈레톤
- empty (전체): "등록된 job이 없습니다" 안내
- empty (필터/탭 결과): "조건에 맞는 job이 없습니다" 안내 + 필터 초기화 버튼
- Failed 탭 empty: "실패한 job이 없습니다" (초록색 긍정 메시지)
