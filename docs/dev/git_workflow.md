# Git Workflow

- 문서명: Git Workflow
- 목적: 브랜치, 커밋, 머지 흐름의 공통 기준을 정의한다.
- 적용 범위: 모든 repo
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `release_strategy.md`, `code_review_guide.md`

## 기본 흐름
- 작업 브랜치 생성
- 구현과 문서 갱신
- 로컬 검증
- PR 생성과 리뷰
- merge 후 배포 또는 publish

## 브랜치 규칙
- main은 배포 기준 브랜치
- 장기 브랜치는 필요한 경우만 사용

## 커밋 규칙
- 의미 단위로 커밋
- refactor, fix, docs, release 등 목적이 드러나게 작성

## 머지 규칙
- 리뷰와 필수 체크 완료 후 merge
- breaking change는 release notes와 migration note를 동반한다

