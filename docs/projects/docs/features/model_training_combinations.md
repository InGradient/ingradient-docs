# Model Training Combinations

- 문서명: Model Training Combinations
- 목적: 지원 라이브러리별 모델 학습 조합과 multi-step 학습 파이프라인을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `recipe_management.md`, `detection_runtime.md`, `foundation_runtime.md`, `model_training_pipelines.md`

## 목적

AI Platform에서 학습할 수 있는 모델 조합을 정리한다. 단일 모델 학습뿐 아니라, backbone 사전학습 → downstream detection 학습처럼 **여러 단계를 거쳐 모델을 조합하는 파이프라인**을 다룬다.

- 단일 학습: 이 문서
- Multi-step 파이프라인: `model_training_pipelines.md`

## 지원 라이브러리

| 라이브러리 | 역할 | 산출물 |
|-----------|------|--------|
| **Ultralytics** | YOLO 학습/추론 | Detection 모델 (bbox) |
| **Lightly Train** | SSL/Distillation 사전학습, LTDETR 학습/추론 | Backbone checkpoint, Detection 모델 |
| **timm** | Pretrained backbone 제공, backbone fine-tuning | Backbone checkpoint |
| **Dinomaly** | DINOv2/v3 기반 비지도 이상 탐지 학습/추론 | Anomaly Detection 모델 (히트맵) |

## 학습 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| **단일 학습** | 데이터 → 하나의 recipe로 모델 산출 | YOLO train |
| **사전학습 → 학습** | Step 1에서 backbone 산출 → Step 2에서 detection head 학습 | Lightly SSL → LTDETR train |
| **fine-tuning** | 기존 모델을 새 데이터로 추가 학습 | YOLO finetune |
| **resume** | 중단된 학습을 이어서 진행 | YOLO resume |

---

## 단일 모델 학습

### A1. YOLO Detection 학습

데이터셋으로 YOLO 모델을 처음부터 학습한다.

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `yolo-train` |
| Adapter | ultralytics |
| 입력 | 라벨링된 이미지 데이터셋 (COCO/YOLO 포맷) |
| 산출물 | YOLO detection 모델 (bbox) |
| base_checkpoint_ref | 없음 (from scratch) 또는 YOLO pretrained weight |
| Phase | v1.5 |

```
데이터셋 → [yolo-train] → YOLO Detection 모델
```

### A2. YOLO Fine-tuning

기존 YOLO 모델을 새 데이터셋으로 추가 학습한다.

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `yolo-finetune` |
| Adapter | ultralytics |
| 입력 | 라벨링된 이미지 데이터셋 |
| base_checkpoint_ref | 기존 YOLO 모델 version |
| 산출물 | Fine-tuned YOLO 모델 |
| Phase | v1.5 |

```
기존 YOLO 모델 + 새 데이터셋 → [yolo-finetune] → Fine-tuned YOLO 모델
```

### A3. LTDETR Detection 학습

Lightly Train으로 DETR 기반 detection 모델을 학습한다.

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `ltdetr-train` |
| Adapter | lightly |
| 입력 | 라벨링된 이미지 데이터셋 |
| 산출물 | LTDETR detection 모델 |
| base_checkpoint_ref | 없음 (from scratch) 또는 pretrained backbone |
| Phase | v1.5 |

```
데이터셋 → [ltdetr-train] → LTDETR Detection 모델
```

### A4. Dinomaly Anomaly Detection 학습

DINOv2/v3 backbone을 frozen encoder로 사용하여 비지도 이상 탐지 모델을 학습한다. **정상 이미지만으로 학습**하며, 추론 시 이상 영역을 픽셀별 히트맵으로 출력한다.

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `dinomaly-train` |
| Adapter | dinomaly |
| 입력 | 정상 이미지 데이터셋 (라벨 불필요) |
| 산출물 | Anomaly Detection 모델 (bottleneck + decoder weights) |
| base_checkpoint_ref | DINOv2/v3 backbone (frozen encoder로 사용) |
| task_type | `anomaly_detection` |
| Phase | v2 |

```
DINOv2/v3 backbone (frozen) + 정상 이미지 → [dinomaly-train] → Anomaly Detection 모델
```

