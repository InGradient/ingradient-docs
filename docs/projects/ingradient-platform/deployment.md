# ingradient-platform Deployment

## 목적

이 문서는 `ingradient-platform`의 GCP 운영 배포 기준을 한 곳에 정리한 통합 실행 문서다.

이 문서를 읽으면 아래 내용을 한 번에 파악할 수 있어야 한다.

- 어떤 운영 구조를 최종 기준으로 삼는가
- 어떤 문서가 근거 문서이고 무엇을 우선 적용하는가
- 어떤 GCP 리소스를 생성해야 하는가
- `auth-service`와 어떻게 연결되는가
- 작은 사용자 수와 큰 파일 저장량 조건에서 무엇을 조심해야 하는가
- 실제 배포 전에 코드에서 무엇을 먼저 바꿔야 하는가

## 이 문서가 통합한 기준 문서

### 프로젝트 문서

- `ingradient-platform/docs/production_gcp_runbook.md`
- `ingradient-platform/docs/cloud_run_storage_plan.md`
- `ingradient-platform/docs/deployment.md`
- `ingradient-platform/docs/operations.md`
- `ingradient-platform/docs/api_contract.md`
- `ingradient-platform/backend/README.md`

### 공통 문서

- `ingradient-docs/docs/data/cloud_run_storage_policy.md`
- `ingradient-docs/docs/architecture/small_user_large_data_gcp_pattern.md`
- `ingradient-docs/docs/architecture/deployment_architecture.md`

## 최종 운영 기준

`ingradient-platform`의 초기 운영 배포는 아래 구조를 기준으로 한다.

- Frontend: 정적 빌드 결과물 배포
- Backend API: Cloud Run
- 메타데이터 DB: Cloud SQL PostgreSQL
- 대용량 파일 저장: GCS
- 인증/인가: `auth-service`
- training / models 기능: 초기 운영에서는 비활성

핵심 원칙:

- Cloud Run 컨테이너는 stateless하게 운영한다.
- Cloud Run 로컬 디스크는 임시 처리에만 사용한다.
- 관계형 메타데이터는 Cloud SQL에 저장한다.
- 원본 이미지, 썸네일, export, edge package 같은 바이너리는 GCS에 저장한다.
- DB에는 파일 본문이 아니라 파일 참조 정보만 저장한다.

## 현재 조건에서의 배포 판단

현재 합의된 전제는 아래와 같다.

- 실제 사용자는 10명 미만이다.
- 대신 업로드/다운로드해야 하는 데이터 총량은 수십 GB까지 커질 수 있다.
- `ingradient-ai` 학습/예측은 아직 운영 배포 대상이 아니다.

이 조건에서는 다음 패턴을 우선 적용한다.

- 정적 프론트와 API를 분리한다.
- API 서버는 파일 본문 장기 저장 책임을 갖지 않는다.
- 대용량 파일 전송의 주체는 GCS가 된다.

즉, 이 프로젝트는 `small-user / large-data` 패턴의 대표 사례로 취급한다.

## 권장 배포 구조

### Frontend

- 권장 운영 주소: `https://app.ingradient.ai`
- 권장 형태: 정적 빌드 결과물 배포
- API와 동일 컨테이너에 묶지 않는다.

### Backend API

- 권장 운영 주소: `https://api.app.ingradient.ai`
- 런타임: Cloud Run
- 역할:
  - 인증 토큰 검증
  - 프로젝트/데이터셋/이미지 메타데이터 처리
  - 권한 확인
  - 업로드 세션 발급
  - 다운로드 URL 발급

### Database

- Cloud SQL PostgreSQL
- DB 이름: `platform`
- 사용자: `platform`

### Object Storage

- GCS bucket 3개 이상 분리
- assets
- exports
- edge-packages

### Auth

- 외부 배포된 `auth-service` 사용
- 운영 기준 주소: `https://auth.ingradient.ai`

## GCP 리소스 권장 목록

프로젝트 기준:

- GCP Project: `ingradient-platform`
- Region: `asia-northeast3`

생성 대상:

- Cloud Run service: `ingradient-platform`
- Cloud SQL PostgreSQL instance: `platform-db`
- Database: `platform`
- DB user: `platform`
- GCS bucket: `ingradient-platform-assets-prod`
- GCS bucket: `ingradient-platform-exports-prod`
- GCS bucket: `ingradient-platform-edge-packages-prod`
- GCS bucket: `ingradient-platform-backups`
- Artifact Registry repository
- Secret Manager secrets
- Cloud Run service account
- 필요 시 Serverless VPC Access connector

## 파일 저장 기준

