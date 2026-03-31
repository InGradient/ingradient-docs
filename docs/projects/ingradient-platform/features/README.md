# ingradient-platform Features

## 기능 문서 목록

### 핵심 기능

| 문서 | 기능 | 설명 |
|------|------|------|
| [auth.md](./auth.md) | 인증 | 로그인, 회원가입, 세션 관리, auth-service 연동 |
| [project_management.md](./project_management.md) | 프로젝트 관리 | 프로젝트 생성, 선택, 전환, 속성 |
| [catalog_dataset.md](./catalog_dataset.md) | 카탈로그 / 데이터셋 | 데이터셋 관리, 이미지 업로드, 검색, 일괄 작업 |
| [gallery_annotation.md](./gallery_annotation.md) | 갤러리 / 어노테이션 | 이미지 탐색, 바운딩 박스/포인트/분류 라벨 편집 |
| [class_management.md](./class_management.md) | 클래스 관리 | 프로젝트별 클래스 체계, 다국어, 참조 이미지 |
| [training.md](./training.md) | 모델 학습 | 학습 설정/실행/모니터링, GPU 큐, 결과 평가, 모델 비교 |
| [models_library.md](./models_library.md) | 모델 라이브러리 | 사전 학습 모델 다운로드, 작업별 모델 배정 |
| [auto_detection.md](./auto_detection.md) | 자동 감지 / 추론 | AI 모델 기반 객체 자동 감지, 히트맵, 신뢰도 |
| [dashboard_analytics.md](./dashboard_analytics.md) | 대시보드 / 분석 | 8종 분석 위젯, 커스터마이징, GPU/큐 상태 |
| [dataset_export.md](./dataset_export.md) | 데이터 내보내기 | COCO JSON export, 선택 범위, consensus 라벨 |
| [edge_integration.md](./edge_integration.md) | Edge 연동 | Edge 패키지 export/import, 오프라인 환경 |

### 관리/운영 기능

| 문서 | 기능 | 설명 |
|------|------|------|
| [settings_admin.md](./settings_admin.md) | 설정 / 관리 | 프로젝트 설정, 멤버, 권한 매트릭스, 조직 관리 |
| [account_management.md](./account_management.md) | 계정 관리 | 프로필, 비밀번호, 계정 삭제 (영향 미리보기) |
| [device_management.md](./device_management.md) | 디바이스 관리 | Edge 디바이스 등록/폐기, 오프라인 토큰 |
| [notifications.md](./notifications.md) | 알림 | 학습 완료/실패, @멘션 알림, 읽음/보관 |
| [comments.md](./comments.md) | 코멘트 | 이미지 코멘트, @멘션 협업 |

### 보조 기능

| 문서 | 기능 | 설명 |
|------|------|------|
| [multi_image_grouping.md](./multi_image_grouping.md) | 다중 이미지 그룹핑 | 시퀀스 그룹, Deflectometry 모드 |
| [image_download.md](./image_download.md) | 이미지 다운로드 / 라벨 일괄 | 원본 다운로드, 클래스 라벨 일괄 삭제, 뷰 설정 |

### 횡단 관심사

| 문서 | 기능 | 설명 |
|------|------|------|
| [project_role_matrix.md](./project_role_matrix.md) | 역할/권한 매트릭스 | Role × Permission 구조, UI 요구사항, 운영 규칙 |
| [training_queue_ui.md](./training_queue_ui.md) | 학습 큐 UI | 큐 표시 항목, GPU 규칙, 실험 관리 화면 설계 |

## 관련 공통 문서

- `../../../product/feature_spec_template.md`
- `../../../api/platform_api.md`
- `../../../data/dataset_snapshot_policy.md`

## 현재 근거 문서 (레포 내부)

- `ingradient-platform/docs/reference/export-feature.md`
- `ingradient-platform/docs/reference/training-feature.md`
- `ingradient-platform/docs/plan/edge-integration-checklist.md`
- `ingradient-platform/docs/plan/role-permission-ui.md`
