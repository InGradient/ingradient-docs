# /0-plan-feature 출력 형식 예시

아래 형식으로 Phase 개요를 작성한다.

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
