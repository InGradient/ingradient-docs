# ingradient-ai Wireframes

- 문서명: ingradient-ai Wireframes
- 목적: Ops Console 각 화면의 구조, 요소 배치, 인터랙션을 설계한다.
- 상태: Draft
- Owner: Product / AI
- 마지막 수정일: 2026-03-30

## 접근 권한

- Ops Console은 **auth-service Admin 계정**으로만 접근할 수 있다
- 로그인 시 auth-service에 인증하며, admin 역할이 아니면 접근이 거부된다
- 로그인 페이지를 제외한 모든 페이지는 인증 후에만 표시된다

## 공통 레이아웃

### App Shell

```
┌─────────────────────────────────────────────────────────┐
│ Top Utility Bar (환경, 시간 범위, 검색, 사용자)           │
├──────────┬──────────────────────────────────────────────┤
│          │ Page Header (제목 + 글로벌 액션)               │
│ Left     ├──────────────────────────────────────────────┤
│ Nav      │ Page Content                                 │
│          │  ├ Summary Zone (KPI/카드)                    │
│          │  ├ Filter Bar                                │
│          │  ├ Main Data Area (테이블/차트)                │
│          │  └ Detail Drawer (오른쪽 오버레이)              │
│          ├──────────────────────────────────────────────┤
│          │ Global Feedback (토스트, 다이얼로그)            │
└──────────┴──────────────────────────────────────────────┘
```

### Left Navigation

- Overview
- Jobs
- Workers & GPU
- Models
- Usage Analytics
- Events & Alerts
- Settings

### 상태 표현 규칙

| 상태 | 색상 | 용도 |
|------|------|------|
| healthy / succeeded | 초록 | 정상, 성공 |
| active / running | 파랑 | 실행 중, 활성 |
| idle | 회색 | 대기 중, 유휴 |
| warning / degraded | 노랑/주황 | 주의, 성능 저하 |
| failed / error | 빨강 | 실패, 에러 |
| disabled / maintenance | 회색 (빗금) | 비활성, 유지보수 |

### 공통 패턴

- **Detail Drawer**: 목록에서 행 클릭 시 오른쪽에서 슬라이드. 전체 페이지 이동 없이 상세 확인
- **확인 다이얼로그**: 파괴적 액션(cancel, drain, restart 등)은 반드시 확인 다이얼로그 사용
- **토스트**: 액션 결과(성공/실패)는 토스트로 피드백
- **실시간 업데이트**: Overview KPI, queue backlog, worker 상태, 실행 중 job 진행률은 SSE로 실시간 반영

## 화면 목록

| 화면 | 파일 |
|------|------|
| 로그인 | [login.md](./login.md) |
| Overview | [overview.md](./overview.md) |
| Jobs | [jobs.md](./jobs.md) |
| Job 생성 | [new_job.md](./new_job.md) |
| Workers & GPU | [workers_gpu.md](./workers_gpu.md) |
| Models | [models.md](./models.md) |
| Events & Alerts | [events_alerts.md](./events_alerts.md) |
| Usage Analytics | [usage_analytics.md](./usage_analytics.md) |
| Settings | [settings.md](./settings.md) |
