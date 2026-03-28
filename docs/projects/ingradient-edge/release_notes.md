# ingradient-edge Release Notes

## Version 0.0.2

Source document date is not explicitly recorded in the archived release note. The entry below reflects the latest `0.0.2` UI change summary preserved in repo docs.

### Included

- `Capture` 안에 `Setup` 서브모드 추가
- deflectometry pattern preview, test shot, full 5-step sequence 실행 UI 추가
- sequence 상태, 진행 단계, metrics 노출
- `Images`가 일반 이미지와 deflectometry 결과를 함께 다루되 metadata를 유지하도록 확장
- 카메라 자동 재연결과 탭 이동 시 camera stop 정책 보강

### Operational Impact

- local agent, local record, platform sync 계약이 모두 sequence metadata를 이해해야 한다.
- `Setup` UI는 low-level device settings와 구분해서 운영 문서가 필요하다.

## Version 0.0.1

Archived source is a feature consolidation document for the initial phase scope.

### Included

- 로그인, 계정 변경, 오프라인 로그인 구조 정리
- dataset 선택 기반 현장 작업 흐름 고정
- camera preview, capture, BBox labeling 중심 메인 화면 정의
- export, dataset scope, node-locked license 개념 정리

### Operational Impact

- offline export/import 절차와 local auth 데이터 보호 정책이 필수다.
- dataset/class identifier는 Platform과 동일하게 유지해야 한다.

## Logging Rule

- capture workflow, sync, installer, license, setup sequence 변경은 모두 릴리즈 노트에 남긴다.
- 하드웨어 제약이나 known limitation은 기능 추가와 분리해서 기록한다.

## Source Documents

- `/home/june/workspace/projects/ingradient-edge/docs/.archive/releases/0.0.1-new-features.md`
- `/home/june/workspace/projects/ingradient-edge/docs/.archive/releases/0.0.2-ui-changes.md`
