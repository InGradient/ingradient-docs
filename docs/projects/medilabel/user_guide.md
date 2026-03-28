# medilabel User Guide

## 대상 사용자

- 의료 데이터 관리자
- 라벨러
- 리뷰어

## 시작하기

1. 로그인 또는 회원가입
2. 프로젝트 목록에서 프로젝트 선택
3. 기본적으로 Catalog 화면으로 진입

## 주요 사용 흐름

### Catalog

- search와 filter 사용
- dataset / patient / study 기준 그룹 전환
- asset 선택 후 viewer 진입
- move, copy, delete 같은 row action 사용

### Upload and Ingest

- DICOM, NIfTI, segmentation 업로드
- 업로드 후 status가 `processing`에서 `ready`로 바뀌는지 확인

### Class

- class 생성, 수정, 삭제
- label value 관리

### Settings

- general
- project
- model

## 자주 묻는 문제

- 업로드 후 row가 바로 안 보이거나 status가 오래 `processing`
- segmentation이 source image와 자동 매칭되지 않음
- viewer에서 기대한 overlay가 안 보임
- 프로젝트 권한으로 특정 설정이 보이지 않음

## 관련 링크

- `/home/june/workspace/projects/medilabel/docs/frontend-pages.md`
- `/home/june/workspace/projects/medilabel/docs/upload-ingest-flow.md`
- `/home/june/workspace/projects/medilabel/docs/api-spec.md`

