# Small-User Large-Data GCP Pattern

## 목적

사용자는 많지 않지만 업로드 데이터가 빠르게 커지는 서비스의 GCP 운영 패턴을 정리한다.

이 문서는 특히 아래 같은 서비스에 적용한다.

- 컴퓨트보다 저장소 비용이 더 빨리 커지는 서비스
- 정적 웹 + API + 대용량 파일 저장이 분리되는 서비스
- Cloud Run, Cloud SQL, GCS 조합이 자연스러운 서비스

## 권장 패턴

- Frontend: 정적 빌드 산출물을 GCS로 서빙
- Backend API: Cloud Run
- 메타데이터: Cloud SQL
- 대용량 파일: GCS

핵심 이유:

- 정적 프론트를 Cloud Run에 함께 올리지 않아도 된다.
- API 트래픽이 적을 때 컴퓨트 비용을 줄일 수 있다.
- 데이터 파일은 GCS에 두는 것이 운영과 비용 모두 유리하다.

## 언제 이 패턴을 쓰는가

아래 조건이 함께 맞으면 우선 검토한다.

- 실제 동시 사용자는 적다
- 이미지, 패키지, export, 모델 파일처럼 바이너리 저장량이 크다
- API 서버는 stateless하게 유지할 수 있다
- UI는 SPA 또는 정적 웹으로 충분하다

## 왜 Frontend와 Backend를 나누는가

### Frontend를 GCS로 두는 이유

- 정적 파일은 매우 저렴하게 서빙할 수 있다
- Cloud Run 인스턴스를 프론트 때문에 깨울 필요가 없다
- CDN을 나중에 붙이기 쉽다

### Backend만 Cloud Run에 두는 이유

- 실제 계산/권한/DB 접근이 필요한 요청만 컴퓨트 비용을 낸다
- stateless API 구조를 유지하기 쉽다
- 배포와 롤백이 단순하다

## 저장 비용 관점 권장 사항

- 원본 파일은 한 번만 저장한다
- 썸네일과 derivative는 필요한 것만 만든다
- 재생성 가능한 export 산출물은 lifecycle rule로 자동 정리한다
- 같은 리전에 Cloud Run, Cloud SQL, GCS를 묶어 egress를 줄인다

## 예시 적용

`ingradient-platform`은 이 패턴의 대표 사례다.

- Frontend: `app.ingradient.ai`
- Backend API: Cloud Run
- 인증: 별도 `auth-service`
- 파일 저장: GCS
- 메타데이터: Cloud SQL

## 관련 문서

- `deployment_architecture.md`
- `../data/cloud_run_storage_policy.md`
