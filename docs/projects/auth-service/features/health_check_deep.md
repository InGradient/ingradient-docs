# Health Check 확장

- 문서명: Health Check 확장
- 목적: `/health` 엔드포인트에 DB, Redis 연결 상태를 포함하여 운영 가시성을 높인다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §14, feature-requirements.md §15

## 1. 기능 개요

- 기능 이름: Health Check 확장
- 한 줄 정의: `/health` 응답에 PostgreSQL, Redis 연결 상태와 liveness/readiness probe를 분리하여 제공한다.

## 2. 문제 정의

- 현재 `/health`는 서비스 메타 정보(status, service, domain, version)만 반환한다.
- DB나 Redis가 다운되어도 health check가 정상으로 보고되어 장애 감지가 늦어진다.
- liveness와 readiness가 분리되지 않아 k8s 환경에서 세밀한 제어가 불가능하다.

## 3. 목표

- 운영 목표: 의존 서비스 장애를 즉시 감지하고, 로드 밸런서/k8s가 정확한 판단을 내리게 한다.

## 4. 범위 / 비범위

- 포함: `/health` 확장 (DB + Redis 상태), `/health/live` (liveness), `/health/ready` (readiness)
- 비범위: Prometheus 메트릭 엔드포인트 (별도 P2 기능), 상세 성능 메트릭

## 5. 사용자 시나리오

### 기본 흐름

1. 참여자: 운영 시스템 (k8s, 로드 밸런서, 모니터링)
2. 선행 조건: 서비스가 실행 중이다
3. 기본 흐름: `GET /health` → DB ping + Redis ping → 전체 상태 종합 반환
4. 예외 흐름: DB 연결 실패 → `{ status: "degraded", db: "down", redis: "up" }`, HTTP 503
5. 시스템 반응: 503 시 로드 밸런서가 해당 인스턴스를 트래픽에서 제외
6. 로그 포인트: health check 실패 시 경고 로그

## 6. UI / UX 방향

- 해당 없음 (인프라 API)

## 7. 데이터 / API / 권한 영향

- API 변경:
  - `GET /health` — 기존 필드 유지 + `dependencies: { db: "up"|"down", redis: "up"|"down" }` 추가. 모든 의존성 정상 시 200, 하나라도 실패 시 503.
  - `GET /health/live` — 프로세스 생존 확인만. 항상 200 (서버가 응답 가능하면).
  - `GET /health/ready` — DB + Redis 모두 정상이면 200, 아니면 503.
- 권한: 인증 없이 접근 가능 (probe용)
- DB ping: `SELECT 1` 쿼리 (Prisma `$queryRaw`)
- Redis ping: `PING` 커맨드
- 타임아웃: 각 의존성 ping에 3초 타임아웃
- migration: 불필요

## 8. 테스트 계획

- unit: 의존성 상태 종합 로직 (all up → healthy, any down → degraded)
- integration: DB 정상 + Redis 정상 → 200, DB 다운 시 → 503 + degraded 상태
- e2e: Docker Compose에서 Redis 컨테이너 중지 → `/health/ready` 503 확인

## 9. 릴리즈 고려사항

- release note: health check 확장, 새 엔드포인트 추가
- ops: k8s deployment에 liveness/readiness probe 설정 변경 필요

## 10. 오픈 이슈

- health check 응답에 DB latency 수치를 포함할지 검토
- 캐시된 결과를 짧은 TTL(5초)로 반환하여 check 빈도에 따른 DB 부하 방지 여부
