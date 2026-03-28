# medilabel API Contract

## API 개요
- auth and session
- organizations and projects
- datasets and catalog assets
- uploads and ingest jobs
- classes and segmentations

## 요청 / 응답 구조
- JSON API with `data` and optional `meta`
- catalog는 cursor pagination을 우선한다

## 인증 규칙
- 로그인 후 project membership을 기준으로 접근한다

## 에러 규칙
- class mapping invalid
- upload or ingest failure
- permission denied
- project scope mismatch

## 관련 근거 문서
- `/home/june/workspace/projects/medilabel/docs/api-spec.md`

