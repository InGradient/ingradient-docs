# Claude Setup Guide

- 문서명: Claude Setup Guide
- 목적: CLAUDE.md와 커스텀 커맨드의 작성 요령을 안내하고, 각 커맨드의 실제 내용을 정의한다.
- 적용 범위: INGRADIENT 전체 프로젝트
- 상태: Draft
- Owner: Dev
- 마지막 수정일: 2026-04-01

## 개요

Claude Code에는 규칙을 주입하는 두 가지 도구가 있다.

| 도구 | 로드 시점 | 용도 |
|------|-----------|------|
| CLAUDE.md | 매 대화 시작 시 자동 | 항상 적용되는 전역 규칙 |
| 커스텀 Skills | `/명령어` 호출 시에만 | 특정 작업에만 필요한 상세 규칙 |

**원칙: CLAUDE.md는 가볍게, 커맨드는 구체적으로.** CLAUDE.md에 모든 규칙을 넣으면 매번 컨텍스트를 낭비한다.

## CLAUDE.md

### 위치

| 위치 | 적용 범위 |
|------|-----------|
| `~/.claude/CLAUDE.md` | 모든 프로젝트에서 적용 (글로벌) |
| `프로젝트 루트/CLAUDE.md` | 해당 프로젝트에서만 적용 |

둘 다 있으면 양쪽 모두 로드된다.

### 작성 요령

**짧게 유지한다.** 매 대화마다 전체가 컨텍스트에 들어가므로, 길수록 낭비다.

**넣어야 할 것:**
- 항상 지켜야 하는 규칙 (코딩 컨벤션 요약, 커밋 규칙)
- 항상 사용해야 하는 도구/라이브러리 (`@ingradient/ui` 등)
- 항상 금지해야 하는 것 (하드코딩, 200줄 초과 등)
- 어떤 커맨드를 언제 쓰는지 안내

**넣지 말아야 할 것:**
- 특정 기능의 상세 스펙 → 커맨드로 분리
- Phase별 구현 절차 → 커맨드로 분리
- 한 번만 사용하는 체크리스트 → 커맨드로 분리
- 코드에서 이미 파악 가능한 것 (디렉토리 구조, 기술 스택 등)

**작성 형식:**
- 규칙은 한 줄로 쓴다. 설명이 필요하면 한 줄 덧붙인다
- 섹션으로 나눠서 빠르게 훑을 수 있게 한다
- 예시가 필요한 규칙만 예시를 넣는다

### 예시

```markdown
# CLAUDE.md

## 구현 워크플로우
- 기능 구현 시 Phase별로 진행한다 (Phase: UI → API → Backend → 연동 → 검증)
- 구현 전 릴리즈 분석: /analyze-release
- 각 Phase 시작 시 해당 스킬을 호출한다: /0-plan-feature, /1-implement-ui, /2-implement-api, /3-implement-backend, /4-implement-connect, /5-verify-wireframe
- Plan에 참고 문서의 핵심 내용을 직접 포함한다. "문서를 참고한다"로 끝내지 않는다

## 코드 규칙
- UI는 @ingradient/ui를 사용한다
- 파일 하나는 200줄 미만
- 하드코딩 금지 — 상수 또는 환경변수 사용
- 기존 코드 패턴을 따른다. 새 패턴을 도입하지 않는다

## 커밋
- 커밋 메시지는 한국어로 작성한다
- feat/fix/refactor 접두사를 사용한다
```

## 커스텀 스킬

### 위치

| 위치 | 적용 범위 |
|------|-----------|
| `~/.claude/skills/` | 모든 프로젝트에서 사용 (글로벌) |
| `프로젝트 루트/.claude/skills/` | 해당 프로젝트에서만 사용 |

**폴더 하나 = 스킬 하나.** 폴더명이 커맨드 이름이 되고, 안에 `SKILL.md`를 넣는다.

    .claude/skills/
    ├── analyze-release/
    │   └── SKILL.md             → /analyze-release 로 호출 (구현 전 릴리즈 범위 분석)
    ├── 0-plan-feature/
    │   └── SKILL.md             → /0-plan-feature 로 호출
    ├── 1-implement-ui/
    │   └── SKILL.md             → /1-implement-ui 로 호출
    ├── 2-implement-api/
    │   └── SKILL.md             → /2-implement-api 로 호출
    ├── 3-implement-backend/
    │   └── SKILL.md             → /3-implement-backend 로 호출
    ├── 4-implement-connect/
    │   └── SKILL.md             → /4-implement-connect 로 호출
    └── 5-verify-wireframe/
        └── SKILL.md             → /5-verify-wireframe 로 호출

### SKILL.md 작성법

#### Frontmatter

SKILL.md 파일 맨 위에 YAML frontmatter를 작성한다. 주요 필드:

```yaml
---
name: 0-plan-feature
description: 기능의 구현 계획을 Phase별로 작성한다. features/ 문서를 읽고 Phase 개요를 생성한다.
argument-hint: [feature명]
disable-model-invocation: true
---
```

| 필드 | 설명 |
|------|------|
| `name` | 스킬 이름. 소문자, 숫자, 하이픈만. 생략하면 폴더명 사용 |
| `description` | Claude가 스킬을 자동으로 찾을 때 사용. 핵심 키워드를 앞에 배치. 250자 초과 시 잘림 |
| `argument-hint` | `/스킬명` 입력 시 표시되는 인자 힌트 (예: `[feature명]`, `[v0.0.5]`) |
| `disable-model-invocation` | `true`면 사용자만 호출 가능. Claude가 자동 실행하지 않음 |
| `allowed-tools` | 스킬 실행 중 사용 가능한 도구 제한 (예: `Read, Grep, Glob` → 읽기 전용) |

**우리 스킬은 모두 `disable-model-invocation: true`로 설정한다.** 구현 단계는 사용자가 직접 호출해야 하므로 Claude가 임의로 실행하면 안 된다.

#### 스킬 본문 구조

스킬은 "이 작업을 시작할 때 Claude에게 주는 지시서"다. 좋은 스킬은 네 가지를 명확히 한다:

1. **무엇을 읽어라** — 어떤 문서를 열어야 하는지
2. **무엇을 꺼내라** — 문서에서 어떤 항목을 추출해야 하는지
3. **Plan에 어떻게 넣어라** — 추출한 내용을 Plan에 어떤 형식으로 포함해야 하는지
4. **어떻게 구현해라** — 구현 시 지켜야 할 규칙

이 네 가지가 빠지면 "문서를 참고한다"로 끝나고 누락이 생긴다.

SKILL.md 본문 예시:

    ## 읽을 문서
    - 어떤 문서를 읽어야 하는지 경로와 함께 명시

    ## Plan 작성
    - 문서에서 꺼내야 할 항목을 체크리스트로 나열
    - Plan에 포함해야 할 형식을 예시로 보여준다

    ## 규칙
    - 구현 시 지켜야 할 규칙

    ## 완료 기준
    - 이 Phase가 끝났다고 판단하는 기준

#### 인자 전달

SKILL.md 안에서 `$ARGUMENTS`를 사용하면 호출 시 전달한 인자가 주입된다. 인자가 여러 개면 `$0`, `$1`로 개별 접근 가능.

    features/$ARGUMENTS 기능의 UI를 구현한다.

    ## 읽을 문서
    - features/$ARGUMENTS.md
    - wireframes/ 에서 관련 화면

호출: `/1-implement-ui organization_license_admin`

#### 라이브 데이터 주입 (`!` 명령어)

`` !`셸 명령어` `` 구문을 사용하면 스킬이 로드될 때 **셸 명령어가 먼저 실행**되고, 결과가 스킬 내용에 자동 주입된다. Claude가 보는 시점에는 이미 실제 데이터로 치환되어 있다.

**예시 — TODO 자동 수집:**

    ## 현재 TODO 목록
    !`grep -rn "// TODO: API 연동" src/`

`/4-implement-connect` 실행 시 TODO를 수동으로 찾을 필요 없이 자동으로 목록이 들어간다.

**예시 — 현재 브랜치 정보:**

    ## 현재 상태
    !`git status --short`
    !`git log --oneline -5`

**주의:** 이것은 전처리(preprocessing)다. Claude가 실행하는 것이 아니라, 스킬이 로드되기 전에 시스템이 실행한다.

