# INGRADIENT Documentation Blueprint

## 1. 목적

이 문서는 INGRADIENT Platform, AI, Edge, auth-service, medilabel 및 이후 파생 프로젝트까지 포함하는 **전체 문서 체계의 기준안**이다.

목표는 다음과 같다.

- 어떤 문서를 왜 만들어야 하는지 명확히 한다.
- 문서 간 역할 중복을 줄인다.
- 시스템 구조, 책임, API, 데이터, 운영, 보안, 제품 흐름을 한 번에 이해할 수 있게 한다.
- 새 프로젝트를 만들 때 어떤 문서를 최소한 작성해야 하는지 기준을 제공한다.
- 문서가 설계 산출물에 그치지 않고 실제 개발/운영 기준으로 유지되게 한다.

---

## 2. 문서 체계의 기본 원칙

### 2.1 문서 계층
문서는 크게 4개 계층으로 나눈다.

1. **Governance**
   - 문서 자체의 규칙, 작성 기준, 수명주기, 프로젝트 생성 시 필수 문서 정의
2. **System / Technical**
   - 아키텍처, 서비스 책임, API, 데이터 구조, 배포 구조, 운영 정책
3. **Product / UX**
   - 사용자 흐름, 역할 흐름, 제품 간 연계, UI/UX 관점의 요구사항
4. **Project-specific**
   - 특정 repo 또는 특정 서비스에만 해당하는 상세 설계/실행 문서

### 2.2 SSOT 원칙
- 같은 주제는 가능한 한 **한 문서만 SSOT**로 둔다.
- 다른 문서는 그 SSOT를 참조하거나 요약만 한다.
- 예:
  - 전체 시스템 구조: `architecture/system_overview.md`
  - 서비스 책임 경계: `architecture/service_responsibility.md`
  - 데이터 저장/소유 정책: `data/storage_policy.md`
  - 인증/권한 정책: `ops/security.md`

### 2.3 문서 종류 구분
각 문서는 다음 중 하나에 가깝게 정의한다.

- **Overview 문서**: 큰 그림과 범위 설명
- **Policy 문서**: 반드시 지켜야 하는 규칙 정의
- **Spec 문서**: 구현 기준과 인터페이스 정의
- **Runbook 문서**: 운영/대응 절차
- **Plan 문서**: 향후 구현 계획 또는 단계별 로드맵

### 2.4 문서 작성 시 공통 메타데이터
모든 핵심 문서는 상단에 최소 다음 항목을 둔다.

- 문서명
- 목적
- 적용 범위
- 상태: Draft / Review / Approved / Deprecated
- Owner
- Reviewer
- 마지막 수정일
- 관련 SSOT 문서 링크

### 2.5 문서 길이 원칙
- 문서는 가능하면 **500줄 이내**로 유지한다.
- 길어질 경우 한 문서에 다 넣지 말고 주제별로 분리한다.
- 배경 설명보다 **실제 의사결정과 구현/운영에 필요한 내용**을 우선한다.
- 반복되는 내용은 복붙하지 말고 SSOT 문서 링크로 연결한다.
- README는 특히 더 compact 하게 유지하고, 상세 내용은 하위 문서로 보낸다.

---

## 3. 추천 디렉토리 구조

```text
docs/
  README.md

  governance/
    README.md
    documentation_policy.md
    project_documentation_requirements.md
    document_lifecycle_policy.md
    document_change_policy.md

  architecture/
    README.md
    system_overview.md
    service_responsibility.md
    deployment_architecture.md
    environment_strategy.md
    configuration_management.md

  api/
    README.md
    api_principles.md
    auth_api.md
    platform_api.md
    ai_api.md
    edge_api.md
    event_contracts.md
    error_response_policy.md

  data/
    README.md
    storage_policy.md
    data_ownership_policy.md
    dataset_snapshot_policy.md
    artifact_policy.md
    retention_backup_policy.md

  ai/
    README.md
    model_lifecycle.md
    execution_routing_policy.md
    resource_cost_policy.md
    training_job_policy.md
    inference_serving_policy.md

  ops/
    README.md
    monitoring_observability.md
    failure_retry_policy.md
    security_access_control.md
    incident_response.md
    sla_slo_policy.md
    troubleshooting.md
    debug_notes.md
    test_strategy.md

  dev/
    README.md
    repo_strategy.md
    coding_convention.md
    api_convention.md
    release_strategy.md
    ci_cd.md
    migration_policy.md
    code_review_guide.md
    git_workflow.md

  product/
    README.md
    user_flow.md
    role_permission_flow.md
    multi_product_integration.md
    terminology.md
    feature_spec_template.md
    uiux_planning_template.md
    scenario_template.md
    test_plan_template.md

  projects/
    README.md
    _template/
      README.md
      project_overview.md
      architecture.md
      api_contract.md
      data_model.md
      deployment.md
      operations.md
      roadmap.md
      release_notes.md
      user_guide.md
      features/
        README.md
        feature_template.md
```

---

## 4. 최상위 README에 들어갈 내용

## `docs/README.md`
### 목적
문서 전체의 인덱스 역할을 한다.

### 포함 내용
- 문서 체계 소개
- 상황별로 어디를 봐야 하는지
- 반드시 자주 참조하는 공통 문서 목록
- 프로젝트별 문서 위치 규칙
- 작업 유형별 진입 경로

### 추천 섹션
1. 문서 체계 개요
2. 상황별 문서 진입 가이드
3. 공통 규칙 문서
4. 영역별 문서 목록
5. 프로젝트별 문서 규칙

---

# 5. Governance 문서

## `governance/documentation_policy.md`
### 목적
전체 문서 운영 원칙 정의.

### 포함 내용
- 문서 작성 목적
- 문서 분류 기준
- SSOT 원칙
- 중복 문서 금지 원칙
- 폴더 배치 원칙
- 문서 이름 규칙
- 변경 시 업데이트 규칙
- 승인 프로세스

### 추천 섹션
1. 문서 운영 목적
2. 문서 분류 체계
3. SSOT 규칙
4. 명명 규칙
5. 문서 작성/수정/폐기 규칙
6. 책임자와 승인 절차

---

## `governance/project_documentation_requirements.md`
### 목적
새 프로젝트 또는 새 서비스 생성 시 반드시 준비해야 할 문서를 정의한다.

### 포함 내용
- 프로젝트 유형별 필수 문서
- 단계별 필수 문서
- 최소 문서 셋
- 문서 owner/reviewer 규칙
- 문서 미작성 시 개발 제한 기준

### 추천 섹션
1. 적용 대상
2. 프로젝트 유형 정의
   - backend service
   - frontend/web app
   - ai service
   - edge app
   - worker/batch
   - shared package
3. 공통 필수 문서
4. 유형별 추가 필수 문서
5. 개발 시작 전 체크리스트
6. 배포 전 체크리스트
7. 운영 전 체크리스트

### 예시: 공통 필수 문서
- `project_overview.md`
- `architecture.md`
- `api_contract.md` 또는 API 없음 명시
- `data_model.md` 또는 데이터 저장 안 함 명시
- `deployment.md`
- `operations.md`
- `roadmap.md`

---

## `governance/document_lifecycle_policy.md`
### 목적
문서의 상태와 수명주기를 정의한다.

### 포함 내용
- Draft / Review / Approved / Deprecated 정의
- 어떤 상태에서 무엇이 가능한지
- 문서 폐기 규칙
- 변경 이력 관리 방식
- 이전 버전 보관 방식

### 추천 섹션
1. 문서 상태 정의
2. 상태 전환 규칙
3. 버전 관리
4. Deprecated 처리 기준
5. Archive 정책

---

## `governance/document_change_policy.md`
### 목적
새 문서를 추가하거나 기존 문서를 수정할 때 반드시 확인해야 할 사항을 정의한다.

