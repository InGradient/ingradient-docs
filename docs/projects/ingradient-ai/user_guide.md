# ingradient-ai User Guide

## 대상 사용자

- AI 운영자
- 내부 개발자
- ops console 사용자

## 시작하기

초기 사용자는 보통 운영 콘솔을 통해 상태를 본다.

기본 진입 흐름:

1. Overview에서 이상 여부 확인
2. Jobs / Queues / Workers로 drill-down
3. Models에서 version과 preload 상태 확인
4. Events & Alerts에서 최근 critical event 확인

## 주요 작업 흐름

### failed job 확인

1. Jobs에서 Failed 탭 선택
2. 필터로 runtime, model, queue를 좁힘
3. 상세 drawer에서 attempt history, routing, error trace 확인

### backlog 확인

1. Overview 또는 Queues에서 backlog 상승 확인
2. Workers & GPU에서 worker 부족이나 locality 문제 확인
3. 필요 시 preload 또는 drain 해제 같은 조치 수행

### model version 관리

1. Models에서 model family 선택
2. version history 확인
3. validate, promote default, rollback 수행

## 자주 묻는 문제

- queue에 job이 오래 머무름
- worker가 `oom_recent` 상태
- model load 실패
- artifact가 보이지 않음

## 관련 링크

- `../../ai/training_job_policy.md`
- `../../ai/model_lifecycle.md`
- `../../ai/execution_routing_policy.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_ops_console_plan.md`

