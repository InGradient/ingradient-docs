# Segmentation Import Policy

## 목적

`Medilabel`에서 segmentation import는 단순 파일 업로드가 아니다. 기존 source image에 segmentation asset과 annotation result를 연결하고, 사용자 최신 결과를 교체하는 동작이다.

## API 기준 흐름

1. `POST /segmentation-imports`로 import session 생성
2. presigned upload target 발급
3. segmentation 파일 업로드
4. `POST /segmentation-imports/{importId}/complete`
5. worker가 검증과 DB 반영 수행

## 권한

- `owner`
- `manager`
- 기본 `labeler`

단, `labeler_segmentation_import_allowed = false`면 거부할 수 있다.

## source image 결정 순서

1. `source_asset_id`
2. 내부 연결 정보
3. 동일 파일명 자동 매칭
4. 모호하면 수동 매칭

## 필수 검증

- integer mask 여부
- NaN / invalid value 없음
- 최소 1개 이상의 label value 존재
- `class_index` 정합성 검증

## 실패 예시

- `SEGMENTATION_NOT_INTEGER`
- `VALIDATION_ERROR`
- `CLASS_MAPPING_INVALID`

## DB 반영

- segmentation backing asset 생성
- `segmentations` row 생성
- `label_values` 저장
- 기존 `is_latest_for_user=true` 결과 해제
- 새 annotation result를 latest로 설정

## 즉시 반영 항목

- source image `segmentation_count`
- source image `labeler_count`
- Catalog의 `segmentation_linked=true`
- Viewer 기본 overlay가 새 latest를 가리키도록 갱신

## 운영상 주의

- import와 latest 교체는 transaction으로 묶는 편이 안전하다.
- class set 변경과 import가 동시에 일어날 때 재검증 기준이 필요하다.
- segmentation row를 실패 시 보관할지 삭제할지 정책을 분리해야 한다.

## 관련 문서

- `./viewer_overlay.md`
- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`
- `/home/june/workspace/projects/medilabel/docs/api-spec.md`
