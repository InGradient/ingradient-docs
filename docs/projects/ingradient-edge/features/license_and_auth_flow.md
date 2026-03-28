# License And Auth Flow

## 목적

Edge는 online 환경과 offline 환경을 모두 지원해야 한다. 이 문서는 로그인, `users.json`, node-locked license, project package 실행 흐름을 정리한다.

## online 모드

- 로그인 기반
- auth/service 자동 검증
- 별도 license key 입력 없음

## offline 모드

1. Platform이 project package를 export한다.
2. package 안에 `dataset.json`, `classes.json`, `users.json`, `options.json`이 들어간다.
3. Edge는 local workspace를 만든다.
4. 인터넷이 없으면 `users.json` 기반 로컬 인증을 사용한다.
5. license key는 로컬에서 검증한다.

## license 특징

- node-locked
- PC 기반
- 서명 포함

## workspace 구조 예시

```text
C:/ProgramData/Ingradient/Edge/workspaces/
  project_x/
    source/
      project.ingproj
    runtime/
      images/
      labels/
      state.json
```

## 사용자 액션

- login
- change account
- logout

## 보안 원칙

- 비밀번호 평문 저장 금지
- `users.json`은 hash + salt 기반이어야 한다.
- project package 위변조 방지 고려가 필요하다.
- user 인증과 장비 인증은 분리된 계층이다.

## 운영상 주의

- online/offline 전환 시 UX가 완전히 달라지지 않도록 맞춘다.
- config 파일의 `platform_base_url`, `auth_base_url`는 설치 시 고정한다.
- offline license와 project package 버전 호환성을 관리해야 한다.

## 관련 문서

- `../deployment.md`
- `/home/june/workspace/projects/ingradient-edge/docs/concepts/license-system.md`
- `/home/june/workspace/projects/ingradient-edge/docs/.archive/releases/0.0.1-new-features.md`
