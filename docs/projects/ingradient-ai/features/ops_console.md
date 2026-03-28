# Ops Console

## 목적

운영 콘솔의 목표는 화려한 대시보드가 아니라 이상 여부를 빠르게 파악하고, 원인 엔티티를 좁히고, 필요한 운영 액션을 안전하게 실행하는 것이다.

## 정보 구조

- Overview
- Jobs
- Workers & GPU
- Models
- Queues
- Usage Analytics
- Events & Alerts
- Settings

## 공통 패턴

- 상단 KPI row
- 주요 리스트/차트
- 하단 상세 테이블
- 우측 drawer 또는 inspector

## 운영자가 답해야 하는 질문

- 지금 backlog나 장애가 있는가
- 어느 queue, worker, gpu, model이 원인인가
- cancel, retry, requeue, cordon 같은 액션이 가능한가
- fallback이나 overflow가 왜 적용됐는가

## 주요 엔티티

- Job
- Queue
- Worker
- GPU
- Node
- Model / Version
- Event / Alert

## UI 원칙

- 색상은 상태 표현에만 쓴다.
- 텍스트와 shape를 함께 사용한다.
- 강실시간 대상과 약실시간 대상을 구분한다.
- `@ingradient/ui`를 우선 쓰고, 도메인 의미는 AI app에서 조합한다.

## backend와 맞물리는 필드

- selected backend
- routing reason
- selected accelerator
- fallback applied
- queue wait time
- worker health

## 관련 문서

- `../architecture.md`
- `../operations.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_plan.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_execution_backend_routing_plan.md`
