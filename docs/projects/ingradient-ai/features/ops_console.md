# Ops Console

- 문서명: Ops Console
- 목적: 운영 콘솔의 정보 구조, 페이지 구성, 공통 패턴, 실시간성 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `../architecture.md`, `../wireframes/README.md`

## 목적

운영 콘솔의 목표는 이상 여부를 빠르게 파악하고, 원인 엔티티를 좁히고, 운영 액션을 안전하게 실행하는 것이다. 학습 job 생성과 training pipeline 구성도 콘솔에서 수행한다.

## 접근 권한

- auth-service **Admin 계정**으로만 접근 가능
- 비 admin 계정은 로그인 시 접근 거부

## 제품 원칙

- 첫 화면에서 전체 이상 여부를 10초 안에 파악
- drill-down으로 장애 원인을 짧은 경로로 추적
- 운영 액션을 UI에서 안전하게 실행 (확인 다이얼로그 필수)
- 콘솔에서 학습 job 생성 + training pipeline 구성 가능
- `@ingradient/ui` 우선 사용, 도메인 로직만 AI app에서 조합

## 정보 구조 (10페이지)

| 페이지 | 목표 | wireframe |
|--------|------|-----------|
| **Login** | admin 인증 | [login.md](../wireframes/login.md) |
| **Overview** | 전체 건강 상태 10초 파악 | [overview.md](../wireframes/overview.md) |
| **Jobs** | job 검색, 필터, 추적, 조치, **생성** | [jobs.md](../wireframes/jobs.md), [new_job.md](../wireframes/new_job.md) |
| **Training Pipeline** | multi-step 학습 구성, 실행, 모니터링 | [training_pipeline.md](../wireframes/training_pipeline.md) |
| **Workers & GPU** | 자원 상태와 실행 단위 통합 조회 | [workers_gpu.md](../wireframes/workers_gpu.md) |
| **Models** | 모델 자산, 버전, preload, **학습, lineage** | [models.md](../wireframes/models.md) |
| **Queues** | 적체와 정책을 같이 조회 | [queues.md](../wireframes/queues.md) |
| **Events & Alerts** | 실행 가능한 운영 정보 피드 | [events_alerts.md](../wireframes/events_alerts.md) |
| **Usage Analytics** | 운영 회고와 capacity planning | [usage_analytics.md](../wireframes/usage_analytics.md) |
| **Settings** | 정적 설정 읽기 + 동적 정책 편집 | [settings.md](../wireframes/settings.md) |

## 공통 UI 패턴

### 레이아웃

- Left Nav (고정) + Top Utility Bar + Page Content + Detail Drawer (오른쪽 오버레이)
- 상단 KPI/Summary → Filter Bar → Main Data Area → 하단 Pagination

### 상태 표현

| 상태 | 색상 | 용도 |
|------|------|------|
| Healthy / Succeeded | green | 정상, 성공 |
| Running / Active | blue | 실행 중 |
| Warning / Degraded | amber | 경고 |
| Failed / Error / Critical | red | 장애 |
| Idle / Disabled / Muted | gray | 비활성 |

색상만으로 전달하지 않는다 → 텍스트 badge 항상 병기.

### 공통 컴포넌트

- **KPI Card**: 숫자, 증감, 상태 badge, drill-down action
- **Status Badge**: label + color (엔티티별 동일 의미)
- **Entity Drawer**: Summary, Metrics, Timeline, Related Entities, Actions
- **Filter Bar**: inline quick filter
- **확인 다이얼로그**: 파괴적 액션(cancel, drain, restart 등)은 반드시 사용
- **토스트**: 액션 결과(성공/실패) 피드백

## 실시간성 적용 범위

| 강실시간 (SSE) | 약실시간 (수동 새로고침) |
|---------------|----------------------|
| Overview KPI, Queue backlog | Settings |
| Worker/GPU health | Historical analytics |
| Running job progress | Installed model 목록 |
| Critical alerts | |

## 페이지별 핵심 구성

### Login
- INGRADIENT 로고 + Login ID/Password → admin 인증

### Overview
- KPI Row (8개) → GPU/Queue 요약 카드 → Running Jobs Strip → Recent Alerts → 24h Charts
- KPI 클릭 → 해당 상세 페이지 이동

### Jobs
- 탭: All/Queued/Running/Succeeded/Failed/Cancelled
- 필터: runtime, task_type, model, queue, worker, priority, backend, 시간
- 테이블: Job ID, Type, Runtime, Model, Backend, Duration, Pipeline, Status
- Drawer: Summary (+ Pipeline/Base Checkpoint), Routing, Timeline, Attempt History, Error Trace, Metrics, Artifacts
- 액션: Cancel, Retry, Clone, Reprioritize
- **+ New Job 모달**: Job Type → Runtime → Recipe → Model → Base Checkpoint → Input → 실행 설정. 호환성 실시간 검증

### Training Pipeline
- Pipeline 목록: name, status, steps, progress, final model
- Pipeline Detail: 시각적 흐름도 (step 노드 그래프), step 간 연결선
- Step Detail: 설정, 실행 결과, Job/Model 링크
- + New Pipeline: step 구성 + 템플릿 (Lightly SSL→LTDETR, Distillation→LTDETR 등)
- 액션: Run, Run All, Cancel, Clone, Delete, Edit Step, Run This Step

### Workers & GPU
- Node List → GPU Grid → Worker Table → CPU Pool → Backend Saturation
- Worker/GPU Detail Drawer
- 액션: Cordon, Restart, Drain

### Models
- 탭: Available/Installed/Loaded
- Detail Drawer: Metadata, Version History, **Lineage 시각화 (backbone→recipe→job→model 다이어그램)**, Profiling
- 액션: Validate, Promote, Rollback, Preload, Unload, Upload
- **Train**: 해당 model로 학습 job 생성 (→ New Job 모달, model 사전 선택)
- **Train with this Backbone**: backbone을 base_checkpoint_ref로 학습 (→ New Job 모달)

### Queues
- Backend Summary 카드 → Queue 테이블
- Queue Detail Drawer: backlog timeline, priority split, rejection reasons
- 액션: Pause, Resume, Adjust Concurrency

### Events & Alerts
- Severity 필터 (Critical/Warning/Info) + Event Stream 테이블
- Alert Detail Drawer + Related Entity 링크
- 액션: Acknowledge, Mute, Escalate, Resolve

### Usage Analytics
- 시간 범위 선택 + 6개 차트 (GPU utilization, queue wait, model usage, GPU-hours, failure, heatmap)
- Breakdown 테이블 (Model/Runtime/Node/Backend)

### Settings
- Static Configuration (읽기 전용: 환경, 스토리지, 인증, DB, Queue)
- Dynamic Policies (수정 가능: alert 임계값, queue 기본값, preload, overflow)
- Secret Health

## 관련 문서

- `../wireframes/README.md` — 전체 화면 목록 및 공통 패턴
- `../architecture.md`, `../operations.md`
- `training_pipeline_orchestration.md` — 파이프라인 백엔드 기능
- `model_training_combinations.md` — 학습 조합 정의
