# Event Contracts

- 문서명: Event Contracts
- 목적: 이벤트 기반 메시지 계약을 정의한다.
- 적용 범위: job 상태 변경, sync 상태, artifact 완료 이벤트
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: AI / Edge Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `api_principles.md`, `error_response_policy.md`

## 이벤트 사용 범위
- 장시간 작업의 상태 전파
- 서비스 간 느슨한 결합이 필요한 후처리
- 알림이나 운영 후속 액션 트리거

## 이벤트 목록
- training job queued / started / finished / failed
- inference job finished
- export completed
- edge sync failed / recovered

## 이벤트 payload 정의
- `event_name`
- `event_version`
- `occurred_at`
- `correlation_id`
- `resource_type`
- `resource_id`
- `payload`

## 전달 보장 수준
- at-least-once를 기본 가정으로 한다
- consumer는 중복 이벤트를 견뎌야 한다

## 재시도 및 중복 처리
- idempotent consumer key를 둔다
- ordering이 필요한 경우 같은 resource stream 안에서만 기대한다

