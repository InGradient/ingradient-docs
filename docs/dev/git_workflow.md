# Git Workflow

- 문서명: Git Workflow
- 목적: 브랜치, 커밋, 머지 흐름의 공통 기준을 정의한다.
- 적용 범위: 모든 repo
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `release_strategy.md`, `code_review_guide.md`

## 기본 흐름

1. main에서 작업 브랜치를 생성한다
2. 구현과 문서를 갱신한다
3. 로컬에서 lint, 테스트를 검증한다
4. PR을 생성하고 리뷰를 요청한다
5. 리뷰 승인 + CI 통과 후 main에 merge한다
6. 배포 또는 publish를 진행한다

## 브랜치 규칙

### 브랜치 네이밍

| 접두사 | 용도 | 예시 |
|--------|------|------|
| feat/ | 새 기능 | feat/invitation-flow |
| fix/ | 버그 수정 | fix/token-refresh-race |
| refactor/ | 리팩토링 | refactor/membership-service |
| docs/ | 문서 변경 | docs/api-contract-update |
| chore/ | 설정, 의존성, CI 등 | chore/upgrade-prisma |

### 브랜치 정책

- main은 배포 기준 브랜치. 항상 배포 가능한 상태를 유지한다
- 장기 브랜치는 필요한 경우만 사용하고, 가능하면 feature flag로 대체한다
- 작업 브랜치는 merge 후 삭제한다

## 커밋 규칙

### 커밋 메시지 형식

```
{type}: {한 줄 설명}

{본문 (선택)}
```

### type 목록

| type | 용도 |
|------|------|
| feat | 새 기능 추가 |
| fix | 버그 수정 |
| refactor | 동작 변경 없는 코드 개선 |
| docs | 문서 변경 |
| test | 테스트 추가/수정 |
| chore | 설정, 의존성, CI 등 |
| release | 릴리즈 관련 |

### 커밋 원칙

- 의미 단위로 커밋한다. 한 커밋에 여러 목적을 섞지 않는다
- 커밋 메시지는 "무엇을 했는가"보다 "왜 했는가"를 우선한다
- breaking change는 커밋 본문에 `BREAKING CHANGE:` 접두사로 명시한다

## PR 규칙

### PR 작성

- 제목은 커밋 메시지 형식과 동일하게 작성한다
- 본문에 변경 이유, 주요 변경사항, 테스트 방법을 포함한다
- 관련 기획 문서 (`features/{기능명}.md`)가 있으면 링크한다
- breaking change가 있으면 영향 범위를 명시한다

### PR 리뷰

- 최소 1명의 리뷰어 승인 필수
- CI 체크 통과 필수
- 리뷰 기준은 `code_review_guide.md` 참조

## 머지 규칙

- 리뷰 승인과 CI 통과 후 merge한다
- squash merge를 기본으로 한다 (커밋 히스토리 정리)
- breaking change는 release notes와 migration note를 동반한다
- merge 후 배포 실패 시 즉시 revert 또는 hotfix를 진행한다
