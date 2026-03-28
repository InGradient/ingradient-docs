# auth-service Deployment

## 실행 형태

auth-service는 항상 online인 공통 backend service로 운영하는 것이 기본이다.

주요 특징:

- 여러 제품이 공통으로 사용
- domain-separated deployment 가능
- token issuer / audience, DB, secrets를 domain별로 분리 가능

## 인프라 요구사항

- auth DB
- signing keys
- bootstrap secret
- HTTPS endpoint
- audit log 저장소

## 배포 시 중요한 설정

- `ACCESS_TOKEN_SECRET`
- entitlement signing key
- bootstrap admin secret
- issuer / audience
- downstream service base configuration

## domain separation

동일 코드베이스라도 아래 단위를 분리할 수 있다.

- deployment boundary
- DB boundary
- secret boundary
- issuer / audience boundary

## 배포 후 검증

- login
- token verify
- refresh rotation
- membership lookup
- organization and license flow
- audit log 생성

## 관련 근거 문서

- `/home/june/workspace/projects/auth-service/docs/concepts/architecture.md`
- `/home/june/workspace/projects/auth-service/docs/reference/test-scenarios.md`

