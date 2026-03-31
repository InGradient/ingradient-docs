# 설정 / 관리 (Settings & Admin)

## 기능 개요

프로젝트 설정, 멤버 관리, 역할별 권한 매트릭스, 계정 관리, 조직 관리를 하는 기능이다.

## 문제 정의

프로젝트마다 라벨링 규칙, 멤버 구성, 권한 범위가 다르므로 유연한 설정 UI가 필요하다. 조직 관리자는 멤버, 라이선스, 디바이스를 통합 관리해야 한다.

## 범위 / 비범위

- **포함**: 프로젝트 설정, 멤버 초대/제거/역할 변경, 권한 매트릭스, 계정 설정, 조직 관리
- **제외**: auth-service 계정 관리 원본 → auth-service Admin, 라이선스 발급 → auth-service

## 프로젝트 설정

### 일반 설정

| 설정 | 설명 |
|------|------|
| 프로젝트 이름, 설명 | 기본 정보 |
| Deflectometry 모드 | 편광 검사 워크플로우 활성화 |
| 다중 이미지 그룹핑 | 활성화 시 정규식 패턴으로 시퀀스 그룹 |
| 갤러리 파일명 표시 | 썸네일에 파일명 오버레이 |
| 바운딩 박스 클래스명 표시 | 상세 모달에서 박스 위에 클래스명 |
| 최소 바운딩 박스 수 요구 | 라벨링 완료 기준 |
| 라벨링 필수 설정 | 다음 작업 진행 전 라벨 필수 |
| 중복 파일명 처리 | 업로드 시 동일 파일명 처리 정책 |

### 멤버 관리

- 멤버 목록 (이름, 이메일, 역할, 가입일)
- 새 멤버 초대 (이메일 또는 Login ID)
- 역할 변경 (Owner, Manager, Labeler, Reviewer, Viewer, Custom)
- 멤버 제거
- 데이터셋 수준 접근 제한 (선택)

### 권한 매트릭스

- 세로축: Role, 가로축: Permission
- Permission 그룹: 프로젝트, 데이터, 라벨링, 공유/분석
- Owner는 전체 권한 고정 (수정 불가)
- Custom 역할: 프로젝트당 1개 슬롯
- 상세 내용 → [project_role_matrix.md](./project_role_matrix.md)

## 계정 설정

- 프로필 편집 (이름, 이메일)
- 비밀번호 변경
- 계정 삭제 (미리보기 포함)

## 조직 관리 (Admin)

`/admin` 페이지. 조직 관리자(org admin) 역할에게만 표시.

| 탭 | 내용 |
|----|------|
| Organization | 조직 정보 및 설정 |
| Members | 조직 수준 멤버 관리 |
| License | 라이선스 플랜, 만료일, 기능 범위 |
| Devices | Edge 디바이스 등록/폐기 (UID, 이름, 등록일) |
| Invitations | 대기 중인 초대 관리 |

## UI / UX 방향

- 설정은 모달 형태로 열림 (페이지 전환 없이)
- 탭 구분: 일반 / 멤버 / 권한 / 계정
- 권한 매트릭스: 좌측 role 컬럼 고정, 가로 스크롤
- 변경 사항 diff 표시 → 저장 확인

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `PATCH /api/projects/{id}` | 프로젝트 설정 변경 |
| `GET /api/projects/{id}/members` | 멤버 목록 |
| `POST /api/projects/{id}/members` | 멤버 초대 |
| `PATCH /api/projects/{id}/members/{userId}` | 역할 변경 |
| `DELETE /api/projects/{id}/members/{userId}` | 멤버 제거 |
| `GET /api/projects/{id}/permissions` | 권한 매트릭스 |
| `PUT /api/projects/{id}/permissions` | 권한 저장 |

- auth-service의 org role(접근 자격 경계) ≠ platform의 project role(기능 권한 경계)

## 테스트 계획

- 프로젝트 설정 변경 → 저장 → 재로딩 시 유지
- 멤버 초대 → 대상 사용자가 프로젝트 접근 가능
- 역할 변경 → 권한에 따른 UI 노출 차이 확인
- Custom 역할 권한 편집 → 해당 멤버의 기능 접근 변경
- Owner 권한 수정 시도 → 차단 확인
