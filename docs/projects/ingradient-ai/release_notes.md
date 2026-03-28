# ingradient-ai Release Notes

## Release Policy

`ingradient-ai`는 2026-03-27 기준으로 제품 구현보다 설계와 frontend prototype이 앞선 상태다. 따라서 현재 문서는 production release가 아니라 pre-release milestone 기록으로 관리한다.

## 2026-03-27. Ops Console Frontend Prototype Milestone

### Included

- `Overview`, `Jobs`, `Workers & GPU`, `Models`, `Queues`, `Usage Analytics`, `Events & Alerts`, `Settings` 기준의 운영 콘솔 화면 구조 확정
- `@ingradient/ui` 소비 방식으로 frontend-only prototype 구성
- mock data 기반 list-detail, drawer, KPI, inspector 패턴 검증

### Why It Matters

- 실제 backend 구현 전에 운영 화면 정보 구조를 먼저 고정할 수 있다.
- `ingradient-ui` 재사용성과 AI 콘솔 특화 로직의 경계를 검증할 수 있다.

## 2026-03-27. Model Registry And BYOM Planning Milestone

### Included

- `Model`, `ModelVersion`, `ModelArtifact` 분리 기준 정리
- 내부 학습 모델, 외부 업로드 모델, pretrained checkpoint를 한 registry에서 관리하는 기준 확정
- `inference_only`, `fine_tunable`, `resume_trainable` 사용 모드 정의

### Not Yet Released

- 실제 artifact validator
- runtime compatibility matrix 자동 검증
- production model promotion workflow

## 2026-03-27. Backend Routing And Operations Planning Milestone

### Included

- `self_hosted`, `gke_gpu`, `gke_cpu`, `vertex_*`, `managed_batch` 계열 backend 추상화 정의
- CPU/GPU 실행 선호도, fallback, overflow, external execution 정책 정리
- scheduler, worker health, queue backlog, routing reason 기록 요구사항 정리

### Operational Impact

- job API와 운영 콘솔은 `selected_backend`, `routing_reason`, `selected_accelerator`를 같은 계약으로 다뤄야 한다.
- 외부 backend 허용 여부는 customer policy와 data residency 정책을 통과해야 한다.

## Release Readiness Gap

아래는 아직 tagged release로 보기 어려운 이유다.

- 실제 scheduler/runtime/serving backend 미구현
- production auth, tenancy, artifact storage, audit trail 미완성
- end-to-end integration test 부재

## Source Documents

- `/home/june/workspace/projects/ingradient-ai/docs/plan/README.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_frontend_prototype_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_model_registry_and_byom_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_execution_backend_routing_plan.md`
