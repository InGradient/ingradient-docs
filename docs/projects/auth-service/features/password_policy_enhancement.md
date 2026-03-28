# 비밀번호 정책 강화

- 문서명: 비밀번호 정책 강화
- 목적: 비밀번호 복잡도, 이력 검사, 만료, 약한 비밀번호 블랙리스트, 조직별 정책 오버라이드를 추가한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §1, feature-requirements.md §1.4

## 1. 기능 개요

- 기능 이름: 비밀번호 정책 강화
- 한 줄 정의: 시스템 기본 + 조직별 오버라이드 가능한 비밀번호 정책(복잡도, 이력, 만료, 블랙리스트)을 도입한다.

## 2. 문제 정의

- 현재 비밀번호 정책: 8자 이상 + 문자 1개 + 숫자 1개 → 대문자/특수문자 요구 없음
- 비밀번호 이력 검사가 없어 이전 비밀번호를 그대로 재사용할 수 있다.
- 만료 정책이 없어 수년간 같은 비밀번호를 사용할 수 있다.
- 조직별 정책 차별화가 불가능하다.

## 3. 목표

- 사용자 목표: 보안 수준 높은 비밀번호를 사용하도록 안내받는다.
- 운영 목표: 엔터프라이즈 보안 감사 요구를 충족한다.

## 4. 범위 / 비범위

- 포함: 복잡도 규칙 확장, 비밀번호 이력 검사 (최근 N개), 만료 + 강제 변경 플로우, 약한 비밀번호 블랙리스트, 조직별 정책 오버라이드
- 비범위: 비밀번호 강도 미터 UI (Admin Console에서만 표시, 소비 앱은 각자 구현)

## 5. 사용자 시나리오

### 기본 흐름 — 비밀번호 설정 시 정책 검사

1. 참여자: 사용자
2. 선행 조건: 비밀번호 설정/변경 시도
3. 기본 흐름: 새 비밀번호 입력 → 복잡도 검사 (대/소/숫자/특수 조합) → 이력 검사 (최근 5개와 비교) → 블랙리스트 검사 → 통과 시 저장
4. 예외 흐름: 정책 위반 시 `{ code: "WEAK_PASSWORD", details: ["대문자 1자 이상 필요", "최근 사용한 비밀번호 사용 불가"] }` 반환
5. 로그 포인트: `password_change`, `password_policy_violation`

### 기본 흐름 — 비밀번호 만료

1. 참여자: 만료 정책이 설정된 조직의 사용자
2. 선행 조건: `password_changed_at` + 정책 만료일 < 현재
3. 기본 흐름: 로그인 시 만료 감지 → `{ passwordExpired: true }` 응답 → 강제 비밀번호 변경 페이지로 이동
4. 시스템 반응: 새 비밀번호 설정 완료 후 정상 토큰 발급

## 6. UI / UX 방향

- Admin Console 조직 설정에 비밀번호 정책 탭 추가:
  - 최소 길이, 대문자/소문자/숫자/특수문자 요구 토글, 이력 검사 개수, 만료 일수
- 비밀번호 변경 시 정책 위반 사항을 실시간 피드백

## 7. 데이터 / API / 권한 영향

- 새 테이블: `password_history` (user_id, password_hash, created_at)
- 새 컬럼: `users.password_changed_at` (timestamp)
- 조직 설정 확장: `org_settings` 테이블 또는 JSON에 비밀번호 정책 필드 추가
  - `min_length`, `require_uppercase`, `require_lowercase`, `require_number`, `require_special`, `history_count`, `max_age_days`
- 시스템 기본값: 환경변수 또는 config 파일로 관리
- 블랙리스트: 정적 파일 (10k-most-common-passwords.txt) 로드
- 새 API: `GET /organizations/:orgId/password-policy` (현재 유효 정책 조회)
- 기존 API 변경: 비밀번호 설정/변경 시 정책 검사 삽입
- migration: password_history 테이블 생성, users에 password_changed_at 추가

## 8. 테스트 계획

- unit: 복잡도 규칙 조합별 검증, 이력 비교, 블랙리스트 매칭, 만료 계산
- integration: 조직 정책 설정 → 해당 조직 사용자 비밀번호 변경 시 정책 적용 확인
- e2e: 만료된 비밀번호로 로그인 → 강제 변경 → 이력 재사용 시도 거부 → 새 비밀번호로 정상 로그인

## 9. 릴리즈 고려사항

- release note: 비밀번호 정책 강화 (복잡도, 이력, 만료)
- user guide: 조직별 정책 설정 방법
- ops: 기존 사용자에 대한 만료 기준은 배포 시점부터 적용 (소급 적용하지 않음)

## 10. 오픈 이슈

- 블랙리스트 업데이트 주기와 소스 결정 필요
- 만료 유예 기간 (grace period) 허용 여부
- password_changed_at이 null인 기존 사용자의 만료 정책 적용 방식 결정 필요
