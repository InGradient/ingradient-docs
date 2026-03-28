# Feature Template

이 템플릿은 `../../product/feature_spec_template.md`의 간결한 버전이다. 기능 하나 = 파일 하나 원칙에 따라 모든 내용을 한 파일에 담는다.

## 기능 개요
- 기능 이름
- 목적

## 문제 정의
- 왜 필요한가

## 목표
- 사용자 또는 운영 목표

## 범위 / 비범위
- 포함
- 제외

## 사용자 시나리오
- 참여자
- 선행 조건
- 기본 흐름
- 예외 흐름
- 시스템 반응

> 상세 작성 시 `../../product/scenario_template.md` 참고.

## UI / UX 방향
- 화면 목적과 핵심 행동
- 정보 구조
- 상태 설계 (empty, loading, success, error, permission denied)
- 반응형과 환경 차이

> 상세 작성 시 `../../product/uiux_planning_template.md` 참고.

## 데이터 / API / 권한 영향
- 바뀌는 계약
- 새 resource 또는 migration
- 권한 변경 여부

## 테스트 계획
- 핵심 시나리오 (happy path, failure path, permission path)
- 계약 영향 확인 (API, data, auth)
- 회귀 테스트 항목
- 완료 기준

> 상세 작성 시 `../../product/test_plan_template.md` 참고.

## 릴리즈 고려사항
- migration, guide, release note 여부

## 오픈 이슈
- 미결정 사항
