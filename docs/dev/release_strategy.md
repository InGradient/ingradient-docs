# Release Strategy

- 문서명: Release Strategy
- 목적: 버전, 호환성, 릴리스 기준을 정의한다.
- 적용 범위: 서비스, web app, edge installer, shared package
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `ci_cd.md`, `migration_policy.md`

## 1. 릴리즈 목표

- 변경을 예측 가능하게 배포한다
- breaking change와 운영 영향이 문서에 남게 한다
- rollback 가능한 릴리즈를 우선한다

## 2. 버전 정책

- shared package는 semantic versioning 우선
- 서비스와 제품은 version tag + release note 중심 관리 가능
- edge installer는 installer version과 upgrade 경로를 별도로 본다

## 3. 호환성 정책

- backward compatible rollout을 우선한다
- DB, API, storage layout 변경은 compatibility window를 고려한다
- UI 변경이라도 사용자 행동이 바뀌면 release note 대상이다

## 4. breaking change 기준

- API contract 변경
- auth claim or permission 의미 변경
- data migration 필요
- config 또는 secret 변경 필요
- user guide 수정 필요

## 5. release note 규칙

반드시 포함할 것:

- 주요 변경사항
- 버그 수정
- 운영 영향
- migration 필요 여부
- known issues

## 6. 릴리즈 계획 문서

### 폴더 구조

각 프로젝트에 `releases/` 폴더를 두고 버전별 릴리즈 계획을 관리한다.

```
projects/{프로젝트}/releases/
├── README.md          ← 버전별 간략 요약 인덱스
├── v0.0.2.md          ← 이번 버전에 뭘 넣을 건지 (기획/개발 중)
└── v0.0.3.md
```

### 역할 구분

| 문서 | 시점 | 내용 |
|------|------|------|
| `releases/v{버전}.md` | 배포 전 | 버전 목표, 포함 기능/개선/버그 수정, 진행 체크리스트 |
| `release_notes.md` | 배포 후 | 실제 변경사항, 운영 영향, migration, known issues |
| `roadmap.md` | 상시 | 전체 방향과 우선순위 |

### 작성 규칙

- 릴리즈 계획 문서는 `version_template.md` 양식을 따른다
- 기능의 상세 내용은 `features/` 폴더 안에 자세히 작성되어 있으므로, 릴리즈 문서에서는 해당 문서를 참조 링크로 연결한다
- 릴리즈 문서에는 한 줄 설명과 체크리스트만 두고, 상세 내용은 `features/` 문서에서 확인한다
- 기획 문서가 아직 없는 항목은 먼저 `features/{기능명}.md`를 작성한 뒤 링크한다
- 배포 완료 후 상태를 Released로 변경하고 `release_notes.md`에 배포 기록을 남긴다

## 7. rollback 기준

- SLO 위반
- 데이터 무결성 위험
- auth / permission 회귀
- customer-facing 핵심 흐름 실패

