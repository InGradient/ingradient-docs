# Viewer Overlay

## 목적

`/lab/viewer`는 Catalog에서 선택한 자산을 실제로 작업하는 3D 의료영상 라벨링 화면이다. 이 문서는 overlay 기본 선택, 저장, import/export, tool 제약을 정리한다.

## viewer 진입 시 필요한 것

- asset 메타데이터
- primary variant
- classes
- overlay policy
- default annotation result

## 기본 overlay 정책

- `my_latest_first`
- 저장된 내 latest annotation result가 기본 overlay다.
- 필요하면 consensus나 다른 annotator 결과도 목록에서 전환 가능하다.

## 주요 도구

- Cursor
- Brush
- Eraser
- 3D Fill

## 저장 규칙

- 라벨 변경 시 viewer save API를 호출한다.
- segmentation이 완전히 비면 clear API로 처리할 수 있다.
- 저장 결과는 `is_latest_for_user=true`가 된다.

## import/export

- label import 지원
- segmentation `.nii.gz` export 지원
- export할 segmentation이 없으면 경고 표시
- STL export는 아직 준비 중이다.

## UI/레이아웃

- 2x2 grid
- 1x3
- 1x1
- single view
- axial / sagittal / coronal / 3D volume 조합

## 제약

- oblique MPR에서는 일부 도구 사용 제한
- 3D Fill은 두 뷰의 bbox가 필요
- 잠긴 class에는 3D Fill 적용 불가
- viewer 도구 설정과 window 값은 project preference로 저장

## overlay 목록 API

- `GET /viewer/assets/{assetId}`
- `GET /viewer/assets/{assetId}/overlays`
- `POST /viewer/assets/{assetId}/save`

## 관련 문서

- `./segmentation_import_policy.md`
- `/home/june/workspace/projects/medilabel/docs/frontend-pages.md`
- `/home/june/workspace/projects/medilabel/docs/api-spec.md`
