# Login And Refresh Flow

## 목적

`auth-service`의 가장 기본적인 기능은 사용자를 인증하고, organization/membership 정보를 포함한 세션 기준 응답을 돌려주는 것이다. 이 문서는 login, refresh, 계정 잠금, 감사 로그까지 포함한 기본 인증 흐름을 정리한다.

## 핵심 엔티티

- `User`
- `Organization`
- `Membership`
- `ProjectMembership`
- `AuditLog`

## 기본 흐름

1. 사용자가 `loginId` 또는 이메일과 비밀번호로 로그인 요청을 보낸다.
2. 서버가 사용자 상태와 비밀번호를 검증한다.
3. 성공 시 access token, refresh token, user, organization, membership을 반환한다.
4. 클라이언트는 access token으로 API를 호출하고, 만료 시 refresh를 요청한다.
5. 주요 인증 이벤트는 audit log에 남긴다.

## 응답 기준

login 성공 응답은 최소 아래 구조를 유지한다.

```json
{
  "access_token": "jwt",
  "refresh_token": "jwt",
  "user": {
    "id": "u_123",
    "loginId": "operator1",
    "email": "operator1@example.com",
    "name": "Operator 1"
  },
  "organization": {
    "id": "org_123",
    "code": "factory-a",
    "name": "Factory A"
  },
  "membership": {
    "roleCode": "manager"
  }
}
```

## 보안 규칙

- access token 검증은 모든 downstream 서비스에서 동일 secret/검증 규칙을 사용한다.
- refresh token은 access token과 다른 수명 주기로 관리한다.
- 실패한 로그인은 `failed_login_attempts`를 증가시킨다.
- 임계치를 넘기면 `locked_until`로 계정을 잠근다.
- 잠금/해제/비밀번호 변경/강제 로그아웃은 audit log에 남긴다.

## 운영 관점에서 중요한 점

- 로그인 성공 여부만이 아니라 잠금 상태, 마지막 로그인, 실패 횟수가 운영 화면에 보여야 한다.
- role string은 `owner`, `manager`, `labeler`, `reviewer`, `client`, `viewer`로 고정한다.
- 클라이언트는 role 의미를 재정의하지 말고 auth-service가 준 값을 그대로 해석한다.

## 실패 시나리오

- 비밀번호 불일치
- disabled user
- organization membership 없음
- 계정 잠금 상태
- refresh token 만료 또는 위조

## 관련 문서

- `../api_contract.md`
- `../data_model.md`
- `/home/june/workspace/projects/auth-service/docs/concepts/architecture.md`
- `/home/june/workspace/projects/auth-service/prisma/migrations/20260327000000_add_login_security_and_edge_fields/migration.sql`
