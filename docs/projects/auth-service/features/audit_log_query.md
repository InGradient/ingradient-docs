# 감사 로그 조회

- 문서명: 감사 로그 조회
- 목적: 기록만 되고 조회할 수 없는 감사 로그에 조회 API, 필터, 내보내기, 보존 정책을 추가한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §9, feature-requirements.md §9

## 1. 기능 개요

- 기능 이름: 감사 로그 조회
- 한 줄 정의: 감사 로그를 이벤트/사용자/날짜 기준으로 필터링하여 조회하고, CSV/JSON으로 내보내며, 보존 기간 정책을 적용한다.

## 2. 문제 정의

- 현재 `audit.log()`가 DB에 기록하지만 조회 API가 없어 운영자가 로그를 확인할 수 없다.
- Admin Console 감사 로그 페이지가 placeholder 상태다.
- 보존 정책이 없어 DB 무한 증가 위험이 있다.

## 3. 목표

- 사용자 목표: 관리자가 보안 이벤트를 빠르게 검색하고 감사 보고서를 추출한다.
- 운영 목표: DB 비대화를 방지하고 컴플라이언스 요구를 충족한다.

## 4. 범위 / 비범위

- 포함: 조회 API, 필터링, 페이지네이션, CSV/JSON 내보내기, 보존 정책(크론 정리), Admin Console UI
- 비범위: 실시간 스트리밍, 외부 SIEM 연동, 로그 집계/대시보드

## 5. 사용자 시나리오

### 기본 흐름 — 감사 로그 조회

1. 참여자: System Admin
2. 선행 조건: 감사 로그가 DB에 기록되어 있다
3. 기본 흐름: Admin Console 감사 로그 페이지 → 필터 설정 (이벤트 유형, 날짜 범위, 사용자) → 조회 → 결과 테이블 표시
4. 예외 흐름: 결과 없음 → 빈 상태 메시지 표시
5. 시스템 반응: `GET /audit-logs?event=login_fail&from=2026-03-01&to=2026-03-28&page=1&pageSize=50`
6. 로그 포인트: `audit_log_export` (내보내기 수행 시)

### 기본 흐름 — 내보내기

1. `GET /audit-logs/export?format=csv&event=login_fail&from=...&to=...` → CSV 파일 다운로드
2. 최대 내보내기 건수 제한 (10,000건)

## 6. UI / UX 방향

- Admin Console 감사 로그 페이지: placeholder → 실제 테이블로 교체
- 상단 필터 바: 이벤트 유형(드롭다운), 사용자(검색), 날짜 범위(date picker)
- 테이블 컬럼: 시각, 이벤트, 행위자, 대상, IP, 상세(meta 펼치기)
- 내보내기 버튼 (CSV/JSON 선택)
- 페이지네이션 (api_pagination_sorting 패턴과 동일)

## 7. 데이터 / API / 권한 영향

- 새 API:
  - `GET /audit-logs` — 쿼리: event, user_id, org_id, from, to, page, pageSize, sort, order
  - `GET /audit-logs/export` — 쿼리: format (csv|json), 동일 필터
- 권한: System Admin 전용 (isSystemAdmin 검사)
- DB 변경: audit_logs 테이블에 인덱스 추가 (event, user_id, created_at)
- 보존 정책: `AUDIT_LOG_RETENTION_DAYS` 환경변수 (기본 365일), 크론으로 만료 레코드 삭제
- migration: 인덱스 추가 migration

## 8. 테스트 계획

- unit: 필터 파라미터 검증, 날짜 범위 파싱, CSV 직렬화
- integration: 감사 로그 10건 기록 → 필터 조회 → 올바른 결과 반환, 내보내기 포맷 검증
- e2e: Admin Console에서 필터 설정 → 조회 → 내보내기 다운로드

## 9. 릴리즈 고려사항

- release note: 감사 로그 조회/내보내기 기능 추가
- user guide: 감사 로그 조회 방법, 보존 정책 설정
- ops: 크론 작업 등록 필요 (일 1회 만료 로그 정리), 인덱스 추가로 인한 일시적 DB 부하

## 10. 오픈 이슈

- 내보내기 건수가 매우 클 경우 비동기 처리 + 다운로드 링크 방식 검토
- 조직 Admin에게도 자기 조직 범위 조회 권한을 줄지 결정 필요
