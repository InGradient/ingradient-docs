# ingradient-platform API Contract

## API 개요
- projects
- datasets and assets
- annotations and approvals
- exports
- AI request endpoints

## 요청 / 응답 구조
- resource 중심 JSON API
- 비동기 작업은 job resource를 사용

## 인증 규칙
- auth-service 기반 identity와 membership을 신뢰한다
- project-level authorization은 platform이 해석한다

## 에러 규칙
- validation, permission, business conflict, export or AI integration failure를 구분한다

## 관련 근거 문서
- `/home/june/workspace/projects/ingradient-platform/docs/plan/shared-api-client.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`

