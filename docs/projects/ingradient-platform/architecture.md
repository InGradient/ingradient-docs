# ingradient-platform Architecture

## 내부 구조 개요

ingradient-platform은 Frontend(React SPA)와 Backend(Python FastAPI)의 2-tier 구조다. Frontend는 Vite 개발 서버에서 Backend를 프록시하여 단일 오리진으로 동작한다.

```
┌─────────────────────────────────┐
│  Browser (React SPA)            │
│  Vite 5 + React 18 + TS        │
│  styled-components, Zustand     │
└─────────┬───────────────────────┘
          │ /api/*, /uploads/*, /health
          ▼
┌─────────────────────────────────┐
│  Backend (FastAPI + Uvicorn)    │
│  Port 18083                     │
│  PyTorch, YOLO, scikit-learn    │
├─────────────────────────────────┤
│  SQLite 3 (WAL mode)           │
│  backend/data.db                │
└─────────┬───────────────────────┘
          │
     ┌────┴────┐
     ▼         ▼
auth-service  ingradient-ai
(JWT 인증)    (GPU 학습)
```

## 모듈 구성

### Frontend (`frontend/`)

| 디렉토리 | 역할 |
|----------|------|
| `pages/` | 페이지 컴포넌트 (LoginPage, DashboardPage, CatalogPage, TrainingPage, ...) |
| `features/` | 기능별 모듈 (auth, catalog, gallery, classes, training, models, analysis, edge, settings, ...) |
| `store/` | Zustand 스토어 (useAuthStore, useProjectStore, useClassStore, useSettingsStore) |
| `api/` | API 클라이언트 (auth, projects, images, datasets, training, ...) |
| `components/` | 공용 UI 컴포넌트 |

### Backend (`backend/`)

| 디렉토리 | 역할 |
|----------|------|
| `routers/` | FastAPI 라우터 (images, datasets, projects, training, classes, export, edge, ...) |
| `services/` | 비즈니스 로직 |
| `main.py` | 앱 엔트리포인트, 미들웨어, CORS |
| `run.py` | Uvicorn 서버 시작 |

### 주요 페이지

| 페이지 | 경로 | 기능 |
|--------|------|------|
| Login | `/login` | 인증 (auth-service 연동) |
| Dashboard | `/` | KPI 위젯, 프로젝트 요약 |
| Catalog | `/catalog` | Dataset/Asset 관리, 업로드, 검색 |
| Gallery | `/gallery` | 이미지 상세 뷰어 |
| Class Manage | `/classes` | 클래스 분류 체계 CRUD |
| Training | `/training` | 학습 요청 생성, 큐, 진행률 |
| Models | `/models` | 모델 라이브러리, 버전 관리 |
| Analysis | `/analysis` | 추론 결과 시각화 |
| Edge | `/edge` | Edge 패키지 관리 |
| Settings | `/settings` | 프로젝트/멤버 설정 |

## 외부 인터페이스

| 대상 | 용도 | 프로토콜 |
|------|------|----------|
| auth-service | 로그인, 세션, 멤버십 확인 | REST + JWT (Bearer) |
| ingradient-ai | 학습 job 생성, 추론 결과 조회 | REST |
| ingradient-edge | Edge 패키지 배포, 디바이스 등록 | REST + 패키지 파일 (.ige) |
| Cloud Storage | 이미지/모델 파일 저장 | 직접 접근 |

## 내부 데이터 흐름

### 학습 파이프라인

```
이미지 업로드 → Asset 생성 + 썸네일 생성
       ↓
Dataset에 배정 → 클래스/라벨 할당
       ↓
학습 요청 생성 → ingradient-ai에 전달
       ↓
학습 완료 → 모델 등록 → 분석 결과 시각화
       ↓
Edge 패키지 생성 → 디바이스 배포
```

### 인증 흐름

```
로그인 요청 → auth-service (JWT 발급)
       ↓
Frontend: useAuthStore에 토큰 저장
       ↓
API 요청 시 Bearer 토큰 자동 첨부
       ↓
만료 60초 전 자동 갱신
```

## 확장 포인트

- **Shared API Client**: auth-service 연동 표준화 (현재 진행 중)
- **Role/Permission UI**: 프로젝트별 세분화된 권한 관리
- **Edge Integration**: 오프라인 동기화, 세션 분석 심화
- **다국어**: 클래스 display name (ko/en/vi) 이후 UI 전체 i18n 확대
