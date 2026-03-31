# Models

## 진입 경로

- Left Nav "Models" 클릭
- Overview의 Loaded Models KPI 클릭
- Jobs detail drawer의 Model 링크 클릭

## 화면 구조

### 상단

- 페이지 제목 "Models"
- 3개 탭: Available | Installed | Loaded
  - Available: registry에 등록된 전체 model
  - Installed: 노드에 설치(다운로드)된 model
  - Loaded: GPU에 로딩되어 즉시 사용 가능한 model
- 검색바 (model 이름, runtime, task type으로 검색)
- 필터: Runtime, Task Type, Lifecycle Status, Source Type

---

### Available Models 탭

**테이블 컬럼:**
- Model Name
- Default Version (버전 라벨)
- Runtime (뱃지)
- Task Type
- Framework
- Source Type (뱃지: internal_trained / external_uploaded / foundation_pretrained / provider_managed)
- Usage Mode (뱃지: inference_only / fine_tunable / resume_trainable)
- Lifecycle Status (뱃지: registered / verifying / ready / deprecated / disabled / error)
- GPU Class (요구 사양)
- Created At

**행 클릭** → Model Detail Drawer 열림

---

### Installed Models 탭

**테이블 컬럼:**
- Model Name / Version
- Node (설치된 노드)
- Storage URI
- Checksum (truncated)
- Disk Usage
- Last Used
- Installed At

---

### Loaded Models 탭

**테이블 컬럼:**
- Model Name / Version
- Worker Count (로딩된 worker 수)
- GPU Count (로딩된 GPU 수)
- Warm/Cold Status (뱃지)
- Active Sessions (현재 사용 중인 job 수)
- Memory Footprint (VRAM 사용량)
- Last Inference

---

## Model Detail Drawer

Available 탭에서 행 클릭 시 열리는 상세 패널.

### Drawer 상단

- Model Name (큰 텍스트)
- Lifecycle Status 뱃지
- Runtime 뱃지, Task Type 뱃지
- 액션 버튼:
  - "Train" (fine_tunable/resume_trainable이면 표시) → New Job 모달 열림 (model 사전 선택)
  - "Train with this Backbone" (foundation_pretrained이면 표시) → New Job 모달 열림 (base_checkpoint_ref 사전 입력)
  - "Upload New Version"
  - "Preload" (Available에서)
  - "Unload" (Loaded에서)

### Metadata

- Model ID (전체, 복사 버튼)
- Framework, Adapter Type
- Source Type, Usage Mode
- Inference Capable / Fine-Tuning Capable / Resume Capable (체크/X)
- 호환 Recipe 목록

### Version History 테이블

- 컬럼:
  - Version Label
  - Lifecycle Status (뱃지)
  - Validation Status (뱃지: not_requested / pending / running / passed / failed / warning)
  - Source Type
  - Release Channel (none / staging / experimental)
  - Created By
  - Created At
  - Artifact Checksum (truncated)
- 현재 Default Version 행에 "Default" 뱃지 표시
- 현재 Production Version 행에 "Production" 뱃지 표시
- 각 행의 액션:
  - "Validate" (uploaded/registered 상태일 때)
  - "Promote to Default" (ready 상태일 때)
  - "Rollback" (다른 ready version이 있을 때)
  - "Disable" / "Archive"

### Version Lineage

시각적 다이어그램으로 이 model version이 어떻게 만들어졌는지 표시한다.

```
[timm ResNet50]  →  [lightly-ssl-train]  →  [DINOv3 backbone v2]  →  [ltdetr-train]  →  [현재 model]
 (backbone)          (Job #1234)              (base_checkpoint)        (Job #1289)
```

- 각 노드 클릭 시 해당 model 또는 job으로 이동
- 노드 정보: model name, version, source_type, training job ID
- 단일 학습이면 노드 1~2개, multi-step이면 전체 pipeline 표시
- Base Checkpoint 참조
- Training Job 링크 (내부 학습 결과인 경우)

### Profiling

- 예상 GPU Class
- Peak VRAM (측정값)
- Cold Start Time
- Avg Inference Latency

---

## Upload New Version 모달

"Upload New Version" 클릭 시 열리는 모달.

- Version Label 입력 (필수)
- Artifact URI 입력 (필수 — storage 경로)
- Checksum 입력 (필수)
- Source Type 선택 (internal_trained / external_uploaded / foundation_pretrained)
- Usage Mode 선택 (inference_only / fine_tunable / resume_trainable)
- Base Checkpoint URI (선택 — fine-tuning의 base가 된 model)
- 하단: "Cancel" / "Upload" 버튼

## Promote Confirmation 다이얼로그

"Promote to Default" 클릭 시 표시되는 확인 화면.

- 현재 Default Version: (라벨, 승격 일시)
- 승격 대상 Version: (라벨, 검증 상태)
- 영향 범위: 이후 새 job부터 이 version 사용
- Preload 갱신 필요 여부
- "Cancel" / "Promote" 버튼

## 주요 인터랙션

- **탭 전환**: Available / Installed / Loaded 테이블 전환
- **행 클릭**: detail drawer 열림
- **"Train" 클릭**: New Job 모달 열림 (model/version 사전 선택, 호환 recipe 필터됨)
- **"Train with this Backbone" 클릭**: New Job 모달 열림 (base_checkpoint_ref에 이 model 사전 입력)
- **Lineage 노드 클릭**: 해당 model detail 또는 job detail로 이동
- **"Upload New Version"**: 모달 열림 → 입력 후 "Upload" → 토스트
- **"Validate"**: 확인 다이얼로그 → 검증 실행 → 상태 변경 → 토스트
- **"Promote to Default"**: Promote Confirmation 다이얼로그 → 확인 → 토스트
- **"Rollback"**: 확인 다이얼로그 (이전 stable version 표시) → 롤백 실행 → 토스트
- **"Preload"**: 대상 worker 선택 → 확인 → model 로딩 시작 → 토스트
- **"Unload"**: 확인 다이얼로그 → GPU에서 해제 → 토스트
- **"Disable"**: 확인 다이얼로그 → 비활성화 → 토스트

## 상태별 화면

- loading: 테이블 스켈레톤
- Available empty: "등록된 model이 없습니다" 안내
- Installed empty: "설치된 model이 없습니다" 안내
- Loaded empty: "로딩된 model이 없습니다" 안내
- 검색 결과 없음: "조건에 맞는 model이 없습니다" 안내 + 필터 초기화 버튼
- 검증 실패: failed version은 빨간 뱃지 + 행 강조
