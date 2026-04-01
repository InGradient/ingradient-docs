# Training

## 진입 경로

- Left Nav "Training" 클릭
- Overview KPI 카드 (Active Jobs, Queued Jobs, Error Jobs) 클릭

## 화면 구조

페이지는 3개 영역으로 나뉜다: GPU 상태 카드 → Queued → History.

### 상단 — GPU 상태 카드

- GPU별 카드를 가로 그리드로 표시
- 각 카드: GPU 번호, 모델명, 활용률 바
- Training 실행 중이면: 뱃지 "Training" + Job ID + 모델명 (파란 테두리)
- 비어 있으면: "Idle" (회색)
- 페이지 헤더 오른쪽에 "+ New Training" 버튼 → Wizard 모달 ([new_job.md](./new_job.md))

### 중간 — Queued (드래그 가능 테이블)

대기 중인 training job을 드래그로 순서 변경할 수 있는 테이블.

- 섹션 제목: "⏳ Queued" + 건수 뱃지
- 안내 문구: "⠿ 핸들을 드래그하여 실행 순서를 변경할 수 있습니다"
- 테이블 (`@ingradient/ui` Table, `draggable=true`):
  - 맨 왼쪽에 **⠿ 드래그 핸들** 자동 표시
  - 드래그 중: 잡힌 행에 그림자, 다른 행 밀려나는 애니메이션
  - 컬럼: Job ID, Type, Runtime, Model, Priority, GPU
  - 맨 오른쪽: **⋯ 옵션 메뉴** (아래 참조)
- 행 클릭 시 상세 drawer 열림

**⋯ 옵션 메뉴 (Queued 행):**
- **Edit**: Wizard 모달이 Settings(마지막 step)에서 열림. 기존 설정 사전 입력, 수정 가능. 버튼: "Save Changes"
- **Clone**: Wizard 모달이 Settings에서 열림. 같은 이름, 버전 자동 +1 (같은 이름의 기존 최대 버전 + 1). 버튼: "Clone"
- **Cancel**: 대기열에서 즉시 제거 (빨간색)

### 하단 — History

완료/실행 중/실패/취소된 training job 테이블.

- 섹션 제목: "📋 History" + 건수 뱃지
- 탭: All | Running | Succeeded | Failed | Cancelled (각 탭에 건수)
- 테이블 컬럼: Job ID, Type, Runtime, Model, Created, Duration, Priority, GPU, Status
- 행 클릭 시 상세 drawer 열림

### 구분선

Queued와 History 사이에 구분선 표시.

---

## Detail Drawer

행 클릭 시 오른쪽에서 슬라이드되는 상세 패널.

### Drawer 상단

- Job ID (전체, 복사 버튼)
- Status 뱃지 (큰 사이즈)
- 액션 버튼 (상태에 따라 표시):
  - Queued: "Cancel"
  - Running: "Cancel"
  - Failed: "Retry", "Clone"
  - Succeeded: "Clone"
  - Cancelled: "Clone"

### Drawer 본문

**Summary:**
- Runtime, Model/Version, Description
- Priority, GPU (Auto 또는 GPU:N)
- Created / Started / Finished 시각
- Total Duration
- Base Checkpoint (base_checkpoint_ref 모델 링크)

**Metrics:**
- Peak VRAM (MB), GPU 사용 시간

**Error Trace:**
- Failed 상태일 때만 표시
- 에러 코드, 에러 메시지

## 주요 인터랙션

- **GPU 카드 클릭**: Workers & GPU 페이지로 이동
- **Queued 행 드래그**: 실행 순서 변경 (애니메이션)
- **⋯ 메뉴 Edit**: Wizard Settings step에서 열림 (기존 설정 수정)
- **⋯ 메뉴 Clone**: Wizard Settings step에서 열림 (버전 자동 +1)
- **⋯ 메뉴 Cancel**: 대기열에서 즉시 제거
- **History 행 클릭**: 상세 drawer 열림
- **"+ New Training" 클릭**: Wizard 모달 열림

## 상태별 화면

- loading: GPU 카드 스켈레톤, 테이블 스켈레톤
- Queued empty: "No queued training jobs" 안내
- History empty: "No matching jobs" 안내
- Failed 탭 empty: "No failed jobs" (초록색 긍정 메시지)
