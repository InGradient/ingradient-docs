# Project Documentation Requirements

- 문서명: Project Documentation Requirements
- 목적: 새 프로젝트 또는 새 서비스 생성 시 필요한 최소 문서를 정의한다.
- 적용 범위: backend, frontend, ai, edge, worker, shared package
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Product / Infra / Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `documentation_policy.md`, `../projects/_template/README.md`

## 적용 대상
- backend service
- frontend or web app
- ai service
- edge app
- worker or batch
- shared package

## 공통 필수 문서
- `project_overview.md`
- `product_guide.md`
- `user_scenarios.md`
- `architecture.md`
- `deployment.md`
- `operations.md`
- `roadmap.md`
- `release_notes.md`
- `releases/README.md`
- `upcoming.md`
- `manual_tests.md`
- `user_guide.md`

## 조건부 필수 문서
- 외부 API가 있으면 `api_contract.md`
- 자체 저장 데이터가 있으면 `data_model.md`
- 비동기 job이 있으면 job lifecycle 섹션 또는 기능 문서
- 권한 차등이 있으면 permission 흐름 문서
- 오프라인 동작이 있으면 sync or offline policy 문서

## 유형별 추가 필수 문서
- backend: `api_contract.md`, `data_model.md`
- frontend/web: 화면 흐름 또는 `features/` 기능 문서
- ai service: 모델 lifecycle, execution, artifact 관련 문서
- edge app: offline sync, device lifecycle, diagnostics 관련 문서
- worker/batch: queue, retry, failure handling 문서
- shared package: package purpose, public interface, versioning strategy 문서

## 개발 시작 전 체크리스트
- 프로젝트 overview와 architecture가 준비되었는가
- API / 데이터 유무가 명시되었는가
- 배포 형태와 운영 책임이 명시되었는가
- 공통 정책과 충돌하지 않는가

## 배포 전 체크리스트
- release notes가 업데이트되었는가
- user guide 또는 운영 영향이 반영되었는가
- migration 필요 여부가 기록되었는가

## 운영 전 체크리스트
- operations 문서에 메트릭, 로그, 알람, 트러블슈팅 포인트가 있는가
- 보안, 권한, 데이터 ownership 관련 공통 문서와 연결되었는가