### 포함 내용
- 기존 SSOT와 충돌 여부 확인
- 관련 문서 동시 업데이트 범위
- 용어 통일 여부
- API/데이터/권한 영향 범위 점검
- 승인 대상과 리뷰 범위
- 변경 후 README/index 반영 규칙

### 추천 섹션
1. 문서 추가 전 확인사항
2. 문서 수정 전 확인사항
3. 영향도 체크리스트
4. 연관 문서 업데이트 규칙
5. README/링크/인덱스 갱신 규칙
6. 승인 및 공지 기준

---

# 6. Architecture 문서

## `architecture/system_overview.md`
### 목적
전체 시스템의 SSOT 아키텍처 문서.

### 포함 내용
- 전체 구성요소
- Cloud / AI / Edge / auth / platform / medilabel 관계
- control plane vs execution plane
- 주요 데이터 흐름
- 주요 네트워크 흐름
- 저장소 계층
- 환경별 차이의 개요

### 추천 섹션
1. 시스템 목적과 범위
2. 시스템 구성요소
3. 전체 논리 아키텍처
4. Control Plane / Execution Plane 구분
5. 데이터 흐름
6. 네트워크 흐름
7. 스토리지 개요
8. 주요 설계 원칙
9. 비범위 사항

### 반드시 들어가면 좋은 그림
- 전체 박스 다이어그램
- 데이터 흐름 다이어그램
- 네트워크 경계 다이어그램

---

## `architecture/service_responsibility.md`
### 목적
서비스 간 경계를 명확히 한다.

### 포함 내용
- 각 서비스의 책임
- 각 서비스가 하지 않는 것
- 충돌 가능 영역의 분리 기준
- 책임 매트릭스

### 추천 섹션
1. 서비스 목록
2. 서비스별 핵심 책임
3. 서비스별 비책임 영역
4. 책임 매트릭스
5. 경계 충돌 사례와 기준
6. 변경 시 판단 원칙

### 반드시 포함할 표
- 기능 × 서비스 매트릭스
- Source of Truth 테이블

---

## `architecture/deployment_architecture.md`
### 목적
환경별 실제 배포 구조 정의.

### 포함 내용
- Cloud 배포 구조
- IDC / on-prem 배포 구조
- Edge 배포 구조
- 네트워크 연결 방식
- 저장소 위치
- 외부 의존성

### 추천 섹션
1. 배포 대상 환경
2. 환경별 구성도
3. 컴퓨팅 자원 배치
4. 스토리지 배치
5. 네트워크 연결
6. 보안 경계
7. 배포 시 주의사항

---

## `architecture/environment_strategy.md`
### 목적
개발/테스트/운영 환경 분리 전략 정의.

### 포함 내용
- dev / staging / prod 정의
- 데이터 분리 수준
- AI worker 분리 전략
- 테스트 데이터 사용 원칙
- 환경 간 승격 기준

### 추천 섹션
1. 환경 정의
2. 환경별 목적
3. 데이터 분리 정책
4. 인프라 분리 정책
5. 릴리스 승격 기준

---

## `architecture/configuration_management.md`
### 목적
설정 관리 원칙 정의.

### 포함 내용
- env / DB / config file 분리 기준
- secret 관리 방식
- 고객별 설정 관리
- 설정 우선순위
- runtime override 정책

### 추천 섹션
1. 설정 유형 분류
2. 저장 위치 기준
3. Secret 정책
4. 고객별 설정 정책
5. 변경/배포 방식
6. 감사 및 추적

---

# 7. API 문서

## `api/api_principles.md`
### 목적
모든 서비스 간 API 설계 공통 원칙 정의.

### 포함 내용
- REST/gRPC/Event 사용 기준
- 리소스 naming 규칙
- idempotency 규칙
- pagination/filtering/sorting 규칙
- async job API 패턴
- 인증 방식 원칙

### 추천 섹션
1. API 스타일 원칙
2. URI / endpoint 규칙
3. Request / Response 기본 구조
4. 비동기 작업 패턴
5. 버전 관리 정책
6. 호환성 정책

---

## `api/auth_api.md`
### 목적
auth-service 관련 인터페이스 정의.

### 포함 내용
- 로그인/토큰/리프레시
- 사용자/조직/멤버십/권한 관련 API
- JWT 클레임 구조
- platform/ai/edge가 auth를 어떻게 신뢰하는지

### 추천 섹션
1. 범위
2. 인증 플로우
3. 토큰 구조
4. 조직/멤버십 API
5. 권한 관련 정보 전달 방식
6. 에러 규칙

---

## `api/platform_api.md`
### 목적
platform의 외부/내부 API 기준 정의.

### 포함 내용
- dataset / project / labeling / export / training request 등
- auth와의 연계 포인트
- ai/edge와의 연동 포인트
- 비동기 job 패턴

### 추천 섹션
1. 핵심 리소스
2. 프로젝트/데이터셋 API
3. 라벨링/승인/consensus API
4. export/import API
5. AI 요청 API
6. Edge 연동 API

---

## `api/ai_api.md`
### 목적
platform ↔ ai, ai 내부 실행 관련 인터페이스 정의.

### 포함 내용
- training job 생성
- inference 요청
- model registry 관련 API
- job status / logs / metrics / artifacts
- callback or polling 규칙

### 추천 섹션
1. AI 서비스 범위
2. Training API
3. Inference API
4. Model API
5. Artifact API
6. 상태/로그/메트릭 전달 규칙

---

## `api/edge_api.md`
### 목적
edge ↔ platform / edge ↔ local agent 인터페이스 정의.

### 포함 내용
- 장치 등록
- 설정 동기화
- 데이터 업로드
- sync 상태 보고
- offline/online 전환 처리
- 로컬 제어용 인터페이스

### 추천 섹션
1. Edge 식별 및 등록
2. 설정 pull/push
3. 캡처 데이터 업로드
4. sync/retry 상태
5. 오프라인 동작 규칙
6. 에러/복구 규칙

---

## `api/event_contracts.md`
### 목적
이벤트 기반 통신이 있다면 메시지 계약 정의.

### 포함 내용
- 발행 이벤트 종류
- payload 구조
- 이벤트 버전 관리
- 재처리/중복 처리 규칙
- ordering 보장 여부

### 추천 섹션
1. 이벤트 사용 범위
2. 이벤트 목록
3. 이벤트 payload 정의
4. 전달 보장 수준
5. 재시도 및 중복 처리

---

## `api/error_response_policy.md`
### 목적
서비스 전반 에러 응답 형식을 통일한다.

### 포함 내용
- 에러 코드 구조
- 사용자용 메시지와 내부 메시지 분리
- validation / auth / permission / business / infra 에러 구분
- correlation id 사용

### 추천 섹션
1. 기본 에러 구조
2. HTTP 상태 코드 규칙
3. 도메인 에러 코드 체계
4. 로깅 연계 규칙

---

# 8. Data 문서

## `data/storage_policy.md`
### 목적
어떤 데이터가 어디에 저장되는지 정의한다.

### 포함 내용
- 데이터 유형 분류
- 원본 데이터 / 가공 데이터 / 메타데이터 / 로그 / artifact 구분
- 저장 위치와 보존 이유
- 중복 저장 금지 기준
- **프로젝트별 / 사용자별 / 플랜별 저장 용량 제한 정책**
- 과금/유료화와 연결되는 quota 기준

### 추천 섹션
1. 데이터 유형 정의
2. 저장소 종류
3. 데이터별 저장 위치
4. 접근 경로
5. 비용/성능 고려
6. 용량 quota 정책
7. 금지 사항

## `data/data_ownership_policy.md`
### 목적
데이터의 소유 주체와 수정 권한을 정의한다.

### 포함 내용
- 프로젝트/조직/서비스 단위 소유권
- 누가 생성하고 누가 수정 가능한지
- 어떤 서비스가 어떤 데이터의 SoT인지
- 읽기/쓰기 권한 원칙

### 추천 섹션
1. 소유권 범위
2. 데이터별 Owner / SoT
3. 수정 권한
4. 파생 데이터 책임
5. 삭제 권한

