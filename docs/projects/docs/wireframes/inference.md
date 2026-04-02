# Inference

## 진입 경로

- Left Nav "Inference" 클릭

## 화면 구조

### 상단

- 페이지 제목 "Inference"
- 상태 뱃지: "N GPU Ready" (초록), "N GPU Pending" (노랑, 해당 시)

### GPU 카드 그리드

각 GPU를 카드로 표시한다. GPU별로 inference 모델을 배정할 수 있다.

**카드 구조:**
- GPU 번호 + 모델명 (GPU:0 A100)
- 상태 뱃지:
  - 🟢 **Ready** (초록) — 모델 로딩 완료, inference 요청 대기
  - 🔵 **Training** (파랑) — 현재 training job 실행 중
  - 🟡 **Pending** (노랑) — training 완료 후 inference 전환 예정
  - ⚪ **Idle** (회색) — 아무것도 배정 안 됨
- Training 상태: 실행 중 Job ID + 대기 건수 표시
- Ready 상태: 로딩된 모델명 + 버전 드롭다운 (여러 버전 있을 때)
- Pending 상태: "Training N건 완료 후 inference로 전환 예정" + 예정 모델명 + 버전 선택

**모델 배정 — 검색형 입력 (SearchSelect):**

각 카드에 텍스트 입력 필드가 있다. 클릭하면 드롭다운이 열리고, 타이핑하면 실시간 필터링된다.

| 그룹 | 예시 | Description |
|------|------|-------------|
| 학습 완료 모델 | YOLO-factory-defect, LTDETR-product-line | Job에서 입력한 description 표시 (길면 ... 처리) |
| Interactive Segmentation | SAM 2 Base+, SAM 2 Large, MedSAM 2 | params 크기 표시 |
| 라이브러리 모델 | YOLOv8 Base, DINOv3 ViT-B/14 | pretrained 정보 표시 |

모델 선택 후 버전이 여러 개면 모델명 옆에 **버전 드롭다운** 표시. 기본값은 최신 버전.

**배정 규칙:**
- Idle GPU에 배정 → 즉시 Ready로 전환
- Training GPU에 배정 → Pending (모든 training 완료 후 자동 전환)
- Release → GPU가 training 대기열에서 다시 사용 가능

**"Release" 버튼:**
- Ready 상태일 때 표시
- 클릭 시 모델 해제, GPU를 training용으로 복원

### 하단 — 규칙 안내

카드 영역으로 배정 규칙을 설명한다:
- Idle GPU → 즉시 inference 전환
- Training/Pending GPU → 모든 training 완료 후 자동 전환
- Release → training 대기열 복귀
- Training에서 특정 GPU 지정 시 → inference 끝난 후 training 시작

## 주요 인터랙션

- **모델 검색/선택**: 텍스트 입력으로 필터링, 그룹별 목록에서 선택
- **버전 드롭다운**: 모델 선택 후 원하는 버전 선택 (기본: 최신)
- **"Release" 클릭**: 모델 해제 + GPU를 training용으로 복원
- **GPU 카드의 Job ID 링크**: Training 페이지 해당 job 상세로 이동

## 상태별 화면

- loading: GPU 카드 스켈레톤
- 모든 GPU Idle: "Assign a model to start inference" 안내
- 모든 GPU Training: 각 카드에 training 상태 표시, 모델 배정 시 Pending으로 전환
