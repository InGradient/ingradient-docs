# Platform API

- 문서명: Platform API
- 목적: ingradient-platform의 핵심 API 경계를 정의한다.
- 적용 범위: dataset, project, labeling, export, AI 요청
- 상태: Draft
- Owner: Platform Backend
- Reviewer: Product / AI Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_principles.md`, `../data/dataset_snapshot_policy.md`

## 핵심 리소스
- projects
- datasets
- labeling assets and annotations
- exports
- training requests and result links

## 프로젝트와 데이터셋 API
- 프로젝트 생성, 목록, 설정 조회
- dataset 생성, 목록, 상세, 상태 조회
- 검색, 필터, pagination, 정렬 규칙은 공통 원칙을 따른다

## 라벨링과 승인 API
- annotation 저장
- reviewer or consensus 상태 변경
- 승인, 반려, 재작업 상태 기록

## export와 import API
- export job 생성
- export status와 artifact 조회
- import 요청과 결과 상태 관리

## AI 요청 API
- training / inference 요청 생성
- snapshot 또는 입력 reference 지정
- ai job id와 platform side mapping 유지

## Edge 연동 API
- edge에서 올라온 asset 등록
- sync 상태와 업로드 완료 상태 반영

