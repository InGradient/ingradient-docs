# ingradient-ai Project Overview

- 문서명: ingradient-ai Project Overview
- 목적: AI Platform의 존재 이유, 범위, 의존성, 성공 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `roadmap.md`

## 프로젝트 소개

`ingradient-ai`는 다양한 runtime과 GPU 자원을 공통 정책으로 운영하면서, job 실행, 모델 자산 관리, 운영 상태 파악, 사용량 분석을 하나의 플랫폼으로 제공하는 독립 운영 계층이다.

## 목적

- platform과 medilabel이 공통으로 사용할 AI control plane을 제공한다
- training, inference, utility job을 같은 job 모델로 운영한다
- model registry, artifact metadata, execution routing을 중앙에서 관리한다
- 운영자가 queue, worker, GPU, model 상태를 한 콘솔에서 판단할 수 있게 한다

## 범위

- gateway, orchestrator, queue, worker runtime
- model registry와 version lifecycle
- backend routing, fallback, CPU / GPU execution policy
- logs, metrics, events, usage aggregation
- ops console

## 비범위

- dataset authoring과 labeling workflow 자체 구현
- 공통 auth primitive 구현
- annotation tool이나 business product UI 구현
- 모든 범용 MLOps 기능을 한 번에 완성하는 것

## 주요 의존성

- upstream product services: `ingradient-platform`, `medilabel`
- shared object storage
- auth and service credential infrastructure
- GPU execution environment
- `@ingradient/ui` 기반 ops console UI 조합

## 초기 성공 기준

- 2개 이상의 runtime이 동일한 job 모델로 동작한다
- 운영자가 콘솔에서 failed job 원인을 추적하고 기본 조치를 수행할 수 있다
- model metadata와 loaded state가 UI와 backend에서 일관되게 보인다
- queue backlog와 usage trend를 운영 콘솔에서 빠르게 파악할 수 있다

## 기술 스택

- Metadata DB: PostgreSQL
- Queue: Redis
- Object Storage: GCS (S3-compatible fallback)
- Control Plane: Cloud Run
- Execution Plane: GKE (GPU/CPU)
- Realtime: SSE (v1)
- UI: React + @ingradient/ui

