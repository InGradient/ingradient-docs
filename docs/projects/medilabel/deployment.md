# medilabel Deployment

## 실행 형태

medilabel은 현재 cloud 중심 제품이다.

주요 구성:

- frontend
- core backend
- ai backend integration
- storage
- auth-service

향후 on-prem 또는 electron 기반 확장을 고려한다.

## 배포 모드

### normal code deploy

- 코드만 배포
- live runtime uploads나 catalog state를 덮어쓰지 않음

### full deploy with static data sync

- models / samples 같은 static data 반영
- 여전히 runtime upload 데이터는 보존

### dangerous runtime data sync

- live runtime state를 로컬 copy로 덮어쓸 수 있음
- 일반 릴리즈에는 사용하지 않음

## 인프라 요구사항

- frontend service
- core backend
- ai backend
- data and cache buckets
- auth-service endpoint
- custom domain

## 운영상 중요한 배포 원칙

- mutable runtime data를 ordinary deploy에서 overwrite하지 않는다
- newly uploaded DICOM은 canonical NIfTI 경로로 운영할 수 있다
- code-only deploy를 day-to-day 기본 경로로 삼는다

## 배포 후 검증

- frontend, core backend, ai backend health check
- custom domain access
- catalog open
- upload / ingest / viewer 흐름

## 관련 근거 문서

- `/home/june/workspace/projects/medilabel/docs/deployment.md`
- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`

