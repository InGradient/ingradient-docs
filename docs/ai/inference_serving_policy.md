# Inference Serving Policy

- 문서명: Inference Serving Policy
- 목적: 추론 서비스 운영 기준을 정의한다.
- 적용 범위: online serving, batch inference, edge-assisted inference
- 상태: Draft
- Owner: AI Platform
- Reviewer: Product / Infra Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `execution_routing_policy.md`, `model_lifecycle.md`

## serving 유형
- online low-latency serving
- batch inference
- edge-local or edge-assisted inference

## 모델 선택 규칙
- 기본은 production stage 모델
- canary 또는 tenant-specific override를 허용할 수 있다

## 성능 목표
- online serving은 latency와 availability가 우선
- batch inference는 throughput과 cost efficiency가 우선

## 장애 시 fallback
- model server 장애 시 이전 stable version
- GPU 불가 시 허용된 작업만 CPU 또는 다른 pool fallback
- 필요 시 queue 적체를 사용자에게 노출한다

## 결과 기록 정책
- 실시간 inference는 필요 최소 메타데이터만 저장할 수 있다
- batch inference는 result artifact와 요약 메타데이터를 저장한다

