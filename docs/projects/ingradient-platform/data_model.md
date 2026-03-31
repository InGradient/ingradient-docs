# ingradient-platform Data Model

## 데이터 개요

ingradient-platform은 SQLite 3 (WAL mode)을 사용하며, Dataset/Asset 라이프사이클과 학습/추론 메타데이터를 소유한다.

- DB 위치: `backend/data.db` (환경변수 `INGRADIENT_DATA_DB`로 변경 가능)
- 연결 설정: WAL journal mode, foreign keys enabled, timeout 30s

## 핵심 엔티티

### Project

프로젝트는 데이터, 클래스, 멤버를 묶는 최상위 단위다.

| 필드 | 타입 | 설명 |
|------|------|------|
| id | INTEGER PK | |
| name | TEXT | 프로젝트 이름 |
| owner_id | TEXT | 소유자 (auth-service user id) |
| org_id | TEXT | 조직 ID (auth-service) |
| role_permissions_json | TEXT | 역할별 권한 설정 (JSON) |
| created_at | DATETIME | |

### Dataset

이미지를 논리적으로 그룹핑하는 단위. 하나의 이미지가 여러 Dataset에 속할 수 있다 (N:N).

| 필드 | 타입 | 설명 |
|------|------|------|
| id | INTEGER PK | |
| project_id | INTEGER FK | |
| name | TEXT | |
| description | TEXT | |
| created_at | DATETIME | |

### Image (Asset)

관리 대상 이미지 파일. 업로드 시 3단계 썸네일이 자동 생성된다.

| 필드 | 타입 | 설명 |
|------|------|------|
| id | INTEGER PK | |
| project_id | INTEGER FK | |
| filename | TEXT | 원본 파일명 |
| file_hash | TEXT | 파일 해시 (중복 검사) |
| width, height | INTEGER | 이미지 크기 |
| labels | TEXT | 라벨 데이터 (JSON) |
| user_id | TEXT | 업로더 |
| created_at | DATETIME | |

### Project Class

프로젝트별 클래스 분류 체계. 다국어 display name 지원 (ko/en/vi).

| 필드 | 타입 | 설명 |
|------|------|------|
| id | INTEGER PK | |
| project_id | INTEGER FK | |
| class_key | TEXT | 내부 식별자 |
| display_names | TEXT | 다국어 이름 (JSON: `{ko, en, vi}`) |
| color | TEXT | UI 표시 색상 |

### Training Job

AI 학습 요청. ingradient-ai에 전달되어 실제 GPU 학습이 진행된다.

| 필드 | 타입 | 설명 |
|------|------|------|
| id | INTEGER PK | |
| project_id | INTEGER FK | |
| status | TEXT | pending / running / completed / failed |
| config | TEXT | 학습 설정 (JSON) |
| metrics | TEXT | 결과 메트릭 (JSON) |
| created_at | DATETIME | |

### Comment

이미지 단위 협업 코멘트. 멘션 기능 포함.

### Edge Device / Session Analytics

Edge 디바이스 등록, 패키지 배포 이력, 세션별 사용 분석.

## 관계도

```
Project
 ├── Dataset ──── N:N ──── Image (Asset)
 ├── Project Class
 ├── Project Member (→ auth-service)
 ├── Training Job
 ├── Comment
 └── Edge Device
      └── Session Analytics
```

## 저장 위치

| 데이터 | 저장소 | 비고 |
|--------|--------|------|
| 메타데이터 | SQLite (`data.db`) | 프로젝트, 데이터셋, 이미지 정보 |
| 이미지 파일 | 로컬 FS / Cloud Storage | `backend/uploads/` |
| 썸네일 | 로컬 FS / Cloud Storage | 업로드 시 자동 생성 |
| 학습 모델 | Cloud Storage | ingradient-ai가 관리 |
| Export 결과 | 임시 FS → 다운로드 | COCO JSON ZIP |

## SoT (Source of Truth) 경계

| 데이터 | SoT | 비고 |
|--------|-----|------|
| 사용자, 인증, 멤버십 | auth-service | platform은 읽기만 |
| Dataset, Asset, 라벨 | **ingradient-platform** | |
| 클래스 분류 체계 | **ingradient-platform** | |
| 학습 Job 메타 | **ingradient-platform** (요청), ingradient-ai (실행) | |
| 모델 파일/가중치 | ingradient-ai | platform은 참조만 |
| Edge 디바이스 상태 | **ingradient-platform** (등록), ingradient-edge (실행) | |