### Cloud SQL에 저장할 것

- project
- dataset
- image / asset metadata
- class / annotation / comment
- export job 상태
- edge package metadata
- dashboard / catalog preferences
- 권한과 소유권 정보

### GCS에 저장할 것

- 원본 이미지
- 썸네일
- bbox 썸네일
- export 결과물
- edge package `.ige`
- 장기 보관이 필요한 대용량 산출물

### Cloud Run 로컬 디스크에 둘 수 있는 것

- 요청 처리 중간 파일
- 썸네일 생성 중간 결과
- export 압축 중간 산출물

주의:

- 컨테이너 로컬 디스크를 영구 경로처럼 취급하지 않는다.
- 인스턴스 재시작 후 사라져도 되는 파일만 허용한다.

## 파일 메타데이터 기준

파일 관련 엔티티는 최소한 아래 메타데이터를 보관한다.

- `bucket`
- `object_key`
- `content_type`
- `size_bytes`
- `checksum`
- `source_filename`
- `storage_status`

가능하면 아래 필드도 유지한다.

- `thumbnail_object_key`
- `created_at`
- `updated_at`

## 업로드/다운로드 정책

### 기본 원칙

운영 기준에서 프론트는 `/uploads/...` 같은 로컬 정적 경로를 직접 참조하지 않는다.

### 업로드

초기 운영 구조의 목표 흐름:

1. 클라이언트가 업로드 시작 요청
2. backend가 권한 확인
3. backend가 GCS 업로드용 URL 또는 세션을 발급
4. 클라이언트가 GCS로 직접 업로드
5. backend가 업로드 완료 후 DB metadata를 확정

### 다운로드

기본 원칙:

- 원본 다운로드는 signed URL 우선
- 권한이 복잡하거나 audit이 더 중요하면 backend proxy 허용

권장:

- 이미지 원본
- export 결과
- edge package

이 세 가지는 signed URL 중심으로 설계한다.

## 현재 코드 기준의 핵심 주의사항

현재 구현과 운영 목표 사이에 남아 있는 핵심 갭은 아래와 같다.

### 1. 업로드 경로

현재 `/api/upload`는 backend가 파일을 직접 수신하는 구조다.

이 구조는 작은 파일에는 동작하지만, 대용량 파일과 Cloud Run 운영에는 불리하다.

운영 전 우선순위가 가장 높은 개선 항목:

- direct-to-GCS 업로드 구조로 전환

### 2. 로컬 파일 경로 의존

운영 기준에서는 `/uploads/*` 정적 마운트를 계약으로 삼지 않는다.

반드시 유지해야 할 기준:

- API 응답에 포함된 asset URL 또는 storage-backed URL 사용

### 3. DB 운영 구조

운영 SoT는 SQLite가 아니라 Cloud SQL PostgreSQL이다.

기준:

- `DATABASE_URL`이 설정된 환경을 운영 기준으로 본다.
- migration / backfill / backup 절차를 PostgreSQL 기준으로 운영한다.

### 4. training 기능

초기 운영에서는 아래 값을 기본으로 둔다.

- `TRAINING_ENABLED=false`

즉:

- training manager 비활성
- models / training route 비활성
- 관련 UI 노출 최소화

## auth-service 연동 기준

운영 기준값:

- `AUTH_SERVICE_BASE=https://auth.ingradient.ai`
- `AUTH_SERVICE_PROJECT_CODE=ingradient-platform`

`ingradient-platform`은 auth-service가 발급한 JWT를 검증하고, 프로젝트/조직 멤버십 해석은 auth-service 기준과 충돌하지 않도록 유지한다.

다음 값은 auth-service 운영값과 정확히 맞아야 한다.

- `ACCESS_TOKEN_SECRET`
- `BOOTSTRAP_SECRET`

주의:

- `EDGE_LICENSE_SECRET`는 `ingradient-platform`의 기본 운영 secret이 아니다.
- `EDGE_LICENSE_SECRET`는 `auth-service`와 `ingradient-edge` 사이의 계약으로 본다.

## 권장 환경변수 기준

### Backend

