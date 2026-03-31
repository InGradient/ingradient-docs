# 모델 라이브러리

## 전체 레이아웃 (`/models`)

```
┌──────────────────────────────────────────────────────┐
│ AI Models                                            │
│ Download pre-trained models and assign to features   │
│                                                      │
│ [Assignments] [Model Library]                        │
├──────────────────────────────────────────────────────┤
```

## Assignments 탭

```
│ Task Assignments                                     │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Object Detection                                 │ │
│ │ Model for auto-labeling bounding boxes           │ │
│ │ Assigned: [YOLOv8n ▾]                           │ │
│ └──────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Classification                                   │ │
│ │ Model for auto-labeling image categories         │ │
│ │ Assigned: [Not assigned ▾]                      │ │
│ └──────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ UMAP Embedding                                   │ │
│ │ Model for dimensionality reduction visualization │ │
│ │ Assigned: [ResNet50-features ▾]                 │ │
│ └──────────────────────────────────────────────────┘ │
```

## Model Library 탭

```
│ Object Detection                                     │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐          │
│ │ YOLOv8n   │ │ YOLOv8s   │ │ YOLOv8m   │          │
│ │ 6.2 MB    │ │ 21.5 MB   │ │ 49.7 MB   │          │
│ │ Fast      │ │ Balanced  │ │ Accurate  │          │
│ │ ✓ Downloaded│ │ [Download]│ │ [Download]│          │
│ │ [🗑 Delete]│ │           │ │           │          │
│ └───────────┘ └───────────┘ └───────────┘          │
│                                                      │
│ Classification                                       │
│ ┌───────────┐ ┌───────────┐                         │
│ │ ResNet18  │ │ ResNet50  │                         │
│ │ 44.7 MB   │ │ 97.8 MB   │                         │
│ │ [Download]│ │ ████░ 62% │                         │
│ └───────────┘ └───────────┘                         │
```

### 인터랙션

- 다운로드 클릭 → 진행률 바 표시
- 다운로드 완료 → "✓ Downloaded" + 삭제 버튼
- 다운로드 중 → 취소 버튼
- 에러 시 → 상단 Danger Alert
