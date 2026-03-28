# Configuration Management

- 문서명: Configuration Management
- 목적: 환경 변수, secret, runtime config, customer override 관리 원칙을 정의한다.
- 적용 범위: 모든 서비스와 앱
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Infra Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `environment_strategy.md`, `../ops/security_access_control.md`, `../../plan/core/env-and-config.md`

## 1. 설정 관리 목표

- 잘못된 환경에서 서비스가 시작되는 것을 방지한다.
- secret, runtime config, customer override를 혼동하지 않는다.
- 누가 무엇을 바꿨는지 추적 가능하게 한다.
- cloud, on-prem, edge에서 같은 개념 모델을 유지한다.

## 2. 설정 유형 분류

### 2.1 Environment Variable

용도:

- 배포 환경마다 바뀌는 값
- 앱 시작 시 반드시 필요한 값

예:

- DB URL
- service endpoint
- issuer / audience
- bucket name

규칙:

- schema로 시작 시 검증한다
- 코드에서 `process.env`를 흩어 쓰지 않는다

### 2.2 Secret

용도:

- 토큰 서명 키
- API key
- DB 자격 증명
- provider credential

규칙:

- repo에 넣지 않는다
- secret manager나 환경 주입으로 관리한다
- rotation과 access audit가 가능해야 한다

### 2.3 Runtime Config

용도:

- 운영 중 바뀔 수 있는 정책값
- customer 또는 tenant별 설정

예:

- quota
- feature enablement
- retry limit
- upload / anonymization policy

규칙:

- DB 또는 명시적 config file에 저장한다
- 변경 이력을 남긴다

### 2.4 Code Constant

용도:

- 거의 바뀌지 않는 기본 상수

예:

- enum
- default timeout baseline
- non-sensitive fallback value

규칙:

- runtime 설정과 섞지 않는다

## 3. 저장 위치 기준

| 유형 | 권장 위치 | 예시 |
|---|---|---|
| env | `.env` + deployment env | DB URL, API base URL |
| secret | secret manager / env injection | JWT secret, provider key |
| runtime config | DB or config store | quota, feature flags |
| local app config | local file or embedded DB | edge server URL, local mode setting |

## 4. 우선순위 규칙

기본 우선순위는 아래를 따른다.

1. built-in safe defaults
2. environment defaults
3. deployment-specific override
4. customer or tenant runtime override
5. explicit operator emergency override

단, emergency override는 반드시 audit 가능해야 한다.

## 5. 환경 변수 관리 규칙

- `.env.example`은 필수다
- 시작 시 schema validation을 통과하지 못하면 앱은 시작하지 않는다
- boolean, number, enum 값은 문자열 그대로 쓰지 않고 파싱된 typed config로 노출한다
- prod에서 필요한 필드는 default 없이 required로 둔다

## 6. secret 관리 규칙

- codebase, docs 예시, sample config에 실제 secret을 넣지 않는다
- local 개발은 `.env.local` 등 git-ignored 경로만 사용한다
- on-prem 설치형은 OS keychain, encrypted store, 별도 secret file 정책을 둔다
- edge local credential은 장치 이전과 폐기 절차를 고려해야 한다

## 7. customer별 설정 정책

- customer별 차이는 가능하면 설치 profile과 runtime config로 표현한다
- 코드 fork로 customer 설정을 분기하지 않는다
- tenant별 quota, storage path, allowed provider, upload policy는 runtime config로 다룬다

## 8. 변경과 배포 방식

### restart required

- DB URL
- service endpoint
- issuer / audience
- signing key

### hot reload or runtime update 가능

- feature flag
- quota
- retry limit
- 일부 UI / ops console read-only policy

변경 규칙:

- restart required인지 여부를 문서화한다
- 운영자가 영향 범위를 알 수 있어야 한다

## 9. 감사와 추적

- config 변경 이력을 남긴다
- 변경한 사람, 변경 시점, 이전 값과 새 값을 추적할 수 있어야 한다
- incident 분석 시 config diff를 확인할 수 있어야 한다

## 10. 금지 사항

- secret hardcode
- 서비스별 config 개념 불일치
- customer별 코드를 직접 fork해서 설정을 분기하는 방식
- typed validation 없이 문자열 env를 곳곳에서 읽는 방식

