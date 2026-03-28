# Coding Convention

- 문서명: Coding Convention
- 목적: 코드 스타일과 구조적 일관성을 확보한다.
- 적용 범위: 모든 repo
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_convention.md`, `../../plan/core/structure.md`, `../../plan/core/data-integrity.md`

## 1. 기본 원칙

- 파일 하나는 책임 하나를 가진다
- 레이어 의존 방향은 단방향이다
- 경계 입력은 runtime validation을 거친다
- 타입, schema, domain model, DTO를 섞어 쓰지 않는다

## 2. 네이밍 규칙

- 파일: kebab-case
- 타입과 클래스: PascalCase
- 함수와 변수: camelCase
- 상수: SCREAMING_SNAKE_CASE
- React component 파일: PascalCase
- DB 컬럼: snake_case

추가 권장:

- boolean은 `is`, `has`, `can` 접두사
- 이름만 보고 책임을 유추할 수 있어야 한다

## 3. 구조 규칙

- feature 단위 응집을 우선한다
- `service`, `repo`, `schema`, `view`, `store` 경계를 섞지 않는다
- DB row → domain model → API response 변환은 경계에서 처리한다

## 4. 입력 검증 규칙

- IPC, HTTP, form, file parsing은 모두 runtime validation을 거친다
- schema에서 타입을 파생한다
- 내부 함수 인자까지 무조건 schema를 돌리는 것이 아니라 외부 경계에서 먼저 잡는다

## 5. 오류 처리 규칙

- 내부 도메인 로직은 typed error를 사용한다
- public boundary는 caller가 처리 가능한 결과 구조로 바꾼다
- silent catch와 floating promise는 금지한다

## 6. 로그와 디버깅 규칙

- `error`는 실제 대응이 필요한 실패에만 사용한다
- 로그에는 모듈과 관련 id를 붙인다
- source map, unhandled rejection, dev logging 도구를 준비한다

## 7. 테스트 규칙

- 새 서비스 로직에는 최소 단위 테스트를 붙인다
- API와 데이터 계약 변경은 통합 테스트를 우선 고려한다
- 고객 영향 bug는 회귀 테스트로 남긴다

## 8. 금지 사항

- god file
- 역방향 import
- schema 없이 raw input 사용
- secret hardcode
- 제품 workflow를 shared package에 밀어넣기

