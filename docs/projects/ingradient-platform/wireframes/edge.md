# Edge

## 전체 레이아웃 (`/edge`)

```
┌──────────────────────────────────────────────────────┐
│ Edge                                                 │
│ Create project files for Edge devices and import     │
│                                                      │
│ [Work Options] [Export Project File] [Import Results] │
├──────────────────────────────────────────────────────┤
```

## Work Options 탭

```
│ Work Options                                         │
│                                                      │
│ ☑ Require labeling                                  │
│   작업자가 라벨링을 완료해야 다음 이미지로 진행         │
│                                                      │
│ Minimum bbox count  [1   ]                          │
│   이미지당 최소 바운딩 박스 수                          │
│                                                      │
│ ☑ Block next without labeling                       │
│   라벨 없으면 다음 진행 UI 차단                        │
│                                                      │
│ ☐ Block preview without labeling                    │
│   라벨 없으면 미리보기 차단                            │
│                                                      │
│ (변경 시 자동 저장)                                    │
```

## Export Project File 탭

```
│ Export Project File                                  │
│                                                      │
│ Project: ingradient-demo                             │
│ Datasets: 3 (Train-v1, Val-v1, Test-v1)            │
│ Classes: 4                                           │
│ Users: 2                                             │
│                                                      │
│ Valid days  [30  ]                                   │
│                                                      │
│ [Export .ige]                                        │
│                                                      │
│ ─── Export History ───                               │
│ v3  2026-03-28 14:00  12.4 MB  [⬇ Download]        │
│ v2  2026-03-25 09:30  11.8 MB  [⬇ Download]        │
│ v1  2026-03-20 16:00  10.2 MB  [⬇ Download]        │
```

## Import Results 탭

```
│ Import Results                                       │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │                                                  │ │
│ │     📁 Drop result file here                    │ │
│ │        or click to select                       │ │
│ │                                                  │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ─── Import Progress (진행 중) ───                    │
│ Status: Validating...                                │
│ ████████████░░░░░░░░  62%                           │
│                                                      │
│ ─── Import Report ───                                │
│ Total: 450  Imported: 430  Overwritten: 12  Failed: 8│
│ Errors:                                              │
│  - image_042.jpg: invalid bbox coordinates           │
│  - image_089.jpg: unknown class_id 99               │
```
