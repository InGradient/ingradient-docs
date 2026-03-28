# Storage Policy

- 문서명: Storage Policy
- 목적: 어떤 데이터가 어디에 저장되는지 정의한다.
- 적용 범위: platform, ai, edge, medilabel, auth-service
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Infra / Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `data_ownership_policy.md`, `artifact_policy.md`

## 데이터 유형 정의
- 원본 데이터
- 가공 데이터
- 메타데이터
- 로그
- artifact
- export package

## 저장소 종류
- 서비스별 relational DB
- shared object storage
- edge local storage
- observability stack

## 데이터별 저장 위치
- auth identity and membership: auth-service DB
- platform dataset metadata: platform DB
- medilabel medical metadata: medilabel DB
- ai job, model metadata: ai DB
- 원본 파일, snapshot, model artifact, export package: object storage
- edge 임시 큐와 캐시: local storage

## 접근 경로
- 서비스는 자기 DB만 직접 쓴다
- 대용량 파일은 signed URL 또는 service proxy로 접근한다
- AI worker는 storage reference 기반으로 읽는다

## 비용과 성능 고려
- 원본과 대용량 artifact는 object storage 우선
- GPU worker에는 필요한 경우 local cache를 둔다
- 중복 저장은 명확한 이유가 있을 때만 허용한다

## quota 정책
- organization, project, plan 단위의 저장 용량 제한을 둘 수 있다
- raw data, artifact, export package 용량을 별도 집계할 수 있다

## 금지 사항
- 서비스 간 DB 직접 조인
- live runtime data의 무분별한 복사
- 소비 앱이 임의로 SoT를 바꾸는 저장 방식

