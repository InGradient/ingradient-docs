# ingradient-edge Architecture

## 내부 구조 개요

edge는 현장 장치와 cloud 사이에 놓인 설치형 runtime이다.

핵심 모듈은 아래와 같다.

- auth and local login
- license management
- server and connection settings
- dataset / workspace shell
- camera connection and preview
- capture and labeling
- local persistence
- sync engine
- diagnostics and troubleshooting tools

## 주요 동작 모드

### 온라인 모드

- auth-service 로그인
- platform과 직접 연동
- 촬영 후 자동 sync

### 오프라인 모드

- `.ige` package 기반 local auth
- license 검증
- local_only 상태로 데이터 저장
- 온라인 복귀 시 자동 sync

## 핵심 사용자 흐름과 구조 연결

### 초기 설정

- Server URL, Auth URL, Platform URL 설정
- 연결 테스트와 로그인

### capture and labeling

- 카메라 rescan
- connect
- preview
- capture
- class 선택과 bbox 또는 labeling
- 로컬 저장

### sync

- local_only
- uploading
- synced
- failed

### diagnostics

- camera diagnostics
- export diagnostic report
- connectivity and license status 확인

## 데이터 경계

- local DB 또는 local filesystem은 edge runtime state를 소유한다
- 중앙 SoT는 platform 또는 storage 쪽에 있다
- sync 전까지는 edge가 임시 owner 역할을 한다

## 장애와 복구 포인트

- 네트워크 중단 중에도 capture는 계속 가능해야 한다
- sync 중 앱 종료 후 retry 가능해야 한다
- 중복 업로드는 idempotency로 방지해야 한다
- 라이선스와 user validity 만료를 구분해야 한다

## 확장 포인트

- deflectometry 같은 특수 capture mode
- richer offline diagnostics
- local AI 또는 edge-side inference 보강

