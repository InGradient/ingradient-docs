# JWT 키 Rotation

- 문서명: JWT 키 Rotation
- 목적: 단일 JWT 서명 키를 다중 키 체계로 전환하여 키 유출 시 안전한 교체를 지원한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md §11, feature-requirements.md §11.5

## 1. 기능 개요

- 기능 이름: JWT 키 Rotation
- 한 줄 정의: JWT 서명 시 `kid` (Key ID) 헤더를 포함하고, 여러 키를 동시에 지원하여 무중단 키 교체를 가능하게 한다.

## 2. 문제 정의

- 현재 단일 HS256 키(`JWT_SECRET`)로 서명하며 키 교체 방법이 없다.
- 키 유출 시 모든 기존 토큰을 즉시 무효화해야 하며, 전체 사용자 재로그인이 필요하다.
- 다른 서비스가 JWT를 독립 검증하려면 키 공유가 필요한데, 단일 키 체계에서는 유출 위험이 높다.

## 3. 목표

- 운영 목표: 키 유출 시 기존 토큰을 유지하면서 새 키로 전환한다 (graceful transition).
- 보안 목표: 정기적 키 교체를 통해 키 노출 영향 범위를 제한한다.

## 4. 범위 / 비범위

- 포함: kid 헤더 포함 JWT 발급, 다중 키 동시 검증, 키 교체 절차, 이전 키 만료 정책
- 비범위: HS256 → RS256 전환 (별도 검토 필요), 자동 rotation 스케줄 (수동 교체 우선), JWKS 엔드포인트 (RS256 전환 시 도입)

## 5. 사용자 시나리오

### 기본 흐름 — 키 교체

1. 참여자: 운영자
2. 선행 조건: 기존 키로 발급된 토큰이 활성 상태
3. 기본 흐름:
   - 환경변수에 새 키 추가: `JWT_KEYS=key-2:newSecret,key-1:oldSecret` (첫 번째가 signing key)
   - 서비스 재시작/재배포
   - 신규 토큰은 `kid: "key-2"`로 발급
   - 기존 토큰 (`kid: "key-1"`)도 만료까지 정상 검증
   - access token 만료 (1시간) 후 이전 키 제거
4. 예외 흐름: 알 수 없는 kid → 401 Unauthorized
5. 로그 포인트: `jwt_key_rotated`, `jwt_unknown_kid`

## 6. UI / UX 방향

- 해당 없음 (운영 절차)
- Admin Console 시스템 설정에 현재 활성 키 ID 표시 (선택)

## 7. 데이터 / API / 권한 영향

- JWT 변경: 헤더에 `kid` 필드 추가
- 환경변수 변경: `JWT_SECRET` → `JWT_KEYS` (형식: `kid:secret,kid:secret,...`)
  - 하위 호환: `JWT_SECRET`만 있으면 `kid: "default"`로 동작
- 토큰 검증 변경: kid로 키 조회 → 해당 키로 검증. kid 없는 토큰은 `JWT_SECRET` fallback.
- `/auth/verify` 변경: 다중 키 검증 지원
- migration: 불필요 (런타임 설정 변경만)

## 8. 테스트 계획

- unit: kid 파싱, 다중 키 조회, fallback 동작, 알 수 없는 kid 거부
- integration: 키 2개 설정 → 구 키로 발급된 토큰 검증 성공 → 구 키 제거 후 실패
- e2e: 키 교체 시나리오 (구 키 → 신 키 전환 → 구 토큰 만료 → 정상 동작 확인)

## 9. 릴리즈 고려사항

- release note: JWT kid 헤더 추가, 다중 키 지원
- ops: 배포 가이드에 키 교체 절차 명시. 기존 `JWT_SECRET` 환경변수와 하위 호환 유지.
- 주의: downstream 서비스가 JWT를 직접 검증하는 경우 kid 처리 로직 업데이트 필요

## 10. 오픈 이슈

- HS256 유지 vs RS256 전환 시점 결정 (RS256이면 공개키만 공유 가능 → 보안 향상)
- 자동 rotation 스케줄 (90일 등)은 추후 phase
- JWKS 엔드포인트 (`/.well-known/jwks.json`)는 RS256 전환 시 함께 구현
