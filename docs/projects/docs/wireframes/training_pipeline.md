# Training Pipeline

## 진입 경로

- Left Nav "Training Pipeline" 클릭
- Jobs detail drawer의 Pipeline 링크 클릭
- Models detail drawer의 Lineage 탭에서 Pipeline 링크 클릭

## 화면 구조

### Pipeline 목록 뷰 (기본)

- 페이지 제목 "Training Pipeline"
- 오른쪽: **"+ New Pipeline"** 버튼 → New Pipeline 모달

**Pipeline 테이블:**

| 컬럼 | 설명 |
|------|------|
| Name | pipeline 이름 |
| Status | 상태 뱃지 (draft / running / completed / failed / partially_completed / cancelled) |
| Steps | "N / M completed" |
| Progress | 진행 바 (completed steps / total steps) |
| Last Run | 마지막 실행 시각 (상대 시간) |
| Final Model | 마지막 step 산출물 ModelVersion 링크 (완료 시) |
| Created | 생성 시각 |

- 행 클릭 시 Pipeline Detail 뷰로 전환
- running 상태 row: 파란 테두리 + 진행 바 애니메이션

---

### Pipeline Detail 뷰

행 클릭 시 전체 페이지를 상세 뷰로 전환 (drawer가 아닌 페이지 교체).

**Detail 상단:**

- "← All Pipelines" 뒤로가기 링크
- Pipeline 이름 (큰 제목)
- Status 뱃지, Created 시각, 마지막 실행 시각
- 액션 버튼:
  - draft / failed: **Run** (첫 번째 미완료 step부터)
  - running: **Cancel**
  - 모든 상태: **Run All** (처음부터 전체 재실행), **Clone**, **Delete**

**시각적 흐름도 (Step Graph):**

- step 노드를 왼쪽→오른쪽 순서로 나열
- 각 노드:
  - Step 번호 (#1, #2, ...)
  - Step 이름
  - Status 뱃지 (pending / running / completed / failed / skipped)
  - completed: 초록 + 체크 아이콘
  - running: 파란 + 펄싱 애니메이션
  - failed: 빨간 + 에러 아이콘
  - pending: 회색
- 노드 간 연결 화살표 (→)
- `base_checkpoint_ref = previous_step_output` 인 연결: 굵은 화살표 + "checkpoint" 레이블
- 노드 클릭 시 Step Detail 패널 (오른쪽 사이드 패널) 열림

---

### Step Detail 패널

step 노드 클릭 시 오른쪽에서 슬라이드되는 패널.

**패널 상단:**

- Step # 및 이름
- Status 뱃지
- 액션 버튼 (상태에 따라):
  - pending (이전 step 완료): **Run This Step**
  - completed / failed: **Edit Step**
  - running: (없음)

**패널 본문:**

**설정 섹션:**
- Recipe, Runtime, Model (링크)
- base_checkpoint_ref:
  - `previous_step_output`: "← Step N 산출물 자동 연결" (N = 이전 step 번호)
  - 직접 지정: ModelVersion 링크
  - 없음: "-"
- Input Artifacts: storage URI 목록
- Execution Config: GPU count, VRAM class, priority

**실행 결과 섹션 (실행된 경우):**
- Job ID 링크
- Started / Finished 시각, Duration
- Output Model Version 링크 (완료된 경우)

**에러 섹션 (실패한 경우):**
- Failure Code, Failure Message

---

### New Pipeline 모달

**1단계 — 기본 정보:**
- Pipeline 이름 입력 (필수)
- 템플릿 선택 (선택 시 step 사전 입력):
  - Lightly SSL → LTDETR Detection
  - Lightly Distillation → LTDETR Detection
  - timm Backbone → LTDETR Detection
  - Lightly SSL → Dinomaly
  - Lightly Distillation → Dinomaly
  - 직접 구성 (빈 상태)

**2단계 — Step 구성:**
- 각 step 카드 (순서 변경 가능, 드래그 핸들):
  - Step 이름
  - Recipe 선택
  - Runtime 선택
  - Model 선택
  - base_checkpoint_ref 선택: "이전 step 산출물" / "직접 선택" (ModelVersion picker) / "없음"
  - Input Artifacts (storage URI 입력)
  - Execution Config (GPU count, VRAM class, priority)
- **"+ Add Step"** 버튼 (step 추가)
- step 카드 우측 상단: 삭제(×) 버튼

**하단 버튼:**
- "Save as Draft" — 저장만 (실행 안 함)
- "Save & Run" — 저장 후 즉시 첫 step 실행

---

## 주요 인터랙션

- **Pipeline 행 클릭**: Pipeline Detail 뷰로 전환
- **Step 노드 클릭**: Step Detail 패널 열림
- **Run 클릭**: 실패/미완료 step부터 순차 실행 시작 → status 갱신
- **Run All 클릭**: 확인 다이얼로그 ("기존 산출물을 무시하고 처음부터 재실행합니다") → 전체 재실행
- **Run This Step 클릭**: 해당 step만 단독 실행 (이전 step 산출물 존재 확인 후 활성화)
- **Cancel 클릭**: 확인 다이얼로그 → pipeline 취소 → 실행 중 job에 cancel signal
- **Delete 클릭**: 확인 다이얼로그 ("이 파이프라인과 모든 설정이 삭제됩니다") → 삭제
- **Edit Step 클릭**: step 카드를 인라인 편집 모드로 전환
- **Job ID 링크 클릭**: Jobs 페이지 해당 job 상세로 이동
- **Model Version 링크 클릭**: Models 페이지 해당 version 상세로 이동

## 상태별 화면

- loading: 테이블 스켈레톤, 흐름도 스켈레톤
- 목록 empty: "생성된 파이프라인이 없습니다" + "+ New Pipeline" 버튼
- running step: 해당 노드 파란 펄싱 + Step Detail 패널 자동 열림 (선택된 경우)
- failed step: 빨간 노드 + 에러 아이콘 + Step Detail 패널에 에러 섹션 표시
- 모두 completed: 흐름도 전체 초록 + "Pipeline Completed" 배너
