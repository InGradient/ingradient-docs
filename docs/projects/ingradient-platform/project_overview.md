# ingradient-platform Project Overview

## 프로젝트 소개

`ingradient-platform`은 산업용 데이터 관리, 라벨링, AI 학습의 중심 제품이다. 이미지 데이터의 수집부터 정제, 학습, 배포까지의 전체 파이프라인을 하나의 웹 플랫폼에서 운영한다.

## 목적

- Dataset과 Asset(이미지)의 라이프사이클을 관리한다
- 클래스 분류 체계를 정의하고, 라벨링 워크플로우를 운영한다
- AI 학습(Training) 요청을 생성하고, 결과를 시각화한다
- Edge 디바이스로 모델과 데이터를 배포한다
- Export를 통해 외부 도구와 데이터를 교환한다

## 범위 / 비범위

**범위:**
- Dataset/Asset 관리 (업로드, 검색, 필터, 일괄 작업)
- 클래스 분류 체계 관리 (다국어: ko/en/vi)
- AI 학습 요청 생성 및 모니터링
- 모델 라이브러리 및 분석 결과 시각화
- COCO JSON 데이터셋 내보내기
- Edge 디바이스 패키지 배포
- 프로젝트별 멤버 관리, 역할/권한
- 대시보드 (커스터마이징 가능한 분석 위젯)

**비범위:**
- 인증/인가 primitive → `auth-service`
- 실제 GPU 학습 실행 → `ingradient-ai`
- 현장 디바이스 제어 → `ingradient-edge`
- 디자인 시스템 → `@ingradient/ui`

## 기술 스택

| 레이어 | 기술 | 비고 |
|--------|------|------|
| Frontend | Vite 5 + React 18 + TypeScript | SPA, styled-components |
| 상태관리 | Zustand (클라이언트), TanStack Query (서버) | |
| Backend | Python FastAPI + Uvicorn | 포트 18083 |
| Database | SQLite 3 (WAL mode) | backend/data.db |
| AI/ML | PyTorch, YOLO (ultralytics), scikit-learn | 학습/추론 |
| Test | Playwright (E2E), pytest (백엔드), tsx (API) | |
| Design System | `@ingradient/ui` | 별도 레포, 로컬 링크 |

## 주요 의존성

| 서비스 | 역할 | 연결 방식 |
|--------|------|-----------|
| auth-service | 인증, 세션, 멤버십 | JWT, REST API (`VITE_IAM_BASE`) |
| ingradient-ai | GPU 학습/추론 실행 | REST API |
| ingradient-edge | 현장 디바이스 에이전트 | Edge 패키지 배포 |
| `@ingradient/ui` | 공유 UI 컴포넌트/토큰 | npm 로컬 링크 (`file:`) |
| Cloud Storage | 이미지/모델 파일 저장 | 직접 접근 |

## 초기 성공 기준

- [ ] 이미지 업로드 → 라벨링 → 학습 요청의 E2E 흐름이 동작
- [ ] auth-service 연동으로 프로젝트별 멤버십/권한 분리
- [ ] COCO JSON export가 외부 학습 도구와 호환
- [ ] Edge 디바이스로 모델 패키지 배포

## 관련 SSOT 문서

- `../../api/platform_api.md`
- `../../data/dataset_snapshot_policy.md`
- 원본 근거: `ingradient-platform/docs/reference/export-feature.md`, `ingradient-platform/docs/reference/training-feature.md`
