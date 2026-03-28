# User Flow

- 문서명: User Flow
- 목적: 사용자 관점의 전체 제품 흐름을 정의한다.
- 적용 범위: platform, medilabel, auth, ai request, edge sync
- 상태: Draft
- Owner: Product
- Reviewer: Platform / Medilabel / Edge Owners
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `role_permission_flow.md`, `multi_product_integration.md`

## 업데이트 시기

| 시기 | 내용 |
|------|------|
| 새 사용자 유형이 추가될 때 | 1장 사용자 유형 갱신 |
| 서비스 간 연결 흐름이 바뀔 때 | 2장 크로스 서비스 흐름 갱신 |
| 서비스별 주요 흐름이 추가/변경될 때 | 해당 서비스 섹션 갱신 |
| 새 서비스/제품이 추가될 때 | 서비스 섹션 추가, 크로스 서비스 흐름 반영 |
| 온보딩 또는 인증 절차가 바뀔 때 | 3장 auth 흐름 갱신 |

## 1. 주요 사용자 유형

| 사용자 유형 | 정의 | 주로 사용하는 서비스 |
|-------------|------|----------------------|
| Organization Admin | 조직 생성, 멤버/라이선스/디바이스 관리 | auth, platform |
| Project Manager | 프로젝트 설정, 데이터셋/클래스/멤버 관리, AI 요청 | platform, medilabel |
| Labeler | 이미지 라벨링 (bbox, point, classification) | platform, medilabel, edge |
| Reviewer | 라벨 검수 및 승인 | platform, medilabel |
| Client / Viewer | 데이터 조회, 다운로드, 리포트 확인 (읽기 전용) | platform, medilabel |
| Edge Field Operator | 현장 촬영, 라벨링, 디바이스 운영 | edge |
| AI Operator | 학습/추론 큐 관리, 모델 운영 | ai, platform |
| AI Developer | 모델 등록, 검증, 배포 | ai |
| System Admin | 전체 시스템 관리 (isSystemAdmin) | auth |

## 2. 전체 흐름 개요

### 2.1 공통 상위 흐름

```
가입/초대 → 로그인 → 조직/프로젝트 진입 → 데이터 생성/업로드 → 라벨링/검수 → AI 요청/결과 → Export/Report
```

### 2.2 크로스 서비스 흐름

서비스 간 데이터와 요청이 이동하는 주요 경로다. 개별 서비스 흐름을 읽기 전에 전체 연결 구조를 먼저 이해한다.

#### auth → 모든 서비스

```
[auth] 가입/로그인 → Access Token 발급
  → [platform] 프로젝트 진입 (토큰 검증, 멤버십 확인)
  → [medilabel] 프로젝트 진입 (토큰 검증, 멤버십 확인)
  → [edge] 온라인 로그인 (토큰 검증) 또는 오프라인 진입 (Entitlement 검증)
  → [ai] 운영 콘솔 진입 (토큰 검증, 관리자 권한 확인)
```

#### edge → platform

```
[edge] 현장 촬영/라벨링 → local DB 저장 (sync_state: local_only)
  → 온라인 복귀 시 자동 sync 시작 (sync_state: uploading)
  → [platform] 이미지 + bbox + 메타데이터 수신 (sync_state: synced)
  → [platform] 해당 프로젝트 데이터셋에서 확인 가능
```

#### platform → ai

```
[platform] 사용자가 Training Model 설정 → 데이터셋 선택 → 학습 시작
  → Training Snapshot 생성 (데이터 고정)
  → Training Queue에 등록 (GPU 할당 대기)
  → [ai] Job 실행 → 메트릭/체크포인트 생성
  → [platform] 실시간 메트릭 조회, 완료 후 Evaluation 결과 확인
```

#### platform → edge (패키지 배포)

```
[platform] 관리자가 Edge Package 생성 (데이터셋, 사용자, 옵션 선택)
  → 패키지 빌드 (클래스, 설정 포함)
  → [edge] .ige 패키지 로드 → 오프라인 작업 가능
  → [auth] Offline Entitlement 발급 (디바이스 + 사용자 바인딩)
```

#### medilabel → ai

```
[medilabel] 의료 데이터 업로드/세그멘테이션
  → AI 추론 요청
  → [ai] 모델 실행 → 결과 생성
  → [medilabel] Viewer에서 결과 오버레이
```

## 3. auth 중심 흐름

### 3.1 최초 가입 및 조직 생성

1. System Admin이 초기 Organization을 생성한다.
2. Admin이 Invitation (이메일 초대) 또는 Join Code (공개 코드)를 발급한다.
3. 사용자가 초대를 수락하거나 Join Code로 가입한다.
4. 가입 시 User 계정이 생성되고 Membership이 ACTIVE로 전환된다.
5. 사용자에게 Role이 부여된다 (ADMIN, ORGANIZER, MEMBER).

### 3.2 로그인 및 세션 관리

