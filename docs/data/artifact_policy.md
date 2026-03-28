# Artifact Policy

- 문서명: Artifact Policy
- 목적: AI, export, report 등 산출물의 구조와 관리 규칙을 정의한다.
- 적용 범위: model artifact, logs, reports, export package, debug bundles
- 상태: Draft
- Owner: Platform / AI / Edge
- Reviewer: Infra Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `storage_policy.md`, `retention_backup_policy.md`

## artifact 분류
- model checkpoint and bundle
- training logs and metrics
- evaluation results
- export packages
- PDF or business reports
- edge diagnostics bundles

## naming과 version 규칙
- artifact는 생성 주체, resource id, version 또는 timestamp를 포함한다
- snapshot 기반 산출물은 snapshot id를 연결한다

## 저장 위치
- 대용량 파일은 object storage
- 메타데이터와 index는 owner 서비스 DB

## 접근 권한
- project or organization scope를 따라 접근을 제한한다
- 민감 artifact는 signed URL 또는 proxy를 통해 전달한다

## retention 정책
- 운영 로그와 대용량 artifact는 서로 다른 보존 기간을 가질 수 있다
- 규정 또는 고객 계약이 있으면 그 기준을 우선한다

## 다운로드와 삭제 정책
- 다운로드는 audit 가능해야 한다
- 삭제는 soft delete 또는 보존 기간 만료 후 정리 원칙을 따른다

