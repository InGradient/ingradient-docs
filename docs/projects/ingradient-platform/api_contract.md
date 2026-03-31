# ingradient-platform API Contract

## API 개요

Backend는 FastAPI 기반 REST API를 제공한다. Frontend는 Vite 프록시를 통해 `/api/*` 경로로 접근한다.

- Base URL: `http://localhost:18083` (개발), 환경변수 `VITE_API_BASE`
- 인증: Bearer 토큰 (auth-service 발급 JWT)
- 형식: JSON, multipart/form-data (업로드)

## 주요 엔드포인트

### 인증

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/auth/me` | 현재 사용자 정보 (auth-service 프록시) |

실제 로그인/회원가입은 auth-service에서 직접 처리 (`VITE_IAM_BASE`).

### 이미지 (Asset)

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/images` | 이미지 목록 (cursor pagination, `?cursor=&limit=200&sort=created_at_desc`) |
| POST | `/api/upload` | 이미지 업로드 (multipart/form-data) |
| POST | `/api/images/delete` | 일괄 삭제 (`{ ids: [...] }`) |

### 프로젝트

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/projects` | 프로젝트 목록 |
| POST | `/api/projects` | 프로젝트 생성 |
| GET/PATCH/DELETE | `/api/projects/:id` | 프로젝트 CRUD |
| GET/POST/DELETE | `/api/projects/:id/members` | 멤버 관리 |

### 데이터셋

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/datasets` | 데이터셋 목록 |
| POST | `/api/datasets` | 데이터셋 생성 |
| POST | `/api/datasets/:id/copy` | 복사 |
| POST | `/api/datasets/:id/move` | 이동 |

### 클래스

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/classes` | 프로젝트 클래스 목록 |
| POST/PATCH/DELETE | `/api/classes` | 클래스 CRUD |

### 학습 (Training)

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/training/jobs` | 학습 Job 목록 |
| POST | `/api/training/jobs` | 학습 요청 생성 |
| GET | `/api/training/jobs/:id` | Job 상세 (진행률 포함) |

### 내보내기 (Export)

| Method | 경로 | 설명 |
|--------|------|------|
| POST | `/api/export` | COCO JSON 내보내기 요청 |
| GET | `/api/export/:id/download` | ZIP 다운로드 |

### Edge

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/api/edge/devices` | 디바이스 목록 |
| POST | `/api/edge/packages` | 패키지 생성/배포 |

### 기타

| Method | 경로 | 설명 |
|--------|------|------|
| GET | `/health` | 헬스체크 (`{ status: "ok" }`) |
| GET/POST | `/api/dashboard/preferences` | 대시보드 위젯 설정 |
| GET/POST | `/api/comments` | 이미지 코멘트 |

## 인증 규칙

- auth-service가 발급한 JWT를 `Authorization: Bearer {token}` 헤더로 전달
- Backend는 PyJWT로 토큰을 검증하고 `user_id`, `project_code`를 추출
- 프로젝트 수준 권한(읽기/쓰기/삭제)은 platform이 자체 해석

## 페이지네이션

- **Cursor 방식**: `?cursor={last_id}&limit=200`
- 응답에 `next_cursor` 포함 (없으면 마지막 페이지)
- 정렬: `sort=created_at_desc` (기본)

## 에러 응답

```json
{
  "detail": "에러 메시지",
  "code": "ERROR_CODE"
}
```

| HTTP 코드 | 용도 |
|-----------|------|
| 400 | 유효성 검증 실패 |
| 401 | 인증 실패 |
| 403 | 권한 부족 |
| 404 | 리소스 없음 |
| 409 | 비즈니스 충돌 (중복 등) |
| 500 | 서버 오류 |

## 삭제 정책

- `data.delete` 권한이 있는 사용자: 모든 이미지 삭제 가능
- 권한 없는 사용자: 본인이 업로드한 이미지만 삭제 가능
- 혼합 삭제 시: 삭제 가능한 것만 처리, 건너뛴 항목 목록 반환

## 관련 근거 문서

- `ingradient-platform/docs/plan/shared-api-client.md`
- `ingradient-platform/docs/reference/export-feature.md`
- `ingradient-platform/docs/reference/training-feature.md`
