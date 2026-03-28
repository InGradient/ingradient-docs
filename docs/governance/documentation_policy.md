# Documentation Policy

- 문서명: Documentation Policy
- 목적: 전체 문서 운영 원칙과 SSOT 규칙을 정의한다.
- 적용 범위: INGRADIENT 공통 문서와 각 repo의 `docs/`
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `project_documentation_requirements.md`, `document_change_policy.md`

## 문서 운영 목적
- 설계, 구현, 운영 판단의 기준점을 문서로 남긴다.
- 같은 주제의 중복 문서를 줄이고 링크 구조를 명확히 한다.
- 프로젝트 간 공통 개념과 repo별 상세 설계를 분리한다.

## 문서 분류 체계
- Overview: 큰 그림과 범위 설명
- Policy: 반드시 지켜야 하는 규칙
- Spec: 인터페이스와 구조 정의
- Template: 반복 작성되는 문서의 표준 양식 (예: `feature_spec_template.md`, `scenario_template.md`)
- Guide: 특정 작업을 수행할 때 읽어야 할 문서와 절차 안내 (예: `feature_planning_reading_guide.md`)
- Runbook: 운영 절차
- Plan (기획 문서): 기능 기획 문서. `projects/{프로젝트}/features/{기능명}.md`에 작성한다. `feature_spec_template.md` 양식을 사용하며 기능 명세, 시나리오, UI/UX, 테스트 계획을 한 파일에 담는다

## SSOT 규칙
- 같은 주제는 가능하면 한 문서만 SSOT로 둔다.
- 다른 문서는 복사하지 않고 링크 또는 요약만 남긴다.
- 서비스별 상세는 각 repo의 `docs/`에 두고, 공통 정책은 `ingradient-docs/docs`에 둔다.

## 명명 규칙
- 폴더명과 파일명은 소문자 snake_case 또는 명시된 기존 규칙을 따른다.
- 문서 제목과 파일명은 가능한 한 1:1로 대응시킨다.
- `plan`, `policy`, `guide`, `template`, `notes` 같은 역할이 파일명에서 드러나야 한다.

## 문서 작성, 수정, 폐기 규칙
- 핵심 문서는 목적, 범위, 상태, owner, reviewer, 마지막 수정일을 상단에 둔다.
- 한 문서가 500줄을 넘기기 시작하면 하위 문서로 분리한다.
- Deprecated 문서는 삭제하지 않고 대체 문서 링크와 폐기 이유를 남긴다.

## 책임자와 승인 절차
- 공통 정책 문서는 해당 도메인 owner와 최소 1명의 관련 repo owner가 검토한다.
- 프로젝트 상세 문서는 해당 repo owner가 최종 승인한다.
- README와 인덱스 링크는 문서 추가나 폐기 시 같은 변경에서 갱신한다.

