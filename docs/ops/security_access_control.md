# Security Access Control

- 문서명: Security Access Control
- 목적: 인증, 접근 통제, 데이터 격리 정책의 SSOT를 정의한다.
- 적용 범위: 전체 제품과 서비스
- 상태: Draft
- Owner: Security / Platform Architecture
- Reviewer: Auth / Product / Infra Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `../api/auth_api.md`, `../product/role_permission_flow.md`, `../../plan/operational/security.md`

## 1. 보안 목표

- 사용자와 서비스 identity를 신뢰 가능하게 검증한다
- organization / project 단위 데이터 격리를 유지한다
- 민감 데이터와 secret을 안전하게 관리한다
- 감사 가능한 access trail을 남긴다

## 2. 사용자 인증 구조

- auth-service가 login, token issuance, session lifecycle을 소유한다
- downstream 서비스는 JWT 검증 또는 verify endpoint를 통해 신뢰한다
- auth-service는 membership과 project access 기초 사실을 제공한다

## 3. authorization 구조

- baseline authorization facts는 auth-service가 제공한다
- 제품별 business authorization은 각 서비스가 수행한다
- frontend는 UX 보조 레이어일 뿐, 최종 판정은 backend에서 한다

## 4. 서비스 간 인증

- service account 또는 내부 credential 사용
- 다른 서비스 DB를 직접 읽어 권한을 우회하지 않는다
- internal API도 최소 권한 원칙을 따른다

## 5. 데이터 격리

- 조직 또는 고객 환경 단위 분리를 우선한다
- project scope resource는 project membership으로 보호한다
- medilabel은 민감 데이터 특성상 더 강한 isolation과 감사가 필요하다

## 6. 저장소 접근 통제

- object storage는 signed URL 또는 proxy 기반 노출을 우선한다
- bucket 또는 prefix 권한을 세분화한다
- edge local storage는 장치 분실과 재배포 상황을 고려한다

## 7. secret 관리

- 코드와 repo에 secret 저장 금지
- secret manager, env injection, OS keychain 등 적절한 저장소를 사용
- rotation과 access audit를 지원해야 한다

## 8. 감사 로그

반드시 추적해야 하는 이벤트:

- 로그인 / 로그아웃
- 권한 변경
- 민감 데이터 접근
- export / download
- model promotion / rollback
- destructive delete

## 9. 보안 코드 규칙과 연계

- 외부 입력은 schema validation
- SQL injection과 path traversal 방지
- Electron은 `contextIsolation: true`, `nodeIntegration: false`
- PII가 로그나 원격 오류 수집으로 유출되지 않게 한다