```env
PROJECT_ID=ingradient-platform
REGION=asia-northeast3
SERVICE_NAME=ingradient-platform
CLOUD_SQL_INSTANCE=ingradient-platform:asia-northeast3:platform-db
BACKUP_BUCKET=ingradient-platform-backups

DATABASE_URL=postgresql://platform:<DB_PASSWORD>@localhost/platform?host=/cloudsql/ingradient-platform:asia-northeast3:platform-db

AUTH_SERVICE_BASE=https://auth.ingradient.ai
AUTH_SERVICE_PROJECT_CODE=ingradient-platform
ACCESS_TOKEN_SECRET=<same-as-auth-service>
BOOTSTRAP_SECRET=<same-as-auth-service>
INGRADIENT_AUTH_SALT=<random-platform-salt>

GCS_ASSETS_BUCKET=ingradient-platform-assets-prod
GCS_EXPORTS_BUCKET=ingradient-platform-exports-prod
GCS_EDGE_PACKAGES_BUCKET=ingradient-platform-edge-packages-prod
SIGNED_URL_TTL_SECONDS=900

TRAINING_ENABLED=false
CORS_ORIGINS=https://app.ingradient.ai
LOG_LEVEL=INFO
```

### Frontend

```env
VITE_API_BASE=https://api.app.ingradient.ai
VITE_IAM_BASE=https://auth.ingradient.ai
VITE_AUTH_PROJECT_CODE=ingradient-platform
VITE_TRAINING_ENABLED=false
```

## 버킷 운영 정책

권장 설정:

- Uniform bucket-level access 활성화
- Public access prevention 활성화
- production bucket 기본 비공개
- lifecycle rule 적용

초기 권장 lifecycle:

- exports bucket: 30일 또는 90일 후 자동 삭제 검토
- 임시 산출물: 7일 또는 30일 후 삭제 검토

백업 / 복구 원칙:

- SQL 백업과 GCS 운영 정책은 분리해서 관리한다.
- DB 백업은 별도 절차를 둔다.
- GCS는 versioning 또는 lifecycle로 관리한다.

## 실제 배포 순서

### 1. 인프라 생성

1. GCP project 생성
2. Artifact Registry 생성
3. Cloud SQL PostgreSQL 생성
4. GCS bucket 4개 생성
5. Secret Manager 등록
6. Cloud Run service account 생성
7. IAM 권한 부여
8. 도메인 / DNS 준비

### 2. 코드 전환

1. PostgreSQL 연결 기준 점검
2. storage abstraction 기준 점검
3. direct-to-GCS 업로드 설계 반영
4. signed URL 다운로드 정책 반영
5. training 비활성 기준 확인

### 3. Frontend 배포

1. 정적 빌드 생성
2. 정적 호스팅 대상에 업로드
3. `app.ingradient.ai` 연결

### 4. Backend 배포

1. Cloud Run 배포
2. Cloud SQL 연결
3. 환경변수 / secret 주입
4. smoke test

### 5. 운영 검증

1. 로그인
2. `/api/auth/me`
3. 프로젝트 CRUD
4. 이미지 업로드
5. 썸네일 조회
6. export 생성 / 다운로드
7. edge package 생성 / 다운로드

## Smoke Test 체크리스트

- login success
- `/api/auth/me` success
- project create / list / update / delete
- dataset create / list
- image upload success
- image metadata persisted in PostgreSQL
- uploaded file stored in GCS
- thumbnail load success
- export success
- export download success
- edge package create success
- edge package download success
- `TRAINING_ENABLED=false` 상태에서 training 관련 UI/API 비활성 확인

## 운영 체크포인트

- auth-service health
- Cloud SQL connection success
- GCS read / write success
- signed URL download success
- role-based permission regression 여부
- GCS object와 DB metadata 정합성

## 아직 남아 있는 의사결정

- `api.app.ingradient.ai`로 분리할지 `app.ingradient.ai/api`로 합칠지
- 다운로드를 signed URL 우선으로 할지 일부 proxy를 섞을지
- exports retention 기간을 며칠로 둘지
- AI unavailable 상태를 UI에서 어디까지 허용할지

## 권장 읽기 순서

이 문서를 읽은 뒤 상세 문서는 아래 순서로 본다.

1. `../../../architecture/small_user_large_data_gcp_pattern.md`
2. `../../../data/cloud_run_storage_policy.md`
3. `../../../architecture/deployment_architecture.md`
4. `../../../../ingradient-platform/docs/production_gcp_runbook.md`
5. `../../../../ingradient-platform/docs/cloud_run_storage_plan.md`
6. `../../../../ingradient-platform/docs/operations.md`
7. `../../../../ingradient-platform/docs/api_contract.md`

## 결론

`ingradient-platform`의 초기 운영 배포는 아래 한 줄로 요약한다.

- 정적 프론트 + Cloud Run API + Cloud SQL + GCS + auth-service

그리고 현재 조건에서 가장 중요한 실행 포인트는 아래 두 가지다.

- training은 배포하지 않는다.
- 대용량 파일은 앱 서버가 오래 들고 있지 말고 GCS direct upload/download 구조로 정리한다.
