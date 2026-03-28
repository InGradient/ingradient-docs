# Project Role Matrix

## 목적

프로젝트 권한을 사용자별 예외 규칙이 아니라 role 단위 matrix로 관리해, 운영자가 한 화면에서 역할 차이를 비교하고 수정할 수 있게 한다.

## 기본 구조

- 세로축: role
- 가로축: permission
- 상단 1행: permission group
- 상단 2행: detail permission
- 본문 셀: checkbox

## 기본 role

- owner
- manager
- labeler
- reviewer
- client
- viewer
- custom

## permission group

- 프로젝트
- 데이터
- 라벨링
- 공유 / 분석

## UI 요구사항

- role 검색
- preset을 custom으로 복사
- 전체 펼치기
- 변경 diff 확인
- stale update 충돌 안내
- 좌측 role 컬럼 고정
- 가로 스크롤 가능한 matrix

## 동작 규칙

- `owner`는 full access로 고정하고 수정 불가로 둔다.
- `custom`은 프로젝트당 1개 슬롯으로 관리한다.
- custom role이 실제 사용 중이면 임의 숨김을 막는다.
- 프로젝트 멤버 role dropdown도 같은 role set을 사용한다.

## 운영상 의미

- auth-service의 organization role과 Platform의 project role은 같은 것이 아니다.
- org role은 접근 자격의 상위 경계이고, project role은 제품 기능 권한의 세부 경계다.
- 권한 변경 이력과 audit 연결이 중요하다.

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-platform/docs/plan/role-permission-ui.md`
- `/home/june/workspace/projects/ingradient-platform/docs/releases/0.0.2-ui-changes.md`
