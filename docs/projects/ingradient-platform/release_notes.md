# ingradient-platform Release Notes

## Version 0.0.2 (2026-03-30)

auth-service 기반 인증/권한 통합 + `@ingradient/ui` 디자인 시스템 전면 마이그레이션.

### 주요 변경

- **auth-service 통합**: 로그인/회원가입, JWT 세션, role 체계 통일 (owner/manager/labeler/reviewer/client/viewer), organization scope 강제
- **권한 매트릭스**: Settings > Project에서 Role × Permission 매트릭스 편집 (owner 고정, custom 슬롯, diff 확인)
- **UI 마이그레이션**: 하드코딩 스타일 → `@ingradient/ui` 디자인 토큰/컴포넌트 전면 전환
- **Gallery 확장**: deflectometry 시퀀스 메타데이터, auth-aware image loading, sync state 표시
- **Edge 연동**: .ige 패키지 export/import, .igp 썸네일 생성, 코멘트 동기화
- **알림**: 학습 완료/실패, @멘션 알림 (폴링 방식)

### 운영 영향

- auth-service가 선행 배포되어야 함 (JWT 검증, 멤버십 API 의존)
- auth-service role enum과 Platform UI 문자열은 절대 분기되면 안 됨
- gallery 메타데이터 스키마 변경 시 Edge upload와 export 포맷도 같이 검증 필요

### 상세 계획

- [releases/v0.0.2.md](./releases/v0.0.2.md) — 전체 기능 체크리스트

## Recording Rule

- auth integration, export 정책, training workflow, edge integration 변경은 각각 운영 영향까지 포함해 기록한다.
- UI 변경만 있는 경우에도 permission, data contract, sync contract 영향이 있으면 릴리즈 노트에 포함한다.

## Source Documents

- `ingradient-platform/docs/releases/0.0.2-auth-integration.md`
- `ingradient-platform/docs/releases/0.0.2-ui-changes.md`
