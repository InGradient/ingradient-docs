# Phased Implementation Guide

- 문서명: Phased Implementation Guide
- 목적: 기능 구현을 Phase별로 나누어 진행할 때의 워크플로우와 도구 설정을 안내한다.
- 적용 범위: INGRADIENT 전체 프로젝트
- 상태: Draft
- Owner: Dev
- 마지막 수정일: 2026-04-01

> 이 가이드를 따르기 전에 `common_guide.md`를 먼저 읽는다. 소통, 테스트, 코드 품질, 문서 원칙이 모든 작업에 공통 적용된다.

## 이 가이드가 필요한 이유

구현 시 참고 문서(wireframes, features, api_contract 등)를 읽어도 대화가 길어지면 컨텍스트 압축으로 내용이 사라진다. Plan에 "문서를 참고한다"라고만 적으면 구현 후반에 빠뜨리는 항목이 발생한다.

이 가이드는 두 가지 문제를 해결한다:

1. **구현을 Phase로 쪼개서** 각 Phase의 Plan을 작고 구체적으로 유지한다
2. **CLAUDE.md와 커스텀 커맨드를 활용해서** 규칙이 매 대화마다 자동으로 적용되게 한다

## 핵심 원칙

### Feature 하나씩 순서대로

여러 feature를 동시에 구현하지 않는다. Plan이 커지면 같은 문제(누락)가 반복된다.

```
features/feature_a.md → Phase 1~5 완료
features/feature_b.md → Phase 1~5 완료
features/feature_c.md → Phase 1~5 완료
```

feature 간 의존성이 있을 때만 같은 Phase끼리 묶는 것을 허용한다. 이때도 Plan에 넣을 수 있는 양이 관리 가능할 때만 한다.

### Plan은 자기완결적이어야 한다

각 Phase 시작 시 기획 문서에서 해당 Phase에 필요한 내용을 읽고, **Plan 텍스트 안에 직접 포함**한다.

**하지 말 것:**
```
- 와이어프레임을 참고하여 사용자 목록 테이블을 구현한다
- api_contract.md를 참고하여 API를 연동한다
```

**해야 할 것:**
```
- 사용자 목록 테이블 구현
  - 컬럼: 이름, 이메일, 역할(뱃지), 상태, 가입일, 액션
  - 역할 뱃지: Owner(blue), Admin(purple), Member(gray)
  - 빈 상태: "등록된 사용자가 없습니다" + [사용자 초대] 버튼
  - 액션: 역할 변경 드롭다운, 비활성화 버튼(DangerDialog)
```

Plan만 보고도 구현할 수 있어야 한다. 원본 문서가 컨텍스트에서 사라져도 빠뜨리지 않는다.

### Phase 간 대화를 끊는다

Phase 하나가 끝나면 새 대화를 시작하는 것을 권장한다.

- 매번 CLAUDE.md가 다시 로드된다
- 이전 Phase의 결과물(코드)을 직접 읽으므로 최신 상태 기준으로 작업한다
- 컨텍스트가 깨끗한 상태에서 시작하므로 누락이 줄어든다

## 구현 Phase

### Phase 1: UI Prototype

기획 문서와 와이어프레임을 기반으로 화면을 먼저 구현한다.

- `@ingradient/ui` 컴포넌트를 사용한다
- 실제 API 호출 없이 mock data로 화면을 채운다
- API 호출이 들어갈 자리에는 `// TODO: API 연동 - [endpoint 설명]` 주석을 남긴다
- 네비게이션, 폼 입력, 상태별 화면(empty, loading, error)을 모두 포함한다

**Plan에 포함할 내용:** 와이어프레임의 필드, 버튼, 뱃지, 인터랙션, 상태별 화면을 모두 나열한다.

참고: `uiux_prototype_reading_guide.md`

### Phase 2: API 설계

UI에서 필요한 데이터와 동작을 기반으로 API를 설계한다.

- Phase 1에서 남긴 TODO 주석을 모두 수집한다
- 필요한 endpoint, 요청/응답 구조, 상태 코드를 정리한다
- `api_contract.md`를 업데이트한다

