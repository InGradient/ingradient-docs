# ingradient-ai Roadmap

- 문서명: ingradient-ai Roadmap
- 목적: 전체 방향, 단계별 계획, 릴리즈 매핑, 병렬 트랙을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28

## 현재 범위

- 공통 데이터 모델과 상태 전이
- gateway / orchestrator / queue 구조
- model registry and lifecycle
- execution routing
- ops console
- deployment profile and install manifest

## 릴리즈 매핑

| Phase | 릴리즈 | 핵심 |
|-------|--------|------|
| Phase 0 | pre-release | 설계 고정 |
| Phase 1-2 | **v1** | 플랫폼 골격 + 운영 콘솔 v1 |
| Phase 3-4 | **v1.5** | Detection 상용화 + 고급 스케줄링 |
| Phase 5-6 | **v2** | Foundation/Medical + 정책 고도화 |

## Phase 0. 설계 고정 (완료)

- 엔티티 정의, 상태 전이, queue/pool 전략, UI IA, repo 구조, deployment profile
- 완료 기준: Job, Worker, Model, AlertEvent 정의 합의

## Phase 1. 플랫폼 골격

- repo scaffold, gateway basic API, orchestrator state machine
- queue integration, utility runtime, storage/event logging 기본 통합
- 완료 기준: utility job end-to-end, job detail history 저장

## Phase 2. 운영 콘솔 v1

- Overview, Jobs, Workers & GPU, Models, Events & Alerts
- queue summary, usage trend summary
- 완료 기준: failed job triage, worker/GPU health 확인, model version action

## Phase 3. Detection Runtime 상용화

- detection adapter와 recipe, warm model loading
- restricted sharing 일부, customer install option 검증

## Phase 4. 고급 스케줄링과 분석

- profiling metadata 반영, queue full page
- analytics/settings 확장, Vertex integration 강화

## Phase 5-6. 확장

- foundation / medical runtime 확장
- quota, reservation, autoscaling, policy routing, cost-aware routing

## 병렬 트랙

| 트랙 | 범위 | Phase |
|------|------|-------|
| A. Platform Core | gateway, orchestrator, state machine | 1-2 |
| B. Worker Runtime | detection → foundation → medical adapter/recipe | 1-5 |
| C. Ops Console | UI 페이지, drawer, filter, action | 2-4 |
| D. Model/Artifact | registry, version lifecycle, validation, BYOM | 1-3 |
| E. Provider/Deployment | Vertex offload, install manifest, provider adapter | 3-5 |
| F. Backend Routing | backend selection, fallback, overflow, CPU/GPU | 1-4 |
| G. Telemetry/Analytics | metrics pipeline, usage analytics, audit | 2-5 |

## 마일스톤

| ID | 이름 | 내용 |
|----|------|------|
| M1 | 설계 합의 + Scaffold | 문서 합의, repo 구조 생성, 기본 contract |
| M2 | Utility E2E | utility job 생성 → 실행 → 결과 저장 |
| M3 | Console v1 | 5페이지 운영 콘솔, mock → real data 전환 |
| M4 | Detection Ready | detection runtime 상용 수준, warm loading |
| M5 | Vertex Offload | training/batch Vertex AI offload 동작 |
| M6 | Multi-Runtime | foundation + medical runtime 통합 |

## 우선순위

1. 공통 상태 모델
2. 최소 end-to-end 플랫폼
3. 운영 콘솔
4. model registry and profiling
5. 고급 스케줄링과 분석

## 기술 부채

- runtime별 특수성이 커질수록 공통 abstraction 약화 위험
- 초기 메타데이터가 빈약하면 UI와 backend가 틀어질 수 있음
- 스케줄링 자동화를 너무 빨리 열면 OOM과 운영 혼란 증가

## 미결정 사항

- tenant별 quota enforcement 시점
- backend policy automation 범위
- managed provider와 self-hosted 혼합 운영의 기준선
