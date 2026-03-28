# Admin 대시보드

- 문서명: Admin 대시보드
- 목적: Admin Console에 시스템 현황 대시보드를 추가하여 운영 가시성을 높인다.
- 적용 범위: auth-service (API + Admin Console)
- 상태: Draft
- Owner: Backend + Frontend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §13, feature-requirements.md §13.1

## 1. 기능 개요

- 기능 이름: Admin 대시보드
- 한 줄 정의: Admin Console 홈에 활성 사용자, 세션, 최근 보안 이벤트, 라이선스 사용량, 시스템 상태를 보여주는 대시보드를 구현한다.

## 2. 문제 정의

- Admin Console에 대시보드가 없어 시스템 현황을 파악하려면 각 관리 페이지를 일일이 확인해야 한다.
- 보안 이벤트(로그인 실패, 계정 잠금)를 실시간으로 인지할 수 없다.
- 라이선스 사용량 대비 현황을 한눈에 볼 수 없다.

## 3. 목표

- 사용자 목표: Admin Console에 접속하면 시스템 전체 상태를 즉시 파악한다.
- 운영 목표: 이상 징후를 빠르게 감지하고 대응한다.

## 4. 범위 / 비범위

- 포함: 요약 카드 (사용자 수, 조직 수, 활성 세션 수), 최근 보안 이벤트 목록, 라이선스 사용량 요약, 시스템 상태 (DB/Redis)
- 비범위: 시계열 차트/그래프 (추후), 알림 설정, 커스텀 위젯

## 5. 사용자 시나리오

### 기본 흐름

1. 참여자: System Admin
2. 선행 조건: Admin 로그인 완료
3. 기본 흐름: Admin Console 홈 → 대시보드 API 호출 → 요약 카드 + 최근 이벤트 + 시스템 상태 렌더링
4. 예외 흐름: API 호출 실패 → 각 섹션별 에러 상태 표시 (다른 섹션은 정상 표시)
5. 시스템 반응: 페이지 진입 시 1회 호출 (자동 새로고침 없음, 수동 새로고침 버튼)

## 6. UI / UX 방향

### 화면 구성

- **상단 요약 카드 (4개)**: 전체 사용자 수, 전체 조직 수, 활성 세션 수, 오늘 로그인 수
- **중단 좌측: 최근 보안 이벤트** — 최근 20건 (login_fail, account_locked, session_force_logout 등). 이벤트 유형 아이콘 + 시각 + 행위자 + 대상.
- **중단 우측: 라이선스 요약** — 조직별 사용자/디바이스 사용률 상위 5개 (게이지 바)
- **하단: 시스템 상태** — DB, Redis 연결 상태 (up/down 배지), 서비스 버전

### 상태 설계

- loading: 각 섹션별 스켈레톤
- error: 섹션별 에러 메시지 (다른 섹션 영향 없음)
- empty: "최근 보안 이벤트가 없습니다"

## 7. 데이터 / API / 권한 영향

- 새 API:
  - `GET /admin/dashboard/summary` — `{ totalUsers, totalOrgs, activeSessions, todayLogins }`
  - `GET /admin/dashboard/recent-events` — 최근 보안 이벤트 20건 (감사 로그에서 보안 이벤트만 필터)
  - `GET /admin/dashboard/license-usage` — 조직별 사용률 상위 목록
  - `GET /admin/dashboard/system-status` — DB/Redis 상태 (health check 로직 재활용)
- 권한: System Admin 전용
- DB 쿼리: COUNT 집계 쿼리 (users, organizations, refresh_tokens), 감사 로그 최근 N건
- migration: 불필요

## 8. 테스트 계획

- unit: 집계 쿼리 로직, 보안 이벤트 필터링
- integration: 데이터 존재 시 올바른 카운트 반환, 빈 DB에서 0 반환
- e2e: Admin Console 대시보드 페이지 렌더링, 각 섹션 데이터 표시 확인

## 9. 릴리즈 고려사항

- release note: Admin Console 대시보드 추가
- user guide: 대시보드 각 섹션 설명

## 10. 오픈 이슈

- 대시보드 데이터 캐싱 여부 (집계 쿼리 부하 우려 시 30초 캐시)
- 시계열 데이터 (일별 로그인 추이 등)는 추후 phase에서 Prometheus/OTel 연동 후 구현
