# ingradient-platform Architecture

## 내부 구조 개요
- web app
- backend APIs
- dataset and labeling domain
- export and AI request orchestration

## 모듈 구성
- project and permission UI
- dataset and asset management
- labeling workflow
- export pipeline
- AI request integration

## 외부 인터페이스
- auth-service for identity
- ingradient-ai for training and inference jobs
- edge integration for uploaded assets

## 내부 데이터 흐름
- 사용자 요청 → dataset / labeling state 변경 → snapshot or export 생성 → AI 또는 storage 연계

## 확장 포인트
- shared API client
- role / permission UI 강화
- edge integration 심화

