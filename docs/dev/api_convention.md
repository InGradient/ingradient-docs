# API Convention

- 문서명: API Convention
- 목적: API 구현 세부 규칙을 통일한다.
- 적용 범위: 모든 backend API
- 상태: Draft
- Owner: Platform Backend
- Reviewer: Repo API Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `../api/api_principles.md`, `../api/error_response_policy.md`

## 1. 명명 규칙

- resource 중심 URI
- collection은 복수형, item은 단수형 resource path
- field naming은 서비스 내에서 일관되게 유지
- id, timestamp, status 같은 공통 필드는 의미를 통일

## 2. request / response 규칙

- 성공 응답은 `data`, 필요 시 `meta`
- pagination은 cursor 또는 명시적 paging schema를 사용
- filtering / sorting field는 문서화한다

## 3. schema와 version 규칙

- 경계 입력은 schema validation
- schema에서 타입을 파생
- breaking change는 명시적 version 또는 compatibility window로 처리

## 4. 날짜 / 시간 / 숫자 형식

- 시간은 ISO 8601
- ID는 scope와 type을 문서화
- quota, usage, cost 값은 단위를 명시

## 5. 비동기 작업 규칙

- training, export, ingest 같은 장시간 작업은 job resource 사용
- 상태 조회, logs, artifacts를 별도 resource로 연결
- idempotency key가 필요한 생성 작업은 명시한다

## 6. 에러 처리 규칙

- HTTP status와 domain error code를 함께 사용
- validation, auth, permission, business, infra 에러를 구분
- correlation id를 포함한다

