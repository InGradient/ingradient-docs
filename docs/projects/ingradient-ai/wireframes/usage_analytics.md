# Usage Analytics

## 진입 경로

- Left Nav "Usage Analytics" 클릭

## 화면 구조

### 상단

- 페이지 제목 "Usage Analytics"
- 시간 범위 선택기 (프리셋: Last 24h / 7d / 30d / Custom)

### Chart Grid

4~6개의 차트를 2×3 또는 3×2 그리드로 배치한다. 각 차트는 제목과 범례를 포함한다.

**GPU Utilization Timeline:**
- X축: 시간, Y축: 평균 GPU 활용률 (%)
- 노드별 또는 전체 평균 라인

**Queue Wait Trend:**
- X축: 시간, Y축: 평균/p95 대기 시간
- runtime별 라인 또는 전체 평균

**Model Usage Top-N:**
- 가로 바 차트: model별 job 실행 횟수 상위 N개
- 각 바에 성공/실패 비율 색상 구분

**GPU-Hours by Model:**
- 가로 바 차트: model별 GPU 사용 시간 (GPU-hours)
- 리소스 소비가 큰 model 파악 용도

**Failure Distribution:**
- 도넛 또는 가로 바 차트: 실패 코드별 비율
- 주요 실패 원인 파악 용도

**Hour-of-Day Heatmap:**
- X축: 시간대 (0~23), Y축: 요일
- 셀 색상: job 수 또는 GPU 활용률 강도
- 부하 패턴 파악 용도

### Breakdown Table

- 차트 아래에 상세 수치를 테이블로 표시한다
- 기본 뷰: model별 breakdown
- 뷰 전환: Model / Runtime / Node / Backend 단위
- 컬럼:
  - Name (model명 / runtime / node / backend)
  - Job Count (성공/실패 각각)
  - Success Rate (%)
  - GPU-Hours
  - Avg Wait (ms)
  - p95 Wait (ms)
  - OOM Count
  - Avg Duration
- 행 클릭 시 해당 조건으로 Jobs 페이지 필터 이동

### 하단

- breakdown 테이블 페이지네이션

## 주요 인터랙션

- **시간 범위 변경**: 모든 차트와 breakdown 테이블이 해당 범위로 갱신
- **차트 호버**: 해당 시점/항목의 상세 수치 툴팁
- **차트 영역 드래그**: 시간 범위 확대 (zoom)
- **breakdown 뷰 전환**: Model / Runtime / Node / Backend 탭
- **breakdown 행 클릭**: Jobs 페이지로 이동하여 해당 조건의 job 목록 표시
- **"비용 추정" 라벨**: GPU-hours에 단가를 적용한 추정치 표시 (추정값임을 명시)

## 상태별 화면

- loading: 차트 스켈레톤, 테이블 스켈레톤
- 데이터 없음: "선택한 기간에 사용 데이터가 없습니다" 안내
- 데이터 부족: 차트에 "데이터가 충분하지 않아 추세를 표시할 수 없습니다" 안내
