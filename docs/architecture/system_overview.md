# System Overview

- 문서명: System Overview
- 목적: INGRADIENT 전체 시스템 구조의 SSOT를 정의한다.
- 적용 범위: `auth-service`, `ingradient-platform`, `ingradient-ai`, `ingradient-edge`, `medilabel`, `ingradient-ui`
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: AI / Edge / Product Owners
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `service_responsibility.md`, `deployment_architecture.md`, `../data/storage_policy.md`, `../ops/security_access_control.md`

## 1. 시스템 목적과 범위

INGRADIENT는 하나의 단일 앱이 아니라, 공통 인증과 공통 UI, 공통 AI 실행 계층을 바탕으로 여러 제품과 실행 환경을 묶는 ecosystem이다.

핵심 목표는 아래와 같다.

- 제품별 business workflow는 분리하되, auth / AI / UI / 운영 기준은 공통화한다.
- control plane과 execution plane을 분리해 운영성과 확장성을 확보한다.
- cloud, on-prem, edge 설치형이 공존할 수 있는 구조를 유지한다.
- object storage, snapshot, artifact, model lineage를 기준으로 재현성과 운영 추적성을 확보한다.

이 문서는 전체 큰 그림과 경계를 다루며, repo 내부 구현 디테일은 각 프로젝트 문서를 따른다.

## 2. 시스템 구성요소

### 2.1 공통 기반 서비스

- `auth-service`
  - 인증, 세션, 조직, 멤버십, 역할과 권한 기초 사실의 SoT
- `ingradient-ui`
  - tokens, primitives, components, patterns, brand assets를 제공하는 shared package

### 2.2 사용자-facing 제품

- `ingradient-platform`
  - 범용 dataset, labeling, export, AI 요청 생성 중심 제품
- `medilabel`
  - 의료 영상과 segmentation workflow를 다루는 의료 특화 제품

### 2.3 AI 계층

- `ingradient-ai`
  - model registry, job lifecycle, routing, orchestration, artifact 관리
- runtime workers
  - detection, foundation, medical, utility runtime 실행

### 2.4 현장 계층

- `ingradient-edge`
  - device control, capture, local queue, offline mode, cloud sync

## 3. 상위 논리 아키텍처

```text
Users / Operators
  → auth-service (인증, 멤버십)
  → ingradient-platform / medilabel (제품 workflow)
  → ingradient-ai control plane (job 생성)
  → AI execution workers (학습/추론 실행)
  → shared object storage / service DBs / telemetry

Field Devices / Edge Operators
  → ingradient-edge (캡처, 로컬 라벨링)
  → auth-service (디바이스 등록, Entitlement 발급)
  → platform (데이터 sync, 패키지 수신)
```

## 4. Plane 구분

### 4.1 Control Plane

포함 대상:

- auth-service
- platform and medilabel web / API
- ai gateway, orchestrator, model registry, ops console

책임:

- 사용자 요청 수신
- 권한 검증
- job 생성과 상태 전이
- 메타데이터와 정책 관리

### 4.2 Execution Plane

포함 대상:

- ai workers
- GPU / CPU execution node
- batch runtime
- provider adapter

책임:

- 실제 학습과 추론 실행
- artifact 생성
- progress, logs, metrics 보고

### 4.3 Edge Plane

포함 대상:

- edge app
- local storage / local queue
- device and camera integration

책임:

- 데이터 수집
- 오프라인 작업 지속
- 재연결 시 sync

## 5. 주요 데이터 흐름

### 5.1 사용자 제품 흐름

1. 사용자는 auth-service를 통해 인증한다.
2. platform 또는 medilabel에서 프로젝트와 데이터를 선택한다.
3. 라벨링, export, training request 같은 제품 workflow를 수행한다.
4. AI가 결과 artifact를 생성하면 제품 화면이 이를 다시 조회한다.

### 5.2 AI 실행 흐름

1. upstream 제품이 ai control plane에 job을 생성한다.
2. ai가 validation, queueing, routing을 수행한다.
3. execution worker가 storage reference를 읽어 실행한다.
4. logs, metrics, artifacts, final status가 ai metadata와 telemetry에 기록된다.

### 5.3 Edge sync 흐름

1. edge가 현장에서 데이터를 수집하고 로컬에 저장한다.
2. 온라인이면 즉시, 오프라인이면 나중에 platform 또는 storage와 sync한다.
3. sync 상태는 `local_only`, `uploading`, `synced`, `failed` 같은 상태로 추적한다.

## 6. 주요 네트워크 흐름

- 사용자 브라우저 ↔ auth-service
- 사용자 브라우저 ↔ platform / medilabel
- platform / medilabel ↔ ai control plane
- ai control plane ↔ execution worker
- execution worker ↔ object storage
- edge ↔ platform / storage (데이터 sync, 패키지 배포)
- edge ↔ auth-service (디바이스 등록/승인, Entitlement 발급)

핵심 원칙:

- 서비스 간 계약은 API와 이벤트를 통해 연결한다.
- 서비스 간 DB 직접 접근은 허용하지 않는다.
- 외부 네트워크가 차단되는 설치형 환경도 고려한다.

## 7. 저장소 개요

### 7.1 DB

- auth-service DB
- platform DB
- medilabel DB
- ai metadata DB
- edge local DB or local state store

### 7.2 Object Storage

공통 object storage에는 아래가 저장될 수 있다.

- raw uploaded files
- dataset snapshot
- model artifact
- training logs
- export packages
- reports and diagnostics bundle

### 7.3 Cache

- ai worker local cache
- queue / coordination cache
- edge local queue

## 8. 공통 설계 원칙

- 인증과 멤버십 사실은 auth-service가 소유한다.
- 제품별 business data는 각 제품 서비스가 소유한다.
- AI는 job, model, artifact metadata를 소유한다.
- edge는 local runtime state를 소유하지만 중앙 SoT를 장기적으로 대체하지 않는다.
- 공용 UI는 `@ingradient/ui`가 제공한다.
- 대용량 데이터는 복사보다 reference 기반 접근을 우선한다.
- 운영자가 상태를 빠르게 파악할 수 있도록 logs, metrics, event가 연결되어야 한다.

## 9. 비범위 사항

- repo 내부 파일 구조 상세
- 특정 화면의 UI spec
- 고객별 개별 계약 조건
- 세부 API 필드 정의

