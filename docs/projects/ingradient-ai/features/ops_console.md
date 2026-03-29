# Ops Console

- 문서명: Ops Console
- 목적: 운영 콘솔의 정보 구조, 페이지 구성, 공통 패턴, 실시간성 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `../architecture.md`, `../operations.md`

## 목적

운영 콘솔의 목표는 화려한 대시보드가 아니라 이상 여부를 빠르게 파악하고, 원인 엔티티를 좁히고, 필요한 운영 액션을 안전하게 실행하는 것이다.

## 제품 원칙

- 첫 화면에서 전체 이상 여부를 10초 안에 파악
- drill-down으로 장애 원인을 짧은 경로로 추적
- 운영 액션을 UI에서 안전하게 실행
- `@ingradient/ui` 우선 사용, 도메인 로직만 AI app에서 조합

## 정보 구조 (8페이지)

| 페이지 | 목표 | v1 필수 |
|--------|------|---------|
| **Overview** | 전체 건강 상태, 병목 지점 10초 파악 | Yes |
| **Jobs** | job 검색, 필터, 추적, 조치 | Yes |
| **Workers & GPU** | 자원 상태와 실행 단위 통합 조회 | Yes |
| **Models** | 모델 자산 + 메모리 로드 상태 분리 관리 | Yes |
| **Queues** | 적체와 정책을 같이 조회 | v1.1 |
| **Usage Analytics** | 운영 회고와 capacity planning | v1.1 |
| **Events & Alerts** | 실행 가능한 운영 정보 피드 | Yes |
| **Settings** | 정적 설정 읽기 + 동적 정책 편집 | v1.1 |

## 공통 UI 패턴

### 레이아웃

- 상단 KPI row → 중단 주요 리스트/차트 → 하단 상세 테이블 → 우측 drawer 상세

### 상태 표현

| 상태 | 색상 | 용도 |
|------|------|------|
| Healthy | green | 정상 |
| Running/Active | blue | 실행 중 |
| Warning/Degraded | amber | 경고 |
| Failed/Error/Critical | red | 장애 |
| Idle/Disabled/Muted | gray | 비활성 |

- 색상만으로 전달하지 않는다 → 텍스트 badge 항상 병기
- 실시간 갱신 요소는 subtle highlight

### 공통 컴포넌트

- **KPI Card**: 숫자, 증감, 상태 badge, drill-down action
- **Status Badge**: label + color + icon (엔티티별 동일 의미)
- **Entity Drawer**: Summary, Metrics, Timeline, Related Entities, Actions
- **Filter Bar**: inline quick filter + advanced panel
- **Saved View**: filters, sort, visible columns, date range preset
- **Alert Strip**: critical/open event 상단 노출

## 실시간성 적용 범위

| 강실시간 (SSE) | 약실시간 (polling/수동) |
|---------------|----------------------|
| Overview KPI | Settings |
| Queue backlog | Historical analytics |
| Worker/GPU health | Installed model 목록 |
| Running job progress | |
| Critical alerts | |

## 페이지별 핵심 구성

### Overview

- **상단 KPI**: Active Jobs, Queued Jobs, Healthy GPUs/Total, Running Workers, Error Jobs(1h), Avg Queue Wait, Avg GPU Utilization
- **좌측**: GPU/worker 요약
- **우측**: queue 상태 요약
- **중단**: running jobs strip
- **하단**: 최근 24시간 차트 + events
- KPI 클릭 → 해당 필터가 적용된 상세 페이지 이동

### Jobs

- **탭**: All, Queued, Running, Succeeded, Failed, Cancelled
- **필터**: 시간, runtime, task_type, model, status, queue, worker, priority, requester
- **테이블**: Job ID, Type, Runtime, Model/Version, Selected Backend, Execution Mode, Duration, Status 등
- **Drawer**: Summary, Timeline, Artifacts, Attempt History, Metrics, Routing, Error Trace
- **액션**: cancel, retry, clone, reprioritize, requeue

### Workers & GPU

- **좌측**: node list (status, GPU count, heartbeat)
- **중앙**: GPU grid (utilization, VRAM, health, running job)
- **하단**: worker table (runtime, queue affinity, OOM, restart count)
- **추가**: CPU pool utilization, backend saturation summary
- **액션**: cordon node, restart/drain worker, maintenance mark

### Models

- **탭**: Available Models, Installed Models, Loaded Models
- **Available**: name, runtime, task_type, framework, source_type, lifecycle
- **Installed**: storage ref, checksum, installed nodes, disk usage
- **Loaded**: loaded worker count, warm/cold, memory footprint, last inference
- **Drawer**: metadata, version pointers, history, artifacts, lineage, profiling, compatible recipes
- **액션**: validate, promote default, rollback, preload, unload, upload new version

### Events & Alerts

- **컬럼**: Time, Severity, Source, Event Type, Message, Status
- **필터**: severity, runtime, node, worker, model, status
- **액션**: acknowledge, mute similar, open related entity, escalate

### Queues (v1.1)

- queue cards by runtime, backlog timeline, priority bucket split, rejection reasons
- 액션: pause/resume, change concurrency

### Usage Analytics (v1.1)

- GPU utilization timeline, queue wait trend, model usage top N, fail reason distribution
- backend별 job 수, self-hosted vs external 비율, CPU/GPU 비율

## 반응형 전략

- **데스크톱**: 다중 패널 + drawer (기본)
- **태블릿**: 2단 구조 + 카드 우선
- **모바일**: 조회 중심, alert 확인, 간단한 acknowledge

## 설계 판단 기준

콘솔이 성공한다는 것은 아래 질문에 바로 답할 수 있다는 뜻이다:

- 지금 장애가 있는가?
- 어디가 막혔는가?
- 어느 GPU/worker가 문제인가?
- 어떤 모델이 원인인가?
- 어떤 액션을 지금 취해야 하는가?

## 관련 문서

- `../architecture.md`, `../operations.md`
