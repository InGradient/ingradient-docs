# Cloud Run Storage Policy

## 목적

Cloud Run에 배포되는 INGRADIENT 서비스가 어떤 데이터를 어디에 저장해야 하는지에 대한 공통 원칙을 정의한다.

이 문서는 특히 아래 상황에서 기준 문서로 사용한다.

- 서비스가 Cloud Run에 올라갈 예정일 때
- 로컬 파일 저장을 운영 환경으로 가져가려 할 때
- Cloud SQL, GCS, 컨테이너 로컬 디스크의 역할을 구분해야 할 때
- `ingradient-platform`, `ingradient-edge`, `ingradient-ai`가 같은 저장 원칙을 공유해야 할 때

## 핵심 원칙

1. Cloud Run 컨테이너는 stateless하게 운영한다.
2. 컨테이너 로컬 디스크는 임시 파일만 저장한다.
3. 메타데이터와 관계형 조회가 필요한 데이터는 SQL에 저장한다.
4. 이미지, 모델, 패키지, export 결과 같은 대용량 바이너리는 Object Storage에 저장한다.
5. 서비스는 파일의 "내용"보다 파일의 "참조 정보"를 DB에 저장한다.

## 저장 위치 기준

### 1. Cloud SQL에 저장할 것

- 사용자/조직/프로젝트 식별자
- dataset, asset, class, label 같은 메타데이터
- job 상태, export 상태, queue 상태
- 파일 소유권, 파일 참조 관계, 접근 제어 정보
- 감사 로그, 설정, 운영 상태

### 2. GCS에 저장할 것

- 원본 이미지
- 썸네일
- export 결과물
- Edge 패키지 파일 (`.ige` 등)
- 모델 파일, 체크포인트, 추론 산출 아티팩트
- 대용량 로그/첨부/바이너리 덤프

### 3. Cloud Run 로컬 디스크에 둘 수 있는 것

- 요청 처리 중 잠깐 필요한 임시 파일
- 업로드 변환 중간 결과
- 압축/패키징 중간 산출물

주의:
- 컨테이너 재시작 시 사라져도 되는 데이터만 허용한다.
- 영구 파일 경로를 컨테이너 로컬 디스크 기준으로 설계하지 않는다.

## DB에 저장할 파일 메타데이터 권장 항목

- `storage_provider`
- `bucket`
- `object_key`
- `content_type`
- `size_bytes`
- `checksum`
- `created_at`
- `updated_at`
- `source_filename`
- `thumbnail_object_key` 또는 대표 derivative 참조

원칙:
- DB에는 파일의 위치와 속성만 저장하고, 파일 본문은 넣지 않는다.

## 업로드/다운로드 기본 흐름

### 업로드

1. 클라이언트가 업로드를 요청한다.
2. 서비스가 메타데이터 row를 생성하거나 예약한다.
3. 파일은 GCS에 저장한다.
4. 업로드 완료 후 DB 상태를 확정한다.

### 다운로드

1. 클라이언트는 서비스에 파일 접근을 요청한다.
2. 서비스는 권한을 확인한다.
3. 서비스는 signed URL 또는 프록시 응답을 반환한다.

## 버킷 분리 원칙

버킷은 최소한 아래 단위 중 하나로 분리하는 것을 권장한다.

- 환경별: dev / staging / prod
- 데이터 성격별: assets / exports / packages / models
- 보안 경계별: 공개 가능 / 비공개 / 관리자 전용

예시:

- `ingradient-platform-assets-prod`
- `ingradient-platform-exports-prod`
- `ingradient-platform-edge-packages-prod`
- `ingradient-ai-models-prod`

## 삭제 정책

삭제는 항상 DB와 GCS를 함께 고려한다.

### 권장 방식

1. 먼저 DB 상태를 `DELETING` 또는 soft delete로 바꾼다.
2. GCS 객체 삭제를 시도한다.
3. 성공 후 DB를 최종 삭제 또는 `DELETED`로 확정한다.

### 피해야 할 방식

- DB row만 지우고 파일을 남기는 방식
- 파일만 지우고 DB 참조를 남기는 방식

## 백업 원칙

- SQL은 정기 백업과 복구 절차를 별도로 가진다.
- GCS는 버전 관리 또는 retention / lifecycle 정책을 둔다.
- DB 백업과 객체 저장소 백업은 같은 전략으로 취급하지 않는다.

## 서비스별 적용 방향

### ingradient-platform

- dataset / asset 메타데이터는 Cloud SQL
- 이미지, 썸네일, export, Edge 패키지는 GCS

### ingradient-ai

- job, queue, model registry 메타데이터는 Cloud SQL
- 모델 파일, 체크포인트, 추론 산출물은 GCS

### ingradient-edge

- 설치형 앱 자체는 Cloud Run 대상이 아닐 수 있지만,
- 서버와 연동되는 패키지/결과 파일은 GCS 저장 경계를 따라야 한다.

## 의사결정 질문

새 데이터를 어디에 저장할지 애매하면 아래 질문을 순서대로 본다.

1. 이 데이터는 재시작 후에도 남아야 하는가?
2. 관계형 조회나 필터가 필요한가?
3. 크기가 크거나 바이너리인가?
4. signed URL, lifecycle, CDN이 필요한가?

판단 규칙:

- 관계형 조회가 중요하면 SQL
- 크고 바이너리면 GCS
- 둘 다 필요하면 본문은 GCS, 메타데이터는 SQL

## 관련 문서

- `storage_policy.md`
- `data_ownership_policy.md`
- `retention_backup_policy.md`
- `../architecture/deployment_architecture.md`
