# 다중 이미지 그룹핑 (Multi-Image Grouping)

## 기능 개요

여러 장의 이미지를 하나의 라벨링 단위로 묶어서 관리하는 기능이다. 산업 검사에서 동일 대상을 여러 각도/조건으로 촬영한 이미지를 하나의 시퀀스로 다룬다.

## 문제 정의

편광 검사(Deflectometry) 등 산업 현장에서는 하나의 검사 대상에 대해 여러 장의 이미지(white, gradient_x, gradient_y 등)를 촬영한다. 이를 개별 이미지가 아닌 하나의 그룹으로 관리하고 라벨링해야 한다.

## 범위 / 비범위

- **포함**: 시퀀스 그룹핑, 정규식 기반 그룹 매칭, 그룹 대표 이미지, 그룹 단위 탐색
- **제외**: 시퀀스 내 이미지 간 관계 분석 → 향후

## 프로젝트 설정

프로젝트 설정에서 활성화:

| 설정 | 설명 |
|------|------|
| `multi_image_group_enabled` | 그룹핑 활성화 여부 |
| 그룹핑 정규식 패턴 | 파일명에서 그룹 ID를 추출하는 regex |

## 사용자 시나리오

### 그룹 이미지 탐색

- **기본 흐름**:
  1. 갤러리에서 그룹화된 이미지 표시 (그룹 카운트 표시)
  2. 그룹 대표 이미지 클릭 → 상세 모달에서 시퀀스 이미지 연속 탐색
  3. 시퀀스 내 이미지: `sequence_id`, `sequence_step`, `sequence_kind` (white/gradient_x/gradient_y)
  4. 최대 5장까지 하나의 그룹

## 이미지 시퀀스 속성

| 필드 | 타입 | 설명 |
|------|------|------|
| `sequence_id` | string | 그룹 식별자 |
| `sequence_step` | number | 그룹 내 순서 |
| `sequence_kind` | string | 이미지 타입 (white, gradient_x, gradient_y 등) |

## Deflectometry 모드

프로젝트의 `deflectometry_enabled` 설정 시:
- 편광 검사 전용 워크플로우 활성화
- Edge 분석에서 시퀀스 스텝별 소요 시간 추적
- 대시보드에 Deflectometry 전용 위젯 추가

## 데이터 / API / 권한 영향

- 이미지 메타데이터에 `sequence_id`, `sequence_step`, `sequence_kind` 저장
- 학습 시 이미지 타입 기반 필터링 지원 (white 제외 추천)
- Edge 패키지에 시퀀스 정보 포함

## 테스트 계획

- 그룹핑 정규식 설정 → 파일명 기반 자동 그룹핑
- 그룹 내 이미지 연속 탐색
- 학습 시 이미지 타입 필터 동작
- Deflectometry 모드 대시보드 위젯 표시
