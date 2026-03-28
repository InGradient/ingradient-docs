# medilabel Release Notes

## Release Policy

`medilabel`은 2026-03-27 기준으로 초기 제품 설계와 부분 구현이 함께 있는 상태다. 현재는 stable version release보다 planning milestone과 운영 영향이 큰 흐름을 먼저 기록한다.

## 2026-03-27. Product Planning v4 Milestone

### Included

- Organization / Project / Dataset / Image Data 계층 구조 정리
- `Owner / Manager / Viewer / Labeler` 권한 체계 단순화
- DICOM series, NIfTI single file, segmentation import 흐름 정리
- PHI 정책, segmentation label value, grouped view 방향 정리

### Why It Matters

- Catalog, Settings, Viewer, ingest pipeline이 같은 데이터 단위를 보게 된다.
- 의료영상 특화 정책을 일반 annotation 제품과 분리해서 기록할 수 있다.

## 2026-03-27. Upload And Ingest Flow Milestone

### Included

- 업로드 후 ingest job 생성, polling, 상태 전이 흐름 정리
- segmentation import와 원본 asset 연결 규칙 정리
- catalog refresh와 recent activity 반영 기준 정의

### Operational Impact

- ingest 실패 재시도와 partial upload 정리 규칙이 필요하다.
- 대용량 파일 스토리지와 background worker 정책이 실제 구현과 함께 검증돼야 한다.

## Release Readiness Gap

- production-grade DB/storage 운영 체계 미완성
- role enforcement와 settings 세부 동작 미완성
- viewer overlay 저장/불러오기 전체 연결 미완성

## Source Documents

- `/home/june/workspace/projects/medilabel/docs/plan.md`
- `/home/june/workspace/projects/medilabel/docs/deployment.md`
- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`
- `/home/june/workspace/projects/medilabel/docs/test-scenarios.md`