#### 긴 내용은 references/로 분리

SKILL.md 본문은 **500줄 이하**를 권장한다. 상세한 예시, 체크리스트, 패턴은 `references/` 폴더로 분리하고 SKILL.md에서 참조한다.

**3단계 로딩 구조:**

1. **Frontmatter** (항상 컨텍스트에 로드) — name + description (~100단어)
2. **SKILL.md 본문** (스킬 호출 시 로드) — 핵심 절차 (~500줄 이하)
3. **references/** (필요할 때만 로드) — 상세 내용 (길이 제한 없음)

**폴더 구조 예시:**

    0-plan-feature/
    ├── SKILL.md                        ← 핵심 절차 (500줄 이하)
    └── references/
        ├── phase-checklist.md          ← Phase별 포함 규칙 상세
        └── output-example.md           ← 출력 형식 예시

**SKILL.md에서 references/ 참조 방법:**

    Phase별 포함 규칙은 [phase-checklist.md](references/phase-checklist.md)를 참고한다.
    출력 형식은 [output-example.md](references/output-example.md)를 따른다.

**`${CLAUDE_SKILL_DIR}` 변수:** 스킬 폴더 경로를 나타낸다. cwd에 상관없이 스킬 내 파일을 참조할 수 있다.

    스크립트 실행: ${CLAUDE_SKILL_DIR}/scripts/validate.sh

#### 다음 단계 안내 규칙

각 Phase가 끝날 때마다 다음 Phase를 안내한다:
- /0-plan-feature 완료 → "Phase 1 (UI Prototype) Plan을 작성할까요? (/1-implement-ui)"
- /1-implement-ui 완료 → "Phase 2 (API 설계) Plan을 작성할까요? (/2-implement-api)"
- /2-implement-api 완료 → "Phase 3 (Backend) Plan을 작성할까요? (/3-implement-backend)"
- /3-implement-backend 완료 → "Phase 4 (연동) Plan을 작성할까요? (/4-implement-connect)"
- /4-implement-connect 완료 → "Phase 5 (와이어프레임 검증)을 진행할까요? (/5-verify-wireframe)"
- /5-verify-wireframe 완료 → "모든 Phase가 완료되었습니다."

### Plan 작성 섹션이 핵심이다

스킬에서 가장 중요한 부분은 **Plan 작성** 섹션이다. 여기서 "문서의 어떤 내용을 Plan에 넣어라"를 구체적으로 지시한다.

**나쁜 예:**

    ## Plan 작성
    - 와이어프레임을 읽고 Plan을 작성한다
    - 기획 문서의 UI 섹션을 참고한다

**좋은 예:**

    ## Plan 작성
    와이어프레임과 기획 문서에서 아래 항목을 모두 꺼내서 Plan에 직접 나열한다:

    - [ ] 화면에 표시되는 모든 필드/컬럼 (이름, 타입, 읽기전용 여부)
    - [ ] 각 버튼의 라벨과 클릭 시 동작 (모달, 토스트, 네비게이션, DangerDialog 등)
    - [ ] 뱃지/라벨의 텍스트와 색상 구분 (예: Owner=blue, Admin=purple)
    - [ ] 드롭다운의 선택지 목록
    - [ ] 빈 상태 메시지 텍스트와 CTA 버튼

    Plan 예시:
        ### 사용자 목록 테이블
        - 컬럼: 이름(text), 이메일(text), 역할(뱃지), 상태(뱃지), 가입일(date)
        - 역할 뱃지: Owner(blue), Admin(purple), Member(gray)
        - 빈 상태: "등록된 사용자가 없습니다" + [사용자 초대] 버튼

이렇게 하면 Claude가 문서를 읽은 뒤 정확히 어떤 항목을 Plan에 넣어야 하는지 알 수 있다.

## 스킬 작성 체크리스트

새 스킬을 작성할 때 아래를 확인한다.

- [ ] frontmatter에 `name`, `description`, `argument-hint`가 있는가
- [ ] `disable-model-invocation: true`가 설정되어 있는가 (사용자 호출 전용이면)
- [ ] "읽을 문서"가 경로와 함께 명시되어 있는가
- [ ] "Plan 작성" 섹션에 꺼내야 할 항목이 체크리스트로 나열되어 있는가
- [ ] Plan 예시가 포함되어 있는가 (형식을 보여주기 위해)
- [ ] 구현 규칙이 명확한가
- [ ] 완료 기준이 검증 가능한 형태인가
- [ ] SKILL.md 본문이 500줄을 넘으면 references/로 분리했는가
- [ ] "문서를 참고한다"로 끝나는 항목이 없는가

---

## 스킬 내용

아래는 각 스킬의 실제 내용이다. 검토 후 `.claude/skills/{스킬명}/SKILL.md`로 옮긴다.

---

### /0-plan-feature

> **스킬 파일:** `.claude/skills/0-plan-feature/SKILL.md`

$ARGUMENTS 기능의 구현 계획을 Phase별로 작성한다.

#### 0단계: 사전 확인

아래 항목이 명시되지 않았으면 먼저 질문한다. 마음대로 진행하지 않는다.

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 대상 프로젝트 | 어떤 프로젝트(서비스)에서 구현하는가? |
| 기획 문서 | features/$ARGUMENTS.md가 존재하는가? 없으면 기획부터 해야 하는가? |
| 대상 버전 | 어떤 릴리즈 버전에 포함되는가? |
| 구현 범위 | 기획 문서 전체를 구현하는가, 일부만 구현하는가? |
| 기존 코드 | 수정할 기존 코드가 있는가, 새로 작성하는가? |

#### 1단계: 문서 읽기

아래 문서를 순서대로 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.** 있어야 할 문서가 없다면 기획이 덜 된 것일 수 있다.

**필수:**

| 문서 | 목적 |
|------|------|
| features/$ARGUMENTS.md | 기능 전체 명세, 시나리오, UI/UX, 테스트 계획 |
| wireframes/ 관련 화면 | 화면 구조, 필드, 인터랙션, 상태별 화면 |
| releases/v{버전}.md | 이번 버전에서의 위치, 의존성 |

**프로젝트 이해:**

| 문서 | 목적 |
|------|------|
| architecture.md | 내부 구조, 모듈 구성, 기술 스택 |
| data_model.md | DB 엔티티, 관계, 상태값 |
| api_contract.md | 기존 API 엔드포인트 |

**변경 영향이 있을 때만:**

| 조건 | 읽을 문서 |
|------|-----------|
| API 계약이 바뀌면 | api_contract.md, docs/api/api_principles.md |
| 권한 체계가 바뀌면 | docs/product/role_permission_flow.md |
| 다른 서비스와 연동이 있으면 | docs/product/multi_product_integration.md, 연동 대상의 api_contract.md |
| auth 토큰/멤버십이 관련되면 | docs/api/auth_api.md |
| Edge 동기화가 관련되면 | docs/api/edge_api.md |
| DB 스키마 변경이 있으면 | docs/dev/migration_policy.md |

#### 2단계: 코드베이스 파악

프로젝트의 현재 코드 상태를 파악한다.

- 프로젝트 루트 디렉토리 구조 확인
- 구현할 기능과 관련된 기존 코드 탐색 (유사 기능, 공통 유틸, 패턴)
- 기존 코드의 네이밍, 구조, 패턴을 파악한다 (새 패턴을 도입하지 않기 위해)

#### 3단계: Phase 개요 작성

읽은 문서와 코드를 기반으로 Phase별 개요를 작성한다.

**핵심 원칙: 문서를 읽고 끝내지 않는다.** 읽은 문서에서 각 Phase에 필요한 구체적 내용을 꺼내서 Plan에 직접 포함한다. 이 Plan만 보고도 이후 Phase를 진행할 수 있어야 한다.

**출력 형식:**

    ## 구현 대상
    - 기능: [기능명]
    - 프로젝트: [프로젝트명]
    - 버전: [v.x.x.x]
    - 기획 문서: features/$ARGUMENTS.md

    ## Phase 1 (UI Prototype)
    - 화면: [만들 화면/컴포넌트 목록]
    - 주요 필드/컬럼: [와이어프레임에서 꺼낸 구체적 필드 목록]
    - 주요 인터랙션: [버튼, 모달, 드롭다운 등]
    - 상태별 화면: [empty, loading, error 각각의 내용]
    - 참고 wireframe: [파일 경로]

    ## Phase 2 (API 설계)
    - [GET /api/resource — 목록 조회, 응답 필드: id, name, status, ...]
    - [POST /api/resource — 생성, 요청 필드: name, type, ...]
    - 기존 API 변경사항: [api_contract.md에서 확인한 내용]
    - 권한: [role_permission_flow.md에서 확인한 역할별 접근]

    ## Phase 3 (Backend)
    - DB 변경: [data_model.md에서 확인한 기존 스키마 + 추가/변경할 컬럼, 타입, 기본값]
    - migration 전략: [migration_policy.md에서 확인한 방식]
    - 서비스 로직: [핵심 비즈니스 규칙, 상태 전이, 에러 케이스]
    - 기존 코드 패턴: [코드베이스에서 파악한 유사 기능의 구현 방식]

    ## Phase 4 (연동)
    - TODO 교체 목록: [UI의 어떤 부분을 어떤 API에 연결하는지 1:1 매핑]
    - 에러 처리: [각 API 실패 시 UI 동작]
    - 로딩 상태: [각 API 호출 시 UI 로딩 표시 방식]

    ## Phase 5 (검증)
    - 대조할 wireframe: [파일 경로 목록]
    - 프론트엔드 검증: [특별히 주의할 항목]
    - 백엔드 검증: [특별히 주의할 항목]

    ## 연관 서비스 영향
    - [다른 서비스에 주는 영향이 있으면 구체적으로 명시]
    - [없으면 "없음"]

    ## 기획 문서 오픈 이슈
    - [기획에 빠지거나 애매한 부분이 있으면 기록]
    - [없으면 "없음"]

    ## 구현 시 업데이트할 문서
    - [변경 내용에 따라 업데이트해야 할 문서 목록과 수정 내용]

**Phase별 포함 규칙:**

각 Phase에 아래 정보가 반드시 포함되어야 한다. "문서를 참고한다"로 끝내지 않는다.

- Phase 1 (UI Prototype) — wireframes/에서 꺼낼 것: 화면에 표시되는 모든 필드/컬럼 이름, 각 버튼의 라벨과 동작, 뱃지/라벨의 텍스트와 색상, 빈 상태 메시지와 CTA, 폼이 있으면 입력 필드 목록
- Phase 2 (API 설계) — api_contract.md, features/에서 꺼낼 것: 각 endpoint의 method, path, 요청/응답 필드, 기존 API와 겹치거나 변경되는 부분, 역할별 접근 권한
- Phase 3 (Backend) — data_model.md, architecture.md에서 꺼낼 것: 기존 테이블 스키마 (관련 컬럼, 타입, 관계), 추가/변경할 컬럼 (타입, 기본값, nullable 여부), 기존 코드에서 파악한 유사 기능의 서비스 패턴
- Phase 4 (연동) — Phase 1의 TODO 목록에서 꺼낼 것: 각 TODO와 연결할 API endpoint 1:1 매핑, API 실패 시 UI 동작
- Phase 5 (검증) — wireframes/에서 꺼낼 것: 검증할 wireframe 파일 경로, 화면별 핵심 검증 항목

#### 규칙

- **구현하지 않는다.** 개요만 작성한다
- **기획 문서에 빠진 부분이 있으면** 오픈 이슈로 기록하고 질문한다. 추측해서 채우지 않는다
- **feature 간 의존성이 있으면** 명시하고 구현 순서를 제안한다
- **더 나은 구현 방법이 있으면** 먼저 제안하고 동의를 구한다
- **기존 코드 패턴과 충돌하는 부분이 있으면** 알리고 확인한다

#### 완료 기준

- [ ] 0단계 확인 항목이 모두 확인되었다
- [ ] 필수 문서를 모두 읽었다
- [ ] 5개 Phase에 문서에서 꺼낸 구체적 내용이 포함되었다
- [ ] 연관 서비스 영향이 파악되었다
- [ ] 기획 문서의 빠진 부분이 오픈 이슈로 기록되었다
- [ ] 구현 시 업데이트할 문서 목록이 정리되었다

#### 다음 단계 안내

    Plan 작성이 완료되었습니다.
    다음 단계는 Phase 1 (UI Prototype)입니다.
    UI Prototype Plan을 작성할까요? (/1-implement-ui)

---

### /1-implement-ui

> **스킬 파일:** `.claude/skills/1-implement-ui/SKILL.md`

$ARGUMENTS 기능의 UI를 구현한다. 실제 API 연동 없이 화면만 만든다.

#### 0단계: 사전 확인

/0-plan-feature 결과가 있는지 확인한다. 없으면 먼저 /0-plan-feature를 실행하라고 안내한다.

#### 1단계: 문서 읽기

아래 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 | 목적 |
|------|------|
| /0-plan-feature 결과 | Phase 1 개요 확인 — 만들 화면, 필드, 인터랙션 |
| features/$ARGUMENTS.md | UI/UX 섹션 — 화면 방향, 사용자 시나리오 |
| wireframes/ 관련 화면 | 화면 구조, 필드, 버튼, 뱃지, 상태별 화면의 원본 |
| projects/ingradient-ui/features/generic_components.md | 사용 가능한 공용 컴포넌트 |
| projects/ingradient-ui/features/reusable_patterns.md | 재사용 패턴 |

#### 2단계: Plan 작성

문서에서 아래 항목을 **모두** 꺼내서 Plan에 직접 나열한다. "와이어프레임을 참고한다"로 끝내지 않는다.

**필수 포함 항목 (화면별로 반복):**

화면 구조:
- [ ] 화면에 표시되는 모든 필드/컬럼 (이름, 타입, 읽기전용 여부)
- [ ] 각 필드의 데이터 소스 (어떤 API 필드에서 오는지 — Phase 4 연동을 위해)
- [ ] 테이블이면 컬럼 순서와 정렬/필터 여부

버튼/인터랙션:
- [ ] 각 버튼의 라벨과 클릭 시 동작 (모달, 토스트, 네비게이션, DangerDialog 등)
- [ ] 확인 다이얼로그가 필요한 동작 (삭제, 비활성화 등)
- [ ] 드롭다운의 선택지 목록
- [ ] 폼이 있으면 필드별 validation 규칙과 에러 메시지

뱃지/라벨:
- [ ] 뱃지 텍스트와 색상 구분 (예: Owner=blue, Admin=purple, Member=gray)
- [ ] 상태 라벨 (active=green, inactive=red 등)

상태별 화면:
- [ ] 빈 상태(데이터 없음) — 메시지 텍스트와 CTA 버튼
- [ ] 검색/필터 결과 없음 — 빈 상태와 다른 메시지인지 확인
- [ ] 로딩 상태 — 스켈레톤/스피너 중 어떤 것을 쓰는지
- [ ] 에러 상태 — 필드별 에러인지 전역 토스트인지
- [ ] 권한 없음 — 숨김인지 비활성화인지 안내 메시지인지

**Plan 예시:**

    ### 사용자 목록 화면

    **테이블:**
    | 컬럼 | 타입 | 데이터 소스 | 비고 |
    |------|------|-------------|------|
    | 이름 | text | member.user.name | |
    | 이메일 | text | member.user.email | |
    | 역할 | 뱃지 | member.role | Owner=blue, Admin=purple, Member=gray |
    | 상태 | 뱃지 | member.status | active=green, pending=yellow, inactive=red |
    | 가입일 | date | member.created_at | YYYY-MM-DD 형식 |
    | 액션 | - | - | 역할 변경 드롭다운, 비활성화 버튼 |

    **버튼:**
    - [사용자 초대] → 초대 모달 열기
    - [역할 변경] 드롭다운 → Owner, Admin, Member 선택지 → // TODO: API 연동 - PUT /api/members/:id/role
    - [비활성화] → DangerDialog("이 사용자를 비활성화하시겠습니까?") → // TODO: API 연동 - PUT /api/members/:id/deactivate

    **상태별 화면:**
    - 빈 상태: "등록된 사용자가 없습니다" + [사용자 초대] 버튼
    - 검색 결과 없음: "검색 결과가 없습니다"
    - 로딩: 테이블 스켈레톤
    - 에러: 전역 토스트

#### 3단계: 구현

**규칙:**

- **@ingradient/ui를 사용한다.** 커스텀 UI가 필요하면 먼저 @ingradient/ui에 없는지 확인한다
- **mock data를 사용한다.** 실제 API 호출 없이 정적 데이터로 화면을 채운다
- **mock data는 별도 파일로 분리한다.** 나중에 실제 API로 교체하기 쉽도록
- **mock data는 도메인 맥락에 맞는 실제같은 데이터를 사용한다.** lorem ipsum 금지
- **다양한 케이스의 mock data를 포함한다.** 데이터 많을 때, 적을 때, 없을 때, 긴 텍스트, 짧은 텍스트
- **네비게이션이 동작해야 한다.** 화면 간 이동은 실제로 되어야 한다 (라우팅)
- **API 호출이 들어갈 자리에 TODO 주석을 남긴다:** `// TODO: API 연동 - GET /api/members (사용자 목록 조회)`
- **confirm() 대신 프로젝트의 DangerDialog 컴포넌트를 사용한다**
- **prop은 선언만 하지 말고 부모에서 실제로 전달한다**
- **하드코딩된 기본값이 사용자 선택을 대체하지 않도록 한다** (예: role을 'member'로 하드코딩하지 않음)

**포함하지 않을 것:**

| 항목 | 이유 |
|------|------|
| 실제 API 호출 | TODO 주석으로 대체 |
| 실제 인증/권한 검증 | mock으로 대체 |
| 실제 DB 연동 | mock data 사용 |
| 비즈니스 로직 | Phase 3에서 구현 |

**상태별 화면 점검:**

구현 후 각 화면에서 아래 상태가 모두 확인 가능한지 점검한다.

| 상태 | 확인 내용 |
|------|-----------|
| empty | 데이터가 없을 때 안내 메시지와 CTA가 보이는가 |
| loading | 로딩 중 표시(스켈레톤/스피너)가 있는가 |
| success | 정상 데이터가 올바르게 표시되는가 |
| error | 에러 발생 시 사용자가 이해 가능한 메시지가 보이는가 |
| permission denied | 권한이 없을 때 기능이 숨겨지거나 안내가 보이는가 |

#### 4단계: 와이어프레임 대조

구현이 끝나면 와이어프레임과 1:1 대조한다.

- [ ] 와이어프레임에 명시된 모든 필드/컬럼/버튼/뱃지가 렌더링되는가
- [ ] 각 필드가 읽기전용/수정가능 여부가 와이어프레임과 일치하는가
- [ ] 드롭다운의 선택지 목록이 와이어프레임과 일치하는가
- [ ] 뱃지/라벨의 텍스트와 색상이 와이어프레임과 일치하는가
- [ ] 빈 상태 vs 검색 결과 없음이 구분되는가
- [ ] 기획과 차이가 있으면 기획 문서를 업데이트했거나 확인을 받았는가
- [ ] @ingradient/ui에 없는 컴포넌트가 필요하면 기록했는가

PASS가 아닌 항목이 있으면 즉시 수정한다.

#### 완료 기준

- [ ] Plan의 모든 화면이 구현되었다
- [ ] 모든 API 호출 자리에 TODO 주석이 있다
- [ ] mock data가 별도 파일로 분리되어 있다
- [ ] 주요 상태(empty, loading, error)가 모두 확인 가능하다
- [ ] 와이어프레임과 1:1 대조가 완료되었다
- [ ] 기획과 차이점이 있으면 문서가 업데이트되었거나 확인을 받았다

#### 다음 단계 안내

    Phase 1 (UI Prototype)이 완료되었습니다.
    다음 단계는 Phase 2 (API 설계)입니다.
    API 설계 Plan을 작성할까요? (/2-implement-api)

---

### /2-implement-api

> **스킬 파일:** `.claude/skills/2-implement-api/SKILL.md`

$ARGUMENTS 기능에 필요한 API를 설계한다. Phase 1에서 남긴 TODO 주석을 기반으로 필요한 endpoint를 정의하고 api_contract.md를 업데이트한다.

#### 0단계: 사전 확인

Phase 1 (UI Prototype)이 완료되었는지 확인한다. 완료되지 않았으면 먼저 /1-implement-ui를 실행하라고 안내한다.

#### 1단계: 문서 읽기

아래 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 | 목적 |
|------|------|
| /0-plan-feature 결과 | Phase 2 개요 확인 — 필요한 endpoint, 요청/응답 필드 |
| Phase 1에서 구현한 코드 | TODO 주석 전체 수집 — 실제로 UI가 필요로 하는 API |
| features/$ARGUMENTS.md | 비즈니스 규칙, 상태 전이, 에러 케이스 |
| api_contract.md | 기존 API 엔드포인트 — 중복/충돌 확인 |
| docs/dev/api_convention.md | API 구현 규칙 — 네이밍, 요청/응답 구조, 에러 처리 |
| docs/api/api_principles.md | API 설계 공통 원칙 — URI, 버전, 비동기 패턴 |
| docs/api/error_response_policy.md | 에러 응답 구조 |
| docs/product/role_permission_flow.md | 역할별 접근 권한 (권한이 관련되면) |

#### 2단계: TODO 수집

Phase 1 코드에서 `// TODO: API 연동` 주석을 모두 수집한다. 이것이 API 설계의 입력이다.

수집 형식:

    1. // TODO: API 연동 - GET /api/members (사용자 목록 조회) — 파일: members-table.tsx:42
    2. // TODO: API 연동 - POST /api/invitations (사용자 초대) — 파일: invite-modal.tsx:28
    3. // TODO: API 연동 - PUT /api/members/:id/role (역할 변경) — 파일: members-table.tsx:67

TODO에 없지만 기획 문서에서 필요한 API가 있으면 추가하고, TODO에 있지만 기획과 맞지 않는 것이 있으면 질문한다.

#### 3단계: Plan 작성

수집한 TODO와 문서를 기반으로 각 endpoint를 구체적으로 설계한다. "api_convention.md를 참고한다"로 끝내지 않는다.

**필수 포함 항목 (endpoint별로 반복):**

기본 정보:
- [ ] Method + Path (api_convention.md 네이밍 규칙에 맞게)
- [ ] 목적 (한 줄 설명)
- [ ] 연결된 TODO 주석 위치 (파일:라인)
- [ ] 필요한 권한/역할

요청:
- [ ] Path parameter (있으면)
- [ ] Query parameter (목록 조회: pagination, filter, sort)
- [ ] Request body (생성/수정: 각 필드의 이름, 타입, 필수 여부, validation 규칙)

응답:
- [ ] 성공 응답 (status code + body 구조)
- [ ] 에러 응답 (어떤 상황에서 어떤 에러 코드)

기존 API와의 관계:
- [ ] 기존 endpoint를 수정하는 건지, 새로 만드는 건지
- [ ] 기존 API와 겹치는 부분이 있는지

**Plan 예시:**

    ### 1. GET /api/organizations/:orgId/members
    - 목적: 조직의 사용자 목록 조회
    - TODO: members-table.tsx:42
    - 권한: Owner, Admin

    Query:
    | 파라미터 | 타입 | 필수 | 설명 |
    |----------|------|------|------|
    | page | number | N | 기본값 1 |
    | pageSize | number | N | 기본값 20 |
    | search | string | N | 이름/이메일 검색 |

    성공 응답 (200):
    { "data": { "items": [...], "total": 42, "page": 1, "pageSize": 20 } }

    에러:
    | 상황 | Status | Error Code |
    |------|--------|------------|
    | 인증 안 됨 | 401 | UNAUTHORIZED |
    | 권한 없음 | 403 | FORBIDDEN |

    ### 2. PUT /api/organizations/:orgId/members/:memberId/role
    - 목적: 사용자 역할 변경
    - TODO: members-table.tsx:67
    - 권한: Owner만
    - 기존 API: 없음 (신규)

    Request Body:
    | 필드 | 타입 | 필수 | validation |
    |------|------|------|-----------|
    | role | string | Y | enum: owner, admin, member |

    에러:
    | 상황 | Status | Error Code |
    |------|--------|------------|
    | 자기 자신의 역할 변경 | 400 | CANNOT_CHANGE_OWN_ROLE |
    | 마지막 Owner 변경 | 400 | LAST_OWNER_CANNOT_CHANGE |

#### 4단계: api_contract.md 업데이트

Plan이 확정되면 api_contract.md에 새 endpoint를 추가한다.

- 기존 endpoint가 변경되면 변경 이력도 함께 기록한다
- 기존 형식과 일관되게 작성한다
- 다른 서비스의 api_contract.md에 영향이 있으면 해당 문서도 업데이트한다

#### 규칙

- **구현하지 않는다.** API를 설계하고 문서화만 한다. 실제 route/service 코드는 Phase 3에서 작성한다
- **api_convention.md를 따른다.** 리소스 중심 URI, 복수형 collection, 성공 응답은 data/meta 구조, 에러는 error.code/message/details/correlation_id 구조
- **pagination은 기존 패턴을 따른다.** 프로젝트에서 사용하는 방식(cursor/page) 확인
- **날짜는 ISO 8601을 사용한다**
- **기존 API와 충돌하면** 알리고 확인한다. 마음대로 변경하지 않는다
- **Phase 1 TODO에 없는 API가 필요하면** 추가하되 이유를 명시한다
- **비동기 작업이 필요하면** job resource 패턴을 사용한다 (api_principles.md 참고)

#### 완료 기준

- [ ] Phase 1의 모든 TODO 주석에 대응하는 API가 설계되었다
- [ ] 각 endpoint의 요청/응답/에러가 구체적으로 정의되었다
- [ ] 역할별 접근 권한이 명시되었다
- [ ] api_contract.md가 업데이트되었다
- [ ] 기존 API와 충돌하는 부분이 없거나, 확인을 받았다
- [ ] api_convention.md, api_principles.md 규칙을 따르고 있다

#### 다음 단계 안내

    Phase 2 (API 설계)가 완료되었습니다.
    다음 단계는 Phase 3 (Backend)입니다.
    Backend Plan을 작성할까요? (/3-implement-backend)

---

### /3-implement-backend

> **스킬 파일:** `.claude/skills/3-implement-backend/SKILL.md`

$ARGUMENTS 기능의 Backend를 구현한다. Phase 2에서 설계한 API를 실제 코드로 만든다.

#### 0단계: 사전 확인

Phase 2 (API 설계)가 완료되었는지 확인한다. 완료되지 않았으면 먼저 /2-implement-api를 실행하라고 안내한다.

#### 1단계: 문서 읽기

아래 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 | 목적 |
|------|------|
| /0-plan-feature 결과 | Phase 3 개요 확인 — DB 변경, 서비스 로직, 기존 코드 패턴 |
| Phase 2에서 설계한 API | 구현할 endpoint 목록, 요청/응답/에러 정의 |
| features/$ARGUMENTS.md | 비즈니스 규칙, 상태 전이, 에러 케이스, 테스트 계획 |
| data_model.md | 기존 DB 스키마 — 테이블, 컬럼, 관계, 상태값 |
| architecture.md | 모듈 구성, 레이어 구조 — 어디에 코드를 넣을지 |
| docs/dev/coding_convention.md | 파일 구조, 네이밍, 레이어 의존성, 에러 처리, 로깅, 테스트 규칙 |
| docs/dev/api_convention.md | API 구현 규칙 — schema validation, 에러 처리, 비동기 패턴 |

**DB 변경이 있으면 추가로 읽기:**

| 문서 | 목적 |
|------|------|
| docs/dev/migration_policy.md | backward compatibility, 배포 순서(expand→dual-write→rollout→cleanup), rollback 전략 |

**권한/연동이 관련되면 추가로 읽기:**

| 문서 | 목적 |
|------|------|
| docs/product/role_permission_flow.md | 역할별 접근 권한 |
| docs/api/auth_api.md | auth 토큰/멤버십 관련 |
| docs/api/edge_api.md | Edge 동기화 관련 |

#### 2단계: 기존 코드 패턴 파악

구현 전에 프로젝트의 기존 코드를 반드시 탐색한다.

- [ ] 프로젝트 디렉토리 구조 확인 — 모듈/파일이 어디에 위치하는지
- [ ] 유사 기능의 기존 코드 탐색 — route, service, validation, test 패턴
- [ ] 공통 유틸/미들웨어 확인 — 인증, 권한 검증, 에러 핸들링, 로깅이 어떻게 되어 있는지
- [ ] 기존 migration 파일 확인 — migration 파일명 규칙, ORM/쿼리 패턴

파악한 패턴을 Plan에 직접 기록한다:

    기존 패턴:
    - route 위치: src/modules/{도메인}/routes/{도메인}.routes.ts
    - service 위치: src/modules/{도메인}/services/{도메인}.service.ts
    - validation: zod schema, src/modules/{도메인}/schemas/
    - 인증 미들웨어: authMiddleware → req.user에 userId, orgId 주입
    - 권한 검증: requireRole('owner', 'admin') 미들웨어
    - 에러 처리: AppError 클래스, HttpStatus enum
    - 로깅: logger.info({ module: '도메인', ...context })
    - 테스트: __tests__/{도메인}.service.test.ts, supertest로 route 테스트

#### 3단계: Plan 작성

Phase 2의 API 설계와 기존 코드 패턴을 기반으로 구현 계획을 작성한다.

**필수 포함 항목:**

DB 변경 (migration이 필요한 경우):
- [ ] 변경 대상 테이블 (기존 스키마를 data_model.md에서 꺼내서 포함)
- [ ] 추가/변경할 컬럼 — 이름, 타입, 기본값, nullable, 제약조건
- [ ] 새 테이블이면 전체 스키마 — 컬럼, PK, FK, 인덱스, unique 제약
- [ ] migration 전략 — backward compatible 여부, expand/dual-write 필요 여부
- [ ] rollback 가능 여부

Service 로직:
- [ ] 각 API endpoint에 대응하는 서비스 함수 목록
- [ ] 각 함수의 비즈니스 규칙 (기획 문서에서 꺼내서 명시)
- [ ] 상태 전이 (있으면) — 어떤 상태에서 어떤 상태로, 조건은 무엇
- [ ] 에러 케이스 — 어떤 상황에서 어떤 에러를 발생시키는지
- [ ] 다른 서비스 호출 — 어떤 모듈의 어떤 함수를 조합하는지

Route/Controller:
- [ ] 각 endpoint의 route 정의 (기존 패턴에 맞게)
- [ ] 미들웨어 적용 (인증, 권한, validation)
- [ ] request validation schema (필드, 타입, 필수 여부 — Phase 2 설계에서 가져옴)

테스트:
- [ ] 각 서비스 함수의 unit 테스트 케이스 목록
- [ ] 각 route의 integration 테스트 케이스 목록
- [ ] 기획 문서의 에러 케이스가 모두 테스트에 포함되는지

**Plan 예시:**

    ## DB 변경

    ### members 테이블 (기존)
    | 컬럼 | 타입 | 설명 |
    |------|------|------|
    | id | uuid | PK |
    | user_id | uuid | FK → users.id |
    | org_id | uuid | FK → organizations.id |
    | role | enum('owner','admin','member') | |
    | created_at | timestamp | |

    ### 변경: status 컬럼 추가
    | 컬럼 | 타입 | 기본값 | nullable | 설명 |
    |------|------|--------|----------|------|
    | status | enum('active','pending','inactive') | 'active' | N | 멤버 상태 |

    - migration 전략: nullable로 추가 → backfill 'active' → NOT NULL 제약 추가
    - rollback: nullable로 되돌리면 됨 (데이터 손실 없음)

    ## Service 로직

    ### MembersService.changeRole(orgId, memberId, newRole, requesterId)
    - 비즈니스 규칙:
      - 요청자가 Owner여야 한다
      - 자기 자신의 역할은 변경할 수 없다 → CANNOT_CHANGE_OWN_ROLE
      - 조직의 마지막 Owner는 역할 변경 불가 → LAST_OWNER_CANNOT_CHANGE
    - 호출: AuditService.log({ action: 'member.role.changed', ... })

    ## Route
    | Method | Path | 미들웨어 | Service 함수 |
    |--------|------|----------|-------------|
    | GET | /api/orgs/:orgId/members | auth, requireRole('owner','admin') | listMembers |
    | PUT | /api/orgs/:orgId/members/:memberId/role | auth, requireRole('owner') | changeRole |

    ## 테스트
    ### Unit: MembersService
    - changeRole: 성공, 자기자신 변경 시도, 마지막 Owner 변경 시도, 권한 없음

    ### Integration: Route
    - PUT /members/:id/role: 200 성공, 400 자기자신, 400 마지막 Owner, 403 권한없음

#### 4단계: 구현

Plan 순서대로 구현한다:

1. **migration** — DB 스키마 변경이 있으면 먼저 작성
2. **service** — 비즈니스 로직
3. **validation schema** — request validation
4. **route** — endpoint 연결, 미들웨어 적용
5. **테스트** — unit, integration

#### 규칙

- **기존 코드 패턴을 따른다.** 새 패턴을 도입하지 않는다
- **파일 하나는 200줄 미만.** 넘으면 책임을 분리하여 파일을 쪼갠다
- **하나의 기능은 여러 모듈의 조합으로 구현한다.** 하나의 거대한 함수로 만들지 않는다
- **겹치는 로직은 공통 함수로 추출한다.** 기능별로 따로 구현하지 않는다
- **에러 메시지는 원인을 파악할 수 있도록 구체적으로 작성한다**
- **로그에는 모듈명과 관련 ID를 포함한다**
- **상태값, 에러 코드는 enum 또는 상수로 정의한다.** 문자열을 직접 비교하지 않는다
- **migration은 backward compatible 우선.** destructive change는 별도 확인
- **테스트는 생략하지 않는다.** 작성 가능한 모든 테스트를 반드시 작성한다

#### 5단계: data_model.md 업데이트

DB 스키마가 변경되었으면 data_model.md를 업데이트한다.

- 새 테이블/컬럼 추가
- 변경된 관계, 제약조건 반영
- 기존 형식과 일관되게 작성한다

#### 완료 기준

- [ ] Phase 2에서 설계한 모든 API endpoint가 구현되었다
- [ ] migration이 필요한 경우 작성되었고 backward compatible하다
- [ ] 각 서비스 함수의 비즈니스 규칙이 기획 문서와 일치한다
- [ ] 에러 케이스가 모두 처리되었다
- [ ] unit 테스트와 integration 테스트가 작성되었고 통과한다
- [ ] 기존 코드 패턴을 따르고 있다
- [ ] data_model.md가 업데이트되었다 (DB 변경이 있는 경우)

#### 다음 단계 안내

    Phase 3 (Backend)이 완료되었습니다.
    다음 단계는 Phase 4 (연동)입니다.
    연동 Plan을 작성할까요? (/4-implement-connect)

---

### /4-implement-connect

> **스킬 파일:** `.claude/skills/4-implement-connect/SKILL.md`

$ARGUMENTS 기능의 UI와 Backend를 연동한다. Phase 1에서 남긴 TODO 주석을 실제 API 호출로 교체한다.

#### 0단계: 사전 확인

Phase 3 (Backend)이 완료되었는지 확인한다. 완료되지 않았으면 먼저 /3-implement-backend를 실행하라고 안내한다.

Backend API가 실제로 동작하는지 확인한다. 테스트가 통과하는 상태여야 한다.

#### 1단계: TODO 수집

Phase 1 코드에서 `// TODO: API 연동` 주석을 **모두** 수집한다. 하나도 빠뜨리지 않는다.

수집 형식:

    | # | TODO 주석 | 파일:라인 | 대응 API (Phase 2) | 비고 |
    |---|-----------|-----------|-------------------|------|
    | 1 | GET /api/orgs/:orgId/members (목록 조회) | members-table.tsx:42 | GET /api/orgs/:orgId/members | |
    | 2 | POST /api/invitations (초대) | invite-modal.tsx:28 | POST /api/orgs/:orgId/invitations | |
    | 3 | PUT /api/members/:id/role (역할 변경) | members-table.tsx:67 | PUT /api/orgs/:orgId/members/:id/role | |

수집 후 확인:
- Phase 2에서 설계한 API가 모두 TODO에 대응되는가
- TODO에는 있지만 Phase 2에 없는 API가 있는가 → 있으면 질문
- Phase 2에는 있지만 TODO에 없는 API가 있는가 → UI에서 빠진 부분이 있는지 확인

#### 2단계: 문서 읽기

| 문서 | 목적 |
|------|------|
| Phase 2에서 설계한 API | 각 endpoint의 요청/응답/에러 구조 |
| Phase 1의 mock data 파일 | 어떤 데이터 구조를 사용하고 있는지 — 실제 API 응답과 매핑 |
| Phase 3에서 구현한 코드 | 실제 API가 반환하는 응답 구조 확인 |

#### 3단계: Plan 작성

TODO별로 교체 계획을 구체적으로 작성한다.

**필수 포함 항목 (TODO별로 반복):**

API 호출:
- [ ] 호출할 endpoint (method + path)
- [ ] 전달할 파라미터 (path param, query, body — UI에서 어떤 값을 가져오는지)
- [ ] 응답 데이터 매핑 (API 응답 필드 → UI 컴포넌트 prop)

에러 처리:
- [ ] API 실패 시 UI 동작 (토스트, 필드별 에러, 재시도 버튼 등)
- [ ] 에러 코드별 사용자 메시지 (Phase 2의 에러 정의에서 가져옴)
- [ ] 네트워크 에러 처리

로딩 상태:
- [ ] API 호출 중 UI 표시 (스피너, 스켈레톤, 버튼 비활성화 등)
- [ ] 낙관적 업데이트(optimistic update)가 필요한 곳이 있는지

데이터 갱신:
- [ ] API 성공 후 목록 갱신 방식 (refetch, 로컬 업데이트, invalidate cache)
- [ ] 성공 토스트 메시지

**Plan 예시:**

    ### 1. 사용자 목록 조회 — members-table.tsx:42
    - mock data 삭제: mocks/members.ts
    - API: GET /api/orgs/:orgId/members?page={page}&pageSize={pageSize}&search={search}
    - orgId: 현재 조직 컨텍스트에서 가져옴
    - 응답 매핑:
      | API 필드 | UI prop |
      |----------|---------|
      | data.items[].user.name | 이름 컬럼 |
      | data.items[].user.email | 이메일 컬럼 |
      | data.items[].role | 역할 뱃지 |
      | data.total | 페이지네이션 total |
    - 로딩: 최초 로드 시 테이블 스켈레톤, 페이지 전환 시 스피너
    - 에러: 전역 토스트 "사용자 목록을 불러오지 못했습니다"

    ### 2. 역할 변경 — members-table.tsx:67
    - API: PUT /api/orgs/:orgId/members/:memberId/role
    - body: { role: 드롭다운에서 선택한 값 }
    - 로딩: 드롭다운 비활성화
    - 성공: 토스트 "역할이 변경되었습니다" + 목록 refetch
    - 에러:
      | Error Code | 사용자 메시지 |
      |------------|-------------|
      | CANNOT_CHANGE_OWN_ROLE | "자신의 역할은 변경할 수 없습니다" |
      | LAST_OWNER_CANNOT_CHANGE | "조직에 Owner가 최소 1명 필요합니다" |

#### 4단계: 구현

Plan 순서대로 TODO를 교체한다:

1. **API 클라이언트 함수 작성** — 기존 프로젝트의 API 호출 패턴을 따른다 (axios, fetch, tanstack-query 등)
2. **mock data 교체** — mock data import를 API 호출로 교체
3. **에러 처리 연결** — 에러 코드별 사용자 메시지 매핑
4. **로딩 상태 연결** — API 호출 중 UI 표시
5. **데이터 갱신 연결** — 성공 후 목록 refetch, 토스트

#### 규칙

- **TODO 주석을 하나도 남기지 않는다.** 모든 TODO가 실제 API 호출로 교체되어야 한다
- **mock data 파일을 삭제한다.** 더 이상 사용하지 않는 mock data는 제거한다
- **기존 API 호출 패턴을 따른다.** 프로젝트에서 사용하는 HTTP 클라이언트, 상태 관리, 캐시 전략을 따른다
- **하드코딩된 값이 없는지 확인한다.** 특히 role이나 status 같은 값이 사용자 입력 대신 하드코딩되어 있지 않은지
- **에러 메시지는 사용자가 이해할 수 있게 작성한다.** 기술적 에러 코드를 그대로 보여주지 않는다

#### 완료 기준

- [ ] Phase 1의 모든 `// TODO: API 연동` 주석이 제거되었다
- [ ] 모든 mock data가 실제 API 응답으로 교체되었다
- [ ] 사용하지 않는 mock data 파일이 삭제되었다
- [ ] 각 API 호출에 에러 처리가 연결되었다
- [ ] 각 API 호출에 로딩 상태가 표시된다
- [ ] API 성공 후 데이터 갱신(refetch 등)이 동작한다
- [ ] 하드코딩된 값이 없다

#### 다음 단계 안내

    Phase 4 (연동)이 완료되었습니다.
    다음 단계는 Phase 5 (와이어프레임 검증)입니다.
    와이어프레임 검증을 진행할까요? (/5-verify-wireframe)

---

### /5-verify-wireframe

> **스킬 파일:** `.claude/skills/5-verify-wireframe/SKILL.md`

$ARGUMENTS 기능의 구현 결과를 와이어프레임과 1:1 대조하여 누락이 없는지 최종 검증한다.

**wireframes는 기준 문서다.** 코드를 wireframes에 맞추는 것이지, wireframes를 코드에 맞추는 것이 아니다. wireframes를 수정해야 할 상황이 생기면 반드시 요청자에게 먼저 확인한다. 임의로 수정하지 않는다.

#### 0단계: 사전 확인

Phase 4 (연동)이 완료되었는지 확인한다. 완료되지 않았으면 먼저 /4-implement-connect를 실행하라고 안내한다.

#### 1단계: 문서 읽기

| 문서 | 목적 |
|------|------|
| wireframes/ 관련 화면 | 검증의 기준 — 모든 항목을 여기서 꺼낸다 |
| features/$ARGUMENTS.md | 비즈니스 규칙, 상태 전이 — 코드가 기획과 일치하는지 |
| /0-plan-feature 결과 | 전체 Phase에서 계획한 내용과 실제 구현 비교 |
| Phase 4에서 구현한 코드 | 검증 대상 |

#### 2단계: 검증 체크리스트 작성

와이어프레임을 읽고, 아래 카테고리별로 **검증할 구체적 항목을 Plan에 직접 나열**한다. "와이어프레임과 대조한다"로 끝내지 않는다.

**프론트엔드 검증**

화면 구조 — 와이어프레임의 모든 요소를 하나씩 나열한다:

    | # | 요소 | 와이어프레임 명세 | 코드 확인 | 결과 |
    |---|------|------------------|-----------|------|
    | 1 | 이름 컬럼 | text, member.user.name | | |
    | 2 | 이메일 컬럼 | text, member.user.email | | |
    | 3 | 역할 뱃지 | Owner=blue, Admin=purple, Member=gray | | |
    | 4 | 상태 뱃지 | active=green, pending=yellow, inactive=red | | |
    | 5 | 가입일 컬럼 | YYYY-MM-DD 형식 | | |
    | 6 | 역할 변경 드롭다운 | Owner, Admin, Member 선택지 | | |
    | 7 | 비활성화 버튼 | DangerDialog 표시 | | |
    | 8 | 사용자 초대 버튼 | 초대 모달 열기 | | |

인터랙션 — 함수 내부까지 추적한다:

    | # | 인터랙션 | 와이어프레임 동작 | 확인 사항 | 결과 |
    |---|---------|------------------|-----------|------|
    | 1 | 역할 변경 | 드롭다운 선택 → API 호출 → 토스트 → 목록 갱신 | 함수가 실제로 API를 호출하는가, 선택한 값이 전달되는가 | |
    | 2 | 비활성화 | DangerDialog 확인 → API 호출 → 토스트 → 목록 갱신 | DangerDialog를 사용하는가, confirm()이 아닌가 | |
    | 3 | 초대 | 모달 입력 → API 호출 → 토스트 → 모달 닫기 → 목록 갱신 | 입력값이 전달되는가, 성공 후 모달이 닫히는가 | |

확인 시 주의:
- 함수가 "존재"하는 것만으로 PASS하지 않는다. 함수 내부에서 실제로 요구 동작을 수행하는지 코드를 읽는다
- 사용자가 선택한 값이 전달되는지 확인한다. 하드코딩된 기본값이 사용자 선택을 대체하고 있지 않은지
- prop이 선언만 되고 부모에서 실제로 전달되지 않는 경우가 없는지

상태별 화면:

    | # | 상태 | 와이어프레임 명세 | 확인 사항 | 결과 |
    |---|------|------------------|-----------|------|
    | 1 | 빈 목록 | "등록된 사용자가 없습니다" + 초대 버튼 | 메시지와 CTA가 일치하는가 | |
    | 2 | 검색 결과 없음 | "검색 결과가 없습니다" | 빈 목록과 구분되는가 | |
    | 3 | 로딩 | 테이블 스켈레톤 | 스켈레톤인가 스피너인가 | |
    | 4 | 에러 | 전역 토스트 | 필드별 에러가 필요한 곳은 없는가 | |
    | 5 | 권한 없음 | 버튼 숨김 또는 비활성화 | 어떤 방식인지 와이어프레임과 일치하는가 | |

값/데이터 검증:

    | # | 항목 | 와이어프레임 요구 | 확인 사항 | 결과 |
    |---|------|------------------|-----------|------|
    | 1 | 이름 컬럼 데이터 | user.name | organization.name 등 잘못된 필드를 표시하고 있지 않은가 | |
    | 2 | 날짜 형식 | YYYY-MM-DD | ISO 문자열이 그대로 표시되고 있지 않은가 | |
    | 3 | 역할 텍스트 | Owner, Admin, Member | 코드 내부 enum 값(OWNER, ADMIN)이 그대로 표시되고 있지 않은가 | |

**백엔드 검증**

API 응답:

    | # | 항목 | 필요한 필드 | 확인 사항 | 결과 |
    |---|------|-----------|-----------|------|
    | 1 | 목록 응답 | user.name, user.email, role, status, created_at | 프론트가 필요로 하는 모든 필드가 응답에 포함되는가 | |
    | 2 | 페이지네이션 | items, total, page, pageSize | 프론트와 응답 형식이 일치하는가 | |

비즈니스 로직:

    | # | 항목 | 와이어프레임 명세 | 확인 사항 | 결과 |
    |---|------|------------------|-----------|------|
    | 1 | 상태 전환 | 비활성화 시 active→inactive | 백엔드에서 올바르게 처리되는가 | |
    | 2 | 연쇄 동작 | 비활성화 시 세션 종료 | SessionService.revokeAll이 호출되는가 | |
    | 3 | 권한 검증 | 역할 변경은 Owner만 | 미들웨어에서 검증되는가 | |

데이터 모델:

    | # | 항목 | 확인 사항 | 결과 |
    |---|------|-----------|------|
    | 1 | 표시 필드 | 와이어프레임에 표시되는 모든 필드가 DB 스키마에 존재하는가 | |
    | 2 | 관계 데이터 | user 관계가 API에서 join되어 반환되는가 | |

#### 3단계: 검증 실행

체크리스트의 각 항목을 코드와 대조하여 결과를 기록한다.

- **PASS** — 와이어프레임과 일치한다
- **FAIL** — 와이어프레임과 다르다 → 즉시 수정
- **WARN** — 와이어프레임에 명시되지 않았지만 확인이 필요하다 → 질문

#### 4단계: FAIL 항목 수정

FAIL 항목이 있으면 즉시 수정한다. 수정 후 해당 항목을 다시 검증한다.

- 프론트엔드 수정이면 코드를 직접 수정한다
- 백엔드 수정이면 코드를 수정하고 테스트를 다시 실행한다
- 와이어프레임 자체를 수정해야 하면 **반드시 먼저 확인을 받는다**

#### 5단계: 최종 보고

검증 결과를 요약하여 보고한다.

    ## 와이어프레임 검증 결과

    ### 요약
    - 총 검증 항목: N개
    - PASS: N개
    - FAIL → 수정 완료: N개
    - WARN → 확인 필요: N개

    ### FAIL → 수정한 항목
    | # | 항목 | 문제 | 수정 내용 |
    |---|------|------|-----------|
    | 1 | ... | ... | ... |

    ### WARN → 확인 필요 항목
    | # | 항목 | 질문 |
    |---|------|------|
    | 1 | ... | ... |

#### 규칙

- **모든 항목을 빠짐없이 검증한다.** "대체로 맞아 보인다"로 넘어가지 않는다
- **함수 내부까지 추적한다.** 함수 이름이 있는 것과 함수가 동작하는 것은 다르다
- **와이어프레임이 기준이다.** 코드가 다르면 코드를 고친다
- **와이어프레임을 수정해야 하면 먼저 확인한다.** 임의로 수정하지 않는다
- **FAIL 항목은 즉시 수정한다.** 다음 작업으로 넘기지 않는다

#### 완료 기준

- [ ] 와이어프레임의 모든 화면 구조 항목이 PASS다
- [ ] 모든 인터랙션이 함수 내부까지 추적되어 PASS다
- [ ] 모든 상태별 화면이 PASS다
- [ ] 값/데이터가 와이어프레임이 요구하는 실제 데이터와 일치한다
- [ ] API 응답이 프론트엔드에 필요한 모든 필드를 포함한다
- [ ] 비즈니스 로직과 연쇄 동작이 와이어프레임과 일치한다
- [ ] FAIL 항목이 모두 수정되었다
- [ ] WARN 항목에 대해 확인을 요청했다

#### 다음 단계 안내

    Phase 5 (와이어프레임 검증)이 완료되었습니다.
    $ARGUMENTS 기능의 모든 Phase가 완료되었습니다.

    다음 기능이 있으면 /0-plan-feature로 새 기능을 시작할 수 있습니다.

---

### /analyze-release

> **스킬 파일:** `.claude/skills/analyze-release/SKILL.md`

$ARGUMENTS 릴리즈의 구현 범위를 분석하고, feature 단위로 쪼개어 구현 순서를 제안한다. 구현 전에 먼저 실행하여 작업 범위를 파악한다.

#### 0단계: 사전 확인

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 대상 프로젝트 | 어떤 프로젝트의 릴리즈인가? |
| 릴리즈 파일 | releases/$ARGUMENTS.md가 존재하는가? |

#### 1단계: 릴리즈 문서 읽기

releases/$ARGUMENTS.md를 읽고 아래를 파악한다:

- 버전 목표 (전체 방향)
- 모든 체크리스트 항목 (새 기능, 개선사항, 기타)
- 각 항목이 참조하는 features/ 문서
- 각 항목이 참조하는 wireframes/ 문서
- 배포 계획 (migration, 환경변수, downstream 영향)
- 의존성/제약사항

#### 2단계: 관련 문서 읽기

릴리즈에서 참조하는 모든 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 유형 | 목적 |
|-----------|------|
| features/ 관련 문서 | 각 기능의 상세 명세, 비즈니스 규칙 |
| wireframes/ 관련 문서 | UI 변경 범위 |
| 참조된 전략/정책 문서 | 기능의 근거, 제약조건 |
| data_model.md | 현재 DB 스키마 — 변경 영향 파악 |
| api_contract.md | 현재 API — 변경 영향 파악 |

#### 3단계: Feature 단위 분류

릴리즈의 모든 체크리스트 항목을 **독립적으로 구현 가능한 feature 단위**로 분류한다.

분류 기준:
- **같은 도메인/모듈**에 속하는 항목끼리 묶는다
- **DB 변경이 공유**되는 항목끼리 묶는다
- **하나의 API endpoint**에 관련된 항목끼리 묶는다
- **하나의 화면**에 관련된 UI 변경끼리 묶는다
- 단, 하나의 feature가 너무 크면 (체크리스트 6개 이상) 더 쪼갤 수 있는지 검토한다

#### 4단계: 의존성 분석

feature 간 의존성을 파악한다.

- 어떤 feature가 다른 feature의 DB 변경에 의존하는가
- 어떤 feature가 다른 feature의 API에 의존하는가
- 선행 작업이 필요한 feature는 무엇인가
- 독립적으로 구현 가능한 feature는 무엇인가

#### 5단계: 구현 순서 제안

의존성을 고려하여 구현 순서를 제안한다.

**출력 형식:**

    ## 릴리즈 분석: $ARGUMENTS

    ### 요약
    - 총 체크리스트 항목: N개
    - 분류된 feature 수: N개
    - 예상 구현 순서: N단계

    ### Feature 목록

    #### Feature 1: [feature 이름]
    - 체크리스트 항목:
      - [ ] 항목 1 (릴리즈 문서 원문)
      - [ ] 항목 2
    - 관련 문서: features/xxx.md, wireframes/xxx.md
    - DB 변경: [있으면 구체적으로, 없으면 "없음"]
    - API 변경: [있으면 구체적으로, 없으면 "없음"]
    - UI 변경: [있으면 구체적으로, 없으면 "없음"]
    - 의존: [다른 feature에 의존하면 명시, 없으면 "없음 (독립)"]

    #### Feature 2: [feature 이름]
    ...

    ### 의존성 그래프

    Feature 1 (디바이스 만료일 제거)
      └→ Feature 2 (PENDING + fingerprint 바인딩)
           ├→ Feature 3 (모드 전환)
           ├→ Feature 4 (PENDING 자동 정리)
           └→ Feature 7 (Licenses & Devices 페이지)
    Feature 5 (개인 만료일 동결/복원) ← 독립
      ├→ Feature 6 (온라인 로그인 캐시)
      ├→ Feature 8 (Users 모달 잔여일)
      └→ Feature 9 (알림 연동)

    ### 권장 구현 순서

    1단계: Feature 1 → 다른 feature의 전제
    2단계: Feature 2, Feature 5 → 동시 진행 가능 (독립)
    3단계: Feature 3, Feature 4, Feature 6, Feature 7, Feature 8
    4단계: Feature 9 → 알림은 핵심 기능 이후

    ### 릴리즈 분할 제안 (선택)

    현재 릴리즈가 feature N개로 구성되어 있습니다.
    한 버전에서 모두 구현할 수 있지만, 분할을 원하시면:

    v0.0.5 (핵심):
    - Feature 1, 2, 3, 4, 5, 7 — 디바이스 + 만료일 핵심 로직
    - 체크리스트: N개

    v0.0.6 (확장):
    - Feature 6, 8, 9 — 캐시, UI 표시, 알림
    - 체크리스트: N개

    릴리즈를 분할할까요, 아니면 현재 버전에서 feature 순서대로 진행할까요?

#### 규칙

- **구현하지 않는다.** 분석과 분류만 한다
- **릴리즈 문서의 체크리스트 항목을 하나도 빠뜨리지 않는다.** 모든 항목이 어떤 feature에 속해야 한다
- **feature 하나는 /0-plan-feature → /5-verify-wireframe 한 사이클로 구현 가능한 크기여야 한다.** 너무 크면 쪼갠다
- **의존성이 있으면 반드시 명시한다.** 의존성을 무시하고 구현하면 나중에 충돌한다
- **릴리즈 분할은 제안만 한다.** 실제 분할은 확인 후 진행한다
- **downstream 서비스 영향도 feature에 포함한다.** 다른 프로젝트에서 해야 할 작업이 있으면 별도로 명시한다

#### 완료 기준

- [ ] 릴리즈의 모든 체크리스트 항목이 feature로 분류되었다
- [ ] 각 feature의 관련 문서, DB/API/UI 변경이 파악되었다
- [ ] feature 간 의존성이 분석되었다
- [ ] 구현 순서가 제안되었다
- [ ] 릴리즈 분할 여부에 대한 의견이 제시되었다

#### 다음 단계 안내

    릴리즈 분석이 완료되었습니다.

    [릴리즈를 분할하는 경우]
    릴리즈를 분할할까요? 분할하면 releases/ 문서를 업데이트합니다.

    [현재 버전으로 진행하는 경우]
    첫 번째 feature부터 구현을 시작할까요?
    → /0-plan-feature [첫 번째 feature명]
