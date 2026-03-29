# Project Docs Writing Order

- 문서명: Project Docs Writing Order
- 목적: 개별 프로젝트의 문서를 작성할 때의 순서를 안내한다.
- 적용 범위: ingradient-docs/docs/projects/{프로젝트}/
- 상태: Draft
- Owner: Repo Owners
- 마지막 수정일: 2026-03-29

## 언제 사용하는가

- 새 프로젝트(서비스/앱)를 만들 때
- 기존 프로젝트의 문서를 처음부터 정비할 때
- 프로젝트에 큰 변경이 있어 문서를 전면 업데이트할 때

시스템 전체 문서를 만들거나 재편할 때는 `system_docs_writing_order.md`를 참조한다.

## 전제 조건

프로젝트 문서를 작성하기 전에 아래 공통 문서가 존재해야 한다. 없으면 `system_docs_writing_order.md`를 따라 먼저 작성한다.

- `architecture/system_overview.md` — 이 프로젝트가 전체에서 어디에 위치하는지
- `architecture/service_responsibility.md` — 이 프로젝트의 책임 범위
- `product/terminology.md` — 사용할 용어
- `dev/coding_convention.md` — 따를 컨벤션

## 작성 원칙

- **큰 그림에서 상세로.** 프로젝트 목적 → 내부 구조 → 데이터 → API → 운영 → 기능 상세 순서로 작성한다.
- **앞 문서가 뒷 문서의 입력이 된다.** overview가 없으면 architecture를 쓸 수 없고, architecture가 없으면 data_model을 쓸 수 없다.
- **구조와 확장성을 고려한다.** 지금 구현할 것뿐 아니라 향후 추가될 것도 문서 구조에 자리를 잡아둔다.
- **`_template/`을 기반으로 시작한다.** 빈 파일부터 만들지 않고 템플릿을 복사하여 채운다.

## 작성 순서

### 1단계: 프로젝트 정의 (뭘 왜 만드는가)

| 순서 | 문서 | 내용 |
|------|------|------|
| 1 | `project_overview.md` | 프로젝트 목적, 범위/비범위, 기술 스택, 초기 성공 기준, 주요 의존성 |

### 2단계: 제품 안내 (무엇을 할 수 있는가)

기술적인 설계에 들어가기 전에, 이 서비스가 사용자에게 **무엇을 해주는지**를 화면(페이지) 단위로 먼저 정리한다. 기술 용어 없이 일반인도 이해할 수 있는 수준으로 작성한다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 2 | `product_guide.md` | 제품 운영 방식 + 각 화면에서 사용자가 할 수 있는 것을 역할별로 정리 |
| 3 | `user_scenarios.md` | 사용자가 특정 목적을 달성하기 위해 어떤 화면을 거치는지 흐름 단위로 정리 |
| 4 | `wireframes/` | 각 화면의 구조, 요소 배치, 인터랙션 설계. 모달, 상태별 화면 포함. 디자이너/기획자/개발자가 합의하는 용도 |

예시:
- auth-service: "로그인 페이지에서 Login ID로 로그인한다", "사용자 목록 페이지에서 초대/상태 변경/강제 로그아웃한다", "디바이스 페이지에서 승인/폐기한다"
- ingradient-ai: "Overview에서 KPI와 worker 상태를 본다", "Jobs에서 실패 원인을 확인하고 retry한다", "Models에서 버전을 promote/rollback한다"

이 단계에서는:
- **사용자가 할 수 있는 행동** 중심으로 작성한다 (DB 스키마, API 엔드포인트는 아직 안 쓴다)
- **화면 단위로** 정리한다 (어떤 페이지에서 무엇을 하는지)
- **어떤 역할의 사용자가 쓰는지** 명시한다 (admin, 일반 사용자, 운영자 등)
- product_guide.md와 user_scenarios.md가 이후 내부 설계(architecture, data_model)와 기능 상세 기획(features/)의 입력이 된다

