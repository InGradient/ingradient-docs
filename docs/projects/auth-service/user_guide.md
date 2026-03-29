# auth-service User Guide

- 문서명: auth-service User Guide
- 목적: Admin Console의 각 페이지 사용법과 주요 운영 흐름을 안내한다.
- 적용 범위: auth-service Admin Console
- 상태: v0.0.2
- Owner: Auth
- 마지막 수정일: 2026-03-28

## 대상 사용자

- System Admin (Admin Console 접근 권한)

## 접속 방법

1. 브라우저에서 `http://{서버주소}:18081/admin` 접속
2. System Admin 계정으로 로그인 (초기 계정: `admin` / `admin`)
3. 로그인 후 자동으로 Users 페이지로 이동

> 초기 비밀번호는 반드시 변경하세요.

---

## 페이지별 사용법

### 1. Users (사용자 관리)

경로: `/admin/users`

**조회 및 검색**
- 전체 사용자 목록이 테이블로 표시된다 (Login ID, Name, Email, Role, Status, Last Login)
- 상단 검색창에 Login ID, 이름, 이메일로 검색 가능
- Role 필터: All / Admin / Member

**사용자 생성**
1. "Create User" 버튼 클릭
2. Login ID, Password, Display Name 입력
3. 생성 완료 후 목록에 즉시 반영

**사용자 상세 (행 클릭)**
- Display Name, Email 수정 가능
- Role 변경 (Admin ↔ Member)
- "Deactivate" — 계정 비활성화 (즉시 세션 폐기)
- "Activate" — 비활성화된 계정 재활성화
- "Reset Password" — 임시 비밀번호 생성 (화면에 표시, 사용자에게 전달)
- "Force Logout" — 해당 사용자의 모든 세션 즉시 종료
- "Delete" — 계정 삭제 (soft delete)

---

### 2. Organizations (조직 관리)

경로: `/admin/organizations`

**조회**
- 상단 요약 카드: 전체 / Active / Inactive 조직 수
- 테이블: Code, Name, Status
- 검색창으로 이름 또는 코드 검색

**조직 생성**
1. "Create Org" 버튼 클릭
2. Code (고유 식별자, 변경 불가), Name 입력

**조직 상세 (행 클릭)**
- Name, Status 수정 가능
- **멤버 관리 섹션:**
  - 현재 멤버 목록 (User, Email, Role)
  - 멤버 역할 변경 (드롭다운)
  - 멤버 제거
  - 새 멤버 추가: 사용자 선택 → 역할 선택 → Add

---

### 3. Products (Product 관리)

경로: `/admin/products`

**조회**
- 테이블: Code, Name, Status, Actions
- 검색창으로 이름 또는 코드 검색

**Product 생성**
1. "Create Product" 버튼 클릭
2. Code, Name 입력

**Product 수정**
- Edit 버튼 → Name, Status (ACTIVE/INACTIVE) 수정
- Delete 버튼 → 확인 후 삭제

**멤버 조회**
- Members 버튼 → Product에 배정된 멤버 목록 (Login ID, Name, Role) 확인 (읽기 전용)

---

### 4. Licenses & Devices (라이선스/디바이스 통합)

경로: `/admin/licenses`

**조회**
- 상단 요약 카드: Total / Active / Online / Offline 수
- 통합 테이블: Organization, Name, Device UID, Mode (Online/Offline), Status, Date
- 검색 + Mode 필터 (All/Online/Offline) + Status 필터 (All/Active/Revoked)

**온라인 디바이스**
- Edge 앱이 서버에 접속하면 자동 등록 (이 페이지에서 직접 등록하지 않음)
- Active 디바이스: "Revoke" 가능
- Revoked 디바이스: "Delete" 가능

**오프라인 라이선스 발급**
1. "Issue Offline License" 버튼 클릭
2. Hardware Fingerprint (Edge 디바이스에서 확인), Label, Organization, Valid Until 입력
3. 발급 후 라이선스 키가 표시됨
4. "Copy Key" 버튼으로 복사 → Edge 디바이스에 수동 입력

**오프라인 라이선스 폐기**
- Active 라이선스의 "Revoke" 버튼 클릭

---

