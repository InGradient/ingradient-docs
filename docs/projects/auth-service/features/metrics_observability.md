# Prometheus / OpenTelemetry 메트릭

- 문서명: Prometheus / OpenTelemetry 메트릭
- 목적: 서비스 상태와 성능을 모니터링하기 위한 메트릭 수집 및 노출 기능을 제공한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: Prometheus / OpenTelemetry 메트릭
- 한 줄 정의: Prometheus 호환 메트릭 엔드포인트와 OpenTelemetry 트레이싱을 통해 서비스 가시성을 확보한다.

## 2. 문제 정의

- 현재 서비스 상태 파악이 로그에만 의존하여 실시간 모니터링이 어렵다.
- 장애 감지, 성능 병목 분석을 위한 구조화된 메트릭이 필요하다.

## 3. 목표

- 사용자 목표: 해당 없음 (인프라 기능)
- 운영 목표: 요청 처리량, 응답 시간, 에러율, DB 커넥션 등 핵심 지표를 실시간으로 모니터링한다.

## 4. 범위 / 비범위

- 포함: `/metrics` 엔드포인트 (Prometheus 형식), HTTP 요청 메트릭 (duration, count, status), 비즈니스 메트릭 (login 성공/실패, 토큰 발급 수), OTel 트레이스 기본 설정
- 비범위: Grafana 대시보드 구축, 알림 규칙 설정, 분산 트레이싱 전체 연동

## 5. 사용자 시나리오

### 기본 흐름 — 메트릭 수집

1. 참여자: 운영자 / 모니터링 시스템
2. 선행 조건: Prometheus 서버 설정 완료
3. 기본 흐름: Prometheus가 `GET /metrics` 스크래핑 → 메트릭 수집 → Grafana 대시보드 표시
4. 예외 흐름: 메트릭 엔드포인트 비활성화 시 404
5. 로그 포인트: 해당 없음

## 6. UI / UX 방향

- 해당 없음 (인프라 기능, Grafana에서 소비)

## 7. 데이터 / API / 권한 영향

- 새 엔드포인트: `GET /metrics` (인증 불필요, 내부 네트워크 전용)
- 의존성: `prom-client`, `@opentelemetry/sdk-node` (선택)
- 주요 메트릭: `http_request_duration_seconds`, `http_requests_total`, `auth_login_total`, `auth_token_issued_total`, `db_pool_active_connections`

## 8. 테스트 계획

- unit: 커스텀 메트릭 카운터 증가 확인
- integration: `/metrics` 응답에 예상 메트릭 포함 확인
- load: 메트릭 수집이 응답 시간에 미치는 영향 측정

## 9. 릴리즈 고려사항

- release note: Prometheus 메트릭 엔드포인트 추가
- ops: `/metrics` 내부 네트워크 접근 제한 설정

## 10. 오픈 이슈

- OTel Collector 도입 시점
- 커스텀 비즈니스 메트릭 범위 확정
