---
name: implement
description: 릴리즈의 Plan을 읽고 Phase 1(UI) → 2(API) → 3(Backend) → 4(연동) → 5(검증) 순서대로 구현한다.
argument-hint: "릴리즈 버전 예: v0.0.5"
disable-model-invocation: true
---

# Implement

$ARGUMENTS의 Plan을 읽고 Phase 순서대로 구현한다.

`docs/plans/$ARGUMENTS.md` 파일이 있는지 확인한다. 없으면 먼저 /plan을 실행하라고 안내한다.

Plan에 여러 feature가 있으면 **feature 하나씩 순서대로** 진행한다. 해당 Phase에 내용이 없는 feature는 건너뛴다.

**전환 시 번호 선택으로 질문한다.** feature 간, Phase 간 전환 모두 아래 형식을 사용한다:

    [Feature N 완료] 다음 작업을 선택하세요:
    1) 다음 feature 진행 (Feature M: ...)
    2) 여기서 중단
    선택:

    [Phase N 전체 완료] 다음 작업을 선택하세요:
    1) Phase N+1 진행
    2) 여기서 중단
    선택:

---

## Phase 1: UI Prototype

UI를 구현한다. 실제 API 연동 없이 화면만 만든다.

### 문서 읽기

| 문서 | 목적 |
|------|------|
| docs/plans/$ARGUMENTS.md | 해당 feature의 Phase 1 섹션 |
| docs/wireframes/ 관련 화면 | 화면 구조, 필드, 버튼, 뱃지, 상태별 화면의 원본 |

### Plan 작성

문서에서 아래 항목을 **모두** 꺼내서 Plan에 직접 나열한다.

화면 구조:
- [ ] 화면에 표시되는 모든 필드/컬럼 (이름, 타입, 읽기전용 여부)
- [ ] 각 필드의 데이터 소스 (어떤 API 필드에서 오는지)
- [ ] 테이블이면 컬럼 순서와 정렬/필터 여부

버튼/인터랙션:
- [ ] 각 버튼의 라벨과 클릭 시 동작 (모달, 토스트, 네비게이션, DangerDialog 등)
- [ ] 확인 다이얼로그가 필요한 동작
- [ ] 드롭다운의 선택지 목록
- [ ] 폼이 있으면 필드별 validation 규칙과 에러 메시지

뱃지/라벨:
- [ ] 뱃지 텍스트와 색상 구분
- [ ] 상태 라벨

상태별 화면:
- [ ] 빈 상태(데이터 없음) — 메시지 텍스트와 CTA 버튼
- [ ] 검색/필터 결과 없음
- [ ] 로딩 상태 — 스켈레톤/스피너
- [ ] 에러 상태 — 필드별 에러인지 전역 토스트인지
- [ ] 권한 없음 — 숨김인지 비활성화인지

### 구현 규칙

- **@ingradient/ui를 사용한다**
- **mock data를 사용한다.** 별도 파일로 분리. 도메인 맥락에 맞는 실제같은 데이터. 다양한 케이스 포함
- **API 호출 자리에 반드시 TODO 주석:** `// TODO: API 연동 - GET /api/members (사용자 목록 조회)`. Phase 4에서 이 TODO를 기반으로 연동하므로 하나도 빠뜨리면 안 된다
- **confirm() 대신 DangerDialog 사용**
- **prop은 선언만 하지 말고 부모에서 실제로 전달**
- **하드코딩된 기본값이 사용자 선택을 대체하지 않도록**
- 실제 API 호출, 인증/권한 검증, DB 연동, 비즈니스 로직은 포함하지 않는다

### UI 테스트

Playwright E2E 테스트를 작성한다:
- [ ] 각 화면 정상 렌더링
- [ ] 네비게이션 동작
- [ ] 빈 상태 화면
- [ ] 모달/다이얼로그 열림/닫힘
- [ ] 폼 validation
- [ ] 뱃지/라벨 텍스트

### 와이어프레임 대조

- [ ] 모든 필드/컬럼/버튼/뱃지가 렌더링되는가
- [ ] 읽기전용/수정가능 여부 일치
- [ ] 드롭다운 선택지 일치
- [ ] 뱃지 텍스트와 색상 일치
- [ ] 빈 상태 vs 검색 결과 없음 구분

PASS가 아닌 항목은 즉시 수정한다.

### Phase 1 완료 기준

- [ ] Plan의 모든 화면이 구현되었다
- [ ] 모든 API 호출 자리에 TODO 주석이 있다
- [ ] mock data가 별도 파일로 분리되어 있다
- [ ] 주요 상태(empty, loading, error)가 확인 가능하다
- [ ] Playwright E2E 테스트가 통과한다
- [ ] 와이어프레임 대조가 완료되었다

