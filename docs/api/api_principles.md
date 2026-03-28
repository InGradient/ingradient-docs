# API Principles

- 문서명: API Principles
- 목적: 서비스 간 API 설계 공통 원칙을 정의한다.
- 적용 범위: auth, platform, ai, edge, medilabel
- 상태: Draft
- Owner: Platform Backend
- Reviewer: Repo API Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `error_response_policy.md`, `../dev/api_convention.md`

## API 스타일 원칙
- 사용자-facing과 control APIs는 HTTP JSON을 기본으로 한다.
- latency 민감한 internal path 또는 streaming이 필요하면 gRPC를 검토한다.
- 비동기 상태 전달은 polling 또는 event callback을 명시적으로 정의한다.

## URI와 endpoint 규칙
- 리소스 중심 naming을 사용한다.
- 복수형 collection과 단수형 item path를 유지한다.
- 제품별 prefix와 버전 prefix를 명시한다.

## Request와 Response 기본 구조
- 성공 응답은 `data`, 필요 시 `meta`를 둔다.
- 에러 응답은 일관된 `error.code`, `message`, `details`, `correlation_id` 구조를 따른다.

## 비동기 작업 패턴
- training, export, sync 같은 장시간 작업은 job resource를 만든다.
- 생성 응답은 job id와 초기 상태를 돌려준다.
- 상태 조회, 로그 조회, artifact 조회 경로를 분리한다.

## 버전 관리 정책
- breaking change는 명시적 버전 전환으로 처리한다.
- backward compatible 필드 추가를 우선한다.
- 폐기 예정 필드는 deprecation note를 남긴다.

## 호환성 정책
- consumer가 여러 버전을 동시에 운영할 수 있음을 전제로 한다.
- 날짜, 시간, ID, pagination, filtering 규칙은 서비스 간 일관되게 유지한다.

