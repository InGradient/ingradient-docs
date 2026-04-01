---
name: plan-feature
description: 기능의 구현 계획을 Phase별로 작성한다. features/ 문서와 wireframes/를 읽고 Phase 개요를 생성한다.
argument-hint: "feature명 또는 릴리즈 버전 예: v0.0.5"
disable-model-invocation: true
allowed-tools: Bash
---

# Plan Feature

**현재 프로젝트의 릴리즈 목록:**

!`ls docs/releases/v*.md 2>/dev/null | sort -V | tail -5 || echo "(docs/releases/ 에서 릴리즈 파일을 찾지 못했습니다)"`

**인자 처리:**

- 인자가 없으면: 위 목록에서 최신 릴리즈를 읽고 포함된 feature 목록을 보여준 뒤, 어떤 feature부터 시작할지 질문한다
- $ARGUMENTS가 v로 시작하면 (릴리즈 버전): docs/releases/$ARGUMENTS.md를 읽고 포함된 feature 목록을 보여준 뒤, 어떤 feature부터 시작할지 질문한다
- $ARGUMENTS가 feature명이면: 바로 아래 절차를 진행한다

## 0단계: 사전 확인

아래 항목이 명시되지 않았으면 먼저 질문한다. 마음대로 진행하지 않는다.

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 대상 프로젝트 | 어떤 프로젝트(서비스)에서 구현하는가? |
| 기획 문서 | docs/features/$ARGUMENTS.md가 존재하는가? 없으면 기획부터 해야 하는가? |
| 대상 버전 | 어떤 릴리즈 버전에 포함되는가? |
| 구현 범위 | 기획 문서 전체를 구현하는가, 일부만 구현하는가? |
| 기존 코드 | 수정할 기존 코드가 있는가, 새로 작성하는가? |

## 1단계: 문서 읽기

아래 문서를 순서대로 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.** 있어야 할 문서가 없다면 기획이 덜 된 것일 수 있다.

**필수:**

| 문서 | 목적 |
|------|------|
| docs/features/$ARGUMENTS.md | 기능 전체 명세, 시나리오, UI/UX, 테스트 계획 |
| docs/wireframes/ 관련 화면 | 화면 구조, 필드, 인터랙션, 상태별 화면 |
| docs/releases/v{버전}.md | 이번 버전에서의 위치, 의존성 |

**프로젝트 이해:**

| 문서 | 목적 |
|------|------|
| docs/architecture.md | 내부 구조, 모듈 구성, 기술 스택 |
| docs/data_model.md | DB 엔티티, 관계, 상태값 |
| docs/api_contract.md | 기존 API 엔드포인트 |

**변경 영향이 있을 때만:**

| 조건 | 읽을 문서 |
|------|-----------|
| API 계약이 바뀌면 | docs/api_contract.md, docs/api/api_principles.md |
| 권한 체계가 바뀌면 | docs/product/role_permission_flow.md |
| 다른 서비스와 연동이 있으면 | docs/product/multi_product_integration.md, 연동 대상의 docs/api_contract.md |
| auth 토큰/멤버십이 관련되면 | docs/api/auth_api.md |
| Edge 동기화가 관련되면 | docs/api/edge_api.md |
| DB 스키마 변경이 있으면 | docs/dev/migration_policy.md |

## 2단계: 코드베이스 파악

프로젝트의 현재 코드 상태를 파악한다.

- 프로젝트 루트 디렉토리 구조 확인
- 구현할 기능과 관련된 기존 코드 탐색 (유사 기능, 공통 유틸, 패턴)
- 기존 코드의 네이밍, 구조, 패턴을 파악한다 (새 패턴을 도입하지 않기 위해)

## 3단계: Phase 개요 작성

읽은 문서와 코드를 기반으로 Phase별 개요를 작성한다.

**핵심 원칙: 문서를 읽고 끝내지 않는다.** 읽은 문서에서 각 Phase에 필요한 구체적 내용을 꺼내서 Plan에 직접 포함한다. 이 Plan만 보고도 이후 Phase를 진행할 수 있어야 한다.

