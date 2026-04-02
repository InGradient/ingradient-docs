# Jobs

## 진입 경로

- Left Nav "Jobs" 클릭
- Overview KPI 카드 (Active Jobs, Queued Jobs, Error Jobs) 클릭
- Overview Running Jobs Strip "View all →" 클릭

## 화면 구조

### 상단

- 페이지 제목 "Jobs"
- 오른쪽: **"+ New Job"** 버튼 → New Job 모달 ([new_job.md](./new_job.md))

### 탭

`All` | `Queued` | `Running` | `Succeeded` | `Failed` | `Cancelled`

- 각 탭에 건수 뱃지 표시
- 탭 클릭 시 status 필터 즉시 적용

### Filter Bar

탭 아래에 위치하는 inline 필터 바.

- **Runtime**: detection / foundation / medical / utility (multi-select)
- **Task Type**: 텍스트 입력 또는 드롭다운
- **Model**: 모델명 검색
- **Queue**: queue_name (multi-select)
- **Worker**: worker_id 검색
- **Priority**: 드롭다운
- **Backend**: backend_type (multi-select)
- **시간 범위**: 날짜 범위 선택 (created_at 기준)
- "Reset Filters" 링크

### Job 테이블

| 컬럼 | 설명 |
|------|------|
| Job ID | monospace truncated, 복사 아이콘 |
| Type | training / inference / utility 뱃지 |
| Runtime | runtime 뱃지 |
| Model | model 이름 + version 태그 |
| Queue | queue_name |
| Backend | selected_backend 뱃지 |
| Priority | 숫자 |
| Duration | 실행/대기 시간 |
| Pipeline | pipeline 이름 링크 (있으면), 없으면 "-" |
| Status | 상태 뱃지 (색상 + 텍스트) |

- 행 클릭 시 Job Detail Drawer 열림
- 기본 정렬: created_at desc
- 페이지네이션 (cursor 기반)

---

## Job Detail Drawer

행 클릭 시 오른쪽에서 슬라이드되는 상세 패널.

### Drawer 상단

- Job ID (전체, 복사 버튼)
- Status 뱃지 (큰 사이즈)
- 액션 버튼 (상태에 따라 표시):
  - Queued: **Cancel**, **Reprioritize**
  - Running: **Cancel**
  - Failed: **Retry**, **Clone**
  - Succeeded: **Clone**
  - Cancelled: **Clone**

### Drawer 본문 탭

#### Summary

- Job ID, Type, Runtime, Task Type, Recipe
- Model (링크) / Version (링크)
- Priority, Queue, Backend (selected_backend)
- **Pipeline** (링크, 있으면 표시)
- **Base Checkpoint** (model version 링크, 있으면 표시)
- Worker (링크), Node, Assigned GPUs
- Created / Started / Finished 시각
- Total Duration

#### Routing

- Selected Backend, Execution Mode, Accelerator
- Routing Reason (설명 텍스트)
- Routing Reason Code (코드)
- Fallback Applied (boolean + 사유)
- Policy Rule ID (있으면)

#### Timeline

- Job 상태 전이 이력을 세로 타임라인으로 표시
- 각 항목: 상태 뱃지, 전이 시각, (실패/취소 사유)

#### Attempt History

- 시도별 테이블: Attempt #, Worker, Node, GPU, Backend, Duration, Status, Failure Code
- 행 클릭 시 해당 attempt의 Peak VRAM, routing reason 인라인 표시

#### Error Trace

- Failed / timed_out 상태일 때만 표시
- Failure Code, Failure Message
- Stack Trace (있으면 코드 블록)

#### Metrics

- Peak VRAM (MB), Runtime (ms), GPU 사용 시간

#### Artifacts

- Input Artifacts: storage URI, artifact_type, 크기
- Output Artifacts: storage URI, artifact_type, 크기
- 각 URI: 복사 버튼

---

## 주요 인터랙션

- **"+ New Job" 클릭**: New Job 모달 열림
- **탭 클릭**: status 필터 즉시 적용
- **Filter Bar 변경**: 테이블 즉시 갱신
- **행 클릭**: Job Detail Drawer 열림
- **Cancel 클릭**: 확인 다이얼로그 ("이 job을 취소하시겠습니까?") → 취소 → 토스트
- **Retry 클릭**: 확인 다이얼로그 → 재시도 job 생성 → 토스트
- **Clone 클릭**: New Job 모달이 기존 설정 사전 입력된 상태로 열림 (Step 4 시작)
- **Reprioritize 클릭**: 숫자 입력 다이얼로그 → 저장 → 토스트
- **Pipeline 링크 클릭**: Training Pipeline 페이지 해당 pipeline 상세로 이동
- **Model 링크 클릭**: Models 페이지 해당 model 상세로 이동
- **Worker 링크 클릭**: Workers & GPU 페이지 해당 worker 상세로 이동
- **Running job**: Duration 컬럼 실시간 갱신 (SSE)

## 상태별 화면

- loading: 테이블 스켈레톤 (8행)
- empty (필터 결과 없음): "No jobs match the current filters" + "Reset Filters" 링크
- empty (전체 없음): "No jobs yet" + "+ New Job" 버튼
- SSE 수신 중: Running 탭 job의 duration 자동 갱신
