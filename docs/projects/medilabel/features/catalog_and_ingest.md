# Catalog And Ingest

## 목적

`Medilabel`의 Catalog는 업로드와 탐색을 동시에 수행하는 메인 데이터 허브다. 이 문서는 의료영상 업로드, ingest, segmentation import 흐름을 정리한다.

## 지원 대상

- DICOM series
- NIfTI single file
- segmentation import 파일

## 기본 row 단위

- DICOM은 `Series`
- NIfTI는 파일 1개

즉 Catalog의 기본 row는 하나의 작업 대상 이미지 데이터다.

## 업로드 우선순위

1. 폴더 업로드
2. drag and drop
3. ZIP 업로드

## ingest 흐름

1. 사용자가 upload를 시작한다.
2. backend가 ingest job을 생성한다.
3. UI는 polling으로 상태를 본다.
4. 상태는 `queued -> running -> succeeded` 또는 실패로 전이된다.
5. 완료 후 catalog와 recent activity를 갱신한다.

## segmentation import 규칙

- voxel 값은 정수여야 한다.
- 각 정수 값은 class label value와 연결될 수 있어야 한다.
- 비정수 mask는 초기 버전에서 허용하지 않는다.
- 동일 파일명 기반 자동 매칭은 충돌 시 중단하고 수동 연결로 넘긴다.

## grouped view

- dataset
- patient
- study

## 운영상 주의

- 대용량 의료영상 업로드는 background worker와 storage 정책을 같이 봐야 한다.
- ingest 실패 재시도와 partial upload 정리 기준을 명확히 해야 한다.
- PHI 정책과 다운로드 정책은 catalog 단계부터 연결돼야 한다.

## 관련 문서

- `../architecture.md`
- `../operations.md`
- `/home/june/workspace/projects/medilabel/docs/plan.md`
- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`