---

## `data/dataset_snapshot_policy.md`
### 목적
dataset snapshot의 의미와 생성 규칙 정의.

### 포함 내용
- snapshot 생성 시점
- immutable 여부
- training/export/reproducibility와의 관계
- snapshot ID 규칙
- snapshot에 포함되는 것 / 제외되는 것

### 추천 섹션
1. snapshot의 목적
2. 생성 트리거
3. 포함 범위
4. immutable 정책
5. 재현성 보장 방식
6. snapshot 보관 정책

---

## `data/artifact_policy.md`
### 목적
AI/Export/Report 등 각종 산출물의 구조와 관리 규칙 정의.

### 포함 내용
- model artifact
- training logs
- evaluation results
- exported packages
- PDF reports
- edge debug bundles

### 추천 섹션
1. artifact 분류
2. naming/version 규칙
3. 저장 위치
4. 접근 권한
5. retention 정책
6. 다운로드/삭제 정책

---

## `data/retention_backup_policy.md`
### 목적
보존, 백업, 삭제 정책 정의.

### 포함 내용
- 데이터 보존 기간
- 백업 주기
- 복구 가능 범위
- hard delete vs soft delete
- 고객 환경별 정책 차이

### 추천 섹션
1. 보존 대상
2. 보존 기간 기준
3. 백업 정책
4. 복구 정책
5. 삭제 정책
6. 감사 로그

---

# 9. AI 문서

## `ai/model_lifecycle.md`
### 목적
모델의 등록, 버전, 승격, 롤백 정책 정의.

### 포함 내용
- draft/staging/production 모델 상태
- 모델 버전 규칙
- promotion 조건
- rollback 기준
- 모델 폐기 기준

### 추천 섹션
1. 모델 상태 정의
2. 등록 절차
3. 버전 정책
4. 승격 정책
5. rollback 정책
6. 폐기 정책

---

## `ai/execution_routing_policy.md`
### 목적
어떤 실행을 어디에서 수행할지 정의.

### 포함 내용
- cloud vs IDC vs edge
- cpu vs gpu
- realtime vs batch
- fallback 기준
- locality/data gravity 고려

### 추천 섹션
1. 라우팅 목적
2. 입력 조건
3. 실행 위치 결정 규칙
4. fallback 규칙
5. 예외 처리

---

## `ai/resource_cost_policy.md`
### 목적
GPU/CPU/스토리지 비용 사용 기준 정의.

### 포함 내용
- GPU 점유 정책
- 큐 정책
- 동시 실행 제한
- 실시간/배치 자원 분리
- 고객별 quota 가능 여부
- **프로젝트별 / 사용자별 / 플랜별 GPU 사용 시간 또는 사용량 제한 정책**

### 추천 섹션
1. 리소스 분류
2. 예약/할당 정책
3. 우선순위 정책
4. quota 및 제한 정책
5. 비용 통제 기준
6. 모니터링 항목

## `ai/training_job_policy.md`
### 목적
학습 작업의 생성, 실행, 실패, 재실행 규칙 정의.

### 포함 내용
- job 상태
- queue 규칙
- retry 가능 조건
- OOM 처리 기준
- resume/retry/delete 규칙

### 추천 섹션
1. job lifecycle
2. 상태 전이
3. queue 정책
4. 실패 분류
5. retry/resume 규칙
6. artifact 산출 규칙

---

## `ai/inference_serving_policy.md`
### 목적
추론 서비스 운영 기준 정의.

### 포함 내용
- online serving / batch inference 구분
- latency 목표
- model selection 방식
- canary/rollback 전략
- 결과 저장 여부

### 추천 섹션
1. serving 유형
2. 모델 선택 규칙
3. 성능 목표
4. 장애 시 fallback
5. 결과 기록 정책

---

# 10. Ops 문서

## `ops/monitoring_observability.md`
### 목적
운영 관측 체계 정의.

### 포함 내용
- logs / metrics / traces
- 서비스별 핵심 지표
- AI/GPU 지표
- edge sync 지표
- 대시보드 구성 기준

### 추천 섹션
1. 관측 목표
2. 공통 지표
3. 서비스별 지표
4. 로그 표준
5. 추적/correlation 기준
6. 대시보드 구성
7. 알림 기준

---

## `ops/failure_retry_policy.md`
### 목적
장애 및 실패 대응 규칙 정의.

### 포함 내용
- partial failure 처리
- timeout 기준
- retry/backoff
- dead-letter 또는 수동 복구 기준
- edge sync 실패 처리

### 추천 섹션
1. 실패 유형 분류
2. timeout 정책
3. retry 정책
4. partial failure 처리
5. operator 개입 기준
6. 복구 검증

---

## `ops/security_access_control.md`
### 목적
보안 및 접근 통제 정책의 SSOT.

### 포함 내용
- auth-service 기준 권한 흐름
- service-to-service 인증
- storage 접근 통제
- 조직/프로젝트 데이터 격리
- medilabel 민감 데이터 보호 원칙

### 추천 섹션
1. 보안 목표
2. 사용자 인증/권한 구조
3. 서비스 간 인증
4. 데이터 격리
5. 저장소 접근 통제
6. 비밀정보 관리
7. 감사 로그

---

## `ops/incident_response.md`
### 목적
실제 사고 대응 절차 정의.

### 포함 내용
- 장애 등급
- 알림 및 에스컬레이션
- 초기 대응 절차
- 원인 분석
- 사후 회고

### 추천 섹션
1. Incident 등급
2. 대응 체계
3. 탐지 → 알림 → 대응 플로우
4. 커뮤니케이션 규칙
5. RCA 작성 기준

---

## `ops/sla_slo_policy.md`
### 목적
서비스 수준 목표 정의.

### 포함 내용
- 가용성 목표
- API 응답 목표
- AI job 완료 목표
- edge sync 지연 목표
- error budget 개념

### 추천 섹션
1. 대상 서비스
2. SLA / SLO 정의
3. 측정 방식
4. 보고 주기
5. 위반 시 조치

---

# 11. Dev 문서

## `dev/repo_strategy.md`
### 목적
repo 구조와 공유 패키지 전략 정의.

### 포함 내용
- monorepo vs multirepo 기준
- shared package 관리
- 공통 schema/ui/sdk 배치 기준
- repo 간 의존 규칙

### 추천 섹션
1. repo 분리 원칙
2. 현재 repo 구조
3. shared package 정책
4. 버전/배포 연계
5. 금지 패턴

---

## `dev/coding_convention.md`
### 목적
코드 스타일과 구조적 일관성 확보.

### 포함 내용
- naming 규칙
- 폴더 구조 규칙
- 테스트 파일 위치
- 주석/문서화 기준
- 타입/스키마 사용 원칙

### 추천 섹션
1. 기본 원칙
2. 언어별 규칙
3. 구조 규칙
4. 테스트 규칙
5. 금지 사항

---

## `dev/api_convention.md`
### 목적
API 구현 시 세부 규칙 통일.

### 포함 내용
- request/response naming
- DTO/schema 규칙
- pagination/filter 규칙
- 날짜/시간/ID 형식
- 에러 mapping 기준

### 추천 섹션
1. 명명 규칙
2. payload 규칙
3. schema/version 규칙
4. 날짜/시간/숫자 형식
5. 에러 처리 규칙

---

## `dev/release_strategy.md`
### 목적
버전, 호환성, 릴리스 기준 정의.

### 포함 내용
- semantic versioning 적용 범위
- backward compatibility 기준
- breaking change 처리
- release note 기준

### 추천 섹션
1. 버전 정책
2. 호환성 정책
3. breaking change 승인 기준
4. release note 규칙
5. rollback 기준

---

## `dev/ci_cd.md`
### 목적
빌드/테스트/배포 자동화 흐름 정의.

