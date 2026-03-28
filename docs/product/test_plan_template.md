# Test Plan Template

## 목적
기능 또는 릴리즈 테스트 계획 문서를 작성할 때 사용하는 템플릿이다.

## 상단 메타데이터
- 테스트 대상 기능 또는 릴리즈
- 범위
- 환경
- 담당자
- 마지막 수정일

## 본문 템플릿

### 1. 테스트 목표
- 무엇을 검증하려는가
- 어떤 리스크를 줄이려는가

### 2. 범위 / 비범위
- 이번 테스트에 포함되는 화면, API, 데이터
- 제외하는 항목과 이유

### 3. 테스트 환경
- dev / staging / prod-like
- 필요한 계정과 권한
- 필요한 데이터셋 또는 fixture

### 4. 핵심 시나리오
- happy path
- permission path
- failure path
- retry / recovery path
- edge or offline path가 있으면 포함

### 5. 계약 영향 확인
- API contract 변화
- data migration 영향
- auth / permission 영향
- storage / artifact 영향

### 6. 회귀 테스트
- 기존 핵심 흐름 중 반드시 다시 볼 항목
- 이전 incident나 bug에서 파생된 회귀 항목

### 7. 완료 기준
- 테스트 통과 기준
- 남겨도 되는 known issue
- release blocker 조건

