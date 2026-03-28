# Code Review Guide

- 문서명: Code Review Guide
- 목적: 코드 리뷰 시 확인해야 할 핵심 기준을 정의한다.
- 적용 범위: 모든 repo
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `coding_convention.md`, `api_convention.md`

## 리뷰 기본 원칙

- 버그, 회귀, 운영 위험을 먼저 본다
- 문서와 구현이 어긋나는지 확인한다
- 테스트와 rollback 가능성을 함께 본다
- 단순 스타일 논쟁은 최소화한다. 컨벤션에 정의된 것만 지적한다

## 확인 항목

### 기능 및 정확성

- 기획 문서 (`features/{기능명}.md`)의 범위와 시나리오를 충족하는가
- 기본 흐름과 예외 흐름 모두 처리되었는가
- edge case가 누락되지 않았는가

### 구조와 컨벤션

- `coding_convention.md`의 네이밍, 레이어, 의존성 규칙을 따르는가
- API가 있으면 `api_convention.md`의 리소스 네이밍, 응답 구조를 따르는가
- 기존 코드 패턴과 일관되는가. 불필요한 새 패턴을 도입하지 않았는가

### API / 데이터 계약

- API 엔드포인트, 요청/응답 구조가 `api_contract.md`와 일치하는가
- DB 스키마 변경이 `data_model.md`에 반영되었는가
- backward compatibility가 유지되는가 (`migration_policy.md` 기준)

### 권한과 보안

- 인증/인가 검증이 빠지지 않았는가
- 민감 데이터 노출이 없는가
- 입력 검증이 시스템 경계에서 수행되는가

### 테스트

- 핵심 시나리오의 테스트가 있는가
- 기존 테스트가 깨지지 않는가
- 테스트가 구현에 과도하게 결합되지 않았는가

### 운영과 릴리즈

- migration이 필요하면 `migration_policy.md` 절차를 따르는가
- 환경변수/config 변경이 있으면 문서화되었는가
- 다른 서비스에 영향을 주면 해당 서비스 담당자에게 공유되었는가
- release notes 또는 user guide 업데이트가 필요한가

### 문서

- 기획 문서에서 변경된 사항이 반영되었는가
- `features/README.md`에 새 기능이 등록되었는가
- `releases/v{버전}.md` 체크리스트가 업데이트되었는가

## 변경 요청 기준

| 수준 | 기준 | 예시 |
|------|------|------|
| Block | 구조적 위험, 보안 문제, 데이터 손실 가능성 | 인증 검증 누락, migration 없는 스키마 변경 |
| Request Changes | 기능 누락, 컨벤션 위반, 테스트 부족 | 예외 흐름 미처리, 네이밍 규칙 위반 |
| Comment | 개선 제안, 질문 | 더 나은 패턴 제안, 의도 확인 질문 |

## 리뷰어 태도

- "왜 이렇게 했는지" 먼저 이해한 뒤 피드백한다
- 코드가 아닌 사람을 비판하지 않는다
- open question은 명확히 남기고, 응답이 필요한지 표시한다
