# ingradient-edge Operations

## 운영 목적

- 현장 캡처와 local labeling을 안정적으로 유지한다
- 오프라인 환경에서도 데이터 손실 없이 작업을 이어간다
- 온라인 복귀 시 sync를 안전하게 완료한다

## 핵심 메트릭

- capture success
- sync lag
- upload retry count
- offline duration
- crash loop count
- license validation failure

## 대표 운영 상태

- online / offline
- local_only / uploading / synced / failed
- camera connected / disconnected
- license active / expired

## diagnostics 포인트

- NIC Jumbo Frame
- Receive Buffers
- GevSCPD
- subnet match
- camera reachability
- SDK availability

## 자주 보는 운영 문제

- GigE camera grab fail
- cvsCam crash loop
- port or firewall 문제로 discovery 실패
- sync 재시도 반복
- package reload 시 local state 기대와 불일치

## 운영 조치

- NIC 최적화 실행
- Reset NIC
- 카메라 전원 재시작
- diagnostics export
- offline package 재로드

## 관련 근거 문서

- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/installation.md`
- `/home/june/workspace/projects/ingradient-edge/docs/guides/user/setting-guide.md`
- `/home/june/workspace/projects/ingradient-edge/docs/guides/dev/user-scenarios.md`
- `/home/june/workspace/projects/ingradient-edge/docs/trouble-shooting/README.md`