### 포함 내용
- build/test/deploy 파이프라인
- 브랜치 전략과 연결
- edge installer build
- artifact publish
- 배포 승인 규칙

### 추천 섹션
1. 파이프라인 개요
2. 브랜치/환경 연계
3. 테스트 단계
4. 배포 단계
5. 실패 시 처리

---

## `dev/migration_policy.md`
### 목적
DB/API/스토리지 구조 변경 시 마이그레이션 규칙 정의.

### 포함 내용
- schema migration 원칙
- backward compatible migration
- 롤백 가능성 기준
- 데이터 보존 주의사항

### 추천 섹션
1. 대상 변경 유형
2. migration 설계 원칙
3. 배포 순서
4. 롤백 전략
5. 검증 기준

---

# 12. Product 문서

## `product/user_flow.md`
### 목적
사용자 관점의 전체 흐름 정의.

### 포함 내용
- 데이터 업로드
- 라벨링
- 검수/consensus
- 학습 요청
- 결과 확인
- export/reporting

### 추천 섹션
1. 주요 사용자 유형
2. 핵심 시나리오
3. 단계별 행동 흐름
4. 예외 시나리오
5. 시스템 반응

---

## `product/role_permission_flow.md`
### 목적
역할과 권한이 실제 사용자 행동에서 어떻게 적용되는지 설명.

### 포함 내용
- owner/manager/labeler/reviewer/client/viewer 등
- 권한 흐름
- UI에서 보이는 차이
- backend enforcement 기준 연결

### 추천 섹션
1. 역할 정의
2. 권한 수준
3. 주요 기능별 허용 범위
4. UI 노출 규칙
5. backend enforcement 연계

---

## `product/multi_product_integration.md`
### 목적
platform, medilabel, auth, ai, edge 간 제품 관점 통합 구조 설명.

### 포함 내용
- 공통 auth
- 공통 AI
- 제품별 독립 영역
- 공통 데이터/권한 흐름
- 장기 통합 방향
- **medilabel은 현재 cloud 중심이지만, 향후 electron 기반 on-premise 형태를 추가할 수 있다는 전제**
- **cloud와 on-premise 간 UI/UX는 가능하면 최대한 동일하게 유지한다는 원칙**

### 추천 섹션
1. 제품 목록
2. 공통 기반
3. 제품별 역할
4. cloud/on-prem 공통 UX 원칙
5. 통합 시나리오
6. 확장 전략

## `product/terminology.md`
### 목적
용어 충돌 방지.

### 포함 내용
- project / dataset / sample / artifact / snapshot / job / model / deployment 등
- 각 용어의 정의
- 금지 용어 또는 혼동 주의 용어
- auth/platform/ai/edge 간 용어 통일

### 추천 섹션
1. 핵심 용어 목록
2. 정의
3. 동의어/금지어
4. 시스템별 매핑

---

# 13. Project-specific 문서 구조

공통 문서 외에도, 각 프로젝트 또는 각 repo 하위에는 자체 문서가 필요하다.
이를 위해 `docs/projects/` 아래에 템플릿을 두고, 실제 프로젝트별 문서를 연결하는 방식을 추천한다.

## 추천 구조

```text
projects/
  _template/
    README.md
    project_overview.md
    architecture.md
    api_contract.md
    data_model.md
    deployment.md
    operations.md
    roadmap.md
    release_notes.md
    user_guide.md
    features/
      README.md
      feature_template.md

  auth-service/
    project_overview.md
    architecture.md
    api_contract.md
    deployment.md
    operations.md
    roadmap.md
    release_notes.md
    user_guide.md
    features/
      login_refresh_flow.md
      org_membership_admin.md

  ingradient-platform/
  ingradient-ai/
  ingradient-edge/
  medilabel/
```

### 프로젝트별 상세 기능 기획 문서는 어디에 둘까
가장 권장하는 위치는 **각 프로젝트 폴더 아래 `features/` 디렉토리**다.

예:

```text
projects/
  ingradient-platform/
    features/
      dataset_export.md
      training_queue_ui.md
      project_role_matrix.md

  ingradient-edge/
    features/
      offline_sync_policy.md
      setup_mode_deflectometry.md
      camera_diagnostics_ui.md
```

이렇게 두는 이유는 다음과 같다.

- 기능 기획이 어느 프로젝트에 속하는지 즉시 보인다.
- 공통 정책 문서와 프로젝트 상세 기획 문서가 섞이지 않는다.
- 기능 단위로 변경 이력과 관련 설계를 추적하기 쉽다.
- 이후 구현, 테스트, 릴리즈 노트와 연결하기 좋다.

### 릴리즈 노트와 유저 가이드는 어디에 둘까
- **프로젝트별 릴리즈 노트**: 각 프로젝트 폴더 아래 `release_notes.md` 또는 릴리즈가 많아지면 `release_notes/` 디렉토리
- **프로젝트별 유저 가이드**: 각 프로젝트 폴더 아래 `user_guide.md` 또는 범위가 크면 `user_guides/` 디렉토리

권장 시작 구조는 단순하게 아래처럼 간다.

```text
projects/
  ingradient-platform/
    release_notes.md
    user_guide.md
```

문서가 커지면 나중에 아래처럼 확장한다.

```text
projects/
  ingradient-platform/
    release_notes/
      2026-03.md
      2026-04.md
    user_guides/
      admin_guide.md
      labeling_guide.md
      training_guide.md
```

원칙은 다음과 같다.

- **release note는 개발 변경 이력 중심**
- **user guide는 실제 사용자 행동/화면 기준**
- 기능 기획 문서와 섞지 않는다.

---

## `projects/_template/project_overview.md`
### 목적
해당 프로젝트가 왜 존재하는지 가장 짧고 명확하게 설명.

### 포함 내용
- 목적
- 범위
- 주요 사용자/의존 서비스
- 이 프로젝트가 담당하는 핵심 가치
- 비범위

### 추천 섹션
1. 프로젝트 소개
2. 목적
3. 범위 / 비범위
4. 주요 의존성
5. 관련 SSOT 문서

---

## `projects/_template/architecture.md`
### 목적
해당 프로젝트 내부 구조 설명.

### 포함 내용
- 모듈 구조
- 내부 컴포넌트 책임
- 외부 서비스 연동 포인트
- 데이터 흐름
- 런타임 구성

### 추천 섹션
1. 내부 구조 개요
2. 모듈/패키지 구성
3. 외부 인터페이스
4. 내부 데이터 흐름
5. 확장 포인트

---

## `projects/_template/api_contract.md`
### 목적
해당 프로젝트의 실제 인터페이스 정의.

### 포함 내용
- 외부 제공 API
- 내부 사용 API
- 이벤트 contract
- 인증/권한 처리

### 추천 섹션
1. API 개요
2. endpoint 목록
3. 요청/응답 구조
4. 인증 규칙
5. 에러 규칙

---

## `projects/_template/data_model.md`
### 목적
해당 프로젝트가 다루는 데이터 구조 정의.

### 포함 내용
- 핵심 엔티티
- 관계
- 저장소
- 소유권
- 주요 인덱스/조회 패턴

### 추천 섹션
1. 데이터 개요
2. 엔티티 정의
3. 관계도
4. 저장 위치
5. 주의사항

---

## `projects/_template/deployment.md`
### 목적
해당 프로젝트의 배포 방식 정의.

### 포함 내용
- 실행 환경
- 필요한 인프라
- 환경 변수
- dependency
- 배포 절차

### 추천 섹션
1. 실행 형태
2. 인프라 요구사항
3. 배포 절차
4. 운영 체크포인트

---

## `projects/_template/operations.md`
### 목적
운영 시 필요한 지표, 로그, 장애 대응 포인트 정리.

### 포함 내용
- 핵심 지표
- 주요 로그 포인트
- 알람 조건
- 장애 시 우선 점검 항목

### 추천 섹션
1. 운영 목적
2. 핵심 메트릭
3. 로그 위치
4. 알람
5. 트러블슈팅 포인트

