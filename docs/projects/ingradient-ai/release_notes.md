# ingradient-ai Release Notes

- 문서명: ingradient-ai Release Notes
- 목적: 릴리즈 이력과 주요 변경사항을 기록한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28

## Release Policy

`ingradient-ai`는 2026-03-28 기준으로 설계와 frontend prototype이 선행된 상태다. 현재 문서는 pre-release milestone 기록으로 관리하며, 첫 production release는 v0.0.1이다.

production release 이후 각 버전의 상세 계획은 `releases/` 폴더에서 관리한다.

## Pre-Release Milestones

### 2026-03-27. Phase 0 설계 완료

**포함**:

- 11개 핵심 엔티티 정의 (Job, Worker, Model, ModelVersion, Node, GPUDevice, Queue, Backend, AlertEvent, UsageRecord, ModelArtifact)
- 상태 전이 합의 (Job 11상태, Worker 9상태, Model 6상태, ModelVersion 9상태)
- 8페이지 ops console 정보 구조 확정
- 4개 배포 프로파일 정의 (SaaS, Dedicated, On-Prem, Hybrid)
- 설치 manifest 스키마 v1alpha1
- backend 라우팅 3단계 (backend selection → fallback → 내부 스케줄링)
- 기술 스택 v1 고정 (PostgreSQL, Redis, GCS, Cloud Run, GKE)

**운영 영향**: 없음 (설계 단계)

### 2026-03-27. Ops Console Frontend Prototype

**포함**:

- `@ingradient/ui` 기반 frontend-only prototype
- Overview, Jobs, Workers & GPU, Models 4페이지 mock data 검증
- list-detail, drawer, KPI, inspector 패턴 확인

**의의**: backend 구현 전 운영 화면 정보 구조 고정 + ingradient-ui 재사용성 검증

### 2026-03-27. Model Registry & BYOM 설계

**포함**:

- Model/ModelVersion/ModelArtifact 분리 기준
- source_type 4종, usage_mode 3종 정의
- version lifecycle 9상태 + validation_status 6상태

### 2026-03-27. Backend Routing & Operations 설계

**포함**:

- backend_type 7종 추상화
- CPU/GPU fallback, overflow, external execution 정책
- alert threshold 12개 + runbook 5개
- scheduler 3단계 성숙도 계획

## 다음 릴리즈

첫 production release 계획은 [releases/v0.0.1.md](releases/v0.0.1.md) 참조.
전체 방향은 [roadmap.md](roadmap.md) 참조.
