# ingradient-edge User Guide

## 대상 사용자

- 현장 운영자
- 설치 담당자
- 원격 지원 엔지니어

## 시작하기

1. 설치 가이드를 따라 앱과 camera SDK를 설치한다
2. 필요하면 NIC와 방화벽을 설정한다
3. 앱에서 연결 설정과 diagnostics를 확인한다
4. 프로젝트 / dataset을 선택하고 촬영을 시작한다

## 주요 사용 흐름

### 온라인 사용

- 로그인
- dataset 선택
- 카메라 연결
- capture
- 라벨링 후 저장
- 자동 sync 확인

### 오프라인 사용

- `.ige` package 로드
- offline login
- capture와 local labeling
- online 복귀 후 자동 sync

### GigE 안정화

- NIC 최적화 실행
- GevSCPD 조정
- diagnostics 복사 후 지원 요청

## 자주 묻는 문제

- 카메라가 발견되지 않음
- grab 실패가 반복됨
- sync가 오래 걸림
- 라이선스가 만료됨
- package를 다시 로드했는데 기대와 다름

## 관련 링크

- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/installation.md`
- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/setting-guide.md`
- `/home/june/workspace/projects/ingradient-edge/docs/trouble-shooting/README.md`

