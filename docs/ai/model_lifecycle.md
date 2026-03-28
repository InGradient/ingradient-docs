# Model Lifecycle

- 문서명: Model Lifecycle
- 목적: 모델 등록, 버전, 승격, 롤백 정책을 정의한다.
- 적용 범위: ingradient-ai와 이를 소비하는 제품
- 상태: Draft
- Owner: AI Platform
- Reviewer: Platform / Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `training_job_policy.md`, `inference_serving_policy.md`

## 모델 상태 정의
- draft
- staging
- production
- deprecated

## 등록 절차
- training artifact 또는 외부 모델 등록
- metadata, provenance, compatibility 정보를 함께 저장

## 버전 정책
- model family와 version을 분리한다
- semantic version이 아니라 lineage 중심 버전도 허용한다

## 승격 정책
- evaluation 기준 충족
- 필요한 approval 완료
- 배포 대상 환경 준비 완료

## rollback 정책
- latency, error rate, quality regression이 임계치를 넘으면 rollback
- 이전 production 버전은 즉시 재활성화 가능해야 한다

## 폐기 정책
- 더 이상 serving 대상이 아니면 deprecated로 전환
- 보존 기간이 끝나면 archive 또는 삭제한다

