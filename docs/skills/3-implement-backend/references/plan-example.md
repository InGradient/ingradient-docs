# /3-implement-backend Plan 예시

## DB 변경

### members 테이블 (기존)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid | PK |
| user_id | uuid | FK → users.id |
| org_id | uuid | FK → organizations.id |
| role | enum('owner','admin','member') | |
| created_at | timestamp | |

### 변경: status 컬럼 추가
| 컬럼 | 타입 | 기본값 | nullable | 설명 |
|------|------|--------|----------|------|
| status | enum('active','pending','inactive') | 'active' | N | 멤버 상태 |

- migration 전략: nullable로 추가 → backfill 'active' → NOT NULL 제약 추가
- rollback: nullable로 되돌리면 됨 (데이터 손실 없음)

## 기존 코드 패턴

    - route 위치: src/modules/{도메인}/routes/{도메인}.routes.ts
    - service 위치: src/modules/{도메인}/services/{도메인}.service.ts
    - validation: zod schema, src/modules/{도메인}/schemas/
    - 인증 미들웨어: authMiddleware → req.user에 userId, orgId 주입
    - 권한 검증: requireRole('owner', 'admin') 미들웨어
    - 에러 처리: AppError 클래스, HttpStatus enum
    - 로깅: logger.info({ module: '도메인', ...context })
    - 테스트: __tests__/{도메인}.service.test.ts, supertest로 route 테스트

## Service 로직

### MembersService.listMembers(orgId, query)
- 목적: 조직 멤버 목록 조회 (pagination, filter, search)
- 비즈니스 규칙:
  - search: user.name 또는 user.email에 LIKE 검색
  - filter: role, status 필터
  - 정렬: created_at DESC 기본
- user 관계를 join해서 name, email을 포함한다

### MembersService.changeRole(orgId, memberId, newRole, requesterId)
- 목적: 멤버 역할 변경
- 비즈니스 규칙:
  - 요청자가 Owner여야 한다
  - 자기 자신의 역할은 변경할 수 없다 → CANNOT_CHANGE_OWN_ROLE
  - 조직의 마지막 Owner는 역할 변경 불가 → LAST_OWNER_CANNOT_CHANGE
- 호출: AuditService.log({ action: 'member.role.changed', ... })

### MembersService.deactivate(orgId, memberId, requesterId)
- 목적: 멤버 비활성화
- 비즈니스 규칙:
  - 요청자가 Owner 또는 Admin이어야 한다
  - Owner는 비활성화 불가 → CANNOT_DEACTIVATE_OWNER
  - status를 'inactive'로 변경
- 연쇄 동작: SessionService.revokeAll(memberId) — 해당 사용자 세션 종료

## Route

| Method | Path | 미들웨어 | Service 함수 |
|--------|------|----------|-------------|
| GET | /api/orgs/:orgId/members | auth, requireRole('owner','admin') | listMembers |
| PUT | /api/orgs/:orgId/members/:memberId/role | auth, requireRole('owner') | changeRole |
| PUT | /api/orgs/:orgId/members/:memberId/deactivate | auth, requireRole('owner','admin') | deactivate |

## 테스트

### Unit: MembersService
- listMembers: 빈 목록, 필터, 검색, pagination
- changeRole: 성공, 자기자신 변경 시도, 마지막 Owner 변경 시도, 권한 없음
- deactivate: 성공, Owner 비활성화 시도, 세션 종료 호출 확인

### Integration: Route
- GET /members: 200 정상, 401 미인증, 403 권한없음, 쿼리 파라미터
- PUT /members/:id/role: 200 성공, 400 자기자신, 400 마지막 Owner, 403 권한없음
- PUT /members/:id/deactivate: 200 성공, 400 Owner 비활성화, 403 권한없음
