# New Job (Job 생성)

## 진입 경로

- Jobs 페이지 "+ New Job" 버튼 클릭
- Models detail drawer "Train" 버튼 클릭 (model + pretrained 사전 선택 → Step 3 또는 4로 바로 이동)
- Job detail drawer "Clone" 버튼 클릭 (모든 설정 사전 입력 → Step 4로 바로 이동)

## 전체 흐름

Progressive Disclosure Wizard. 왼쪽 step 표시 + 오른쪽 content. 선택하면 자동으로 다음 step 진행.

```
┌──────────────┬─────────────────────────────────────┐
│ ① Task     ✓ │                                     │
│   Obj. Det.  │  현재 step의 카드 선택지              │
│ ② Model   ● │                                     │
│ ③ Pretrained │                                     │
│ ④ Data       │                                     │
│ ⑤ Settings   │                                     │
│              │                                     │
│ [Cancel]     │                                     │
└──────────────┴─────────────────────────────────────┘
```

---

## Step 1 — Task

제목: "어떤 작업을 하시겠습니까?"

카드 선택지:

| 카드 | 설명 |
|------|------|
| 🎯 Object Detection | bbox 기반 객체 탐지 |
| 🔍 Anomaly Detection | 비지도 이상 탐지 (히트맵) |
| 🧠 Pretraining | Backbone 사전학습 / 증류 |
| ⚙️ Preprocessing | 이미지 전처리 / 내보내기 |

선택 시 → Step 2로 자동 이동

## Step 2 — Model

제목: "{Task} — 모델 선택"

Task에 따라 선택지가 달라진다:

**Object Detection:**

| 카드 | 설명 | Recipe |
|------|------|--------|
| YOLO v8 | Ultralytics — 빠른 추론, 실시간 탐지 | `yolo-train` |
| LTDETR | Lightly Train DETR — backbone 기반, 정확도 우선 | `ltdetr-train` |

**Anomaly Detection:**

| 카드 | 설명 | Recipe |
|------|------|--------|
| Dinomaly | DINOv2/v3 기반 — 정상 이미지만으로 이상 탐지 | `dinomaly-train` |

**Pretraining:**

| 카드 | 설명 | Recipe |
|------|------|--------|
| Lightly SSL | Self-Supervised Learning backbone 학습 | `lightly-ssl-train` |
| Distillation | Teacher → Student 지식 증류 | `lightly-distill-train` |

**Preprocessing:**

| 카드 | 설명 | Recipe |
|------|------|--------|
| Preprocessing | 이미지 리사이즈, 포맷 변환 | `preprocess-images` |

선택 시 → Step 3로 이동 (Preprocessing은 Step 3 건너뛰고 Step 4로)

## Step 3 — Pretrained Model / Encoder / Backbone

**핵심: Model에 따라 이 step의 라벨, 설명, 선택지, 필수 여부가 달라진다.**

| 선택한 Model | Step 3 라벨 | 필수 여부 | 선택지 |
|-------------|------------|-----------|--------|
| YOLO v8 | Pretrained Weights | 선택 | From scratch, YOLOv8n, YOLOv8s, YOLOv8m |
| LTDETR | Backbone | 선택 | From scratch, DINOv3, DINOv3 (SSL fine-tuned), ResNet50 (timm) |
| Dinomaly | Encoder (Frozen) | **필수** | DINOv2 ViT-B/14, DINOv2 ViT-L/14, DINOv3 ViT-B/14 |
| Lightly SSL | Base Backbone | 선택 | Random init, DINOv3, ResNet50 (timm) |
| Distillation | Teacher Model | **필수** | DINOv3 ViT-L/14, DINOv2 ViT-L/14 |
| Preprocessing | _(건너뜀)_ | — | — |

각 카드에 모델명 + 1줄 설명 표시.

선택 시 → Step 4로 이동

## Step 4 — Data

제목: "데이터 설정"

**Input Data** (탭 전환):
- Cloud Storage: `gs://`, `s3://` 경로 입력
- 로컬 경로: 서버 파일시스템 경로 (`/data/datasets/...`)
- 파일 업로드: 드래그&드롭 또는 클릭 업로드

**Output** (탭 전환):
- Cloud Storage: `gs://`, `s3://` 경로 입력
- 로컬 경로: 서버 파일시스템 경로 (`/data/outputs/...`)

"다음" 버튼 → Step 5로 이동

## Step 5 — Settings

제목: "실행 설정"

요약 표시: "{Task} → {Model} → {Pretrained}" (이전 선택 결과)

- **Priority** 드롭다운: Critical / High / Normal / Low
- **GPU** 드롭다운:
  - Auto (빈 GPU 자동 배정) — 기본값. 빈 GPU가 있으면 바로 실행
  - GPU:0 / GPU:1 / ... / GPU:N — 특정 GPU 지정. 해당 GPU가 사용 중이면 대기
  - 선택 아래에 설명 표시: Auto → "빈 GPU가 있으면 바로 실행됩니다" / GPU:N → "GPU:N에서만 실행됩니다. 해당 GPU가 사용 중이면 대기합니다"

"Create Job" 버튼 → 생성 → 모달 닫힘 + 토스트

---

## 왼쪽 사이드바 동작

- 각 step에 번호 + 라벨 표시
- 완료된 step: ✓ 표시 + 선택 결과 요약 (예: "Object Detection", "LTDETR", "DINOv3")
- 완료된 step 클릭 → 해당 step으로 돌아가 수정 가능
- 미완료 step: 비활성화 (클릭 불가)
- Preprocessing 선택 시 Step 3은 사이드바에서 숨김

## Models/Clone에서 진입 시

- Models "Train" → model + pretrained 사전 선택, Step 4(Data)부터 시작
- Clone → 모든 설정 사전 입력, Step 4(Data)부터 시작

## 상태별 화면

- 각 step: 카드 그리드 표시
- 필수 step 미선택: 다음 step 진행 불가
- 생성 중: "Create Job" 버튼 로딩
- 생성 실패: 에러 토스트 + 모달 유지
