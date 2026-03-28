# Execution Routing Policy

- 문서명: Execution Routing Policy
- 목적: 어떤 실행을 어디에서 수행할지 정의한다.
- 적용 범위: training, inference, batch, edge-assisted execution
- 상태: Draft
- Owner: AI Platform
- Reviewer: Infra / Edge Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `resource_cost_policy.md`, `../architecture/deployment_architecture.md`

## 라우팅 목적
- 성능, 비용, 데이터 locality, 자원 가용성을 함께 최적화한다

## 입력 조건
- training or inference
- realtime or batch
- cpu or gpu requirement
- data locality and customer environment

## 실행 위치 결정 규칙
- inference는 IDC GPU를 우선, 필요 시 cloud GPU fallback
- training은 IDC GPU를 우선, overflow 시 cloud GPU 검토
- edge-local inference는 네트워크 의존성을 줄이기 위한 예외 경로로 둔다

## fallback 규칙
- GPU 불가 시 cloud GPU
- cloud GPU 불가 시 가능한 작업만 CPU fallback
- 민감 데이터 또는 고객 환경 제약이 있으면 fallback을 제한한다

## 예외 처리
- regulatory or customer isolation requirements
- 긴급 운영 작업
- low-latency serving 전용 pool

