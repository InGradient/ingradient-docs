# Camera Diagnostics UI

## 목적

카메라 연결 실패나 성능 저하를 현장에서 빠르게 진단할 수 있어야 한다. 이 문서는 Edge의 camera diagnostics UI가 보여줘야 하는 정보와 액션을 정리한다.

## 화면에서 보여야 할 것

- 현재 연결된 camera
- connection state
- exposure / gain / fps 계열 값
- brightness, focus score
- overexposed %, underexposed %
- 최근 에러/경고 로그

## setup과의 관계

- diagnostics는 단순 촬영 화면과 분리된 점검 관점이다.
- `Setup` 모드는 pattern/sequence 준비에 초점을 두고,
- diagnostics는 camera recovery와 성능 상태 파악에 초점을 둔다.

## 사용자 액션

- camera 재연결
- device 설정 확인
- preview restart
- test shot 실행
- 상태 로그 복사

## 실패 시나리오

- no camera
- preview 미시작
- trigger/pixel format mismatch
- 과다 노출 / 저노출
- frame drop

## 운영상 주의

- diagnostics 수치는 local hardware 조건에 크게 좌우되므로 절대값보다 변화 추세와 threshold를 함께 보여주는 편이 낫다.
- settings 이동, images 탭 이동 시 camera를 멈추는 정책과 충돌하지 않게 해야 한다.

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-edge/docs/guides/dev/camera-diagnostics.md`
- `/home/june/workspace/projects/ingradient-edge/docs/.archive/releases/0.0.2-ui-changes.md`
