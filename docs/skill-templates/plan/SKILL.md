---
name: plan
description: 릴리즈 기획부터 구현 Plan까지 단계별로 작성한다. release 문서, wireframe, 구현 Plan을 순서대로 진행한다.
argument-hint: "v0.0.5 기획 내용 설명"
disable-model-invocation: true
---

# Plan

릴리즈 기획부터 구현 Plan까지 단계별로 작성한다.

- `$0` → 릴리즈 버전 (예: v0.0.5)
- `$1` 이후 → 기획 내용 설명

**현재 프로젝트의 릴리즈 목록:**

!`ls docs/releases/v*.md 2>/dev/null | sort -V | tail -5 || echo "(docs/releases/ 에서 릴리즈 파일을 찾지 못했습니다)"`

인자가 없으면 위 목록을 보여주고 버전과 기획 내용을 질문한다.

**기존 문서 확인:**
- `docs/releases/$0.md`가 이미 존재하면 → "릴리즈 문서가 이미 있습니다. 수정할까요, 건너뛸까요?" 질문
- `docs/wireframes/`에 관련 화면이 이미 존재하면 → "wireframe이 이미 있습니다. 수정할까요, 건너뛸까요?" 질문
- `docs/plans/$0.md`가 이미 존재하면 → "Plan이 이미 있습니다. 다시 작성할까요, 건너뛸까요?" 질문
- 모두 없으면 → Phase A부터 순서대로

---

## Phase A: Release 문서 작성

사용자가 전달한 기획 내용을 기반으로 `docs/releases/$0.md`를 작성한다.

### 읽을 문서

| 문서 | 목적 |
|------|------|
| docs/releases/ 기존 릴리즈 | 형식과 패턴 파악 |
| docs/features/README.md | 기존 기능 목록 — 중복 확인 |
| docs/roadmap.md | 로드맵에서의 위치 |
| docs/data_model.md | 현재 DB 상태 — 변경 영향 파악 |
| docs/api_contract.md | 현재 API 상태 — 변경 영향 파악 |

### 작성 내용

- 버전 목표 (사용자가 전달한 기획 내용 기반)
- 새 기능 체크리스트 (각 항목에 관련 features/ 문서 링크)
- 개선사항 체크리스트
- 배포 계획 (migration, 환경변수, downstream 영향)
- 의존성/제약사항
- 수정되는 기존 문서 목록

### 규칙

- **기존 릴리즈 문서의 형식을 따른다.** 새 형식을 만들지 않는다
- **체크리스트 항목마다 관련 features/ 문서를 링크한다.** 해당 문서가 없으면 "신규 작성 필요"로 표시
- **기획 내용이 불분명하면 질문한다.** 추측해서 채우지 않는다
- **기존 기능과 충돌하면 알린다**

### 완료 후

    docs/releases/$0.md가 작성되었습니다.
    다음 단계는 wireframe 작성입니다.
    wireframe을 작성할까요?

---

## Phase B: Wireframe 작성

Release 문서에서 UI 변경이 필요한 항목을 파악하고 wireframe을 작성/수정한다.

### 읽을 문서

| 문서 | 목적 |
|------|------|
| docs/releases/$0.md | 방금 작성한 릴리즈 — UI 변경 항목 파악 |
| docs/wireframes/ 기존 문서 | 기존 화면 구조 — 수정할 곳 파악 |
| docs/product/role_permission_flow.md | 역할별 화면 접근 |

### 작성 내용

화면별로:
- 화면 구조 (필드, 컬럼, 버튼, 뱃지)
- 인터랙션 (클릭 시 동작, 모달, 다이얼로그)
- 상태별 화면 (empty, loading, error, permission denied)
- 폼이 있으면 입력 필드, validation 규칙

### 규칙

- **간결하게 작성한다.** wireframe은 "뭐가 있는지"만 적는다. "어떻게 구현하는지"는 Plan에서
- **기존 wireframe이 있으면 수정한다.** 새로 만들지 않는다
- **wireframe에 없는 새 화면이면 새 파일을 만든다**
- **기존 wireframe 형식을 따른다**

### 완료 후

    wireframe이 작성/수정되었습니다.
    다음 단계는 구현 Plan 작성입니다.
    구현 Plan을 작성할까요?

---

## Phase C: 구현 Plan 작성

