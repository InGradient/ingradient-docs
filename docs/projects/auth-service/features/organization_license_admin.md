# Organization And License Admin

## 목적

`auth-service`는 단순 로그인 서버가 아니라 organization, membership, license, node entitlement를 함께 관리하는 운영 서비스가 되어야 한다. 이 문서는 관리자 콘솔 기준 핵심 관리 기능을 정리한다.

## 관리 범위

- organization 생성/수정
- 사용자 생성/비활성화
- membership과 role 관리
- license 발급/재발급/비활성화
- node-locked 장비 등록
- 사용자 활동 및 감사 로그 조회

## 화면 구조 권장안

- `/admin/users`
- `/admin/organizations`
- `/admin/products`
- `/admin/products/:id/members`
- `/admin/licenses`
- `/admin/licenses/:id`
- `/admin/audit-logs`

## 핵심 규칙

- license는 작업 데이터가 아니라 인증/권한 도메인에 속한다.
- 하나의 organization은 여러 license를 가질 수 있다.
- node entitlement는 특정 장비에 귀속될 수 있다.
- downstream 서비스는 license 정책을 자체적으로 복제하지 않는다.

## 사용자 상세에서 보여야 할 항목

- user id
- 이름, 이메일, 상태
- 조직
- role
- 생성일
- 마지막 로그인 시간
- 최근 로그인 기록
- Edge 사용 여부
- 활동 로그

## license 상세에서 보여야 할 항목

- license id
- organization
- 상태
- 만료일
- 등록된 node 수
- 발급 이력
- 재발급 버튼
- 비활성화 여부

## 운영 액션

- 비밀번호 초기화
- 계정 활성/비활성
- 역할 변경
- 조직 이동
- 강제 로그아웃
- license 재발급
- offline license 생성

## 주의사항

- Platform의 프로젝트와 auth-service의 organization/license/product는 같은 엔티티가 아니다.
- offline license 발급 정책은 Edge 설치 절차와 함께 검증해야 한다.
- 관리자 UI는 audit log와 분리되면 안 된다.

## 관련 문서

- `../operations.md`
- `../data_model.md`
- `/home/june/workspace/projects/auth-service/docs/plan/license-migration.md`
