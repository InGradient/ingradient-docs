# Models

## 진입 경로

- Left Nav "Models" 클릭

## 화면 구조

페이지는 2개 섹션으로 나뉜다: Trained Models → Downloaded Models.

---

### 상단 — 🧠 Trained Models

Training에서 학습 완료된 모델 목록.

- 섹션 제목: "🧠 Trained Models" + 건수 뱃지
- 테이블 컬럼:
  - Name (모델 이름, 굵게)
  - Description (길면 ... 처리)
  - Task (뱃지: Object Detection / Anomaly Detection / Pretraining)
  - Framework (Ultralytics / Lightly Train / Dinomaly)
  - Versions (버전 수)
  - Latest (최신 버전 번호)
  - Created (생성일)
- 행 클릭 시 Detail Drawer 열림

---

### 하단 — 📦 Library Models

Ultralytics, timm, torch hub 등 라이브러리에서 제공하는 pretrained 모델 목록. 다운로드 상태 관리 및 디스크 용량 관리용.

- 섹션 제목: "📦 Library Models" + 총 모델 수 · 다운로드 수 · 총 용량 뱃지
- 테이블 컬럼:
  - File (파일명, monospace)
  - Source (Ultralytics / timm / Meta 등)
  - Size (용량 + 다운로드 상태면 바 차트)
  - Status (뱃지: "Downloaded" 초록 / "Not downloaded" 회색)
  - Last Used (마지막 사용일, 미다운로드면 —)
  - Used By (이 모델을 사용하는 training/inference 이름, 미다운로드면 —)
  - 액션 버튼:
    - Downloaded 상태: **Delete** (빨간, 로컬에서 삭제)
    - Not downloaded 상태: **Download** (파란, 로컬에 다운로드)

### 구분선

두 섹션 사이에 구분선 표시.

---

## Detail Drawer (Trained Model)

Trained Models 행 클릭 시 열리는 상세 패널.

### Drawer 상단

- 모델 이름 (큰 텍스트)
- Description
- Task 뱃지 + Framework 뱃지
- 닫기 (✕) 버튼

### 정보

- Created (생성일)
- Total Versions (버전 수)

### Lineage

이 모델이 어떻게 만들어졌는지 시각적 다이어그램.

```
[DINOv2 ViT-B/14] → [dinomaly-train] → [Dinomaly-MVTec-custom]
 (backbone)           (recipe)           (현재 모델)
```

- 각 노드 클릭 가능 (해당 모델/training으로 이동)
- 단일 학습이면 노드 1개만 표시
- multi-step이면 전체 경로 표시

### Version History

- 버전별 행: v5, v4, v3... (최신 순)
- 최신 버전에 "Latest" 뱃지
- 각 버전의 생성일 표시

## 주요 인터랙션

- **Trained Model 행 클릭**: Detail Drawer 열림 (lineage, 버전 이력)
- **Downloaded Model ⋯ → Delete**: 로컬 파일 삭제 (재다운로드 가능 안내)
- **Lineage 노드 클릭**: 해당 모델/training으로 이동

## 상태별 화면

- loading: 테이블 스켈레톤
- Trained Models empty: "No trained models yet. Start a training job to create one." 안내
- Library Models: 항상 전체 목록 표시 (다운로드 여부와 무관)
- Delete 후: status가 "Not downloaded"로 변경 + 총 용량 갱신 + 버튼이 "Download"로 변경
- Download 후: status가 "Downloaded"로 변경 + 버튼이 "Delete"로 변경
