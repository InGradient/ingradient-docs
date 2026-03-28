# CI CD

- 문서명: CI CD
- 목적: 빌드, 테스트, 배포 자동화 흐름을 정의한다.
- 적용 범위: web, backend, ai, edge, shared package
- 상태: Draft
- Owner: Infra / Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `release_strategy.md`, `../ops/test_strategy.md`

## 파이프라인 개요

```
코드 push / PR 생성
  → lint & static checks
  → unit tests
  → integration tests
  → build artifact
  → deploy or publish
```

## 파이프라인 단계

### 1. Lint & Static Checks

- 코드 스타일 (ESLint, Prettier 등)
- 타입 체크 (TypeScript)
- 가장 빠르게 실패할 수 있는 단계. 항상 첫 번째로 실행한다

### 2. Unit Tests

- 개별 모듈/함수 단위 테스트
- 외부 의존성 없이 빠르게 실행
- 커버리지 기준은 프로젝트별로 정의

### 3. Integration Tests

- DB, 외부 API 등 실제 의존성과 함께 실행
- 주요 API 엔드포인트, 데이터 흐름 검증
- unit test보다 느리므로 핵심 경로에만 배치

### 4. Build

- 배포 가능한 artifact 생성 (Docker image, bundle, package 등)
- 빌드 실패는 merge를 차단한다

### 5. Deploy / Publish

- 배포 대상은 브랜치/환경 연계 규칙에 따른다
- shared package는 npm publish
- edge installer는 별도 빌드 파이프라인

## 브랜치와 환경 연계

| 브랜치/이벤트 | 환경 | 설명 |
|--------------|------|------|
| PR 생성 | - | lint, test, build만 실행 (배포 안 함) |
| main merge | dev / staging | 기본 배포 대상 |
| release tag | production | 프로덕션 배포 |

## 배포 구분

### code-only deploy

- 코드 로직만 변경, DB/config 변경 없음
- 빠른 rollback 가능 (이전 버전 재배포)

### data-affecting deploy

- DB migration, 환경변수 변경, storage layout 변경 포함
- `migration_policy.md` 절차를 따른다
- rollback 시 migration 되돌리기가 필요할 수 있음

### edge installer build

- cloud deploy와 분리된 빌드 파이프라인
- installer version과 upgrade 경로를 별도로 관리한다

## 실패 시 처리

| 실패 단계 | 대응 |
|-----------|------|
| lint / test 실패 (PR) | PR merge 차단, 작성자가 수정 |
| build 실패 (PR) | PR merge 차단, 빌드 오류 수정 |
| deploy 실패 (main) | 즉시 알림, revert 또는 hotfix |
| production 배포 실패 | 즉시 알림, rollback 절차 실행 (`release_strategy.md` 7장 참조) |

## 알림 규칙

- CI 실패는 PR 작성자에게 즉시 알린다
- 배포 실패는 팀 전체에 알린다
- production 장애는 `../ops/incident_response.md` 절차를 따른다
