# Training Queue UI

## 목적

Platform의 training 화면은 단순 시작 버튼이 아니라 실험 관리 화면이어야 한다. 사용자는 dataset snapshot, GPU 상태, queue, model 결과를 같은 화면에서 이해해야 한다.

## 화면 구조

- 상단 GPU status / training queue
- 좌측 model list
- 우측 model detail
  - model info
  - training logs
  - evaluation

## training queue 표시 항목

- queue order
- model name
- status
- GPU
- progress
- epoch

## queue 규칙

- queued 상태는 GPU를 점유하지 않는다.
- running 상태만 GPU를 점유한다.
- GPU별 독립 queue 구조를 가진다.
- 앞 작업 종료 시 다음 작업이 자동 실행된다.

## training 준비 규칙

- dataset snapshot을 먼저 만든다.
- train / validation / test dataset을 분리해서 고른다.
- 이미지 타입 기반 필터링을 지원한다.
- 기본적으로 `white`는 학습 제외 추천이다.

## model list에서 보여야 할 것

- model name
- architecture
- dataset
- status
- latest metric
- created date

## 운영상 주의

- training UI는 inference 운영 콘솔과 달리 재현성과 비교 가능성이 중요하다.
- snapshot 없이 직접 dataset를 참조하면 결과 재현성이 깨진다.
- queue 상태와 실제 GPU 점유 상태가 분리돼 보여야 운영자가 혼동하지 않는다.

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`
