# Dataset Export

## 목적

`ingradient-platform`의 export 기능은 dataset 안의 이미지와 consensus label 결과를 외부 학습, 분석, 공유, 백업 용도로 패키징해 내려받게 하는 기능이다.

## 대상 결정 규칙

- 개별 선택이 없으면 선택된 dataset 내부 전체 데이터를 export한다.
- 개별 row 선택이 있으면 선택된 데이터만 export한다.
- 여러 dataset을 동시에 선택하면 결과를 합쳐 export한다.
- 동일 sample이 여러 dataset에 있어도 sample은 중복 export하지 않는다.
- 동일 sample에 대한 label 결과는 하나로 합쳐 export한다.

## export 단위

- 기본 단위는 `Sample`
- sample 아래에 연결된 이미지 묶음을 그대로 유지한다.
- sample 폴더명은 원본 timestamp를 사용한다.
- 내부 파일명과 확장자는 원본을 유지한다.

## 사용자 옵션

- Export Range
  - selected items
  - all data in selected datasets
- Export Type
  - images + labels
  - labels only
- Label Format
  - COCO JSON 기반 custom format

## 결과물 구조

- ZIP 파일로 내려준다.
- `images + labels`면 `samples/`, `annotations/annotations.json`, `export_info.json`을 포함한다.
- `labels only`면 `annotations/annotations.json`, `export_info.json`만 포함한다.

## label 규칙

- export 대상 label은 consensus 결과 기준이다.
- 임시 draft, 개인 작업 중간 저장본은 제외한다.
- bounding box 좌표는 pixel 기준으로 내보낸다.

## 운영상 주의

- export는 data retention과 audit 대상이다.
- 대용량 export는 background job으로 빼고 진행 상태를 보여주는 편이 안전하다.
- downstream training 시스템은 export 구조를 import 기준으로 기대하게 되므로 형식 변경 시 버전 관리가 필요하다.

## 관련 문서

- `../api_contract.md`
- `../operations.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`