2단계 문서들의 차이:

| 문서 | 관점 | 예시 |
|------|------|------|
| product_guide.md | 화면 단위. "이 화면에서 뭘 할 수 있는가" | "사용자 관리 페이지에서 초대, 역할 변경, 강제 로그아웃이 가능하다" |
| user_scenarios.md | 목적 단위. "이 목적을 달성하려면 어떤 화면을 거치는가" | "새 직원 온보딩: 조직 생성 → 초대 발송 → 수락 → 프로젝트 배정" |
| wireframes/ | 화면 설계. "이 화면이 어떻게 생겨야 하는가" | "상단에 검색바, 메인에 테이블, + 버튼 클릭 시 모달 열림, 모달 안에 필드..." |
| features/{기능}.md | 기능 상세. 시나리오, 예외 흐름, UI/UX, 테스트 계획 | "초대 기능: 기본 흐름, 만료 시, 이미 가입된 사용자 시..." (6단계에서 작성) |
| user_guide.md | 사용법. "이 화면을 이렇게 쓰면 된다" (개발 후) | "사용자를 추가하려면 + 버튼을 클릭하고..." (7단계에서 작성) |

### 3단계: 내부 설계 (어떻게 만드는가)

product_guide.md와 user_scenarios.md를 기반으로 내부 기술 설계를 진행한다. **각 문서를 단독으로 작성하지 않고, 아래 공통 문서를 반드시 참조하면서 작성한다.**

| 순서 | 문서 | 내용 | 조건 |
|------|------|------|------|
| 6 | `architecture.md` | 내부 구조, 모듈 구성, 실행 흐름, 확장 포인트 | 항상 |
| 7 | `data_model.md` | DB 엔티티, 필드, 관계, 상태 전이, SoT 경계 | 자체 저장 데이터가 있으면 |
| 8 | `api_contract.md` | API 엔드포인트, 요청/응답, 에러 코드, 인증 | 외부 API가 있으면 |

작성 시 참조할 공통 문서:

| 작성 문서 | 참조할 문서 | 이유 |
|-----------|-------------|------|
| architecture.md | `../architecture/system_overview.md` | 전체 시스템에서의 위치, Plane 구분 |
| | `../architecture/service_responsibility.md` | 이 서비스의 책임 범위, 다른 서비스와의 경계 |
| | `../product/multi_product_integration.md` | 다른 서비스와의 연결 방식 |
| | `../dev/coding_convention.md` | 코드 구조, 레이어 규칙 |
| data_model.md | `../data/data_ownership_policy.md` | 데이터 소유권, SoT 기준 |
| | `../data/storage_policy.md` | 저장 위치, retention 규칙 |
| | `../product/terminology.md` | 엔티티/필드 네이밍이 용어와 일치하는지 |
| api_contract.md | `../api/api_principles.md` | API 설계 원칙 |
| | `../api/error_response_policy.md` | 에러 응답 형식 |
| | `../api/event_contracts.md` | 비동기 이벤트 계약 (해당 시) |
| | `../dev/api_convention.md` | 리소스 네이밍, 페이지네이션, 스키마 검증 |
| | `../api/auth_api.md` | auth 연동 (해당 시) |

### 4단계: 운영 설계 (어떻게 운영하는가)

| 순서 | 문서 | 내용 |
|------|------|------|
| 9 | `deployment.md` | 배포 환경, 환경변수, 인프라 구성 |
| 10 | `operations.md` | 모니터링, 로그, 알람, 트러블슈팅 포인트 |

작성 시 참조할 공통 문서:

