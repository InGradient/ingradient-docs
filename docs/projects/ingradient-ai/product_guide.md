# ingradient-ai Product Guide

- 문서명: ingradient-ai Product Guide
- 목적: AI Platform Ops Console의 각 화면에서 사용자가 무엇을 할 수 있는지 안내한다.
- 상태: Draft
- Owner: Product / AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `project_overview.md`, `user_scenarios.md`, `wireframes/`

## 이 문서의 역할

이 문서는 **개발 전**에 작성한다. 기술적 상세(API, DB, 아키텍처)가 아닌 **사용자가 할 수 있는 것**을 화면 단위로 정리한다. features/ 폴더의 상세 기획보다 가볍게, 일반인도 이해할 수 있는 수준으로 작성한다.

`user_guide.md`와의 차이: product_guide는 "뭘 할 수 있는가" (개발 전 기획 입력), user_guide는 "어떻게 쓰면 되는가" (개발 후 사용법).

## 사용자 유형

| 사용자 | 설명 |
|--------|------|
| AI 운영자 | job, worker, GPU, model 상태를 모니터링하고 장애에 대응한다 |
| 내부 개발자 | API로 job을 생성하고 model을 등록한다. 콘솔에서 결과를 확인한다 |
| 관리자 | 설정 관리, 사용량 분석, 정책 조정을 수행한다 |

## 제품 운영 방식

- **Ops Console은 auth-service Admin 계정으로만 접근할 수 있다.** auth-service에서 admin 역할을 가진 사용자만 로그인 가능하다. 일반 사용자는 접근할 수 없다
- **하나의 콘솔에서 모든 AI 운영을 관리한다.** 다양한 runtime(detection, medical, foundation, utility)의 job, model, worker, GPU를 공통 모델로 운영한다
- **진입 10초 안에 시스템 건강 상태를 파악한다.** Overview에서 핵심 지표를 보고, 이상이 있으면 drill-down으로 원인을 추적한다
- **job은 생성부터 완료까지 상태가 추적된다.** queued → running → succeeded/failed 흐름을 실시간으로 볼 수 있다
- **model은 버전 단위로 관리된다.** 새 버전 등록 → 검증 → 기본 버전 승격 → 문제 시 롤백의 lifecycle을 따른다
- **플랫폼이 실행 위치를 자동 결정한다.** 개발자는 "무엇을 실행할지"만 지정하고, 어디서(GPU/CPU, 자체/외부) 실행할지는 플랫폼이 정책에 따라 선택한다
- **모든 운영 행동은 이벤트로 기록된다.** job 상태 변경, worker 이상, model 승격 등이 이벤트 스트림에 남는다
- **GPU는 보수적으로 스케줄링한다.** 활용률 극대화보다 안정성을 우선한다. OOM 방지를 위해 안전 마진을 확보한다

---

## Ops Console

auth-service Admin 계정으로 로그인하여 사용하는 운영 콘솔. 왼쪽 네비게이션으로 페이지를 전환한다.

### 로그인

- 누가 사용하는가: Admin
- 이 화면에서 할 수 있는 것:
  - auth-service 계정의 Login ID + 비밀번호로 로그인
  - INGRADIENT 로고가 표시됨
  - admin이 아닌 계정으로 로그인 시도 시 접근 거부 메시지 표시

### Overview

- 누가 사용하는가: 모든 사용자
- 이 화면에서 할 수 있는 것:
  - 핵심 KPI 확인 (활성 job 수, 대기 job 수, 정상 GPU 수, 실행 중 worker 수, 에러 job 수, 평균 대기 시간, GPU 활용률)
  - GPU/worker 상태 요약 확인
  - queue별 대기 상황 요약 확인
  - 현재 실행 중인 job 목록 빠른 확인
  - 최근 critical/warning 이벤트 확인
  - 24시간 추이 차트 확인 (job 처리량, 실패율, GPU 활용률 등)
  - KPI 클릭 시 해당 상세 페이지로 이동

### Jobs

- 누가 사용하는가: AI 운영자, 내부 개발자
- 이 화면에서 할 수 있는 것:
  - **새 job 생성** (training / inference / utility — recipe 선택, model 선택, backbone 선택, 데이터셋 지정)
  - 전체 job 목록 조회 (상태별 탭: All, Queued, Running, Succeeded, Failed, Cancelled)
  - job 필터링 (runtime, task type, model, queue, worker, priority, backend, 시간 범위)
  - job 상세 확인 (drawer): 요약, 타임라인, 아티팩트, 시도 이력, 메트릭, 라우팅 정보, 에러 트레이스
  - 실패한 job의 원인 추적 (에러 코드, peak VRAM, 라우팅 사유)
  - job 재시도 (retry)
  - job 취소 (cancel)
  - job 복제 (clone — 설정을 일부 변경하여 다시 실행)
  - job 우선순위 변경 (대기 중인 job만)

### Training Pipeline

- 누가 사용하는가: AI 운영자, 내부 개발자
- 이 화면에서 할 수 있는 것:
  - **multi-step 학습 파이프라인 구성** (예: backbone SSL 사전학습 → detection 학습)
  - 사전 정의 템플릿으로 빠르게 파이프라인 생성 (Lightly SSL → LTDETR, Distillation → LTDETR 등)
  - 파이프라인 실행 (전체 또는 특정 step부터)
  - 파이프라인 진행 상황 시각적 모니터링 (step별 상태, 소요 시간, 산출물)
  - step 간 자동 연결 (이전 step 산출물 → 다음 step의 base_checkpoint_ref)
  - 실패한 step 수정 후 재실행
  - 파이프라인 복제
  - 최종 산출 model 확인 및 Models 페이지 연결

