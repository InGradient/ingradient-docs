# Dataset Snapshot Policy

- 문서명: Dataset Snapshot Policy
- 목적: dataset snapshot의 의미와 생성 규칙을 정의한다.
- 적용 범위: platform, medilabel, ai training inputs
- 상태: Draft
- Owner: Platform / AI
- Reviewer: Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `storage_policy.md`, `artifact_policy.md`

## snapshot의 목적
- 학습과 export의 재현성을 보장한다
- 특정 시점의 데이터 상태를 immutable input으로 고정한다

## 생성 트리거
- training request 생성 시
- export job 생성 시
- 명시적 freeze or release action 시

## 포함 범위
- asset reference
- annotation and label state
- 필요한 metadata와 class mapping

## immutable 정책
- snapshot은 생성 후 수정하지 않는다
- 오류 수정은 새 snapshot으로 처리한다

## 재현성 보장 방식
- snapshot id와 생성 시점 기록
- 참조한 annotation version과 class version 기록
- artifact와 job이 snapshot id를 반드시 참조한다

## 보관 정책
- audit와 재현에 필요한 기간 동안 유지한다
- retention 정책은 artifact, compliance, 비용 기준과 함께 본다

