# Role Permission Flow

- 문서명: Role Permission Flow
- 목적: 역할과 권한이 실제 사용자 행동과 UI에서 어떻게 적용되는지 설명한다.
- 적용 범위: auth-service, platform, medilabel, edge, ai ops console
- 상태: Draft
- Owner: Product / Auth
- Reviewer: Platform / Medilabel / Edge Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `../ops/security_access_control.md`, `../api/auth_api.md`

## 1. 역할 계층

공통적으로 아래 계층을 기준으로 본다.

- organization-level admin or owner
- project-level manager or operator
- working role: labeler, reviewer
- read-only role: viewer or client

각 제품은 이 공통 틀 위에 자기 도메인 permission을 얹는다.

## 2. auth-service의 역할

auth-service는 아래 기초 사실을 소유한다.

- 사용자 identity
- organization membership
- project access 사실
- role / permission의 기본 메타

단, "이 제품에서 export를 누를 수 있는가", "이 화면의 action을 보여줄 것인가" 같은 최종 business permission은 각 서비스가 해석한다.

## 3. platform 권한 흐름

### owner

- 프로젝트당 1명만 존재한다
- 프로젝트 전체 관리 권한 (설정, 삭제 포함)
- 멤버 초대 및 역할 부여 (manager 권한 부여 가능)
- Role Permission Matrix 수정 권한
- owner만 가능한 것: 프로젝트 삭제, manager 역할 부여

### manager

- owner가 부여하는 역할
- 프로젝트와 dataset 관리
- 멤버 초대 (labeler, reviewer, client, viewer 역할 부여 가능)
- export 실행
- AI 요청 생성

### labeler

- 자산 열람
- 라벨링 생성 / 수정
- 필요한 범위에서 데이터 업로드 가능

### reviewer

- 라벨 검수
- 승인 / 반려
- consensus 관련 상태 변경

### viewer

- 읽기 중심
- 제한된 export 또는 report만 허용 가능

## 4. medilabel 권한 흐름

초기 제품 기획 기준으로 아래 역할이 중요하다.

- owner
- manager
- viewer
- labeler

주요 차이:

- project 설정과 멤버 관리는 owner / manager 중심
- catalog와 viewer 접근은 labeler / viewer도 가능
- segmentation import, class 관리, 다운로드 정책은 project policy와 역할을 함께 본다

## 5. edge 권한 흐름

edge 문서 기준으로는 `Organizer`와 `Member` 구분이 핵심이다.

공통적으로 둘 다 가능한 것:

- 로그인
- dataset 선택
- 카메라 연결
- 촬영과 라벨링
- 기본 settings 접근

추가 고려:

- 온라인과 오프라인에서 인증 경로가 다르다
- `.ige` package와 local auth가 오프라인 경로를 지원한다
- local dataset 생성과 sync는 후속 중앙 정책과 충돌하지 않도록 처리해야 한다

## 6. AI 운영 권한 흐름

### operator

- queue, job, worker 상태 조회
- retry, cancel, preload, drain 같은 운영 액션 수행

### AI developer

- model metadata 등록
- staging 검증
- profile과 compatibility 확인

### admin

- quota, backend preference, policy 설정
- tenant or project별 usage 확인

## 7. UI 노출 원칙

- 보이면 안 되는 기능은 숨긴다
- 보여주되 실행 불가인 경우 이유를 명확히 보여준다
- 읽기 전용과 action 가능 상태를 시각적으로 구분한다

## 8. backend enforcement 원칙

- frontend는 편의상 UI를 숨길 수 있지만 최종 권한 판정은 backend가 한다
- token claim, membership, project scope, service-side business rule을 함께 본다
- edge처럼 offline 환경이 있는 경우에도 sync 시점의 최종 권한 검증은 중앙 시스템 기준을 따른다

## 9. 문서화 원칙

- 역할 이름은 제품마다 다를 수 있지만 의미 매핑이 가능해야 한다
- 새 기능 문서에는 반드시 권한 영향 섹션을 둔다
- API 변경과 UI 변경은 권한 문서를 함께 갱신한다