### 5. Devices (디바이스 전용)

경로: `/admin/devices` (사이드바에서 별도 접근 가능, Licenses 페이지와 유사하지만 온라인 디바이스만 표시)

**조회**
- 온라인 디바이스만 표시
- Status 필터 (All/Active/Revoked)

**액션**
- Active → "Revoke"
- Revoked → "Delete"

---

### 6. Invitations (초대 관리)

경로: `/admin/invitations`

**조직 선택**
- 상단 드롭다운에서 조직을 먼저 선택해야 초대 목록이 표시됨

**초대 생성**
1. "Create Invitation" 버튼 클릭
2. Email, Role ID, TTL(시간, 기본 72시간) 입력
3. 생성 후 초대 토큰이 발급됨 (이메일 발송 설정 시 자동 발송)

**초대 관리**
- PENDING 상태: "Cancel" 버튼으로 취소 가능
- ACCEPTED 상태: 액션 없음 (이미 수락됨)
- EXPIRED 상태: 자동 만료, 새로 발송 필요

---

### 7. Sessions (세션 관리)

경로: `/admin/sessions`

**조회**
- 전체 활성 세션 목록: User, Login ID, IP, User Agent, Created, Last Used
- 페이지네이션 (20개씩)

**세션 폐기**
- 각 세션의 "Revoke" 버튼 → 확인 후 즉시 폐기
- 폐기된 세션의 사용자는 다음 API 호출 시 인증 실패

---

### 8. Audit Log (감사 로그)

경로: `/admin/audit`

**조회**
- 테이블: Time, Event, User ID, Org ID, Meta
- 페이지네이션 (20개씩)

**필터**
- Event 유형 드롭다운 (login_success, login_fail, user_create, member_added, device_registered 등)
- 날짜 범위 (From / To)

**내보내기**
- "Export CSV" 버튼 → 현재 필터 조건으로 CSV 파일 다운로드

---

## 주요 운영 흐름

### 새 조직 온보딩

1. **Organizations** → Create Org (코드, 이름)
2. **Organizations** → 조직 상세 → 멤버 추가 (관리자 계정 배정)
3. **Licenses** → 해당 조직에 라이선스 할당 (API: `POST /organizations/:orgId/license`)
4. **Invitations** → 조직 선택 → 멤버 초대 발송

### Edge 디바이스 운영

1. Edge 앱이 서버 접속 → 자동 디바이스 등록 (Licenses 페이지에서 확인)
2. 오프라인 환경: Licenses → "Issue Offline License" → 키 복사 → 디바이스에 입력
3. 디바이스 교체: 기존 디바이스 Revoke → Delete → 새 디바이스 자동 등록

### 보안 사고 대응

1. **Sessions** → 의심 세션 Revoke
2. **Users** → 해당 사용자 "Force Logout" (전체 세션 종료)
3. **Users** → 필요 시 "Deactivate" (로그인 차단)
4. **Audit Log** → `login_fail` 이벤트 필터로 공격 시도 확인
5. **Audit Log** → Export CSV로 보고서 추출

### 비밀번호 문제 해결

- 사용자가 비밀번호를 잊음 → **Users** → "Reset Password" → 임시 비밀번호 전달
- 계정이 잠금됨 (5회 실패) → 15분 자동 해제 또는 **Users** → 계정 상태 확인

## 환경 설정

| 환경변수 | 설명 | 기본값 |
|---------|------|--------|
| EMAIL_PROVIDER | 이메일 발송 방식 (console/smtp) | console |
| SMTP_HOST | SMTP 서버 주소 | — |
| SMTP_PORT | SMTP 포트 | 587 |
| SMTP_USER | SMTP 인증 사용자 | — |
| SMTP_PASS | SMTP 인증 비밀번호 | — |
| EMAIL_FROM | 발신자 이메일 | noreply@ingradient.io |

> `EMAIL_PROVIDER=console`이면 이메일이 서버 콘솔에만 출력됩니다. 실제 발송하려면 `smtp`로 변경하고 SMTP 설정을 입력하세요.

## 관련 문서

- API 계약: `api_contract.md`
- 데이터 모델: `data_model.md`
- 기능 상세: `features/README.md`
