# 프로젝트 관리 (Project Management)

## 기능 개요

프로젝트 생성, 선택, 전환을 관리하는 기능이다. 프로젝트는 데이터, 클래스, 멤버, 모델을 묶는 최상위 단위다.

## 문제 정의

여러 검사 대상이나 고객사별로 독립적인 데이터와 설정을 유지해야 하므로, 멀티 프로젝트를 지원하고 프로젝트 간 빠르게 전환할 수 있어야 한다.

## 범위 / 비범위

- **포함**: 프로젝트 생성 (선택적 첫 데이터셋), 프로젝트 목록/선택/전환, 프로젝트별 격리
- **제외**: 프로젝트 설정/멤버/권한 → Settings, 조직 관리 → Admin

## 사용자 시나리오

### 프로젝트 생성

- **기본 흐름**:
  1. `/create-project` 페이지에서 프로젝트 이름, 설명 입력
  2. (선택) 첫 데이터셋 함께 생성
  3. 생성 완료 → 새 프로젝트로 자동 전환

### 프로젝트 전환

- 헤더의 프로젝트 선택 드롭다운에서 전환
- 선택한 프로젝트 ID는 localStorage에 저장 (재방문 시 유지)
- 전환 시 데이터셋, 클래스, 멤버 등 모든 컨텍스트가 해당 프로젝트로 변경

## 프로젝트 속성

| 속성 | 설명 |
|------|------|
| name | 프로젝트 이름 |
| description | 설명 |
| deflectometry_enabled | 편광 검사 모드 |
| multi_image_group_enabled | 다중 이미지 그룹핑 |
| require_labeling | 라벨링 필수 |
| require_min_bbox_count | 최소 바운딩 박스 수 |
| block_next_without_labeling | 라벨 없으면 다음 진행 차단 |
| block_preview_without_labeling | 라벨 없으면 미리보기 차단 |
| show_filename_in_gallery | 갤러리에서 파일명 표시 |
| show_bbox_class_names_in_detail | 상세 모달에서 박스 위 클래스명 표시 |

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `GET /api/projects` | 프로젝트 목록 |
| `POST /api/projects` | 생성 |
| `PATCH /api/projects/{id}` | 수정 |
| `DELETE /api/projects/{id}` | 삭제 |

- Zustand `useProjectStore`: 프로젝트 목록, 현재 프로젝트 ID 관리
- 프로젝트 생성은 인증된 모든 사용자 가능
- 프로젝트 삭제는 Owner만

## 테스트 계획

- 프로젝트 생성 → 목록에 표시 → 자동 전환
- 프로젝트 전환 → 데이터셋/클래스/멤버 컨텍스트 변경 확인
- 새로고침 → 마지막 선택 프로젝트 유지 (localStorage)
