# medilabel Project Overview

## 프로젝트 소개
`medilabel`은 의료 데이터 업로드, catalog 관리, segmentation, labeling viewer 연동을 제공하는 의료 도메인 제품이다.

## 목적
- DICOM / NIfTI 데이터를 관리한다
- 의료 라벨링과 segmentation workflow를 제공한다
- 향후 consensus와 on-prem 확장을 고려한다

## 범위 / 비범위
- 범위: catalog, uploads, segmentation import, class 관리, project settings, viewer 연계
- 비범위: 공통 auth primitive, 공통 AI execution, 공용 UI 라이브러리

## 주요 의존성
- auth-service
- ingradient-ai
- object storage
- `@ingradient/ui`

## 관련 SSOT 문서
- `../../product/multi_product_integration.md`
- `../../api/platform_api.md`
- 원본 근거: `/home/june/workspace/projects/medilabel/docs/plan.md`

