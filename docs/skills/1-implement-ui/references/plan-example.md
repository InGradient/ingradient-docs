# /1-implement-ui Plan 예시

### 사용자 목록 화면

**테이블:**
| 컬럼 | 타입 | 데이터 소스 | 비고 |
|------|------|-------------|------|
| 이름 | text | member.user.name | |
| 이메일 | text | member.user.email | |
| 역할 | 뱃지 | member.role | Owner=blue, Admin=purple, Member=gray |
| 상태 | 뱃지 | member.status | active=green, pending=yellow, inactive=red |
| 가입일 | date | member.created_at | YYYY-MM-DD 형식 |
| 액션 | - | - | 역할 변경 드롭다운, 비활성화 버튼 |

**버튼:**
- [사용자 초대] → 초대 모달 열기
- [역할 변경] 드롭다운 → Owner, Admin, Member 선택지 → // TODO: API 연동 - PUT /api/members/:id/role
- [비활성화] → DangerDialog("이 사용자를 비활성화하시겠습니까?") → // TODO: API 연동 - PUT /api/members/:id/deactivate

**상태별 화면:**
- 빈 상태: "등록된 사용자가 없습니다" + [사용자 초대] 버튼
- 검색 결과 없음: "검색 결과가 없습니다"
- 로딩: 테이블 스켈레톤
- 에러: 전역 토스트
