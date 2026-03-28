# ingradient-platform Roadmap

## 현재 범위

현재 문서 기준으로 중요한 축은 아래다.

- dataset and labeling product
- export workflow
- training integration
- role / permission UI
- edge integration
- shared API client
- UI migration

## 단계별 계획

### 1. 데이터와 권한 흐름 안정화

- role matrix 명확화
- project / dataset / class ownership 정리
- 권한별 UI와 backend enforcement 일치

### 2. export와 training workflow 강화

- sample 기반 export 규칙 고정
- training snapshot과 GPU queue 흐름 고도화

### 3. edge integration 확장

- edge package export
- edge import 검증
- offline 환경 정책 정리

### 4. shared UI와 API 체계 정리

- shared API client
- `@ingradient/ui` 기반 화면 정리
- 문서와 contract 정합성 강화

## 우선순위

1. 권한과 데이터 구조
2. export / training 핵심 기능
3. edge integration
4. 공통화와 구조 개선

## 기술 부채

- edge 연동은 문서 대비 구현 공백이 남아 있다
- role / permission 체계가 더 강한 SSOT로 정리될 필요가 있다
- 기능 문서가 repo 안에 분산되어 있어 추적 비용이 있다

## 미결정 사항

- dataset별 세부 접근 제어 확장 시점
- edge import conflict 정책 세부
- 일부 UI migration 범위