Release 문서와 wireframe을 읽고, 구현에 필요한 모든 세부사항을 `docs/plans/$0.md`에 작성한다.

### 읽을 문서

**문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 | 목적 |
|------|------|
| docs/releases/$0.md | 구현 대상 — 체크리스트, 배포 계획 |
| docs/wireframes/ 관련 화면 | UI 세부사항 |
| docs/features/ 관련 문서 | 비즈니스 규칙, 상태 전이, 에러 케이스 |
| docs/architecture.md | 내부 구조, 모듈 구성 |
| docs/data_model.md | 기존 DB 스키마 |
| docs/api_contract.md | 기존 API |

**변경 영향이 있을 때만:**

| 조건 | 읽을 문서 |
|------|-----------|
| 권한 체계가 바뀌면 | docs/product/role_permission_flow.md |
| 다른 서비스와 연동이 있으면 | docs/product/multi_product_integration.md |
| auth 토큰/멤버십이 관련되면 | docs/api/auth_api.md |
| Edge 동기화가 관련되면 | docs/api/edge_api.md |
| DB 스키마 변경이 있으면 | docs/dev/migration_policy.md |

### 코드베이스 파악

- 프로젝트 루트 디렉토리 구조 확인
- 구현할 기능과 관련된 기존 코드 탐색
- 기존 코드의 네이밍, 구조, 패턴을 파악한다

### Plan 작성

**핵심 원칙: 문서를 읽고 끝내지 않는다.** 읽은 문서에서 구체적 내용을 꺼내서 Plan에 직접 포함한다. 이 Plan만 보고도 구현할 수 있어야 한다.

feature별로 아래 Phase를 작성한다. **하나라도 빠지면 Plan이 불완전하다.**

**Phase 1 (UI Prototype):**
- 화면에 표시되는 모든 필드/컬럼, 버튼, 뱃지, 상태별 화면
- **TODO 주석 목록**: API 호출 자리마다 `// TODO: API 연동 - ...` 형식으로 어떤 TODO를 남길지
- **mock data 계획**: 어떤 mock data 파일을 만들지, 어떤 케이스를 포함할지
- **Playwright 테스트 대상**: 어떤 화면/인터랙션을 E2E 테스트할지

**Phase 2 (API 설계):**
- 각 endpoint의 method, path, 요청/응답 필드, 에러 코드
- 기존 API와 겹치거나 변경되는 부분
- 역할별 접근 권한

**Phase 3 (Backend):**
- DB 변경사항 (기존 스키마 + 추가/변경할 컬럼, 타입, 기본값)
- migration 전략
- 서비스 함수별 비즈니스 규칙
- 기존 코드 패턴
- **테스트 케이스 목록**: 함수별 unit (성공 + 에러), route별 integration (200, 400, 403, 404)

**Phase 4 (연동):**
- TODO ↔ API 1:1 매핑
- **API별 로딩 상태**: 버튼 비활성화, 스피너, 스켈레톤
- **API별 성공 동작**: 토스트 메시지 텍스트, refetch 방식
- **API별 에러 동작**: 에러 코드별 사용자 메시지
- **Playwright 테스트 업데이트**

**Phase 5 (검증):**
- 검증할 wireframe 파일 경로
- **PASS/FAIL/WARN 테이블 형식**으로 검증 항목 나열

### 저장

`docs/plans/$0.md`에 저장한다. 릴리즈 하나 = Plan 파일 하나.

## 규칙

- **각 Phase(A/B/C)가 끝날 때마다 다음 진행 여부를 질문한다.** 마음대로 넘어가지 않는다
- **기획 내용이 불분명하면 질문한다.** 추측해서 채우지 않는다
- **기존 문서 형식을 따른다.** 새 형식을 만들지 않는다
- **기존 기능과 충돌하면 알린다**
- **구현하지 않는다.** 문서만 작성한다

## 완료 기준

- [ ] docs/releases/$0.md가 작성되었다
- [ ] 관련 wireframe이 작성/수정되었다
- [ ] docs/plans/$0.md가 작성되었다
- [ ] Plan의 모든 Phase에 구체적 내용이 포함되었다

## 다음 단계 안내

    모든 기획 문서가 작성되었습니다.
    - docs/releases/$0.md (릴리즈)
    - docs/wireframes/ (화면 구조)
    - docs/plans/$0.md (구현 Plan)

    구현을 시작할까요? (/implement $0)
