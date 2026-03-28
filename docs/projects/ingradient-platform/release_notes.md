# ingradient-platform Release Notes

## Version 0.0.2

`0.0.2`는 현재 repo 기준으로 auth integration과 UI 변경이 함께 기록된 마일스톤이다.

### Auth Integration Highlights

- `auth-service` 기준 role 체계 통일
  - `owner`
  - `manager`
  - `labeler`
  - `reviewer`
  - `client`
  - `viewer`
- login 응답을 기준으로 Platform session shape 정리
- organization scope 강제와 role 해석 규칙 정리
- `Settings` 아래 organization, members, license, devices, invitations, project 구조 확정

### UI Highlights

- `Settings > Project` 권한 매트릭스 UI 추가
- owner 고정, custom role 슬롯, diff 확인, stale update 안내 UX 추가
- `Gallery`가 deflectometry sequence metadata를 이해하도록 확장
- auth-aware protected image loading 적용
- online/local-first 흐름을 고려한 sync state 표시 추가

### Operational Impact

- auth-service role enum과 Platform UI 문자열은 절대 분기되면 안 된다.
- gallery metadata 스키마가 바뀌면 Edge upload와 export 포맷도 같이 검증해야 한다.

## Recording Rule

- auth integration, export 정책, training workflow, edge integration 변경은 각각 운영 영향까지 포함해 기록한다.
- UI 변경만 있는 경우에도 permission, data contract, sync contract 영향이 있으면 릴리즈 노트에 포함한다.

## Source Documents

- `/home/june/workspace/projects/ingradient-platform/docs/releases/0.0.2-auth-integration.md`
- `/home/june/workspace/projects/ingradient-platform/docs/releases/0.0.2-ui-changes.md`
