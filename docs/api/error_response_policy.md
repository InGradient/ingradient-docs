# Error Response Policy

- 문서명: Error Response Policy
- 목적: 서비스 전반의 에러 응답 형식을 통일한다.
- 적용 범위: auth, platform, ai, edge, medilabel
- 상태: Draft
- Owner: Platform Backend
- Reviewer: Repo API Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_principles.md`

## 기본 에러 구조
```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "User-facing message",
    "details": {},
    "correlation_id": "req-123"
  }
}
```

## HTTP 상태 코드 규칙
- `400`: validation or malformed request
- `401`: authentication required or token invalid
- `403`: permission denied
- `404`: resource not found
- `409`: conflict or invalid state transition
- `429`: quota or rate limit
- `500+`: internal or infrastructure failure

## 도메인 에러 코드 체계
- `AUTH_*`
- `PERMISSION_*`
- `DATASET_*`
- `JOB_*`
- `EDGE_SYNC_*`
- `MODEL_*`

## 로깅 연계 규칙
- 외부 메시지와 내부 로그 메시지는 분리한다
- 모든 에러는 correlation id로 추적 가능해야 한다
- validation details는 개발에 필요하지만 민감 정보는 제외한다

