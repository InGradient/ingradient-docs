# Document Change Policy

- 문서명: Document Change Policy
- 목적: 문서 추가, 수정, 폐기 시 확인해야 할 절차를 정의한다.
- 적용 범위: 모든 공통 문서와 프로젝트 문서
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `documentation_policy.md`, `document_lifecycle_policy.md`

## 문서 추가 전 확인사항
- 같은 주제의 SSOT 문서가 이미 있는가
- 이 문서가 공통 문서여야 하는가, repo 문서여야 하는가
- 새 파일이 아니라 기존 문서 확장으로 해결 가능한가

## 기획 문서 추가 시 확인사항
- 기획 문서는 `projects/{프로젝트}/features/{기능명}.md`에 작성했는가
- `feature_spec_template.md` 양식을 따르고 있는가 (시나리오, UI/UX, 테스트 계획 포함)
- `features/README.md`에 새 기능이 등록되었는가
- `roadmap.md`에 일정이 반영되었는가

## 문서 수정 전 확인사항
- 관련 API, 데이터, 권한, 운영 문서도 함께 수정해야 하는가
- 용어가 다른 문서와 충돌하지 않는가
- README, index, feature 목록 업데이트가 필요한가

## 영향도 체크리스트
- 시스템 구조 영향
- 서비스 책임 영향
- API 계약 영향
- 릴리즈 계획 문서 반영 필요 여부 (`releases/v{버전}.md`)
- 데이터 ownership 영향
- 사용자 가이드 영향
- release notes 반영 필요 여부

## 연관 문서 업데이트 규칙
- SSOT가 바뀌면 요약 문서와 링크 문서도 같은 변경에서 갱신한다.
- 프로젝트 기능 문서가 바뀌면 필요한 경우 `release_notes.md`와 `user_guide.md`도 함께 본다.

## README와 링크 갱신 규칙
- 폴더에 핵심 문서를 추가하거나 폐기하면 해당 폴더 `README.md`를 업데이트한다.
- 새 프로젝트를 추가하면 `projects/README.md`와 프로젝트 README를 함께 갱신한다.

## 승인 및 공지 기준
- 공통 정책 변경은 관련 팀에게 공지한다.
- breaking change에 가까운 문서 변경은 PR 설명에 영향 범위를 명시한다.

