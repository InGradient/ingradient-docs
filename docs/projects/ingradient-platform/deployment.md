# ingradient-platform Deployment

## 실행 형태

`ingradient-platform`은 cloud web app과 backend API 중심으로 운영되는 제품이다.

핵심 배포 대상:

- frontend
- backend API
- storage integration
- auth-service integration
- ai integration

## 인프라 요구사항

- platform DB
- object storage
- auth-service endpoint
- ai service endpoint
- edge integration용 import / export 처리 경로

## 배포 시 고려할 흐름

### 일반 코드 배포

- 코드 변경 반영
- auth와 ai integration smoke check
- 주요 dataset / labeling / export 흐름 확인

### 데이터 구조 변경 포함 배포

- migration 적용
- snapshot과 export 영향 확인
- edge import / export 포맷 영향 확인

## edge 연동 관점의 배포 고려사항

platform은 edge와 직접 online sync만 다루는 것이 아니라, USB 기반 패키지 교환 같은 완전 분리 환경도 고려해야 한다.

따라서 배포 후 아래를 확인해야 한다.

- edge package export API가 동작하는가
- edge import 검증 로직이 손상되지 않았는가
- dataset_id / class_id 계약이 유지되는가

## 운영 체크포인트

- 프로젝트 / dataset / class 관리
- export 기능
- training request 연결
- edge integration endpoints 또는 package flow

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-platform/docs/plan/edge-integration-checklist.md`
- `/home/june/workspace/projects/ingradient-platform/docs/plan/edge-integration-status.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`