1. 사용자가 Login ID + 비밀번호로 로그인한다.
2. Access Token (HS256, 1시간)과 Refresh Token (30일)이 발급된다.
3. Access Token 만료 시 Refresh Token으로 갱신한다.
4. 로그인 5회 실패 시 계정이 15분간 LOCKED 된다.
5. 사용자는 활성 Session 목록을 조회하고 개별 세션을 취소할 수 있다.

### 3.3 비밀번호 재설정

1. 사용자가 forgot-password를 요청한다.
2. Password Reset Token이 발급된다.
3. 토큰으로 새 비밀번호를 설정한다.

### 3.4 프로젝트 접근

1. Organization 내에서 Project가 생성된다.
2. Membership을 가진 사용자가 Project Membership으로 프로젝트에 추가된다.
3. 각 프로젝트에서 별도 Role을 부여받을 수 있다.
4. 서비스별 권한 해석은 `role_permission_flow.md` 참조.

## 4. platform 중심 흐름

### 4.1 프로젝트 진입 및 데이터 관리

1. 사용자가 로그인 후 프로젝트 목록에서 프로젝트를 선택한다.
2. 기본 데이터셋 또는 추가 데이터셋을 탐색한다.
3. 이미지를 업로드하거나 Edge에서 sync된 데이터를 확인한다.
4. 클래스를 생성/관리하고 데이터셋에 클래스를 연결한다.
5. 필요 시 Dataset Member를 설정하여 데이터셋별 접근을 제한한다.

### 4.2 라벨링 및 검수

1. Gallery에서 이미지를 선택하고 상세 화면에 진입한다.
2. task type에 따라 라벨링한다:
   - object_detection: Bounding Box 생성 (x, y, w, h, classId)
   - classification: 이미지에 클래스 지정
   - point: Point 어노테이션 생성
3. Image Comment로 협업 의견을 남기고 Mention으로 특정 사용자를 호출한다.
4. Reviewer가 라벨을 검수하고 승인한다.
5. Split (train/eval/test)을 지정하여 학습 데이터를 분류한다.

### 4.3 학습 요청 및 결과 확인

1. Training 화면에서 새 Training Model을 생성한다 (task, architecture 선택).
2. Training Parameters를 설정한다 (epochs, batch_size, learning_rate 등).
3. Training Dataset Config로 train/validation/test 데이터셋을 지정한다.
4. 학습을 시작하면 Training Snapshot이 생성되고 Training Queue에 등록된다.
5. GPU가 할당되면 Training Run이 실행된다 (Draft → Queued → Running).
6. 실행 중 Training Metrics와 Training Events를 실시간 확인한다.
7. 완료 후 Training Checkpoint (best/last)와 Training Evaluation 결과를 확인한다.
8. 여러 Run을 비교하여 최적 모델을 선택한다.

### 4.4 Export 흐름

1. 데이터셋 전체 또는 선택된 이미지를 기준으로 Export Job을 시작한다.
2. 포맷을 선택한다 (COCO 또는 IGP).
3. Export Job이 pending → processing → completed로 진행된다.
4. 완료 후 ZIP 파일을 다운로드한다.

### 4.5 분석 및 리포트

1. Dashboard에서 프로젝트 통계를 확인한다:
   - 전체 이미지 수, 라벨링 진행률
   - 클래스 분포, 기여자별 작업량
   - 시계열 추이 (일별/시간별)
2. Edge Session Analytics에서 현장 작업 통계를 확인한다:
   - 작업자별 캡처/라벨링 수, 재촬영률
   - 세션 소요 시간, 단계별 타이밍

### 4.6 Edge 패키지 관리

1. Edge 화면에서 Edge Package를 생성한다 (데이터셋, 사용자, 옵션 선택).
2. 패키지가 빌드되면 Edge 디바이스에 배포한다.
3. Import 탭에서 Edge로부터 sync된 데이터를 확인한다.
4. Work Options에서 Edge 작업 옵션을 관리한다.

## 5. medilabel 중심 흐름

### 5.1 인증과 프로젝트 진입

1. 사용자는 `/login` 또는 `/signup`을 통해 인증한다.
2. `/projects`에서 접근 가능한 프로젝트를 선택한다.
3. 선택한 프로젝트는 기본적으로 `Catalog` 화면으로 진입한다.

### 5.2 Catalog와 Ingest 흐름

1. 사용자는 DICOM, NIfTI, segmentation 파일을 업로드한다.
2. 업로드 세션이 생성되고 파일 업로드와 ingest가 분리 수행된다.
3. Catalog row는 가능한 빨리 생성되고 상태는 `pending`, `processing`, `ready`, `failed`로 보인다.
4. 사용자는 search, filter, grouping으로 자산을 탐색한다.

### 5.3 Class와 Segmentation 흐름

1. 사용자는 class 페이지에서 label value와 class definition을 관리한다.
2. Segmentation import는 기존 source image에 연결된다.
3. 사용자 latest 결과 기준으로 viewer 기본 overlay가 결정된다.

### 5.4 Viewer 흐름

1. Catalog에서 자산을 선택해 viewer를 연다.
2. 연결된 segmentation이 있으면 자동 overlay된다.
3. 이후 라벨링과 후속 검수로 이어질 수 있다.

