# Settings

## 진입 경로

- Left Nav "Settings" 클릭

## 화면 구조

### 상단

- 페이지 제목 "Settings"

### 섹션 구분

Settings 페이지는 크게 **정적 설정** (읽기 전용)과 **동적 정책** (수정 가능) 두 섹션으로 나뉜다.

---

### Static Configuration (정적 설정 — 읽기 전용)

시스템 배포 시 결정되는 설정. 콘솔에서는 확인만 가능하다. 변경이 필요하면 인프라 설정을 수정한다.

**Environment:**
- Environment Name (production / staging / development)
- Region
- Deployment Mode (saas / dedicated / on-prem / hybrid)

**Storage:**
- Storage Backend (gcs / s3)
- Bucket Name
- 연결 상태 (healthy / error)

**Auth Integration:**
- Auth Service URL
- 연결 상태 (healthy / error)
- 사용 중인 Scope 목록

**Database:**
- Connection Status (healthy / error)
- Migration Version

**Queue Backend:**
- Type (redis)
- Connection Status (healthy / error)

각 항목은 라벨 + 값 형태로 표시. 연결 상태는 뱃지 (healthy=초록, error=빨강).

---

### Dynamic Policies (동적 정책 — 수정 가능)

운영 중 관리자가 조정할 수 있는 정책. 변경 시 즉시 적용된다.

**Alert Thresholds:**

| 항목 | Warning | Critical | 단위 |
|------|---------|----------|------|
| Queue Wait (realtime) | 숫자 입력 | 숫자 입력 | seconds |
| Queue Wait (interactive) | 숫자 입력 | 숫자 입력 | seconds |
| Queue Wait (batch) | 숫자 입력 | 숫자 입력 | minutes |
| Worker Heartbeat Missing | 숫자 입력 | 숫자 입력 | seconds |
| Node Heartbeat Missing | 숫자 입력 | 숫자 입력 | seconds |
| Worker OOM Repeated | 숫자 입력 (횟수/시간) | 숫자 입력 | count/minutes |
| Worker Restart Count | 숫자 입력 (횟수/시간) | 숫자 입력 | count/minutes |
| GPU Temperature | 숫자 입력 | 숫자 입력 | °C |
| Backend Saturation | 숫자 입력 | 숫자 입력 | % |
| Model Locality Miss | 숫자 입력 | 숫자 입력 | % |

각 행: 항목 라벨 + Warning 입력 + Critical 입력 + 단위

**Queue Defaults:**
- Default Concurrency Limit (숫자 입력)
- Default Priority Policy (드롭다운: fifo / priority_weighted)

**Preload Defaults:**
- Default Preload Limit per Runtime (숫자 입력)
- Eviction Cooldown (숫자 입력, minutes)

**Overflow Policy:**
- Self-Hosted Saturation Threshold (숫자 입력, %)
- Enable External Execution Fallback (토글)
- CPU Fallback for Compatible Recipes (토글)

### 하단

- 변경사항이 있으면 "Save" 버튼 활성화
- 변경 시 "영향: N개 queue / N개 worker에 즉시 적용됩니다" 안내 표시
- "Reset to Defaults" 버튼 (기본값으로 초기화)

---

### Secret Health (비밀 설정 건강 상태)

- Storage Credential 상태 (valid / expired / error)
- Auth Service Token 상태
- 마지막 확인 시각
- "Check Now" 버튼 (즉시 건강 확인 실행)

## 주요 인터랙션

- **동적 정책 값 변경**: "Save" 버튼 활성화 + 영향 범위 표시
- **"Save" 클릭**: 확인 다이얼로그 ("변경사항이 즉시 적용됩니다") → 저장 → 토스트
- **"Reset to Defaults" 클릭**: 확인 다이얼로그 → 기본값 복원 → 토스트
- **"Check Now" 클릭**: Secret 건강 확인 실행 → 결과 갱신
- **탭 이동 시 미저장 변경**: 확인 다이얼로그 ("저장하지 않은 변경사항이 있습니다")

## 상태별 화면

- loading: 설정 값 스켈레톤
- 저장 완료: 성공 토스트
- 저장 실패: 에러 토스트 + 에러 메시지
- Secret 에러: 해당 항목 빨간색 강조 + 에러 메시지
- 변경 없음: "Save" 버튼 비활성화