**Plan에 포함할 내용:** 각 endpoint의 method, path, request body, response body를 명시한다.

### Phase 3: Backend

API를 실제로 구현한다.

- DB 스키마 변경이 필요하면 migration부터 작성한다
- service, route, validation을 구현한다
- 단위 테스트를 작성한다

**Plan에 포함할 내용:** DB 변경사항, 비즈니스 로직 규칙, 상태 전이, 에러 케이스를 명시한다.

### Phase 4: 연동

UI의 TODO 주석을 실제 API 호출로 교체한다.

- Phase 1의 mock data를 실제 API 응답으로 교체한다
- 에러 처리, 로딩 상태, 토스트 메시지를 연결한다
- `// TODO: API 연동` 주석이 모두 제거되었는지 확인한다

**Plan에 포함할 내용:** TODO 목록과 각각 연결할 API endpoint를 1:1로 매핑한다.

### Phase 5: 와이어프레임 검증

`implementation_reading_guide.md`의 **와이어프레임 검증** 체크리스트를 따른다.

- 프론트엔드 검증: 화면 구조, 인터랙션, 상태별 화면, 값/데이터
- 백엔드 검증: API 응답, 비즈니스 로직, 데이터 모델
- PASS가 아닌 항목이 있으면 즉시 수정한다

**Plan에 포함할 내용:** 와이어프레임의 모든 검증 항목을 체크리스트로 나열한다.

## 도구 설정

### CLAUDE.md — 전역 규칙

CLAUDE.md는 모든 대화에서 자동으로 로드된다. 프로젝트 전체에 항상 적용되는 규칙을 여기에 넣는다.

**위치:**
- 프로젝트 루트의 `CLAUDE.md` — 해당 프로젝트에서 작업할 때 항상 적용
- `~/.claude/CLAUDE.md` — 모든 프로젝트에서 적용 (글로벌)

**적합한 내용:**
- 코딩 컨벤션 요약 (네이밍, 파일 구조)
- 커밋 규칙
- 항상 사용해야 하는 라이브러리 (`@ingradient/ui` 등)
- 금지 사항 (하드코딩 금지, 200줄 제한 등)

**적합하지 않은 내용:**
- Phase별 구현 절차 (매번 전체가 로드되므로 컨텍스트 낭비)
- 특정 기능의 상세 스펙
- 한 번만 사용하는 체크리스트

**예시:**
```markdown
# CLAUDE.md

## 구현 워크플로우
- 기능 구현 시 반드시 Phase별로 진행한다 (phased_implementation_guide.md 참고)
- Phase 순서: UI Prototype → API 설계 → Backend → 연동 → 와이어프레임 검증
- Plan 작성 시 참고 문서의 핵심 내용을 Plan 안에 직접 포함한다. "문서를 참고한다"로 끝내지 않는다.

## 코드 규칙
- UI는 @ingradient/ui를 사용한다
- 파일 하나는 200줄 미만
- 하드코딩 금지 — 상수 또는 환경변수 사용
```

### 커스텀 커맨드 — 상황별 규칙

특정 Phase를 시작할 때만 로드되는 규칙은 커스텀 커맨드로 만든다. `/명령어`로 호출하면 해당 내용이 프롬프트에 주입된다.

**위치:**
- 프로젝트 루트의 `.claude/commands/` — 해당 프로젝트에서만 사용
- `~/.claude/commands/` — 모든 프로젝트에서 사용 (글로벌)

**파일 하나 = 커맨드 하나.** 파일명이 커맨드 이름이 된다.

**설정 방법:**

1. 프로젝트 루트에 `.claude/commands/` 디렉토리를 만든다
2. Phase별 마크다운 파일을 작성한다
3. 해당 Phase 시작 시 `/커맨드명`으로 호출한다

