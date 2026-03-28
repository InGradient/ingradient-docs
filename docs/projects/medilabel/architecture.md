# medilabel Architecture

## 내부 구조 개요

medilabel은 의료 영상 catalog와 labeling workflow를 제공하는 product로, 아래 모듈을 중심으로 구성된다.

- auth entry
- project selection
- workspace shell
- catalog and dataset panel
- upload and ingest flow
- class management
- settings
- viewer integration
- ai backend integration

## 주요 화면 구조

### `/login`, `/signup`

- 이메일 기반 인증
- 로그인 후 `/projects`로 이동

### `/projects`

- 접근 가능한 프로젝트 목록
- 새 프로젝트 생성
- 계정 전환과 로그아웃

### `/projects/[projectSlug]/catalog`

- 검색, 필터, 컬럼 선택
- dataset / patient / study grouping
- upload, move, copy, delete
- viewer 진입

### `/projects/[projectSlug]/class`

- class definition과 label value 관리

### `/lab/viewer`

- 실제 라벨링과 segmentation overlay 확인

## ingest 구조

업로드와 ingest는 분리된다.

1. upload session 생성
2. 실제 파일 업로드
3. 업로드 완료 통지
4. ingest job 생성
5. worker가 parsing, metadata extraction, variant 생성
6. catalog status가 `pending`, `processing`, `ready`, `failed`로 전이

## 데이터 특성

- DICOM series
- NIfTI single file
- segmentation import

운영상 권장 경로:

- 장기 저장과 viewer / AI 입력은 canonical NIfTI 기준
- sidecar JSON으로 display name, patient id, study description 같은 메타데이터를 보강 가능

## 확장 포인트

- consensus
- richer collaboration
- on-prem 또는 electron 기반 배포
- local auth 또는 isolated mode

