# Training Job Policy

- 문서명: Training Job Policy
- 목적: 학습 작업의 생성, 실행, 실패, 재실행 규칙을 정의한다.
- 적용 범위: ingradient-ai training pipeline
- 상태: Draft
- Owner: AI Platform
- Reviewer: Platform Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `model_lifecycle.md`, `resource_cost_policy.md`

## job lifecycle
- created
- queued
- preparing
- running
- succeeded
- failed
- cancelled

## 상태 전이
- job은 명시적 상태 전이를 가진다
- terminal state에서 다시 실행하려면 retry 또는 clone 경로를 사용한다

## queue 정책
- 자원 클래스별 queue를 둘 수 있다
- priority와 quota를 함께 적용한다

## 실패 분류
- validation failure
- infra failure
- data access failure
- OOM or resource exhaustion
- user cancellation

## retry와 resume 규칙
- 일시적 infra 오류는 retry 가능
- OOM은 설정 조정 없이는 자동 retry하지 않는다
- checkpoint가 있으면 resume를 허용할 수 있다

## artifact 산출 규칙
- logs, metrics, checkpoints, final model bundle
- 모든 artifact는 job id와 snapshot id에 연결한다

