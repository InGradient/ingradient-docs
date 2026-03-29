# Usage Analytics

- 문서명: Usage Analytics
- 목적: 사용량 집계, GPU-hours, queue 추세, model 사용 통계 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../api_contract.md`, `../operations.md`

## 목적

Usage Analytics는 운영 회고와 capacity planning을 위한 집계 데이터를 제공한다. 실시간 운영이 아닌 과거 데이터 분석에 초점을 둔다.

## UsageRecord 엔티티

| 필드 | 설명 |
|------|------|
| bucket_time | 집계 시간 구간 시작점 |
| bucket_granularity | hourly, daily |
| scope_type | organization, project |
| scope_id | 대상 ID |
| runtime | detection, foundation, medical, utility |
| model_name, model_version_id | 모델 정보 |
| job_count | 총 job 수 |
| success_count, fail_count | 성공/실패 수 |
| gpu_seconds | GPU 사용 시간 (초) |
| avg_wait_ms, p95_wait_ms | 대기 시간 |
| avg_runtime_ms | 평균 실행 시간 |
| oom_count | OOM 발생 횟수 |

## API

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/analytics/usage` | 사용량 통계 (필터: 시간, runtime, model, scope) |
| `GET` | `/api/analytics/queues` | Queue 분석 |
| `GET` | `/api/analytics/models` | Model 분석 |
| `GET` | `/api/overview` | Overview projection (KPI 요약) |

## 기본 차트 (Ops Console)

| 차트 | 설명 |
|------|------|
| GPU utilization timeline | 시간별 GPU 사용률 |
| Queue wait trend | queue별 대기 시간 추세 |
| Model usage top N | 가장 많이 사용된 모델 |
| GPU-hours by model | 모델별 GPU 시간 |
| Fail reason distribution | 실패 사유 분포 |
| Hour-of-day heatmap | 시간대별 부하 분포 |
| Node heatmap | 노드별 부하 분포 |

## 추가 통계

- backend별 job 수 (self-hosted vs external)
- CPU vs GPU execution 비율
- fallback 발생률
- overflow 발생 이유 분포
- external backend 비용 추정

## 필터 축

시간 범위, runtime, model, project/scope, node, job_type

## 집계 방식

- 사전 집계 (pre-aggregated): hourly/daily bucket으로 미리 계산
- 실시간 계산이 아닌 batch 집계
- Overview KPI는 최근 1시간/24시간 기준

## v1 범위

- Overview KPI (active jobs, queued jobs, GPU health, error rate)
- 기초 usage trend summary (Overview 페이지 내)
- Queue summary cards

## v1.1 이후

- Usage Analytics 독립 페이지
- 전체 차트 구현
- drill-down (차트 클릭 → jobs/models/nodes)
- 비용 추정 (예상치 라벨 명시)

## v2 이후

- tenant별 사용량 리포트
- quota enforcement 연동
- export 기능

## 관련 문서

- `../api_contract.md`, `../operations.md`, `ops_console.md`
