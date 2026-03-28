# auth-service Operations

## 운영 목적

- 인증과 멤버십 계약을 안정적으로 제공한다
- token lifecycle과 license 관련 흐름을 보호한다
- audit 가능한 운영 상태를 유지한다

## 핵심 메트릭

- login success and failure rate
- token verify latency
- refresh token rotation failure
- invitation acceptance success
- license issuance and validation success
- account lock events

## 운영상 중요한 보안 포인트

- failed login attempts 증가
- `locked_until`이 걸린 계정 수
- bootstrap secret 접근
- offline entitlement 발급과 revoke

## audit 포인트

감사 로그에 남아야 하는 대표 이벤트:

- login
- logout
- password change
- role change
- license issuance
- device registration

## 대표 트러블슈팅 포인트

- invalid credentials와 locked account를 구분해야 하는지
- membership은 맞는데 downstream permission이 안 맞는지
- refresh token rotation 재사용 공격이 의심되는지
- offline mode가 라이선스 정책 때문에 거부되는지

## 관련 근거 문서

- `/home/june/workspace/projects/auth-service/docs/reference/test-scenarios.md`
- `/home/june/workspace/projects/auth-service/docs/plan/license-migration.md`

