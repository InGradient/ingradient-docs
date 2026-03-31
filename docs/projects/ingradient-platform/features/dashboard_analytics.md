# 대시보드 / 분석 (Dashboard & Analytics)

## 기능 개요

프로젝트의 데이터 수집 현황, 라벨링 진행 상태, 클래스 분포 등을 8종 위젯으로 시각화하는 분석 화면이다.

## 문제 정의

데이터 관리자와 프로젝트 운영자가 프로젝트 상태를 한눈에 파악하고, 데이터 편향이나 작업 병목을 빠르게 식별해야 한다.

## 범위 / 비범위

- **포함**: 8종 분석 위젯, 날짜 범위 필터, 데이터셋/클래스 필터, 위젯 레이아웃 커스터마이징, GPU/큐 상태
- **제외**: 학습 결과 상세 → Training, Edge 디바이스 관리 → Edge

## 위젯 목록

| 위젯 | 차트 타입 | 내용 |
|------|-----------|------|
| Data Collection | Bar chart | 총 이미지 수, 데이터셋별 분포 |
| Timeline | Line chart | 시간대별 이미지 수집 추이 (7일 이하: 시간별, 초과: 일별) |
| Labeling Status | Donut chart | 라벨 완료 / 미완료 비율 |
| Pending/Processed | Donut chart | 작업 대기 / 처리 완료 비율 |
| Class Distribution | Horizontal bar | 클래스별 이미지 수 |
| Dataset Distribution | Stacked bar + table | 데이터셋별 클래스 구성 |
| Uploader Activity | Grouped bar | 팀원별 업로드/라벨링 기여도 |
| Source Breakdown | Table + bar | 카메라/장비별 데이터 출처 분포 |

Edge 프로젝트(deflectometry 모드)에서 추가 위젯:
- Capture 성공률, Operator 통계, 세션 분석

## 사용자 시나리오

### 프로젝트 현황 확인

- **기본 흐름**:
  1. 대시보드(`/`) 진입 → 위젯 그리드 표시
  2. 날짜 범위 선택 → 위젯 데이터 갱신
  3. 데이터셋/클래스 필터 적용
  4. GPU 상태, 학습 큐 상태 확인

### 위젯 레이아웃 커스터마이징

- **기본 흐름**:
  1. 위젯 드래그앤드롭으로 순서 변경
  2. 2~3 컬럼 그리드 배치
  3. 레이아웃 자동 저장 (사용자별)

## UI / UX 방향

- 2~3 컬럼 반응형 그리드
- 각 위젯에 날짜 범위/필터 반영
- GPU 상태 바 (상단)
- 학습 큐 요약 (진행 중/대기 수)
- 분석 페이지(`/analysis`)는 프로젝트 선택 기능이 추가된 동일 위젯 세트

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `GET /api/projects/{id}/analysis` | 프로젝트 분석 데이터 |
| `GET /api/dashboard/preferences` | 위젯 레이아웃 로드 |
| `POST /api/dashboard/preferences` | 위젯 레이아웃 저장 |
| `GET /api/training/gpus` | GPU 상태 |
| `GET /api/training/queue` | 학습 큐 상태 |

- 모든 역할이 조회 가능
- 위젯 레이아웃은 사용자별 저장

## 테스트 계획

- 빈 프로젝트 → 위젯에 "데이터 없음" 표시
- 날짜 범위 변경 → 차트 데이터 갱신
- 위젯 드래그앤드롭 → 새로고침 후 레이아웃 유지
- 7일 이하 선택 → 시간별 차트, 초과 → 일별 차트 자동 전환
