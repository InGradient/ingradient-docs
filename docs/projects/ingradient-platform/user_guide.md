# ingradient-platform User Guide

## 대상 사용자

- 데이터 관리자
- 라벨러와 리뷰어
- 프로젝트 운영자

## 시작하기

1. 로그인한다
2. 프로젝트를 선택한다
3. dataset 또는 asset 화면으로 진입한다

## 주요 기능 사용 흐름

### dataset과 asset 관리

- dataset 생성
- dataset 선택
- asset 탐색과 필터링
- 필요한 경우 업로드

### labeling

- 자산을 열어 라벨링한다
- reviewer는 승인과 반려를 수행한다

### export

- 선택된 row가 없으면 dataset 전체를 export한다
- 선택된 row가 있으면 선택된 자산만 export한다
- 여러 dataset을 선택하면 union 기준으로 export하고 중복 sample은 한 번만 포함한다

### training

- task별 training 화면에 진입한다
- train / validation / test dataset을 선택한다
- snapshot이 생성된 뒤 학습이 실행된다
- queue와 GPU 상태를 확인한다

## 자주 묻는 문제

- 권한이 없어 버튼이 비활성화되거나 숨겨짐
- export 범위가 기대와 다름
- training queue가 오래 대기함
- edge import 시 class mismatch 발생

## 관련 링크

- `../../product/user_flow.md`
- `../../product/role_permission_flow.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/export-feature.md`
- `/home/june/workspace/projects/ingradient-platform/docs/reference/training-feature.md`

