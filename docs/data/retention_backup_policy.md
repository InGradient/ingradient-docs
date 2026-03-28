# Retention Backup Policy

- 문서명: Retention Backup Policy
- 목적: 보존, 백업, 삭제 정책을 정의한다.
- 적용 범위: DB, object storage, logs, edge local data
- 상태: Draft
- Owner: Infra
- Reviewer: Platform / Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `storage_policy.md`, `artifact_policy.md`

## 보존 대상
- 서비스 DB 데이터
- 원본 데이터와 snapshot
- model artifact와 export package
- 운영 로그와 감사 로그

## 보존 기간 기준
- 운영상 필요한 최소 기간과 법적 요구를 함께 고려한다
- 민감 데이터와 의료 데이터는 별도 규정을 따른다

## 백업 정책
- 서비스별 DB는 정기 백업을 수행한다
- object storage는 버전 관리 또는 복제 정책을 둔다
- edge local data는 sync 전까지 장치 내 보호 정책을 가진다

## 복구 정책
- DB point-in-time recovery 가능 범위를 명시한다
- object storage 복원 가능 범위와 소요 시간을 문서화한다

## 삭제 정책
- soft delete와 hard delete 기준을 구분한다
- 고객 탈퇴, 계약 종료, 보존 기간 만료 절차를 별도 정의한다

## 감사 로그
- 누가 삭제를 승인했고 언제 실행했는지 남긴다

