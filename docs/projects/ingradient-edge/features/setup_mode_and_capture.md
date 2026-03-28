# Setup Mode And Capture

## 목적

`ingradient-edge`의 `Capture`는 단순 촬영 화면이 아니라 현장 장비 확인과 deflectometry sequence 준비까지 포함하는 작업 화면이다. `Setup` 서브모드는 이 준비 단계를 담당한다.

## 구조

- `Capture`
- `Setup`

`Setup`은 별도 상위 탭이 아니라 `Capture` 안의 서브모드다.

## Setup에서 해야 하는 일

- 패턴 선택
- monitor 선택
- exposure / gain / gamma / brightness range / settle delay 조정
- overlay 토글
- `Test Shot`
- `Run Full Sequence`

## sequence 기준

초기 구현은 고정 5-step sequence를 기준으로 한다.

- `x_orig`
- `x_shift`
- `y_orig`
- `y_shift`
- `solid`

## 안정화 감지 옵션

- `Auto detect stable frame` 체크박스
- `ROI Size` 선택
- 자동 감지 시 `Settle Delay`는 최소 대기 시간으로 동작
- 안정 상태가 확인되면 그 직후 프레임을 저장한다.

## 상태 표시

- `NO CAMERA`
- `SETUP`
- `PREVIEW`
- `RUNNING`
- `ERROR`

진행 중에는 `Step 1 / 5`, `Saving captured sequence`, `Uploading sequence` 같은 텍스트를 함께 보여준다.

## Test Shot 규칙

- 영구 저장하지 않는다.
- 중앙 preview에 freeze frame을 잠깐 표시한다.
- 로그 패널에 성공/실패 한 줄이 남는다.

## 운영상 주의

- setup은 고수준 sequence 준비 화면이고, 저수준 device connection settings와 섞지 않는다.
- sequence 실행 중 중간 결과를 Images에 바로 노출하지 않는다.
- 카메라가 없을 때 metrics는 숨기거나 `N/A`로 표현한다.

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-edge/docs/.archive/releases/0.0.2-ui-changes.md`
- `/home/june/workspace/projects/ingradient-edge/docs/concepts/stability-capture.md`
