# Database Schema & Migration

- 문서명: Database Schema & Migration
- 목적: AI metadata DB의 초기 스키마 구조와 migration 관리 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../data_model.md`, `../deployment.md`

## 목적

AI Platform의 모든 엔티티 메타데이터는 PostgreSQL에 저장된다. 초기 스키마 생성, 버전 관리, migration 실행/rollback 기준을 정의한다.

## 기술 스택

- Database: PostgreSQL
- Migration 도구: TBD (Prisma Migrate, Flyway, 또는 raw SQL)
- 환경: Cloud SQL (cloud), self-hosted PostgreSQL (on-prem)

## 초기 스키마 (v0.0.1)

### 핵심 테이블

| 테이블 | 설명 | 핵심 인덱스 |
|--------|------|------------|
| `models` | 모델 registry | model_name, runtime, lifecycle_status |
| `model_versions` | 모델 버전 | model_id, lifecycle_status, validation_status |
| `model_artifacts` | 모델 artifact | model_id, version_id |
| `jobs` | 실행 job | status, runtime, queue_name, created_at |
| `job_attempts` | 실행 시도 | job_id, attempt_no |
| `nodes` | 실행 노드 | status, environment |
| `gpu_devices` | GPU 장치 | node_id, health_status |
| `workers` | worker | runtime, status, node_id |
| `queues` | 대기열 | runtime, backend_type |
| `backends` | 실행 backend | backend_type, status |
| `alert_events` | 알림/이벤트 | severity, status, created_at |
| `usage_records` | 사용량 집계 | bucket_time, scope_type, runtime |
| `audit_logs` | 감사 로그 | actor, action, target_type, created_at |
| `settings` | 동적 정책 | key |

### 인덱스 전략

- 조회 빈도 높은 필드에 인덱스 (status, runtime, created_at)
- composite index: `jobs(status, runtime, created_at)`
- partial index: `jobs WHERE status IN ('queued', 'running')` (활성 job 빠른 조회)

## Migration 규칙

### 작성 규칙

- migration 파일은 순서가 보장되는 이름 사용 (타임스탬프 prefix)
- 각 migration은 up + down (rollback) 포함
- DDL과 DML 분리 (스키마 변경과 데이터 변경 별도 migration)
- destructive migration (DROP, column 삭제)은 2단계로 분리:
  1. 먼저 deprecated 표시
  2. 다음 릴리즈에서 실제 삭제

### 실행 규칙

- 배포 전 migration 실행
- migration 실패 시 배포 중단
- rollback script 항상 준비
- production migration은 dry-run 먼저 실행

## 환경별 차이

| 환경 | DB | 특이사항 |
|------|-----|---------|
| Local | Docker PostgreSQL | docker-compose로 자동 생성 |
| Cloud | Cloud SQL | Terraform으로 인스턴스 생성, migration은 별도 |
| On-Prem | self-hosted PostgreSQL | 수동 또는 Helm hook |

## Seed Data

v0.0.1 초기 데이터:

- 기본 queue 정의 (inference-pool, training-pool, utility-pool)
- 기본 backend 정의 (self_hosted)
- 기본 settings (alert threshold 기본값)

## Retention / Archival

| 데이터 | 보존 기간 | 아카이빙 |
|--------|-----------|----------|
| jobs, attempts | 무기한 (v1) | v2에서 archival 정책 |
| alert_events | 무기한 (v1) | v2에서 정리 정책 |
| audit_logs | 최소 1년 | immutable |
| usage_records | 무기한 (집계 데이터) | - |

## v1 범위

- 초기 스키마 생성 (14 테이블)
- migration 도구 설정
- up/down migration
- seed data
- rollback script

## v1.5 이후

- schema evolution 관리 (backward compatible 변경)
- data archival 정책
- read replica 설정

## 관련 문서

- `../data_model.md`, `../deployment.md`