### Workers & GPU

- 누가 사용하는가: AI 운영자
- 이 화면에서 할 수 있는 것:
  - 노드(서버) 목록 확인 (상태, GPU 수, CPU/RAM, 활성 worker 수, 마지막 응답 시각)
  - GPU 상태 확인 (활용률, VRAM 사용량, 온도, 건강 상태, 실행 중인 job, 로딩된 model)
  - worker 목록 확인 (runtime, 상태, 담당 queue, 활성 job, OOM 이력)
  - CPU pool 상태 확인
  - backend별 포화도 요약
  - worker 재시작 (restart)
  - worker 배수 (drain — 현재 job 완료 후 새 job 받지 않음)
  - 노드 격리 (cordon — 새 스케줄링 차단)
  - 노드 유지보수 모드 전환

### Models

- 누가 사용하는가: AI 운영자, 내부 개발자
- 이 화면에서 할 수 있는 것:
  - model 목록 조회 (3개 탭: Available — 등록된 전체, Installed — 노드에 설치된, Loaded — GPU에 로딩된)
  - model 검색 및 필터링 (runtime, task type, lifecycle 상태, source type)
  - model 상세 확인: 메타데이터, 버전 이력, 프로파일링 정보, 호환 recipe
  - 새 model version 등록 (업로드)
  - model version 검증 실행 (validate)
  - 기본 버전 승격 (promote to default — 이후 새 job에 적용)
  - 이전 버전으로 롤백 (rollback)
  - model preload 요청 (GPU에 미리 로딩)
  - model unload (GPU에서 해제)
  - model version 비활성화/보관
  - **model로 학습 시작** (Train — 해당 model에 호환되는 recipe로 바로 학습 job 생성)
  - **backbone으로 downstream 학습** (Train with this Backbone — 이 backbone을 base_checkpoint_ref로 학습)
  - model version의 **학습 이력(lineage) 시각화** (어떤 backbone → 어떤 recipe → 어떤 job으로 만들어졌는지)

### Queues

- 누가 사용하는가: AI 운영자
- 이 화면에서 할 수 있는 것:
  - backend별 요약 카드 확인 (상태, 대기 job 수, 실행 job 수, 예상 대기 시간)
  - queue 목록 조회 (이름, runtime, 정책, 대기 수, 실행 수, 평균/p95 대기 시간)
  - queue 상세 확인: backlog 타임라인, 우선순위별 분포, 거부 사유, head-of-line blocking
  - queue 일시 정지 (pause)
  - queue 재개 (resume)
  - queue 동시 실행 한도 조정

### Events & Alerts

- 누가 사용하는가: AI 운영자
- 이 화면에서 할 수 있는 것:
  - 이벤트 스트림 조회 (severity 필터: Critical, Warning, Info)
  - 이벤트 상세 확인 (시각, 심각도, 출처, 유형, 메시지, 상태)
  - 관련 entity로 이동 (이벤트와 연결된 job, worker, model 열기)
  - alert 확인 (acknowledge)
  - alert 음소거 (mute)
  - alert 에스컬레이션 (escalate)

### Usage Analytics

- 누가 사용하는가: 관리자
- 이 화면에서 할 수 있는 것:
  - 시간 범위 선택하여 사용량 분석
  - GPU 활용률 추이 확인
  - queue 대기 시간 추이 확인
  - model별 사용량 상위 N개 확인
  - model별 GPU 사용 시간 확인
  - 실패 분포 확인 (실패 코드별)
  - 시간대별/노드별 히트맵 확인
  - 상세 breakdown 테이블에서 job/model/node 단위로 drill-down

### Settings

- 누가 사용하는가: 관리자
- 이 화면에서 할 수 있는 것:
  - 정적 설정 확인 (읽기 전용 — 시스템 구성, 환경 정보)
  - 동적 정책 수정:
    - alert 임계값 조정 (queue 대기 시간, heartbeat 누락 등)
    - queue 동시 실행 기본값 조정
    - preload 기본 정책 조정
  - 정책 변경 시 영향 범위 확인
  - Secret 설정 건강 상태 확인

---

## API를 통한 기능 (콘솔 외)

콘솔의 모든 기능은 API로도 호출할 수 있다. ingradient-platform 등 연동 제품에서 API를 통해 학습/추론을 트리거한다.

### Job 생성

- job type, runtime, model, recipe, 리소스 요구사항, 입력 아티팩트를 지정하여 job을 생성한다
- 실행 위치 선호(자체 GPU, 외부 등)를 지정할 수 있지만, 최종 결정은 플랫폼이 한다
- 우선순위와 latency class를 지정할 수 있다

### Model 등록

- 새 model을 registry에 등록한다 (이름, runtime, task type, framework, adapter 등)
- 기존 model에 새 version을 추가한다 (아티팩트 URI, checksum)
- 외부에서 학습한 model도 등록할 수 있다 (BYOM — 지원 형식 내에서)
