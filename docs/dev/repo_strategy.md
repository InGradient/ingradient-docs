# Repo Strategy

- 문서명: Repo Strategy
- 목적: repo 구조와 공유 패키지 전략을 정의한다.
- 적용 범위: ingradient-* ecosystem
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `../architecture/service_responsibility.md`

## repo 분리 원칙
- 제품 또는 서비스의 runtime 책임이 다르면 repo 분리를 우선한다
- shared package는 별도 repo 또는 명확한 package boundary를 둔다

## 현재 repo 구조
- `ingradient-platform`, `ingradient-ai`, `ingradient-edge`, `auth-service`, `medilabel`, `ingradient-ui`

## shared package 정책
- 공용 UI는 `@ingradient/ui`
- 공통 schema, sdk, api client는 재사용 가치가 충분할 때만 별도 패키지화

## 버전과 배포 연계
- shared package는 독립 버전 관리
- 앱은 공개 surface만 의존

## 금지 패턴
- 다른 서비스의 내부 구현 직접 import
- 공용 패키지에 제품 workflow 밀어넣기
- cross-repo DB coupling

