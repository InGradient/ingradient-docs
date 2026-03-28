# auth-service Roadmap

## 현재 범위

- shared auth and membership service
- admin 운영 시스템으로의 확장
- license 관리 이관
- offline and edge support

## 단계별 계획

### 1. core auth 안정화

- login, refresh, verify
- membership and project access
- role and permission facts

### 2. admin 운영 기능 확장

- 사용자 목록과 상세
- 조직 관리
- role 관리
- account security controls

### 3. license and edge integration

- license issuance
- node-locked registration
- offline entitlement
- device and edge support

### 4. 보안과 감사 강화

- audit logs
- account lock
- usage and activity visibility
- future MFA or SSO 고려

## 우선순위

1. 공통 제품이 신뢰할 수 있는 auth contract
2. license migration
3. admin 운영성
4. 확장 보안 기능

## 기술 부채

- 기존 platform에 있던 일부 책임의 이관 완료가 필요
- business permission 해석 경계가 더 분명해져야 한다

## 미결정 사항

- SSO 도입 시점
- MFA 범위
- API key와 service auth 확장 범위

