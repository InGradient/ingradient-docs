# 클래스 관리 (Class Management)

## 기능 개요

프로젝트별 클래스 분류 체계를 정의하고 관리한다. 클래스는 라벨링, 학습, 분석의 기준이 되는 핵심 엔티티다.

## 문제 정의

산업 현장마다 분류 기준이 다르므로 프로젝트별로 독립된 클래스 체계가 필요하다. 다국어 환경(한/영/베)에서 일관된 클래스 이름을 제공해야 한다.

## 범위 / 비범위

- **포함**: 클래스 CRUD, 다국어 display name, 색상 지정, 참조 이미지, 잠금/보관, 클래스별 통계
- **제외**: 라벨링 작업 자체 → Gallery, COCO 클래스 매핑 → Export

## 사용자 시나리오

### 클래스 체계 정의

- **기본 흐름**:
  1. `/classes` 페이지 진입 → 좌측에 기존 클래스 목록 표시
  2. "클래스 추가" → 이름, 색상 입력
  3. 다국어 Display Name 설정 (ko, en, vi)
  4. 설명 추가 (선택)
  5. 참조 이미지 업로드 (대표 예시, 드래그앤드롭)
- **예외 흐름**:
  - 동일 이름 클래스 → 중복 에러
  - 사용 중인 클래스 삭제 시도 → 경고 (라벨 연결 있음)

### 클래스 관리

- **잠금 (Lock)**: 실수로 수정되는 것을 방지. 잠금된 클래스는 이름/색상 변경 불가
- **보관 (Archive)**: 라벨링 UI에서 숨김. 기존 라벨 데이터는 유지
- **참조 이미지**: 클래스의 대표 예시 이미지. 라벨러가 기준으로 참고

## UI / UX 방향

| 영역 | 구성 |
|------|------|
| 좌측 사이드바 | 클래스 목록 (색상 스와치 + 이미지 수), 검색, 추가 버튼 |
| 우측 상세 패널 | 이름/색상 편집, 다국어 display name, 설명, 참조 이미지, 잠금/보관 토글 |
| 하단 | 해당 클래스의 샘플 이미지 그리드 (바운딩 박스 오버레이) |

- COCO 모델 매핑 (YOLOv8/v9/v10) 표시
- AI 모델의 클래스 할당 정보

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `GET /api/projects/{id}/classes` | 클래스 목록 |
| `POST /api/projects/{id}/classes` | 생성 |
| `PATCH /api/projects/{id}/classes/{classId}` | 수정 |
| `DELETE /api/projects/{id}/classes/{classId}` | 삭제 |
| `GET /api/projects/{id}/classes/{classId}/detail` | 통계 |
| `GET /api/projects/{id}/classes/{classId}/images` | 샘플 이미지 |
| `POST /api/projects/{id}/classes/{classId}/reference-image` | 참조 이미지 설정 |

- 클래스 식별자: `class_key` (내부), `display_names` (다국어 JSON)
- Edge 패키지에 `classes.json`으로 포함 → `class_id` 일관성 필수

## 테스트 계획

- 클래스 생성 → 라벨링 UI에 즉시 반영
- 다국어 display name 저장/표시
- 잠금된 클래스 편집 시도 → 차단
- 보관된 클래스 → 라벨링 UI에서 숨김, 기존 라벨은 유지
- Edge export 후 class_id 일치 확인
