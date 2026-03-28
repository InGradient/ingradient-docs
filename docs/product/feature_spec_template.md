# Feature Spec Template

## 목적
기능 기획 문서를 작성할 때 사용하는 단일 양식이다. 기능 명세, 사용자 시나리오, UI/UX 방향, 테스트 계획을 한 파일에 담는다. 별도 문서로 분리하지 않는다.

## 작성 위치
`projects/{프로젝트}/features/{기능명}.md`

## 참고 문서
각 섹션을 작성할 때 아래 문서를 참고한다.
- 5장 사용자 시나리오: `scenario_template.md`
- 6장 UI / UX 방향: `uiux_planning_template.md`
- 8장 테스트 계획: `test_plan_template.md`

## 상단 메타데이터
- 문서명
- 목적
- 적용 범위
- 상태
- Owner
- Reviewer
- 마지막 수정일
- 관련 SSOT 문서

## 본문 템플릿

### 1. 기능 개요
- 기능 이름
- 한 줄 정의

### 2. 문제 정의
- 현재 어떤 문제가 있는가
- 왜 지금 이 기능이 필요한가

### 3. 목표
- 사용자 목표
- 운영 또는 비즈니스 목표

### 4. 범위 / 비범위
- 포함하는 것
- 이번 단계에서 하지 않는 것

### 5. 사용자 시나리오
- 기본 흐름
- 예외 흐름

### 6. UI / UX 방향
- 주요 화면
- 핵심 상태
- 실패 / 빈 상태

### 7. 데이터 / API / 권한 영향
- 새 resource 또는 contract
- 권한 변경 여부
- migration 필요 여부

### 8. 테스트 계획
- unit
- integration
- e2e or scenario

### 9. 릴리즈 고려사항
- release note
- user guide
- ops 영향

### 10. 오픈 이슈
- 미결정 사항
- 추후 phase로 넘길 항목