---

## `projects/_template/roadmap.md`
### 목적
향후 구현 계획과 범위 관리.

### 포함 내용
- 현재 상태
- 다음 단계
- 우선순위
- 기술 부채
- open questions

### 추천 섹션
1. 현재 범위
2. 단계별 계획
3. 우선순위
4. 기술 부채
5. 미결정 사항

---

## `projects/_template/release_notes.md`
### 목적
해당 프로젝트의 릴리즈 변경 사항을 사용자/운영/개발 관점에서 기록한다.

### 포함 내용
- 버전/날짜
- 추가된 기능
- 변경된 동작
- 수정된 버그
- 마이그레이션 필요 여부
- 주의사항/known issues

### 추천 섹션
1. 릴리즈 버전
2. 주요 변경사항
3. Breaking changes
4. Bug fixes
5. 운영 영향
6. 후속 작업

---

## `projects/_template/user_guide.md`
### 목적
해당 프로젝트 사용자가 실제로 따라할 수 있는 사용 문서를 제공한다.

### 포함 내용
- 대상 사용자
- 주요 화면/기능 사용법
- 자주 하는 작업 절차
- 주의사항
- 문제 발생 시 참고 문서

### 추천 섹션
1. 대상 사용자
2. 시작하기
3. 주요 기능 사용법
4. 자주 묻는 문제
5. 관련 troubleshooting 링크

---

## `projects/_template/features/README.md`
### 목적
해당 프로젝트의 기능 기획 문서를 모아두는 진입점.

### 포함 내용
- 기능 문서 목록
- 진행 상태
- 우선순위
- 관련 공통 정책 문서 링크

### 추천 섹션
1. 기능 문서 목록
2. 현재 진행 중 기능
3. 먼저 읽을 기능 문서
4. 관련 공통 문서

---

## `projects/_template/features/feature_template.md`
### 목적
개별 기능 기획 문서의 기본 템플릿.

### 포함 내용
- 목적
- 범위/비범위
- 사용자 시나리오
- UI/UX 개요
- API/데이터 영향
- 권한 영향
- 테스트 계획
- 오픈 이슈

### 추천 섹션
1. 기능 개요
2. 문제 정의
3. 목표
4. 범위 / 비범위
5. 사용자 시나리오
6. UI/UX 방향
7. 데이터/API/권한 영향
8. 테스트 계획
9. 릴리즈 고려사항
10. 오픈 이슈

---

# 14. 프로젝트 생성 시 최소 문서 세트

새 프로젝트를 만들 때는 최소 아래 문서를 먼저 작성하도록 권장한다.

## 공통 최소 세트
1. `project_overview.md`
2. `architecture.md`
3. `deployment.md`
4. `operations.md`
5. `roadmap.md`
6. `release_notes.md`
7. `user_guide.md`

## 조건부 필수
- 외부 API가 있으면 `api_contract.md`
- 자체 저장 데이터가 있으면 `data_model.md`
- 비동기 job이 있으면 job lifecycle 섹션 추가
- 권한 차등이 있으면 permission 섹션 추가
- 오프라인 동작이 있으면 offline policy 섹션 추가
- 기능 기획이 시작되면 `features/` 하위 문서 생성

---

# 15. 프로젝트 유형별 추가 권장 문서

## Backend Service
- API contract
- data model
- migration notes
- operations

## Frontend / Web App
- user flow
- screen map 또는 IA
- state/data flow
- permission flow

## AI Service
- execution flow
- model lifecycle
- artifact policy
- resource policy

## Edge App
- offline/online sync policy
- device lifecycle
- local storage policy
- setup / diagnostics / recovery flow

## Worker / Batch
- job lifecycle
- retry/idempotency
- queue policy
- failure handling

## Shared Package
- package purpose
- public interface
- versioning strategy
- dependency constraints

---

# 16. 문서 작성 순서 추천

## Phase 1: 전체 기준 문서
먼저 아래 문서를 확정한다.
- `architecture/system_overview.md`
- `architecture/service_responsibility.md`
- `data/storage_policy.md`
- `ops/security_access_control.md`
- `governance/project_documentation_requirements.md`

## Phase 2: 서비스 간 연결 문서
그 다음 아래를 정리한다.
- `api/auth_api.md`
- `api/platform_api.md`
- `api/ai_api.md`
- `api/edge_api.md`
- `architecture/deployment_architecture.md`

## Phase 3: 운영/확장 문서
- `ops/monitoring_observability.md`
- `ops/failure_retry_policy.md`
- `architecture/environment_strategy.md`
- `architecture/configuration_management.md`

## Phase 4: 제품/개별 프로젝트 문서
- `product/*`
- `projects/*`

---

# 17. 상황별로 바로 확인해야 하는 핵심 문서

## 17.1 시스템 구조 판단이 필요할 때
- `architecture/system_overview.md`
- `architecture/service_responsibility.md`
- `architecture/deployment_architecture.md`

## 17.2 데이터 저장 / ownership / quota 판단이 필요할 때
- `data/storage_policy.md`
- `data/data_ownership_policy.md`
- `data/dataset_snapshot_policy.md`
- `data/artifact_policy.md`

## 17.3 API / 연동 계약 판단이 필요할 때
- `api/api_principles.md`
- 관련 서비스 API 문서
- `api/error_response_policy.md`

## 17.4 권한 / 보안 / 접근 제어 판단이 필요할 때
- `ops/security_access_control.md`
- `product/role_permission_flow.md`

## 17.5 릴리즈 / 코드 규칙 / 리뷰 기준 확인이 필요할 때
- `dev/release_strategy.md`
- `dev/coding_convention.md`
- `dev/api_convention.md`
- `dev/code_review_guide.md`
- `dev/git_workflow.md`

# 18. 실무적으로 특히 중요한 문서 우선순위

아래 문서는 가장 먼저 있어야 한다.

## Level 1 — 반드시 먼저
- `architecture/system_overview.md`
- `architecture/service_responsibility.md`
- `data/storage_policy.md`
- `api/api_principles.md`
- `ops/security_access_control.md`
- `governance/project_documentation_requirements.md`

## Level 2 — 개발 착수 전에 필요
- `api/auth_api.md`
- `api/platform_api.md`
- `api/ai_api.md`
- `api/edge_api.md`
- `architecture/deployment_architecture.md`
- `ops/failure_retry_policy.md`

## Level 3 — 운영 안정화 전에 필요
- `ops/monitoring_observability.md`
- `ops/incident_response.md`
- `data/retention_backup_policy.md`
- `dev/release_strategy.md`
- `dev/ci_cd.md`

---

# 19. 폴더별 README 구조

각 폴더의 `README.md`는 길게 쓰지 않는다.
각 README는 아래 4가지만 빠르게 알려주는 **폴더 진입 문서**로 유지하는 것을 권장한다.

- 이 폴더의 목적
- 언제 이 폴더를 읽는지
- 먼저 읽어야 할 문서
- 다음으로 이동할 폴더/문서

즉, 폴더별 README는 상세 스펙 문서가 아니라 **탐색 가이드** 역할만 수행한다.

---

## 19.1 공통 README 템플릿

모든 폴더의 README는 아래 정도의 최소 구조로 통일하는 것을 권장한다.

```md
# <Folder Name>

## 이 폴더는 무엇인가
짧게 2~4줄 설명.

## 언제 읽는가
- 어떤 상황에서 이 폴더를 봐야 하는지

## 먼저 읽을 문서
- `a.md`: 왜 먼저 읽는지
- `b.md`: 어떤 결정을 위해 읽는지

## 다음으로 읽을 문서
- `../other-folder/README.md`
- `specific-file.md`
```

---

## 19.2 `docs/README.md`
### 역할
전체 문서 시스템의 시작점.

### 최소 포함 내용
- 문서 체계 한 줄 설명
- 상황별로 어디를 봐야 하는지
- 가장 자주 참조하는 공통 규칙 문서 링크
- 작업 유형별 가이드 링크

