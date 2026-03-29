# Service Responsibility

- 문서명: Service Responsibility
- 목적: 서비스 간 책임과 비책임을 명확히 한다.
- 적용 범위: auth-service, platform, ai, edge, medilabel, ui
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `system_overview.md`

## 서비스 목록
- auth-service
- ingradient-platform
- ingradient-ai
- ingradient-edge
- medilabel
- ingradient-ui

## 서비스별 핵심 책임

### auth-service
- 인증, 세션, 토큰 (Access / Refresh / Admin)
- 사용자, 조직, Product 관리
- 멤버십과 역할/권한 기초 사실
- 라이선스 (조직별 사용량 제한)
- 디바이스 등록/승인/취소
- 초대 (Invitation)와 가입 코드 (Join Code)
- 오프라인 엔타이틀먼트 발급 (RS256 JWT)
- 비밀번호 재설정
- 감사 로그 (Audit Log)

### ingradient-platform
- 데이터셋, 이미지, 클래스 관리
- 라벨링 (bbox, point, classification), 검수
- Export (COCO, IGP)
- AI 학습 요청, 결과 조회 (Training Model / Run / Snapshot / Metrics)
- Edge Package 생성 및 배포
- 프로젝트별 역할-권한 매트릭스 (Role Permission Matrix)
- 분석, 대시보드, Edge Session Analytics

### ingradient-ai
- model registry, job lifecycle, execution routing
- training / inference job 실행 및 artifact 생성
- GPU 큐 관리
- ops console (운영자/개발자 화면)

### ingradient-edge
- 카메라 제어 (GigE, USB), 캡처
- Deflectometry 시퀀스
- 로컬 라벨링, 로컬 DB 저장
- 오프라인 작업 (.ige 패키지 기반)
- Platform으로 데이터 sync (이미지, bbox, 메타데이터)
- 디바이스 진단, 필드 테스트

### medilabel
- 의료 데이터 업로드 (DICOM, NIfTI)
- Catalog, ingest workflow
- Segmentation import, viewer overlay
- 의료 도메인 특화 workflow

### ingradient-ui
- 범용 UI tokens, components, patterns, brand assets
- `@ingradient/ui`로 배포, consuming app이 import

## 서비스별 비책임 영역
- auth-service는 제품별 business workflow를 소유하지 않는다. 비즈니스 권한 해석은 downstream 서비스가 한다.
- platform은 auth DB를 직접 소유하지 않는다.
- ai는 제품 UI와 제품 권한 의미를 소유하지 않는다.
- edge는 중앙 auth와 storage 정책을 대체하지 않는다. local 데이터의 SoT는 sync 후 platform으로 이전된다.
- medilabel은 공용 디자인 시스템을 소유하지 않는다.
- ui는 dataset export, training workflow, device recovery 같은 제품 의미를 소유하지 않는다.

## 책임 매트릭스

| 기능 | 주 책임 서비스 | 보조 서비스 |
|------|----------------|-------------|
| 인증 / 토큰 | auth-service | platform, medilabel, ai, edge |
| 조직 / 멤버십 관리 | auth-service | platform, medilabel |
| 라이선스 / 디바이스 관리 | auth-service | platform (UI), edge |
| 초대 / 가입 코드 | auth-service | platform (UI) |
| 오프라인 엔타이틀먼트 | auth-service | edge |
| 데이터 관리 / 라벨링 | ingradient-platform | auth-service |
| Export (COCO, IGP) | ingradient-platform | - |
| AI 학습 요청 / 결과 조회 | ingradient-platform | ingradient-ai |
| Edge Package 생성 | ingradient-platform | auth-service (Entitlement), edge |
| 프로젝트 역할-권한 매트릭스 | ingradient-platform | auth-service (기초 역할) |
| 분석 / 대시보드 | ingradient-platform | edge (세션 데이터) |
| 의료 데이터 / 세그멘테이션 | medilabel | auth-service, ai |
| 모델 등록 / 학습 / 추론 실행 | ingradient-ai | platform, medilabel |
| 카메라 캡처 / 로컬 라벨링 | ingradient-edge | platform (sync), auth-service (인증) |
| 오프라인 작업 | ingradient-edge | auth-service (Entitlement), platform (패키지) |
| 공용 UI | ingradient-ui | 각 프론트엔드 앱 |

## Source of Truth 기준

| 데이터 | SoT 서비스 |
|--------|------------|
| identity / session / membership | auth-service |
| organization / product / license / device registration | auth-service |
| invitation / join code | auth-service |
| offline entitlement | auth-service |
| audit log | auth-service |
| dataset / image / class / labeling | ingradient-platform |
| training model / run / snapshot / metrics | ingradient-platform |
| export job | ingradient-platform |
| edge package | ingradient-platform |
| project role permission matrix | ingradient-platform |
| medical imaging domain data | medilabel |
| model metadata / job state / artifact | ingradient-ai |
| local device state / capture queue / local images | ingradient-edge (sync 전까지) |
| tokens / components / patterns | ingradient-ui |

## 변경 시 판단 원칙
- 새 프로젝트에서 제품 의미 없이 바로 재사용 가능하면 `ingradient-ui`
- domain auth primitive (인증, 멤버십, 라이선스, 디바이스)면 auth-service
- dataset / labeling / export 중심이면 platform
- model lifecycle / execution 중심이면 ai
- 현장 장치, offline queue, 카메라 중심이면 edge
- 의료 특화 workflow면 medilabel
- 여러 서비스에 걸치면 주 책임 서비스를 정하고, 나머지는 API/이벤트로 연결
