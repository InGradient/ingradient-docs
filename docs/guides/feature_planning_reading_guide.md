# Feature Planning Reading Guide

- 문서명: Feature Planning Reading Guide
- 목적: 새 기능 기획 문서를 작성하기 전에 읽어야 하는 문서를 단계별로 안내한다.
- 적용 범위: INGRADIENT 전체 프로젝트
- 상태: Draft
- Owner: Product
- 마지막 수정일: 2026-03-29

> 이 가이드를 따르기 전에 `common_guide.md`를 먼저 읽는다. 소통, 테스트, 코드 품질, 문서 원칙이 모든 작업에 공통 적용된다.

## 0단계: 기획 요청 시 확인할 것

기획 요청을 받았을 때 아래 항목이 명시되지 않았으면 먼저 확인한다.

**중요: 마음대로 진행하지 않는다.** 애매하거나 판단이 필요한 부분이 있으면 반드시 질문한다. 더 나은 방법이 있다고 판단되면 먼저 제안하고 동의를 구한 뒤 진행한다. 요청 내용이 기존 문서나 컨벤션과 충돌하는 경우에도 그냥 따르지 말고 충돌 사실을 알리고 어떻게 할지 확인한다.

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 대상 프로젝트 | 어떤 프로젝트(서비스)에 대한 기획인가? |
| 대상 버전 | 현재 최신 릴리즈 계획이 `releases/v{x.x.x}.md`인데, 이 버전에 추가할 건지 새 버전을 만들 건지? |
| 기능 범위 | 새 기능인가, 기존 기능 개선인가, 버그 수정인가? |
| 우선순위 | 이번 버전에 반드시 들어가야 하는 건지, 다음 버전으로 넘겨도 되는 건지? |
| 연관 서비스 | 다른 서비스에 영향을 주는 변경인가? (API 계약, 권한, 데이터 등) |

기획 전에 `projects/{프로젝트}/upcoming.md`를 확인한다. 기획 대상이 upcoming에 있으면 해당 항목을 참고하고, 기획 문서(`features/{기능명}.md`)를 작성한 뒤 upcoming에서 해당 항목을 제거한다.

## 1단계: 기획 템플릿 확인

기획 문서는 `../product/feature_spec_template.md` 하나의 양식을 사용한다. 이 템플릿 안에 기능 명세, 사용자 시나리오, UI/UX 방향, 테스트 계획이 모두 섹션으로 포함되어 있다.

각 섹션을 작성할 때 아래 참고 문서를 함께 본다.

| 섹션 | 참고 문서 |
|------|-----------|
| 5. 사용자 시나리오 | `../product/scenario_template.md` |
| 6. UI / UX 방향 | `../product/uiux_planning_template.md` |
| 8. 테스트 계획 | `../product/test_plan_template.md` |

프로젝트 내부 기능 문서의 간결한 양식은 `../projects/_template/features/feature_template.md`도 참고한다.

## 2단계: 공통 도메인 문서

기획할 때마다 반드시 읽는 문서다.

- `../product/terminology.md` — 용어 정의. 기획 문서에서 사용하는 용어가 일관되어야 한다. 특히 Product/Project 구분 주의.
- `../product/user_flow.md` — 전체 사용자 흐름. 새 기능이 기존 흐름의 어디에 위치하는지 파악한다.
- `../product/role_permission_flow.md` — 권한 체계. 기능이 어떤 역할에게 노출되는지 결정해야 한다.

### 필요하면 참고

아래는 매번 읽을 필요 없이, 해당되는 경우에만 참고한다.

| 조건 | 읽을 문서 |
|------|-----------|
| 다른 서비스에 영향을 주면 | `../product/multi_product_integration.md` — 제품 간 연동 관계 |
| 기능이 어떤 서비스에 속하는지 불분명하면 | `../architecture/system_overview.md`, `../architecture/service_responsibility.md` |
| 문서 작성 규칙이 헷갈리면 | `../governance/documentation_policy.md`, `../governance/project_documentation_requirements.md` |

