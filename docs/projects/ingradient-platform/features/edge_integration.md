# Edge Integration

## 목적

Platform은 Edge의 상위 운영 시스템이다. 프로젝트, dataset, class, 사용자, 옵션을 정의해 Edge용 패키지로 내보내고, 현장 결과를 다시 받아들여야 한다.

## 역할 분리

- Platform
  - 프로젝트, dataset, class, 계정, 작업 옵션 관리
  - Edge용 package export
  - Edge 결과 import
  - sync, 검증, 업로드 관리
- Edge
  - 로그인
  - dataset 선택
  - 촬영
  - BBox labeling
  - 현장 데이터 저장

## 핵심 원칙

- Edge는 프로젝트를 직접 선택하지 않는다.
- Platform이 특정 프로젝트 기준으로 정보를 추출한다.
- Edge에서는 허용된 dataset만 보인다.
- `dataset_id`, `class_id`는 Platform과 Edge에서 동일해야 한다.
- 현장 사용자가 바꾸면 안 되는 옵션은 Platform에서 고정해서 넘긴다.

## export package 예시

```text
project_package/
  dataset.json
  classes.json
  users.json
  options.json
  manifest.json
```

## Platform에서 필요한 기능

- 특정 프로젝트 기준 export UI
- export 대상 dataset 선택 UI
- package version/manifest 생성
- Edge 결과 import와 검증
- offline 공장 환경을 위한 예외 정책 정리

## 운영상 주의

- export/import 파일 포맷은 버전 관리가 필요하다.
- user, class, dataset 식별자가 어긋나면 Edge 현장 작업이 무의미해진다.
- license/auth 연동은 auth-service와 같이 봐야 한다.

## 관련 문서

- `../deployment.md`
- `/home/june/workspace/projects/ingradient-platform/docs/plan/edge-integration-checklist.md`
