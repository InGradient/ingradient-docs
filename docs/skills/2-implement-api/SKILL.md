---
name: 2-implement-api
description: 기능에 필요한 API를 설계한다. Phase 1의 TODO 주석을 기반으로 endpoint를 정의하고 api_contract.md를 업데이트한다.
argument-hint: [feature명]
disable-model-invocation: true
---

# Phase 2: API 설계

$ARGUMENTS 기능에 필요한 API를 설계한다. Phase 1에서 남긴 TODO 주석을 기반으로 필요한 endpoint를 정의하고 api_contract.md를 업데이트한다.

## 0단계: 사전 확인

Phase 1 (UI Prototype)이 완료되었는지 확인한다. 완료되지 않았으면 먼저 /1-implement-ui를 실행하라고 안내한다.

## 1단계: 문서 읽기

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

## 2단계: TODO 수집

Phase 1 코드에서 `// TODO: API 연동` 주석을 모두 수집한다. 이것이 API 설계의 입력이다.

수집 형식:

    1. // TODO: API 연동 - GET /api/members (사용자 목록 조회) — 파일: members-table.tsx:42
    2. // TODO: API 연동 - POST /api/invitations (사용자 초대) — 파일: invite-modal.tsx:28
    3. // TODO: API 연동 - PUT /api/members/:id/role (역할 변경) — 파일: members-table.tsx:67

TODO에 없지만 기획 문서에서 필요한 API가 있으면 추가하고, TODO에 있지만 기획과 맞지 않는 것이 있으면 질문한다.

## 3단계: Plan 작성

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

Plan 예시는 [plan-example.md](references/plan-example.md)를 참고한다.

## 4단계: api_contract.md 업데이트

Plan이 확정되면 api_contract.md에 새 endpoint를 추가한다.

- 기존 endpoint가 변경되면 변경 이력도 함께 기록한다
- 기존 형식과 일관되게 작성한다
- 다른 서비스의 api_contract.md에 영향이 있으면 해당 문서도 업데이트한다

## 규칙

- **구현하지 않는다.** API를 설계하고 문서화만 한다. 실제 route/service 코드는 Phase 3에서 작성한다
- **api_convention.md를 따른다.** 리소스 중심 URI, 복수형 collection, 성공 응답은 data/meta 구조, 에러는 error.code/message/details/correlation_id 구조
- **pagination은 기존 패턴을 따른다.** 프로젝트에서 사용하는 방식(cursor/page) 확인
- **날짜는 ISO 8601을 사용한다**
- **기존 API와 충돌하면** 알리고 확인한다. 마음대로 변경하지 않는다
- **Phase 1 TODO에 없는 API가 필요하면** 추가하되 이유를 명시한다
- **비동기 작업이 필요하면** job resource 패턴을 사용한다 (api_principles.md 참고)

## 완료 기준

- [ ] Phase 1의 모든 TODO 주석에 대응하는 API가 설계되었다
- [ ] 각 endpoint의 요청/응답/에러가 구체적으로 정의되었다
- [ ] 역할별 접근 권한이 명시되었다
- [ ] api_contract.md가 업데이트되었다
- [ ] 기존 API와 충돌하는 부분이 없거나, 확인을 받았다
- [ ] api_convention.md, api_principles.md 규칙을 따르고 있다

## 다음 단계 안내

    Phase 2 (API 설계)가 완료되었습니다.
    다음 단계는 Phase 3 (Backend)입니다.
    Backend Plan을 작성할까요? (/3-implement-backend)
