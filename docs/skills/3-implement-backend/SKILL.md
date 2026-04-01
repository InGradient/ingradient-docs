---
name: implement-backend
description: 기능의 Backend를 구현한다. Phase 2에서 설계한 API를 실제 코드로 만들고 테스트를 작성한다.
argument-hint: [feature명]
disable-model-invocation: true
---

# Phase 3: Backend

$ARGUMENTS 기능의 Backend를 구현한다. Phase 2에서 설계한 API를 실제 코드로 만든다.

## 0단계: 사전 확인

Phase 2 (API 설계)가 완료되었는지 확인한다. 완료되지 않았으면 먼저 /2-implement-api를 실행하라고 안내한다.

## 1단계: 문서 읽기

아래 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 | 목적 |
|------|------|
| /0-plan-feature 결과 | Phase 3 개요 확인 — DB 변경, 서비스 로직, 기존 코드 패턴 |
| Phase 2에서 설계한 API | 구현할 endpoint 목록, 요청/응답/에러 정의 |
| docs/features/$ARGUMENTS.md | 비즈니스 규칙, 상태 전이, 에러 케이스, 테스트 계획 |
| docs/data_model.md | 기존 DB 스키마 — 테이블, 컬럼, 관계, 상태값 |
| docs/architecture.md | 모듈 구성, 레이어 구조 — 어디에 코드를 넣을지 |
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

## 2단계: 기존 코드 패턴 파악

구현 전에 프로젝트의 기존 코드를 반드시 탐색한다.

- [ ] 프로젝트 디렉토리 구조 확인 — 모듈/파일이 어디에 위치하는지
- [ ] 유사 기능의 기존 코드 탐색 — route, service, validation, test 패턴
- [ ] 공통 유틸/미들웨어 확인 — 인증, 권한 검증, 에러 핸들링, 로깅이 어떻게 되어 있는지
- [ ] 기존 migration 파일 확인 — migration 파일명 규칙, ORM/쿼리 패턴

파악한 패턴을 Plan에 직접 기록한다.

## 3단계: Plan 작성

Phase 2의 API 설계와 기존 코드 패턴을 기반으로 구현 계획을 작성한다.

**필수 포함 항목:**

DB 변경 (migration이 필요한 경우):
- [ ] 변경 대상 테이블 (기존 스키마를 docs/data_model.md에서 꺼내서 포함)
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

테스트 — **반드시 함수별/route별로 구체적 케이스를 나열한다. "테스트를 작성한다"로 끝내지 않는다:**
- [ ] 각 서비스 함수의 unit 테스트 케이스: 성공 케이스 + 모든 에러 케이스 (예: changeRole → 성공, 자기자신 변경, 마지막 Owner 변경, 권한 없음)
- [ ] 각 route의 integration 테스트 케이스: 200 성공 + 모든 에러 status (400, 403, 404 등)
- [ ] 기획 문서의 에러 케이스가 모두 테스트에 포함되는지
- [ ] 상태 전이가 있으면 전이 전후 상태를 검증하는 테스트

Plan 예시는 [plan-example.md](references/plan-example.md)를 참고한다.

## 4단계: 구현

Plan 순서대로 구현한다:

1. **migration** — DB 스키마 변경이 있으면 먼저 작성
2. **service** — 비즈니스 로직
3. **validation schema** — request validation
4. **route** — endpoint 연결, 미들웨어 적용
5. **테스트** — unit, integration

## 규칙

- **기존 코드 패턴을 따른다.** 새 패턴을 도입하지 않는다
- **파일 하나는 200줄 미만.** 넘으면 책임을 분리하여 파일을 쪼갠다
- **하나의 기능은 여러 모듈의 조합으로 구현한다.** 하나의 거대한 함수로 만들지 않는다
- **겹치는 로직은 공통 함수로 추출한다.** 기능별로 따로 구현하지 않는다
- **에러 메시지는 원인을 파악할 수 있도록 구체적으로 작성한다**
- **로그에는 모듈명과 관련 ID를 포함한다**
- **상태값, 에러 코드는 enum 또는 상수로 정의한다.** 문자열을 직접 비교하지 않는다
- **migration은 backward compatible 우선.** destructive change는 별도 확인
- **테스트는 생략하지 않는다.** 작성 가능한 모든 테스트를 반드시 작성한다

## 5단계: docs/data_model.md 업데이트

DB 스키마가 변경되었으면 docs/data_model.md를 업데이트한다.

- 새 테이블/컬럼 추가
- 변경된 관계, 제약조건 반영
- 기존 형식과 일관되게 작성한다

## 완료 기준

- [ ] Phase 2에서 설계한 모든 API endpoint가 구현되었다
- [ ] migration이 필요한 경우 작성되었고 backward compatible하다
- [ ] 각 서비스 함수의 비즈니스 규칙이 기획 문서와 일치한다
- [ ] 에러 케이스가 모두 처리되었다
- [ ] unit 테스트와 integration 테스트가 작성되었고 통과한다
- [ ] 기존 코드 패턴을 따르고 있다
- [ ] docs/data_model.md가 업데이트되었다 (DB 변경이 있는 경우)

## 다음 단계 안내

    Phase 3 (Backend)이 완료되었습니다.
    다음 단계는 Phase 4 (연동)입니다.
    연동 Plan을 작성할까요? (/4-implement-connect)