### 추천 예시 구조
```md
# Docs

## 목적
이 디렉토리는 INGRADIENT 전체 문서의 루트다.

## 상황별로 어디를 볼지
- 시스템 구조가 필요하면 `architecture/README.md`
- 문서 규칙이 필요하면 `governance/README.md`
- API 연동이 필요하면 `api/README.md`
- 데이터 저장/소유가 필요하면 `data/README.md`
- AI 실행/리소스 정책이 필요하면 `ai/README.md`
- 운영/장애/보안이 필요하면 `ops/README.md`
- 개발 규칙/릴리즈/리뷰 기준이 필요하면 `dev/README.md`
- 사용자 흐름/기획/UIUX가 필요하면 `product/README.md`
- 프로젝트 상세 문서가 필요하면 `projects/README.md`

## 매번 공통으로 확인할 문서
- `dev/release_strategy.md`
- `dev/coding_convention.md`
- `dev/api_convention.md`
- `governance/document_change_policy.md`
- `dev/code_review_guide.md`
- `dev/git_workflow.md`

## 작업 유형별 진입
- 새 기능 요청: `projects/README.md`
- 기능 수정: `projects/README.md`
- 디버깅: `ops/README.md`
- 문서/기획 작성: `governance/README.md` + `product/README.md`
- 코드 리뷰: `dev/README.md`
- 릴리즈 준비: `dev/README.md` + 각 프로젝트 `release_notes.md`
- 사용자 안내 문서 수정: 각 프로젝트 `user_guide.md`
```

---

## 19.3 `governance/README.md`
### 언제 읽는가
- 새 프로젝트를 만들기 전
- 어떤 문서를 먼저 써야 할지 모를 때
- 문서 구조를 정리하거나 문서 상태를 관리할 때

### 먼저 읽을 문서
- `project_documentation_requirements.md`
- `documentation_policy.md`

### 최소 예시 구조
```md
# Governance

## 이 폴더는 무엇인가
문서 작성 규칙과 프로젝트별 필수 문서 기준을 정의한다.

## 언제 읽는가
- 새 서비스/프로젝트 시작 전
- 문서 구조를 정리할 때
- 문서 상태와 승인 기준이 필요할 때

## 먼저 읽을 문서
- `project_documentation_requirements.md`: 프로젝트 시작 시 필요한 문서 기준
- `documentation_policy.md`: 문서 체계와 SSOT 원칙
- `document_lifecycle_policy.md`: Draft/Approved/Deprecated 관리 기준

## 다음으로 읽을 문서
- 전체 시스템을 보려면 `../architecture/README.md`
- 실제 프로젝트 문서를 보려면 `../projects/README.md`
```

---

## 19.4 `architecture/README.md`
### 언제 읽는가
- 전체 구조를 이해할 때
- 서비스 경계나 배포 구조를 검토할 때
- 신규 팀원이 시스템을 처음 파악할 때

### 먼저 읽을 문서
- `system_overview.md`
- `service_responsibility.md`

### 최소 예시 구조
```md
# Architecture

## 이 폴더는 무엇인가
전체 시스템 구조, 서비스 경계, 배포/환경/설정 기준을 정의한다.

## 언제 읽는가
- 시스템 전체 구조를 파악할 때
- 어떤 서비스가 무엇을 담당하는지 확인할 때
- 배포 환경 또는 구성 전략을 정할 때

## 먼저 읽을 문서
- `system_overview.md`: 전체 시스템 SSOT
- `service_responsibility.md`: 서비스 간 책임 경계
- `deployment_architecture.md`: 환경별 배포 구조
- `environment_strategy.md`: dev/staging/prod 전략
- `configuration_management.md`: 설정 관리 기준

## 다음으로 읽을 문서
- API 연동은 `../api/README.md`
- 저장 구조는 `../data/README.md`
- 보안/운영은 `../ops/README.md`
```

---

## 19.5 `api/README.md`
### 언제 읽는가
- 서비스 간 통신을 구현할 때
- API 명세가 필요한 개발을 시작할 때
- 이벤트/에러 형식을 맞춰야 할 때

### 먼저 읽을 문서
- `api_principles.md`
- 연관 서비스별 API 문서 하나

### 최소 예시 구조
```md
# API

## 이 폴더는 무엇인가
서비스 간 통신 규약, API 설계 원칙, 이벤트/에러 형식을 정의한다.

## 언제 읽는가
- endpoint를 설계하거나 구현할 때
- 서비스 간 요청/응답 구조를 맞출 때
- auth/platform/ai/edge 연동을 시작할 때

## 먼저 읽을 문서
- `api_principles.md`: 공통 API 설계 원칙
- `auth_api.md`: auth-service 계약
- `platform_api.md`: platform 계약
- `ai_api.md`: AI 서비스 계약
- `edge_api.md`: edge 연동 계약
- `error_response_policy.md`: 에러 형식

## 다음으로 읽을 문서
- 전체 구조는 `../architecture/README.md`
- 데이터 정의는 `../data/README.md`
```

---

## 19.6 `data/README.md`
### 언제 읽는가
- 데이터 저장 위치를 정할 때
- snapshot/artifact 정의가 필요할 때
- 데이터 ownership 충돌을 막고 싶을 때

### 먼저 읽을 문서
- `storage_policy.md`
- `data_ownership_policy.md`

### 최소 예시 구조
```md
# Data

## 이 폴더는 무엇인가
데이터 저장, 소유권, snapshot, artifact, retention 기준을 정의한다.

## 언제 읽는가
- 어떤 데이터를 어디에 저장할지 정할 때
- SoT와 ownership이 헷갈릴 때
- AI 학습/Export 산출물 구조를 정할 때

## 먼저 읽을 문서
- `storage_policy.md`: 저장 위치 기준
- `data_ownership_policy.md`: 소유권과 수정 권한
- `dataset_snapshot_policy.md`: snapshot 정의
- `artifact_policy.md`: 산출물 구조
- `retention_backup_policy.md`: 보존/백업/삭제 기준

## 다음으로 읽을 문서
- 구조 전체는 `../architecture/README.md`
- AI 관련은 `../ai/README.md`
```

---

## 19.7 `ai/README.md`
### 언제 읽는가
- 학습/추론 구조를 설계할 때
- GPU 정책이나 job lifecycle을 정할 때
- 모델 운영 기준이 필요할 때

### 먼저 읽을 문서
- `model_lifecycle.md`
- `execution_routing_policy.md`

### 최소 예시 구조
```md
# AI

## 이 폴더는 무엇인가
모델 수명주기, 실행 라우팅, 리소스 정책, 학습/추론 운영 기준을 정의한다.

## 언제 읽는가
- 학습/추론 플로우를 구현할 때
- GPU/queue 정책을 검토할 때
- 모델 등록/승격/rollback 기준이 필요할 때

## 먼저 읽을 문서
- `model_lifecycle.md`: 모델 버전과 승격 기준
- `execution_routing_policy.md`: cloud/IDC/edge 실행 위치 기준
- `resource_cost_policy.md`: GPU/CPU/비용 정책
- `training_job_policy.md`: 학습 job lifecycle
- `inference_serving_policy.md`: 추론 운영 기준

## 다음으로 읽을 문서
- API 연동은 `../api/README.md`
- 운영 지표는 `../ops/README.md`
```

---

## 19.8 `ops/README.md`
### 언제 읽는가
- 장애 대응 기준이 필요할 때
- 로그/메트릭/알람을 설계할 때
- 보안과 접근 통제를 검토할 때

### 먼저 읽을 문서
- `security_access_control.md`
- `monitoring_observability.md`

