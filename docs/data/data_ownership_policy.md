# Data Ownership Policy

- 문서명: Data Ownership Policy
- 목적: 데이터 owner와 Source of Truth를 정의한다.
- 적용 범위: 전체 서비스와 산출물
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `storage_policy.md`

## 소유권 범위
- 조직과 멤버십 데이터
- 프로젝트와 데이터셋 메타데이터
- 모델과 job 상태
- edge local state
- medical domain data

## 데이터별 Owner와 SoT
- identity, membership: auth-service
- dataset and labeling workflow: ingradient-platform
- medical project workflow: medilabel
- model registry and execution status: ingradient-ai
- local capture queue and device diagnostics: ingradient-edge

## 수정 권한
- owner 서비스만 write를 가진다
- 다른 서비스는 API 또는 event를 통해 요청한다
- consumer 앱은 cache를 가질 수 있지만 owner 역할을 대체하지 않는다

## 파생 데이터 책임
- snapshot은 생성 서비스가 관리하지만 원본 SoT를 대체하지 않는다
- evaluation, report, export package는 artifact owner가 책임진다

## 삭제 권한
- hard delete는 owner 서비스 정책에 따라 제한한다
- cross-service reference가 있을 때는 soft delete 또는 tombstone을 우선한다