## 3단계: 대상 프로젝트 문서

기획 대상 프로젝트가 정해졌다면 해당 프로젝트 폴더의 문서를 읽는다.

### 모든 프로젝트 공통

아래 문서는 어떤 프로젝트든 반드시 먼저 읽는다.

| 문서 | 이유 |
|------|------|
| `project_overview.md` | 프로젝트 목적과 범위 파악 |
| `product_guide.md` | 각 화면에서 사용자가 뭘 할 수 있는지 파악 |
| `user_scenarios.md` | 사용자 흐름 파악 (목적별 화면 이동) |
| `wireframes/` | 화면 구조, 모달, 인터랙션 파악 |
| `architecture.md` | 내부 구조와 기술 스택 파악 |
| `features/README.md` | 기존 기능 목록 확인, 중복 방지 |

### 기획 내용에 따라 추가로 읽는 문서

| 조건 | 읽을 문서 |
|------|-----------|
| API 변경이 있으면 | `api_contract.md` |
| 데이터 변경이 있으면 | `data_model.md` |
| 배포 방식에 영향이 있으면 | `deployment.md` |
| 운영 영향이 있으면 | `operations.md` |
| 기존 로드맵과 정합성 확인 | `roadmap.md` |
| 기존 릴리즈 이력 확인 | `release_notes.md` |
| 사용자 가이드 변경이 있으면 | `user_guide.md` |

## 4단계: 프로젝트별 핵심 기능 문서

대상 프로젝트의 기존 기능 문서 중 새 기획과 연관되는 것을 읽는다.

### ingradient-platform

| 문서 | 주제 |
|------|------|
| `features/dataset_export.md` | 데이터셋 내보내기 |
| `features/edge_integration.md` | Edge 연동 |
| `features/project_role_matrix.md` | 프로젝트 역할/권한 매트릭스 |
| `features/training_queue_ui.md` | 학습 큐 UI |

연관 공통 문서: `docs/api/platform_api.md`

### auth-service

| 문서 | 주제 |
|------|------|
| `features/login_refresh_flow.md` | 로그인/토큰 갱신 흐름 |
| `features/organization_license_admin.md` | 조직/라이선스 관리 |

연관 공통 문서: `docs/api/auth_api.md`, `docs/ops/security_access_control.md`

### ingradient-ai

| 문서 | 주제 |
|------|------|
| `features/execution_routing.md` | 실행 라우팅 |
| `features/model_registry_and_byom.md` | 모델 레지스트리, BYOM |
| `features/ops_console.md` | AI 운영 콘솔 |
| `features/training_scheduler.md` | 학습 스케줄러 |

연관 공통 문서: `docs/api/ai_api.md`, `docs/ai/` 폴더 전체

### ingradient-edge

| 문서 | 주제 |
|------|------|
| `features/camera_diagnostics_ui.md` | 카메라 진단 UI |
| `features/license_and_auth_flow.md` | 라이선스/인증 흐름 |
| `features/offline_sync_policy.md` | 오프라인 동기화 |
| `features/setup_mode_and_capture.md` | 셋업 모드, 캡처 |

연관 공통 문서: `docs/api/edge_api.md`

### medilabel

| 문서 | 주제 |
|------|------|
| `features/catalog_and_ingest.md` | 카탈로그, 데이터 수집 |
| `features/project_settings_and_permission.md` | 프로젝트 설정/권한 |
| `features/segmentation_import_policy.md` | 세그멘테이션 임포트 |
| `features/viewer_overlay.md` | 뷰어 오버레이 |

### ingradient-ui

| 문서 | 주제 |
|------|------|
| `features/design_tokens.md` | 디자인 토큰 |
| `features/docs_showcase.md` | 문서 쇼케이스 |
| `features/generic_components.md` | 공용 컴포넌트 |
| `features/reusable_patterns.md` | 재사용 패턴 |

UI 관련 기획이라면 이 프로젝트 문서를 반드시 확인한다.

## 5단계: 크로스커팅 공통 문서

기획 내용에 따라 추가로 참고하는 공통 정책 문서다.

| 조건 | 읽을 문서 |
|------|-----------|
| API 설계가 포함되면 | `../api/api_principles.md`, `../api/error_response_policy.md`, `../api/event_contracts.md` |
| 데이터 저장 정책이 관련되면 | `../data/` 폴더 (`data_ownership_policy.md`, `storage_policy.md` 등) |
| AI 모델/학습이 관련되면 | `../ai/` 폴더 (`model_lifecycle.md`, `execution_routing_policy.md` 등) |
| 배포/인프라가 관련되면 | `../architecture/deployment_architecture.md`, `../architecture/environment_strategy.md` |
| 모니터링/운영이 관련되면 | `../ops/monitoring_observability.md`, `../ops/sla_slo_policy.md` |
| 보안/권한이 관련되면 | `../ops/security_access_control.md` |

## 5.5단계: 완료 기준 정의

기획 문서를 작성할 때 각 기능의 완료 기준을 검증 가능한 형태로 정의한다. "기능이 동작한다"가 아니라 "무엇을 확인하면 끝인지"를 명확히 한다.

예시:
- "로그인 기능 추가" → "로그인 성공/실패 테스트가 통과하고, 토큰이 발급된다"
- "권한 체계 변경" → "역할별 접근 테스트가 통과하고, 기존 권한이 깨지지 않는다"
- "Edge sync 개선" → "offline → online 전환 시 sync 테스트가 통과하고, 데이터 누락이 없다"

이 완료 기준은 기획 문서의 **테스트 계획** 섹션에 포함한다. 구현과 테스트 단계에서 이 기준으로 검증한다.

## 6단계: 기획 후 문서 작성 및 업데이트

기획이 완료되면 아래 문서들을 새로 작성하거나 업데이트해야 한다.
`document_change_policy.md`의 영향도 체크리스트도 함께 확인한다.

### 반드시 새로 작성하는 문서

| 문서 | 위치 | 설명 |
|------|------|------|
| 기능 기획 문서 | `projects/{프로젝트}/features/{기능명}.md` | feature_spec_template 기반. 기능 명세, 시나리오, UI/UX, 테스트 계획을 한 파일에 담는다 |
| wireframe | `projects/{프로젝트}/wireframes/{화면명}.md` | 새 화면이 추가되거나 기존 화면이 크게 바뀌면 wireframe 작성/수정 |

**원칙: 기능 하나 = 파일 하나.** 시나리오, UI/UX, 테스트 계획을 별도 파일로 분리하지 않는다. 길이와 무관하게 한 파일에 모든 내용을 담는다. 여러 기능을 한번에 요청받더라도 기능별로 파일을 쪼개서 각각 작성한다.

### 반드시 수정하는 문서

기능이 추가되면 아래 문서는 항상 업데이트해야 한다.

| 문서 | 위치 | 수정 내용 |
|------|------|-----------|
| 기능 목록 | `projects/{프로젝트}/features/README.md` | 새 기능 문서 링크 추가 |
| wireframes | `projects/{프로젝트}/wireframes/README.md` | 새 화면이면 목록에 추가 |
| product_guide | `projects/{프로젝트}/product_guide.md` | 새 화면/기능이 있으면 반영 |
| user_scenarios | `projects/{프로젝트}/user_scenarios.md` | 새 시나리오가 있으면 반영 |
| 릴리즈 계획 | `projects/{프로젝트}/releases/v{버전}.md` | 해당 버전에 새 기능 체크리스트 추가, features/ 링크 연결 |
| 릴리즈 인덱스 | `projects/{프로젝트}/releases/README.md` | 새 버전이면 버전 항목 추가 |
| 로드맵 | `projects/{프로젝트}/roadmap.md` | 새 기능 항목 반영, 일정 업데이트 |

### 기획 내용에 따라 수정하는 문서

| 조건 | 수정할 문서 | 수정 내용 |
|------|-------------|-----------|
| API가 추가/변경되면 | `../projects/{프로젝트}/api_contract.md` | 새 엔드포인트, 변경된 계약 반영 |
| | `../api/{서비스}_api.md` | 공통 API 문서에도 반영 |
| 데이터 모델이 바뀌면 | `../projects/{프로젝트}/data_model.md` | 새 테이블, 필드, 관계 반영 |
| 권한 체계가 바뀌면 | `../product/role_permission_flow.md` | 새 권한, 역할 변경 반영 |
| | `../projects/{프로젝트}/features/` 내 권한 관련 문서 | 프로젝트별 권한 상세 |
| 사용자 흐름이 바뀌면 | `../product/user_flow.md` | 새 흐름 추가 또는 기존 흐름 분기 |
| 다른 서비스와 연동이 생기면 | `../product/multi_product_integration.md` | 연동 관계 추가 |
| | 연동 대상 프로젝트의 `api_contract.md` | 상대 서비스 계약도 확인/반영 |
| 용어가 새로 생기면 | `../product/terminology.md` | 새 용어 정의 추가 |
| 서비스 책임이 바뀌면 | `../architecture/service_responsibility.md` | 책임 범위 변경 반영 |
| 배포 방식이 바뀌면 | `../projects/{프로젝트}/deployment.md` | 배포 구성 변경 반영 |

### 릴리즈 시점에 업데이트하는 문서

기획 시점이 아니라 구현 완료 후 릴리즈 전에 업데이트한다.

| 문서 | 위치 | 수정 내용 |
|------|------|-----------|
| 릴리즈 노트 | `projects/{프로젝트}/release_notes.md` | 변경 사항 요약 |
| 사용자 가이드 | `projects/{프로젝트}/user_guide.md` | 새 기능 사용법 추가 |
| 운영 문서 | `projects/{프로젝트}/operations.md` | 모니터링, 알람, 트러블슈팅 포인트 |
| 테스트 계획 | 기능 기획 문서 내 테스트 계획 섹션 | test_plan_template 참고, 릴리즈 전 작성 |

### 체크리스트 요약

기획 PR을 올리기 전 아래를 확인한다.

- [ ] 기능 명세 문서(`features/{기능명}.md`)가 작성되었는가
- [ ] `features/README.md`에 새 문서가 등록되었는가
- [ ] 새 화면이 있으면 `wireframes/{화면명}.md`가 작성/수정되었는가
- [ ] `product_guide.md`에 새 화면/기능이 반영되었는가
- [ ] `user_scenarios.md`에 새 시나리오가 반영되었는가
- [ ] `releases/v{버전}.md`에 기능이 등록되었는가
- [ ] `roadmap.md`에 일정이 반영되었는가
- [ ] API/데이터/권한 변경이 있으면 해당 문서가 업데이트되었는가
- [ ] 다른 서비스에 영향이 있으면 연동 문서와 상대 서비스 문서를 확인했는가
- [ ] 새 용어가 있으면 `terminology.md`에 추가되었는가 (특히 Product/Project 구분 주의)

## 최종 검토

보고하기 전에 작성한 기획 문서와 수정한 문서들을 전체적으로 훑어보며 아래를 확인한다.

- 기존 문서와 내용이 충돌하는 곳은 없는가
- 같은 내용이 여러 문서에 중복 작성되지 않았는가
- 용어, 상태값, 역할 이름이 `terminology.md`와 일관되는가 (특히 Product/Project를 혼용하지 않았는가)
- 연관 문서 간 링크가 정확한가
- 문제가 발견되면 수정하고, 판단이 어려우면 보고 시 함께 언급한다

## 다음 단계

기획이 완료되면 아래 중 어느 쪽으로 진행할지 확인한다.

- **UI/UX 프로토타입이 필요하면** → `uiux_prototype_reading_guide.md`를 따른다
- **바로 구현으로 진행하면** → `implementation_reading_guide.md`를 따른다
