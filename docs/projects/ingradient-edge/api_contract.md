# ingradient-edge API Contract

## API 개요
- device registration
- settings sync
- upload and sync status reporting
- local diagnostics commands

## 요청 / 응답 구조
- online path는 HTTP JSON 기준
- 오프라인 중에는 로컬 queue에 저장 후 재전송

## 인증 규칙
- device or service credential
- 필요 시 delegated user identity

## 에러 규칙
- network, auth, sync conflict, local storage failure를 구분한다

## 관련 근거 문서
- `/home/june/workspace/projects/ingradient-edge/docs/reference/edge-platform-sync.md`
- `/home/june/workspace/projects/ingradient-edge/docs/concepts/auth-system.md`