### 최소 예시 구조
```md
# Ops

## 이 폴더는 무엇인가
운영, 모니터링, 장애 대응, 보안, 서비스 수준 목표를 정의한다.

## 언제 읽는가
- 운영 대시보드/알람을 설계할 때
- retry/timeout 정책을 정할 때
- 접근 권한과 데이터 격리를 검토할 때

## 먼저 읽을 문서
- `security_access_control.md`: 인증/권한/격리 기준
- `monitoring_observability.md`: 로그/메트릭/추적
- `failure_retry_policy.md`: 실패/재시도 정책
- `incident_response.md`: 장애 대응 절차
- `sla_slo_policy.md`: 서비스 수준 목표

## 다음으로 읽을 문서
- 구조는 `../architecture/README.md`
- 데이터 보존은 `../data/README.md`
```

---

## 19.9 `dev/README.md`
### 언제 읽는가
- repo 구조를 잡을 때
- 코드/응답 형식/릴리스 규칙을 맞출 때
- CI/CD와 migration 절차를 정할 때
- 코드 리뷰를 시작할 때
- 작업 완료 후 정리 절차를 확인할 때

### 먼저 읽을 문서
- `repo_strategy.md`
- `coding_convention.md`

### 최소 예시 구조
```md
# Dev

## 이 폴더는 무엇인가
개발 방식, repo 구조, 코드/API 규칙, 릴리스와 CI/CD 기준을 정의한다.

## 언제 읽는가
- 새 repo 또는 패키지 구조를 설계할 때
- 코드 스타일과 응답 구조를 맞출 때
- 빌드/테스트/배포 흐름을 정할 때
- 코드 리뷰 또는 머지 전 점검을 할 때

## 매번 공통으로 확인할 문서
- `release_strategy.md`: 릴리즈 기준과 호환성 정책
- `coding_convention.md`: 코드 규칙
- `api_convention.md`: API/응답 형식 규칙
- `code_review_guide.md`: 리뷰 기준
- `git_workflow.md`: branch/commit/push 흐름

## 작업 시 기본 행동 원칙
- 더 좋은 방법이 있거나 요구사항이 애매하면 먼저 질문한다.
- 작업 중 규칙 충돌이 보이면 관련 문서를 먼저 확인한다.
- 작업 완료 후 확인을 요청한다.
- 확인이 끝난 뒤 commit/push 여부를 묻는다.

## 다음으로 읽을 문서
- 전체 구조는 `../architecture/README.md`
- 프로젝트 상세는 `../projects/README.md`
```

---

## 19.10 `product/README.md`
### 언제 읽는가
- 사용자 흐름 중심으로 이해하고 싶을 때
- 역할별 UX 차이를 정리할 때
- platform/medilabel/auth/ai 관계를 제품 관점에서 볼 때
- 기획 문서 또는 기능 명세서를 새로 쓸 때

### 먼저 읽을 문서
- `user_flow.md`
- `role_permission_flow.md`

### 최소 예시 구조
```md
# Product

## 이 폴더는 무엇인가
사용자 흐름, 역할 흐름, 제품 간 관계와 용어를 제품 관점에서 정리한다.

## 언제 읽는가
- 기능 흐름을 사용자 관점으로 보고 싶을 때
- 역할별 UX/UI 차이를 설계할 때
- 여러 제품의 관계를 기능적으로 정리할 때
- 새 기능 기획 문서의 뼈대를 잡을 때

## 먼저 읽을 문서
- `user_flow.md`: 전체 사용자 흐름
- `role_permission_flow.md`: 역할별 행동/권한 흐름
- `multi_product_integration.md`: 제품 간 통합 구조
- `terminology.md`: 용어 정리
- `feature_spec_template.md`: 기능 명세 템플릿
- `uiux_planning_template.md`: UI/UX 기획 템플릿
- `scenario_template.md`: 사용자 시나리오 템플릿
- `test_plan_template.md`: 테스트 계획 템플릿

## 다음으로 읽을 문서
- 구현 구조는 `../architecture/README.md`
- 개별 프로젝트 상세는 `../projects/README.md`
```

---

## 19.11 `projects/README.md`
### 언제 읽는가
- 특정 프로젝트나 repo 문서를 찾을 때
- 새 프로젝트 문서를 만들 때
- 템플릿을 복사해서 시작할 때
- 새로운 기능 요청 또는 기능 수정 작업을 시작할 때

### 먼저 읽을 문서
- `_template/README.md`
- 원하는 프로젝트 폴더의 `project_overview.md`

### 최소 예시 구조
```md
# Projects

## 이 폴더는 무엇인가
개별 프로젝트 또는 repo별 상세 문서를 모아둔 곳이다.

## 언제 읽는가
- 특정 서비스의 내부 구조를 볼 때
- 새 프로젝트 문서를 생성할 때
- 프로젝트별 운영/배포/API 세부 내용을 확인할 때
- 새로운 기능 요청이나 기능 수정이 들어왔을 때

## 새로운 기능 요청이 들어오면 먼저 볼 것
- `<project>/project_overview.md`
- `<project>/architecture.md`
- `<project>/features/<target-feature>.md` 또는 새 기능 문서 생성
- `../product/feature_spec_template.md`
- `../product/uiux_planning_template.md`
- `../product/scenario_template.md`
- `../product/test_plan_template.md`
- 관련 정책 문서 (`../data`, `../api`, `../ops`)

## 기능 수정이 들어오면 먼저 볼 것
- `<project>/features/<target-feature>.md`
- `<project>/architecture.md`
- `<project>/api_contract.md` (있다면)
- `<project>/data_model.md` (있다면)
- 영향받는 공통 정책 문서
- 수정 후 `release_notes.md` 반영 여부 확인

## 먼저 읽을 문서
- `_template/README.md`: 새 프로젝트 문서 템플릿 안내
- `<project>/project_overview.md`: 프로젝트 목적과 범위
- `<project>/architecture.md`: 내부 구조
- `<project>/deployment.md`: 배포 방식
- `<project>/operations.md`: 운영 포인트
- `<project>/release_notes.md`: 최근 변경 이력
- `<project>/user_guide.md`: 사용자 관점 사용 흐름

## 다음으로 읽을 문서
- 문서 기준은 `../governance/README.md`
- 시스템 전체 기준은 `../architecture/README.md`
```

---

## 19.12 `projects/_template/README.md`
### 언제 읽는가
- 새 프로젝트 문서를 만들 때 바로 읽는 문서

### 먼저 읽을 문서
- `project_overview.md`
- `architecture.md`

### 최소 예시 구조
```md
# Project Template

## 이 폴더는 무엇인가
새 프로젝트 문서를 만들 때 복사해서 시작하는 기본 템플릿이다.

## 언제 읽는가
- 새 repo 또는 새 서비스 문서를 처음 만들 때

## 먼저 작성할 문서
- `project_overview.md`: 프로젝트 목적/범위
- `architecture.md`: 내부 구조
- `deployment.md`: 실행/배포 방식
- `operations.md`: 운영 포인트
- `roadmap.md`: 다음 단계
- `release_notes.md`: 변경 이력 시작점
- `user_guide.md`: 사용자 사용 흐름 시작점

## 기능 문서 작성 위치
- 자세한 기능 기획 문서는 `features/` 아래에 기능별 파일로 작성한다.
- 기능 문서에는 최소한 사용자 시나리오, UI/UX 방향, 테스트 계획, 영향 범위를 넣는다.

## 조건부 추가 문서
- API가 있으면 `api_contract.md`
- 저장 데이터가 있으면 `data_model.md`

## 다음으로 읽을 문서
- 전체 기준은 `../../governance/project_documentation_requirements.md`
```

---

# 20. 작업 유형별 읽기 경로와 운영 규칙

우선순위식 읽기 순서는 두지 않는다.
대신 **상황별로 꼭 확인해야 하는 문서**를 명확히 연결한다.

## 20.1 새 프로젝트를 만들 때
- `governance/project_documentation_requirements.md`
- `projects/README.md`
- `projects/_template/README.md`
- 필요한 템플릿 문서

### 확인할 것
- 최소 필수 문서 셋
- 기능 문서 생성 위치
- release note / user guide 시작 위치
- 공통 정책과 충돌 여부

