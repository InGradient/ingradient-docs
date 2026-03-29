# Foundation Runtime

- 문서명: Foundation Runtime
- 목적: DINOv3, embedding extraction, SSL 기반 foundation 모델 runtime의 범위를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `runtime_contract.md`, `../architecture.md`

## 목적

Foundation runtime은 DINOv3, self-supervised learning(SSL) 기반 backbone 학습, embedding 추출, downstream task 초기화를 지원한다. v2 (Phase 5)에서 구현한다.

## 지원 모델

| 모델 | 프레임워크 | 작업 |
|------|-----------|------|
| DINOv3 계열 backbone | timm, torch | embedding extraction, SSL training |
| Lightly/lightly-train | lightly | self-supervised training |
| timm backbone | timm | pretrained initialization |

## 지원 작업

| task_type | 설명 |
|-----------|------|
| `embedding_extraction` | 이미지에서 feature vector 추출 |
| `ssl_training` | self-supervised 학습 |
| `backbone_fine_tuning` | downstream task용 backbone fine-tuning |

## Runtime Contract 구현

- `can_accept`: runtime=foundation, GPU 가용 확인
- `prepare_model`: backbone checkpoint 로드
- `prepare_inputs`: 이미지 전처리
- `execute`: embedding extraction 또는 SSL training
- `collect_metrics`: loss, similarity metrics
- `persist_outputs`: embedding vectors, checkpoint 저장
- `cleanup`: GPU 메모리 해제

## 사용 시나리오

### Embedding Extraction

1. foundation model 선택 (DINOv3 backbone)
2. 이미지 세트를 입력으로 지정
3. inference job 실행 → embedding vectors 저장

### Backbone으로 Downstream 학습

1. pretrained backbone을 base_checkpoint_ref로 지정
2. detection 또는 segmentation recipe와 함께 training job 생성
3. backbone은 initialization seed로 사용

## 실행 환경

- GPU 필수
- 대형 모델은 exclusive mode 권장
- `foundation-train-pool`에서 실행

## v2 범위 (Phase 5)

- DINOv3 embedding extraction
- Lightly SSL training
- backbone checkpoint 등록 및 downstream 연결

## 관련 문서

- `runtime_contract.md`, `model_registry_and_byom.md`
