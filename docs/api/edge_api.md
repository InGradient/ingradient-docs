# Edge API

- 문서명: Edge API
- 목적: edge와 cloud 간 인터페이스를 정의한다.
- 적용 범위: 장치 등록, 설정 동기화, 업로드, sync 상태 보고
- 상태: Draft
- Owner: Edge
- Reviewer: Platform / Infra Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_principles.md`, `../ops/failure_retry_policy.md`

## Edge 식별과 등록
- device id, site id, organization or project mapping을 가진다
- 최초 등록과 재등록 절차를 분리한다

## 설정 pull / push
- edge는 서버 설정을 pull 할 수 있어야 한다
- 긴급 운영 설정은 명시적 push 또는 next sync에서 반영한다

## 캡처 데이터 업로드
- raw data, metadata, thumbnail, diagnostics bundle 업로드를 구분한다
- 업로드는 resumable 또는 retry 가능한 단위로 쪼갠다

## sync와 retry 상태
- online, offline, pending, failed 상태를 명시한다
- 재시도 횟수, backoff, operator intervention 기준을 정의한다

## 오프라인 동작 규칙
- auth 만료, 네트워크 불가, storage 불가 상황에서도 최소 기능을 유지한다
- 재연결 시 중복 업로드와 순서 역전을 방지한다

## 로컬 제어 인터페이스
- 장치 diagnostics
- 설정 확인
- 복구 또는 재시작 명령

