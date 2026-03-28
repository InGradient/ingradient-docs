# ingradient-platform Project Overview

## 프로젝트 소개
`ingradient-platform`은 범용 데이터 관리, 라벨링, export, AI 요청 생성의 중심 제품이다.

## 목적
- dataset과 labeling workflow를 운영한다
- AI 학습 / 추론 요청의 control plane 역할을 한다
- edge나 다른 입력 소스에서 들어온 데이터를 관리한다

## 범위 / 비범위
- 범위: datasets, labeling, export, training request, result visualization
- 비범위: 공통 auth primitive, 실제 GPU execution, 현장 device control

## 주요 의존성
- auth-service
- ingradient-ai
- storage
- `@ingradient/ui`

## 관련 SSOT 문서
- `../../api/platform_api.md`
- `../../data/dataset_snapshot_policy.md`
- 원본 근거: `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`, `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`