| 작성 문서 | 참조할 문서 | 이유 |
|-----------|-------------|------|
| deployment.md | `../architecture/deployment_architecture.md` | 전체 배포 구조 |
| | `../architecture/environment_strategy.md` | 환경별 전략 (dev/staging/prod) |
| | `../dev/ci_cd.md` | CI/CD 파이프라인, 브랜치별 환경 매핑 |
| | `../dev/migration_policy.md` | DB/API 마이그레이션 절차 |
| operations.md | `../ops/monitoring_observability.md` | 모니터링 기준 |
| | `../ops/sla_slo_policy.md` | SLA/SLO 기준 |
| | `../ops/incident_response.md` | 장애 대응 절차 |
| | `../ops/security_access_control.md` | 보안, 접근 제어 |

### 5단계: 방향과 계획 (어디로 가는가)

| 순서 | 문서 | 내용 |
|------|------|------|
| 11 | `roadmap.md` | 전체 방향, 단계별 계획, 우선순위, 기술 부채, 미결정 사항 |
| 12 | `upcoming.md` | 아이디어, 개선사항, 기술 부채 대기열 |
| 13 | `releases/README.md` | 릴리즈 인덱스 |
| 14 | `releases/v0.0.1.md` | 첫 버전 릴리즈 계획 (목표, 기능 체크리스트, 배포 계획) |

### 6단계: 기능 상세 기획

product_guide.md와 user_scenarios.md를 기반으로 개별 기능의 상세 기획을 작성한다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 15 | `features/README.md` | 기능 목록 인덱스 |
| 16 | `features/{기능명}.md` | 개별 기능 상세 기획 (`feature_spec_template.md` 양식). 상세 시나리오, 예외 흐름, UI/UX, 테스트 계획 포함 |

`releases/v0.0.1.md`의 각 항목에서 features/ 문서를 링크한다.

### 7단계: 사용자 가이드

| 순서 | 문서 | 내용 |
|------|------|------|
| 17 | `user_guide.md` | 사용자/운영자 가이드 |
| 18 | `manual_tests.md` | 수동 테스트 항목 (기능 추가 시 누적) |

### 9단계: 릴리즈 기록 (배포 후)

| 순서 | 문서 | 내용 |
|------|------|------|
| 19 | `release_notes.md` | 실제 배포 기록 (배포 완료 후 작성) |

## 공통 문서 업데이트

프로젝트 문서를 작성한 후 아래 공통 문서도 반드시 업데이트한다.

| 문서 | 수정 내용 |
|------|-----------|
| `architecture/system_overview.md` | 시스템 구성요소에 새 프로젝트 추가 |
| `architecture/service_responsibility.md` | 책임 매트릭스, SoT에 추가 |
| `product/multi_product_integration.md` | 제품 목록, 연결 구조에 추가 |
| `product/user_flow.md` | 관련 사용자 흐름 추가 |
| `product/terminology.md` | 새 용어 추가 |
| `projects/README.md` | 프로젝트 목록에 추가 |

## 프로젝트 문서 구조 요약

```
projects/{프로젝트}/
├── project_overview.md      ← 1. 뭘 왜
├── product_guide.md          ← 2. 화면별 기능 안내 (사용자 관점)
├── user_scenarios.md         ← 3. 목적별 화면 흐름
├── wireframes/               ← 4. 화면 구조/인터랙션 설계
│   ├── README.md
│   └── {화면명}.md
├── architecture.md           ← 6. 어떻게 (내부 설계)
├── data_model.md             ← 7. 데이터
├── api_contract.md           ← 8. API
├── deployment.md             ← 9. 배포
├── operations.md             ← 10. 운영
├── roadmap.md                ← 11. 방향
├── upcoming.md               ← 12. 아이디어 대기열
├── releases/
│   ├── README.md             ← 13. 릴리즈 인덱스
│   └── v0.0.1.md             ← 14. 첫 버전 계획
├── features/
│   ├── README.md             ← 15. 기능 인덱스
│   └── {기능명}.md           ← 16. 기능 상세 기획
├── user_guide.md             ← 17. 사용자 가이드
├── manual_tests.md           ← 18. 수동 테스트
└── release_notes.md          ← 19. 배포 기록
```
