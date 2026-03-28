# ingradient-platform Operations

## 운영 목적

- dataset, labeling, export, training request 핵심 흐름을 안정적으로 유지한다
- auth, ai, edge 연동 경계에서 문제를 빠르게 식별한다

## 핵심 메트릭

### product flow

- login and project entry success
- dataset creation success
- labeling save success
- export success and latency
- training request success

### integration

- auth dependency health
- ai request success
- edge package export success
- edge import validation failure rate

## 권한과 운영 포인트

role 기반 기능 권한 차이가 크기 때문에 아래를 운영상 중요하게 본다.

- 프로젝트 보기
- 멤버 초대
- 설정 수정
- 권한 관리
- 데이터 조회 / 업로드 / 삭제
- 라벨 보기 / 작성 / 승인
- Export / 리포트 / AI 실행

즉, bug가 나면 단순 UI 문제인지 role matrix 회귀인지 먼저 구분해야 한다.

## edge 연동 운영 포인트

- edge package export 이력
- package version과 schema version
- dataset_id와 class_id 일관성
- import 시 중복 / 충돌 / invalid bbox 처리
- offline 사용자를 위한 password hash / salt export 정책 연동

## 트러블슈팅 포인트

- 특정 role에서 화면은 보이는데 action이 실패하는지
- export가 dataset selection과 row selection 규칙대로 동작하는지
- training snapshot이 기대한 dataset 조합으로 생성되는지
- edge import에서 class mapping mismatch가 발생하는지

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-platform/docs/plan/role-permission-ui.md`
- `/home/june/workspace/projects/ingradient-platform/docs/plan/edge-integration-status.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`

