# Migration Policy

- 문서명: Migration Policy
- 목적: DB, API, storage 구조 변경 시 마이그레이션 규칙을 정의한다.
- 적용 범위: schema, contract, storage layout changes
- 상태: Draft
- Owner: Backend / Infra Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `release_strategy.md`, `../data/storage_policy.md`

## 대상 변경 유형
- DB schema
- API contract
- artifact or storage layout
- auth claim or membership model

## migration 설계 원칙
- backward compatible migration 우선
- data loss 가능성이 있으면 별도 승인
- immutable snapshot과 artifact reference를 고려

## 배포 순서
- schema expand
- dual write or compatibility window
- consumer rollout
- old field cleanup

## rollback 전략
- rollback 가능한 단계와 불가능한 단계를 구분
- destructive migration은 별도 backup 확인 후 실행

## 검증 기준
- 데이터 일관성
- API consumer compatibility
- 운영 절차와 user guide 영향

