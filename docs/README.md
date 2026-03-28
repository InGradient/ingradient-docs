# Docs

## 목적
이 디렉토리는 INGRADIENT 전체 문서의 루트다. 공통 정책은 여기에서 SSOT로 관리하고, 각 repo의 기존 `docs/`는 프로젝트별 상세 근거 문서로 연결한다.

## 상황별로 어디를 볼지
- 시스템 구조가 필요하면 `architecture/README.md`
- 문서 규칙이 필요하면 `governance/README.md`
- 서비스 연동이 필요하면 `api/README.md`
- 저장 구조와 ownership이 필요하면 `data/README.md`
- AI 실행과 모델 정책이 필요하면 `ai/README.md`
- 운영, 장애, 보안이 필요하면 `ops/README.md`
- 개발 규칙과 릴리스 기준이 필요하면 `dev/README.md`
- 사용자 흐름과 기획은 `product/README.md`
- 특정 repo 상세는 `projects/README.md`

## 매번 공통으로 확인할 문서
- `governance/document_change_policy.md`
- `governance/project_documentation_requirements.md`
- `architecture/system_overview.md`
- `api/api_principles.md`
- `data/storage_policy.md`
- `ops/security_access_control.md`
- `dev/release_strategy.md`

## 작업 유형별 진입
- 새 프로젝트 시작: `governance/README.md` → `projects/_template/README.md`
- 기능 기획: `product/README.md` → 대상 프로젝트 `features/`
- API 변경: `api/README.md` → 대상 프로젝트 `api_contract.md`
- 데이터 정책 변경: `data/README.md`
- 장애 대응: `ops/README.md`
- 릴리즈 준비: `dev/README.md` + 각 프로젝트 `release_notes.md`

