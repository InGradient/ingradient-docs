# ingradient-ai Roadmap

## 현재 범위

현재 repo와 문서에서 합의된 큰 흐름은 아래와 같다.

- 공통 데이터 모델과 상태 전이
- gateway / orchestrator / queue 구조
- model registry and lifecycle
- execution routing
- ops console
- deployment profile and install manifest

## 단계별 계획

### Phase 0. 설계 고정

- 엔티티 정의
- 상태 전이
- queue / pool 전략
- UI IA
- repo 구조
- deployment profile 정의

완료 기준:

- `Job`, `Worker`, `Model`, `AlertEvent` 정의 합의

### Phase 1. 플랫폼 골격

- repo scaffold
- gateway basic API
- orchestrator basic state machine
- queue integration
- utility runtime
- storage and event logging 기본 통합

완료 기준:

- utility job end-to-end
- job detail history 저장

### Phase 2. 운영 콘솔 v1

- Overview
- Jobs
- Workers & GPU
- Models
- Events & Alerts
- queue summary
- usage trend summary

완료 기준:

- failed job triage 가능
- worker / GPU health 확인 가능
- model version action 가능

### Phase 3. Detection Runtime 상용화

- detection adapter와 recipe
- warm model loading
- restricted sharing 일부
- customer install option 검증

### Phase 4. 고급 스케줄링과 분석

- profiling metadata 반영
- queue full page
- analytics and settings 확장
- Vertex integration 강화

### Phase 5 이후

- foundation / medical runtime 확장
- quota, reservation, autoscaling, policy routing 고도화

## 우선순위

1. 공통 상태 모델
2. 최소 end-to-end 플랫폼
3. 운영 콘솔
4. model registry and profiling
5. 고급 스케줄링과 분석

## 기술 부채

- runtime별 특수성이 커질수록 공통 abstraction 약화 위험
- 초기 메타데이터가 빈약하면 UI와 backend가 빠르게 틀어질 수 있음
- 스케줄링 자동화를 너무 빨리 열면 OOM과 운영 혼란이 증가할 수 있음

## 미결정 사항

- tenant별 quota enforcement 시점
- backend policy automation 범위
- managed provider와 self-hosted 혼합 운영의 기준선

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_execution_roadmap.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_product_prd.md`

