# ingradient-platform Deployment

## 실행 형태

`ingradient-platform`은 Frontend(React SPA) + Backend(Python FastAPI)의 2-tier 구조다.

| 컴포넌트 | 기술 | 포트 |
|----------|------|------|
| Frontend | Vite + React | 3001 (dev), static 빌드 (prod) |
| Backend | FastAPI + Uvicorn | 18083 |
| Database | SQLite 3 (WAL) | 파일 기반 (`data.db`) |

## 환경변수

### Frontend

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `VITE_API_BASE` | `http://127.0.0.1:18083` | Backend API URL |
| `VITE_IAM_BASE` | `http://localhost:18081` | auth-service URL (미설정 시 로컬 폴백) |
| `VITE_AUTH_PROJECT_CODE` | `ingradient-platform` | auth-service 프로젝트 코드 |

### Backend

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `HOST` | `0.0.0.0` | 바인드 주소 |
| `PORT` | `18083` | 서버 포트 |
| `AUTH_SERVICE_BASE` | `https://auth.ingradient.ai` | auth-service URL |
| `AUTH_SERVICE_PROJECT_CODE` | `ingradient-platform` | 프로젝트 코드 |
| `INGRADIENT_DATA_DB` | `backend/data.db` | SQLite DB 경로 |

## 로컬 개발

```bash
# 1. 사전 설치 (ingradient-ui 필요)
bash dev-setup.sh

# 2. 환경변수 설정
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# 3. 개발 서버 (Frontend + Backend 동시)
npm run dev
```

Frontend가 Vite 프록시로 `/api/*`, `/uploads/*`, `/health`를 Backend(18083)로 전달한다.

## 프로덕션 빌드

### Frontend

```bash
npm run build -w ingradient-data
# 결과: frontend/dist/ (정적 파일, 웹 서버에서 서빙)
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python run.py
# 또는: uvicorn main:app --host 0.0.0.0 --port 18083
```

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`):
- **트리거**: push/PR to `main`
- **Frontend**: Node 20 — lint + typecheck
- **Backend**: Python 3.11 — pytest
- **Security**: npm audit (high severity)

## 인프라 요구사항

| 항목 | 필요 |
|------|------|
| Platform DB | SQLite (파일), 별도 DBMS 불필요 |
| Object Storage | 이미지/모델 파일 저장 |
| auth-service | 인증/인가 (별도 배포) |
| ingradient-ai | AI 학습/추론 (별도 배포, 선택) |

## 배포 시 체크리스트

### 일반 코드 배포

- [ ] auth-service 연동 smoke check (로그인 → /api/auth/me)
- [ ] Dataset/Asset CRUD 기본 동작
- [ ] Export/Training 요청 흐름

### 데이터 구조 변경 포함 배포

- [ ] DB migration 적용 (`_schema_version` 확인)
- [ ] Snapshot/Export 형식 호환성
- [ ] Edge import/export 포맷 영향 확인

### Edge 연동 관점

- [ ] Edge package export API 동작
- [ ] dataset_id / class_id 계약 유지
- [ ] Import 검증 로직 정상 동작

## 관련 근거 문서

- `ingradient-platform/docs/plan/edge-integration-checklist.md`
- `ingradient-platform/docs/plan/edge-integration-status.md`
