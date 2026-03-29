# ingradient-ai Upcoming

- 문서명: ingradient-ai Upcoming
- 목적: 아직 릴리즈에 포함되지 않은 아이디어, 개선사항, 기술 부채, 고객 요구사항을 기록한다.
- 상태: Active
- Owner: AI
- 마지막 수정일: 2026-03-28

## 새 기능 아이디어

| 항목 | 설명 | 예상 시점 |
|------|------|-----------|
| Quota Enforcement | tenant별 GPU 시간, job 수 제한 | v2 |
| Reservation Window | 특정 시간대 GPU 예약 | v2 |
| Autoscaling | queue pressure 기반 worker 자동 증감 | v2 |
| Cost-Aware Routing | 비용 상한 기반 backend 선택 | v2 |
| SLA-Aware Routing | SLA 등급별 backend 우선순위 | v2 |
| MIG / Hard Partition | GPU 물리 분할 지원 | v2 |
| Canary Rollout | model version 점진적 배포 | v2 |
| Approval Workflow | model promotion 승인 절차 | v2 |
| Scheduled Promotion | model version 예약 승격 | v2 |

## 개선사항

| 항목 | 설명 | 우선순위 |
|------|------|----------|
| Profiling 기반 Admission | VRAM/latency profiling 데이터로 스케줄링 보정 | Phase 2 |
| Preload Recommendation | usage 기반 preload 자동 추천 | Phase 2 |
| Experiment Metadata 연결 | training job과 실험 메타데이터 연동 | Phase 3 |
| Queue 독립 페이지 | Queues 전체 페이지 분리 | v1.1 |
| Usage Analytics 독립 페이지 | 분석 전체 페이지 분리 | v1.1 |
| Settings 독립 페이지 | 설정 전체 페이지 분리 | v1.1 |
| Provider Integration | Vertex AI endpoint, managed provider 실제 연동 | v1.5 |
| CPU Allowlist 확대 | CPU inference 지원 model/recipe 확장 | v1.5 |
| Backend별 사용량 통계 | self-hosted vs external usage 비율 상세화 | v1.5 |

## 기술 부채

| 항목 | 설명 | 위험도 |
|------|------|--------|
| Runtime 추상화 약화 | runtime별 특수성 증가로 공통 contract 약화 위험 | 중 |
| 초기 메타데이터 빈약 | 불완전한 메타데이터로 UI/backend 불일치 가능 | 중 |
| 스케줄링 자동화 위험 | 조기 자동화 시 OOM/운영 혼란 증가 | 높 |
| Schema Evolution | 초기 DB 스키마 변경 시 migration 복잡도 | 중 |
| 설명 불가능한 자동화 | UI에서 설명 불가능한 routing/scheduling 결정 | 높 |

## 고객 요구사항

| 항목 | 설명 | 출처 |
|------|------|------|
| On-Prem 경량 설치 | 외부 API 차단 환경에서의 최소 설치 | 배포 요구 |
| Data Residency 정책 | 고객 데이터가 외부 backend로 전송되지 않는 보장 | 보안 요구 |
| Customer-specific Provider Allowlist | 고객별 허용 provider 제한 | 운영 요구 |
| 독립 Storage Backend | S3-compatible storage 대체 경로 | On-Prem 요구 |
