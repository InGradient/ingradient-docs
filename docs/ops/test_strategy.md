# Test Strategy

- 문서명: Test Strategy
- 목적: 공통 테스트 전략과 레벨별 기준을 정의한다.
- 적용 범위: web, backend, ai, edge, shared package
- 상태: Draft
- Owner: QA / Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `../dev/ci_cd.md`, `../../plan/operational/testing.md`

## 1. 테스트 원칙

- 구현 시 작성 가능한 모든 테스트를 반드시 작성한다. 백엔드, 프론트엔드, UI 구분 없이 다 한다
- 테스트 생략은 허용하지 않는다. 별도 요청이 없어도 항상 작성한다
- bug fix에는 회귀 테스트를 반드시 남긴다
- 아래 Level 구분은 프로젝트 성숙도에 따른 추가 도구/범위 기준이며, 테스트 작성 자체를 생략하는 기준이 아니다

## 2. Level 1: 모든 프로젝트의 최소 기준

필수 항목:

- lint
- typecheck
- 새 서비스 로직 단위 테스트

권장 기준:

- `lint`, `typecheck`, `test`가 CI에서 통과해야 한다
- 테스트는 독립적으로 실행 가능해야 한다

## 3. Level 2: 배포하는 앱의 기준

추가 항목:

- API 통합 테스트
- CI 자동 실행
- coverage 추적

대상:

- platform
- medilabel
- auth-service
- ai control plane

## 4. Level 3: 중요한 제품의 기준

추가 항목:

- E2E
- accessibility
- visual regression

대상:

- user-facing web apps
- 중요한 운영 콘솔

## 5. 도메인별 강조점

### auth-service

- login, verify, membership, token lifecycle

### platform and medilabel

- upload, ingest, labeling, export, AI request

### ai

- job lifecycle, routing, artifact generation, model lifecycle

### edge

- offline sync, reconnect, retry, device diagnostics, installer migration

### ui package

- doc coverage
- public export integrity
- visual and accessibility checks

## 6. 운영과의 연결

- incident 또는 큰 bug 이후에는 regression test를 추가한다
- troubleshooting 문서와 연관된 흐름은 시나리오 테스트로 보호한다
- release 전에는 user-facing 핵심 흐름을 다시 확인한다

## 7. 실무 체크리스트

- 새 서비스 로직에 테스트가 있는가
- API나 data contract 변경에 통합 테스트가 있는가
- edge offline / online 복귀 같은 어려운 흐름이 시나리오로 검증되는가
- 운영 사고를 재현 가능한 테스트로 남겼는가