### Phase 1 → 2 전환

    [Phase 1 전체 완료] 다음 작업을 선택하세요:
    1) Phase 2 (API 설계) 진행
    2) 여기서 중단
    선택:

---

## Phase 2: API 설계

TODO 주석을 기반으로 필요한 API endpoint를 설계한다. **구현하지 않는다.**

### 문서 읽기

| 문서 | 목적 |
|------|------|
| docs/plans/$ARGUMENTS.md | 해당 feature의 Phase 2 섹션 |
| Phase 1 코드 | TODO 주석 전체 수집 |
| docs/api_contract.md | 기존 API — 중복/충돌 확인 |
| docs/dev/api_convention.md | API 구현 규칙 |

### TODO 수집

**현재 프로젝트의 TODO 목록:**

!`grep -rn "// TODO: API" src/ 2>/dev/null || echo "(src/에서 TODO를 찾지 못했습니다)"`

위 목록이 비어있으면 소스 코드 경로를 확인하고 다시 검색한다. 그래도 없으면 질문한다.

### Plan 작성

endpoint별로:
- [ ] Method + Path, 목적, 연결된 TODO 위치, 필요한 권한/역할
- [ ] 요청: Path/Query/Body 파라미터
- [ ] 응답: 성공 (status code + body), 에러 (상황별 에러 코드)
- [ ] 기존 API와의 관계

### api_contract.md 업데이트

설계가 확정되면 docs/api_contract.md에 새 endpoint를 추가한다.

### 규칙

- **구현하지 않는다.** 설계와 문서화만
- **api_convention.md를 따른다**
- **기존 API와 충돌하면 알리고 확인**

### Phase 2 완료 기준

- [ ] 모든 TODO에 대응하는 API가 설계되었다
- [ ] 요청/응답/에러가 구체적으로 정의되었다
- [ ] 역할별 접근 권한이 명시되었다
- [ ] docs/api_contract.md가 업데이트되었다

### Phase 2 → 3 전환

    [Phase 2 전체 완료] 다음 작업을 선택하세요:
    1) Phase 3 (Backend) 진행
    2) 여기서 중단
    선택:

---

## Phase 3: Backend

Phase 2에서 설계한 API를 실제 코드로 구현한다.

### 문서 읽기

| 문서 | 목적 |
|------|------|
| docs/plans/$ARGUMENTS.md | 해당 feature의 Phase 3 섹션 |
| Phase 2에서 설계한 API | endpoint 목록, 요청/응답/에러 |
| docs/data_model.md | 기존 DB 스키마 |
| docs/architecture.md | 모듈 구성, 레이어 구조 |
| docs/dev/coding_convention.md | 코딩 규칙 |

DB 변경이 있으면: docs/dev/migration_policy.md
권한/연동이 관련되면: docs/product/role_permission_flow.md, docs/api/auth_api.md

### 기존 코드 패턴 파악

- [ ] 디렉토리 구조 — 모듈/파일 위치
- [ ] 유사 기능의 route, service, validation, test 패턴
- [ ] 공통 유틸/미들웨어 — 인증, 권한, 에러, 로깅
- [ ] migration 파일명 규칙, ORM 패턴

### Plan 작성

DB 변경:
- [ ] 기존 스키마 + 추가/변경할 컬럼 (타입, 기본값, nullable, 제약조건)
- [ ] migration 전략, rollback 가능 여부

Service 로직:
- [ ] 서비스 함수 목록, 비즈니스 규칙, 상태 전이, 에러 케이스, 다른 서비스 호출

Route/Controller:
- [ ] route 정의, 미들웨어, validation schema

테스트 — **함수별/route별로 구체적 케이스를 나열:**
- [ ] Unit: 성공 + 모든 에러 케이스
- [ ] Integration: 200 + 모든 에러 status (400, 403, 404)
- [ ] 상태 전이 전후 검증

### 구현 순서

1. migration → 2. service → 3. validation schema → 4. route → 5. 테스트

### 규칙

- **기존 코드 패턴을 따른다**
- **파일 하나 200줄 미만**
- **여러 모듈의 조합으로 구현. 거대한 함수 금지**
- **에러 코드는 enum/상수. 문자열 직접 비교 금지**
- **migration은 backward compatible 우선**
- **테스트 생략 금지**

### data_model.md 업데이트

DB 변경이 있으면 docs/data_model.md를 업데이트한다.