특징:
- Encoder(DINOv2/v3)는 frozen — bottleneck과 decoder만 학습
- Multi-class 지원: 하나의 모델로 여러 제품 카테고리의 이상 탐지 가능
- 출력: 픽셀별 이상 히트맵 + 이미지 레벨 이상 점수

---

## 조합 요약 매트릭스

| ID | Backbone 출처 | Head | Recipe 흐름 | Phase |
|----|--------------|------|-------------|-------|
| A1 | YOLO 자체 | YOLO | `yolo-train` | v1.5 |
| A2 | 기존 YOLO | YOLO | `yolo-finetune` | v1.5 |
| A3 | LTDETR 자체 | DETR | `ltdetr-train` | v1.5 |
| A4 | DINOv2/v3 (frozen) | Dinomaly decoder | `dinomaly-train` | v2 |
| B1 | Lightly SSL → DINOv3 | DETR | `lightly-ssl-train` → `ltdetr-train` | v2 |
| B2 | Lightly Distill → DINOv3 | DETR | `lightly-distill-train` → `ltdetr-train` | v2 |
| B3 | timm pretrained | DETR | (등록) → `ltdetr-train` | v1.5 |
| B4 | timm → Lightly SSL | DETR | `lightly-ssl-train` → `ltdetr-train` | v2 |
| C1 | Lightly SSL → DINOv3 | Dinomaly decoder | `lightly-ssl-train` → `dinomaly-train` | v2 |
| C2 | Lightly Distill → DINOv3 | Dinomaly decoder | `lightly-distill-train` → `dinomaly-train` | v2 |

B1~B4, C1~C2 상세는 `model_training_pipelines.md` 참조.

## 플랫폼 연결 메커니즘

| 메커니즘 | 용도 |
|----------|------|
| `base_checkpoint_ref` | 이전 단계의 checkpoint를 다음 학습의 초기값으로 사용 |
| `resume_from_model_ref` | 중단된 학습을 이어서 진행 (optimizer/scheduler 상태 포함) |
| Model Registry | 각 단계의 산출물을 ModelVersion으로 등록하여 추적 |
| Lineage Tracking | `training_job_id`, `previous_version_id`로 학습 이력 연결 |

## 추가해야 할 Recipe

기존 `recipe_management.md`에 정의되지 않은 recipe:

| Recipe | Runtime | Adapter | 설명 |
|--------|---------|---------|------|
| `lightly-ssl-train` | foundation | lightly | Lightly Train SSL 사전학습 |
| `lightly-distill-train` | foundation | lightly | Lightly Train Distillation 사전학습 |
| `ltdetr-finetune` | detection | lightly | LTDETR fine-tuning |
| `timm-backbone-finetune` | foundation | timm | timm backbone fine-tuning |
| `dinomaly-train` | detection | dinomaly | Dinomaly 비지도 이상 탐지 학습 |
| `dinomaly-infer` | detection | dinomaly | Dinomaly 이상 탐지 추론 (히트맵 출력) |

추가해야 할 task_type:

| task_type | 설명 |
|-----------|------|
| `anomaly_detection` | 비지도 이상 탐지 (정상/이상 분류 + 픽셀별 히트맵) |

## 제약사항

- **DINOv3 + YOLO 조합은 지원하지 않는다.** DINOv3 backbone에 detection head를 붙이려면 LTDETR 경로를 사용한다
- **하나의 Job에서 두 개 이상의 model을 동시 학습할 수 없다.** Multi-step은 별도 Job으로 순차 실행한다
- **Step 간 자동 연결은 v1에서 지원하지 않는다.** 운영자가 수동으로 `base_checkpoint_ref`를 지정한다
- **BYOM은 지원 adapter/framework 범위 내에서만 가능하다.** 임의 Python 코드나 커스텀 runtime은 불가

## 관련 문서

- `model_training_pipelines.md` — Multi-step 파이프라인 상세
- `recipe_management.md` — Recipe 정의와 호환성 검증
- `detection_runtime.md` — YOLO, LTDETR 실행 환경
- `foundation_runtime.md` — SSL, backbone 학습 실행 환경
- `model_registry_and_byom.md` — 모델 등록, lineage, BYOM 제약
