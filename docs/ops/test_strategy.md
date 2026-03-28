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

- 프로젝트 단계에 맞는 테스트 레벨을 선택한다
- 모든 것을 처음부터 다 도입하기보다 Level별로 확장한다
- bug fix에는 회귀 테스트를 우선 고려한다

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

