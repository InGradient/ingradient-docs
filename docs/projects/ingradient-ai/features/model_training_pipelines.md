# Model Training Pipelines

- 문서명: Model Training Pipelines
- 목적: 여러 단계를 거쳐 모델을 조합하는 multi-step 학습 파이프라인을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `model_training_combinations.md`, `recipe_management.md`, `foundation_runtime.md`

## 목적

backbone 사전학습 → downstream detection 학습처럼 **여러 Job을 순차 실행하여 모델을 조합하는 파이프라인**을 정의한다. 각 단계는 독립 Job이며, 이전 산출물을 `base_checkpoint_ref`로 다음 단계에 연결한다.

단일 학습(A1~A3)은 `model_training_combinations.md` 참조.

---

## B1. Lightly SSL → LTDETR Detection

Lightly Train SSL로 DINOv3 backbone을 사전학습 → 그 backbone 위에 DETR detection head 학습.

**Step 1 — DINOv3 Backbone SSL 사전학습:**

| 항목 | 값 |
|------|-----|
| Runtime | foundation |
| Recipe | `lightly-ssl-train` |
| Adapter | lightly |
| 입력 | 라벨 없는 이미지 데이터셋 (대량) |
| 산출물 | DINOv3 backbone checkpoint |

**Step 2 — LTDETR Detection 학습:**

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `ltdetr-train` |
| Adapter | lightly |
| 입력 | 라벨링된 이미지 데이터셋 |
| base_checkpoint_ref | Step 1의 DINOv3 backbone |
| 산출물 | LTDETR detection 모델 |

```
라벨 없는 이미지 → [lightly-ssl-train] → DINOv3 backbone
                                              ↓ (base_checkpoint_ref)
라벨링된 이미지 ──→ [ltdetr-train] ──────→ LTDETR Detection 모델
```

Phase: foundation v2 + detection v1.5

---

## B2. Lightly Distillation → LTDETR Detection

Teacher 모델의 지식을 DINOv3 backbone에 증류(distillation) → 그 backbone으로 DETR detection 학습.

**Step 1 — DINOv3 Backbone Distillation 사전학습:**

| 항목 | 값 |
|------|-----|
| Runtime | foundation |
| Recipe | `lightly-distill-train` |
| Adapter | lightly |
| 입력 | 이미지 데이터셋 + teacher 모델 참조 |
| 산출물 | Distilled DINOv3 backbone checkpoint |

**Step 2 — LTDETR Detection 학습:**

| 항목 | 값 |
|------|-----|
| Runtime | detection |
| Recipe | `ltdetr-train` |
| Adapter | lightly |
| 입력 | 라벨링된 이미지 데이터셋 |
| base_checkpoint_ref | Step 1의 Distilled DINOv3 backbone |
| 산출물 | LTDETR detection 모델 |

```
이미지 + teacher 모델 → [lightly-distill-train] → Distilled DINOv3 backbone
                                                        ↓ (base_checkpoint_ref)
라벨링된 이미지 ────────→ [ltdetr-train] ──────────→ LTDETR Detection 모델
```

Phase: foundation v2 + detection v1.5

---

## B3. timm Pretrained Backbone → LTDETR Detection

timm ImageNet pretrained backbone을 가져와 LTDETR detection 학습에 사용.

- **Step 1**: Model Registry에 timm backbone 등록 (source_type: foundation_pretrained, 학습 Job 아님)
- **Step 2**: `ltdetr-train` / lightly adapter / base_checkpoint_ref = timm backbone

```
timm pretrained backbone (registry 등록)
            ↓ (base_checkpoint_ref)
라벨링된 이미지 → [ltdetr-train] → LTDETR Detection 모델
```

Phase: detection v1.5

---

## B4. timm → Lightly SSL → LTDETR Detection

timm backbone을 초기값으로 Lightly SSL 학습 → 그 결과로 LTDETR detection 학습. 3단계 파이프라인.

- **Step 1**: `lightly-ssl-train` / lightly adapter / base_checkpoint_ref = timm backbone / 라벨 없는 이미지 → SSL backbone
- **Step 2**: `ltdetr-train` / lightly adapter / base_checkpoint_ref = Step 1 SSL backbone / 라벨링된 이미지 → LTDETR detection

```
timm backbone + 라벨 없는 이미지 → [lightly-ssl-train] → SSL backbone
                                                              ↓
라벨링된 이미지 ───────────────────→ [ltdetr-train] ───→ LTDETR Detection 모델
```

Phase: foundation v2 + detection v1.5

---

## C1. Lightly SSL → Dinomaly Anomaly Detection

B1과 동일하게 SSL로 DINOv3 backbone 사전학습 후, LTDETR 대신 Dinomaly로 이상 탐지 학습.

- **Step 1**: B1 Step 1과 동일 (`lightly-ssl-train` → DINOv3 backbone)
- **Step 2**: `dinomaly-train` / dinomaly adapter / 정상 이미지만 / base_checkpoint_ref = Step 1 backbone (frozen encoder)

```
라벨 없는 이미지 → [lightly-ssl-train] → DINOv3 backbone
                                              ↓ (frozen encoder)
정상 이미지 ────→ [dinomaly-train] ────→ Anomaly Detection 모델
```

Phase: foundation v2 + detection v2

---

## C2. Lightly Distillation → Dinomaly Anomaly Detection

B2와 동일하게 Distillation으로 DINOv3 backbone 학습 후, Dinomaly로 이상 탐지 학습.

- **Step 1**: B2 Step 1과 동일 (`lightly-distill-train` → Distilled DINOv3 backbone)
- **Step 2**: `dinomaly-train` / dinomaly adapter / 정상 이미지만 / base_checkpoint_ref = Step 1 backbone (frozen encoder)

```
이미지 + teacher → [lightly-distill-train] → Distilled DINOv3 backbone
                                                   ↓ (frozen encoder)
정상 이미지 ──────→ [dinomaly-train] ──────→ Anomaly Detection 모델
```

Phase: foundation v2 + detection v2

---

## Distillation + YOLO에 대한 참고

YOLO는 자체 backbone 구조를 가지므로 외부 backbone을 직접 교체할 수 없다. 외부 backbone(DINOv3 등)을 활용한 detection이 필요하면 **LTDETR 경로(B1~B4)**를 사용한다.

YOLO는 자체 pretrained weight 기반의 fine-tuning만 지원한다 (A2 참조).

---

## 파이프라인 실행 규칙

| 규칙 | 설명 |
|------|------|
| Job 단위 실행 | 각 Step은 독립적인 Job으로 생성. 하나의 Job에서 여러 model 동시 학습 불가 |
| 수동 연결 (v1) | 운영자가 Step 1 완료 후 산출물을 확인하고, Step 2 Job 생성 시 `base_checkpoint_ref`를 수동 지정 |
| Registry 등록 | 각 Step의 산출물은 ModelVersion으로 registry에 등록하여 lineage 추적 |
| 검증 | Step 2 시작 전 base_checkpoint의 validation_status 확인 권장 |
| 자동 연결 (v2+) | Job dependency chain으로 Step 자동 연결 검토 예정 |

## 관련 문서

- `model_training_combinations.md` — 단일 학습 및 조합 매트릭스
- `recipe_management.md` — Recipe 정의와 호환성 검증
- `foundation_runtime.md` — SSL, backbone 학습 실행 환경
- `detection_runtime.md` — YOLO, LTDETR 실행 환경
- `model_registry_and_byom.md` — 모델 등록, lineage, BYOM 제약
