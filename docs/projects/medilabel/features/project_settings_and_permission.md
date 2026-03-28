# Project Settings And Permission

## 목적

`Medilabel`은 의료 데이터 협업 도구이므로 프로젝트 설정과 권한 경계를 초기에 단순하고 명확하게 가져가는 것이 중요하다. 이 문서는 settings와 role 정책을 정리한다.

## 기본 role

- Owner
- Manager
- Viewer
- Labeler

## settings 구조

- General
- Project
- Model

초기 우선 개발 탭은 `Project`다.

## Project 탭에서 관리할 것

- 프로젝트 기본 정보
- 사용자 초대
- 멤버 role
- PHI 정책
- 다운로드 정책
- segmentation/class 관련 기본 정책

## 권한 원칙

- role은 제품 의미를 직접 드러내는 최소 집합으로 유지한다.
- auth-service project 개념과 Medilabel workspace project 개념을 혼동하지 않는다.
- catalog, class, settings, viewer 액션은 role에 따라 숨김 또는 read-only 처리돼야 한다.

## test scenario 기준 체크포인트

- 프로젝트 생성 모달은 overflow가 나도 action bar가 가려지면 안 된다.
- account 전환과 logout은 workspace shell 하단 메뉴에서 동작해야 한다.
- role enforcement는 mock 표시가 아니라 실제 UI 동작까지 잠가야 한다.

## 관련 문서

- `../user_guide.md`
- `/home/june/workspace/projects/medilabel/docs/plan.md`
- `/home/june/workspace/projects/medilabel/docs/test-scenarios.md`
