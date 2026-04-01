# /2-implement-api Plan 예시

## API 설계

### 1. GET /api/organizations/:orgId/members
- 목적: 조직의 사용자 목록 조회
- TODO: members-table.tsx:42
- 권한: Owner, Admin

Query:
| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| page | number | N | 기본값 1 |
| pageSize | number | N | 기본값 20 |
| search | string | N | 이름/이메일 검색 |
| role | string | N | 필터: owner, admin, member |
| status | string | N | 필터: active, pending, inactive |

성공 응답 (200):
```json
{
  "data": {
    "items": [
      {
        "id": "member_id",
        "role": "admin",
        "status": "active",
        "created_at": "2026-01-15T09:00:00Z",
        "user": {
          "id": "user_id",
          "name": "홍길동",
          "email": "hong@example.com"
        }
      }
    ],
    "total": 42,
    "page": 1,
    "pageSize": 20
  }
}
```

에러:
| 상황 | Status | Error Code |
|------|--------|------------|
| 인증 안 됨 | 401 | UNAUTHORIZED |
| 권한 없음 | 403 | FORBIDDEN |
| 조직 없음 | 404 | ORG_NOT_FOUND |

### 2. PUT /api/organizations/:orgId/members/:memberId/role
- 목적: 사용자 역할 변경
- TODO: members-table.tsx:67
- 권한: Owner만
- 기존 API: 없음 (신규)

Request Body:
| 필드 | 타입 | 필수 | validation |
|------|------|------|-----------|
| role | string | Y | enum: owner, admin, member |

성공 응답 (200):
```json
{
  "data": {
    "id": "member_id",
    "role": "admin",
    "updated_at": "2026-04-01T09:00:00Z"
  }
}
```

에러:
| 상황 | Status | Error Code |
|------|--------|------------|
| 자기 자신의 역할 변경 | 400 | CANNOT_CHANGE_OWN_ROLE |
| 마지막 Owner 변경 | 400 | LAST_OWNER_CANNOT_CHANGE |
| 권한 없음 | 403 | FORBIDDEN |
| 멤버 없음 | 404 | MEMBER_NOT_FOUND |
