# Untitled

Update: March 27, 2026 11:22 AM
Important: No
Author: 이준호
Status: 진행전

# 1. 핵심 문서 (Top Priority)

## 1.1 System Architecture (SSOT 문서)

👉 **가장 중요 (단 하나의 기준 문서)**

포함:

- 전체 구조 (Cloud / AI / Edge)
- 각 서비스 역할
- 데이터 흐름
- 네트워크 흐름
- storage 구조
- control plane vs execution plane

이건 이미 만든 문서가 기반이 되는데,

- *“모든 팀원이 여기를 기준으로 이해”**해야 함.

---

## 1.2 Service Responsibility Matrix

👉 서비스 간 경계 충돌 방지용

예:

| 기능 | auth | platform | ai | edge |
| --- | --- | --- | --- | --- |
| 로그인 | O | X | X | X |
| dataset 관리 | X | O | X | X |
| 학습 실행 | X | 요청만 | O | X |

이 문서 없으면:

- 중복 구현
- 책임 충돌
- API 꼬임

무조건 필요.

---

## 1.3 API Contract (서비스 간 통신 규약)

👉 실제 개발에서 제일 중요

포함:

- platform → ai 요청
- auth → platform 인증
- edge → platform 업로드
- ai → platform 결과

형태:

- OpenAPI 또는 명세 문서

---

## 1.4 Data Ownership & Storage Policy

👉 지금 구조에서 핵심

포함:

- 어떤 데이터가 어디에 저장되는지
- 누가 소유자인지
- 누가 읽을 수 있는지
- snapshot 정의
- artifact 구조

이거 없으면:

- 데이터 꼬임
- 중복 저장
- 비용 폭발

---

## 1.5 Deployment Architecture (환경별 구성)

👉 실제 운영 기준

포함:

- Cloud 구성
- IDC 구성
- Edge 구성
- 네트워크 연결
- storage 위치

---

# 2. 운영/확장 관점 필수 문서

## 2.1 Environment Strategy

👉 dev / staging / prod

- 각 환경 구성
- 데이터 분리
- AI worker 분리 여부
- 테스트 정책

---

## 2.2 Configuration Management Policy

👉 설정 어디서 관리할지

- env vs DB vs config file
- secret 관리
- per-customer 설정

---

## 2.3 Observability / Monitoring Plan

👉 장애 대응

- 로그
- metrics
- tracing
- alert 기준

특히 AI:

- GPU usage
- queue
- 실패율

---

## 2.4 Failure & Retry Policy

👉 실제 운영에서 필수

- job 실패 시 retry
- timeout 기준
- partial failure 처리
- edge sync 실패 처리

---

## 2.5 Security & Access Control

👉 특히 중요

- auth-service 기준 권한 흐름
- service-to-service 인증
- storage 접근 권한
- data isolation (특히 medilabel)

---

# 3. AI 중심 문서 (이미 일부 있음)

## 3.1 Model Lifecycle Policy

- 등록
- 버전
- 승격
- rollback

(이미 잘 잡혀 있음)

---

## 3.2 Dataset & Snapshot Policy

👉 추가 필요

- snapshot 생성 기준
- immutable 여부
- reproducibility

---

## 3.3 Execution Routing Policy

- IDC vs Cloud
- CPU vs GPU
- fallback

(이미 있음, 잘 됨)

---

## 3.4 Resource & Cost Policy

👉 추가 추천

- GPU 사용 정책
- batch vs realtime
- cost 제한

---

# 4. 개발/협업 문서

## 4.1 Repo Strategy

- monorepo vs multirepo 기준
- shared package 관리 (ingradient-ui)

---

## 4.2 Coding / API Convention

- naming
- error format
- response 구조

---

## 4.3 Release Strategy

- versioning
- backward compatibility
- migration

---

## 4.4 CI/CD Flow

- build
- test
- deploy
- edge installer build

---

# 5. 제품/UX 레벨 문서

## 5.1 User Flow

- 데이터 업로드 → 라벨링 → 학습 → 결과

---

## 5.2 Role/Permission Flow

- owner / manager / labeler 등

---

## 5.3 Multi-product Integration

👉 중요

- platform + medilabel 관계
- 공통 auth
- 공통 AI

---

# 6. 문서 구조

```
docs/
  architecture/
    system_overview.md
    service_responsibility.md
    deployment_architecture.md

  api/
    auth_api.md
    ai_api.md
    platform_api.md

  data/
    storage_policy.md
    dataset_snapshot.md

  ai/
    model_lifecycle.md
    execution_policy.md

  ops/
    monitoring.md
    failure_policy.md
    security.md

  dev/
    repo_strategy.md
    coding_convention.md
    ci_cd.md
  README.md
```