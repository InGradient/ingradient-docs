# Environment Strategy

- 문서명: Environment Strategy
- 목적: dev, staging, prod 환경 분리 전략을 정의한다.
- 적용 범위: cloud services, ai execution, edge test environments
- 상태: Draft
- Owner: Infra / Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `deployment_architecture.md`, `configuration_management.md`

## 환경 정의
- dev: 로컬 개발과 빠른 검증
- staging: 통합 검증과 릴리즈 후보 점검
- prod: 실제 사용자 운영

## 환경별 목적
- dev는 속도와 재현성 우선
- staging은 prod 유사 구조와 회귀 확인 우선
- prod는 안정성과 감사 추적 우선

## 데이터 분리 정책
- prod 데이터는 staging이나 dev로 복사하지 않는다.
- 테스트 데이터와 민감 데이터는 분리한다.
- medilabel 같은 민감 데이터 제품은 별도 anonymized test data를 사용한다.

## 인프라 분리 정책
- secret, DB, storage bucket, external endpoint는 환경별로 분리한다.
- AI worker pool도 가능하면 환경별 분리 또는 강한 logical isolation을 둔다.
- edge 테스트 환경은 실제 장비와 시뮬레이터를 구분한다.

## 릴리스 승격 기준
- dev에서 기본 기능 확인
- staging에서 통합 API, 권한, 운영 체크
- prod 승격 전 migration / rollback / user guide 영향 확인