### Phase 3 완료 기준

- [ ] 모든 API endpoint가 구현되었다
- [ ] migration이 backward compatible하다
- [ ] 비즈니스 규칙이 기획과 일치한다
- [ ] 에러 케이스가 모두 처리되었다
- [ ] 테스트가 통과한다
- [ ] docs/data_model.md가 업데이트되었다

### Phase 3 → 4 전환

    [Phase 3 전체 완료] 다음 작업을 선택하세요:
    1) Phase 4 (연동) 진행
    2) 여기서 중단
    선택:

---

## Phase 4: 연동

Phase 1의 TODO 주석을 실제 API 호출로 교체한다.

### TODO 수집

!`grep -rn "// TODO: API" src/ 2>/dev/null || echo "(src/에서 TODO를 찾지 못했습니다)"`

### Plan 작성

TODO별로:

API 호출:
- [ ] endpoint (method + path)
- [ ] 전달할 파라미터
- [ ] 응답 데이터 매핑 (API 필드 → UI prop)

에러 처리 — **API별로 구체적으로:**
- [ ] 에러 코드별 사용자 메시지
- [ ] 표시 방식 (토스트/필드 에러)
- [ ] 네트워크 에러 처리

로딩 상태 — **API별로 구체적으로:**
- [ ] UI 표시 (버튼 비활성화, 스피너, 스켈레톤)

데이터 갱신 — **API별로 구체적으로:**
- [ ] 토스트 메시지 텍스트
- [ ] 갱신 방식 (refetch, invalidate cache)
- [ ] 모달/다이얼로그 닫기 여부

### 구현 순서

1. API 클라이언트 함수 → 2. mock data 교체 → 3. 에러 처리 → 4. 로딩 상태 → 5. 데이터 갱신

### E2E 테스트 업데이트

- [ ] mock → 실제 API 전환
- [ ] 에러/로딩 상태 테스트
- [ ] 전체 사용자 흐름 시나리오
- [ ] 권한별 테스트

### 규칙

- **TODO 주석을 하나도 남기지 않는다**
- **mock data 파일을 삭제한다**
- **기존 API 호출 패턴을 따른다**
- **하드코딩된 값 금지**

### Phase 4 완료 기준

- [ ] 모든 TODO가 제거되었다
- [ ] mock data가 삭제되었다
- [ ] 에러 처리, 로딩 상태, 데이터 갱신이 연결되었다
- [ ] E2E 테스트가 통과한다

### Phase 4 → 5 전환

    [Phase 4 전체 완료] 다음 작업을 선택하세요:
    1) Phase 5 (와이어프레임 검증) 진행
    2) 여기서 중단
    선택:

---

## Phase 5: 와이어프레임 검증

구현 결과를 와이어프레임과 1:1 대조한다.

**wireframes는 기준 문서다.** 코드를 wireframes에 맞추는 것이지, wireframes를 코드에 맞추는 것이 아니다.

### 문서 읽기

| 문서 | 목적 |
|------|------|
| docs/wireframes/ 관련 화면 | 검증 기준 |
| docs/plans/$ARGUMENTS.md | 계획 vs 실제 비교 |

### 검증 체크리스트

**반드시 PASS/FAIL/WARN 테이블 형식:**

    | # | 요소 | 와이어프레임 명세 | 코드 확인 | 결과 |
    |---|------|------------------|-----------|------|
    | 1 | ... | ... | ... | PASS/FAIL/WARN |

카테고리: 화면 구조, 인터랙션, 상태별 화면, 값/데이터 검증, API 응답, 비즈니스 로직, 데이터 모델

**인터랙션은 함수 내부까지 추적한다.** 함수가 "존재"하는 것만으로 PASS하지 않는다.

### FAIL 수정

FAIL 항목은 즉시 수정한다. wireframe 수정이 필요하면 **먼저 확인**을 받는다.

### 최종 보고

    ## 와이어프레임 검증 결과
    - 총 검증 항목: N개
    - PASS: N개 / FAIL → 수정: N개 / WARN: N개

### Phase 5 완료 기준

- [ ] 모든 화면 구조/인터랙션/상태별 화면이 PASS
- [ ] API 응답, 비즈니스 로직이 일치
- [ ] FAIL 항목이 모두 수정됨
- [ ] WARN 항목에 대해 확인 요청함

---

## 전체 완료 안내

    [모든 Phase 완료] 다음 작업을 선택하세요:
    1) 커밋 진행 (/commit)
    2) 리뷰 진행 (/review $ARGUMENTS)
    3) 여기서 중단
    선택:
