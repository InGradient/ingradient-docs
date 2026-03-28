# Project Setup Reading Guide

- 문서명: Project Setup Reading Guide
- 목적: 새 프로젝트(서비스/앱)를 시작할 때 읽어야 하는 문서와 진행 순서를 안내한다.
- 적용 범위: INGRADIENT 전체 프로젝트
- 상태: Draft
- Owner: Platform Architecture
- 마지막 수정일: 2026-03-28

> 이 가이드를 따르기 전에 `common_guide.md`를 먼저 읽는다. 소통, 테스트, 코드 품질, 문서 원칙이 모든 작업에 공통 적용된다.

## 0단계: 프로젝트 생성 요청 시 확인할 것

**중요: 마음대로 진행하지 않는다.** 새 프로젝트는 영향 범위가 크므로 반드시 충분히 확인한 뒤 진행한다.

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 프로젝트 목적 | 이 프로젝트가 해결하는 문제는 무엇인가? |
| 프로젝트 유형 | backend service / frontend app / ai service / edge app / worker / shared package 중 어느 것인가? |
| 기존 서비스와의 관계 | 기존 서비스에 추가하는 게 아닌지? 새 repo가 맞는지? (`../dev/repo_strategy.md` 기준) |
| 서비스 책임 | 이 프로젝트만의 고유 책임이 있는가? 기존 서비스 책임과 겹치지 않는가? |
| 기술 스택 | 어떤 언어, 프레임워크, DB를 사용하는가? |
| 배포 환경 | cloud / on-prem / edge 중 어디에 배포하는가? |
| 인증 방식 | auth-service를 사용하는가? 독립 인증인가? |

## 1단계: 전체 시스템 이해

새 프로젝트가 전체 시스템에서 어떤 위치인지 먼저 파악한다.

- `../architecture/system_overview.md` — 전체 시스템 구조, Plane 구분
- `../architecture/service_responsibility.md` — 서비스별 책임/비책임, SoT 기준
- `../product/multi_product_integration.md` — 제품 간 연결 구조, 경계 판단 기준
- `../dev/repo_strategy.md` — repo 분리 원칙, 금지 패턴

### 확인할 것

- 새 프로젝트의 책임이 기존 서비스와 겹치지 않는가
- 어떤 Plane에 속하는가 (Control / Execution / Edge)
- 어떤 서비스와 연동하는가

## 2단계: 프로젝트 문서 구조 생성

`../projects/_template/`을 복사하여 프로젝트 문서를 생성한다.

### 필수 문서 (모든 프로젝트)

```
projects/{프로젝트}/
├── project_overview.md
├── architecture.md
├── deployment.md
├── operations.md
├── roadmap.md
├── release_notes.md
├── user_guide.md
├── features/
│   └── README.md
└── releases/
    └── README.md
```

### 조건부 문서

| 조건 | 추가할 문서 |
|------|-------------|
| 외부 API가 있으면 | `api_contract.md` |
| 자체 저장 데이터가 있으면 | `data_model.md` |
| 비동기 job이 있으면 | job lifecycle 문서 |
| 권한 차등이 있으면 | permission 흐름 문서 |
| 오프라인 동작이 있으면 | sync / offline policy 문서 |

### 유형별 추가 문서

| 유형 | 추가 문서 |
|------|-----------|
| backend | `api_contract.md`, `data_model.md` |
| frontend/web | 화면 흐름 또는 `features/` 기능 문서 |
| ai service | 모델 lifecycle, execution, artifact 문서 |
| edge app | offline sync, device lifecycle, diagnostics 문서 |
| worker/batch | queue, retry, failure handling 문서 |
| shared package | package purpose, public interface, versioning strategy 문서 |

> 상세 기준은 `../governance/project_documentation_requirements.md` 참조.

## 3단계: 핵심 문서 작성

### 작성 순서

아래 순서로 작성한다. 앞 문서가 뒷 문서의 입력이 된다.

1. **project_overview.md** — 프로젝트 목적, 범위/비범위, 기술 스택, 모듈 구성, 초기 성공 기준
2. **architecture.md** — 내부 구조, 모듈별 책임, 외부 인터페이스
3. **data_model.md** (해당 시) — DB 엔티티, 관계, 상태값
4. **api_contract.md** (해당 시) — API 엔드포인트, 요청/응답 구조
5. **deployment.md** — 배포 환경, 환경변수, 인프라 구성
6. **operations.md** — 모니터링, 로그, 알람, 트러블슈팅 포인트
7. **roadmap.md** — 전체 방향, 단계별 계획, 우선순위
8. **user_guide.md** — 사용자/운영자 가이드

### 작성 시 참고

| 문서 | 참고할 컨벤션 |
|------|---------------|
| API 설계 | `../dev/api_convention.md` |
| 코드 구조 | `../dev/coding_convention.md` |
| 데이터 설계 | `../data/data_ownership_policy.md`, `../data/storage_policy.md` |
| 보안 | `../ops/security_access_control.md` |
| 용어 | `../product/terminology.md` |

## 4단계: 코드 프로젝트 초기화

### 프로젝트 구조

프로젝트 유형에 맞는 디렉토리 구조를 생성한다. 기존 프로젝트의 구조를 참고한다.

| 유형 | 참고 프로젝트 |
|------|---------------|
| backend (Fastify + Prisma) | auth-service |
| frontend (React + Vite) | ingradient-platform/frontend |
| edge (Electron) | ingradient-edge |
| shared package | ingradient-ui |

### 초기 설정 체크리스트

- [ ] package.json (이름, 버전, scripts)
- [ ] TypeScript 설정 (tsconfig.json)
- [ ] Lint 설정 (ESLint, Prettier)
- [ ] 테스트 프레임워크 설정
- [ ] Git 설정 (.gitignore)
- [ ] 환경변수 템플릿 (.env.example)
- [ ] CI/CD 파이프라인 (`../dev/ci_cd.md` 참고)

### 코드 컨벤션 적용

- `../dev/coding_convention.md` — 네이밍, 구조, 입력 검증, 에러 처리
- `../dev/git_workflow.md` — 브랜치, 커밋, PR 규칙

## 5단계: 공통 문서 업데이트

새 프로젝트를 추가하면 아래 공통 문서를 반드시 업데이트한다.

| 문서 | 수정 내용 |
|------|-----------|
| `../architecture/system_overview.md` | 시스템 구성요소에 새 프로젝트 추가 |
| `../architecture/service_responsibility.md` | 책임 매트릭스, SoT 기준에 추가 |
| `../product/multi_product_integration.md` | 제품 목록, 연결 구조에 추가 |
| `../product/user_flow.md` | 새 서비스 관련 사용자 흐름이 있으면 추가 |
| `../product/terminology.md` | 새 용어가 있으면 추가 |
| `../projects/README.md` | 프로젝트 목록에 추가 |

## 6단계: 첫 릴리즈 계획

### releases/v0.0.1.md 작성

`releases/version_template.md` 양식으로 첫 버전 릴리즈 계획을 작성한다.

- 버전 목표 (MVP 범위)
- 포함할 기능 목록 (체크리스트 + features/ 링크)
- 배포 계획

### features/ 기획 시작

각 기능의 상세 기획은 `feature_planning_reading_guide.md`를 따른다. 초기 설계 단계라도 features/ 문서는 `feature_spec_template.md` 양식을 따라 작성한다 (기능 개요, 문제 정의, 목표, 범위, 시나리오, UI/UX, 테스트 계획, 오픈 이슈).

## 7단계: UI 프로토타입

기획이 완료되면 실제 구현에 들어가기 전에 UI 프로토타입을 먼저 만든다. 실질적으로 동작하지는 않지만 화면 구조와 UX 흐름을 확인할 수 있는 수준으로 만든다.

### 프로토타입 목적

- 기획 문서의 UI/UX 방향이 실제 화면에서 어떻게 보이는지 검증
- 화면 구조, 정보 배치, 네비게이션 흐름을 실물로 확인
- 실제 구현 전에 UI 설계 문제를 조기 발견

### 프로토타입 규칙

- **`@ingradient/ui`를 사용한다.** 공용 디자인 시스템의 컴포넌트, 토큰, 패턴을 그대로 사용하여 실제 제품과 동일한 UI를 만든다
- **해당 프로젝트 repo 안에 만든다.** 별도 repo를 만들지 않는다
- **mock data를 사용한다.** 실제 API 연동 없이 정적 데이터로 화면을 채운다
- **주요 화면과 상태를 모두 포함한다.** empty, loading, success, error, permission denied 상태를 확인할 수 있어야 한다
- **네비게이션이 동작해야 한다.** 화면 간 이동은 실제로 되어야 한다 (라우팅)

### 프로토타입 범위

features/ 기획 문서의 UI/UX 섹션을 기준으로 아래를 만든다.

| 포함 | 미포함 |
|------|--------|
| 화면 레이아웃, 정보 구조 | 실제 API 호출 |
| 네비게이션, 라우팅 | 실제 인증/권한 검증 |
| mock data 기반 리스트, 상세, 폼 | 실제 DB 연동 |
| 주요 상태 (empty, error 등) | 비즈니스 로직 |
| `@ingradient/ui` 컴포넌트 사용 | 커스텀 컴포넌트 신규 개발 |

### 프로토타입 완료 후

- 기획 문서의 UI/UX 섹션과 프로토타입이 일치하는지 확인한다
- 차이가 있으면 기획 문서를 업데이트하거나 프로토타입을 수정한다
- 프로토타입에서 발견한 UI 문제를 features/ 오픈 이슈에 기록한다

## 최종 체크리스트

프로젝트 setup이 완료되었는지 확인한다.

### 문서

- [ ] 필수 문서가 모두 작성되었는가 (`project_documentation_requirements.md` 기준)
- [ ] 공통 문서가 업데이트되었는가 (system_overview, service_responsibility 등)
- [ ] `projects/README.md`에 등록되었는가
- [ ] `releases/v0.0.1.md` 첫 릴리즈 계획이 있는가
- [ ] features/ 기획 문서가 `feature_spec_template.md` 양식을 따르는가

### 코드

- [ ] 프로젝트 구조가 생성되었는가
- [ ] 기본 설정 (TypeScript, Lint, 테스트)이 적용되었는가
- [ ] CI/CD 파이프라인이 설정되었는가
- [ ] .env.example이 있는가
- [ ] lint, typecheck, test가 통과하는가

### UI 프로토타입

- [ ] `@ingradient/ui` 기반으로 주요 화면이 만들어졌는가
- [ ] mock data로 화면이 채워져 있는가
- [ ] 네비게이션이 동작하는가
- [ ] 주요 상태 (empty, error 등)가 확인 가능한가
- [ ] 기획 문서 UI/UX 섹션과 일치하는가

### 연동

- [ ] auth-service 연동이 필요하면 토큰 검증이 설정되었는가
- [ ] 다른 서비스와의 API 계약이 정의되었는가
- [ ] 기존 서비스 책임과 충돌하지 않는가

## 다음 단계

프로젝트 setup이 완료되면 구현으로 진행할지 확인한다. 구현을 진행하려면 `implementation_reading_guide.md`를 따른다.