**디렉토리 구조 예시:**
```
프로젝트 루트/
├── .claude/
│   └── commands/
│       ├── implement-ui.md        → /implement-ui 로 호출
│       ├── implement-api.md       → /implement-api 로 호출
│       ├── implement-backend.md   → /implement-backend 로 호출
│       ├── implement-connect.md   → /implement-connect 로 호출
│       └── verify-wireframe.md    → /verify-wireframe 로 호출
```

**커맨드 파일 작성 예시 (`implement-ui.md`):**
```markdown
# Phase 1: UI Prototype

## 진행 순서
1. 기획 문서(`features/`)에서 대상 기능의 UI/UX 섹션을 읽는다
2. 와이어프레임(`wireframes/`)에서 해당 화면을 읽는다
3. Plan을 작성한다 — 와이어프레임의 모든 필드, 버튼, 인터랙션, 상태별 화면을 Plan에 직접 나열한다
4. UI를 구현한다

## 규칙
- @ingradient/ui 컴포넌트를 사용한다
- 실제 API 호출 없이 mock data를 사용한다
- API 호출이 들어갈 자리에는 `// TODO: API 연동 - [endpoint 설명]` 주석을 남긴다
- mock data는 별도 파일로 분리한다

## Plan 작성 시 필수 포함 항목
- [ ] 화면에 표시되는 모든 필드/컬럼 목록
- [ ] 각 버튼과 클릭 시 동작 (다이얼로그, 토스트, 네비게이션 등)
- [ ] 뱃지/라벨의 텍스트와 색상 구분
- [ ] 빈 상태 메시지와 CTA
- [ ] 로딩 상태 (스켈레톤/스피너)
- [ ] 에러 상태 표시 방식
- [ ] 폼이 있으면 필드별 validation 규칙

## 완료 기준
- 와이어프레임의 모든 항목이 화면에 렌더링된다
- 모든 API 호출 자리에 TODO 주석이 있다
- mock data가 별도 파일로 분리되어 있다
- 주요 상태(empty, loading, error)가 모두 확인 가능하다
```

### CLAUDE.md vs 커스텀 커맨드 구분

| 기준 | CLAUDE.md | 커스텀 커맨드 |
|------|-----------|---------------|
| 로드 시점 | 매 대화 시작 시 자동 | `/명령어` 호출 시에만 |
| 적합한 내용 | 항상 적용되는 전역 규칙 | 특정 Phase/작업에만 필요한 상세 규칙 |
| 분량 | 짧게 유지 (항상 컨텍스트 차지) | 길어도 됨 (필요할 때만 로드) |
| 예시 | 코딩 컨벤션, 커밋 규칙 | Phase별 구현 절차, 검증 체크리스트 |

**원칙: CLAUDE.md는 가볍게, 커스텀 커맨드는 구체적으로.** CLAUDE.md에 모든 규칙을 넣으면 매번 컨텍스트를 낭비한다. 상황별로 필요한 규칙은 커맨드로 분리하고, CLAUDE.md에는 "어떤 커맨드를 언제 쓰는지"만 안내한다.

## 전체 워크플로우 요약

```
기획 완료 (features/some_feature.md)
    │
    ├── /implement-ui         → Phase 1: UI Prototype
    │   └── 새 대화 시작
    ├── /implement-api        → Phase 2: API 설계
    │   └── 새 대화 시작
    ├── /implement-backend    → Phase 3: Backend
    │   └── 새 대화 시작
    ├── /implement-connect    → Phase 4: 연동
    │   └── 새 대화 시작
    └── /verify-wireframe     → Phase 5: 와이어프레임 검증
```

각 Phase에서:
1. 커맨드 호출로 Phase 규칙을 로드한다
2. 기획 문서에서 해당 Phase에 필요한 부분을 읽는다
3. 읽은 내용을 Plan에 직접 포함한다
4. Plan대로 구현한다
5. Phase 완료 후 다음 Phase는 새 대화에서 시작한다

## 다음 단계

각 Phase의 구체적인 참고 문서는 `implementation_reading_guide.md`를 따른다. 와이어프레임 검증 체크리스트도 해당 문서에 포함되어 있다.