## 6. edge 중심 흐름

### 6.1 디바이스 등록 및 설정

1. Edge 앱을 설치하고 Platform URL을 설정한다.
2. 디바이스가 Platform에 등록된다 (Device UID 기반, 상태: PENDING).
3. Organization Admin이 디바이스를 승인한다 (상태: ACTIVE).
4. 카메라를 연결한다 (GigE 또는 USB).
5. 카메라 파라미터를 조정한다 (exposure, gain, ROI 등).

### 6.2 온라인 운영자 흐름

1. Login ID + 비밀번호로 온라인 로그인한다.
2. 프로젝트와 데이터셋을 선택한다.
3. 카메라 스트림을 확인하고 캡처한다 (Capture State: idle → streaming → capturing → saving).
4. 라벨링 후 저장하면 local DB에 기록된다 (sync_state: local_only).
5. 즉시 자동 sync가 시작된다 (sync_state: uploading → synced).
6. 이미지 갤러리, 통계, 진단 리포트를 확인한다.

### 6.3 오프라인 운영자 흐름

1. `.ige` 패키지를 로드한다 (데이터셋, 클래스, 사용자 정보 포함).
2. Offline Entitlement로 라이선스를 활성화한다 (RS256 JWT, 유효기간 제한).
3. 오프라인 로그인 후 데이터셋을 선택하거나 생성한다.
4. 카메라를 연결해 촬영과 라벨링을 계속한다.
5. 모든 데이터는 `local_only` 상태로 로컬에 저장된다.
6. 온라인 복귀 시 자동 sync가 진행된다.

### 6.4 Deflectometry 흐름

1. 프로젝트에 deflectometry가 활성화되어 있어야 한다.
2. Deflectometry 설정을 구성한다 (fringePeriod, brightness 범위, settleDelay, monitorTarget).
3. Deflectometry Sequence를 시작한다.
4. 패턴이 순서대로 투영된다 (x_orig → x_shift → y_orig → y_shift → solid).
5. 각 패턴마다 카메라가 캡처하고 시퀀스로 저장된다.
6. 완료 후 시퀀스 단위로 Platform에 sync된다.

### 6.5 공통 edge 예외 흐름

| 예외 상황 | 시스템 동작 |
|-----------|-------------|
| 촬영 중 네트워크 끊김 | 로컬 저장 계속, sync 대기열에 적재 |
| Sync 중 앱 종료 | 재시작 시 upload_failed 항목 자동 재시도 |
| 동일 이미지 중복 업로드 | upload_idempotency_key로 중복 방지 |
| 라이선스 만료 | offline grace mode (read_only) 진입 또는 기능 차단 |
| 카메라 미연결 | 기존 데이터 조회/라벨링은 가능, 캡처만 불가 |
| Entitlement 검증 실패 | clock_skew인 경우 경고, invalid/expired인 경우 재인증 필요 |

## 7. AI 운영 흐름

### 7.1 운영자 흐름

1. 운영자는 overview에서 backlog와 worker 상태를 확인한다.
2. jobs, queues, workers, models 화면으로 drill-down 한다.
3. 실패 job의 원인을 로그, 메트릭, alert와 함께 확인한다.
4. retry, cancel, preload, unload 같은 조치를 수행한다.

### 7.2 AI 개발자 흐름

1. 새 recipe 또는 runtime adapter를 추가한다.
2. Model registry에 artifact와 metadata를 등록한다.
3. Staging 또는 validation queue에서 검증한다.
4. Profiling과 metric을 확인한 뒤 승격 또는 rollback을 결정한다.

## 8. 예외 시나리오

| 예외 | 영향 범위 | 시스템 대응 |
|------|-----------|-------------|
| 권한 부족 | 모든 서비스 | 기능 숨김 또는 거부 메시지 표시 |
| Ingest/Export 실패 | platform, medilabel | 실패 상태 표시, 재시도 가능 |
| Queue 적체 | platform, ai | 대기 상태 표시, 예상 시간 안내 |
| Edge 장기 오프라인 | edge | 로컬 작업 계속, Entitlement 만료 시 grace mode |
| Token/Membership 변경 | 모든 서비스 | 다음 요청 시 권한 재검증, 필요 시 재로그인 |
| 카메라 연결 실패 | edge | ERROR 상태 전환, 재연결 안내 |
| 동기화 충돌 | edge → platform | 서버 기준 우선, 충돌 로그 기록 |

## 9. 시스템 반응 원칙

- 장시간 작업은 상태가 명시적으로 보여야 한다 (pending, processing, completed, failed).
- 실패 이유는 사용자가 이해 가능한 수준으로 노출한다.
- Backend enforcement와 frontend UI 노출 규칙이 어긋나지 않아야 한다.
- Cloud와 on-prem, online과 offline 사이에서도 핵심 UX 흐름은 최대한 동일하게 유지한다.
- 크로스 서비스 흐름에서 한 서비스의 상태 변경은 연관 서비스에 적절히 전파되어야 한다.
