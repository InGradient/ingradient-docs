# ingradient-edge Deployment

## 실행 형태

`ingradient-edge`는 설치형 애플리케이션이다.

주요 배포 형태:

- Windows installer
- GitHub Releases 배포
- 현장 장비에 직접 설치

## 인프라 요구사항

- Windows 환경
- camera SDK
- local storage
- 필요 시 auth / platform 연결 정보 또는 offline package

## 설치 전 요구사항

- 지원 OS와 관리자 권한
- GigE 전용 NIC 또는 USB 카메라 환경 확인
- camera SDK 설치
- 방화벽과 NIC 설정 점검

## 설치 후 기본 설정

- Server / Auth / Platform URL 설정
- GigE NIC 최적화
- GevSCPD 조정
- diagnostics 실행

## 오프라인 배포 고려사항

- `.ige` package 로드
- local login
- license activation
- later sync를 위한 local queue 보존

## 배포 검증 포인트

- 카메라 탐색과 연결
- preview / capture
- 로컬 저장
- sync 또는 package export
- diagnostics report 생성

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/installation.md`
- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/setting-guide.md`
- `/home/june/workspace/projects/ingradient-edge/docs/reference/edge-platform-sync.md`