출력 형식은 [output-example.md](references/output-example.md)를 따른다.

**Phase별 포함 규칙:**

각 Phase에 아래 정보가 **반드시** 포함되어야 한다. "문서를 참고한다"로 끝내지 않는다. 하나라도 빠지면 Plan이 불완전하다.

Phase 1 (UI Prototype) — docs/wireframes/에서 꺼낼 것:
- 화면에 표시되는 모든 필드/컬럼 이름, 각 버튼의 라벨과 동작
- 뱃지/라벨의 텍스트와 색상, 빈 상태 메시지와 CTA
- 폼이 있으면 입력 필드 목록
- **TODO 주석 목록**: API 호출이 들어갈 자리마다 `// TODO: API 연동 - POST /licenses (PENDING 등록)` 형식으로 어떤 TODO를 남길지 나열
- **mock data 계획**: 어떤 mock data 파일을 만들지, 어떤 케이스를 포함할지 (정상, 빈 목록, 다양한 상태)
- **Playwright 테스트 대상**: 어떤 화면/인터랙션을 E2E 테스트할지 목록

Phase 2 (API 설계) — docs/api_contract.md, docs/features/에서 꺼낼 것:
- 각 endpoint의 method, path, 요청/응답 필드
- 기존 API와 겹치거나 변경되는 부분
- 역할별 접근 권한
- 에러 코드와 메시지

Phase 3 (Backend) — docs/data_model.md, docs/architecture.md에서 꺼낼 것:
- 기존 테이블 스키마 (관련 컬럼, 타입, 관계)
- 추가/변경할 컬럼 (타입, 기본값, nullable 여부)
- 기존 코드에서 파악한 유사 기능의 서비스 패턴
- **테스트 케이스 목록**: 서비스 함수별 unit 테스트 (성공, 에러 케이스), route별 integration 테스트 (200, 400, 403, 404 등)

Phase 4 (연동) — Phase 1의 TODO 목록에서 꺼낼 것:
- 각 TODO와 연결할 API endpoint 1:1 매핑
- **API별 로딩 상태**: 호출 중 UI 표시 (버튼 비활성화, 스피너, 스켈레톤 등)
- **API별 성공 동작**: 토스트 메시지 텍스트, 목록 refetch 방식
- **API별 에러 동작**: 에러 코드별 사용자 메시지, 표시 방식 (토스트/필드 에러)
- **Playwright 테스트 업데이트**: mock → 실제 API 전환, 전체 흐름 시나리오

Phase 5 (검증) — docs/wireframes/에서 꺼낼 것:
- 검증할 wireframe 파일 경로
- **PASS/FAIL/WARN 테이블 형식**으로 검증 항목 나열 (화면 구조, 인터랙션, 상태별 화면, 값/데이터, 백엔드)

## 규칙

- **구현하지 않는다.** 개요만 작성한다
- **기획 문서에 빠진 부분이 있으면** 오픈 이슈로 기록하고 질문한다. 추측해서 채우지 않는다
- **feature 간 의존성이 있으면** 명시하고 구현 순서를 제안한다
- **더 나은 구현 방법이 있으면** 먼저 제안하고 동의를 구한다
- **기존 코드 패턴과 충돌하는 부분이 있으면** 알리고 확인한다

## 완료 기준

- [ ] 0단계 확인 항목이 모두 확인되었다
- [ ] 필수 문서를 모두 읽었다
- [ ] 5개 Phase에 문서에서 꺼낸 구체적 내용이 포함되었다
- [ ] 연관 서비스 영향이 파악되었다
- [ ] 기획 문서의 빠진 부분이 오픈 이슈로 기록되었다
- [ ] 구현 시 업데이트할 문서 목록이 정리되었다

## 다음 단계 안내

    Plan 작성이 완료되었습니다.
    다음 단계는 Phase 1 (UI Prototype)입니다.
    UI Prototype Plan을 작성할까요? (/1-implement-ui)