## 20.2 새로운 기능 요청이 들어왔을 때
- 해당 프로젝트 `project_overview.md`
- 해당 프로젝트 `architecture.md`
- 해당 프로젝트 `features/<feature>.md` 또는 새 기능 문서 생성
- `product/feature_spec_template.md`
- `product/uiux_planning_template.md`
- `product/scenario_template.md`
- `product/test_plan_template.md`
- 관련 정책 문서 (`api/`, `data/`, `ops/`, `ai/`)

### 확인할 것
- 자세한 기능 명세
- UI/UX 방향
- 사용자 시나리오
- 테스트 계획
- 데이터/API/권한/운영 영향
- release note 반영 필요 여부
- user guide 반영 필요 여부

## 20.3 기능 수정을 할 때
- 해당 프로젝트 `features/<feature>.md`
- 해당 프로젝트 `architecture.md`
- 필요 시 `api_contract.md`, `data_model.md`, `user_guide.md`
- 관련 공통 정책 문서

### 확인할 것
- 기존 의도와 현재 동작 차이
- 데이터/API/권한/UI 영향 범위
- 사용자 가이드 수정 필요 여부
- 테스트 범위
- release note 반영 여부

## 20.4 버그 수정 / 디버깅을 할 때
- `ops/test_strategy.md`
- `ops/troubleshooting.md`
- `ops/debug_notes.md`
- 해당 프로젝트 `operations.md`
- 관련 기능 문서

### 확인할 것
- 재현 조건
- 테스트 방법
- 사소한 문제인지, 구조적 문제인지
- 고객 사용 중 발생 가능한 문제인지
- troubleshooting 반영 필요 여부
- debug note 기록 필요 여부

### 기록 원칙
- 사소한 문제는 따로 기록하지 않는다.
- 구조적이거나 재발 가능성이 높은 큰 문제는 `debug_notes.md`에 기록한다.
- 고객 사용 중 다시 발생할 수 있는 문제는 `troubleshooting.md`에 정리한다.

## 20.5 코드 리뷰를 할 때
- `dev/code_review_guide.md`
- `dev/coding_convention.md`
- `dev/api_convention.md`
- 관련 기능 문서
- 테스트 계획 또는 테스트 결과

### 확인할 것
- 구현이 기능 문서와 일치하는지
- 설계 충돌이 없는지
- 테스트 범위가 충분한지
- API/데이터/권한 영향이 문서와 맞는지

## 20.6 기획 및 문서 작성 요청이 들어왔을 때
- `governance/document_change_policy.md`
- `product/README.md`
- 관련 기존 SSOT 문서
- 해당 프로젝트 `features/` 또는 적절한 문서 위치

### 확인할 것
- 같은 주제 문서가 이미 있는지
- 기존 SSOT와 충돌하지 않는지
- 새 문서 위치가 맞는지
- README/index 링크도 같이 수정해야 하는지
- 문서가 500줄을 넘기지 않는지

## 20.7 릴리즈 준비를 할 때
- `dev/release_strategy.md`
- 각 프로젝트 `release_notes.md`
- `dev/ci_cd.md`
- 필요 시 `dev/migration_policy.md`
- 해당 프로젝트 `user_guide.md`

### 확인할 것
- 변경사항 정리
- breaking change 여부
- migration 필요 여부
- 사용자 안내 업데이트 여부
- 운영 영향 여부

## 20.8 사용자 가이드 또는 운영 가이드를 수정할 때
- 해당 프로젝트 `user_guide.md`
- `ops/troubleshooting.md`
- 관련 기능 문서
- 최근 `release_notes.md`

### 확인할 것
- 실제 사용자 행동 기준으로 설명되는지
- 화면/버튼/용어가 현재와 일치하는지
- 자주 발생하는 문제 링크가 필요한지

## 20.9 API를 추가하거나 바꿀 때
- `api/api_principles.md`
- `dev/api_convention.md`
- 해당 프로젝트 `api_contract.md`
- 관련 서비스 API 문서 (`auth_api.md`, `platform_api.md`, `ai_api.md`, `edge_api.md`)
- `api/error_response_policy.md`

### 확인할 것
- 계약 변경 범위
- backward compatibility
- 에러 형식 일관성
- 권한/인증 영향
- 관련 기능 문서 수정 필요 여부

## 20.10 데이터 구조나 저장 정책을 바꿀 때
- `data/storage_policy.md`
- `data/data_ownership_policy.md`
- `data/dataset_snapshot_policy.md`
- `data/artifact_policy.md`
- 해당 프로젝트 `data_model.md`

### 확인할 것
- SoT 변경 여부
- 저장 위치 변경 여부
- quota/과금 영향
- snapshot/artifact 영향
- retention/backup 영향

## 20.11 권한/보안 관련 작업을 할 때
- `ops/security_access_control.md`
- `product/role_permission_flow.md`
- 해당 프로젝트 기능 문서
- 관련 API 문서

### 확인할 것
- 역할별 허용 범위
- service-to-service 인증 영향
- data isolation 영향
- UI 노출 규칙 변경 여부

## 20.12 AI 학습/추론/리소스 정책을 바꿀 때
- `ai/model_lifecycle.md`
- `ai/execution_routing_policy.md`
- `ai/resource_cost_policy.md`
- `ai/training_job_policy.md`
- `ai/inference_serving_policy.md`
- 관련 기능 문서 및 API 문서

### 확인할 것
- cloud / IDC / edge 라우팅 영향
- GPU quota 영향
- 사용자/프로젝트 제한 영향
- 모델 승격/rollback 영향
- UI/운영 노출 변경 여부

## 20.13 환경/배포 구성을 바꿀 때
- `architecture/deployment_architecture.md`
- `architecture/environment_strategy.md`
- `architecture/configuration_management.md`
- `dev/ci_cd.md`
- 해당 프로젝트 `deployment.md`

### 확인할 것
- 환경별 차이
- secret/config 반영 위치
- 운영 영향
- rollback 가능 여부

## 20.14 공통 행동 규칙
- 더 좋은 방법이 있거나 요구사항이 애매하면 꼭 질문한다.
- 작업 도중 문서/코드/정책 충돌이 보이면 먼저 관련 문서를 확인한다.
- 작업이 끝나면 확인을 요청한다.
- 확인이 끝난 뒤 commit & push 진행 여부를 묻는다.

# 21. 최종 정리

좋은 문서 체계는 문서 수가 많은 것이 아니라, **서로의 역할이 겹치지 않고 실제 의사결정 기준으로 쓰이는 것**이다.

이 구조의 핵심은 다음과 같다.

- `README.md`는 각 폴더의 진입점이다.
- 각 README는 길게 설명하지 않고, **상황별로 꼭 봐야 하는 문서**만 compact 하게 연결한다.
- 상세 기준은 개별 정책/스펙 문서에 둔다.
- 문서는 가능하면 500줄 이내로 유지하고, 길어지면 분리한다.
- `governance/`는 문서 자체의 기준을 정의한다.
- `architecture/`, `api/`, `data/`, `ops/`, `ai/`, `dev/`, `product/`는 전사 공통 기준 문서다.
- `projects/`는 각 프로젝트의 상세 문서, 기능 기획 문서, 릴리즈 노트, 유저 가이드를 담는다.
- medilabel은 현재 cloud 중심이지만 향후 electron 기반 on-premise를 추가할 수 있으며, cloud/on-prem 간 UI/UX는 가능하면 동일하게 유지한다.
- storage 정책에는 사용자별/프로젝트별/플랜별 용량 제한을 포함한다.
- AI 리소스 정책에는 사용자별/프로젝트별/플랜별 GPU 사용 제한을 포함한다.

이 기준으로 정리하면, 문서를 순서대로 다 읽지 않아도 **상황별로 필요한 문서만 바로 찾아서 작업할 수 있는 구조**가 된다.

