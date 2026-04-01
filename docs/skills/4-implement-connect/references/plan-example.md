# /4-implement-connect Plan 예시

## TODO 교체 계획

### 1. 사용자 목록 조회 — members-table.tsx:42
- mock data 삭제: mocks/members.ts
- API: GET /api/orgs/:orgId/members?page={page}&pageSize={pageSize}&search={search}
- orgId: 현재 조직 컨텍스트에서 가져옴
- 응답 매핑:
  | API 필드 | UI prop |
  |----------|---------|
  | data.items[].user.name | 이름 컬럼 |
  | data.items[].user.email | 이메일 컬럼 |
  | data.items[].role | 역할 뱃지 |
  | data.items[].status | 상태 뱃지 |
  | data.items[].created_at | 가입일 (YYYY-MM-DD 포맷 변환) |
  | data.total | 페이지네이션 total |
- 로딩: 최초 로드 시 테이블 스켈레톤, 페이지 전환 시 스피너
- 에러: 전역 토스트 "사용자 목록을 불러오지 못했습니다"
- 빈 상태: data.items.length === 0일 때 기존 empty 상태 유지

### 2. 역할 변경 — members-table.tsx:67
- API: PUT /api/orgs/:orgId/members/:memberId/role
- body: { role: 드롭다운에서 선택한 값 }
- 로딩: 드롭다운 비활성화
- 성공: 토스트 "역할이 변경되었습니다" + 목록 refetch
- 에러:
  | Error Code | 사용자 메시지 |
  |------------|-------------|
  | CANNOT_CHANGE_OWN_ROLE | "자신의 역할은 변경할 수 없습니다" |
  | LAST_OWNER_CANNOT_CHANGE | "조직에 Owner가 최소 1명 필요합니다" |
  | FORBIDDEN | "권한이 없습니다" |

### 3. 비활성화 — members-table.tsx:89
- API: PUT /api/orgs/:orgId/members/:memberId/deactivate
- DangerDialog 확인 후 호출
- 로딩: DangerDialog 확인 버튼 로딩 상태
- 성공: 토스트 "사용자가 비활성화되었습니다" + DangerDialog 닫기 + 목록 refetch
- 에러:
  | Error Code | 사용자 메시지 |
  |------------|-------------|
  | CANNOT_DEACTIVATE_OWNER | "Owner는 비활성화할 수 없습니다" |
  | FORBIDDEN | "권한이 없습니다" |
