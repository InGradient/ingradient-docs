# System Docs Writing Order

- 문서명: System Docs Writing Order
- 목적: INGRADIENT 전체 문서 체계를 새로 만들거나 대규모로 재정비할 때의 작성 순서를 안내한다.
- 적용 범위: ingradient-docs/docs/ 전체
- 상태: Draft
- Owner: Platform Architecture
- 마지막 수정일: 2026-03-29

## 언제 사용하는가

- INGRADIENT 문서 체계를 처음부터 만들 때
- 새로운 도메인 영역(예: ai, data, ops)을 통째로 추가할 때
- 기존 문서 구조를 대규모로 재편할 때
- 프로젝트 단위가 아닌 시스템 전체 관점의 문서를 작성할 때

프로젝트 단위로 문서를 만들 때는 `project_docs_writing_order.md`를 참조한다.

## 작성 원칙

- **큰 범위에서 작은 범위로.** 전체 시스템 → 공통 정책 → 제품/도메인 → 프로젝트 상세 순서로 작성한다.
- **앞 문서가 뒷 문서의 입력이 된다.** 전체 구조를 모르면 서비스 책임을 나눌 수 없고, 책임을 모르면 프로젝트 문서를 쓸 수 없다.
- **구조와 확장성을 먼저 고려한다.** 지금 필요한 것만 채우는 게 아니라 향후 추가될 것도 자리를 잡아둔다.
- **SSOT를 지킨다.** 같은 내용을 여러 곳에 쓰지 않고, 한 곳에 쓰고 나머지는 링크한다.

## 작성 순서

### 1단계: 전체 시스템 구조

시스템의 큰 그림을 먼저 잡는다. 이 단계 없이 하위 문서를 쓰면 방향이 흔들린다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 1 | `architecture/system_overview.md` | 시스템 목적, 구성요소, Plane 구분, 데이터 흐름, 저장소, 설계 원칙 |
| 2 | `architecture/service_responsibility.md` | 서비스별 책임/비책임, 책임 매트릭스, SoT 기준 |
| 3 | `architecture/deployment_architecture.md` | 배포 구조, 환경 전략 |

### 2단계: 제품 도메인

시스템 구조 위에서 제품 관점의 규칙을 정의한다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 4 | `product/terminology.md` | 도메인 용어 정의. 이후 모든 문서가 이 용어를 따른다 |
| 5 | `product/user_flow.md` | 전체 사용자 흐름, 서비스 간 연결 |
| 6 | `product/role_permission_flow.md` | 역할, 권한 체계 |
| 7 | `product/multi_product_integration.md` | 제품 간 연결 구조, 연결 방식, 경계 판단 |

### 3단계: 공통 정책

개발, 운영, 문서 작성의 공통 규칙을 정의한다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 8 | `governance/documentation_policy.md` | 문서 운영 원칙, 분류 체계, SSOT 규칙 |
| 9 | `governance/project_documentation_requirements.md` | 프로젝트별 필수 문서 목록 |
| 10 | `governance/document_change_policy.md` | 문서 추가/수정/폐기 절차 |
| 11 | `dev/coding_convention.md` | 코딩 컨벤션 |
| 12 | `dev/api_convention.md` | API 설계 규칙 |
| 13 | `dev/git_workflow.md` | 브랜치, 커밋, PR 규칙 |
| 14 | `dev/release_strategy.md` | 릴리즈 전략, releases/ 폴더 구조 |
| 15 | `dev/migration_policy.md` | DB/API 마이그레이션 규칙 |
| 16 | `ops/test_strategy.md` | 테스트 전략 |
| 17 | `ops/security_access_control.md` | 보안, 접근 제어 |

### 4단계: API / 데이터 / AI / 운영 공통

도메인별 공통 정책을 정의한다. 해당 도메인이 있을 때만 작성한다.

| 순서 | 문서 | 조건 |
|------|------|------|
| 18 | `api/api_principles.md` | API가 있으면 |
| 19 | `api/error_response_policy.md` | API가 있으면 |
| 20 | `api/event_contracts.md` | 비동기 이벤트가 있으면 |
| 21 | `data/data_ownership_policy.md` | 데이터 저장이 있으면 |
| 22 | `data/storage_policy.md` | 데이터 저장이 있으면 |
| 23 | `ai/model_lifecycle.md` | AI가 있으면 |
| 24 | `ai/execution_routing_policy.md` | AI가 있으면 |

### 5단계: 작업 가이드 (skills)

위의 정책들을 기반으로 실제 작업 절차를 정의한다.

| 순서 | 문서 | 내용 |
|------|------|------|
| 25 | `skills/common_guide.md` | 공통 원칙 (소통, 테스트, 코드 품질, 문서, 작업 흐름) |
| 26 | `skills/idea_reading_guide.md` | 아이디어 기록 |
| 27 | `skills/project_setup_reading_guide.md` | 프로젝트 시작 |
| 28 | `skills/feature_planning_reading_guide.md` | 기능 기획 |
| 29 | `skills/uiux_prototype_reading_guide.md` | UI 프로토타입 |
| 30 | `skills/implementation_reading_guide.md` | 구현 |
| 31 | `skills/test_reading_guide.md` | 테스트 |
| 32 | `skills/review_commit_reading_guide.md` | 리뷰, 커밋, PR |
| 33 | `skills/debug_reading_guide.md` | 디버깅 |

### 6단계: 프로젝트별 문서

프로젝트별 상세 문서는 `project_docs_writing_order.md`를 따른다.

### 7단계: 템플릿

위 문서들이 안정되면 `projects/_template/`의 템플릿을 최신 상태로 맞춘다.

| 순서 | 문서 |
|------|------|
| 34 | `projects/_template/` 전체 파일 |
| 35 | `product/feature_spec_template.md` |
| 36 | `projects/_template/releases/version_template.md` |
