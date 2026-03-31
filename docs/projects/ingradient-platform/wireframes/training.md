# 학습

## 전체 레이아웃 (`/training`)

헤더 + 2-패널 (목록 + 상세).

```
┌──────────────────────────────────────────────────────────┐
│ Training                              [+ New Model]      │
│ Train and evaluate AI models with your datasets          │
├──────────────────────┬───────────────────────────────────┤
│ 🔍 Search models     │  Model-A (YOLOv8)                │
│ [Status ▾] [Active ▾]│  Running • GPU 0 • Epoch 45/100  │
│                      │  ┌─────────────────────────────┐  │
│ ┌──────────────────┐ │  │ [Info] [Logs] [Eval] [📊]  │  │
│ │ 🟢 Model-A       │ │  └─────────────────────────────┘  │
│ │ YOLOv8 • det     │ │                                   │
│ │ Running GPU0 45% │ │  ┌─ Info ────────────────────────┐│
│ └──────────────────┘ │  │ Created    2026-03-28 14:00   ││
│ ┌──────────────────┐ │  │ Elapsed    2h 15m             ││
│ │ 🔵 Model-B       │ │  │ Epochs     45 / 100          ││
│ │ ResNet • cls     │ │  │ Best Acc   0.924              ││
│ │ Completed  98.2% │ │  │ Best Loss  0.042              ││
│ └──────────────────┘ │  │ LR         0.001              ││
│ ┌──────────────────┐ │  │ Batch      16                 ││
│ │ 🔴 Model-C       │ │  │ Optimizer  AdamW              ││
│ │ YOLOv8 • det     │ │  └──────────────────────────────┘│
│ │ Failed           │ │                                   │
│ └──────────────────┘ │  Actions: [Clone] [Stop] [🗑]    │
│ ┌──────────────────┐ │                                   │
│ │ ⚪ Model-D       │ │  ┌─ Metrics ─────────────────────┐│
│ │ YOLOv8 • det     │ │  │ Loss ──╲__╱─────────          ││
│ │ Queued #2        │ │  │ Acc  ────────╱──────           ││
│ └──────────────────┘ │  │      train ── eval ──          ││
│                      │  └───────────────────────────────┘│
└──────────────────────┴───────────────────────────────────┘
```

### 좌측 — 모델 목록

각 모델 카드:
- 상태 표시등 (🟢 Running, 🔵 Completed, 🔴 Failed, ⚪ Queued/Draft)
- 모델 이름
- 아키텍처 + task 타입
- 상태 / GPU / 진행률 또는 최종 메트릭

### 우측 — 모델 상세

**탭:**

| 탭 | 내용 |
|----|------|
| Info | 생성일, 경과 시간, epochs, 메트릭 요약, 하이퍼파라미터, 액션 버튼 |
| Logs | 실시간 학습 로그 스트리밍 (스크롤) |
| Eval | 테스트 이미지 + 예측 결과 (bbox + 신뢰도), 페이지네이션 |
| 📊 Insights | 손실 곡선, 정확도 곡선, Confusion matrix 히트맵, 클래스별 F1 |

### 새 모델 생성 모달

```
┌───────────────────────────────────────┐
│ Create Training Model                 │
│                                       │
│ Name    [Model-E                    ] │
│ Task    ○ Detection  ○ Classification │
│                                       │
│ Datasets                              │
│ Train  ☑ Train-v1  ☐ Train-v2        │
│ Val    ☑ Val-v1                       │
│ Test   ☑ Test-v1                      │
│                                       │
│ Hyperparameters                       │
│ Epochs  [100]  Batch [16]  LR [0.001]│
│ Optimizer [AdamW ▾]  ImgSize [640]   │
│ Channels  ○ 1  ○ 3                   │
│ ☐ Early stopping                     │
│                                       │
│ [Cancel]              [Create]        │
└───────────────────────────────────────┘
```
