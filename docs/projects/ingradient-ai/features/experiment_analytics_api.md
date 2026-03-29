# Experiment / Analytics API

- 문서명: Experiment / Analytics API
- 목적: 실험 메타데이터 관리, training 결과 비교, 분석 API를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../architecture.md`, `../roadmap.md`

## 목적

Training job 결과를 실험 단위로 그룹화하고, 메트릭을 비교하여 최적 모델을 선별할 수 있게 한다. architecture에서 `experiment-api`로 독립 서비스로 언급된다.

## 배포

| 서비스 | 배포 대상 | 역할 |
|--------|-----------|------|
| experiment-api | Cloud Run | 실험/분석 API |

## 핵심 개념

### Experiment

| 필드 | 설명 |
|------|------|
| experiment_id | PK |
| name | 실험 이름 |
| description | 설명 |
| model_id | 대상 모델 |
| status | active, completed, archived |
| created_by | 생성자 |

### Experiment Run

| 필드 | 설명 |
|------|------|
| run_id | PK |
| experiment_id | FK |
| job_id | 연결된 training job |
| model_version_id | 생성된 model version |
| hyperparameters | 학습 설정 (JSON) |
| metrics | 결과 메트릭 (loss, mAP, accuracy 등) |
| status | running, completed, failed |

## 기능

### 실험 관리

- 실험 생성/조회/아카이브
- training job을 실험에 연결
- 동일 실험 내 여러 run 관리

### 메트릭 비교

- 동일 실험 내 run 간 메트릭 비교
- loss curve, mAP 추세 비교
- hyperparameter 차이 분석
- best run 자동 식별

### Model Version 연결

- 최적 run의 결과 → model version으로 등록
- experiment → run → job → model_version lineage 추적

## API (예시)

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/experiments` | 실험 생성 |
| `GET` | `/api/experiments` | 실험 목록 |
| `GET` | `/api/experiments/{id}` | 실험 상세 |
| `GET` | `/api/experiments/{id}/runs` | Run 목록 |
| `GET` | `/api/experiments/{id}/runs/{run_id}` | Run 상세 |
| `GET` | `/api/experiments/{id}/compare` | Run 비교 |

## v1 범위

- 없음 (v1에서는 job + model_version lineage로 기본 추적)

## v1.5 범위

- experiment 기본 CRUD
- job → experiment run 연결
- 메트릭 비교 기본

## v2 범위

- hyperparameter search 연동
- 자동 best model selection
- experiment 대시보드

## 관련 문서

- `../architecture.md`, `../roadmap.md`, `job_lifecycle.md`, `model_registry_and_byom.md`
