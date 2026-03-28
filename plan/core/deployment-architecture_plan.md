# INGRADIENT Platform 전체 배포 및 아키텍처 계획

---

# 1. 목적

본 문서는 INGRADIENT 생태계를 구성하는 각 프로젝트의 역할, 관계, 배포 전략, 데이터 흐름을 정의한다.

대상 프로젝트:

- ingradient-ui
- auth-service
- ingradient-platform
- ingradient-edge
- ingradient-ai
- medilabel

---

# 2. 전체 구조 개요

## 2.1 3계층 구조

시스템은 다음 3개 계층으로 구성한다.

### (1) Cloud Application Layer
- 사용자 UI 및 API 서비스
- 클라우드에 배포

### (2) AI Execution Layer
- 학습/추론 실행
- IDC + 클라우드 하이브리드

### (3) Edge Layer
- 현장 데이터 수집
- 로컬 설치

---

# 3. 프로젝트별 역할 정의

## 3.1 ingradient-ui

### 역할
- 공통 UI 컴포넌트 라이브러리
- 디자인 시스템

### 특징
- 서비스가 아니라 패키지
- 다른 프로젝트에서 import하여 사용

### 배포 방식
- GitHub Repository
- npm / private registry 배포

### 데모
- GitHub Pages로 배포

---

## 3.2 auth-service

### 역할
- 사용자 인증
- 조직/팀 관리
- 권한(role) 관리
- 토큰 발급

### 배포
- 클라우드 (항상 온라인)

---

## 3.3 ingradient-platform

### 역할
- 데이터 관리
- 라벨링
- dataset / snapshot
- AI 요청 생성 (학습/추론)
- 결과 시각화

### 배포
- 클라우드

---

## 3.4 medilabel

### 역할
- 의료 데이터 라벨링
- 판독 및 리포트

### 특징
- ingradient-ui, auth-service, ingradient-ai 공유 사용

### 배포
- 클라우드

---

## 3.5 ingradient-edge

### 역할
- 현장 데이터 수집
- 카메라 제어
- 오프라인 처리
- 서버 동기화

### 배포
- 설치형 애플리케이션
- GitHub Releases로 배포

---

## 3.6 ingradient-ai

### 역할
- 학습
- 추론
- 스케줄링
- 모델 관리

### 구조

#### Control Plane (클라우드)
- API gateway
- orchestrator
- scheduler
- model registry

#### Execution Plane
- IDC GPU 서버 (기본)
- Cloud GPU (fallback)

---

# 4. 프로젝트 간 관계

## 4.1 관계 구조

```
User
  ↓
ingradient-platform / medilabel
  ↓
ingradient-ai (API 요청)
  ↓
AI worker 실행
  ↓
결과 저장 (storage)
  ↓
platform이 결과 조회
```

---

## 4.2 auth 흐름

```
User → auth-service → token 발급
→ platform / medilabel 요청
```

---

## 4.3 UI 구조

```
ingradient-ui (패키지)
  ↑
platform / medilabel에서 사용
```

---

## 4.4 edge 흐름

```
ingradient-edge
  ↓
데이터 수집
  ↓
storage 업로드
  ↓
platform에서 관리
```

---

# 5. Storage 전략

## 5.1 핵심 원칙

- 데이터는 공용 storage에 저장
- AI 서버로 데이터 복사 금지
- reference 기반 접근

---

## 5.2 저장 대상

- 이미지
- 의료 데이터
- 라벨
- dataset snapshot
- model artifact
- inference 결과

---

## 5.3 구조

```
Shared Object Storage
  ↑            ↑
platform       ai
```

---

## 5.4 캐시 전략

- IDC AI worker는 local cache 사용
- 자주 사용하는 데이터 preload

---

# 6. DB 전략

## 원칙

- 서비스별 DB 분리

### 예
- auth DB
- platform DB
- medilabel DB
- ai DB

---

# 7. AI 실행 전략

## 7.1 기본 정책

### Inference
1. IDC GPU
2. Cloud GPU fallback
3. CPU fallback (가능한 경우)

### Training
1. IDC GPU
2. Cloud GPU fallback

---

## 7.2 Backend Routing

조건 기반 선택:

- queue 상태
- GPU availability
- latency
- cost
- 정책

---

# 8. 배포 전략

## 8.1 Cloud

배포 대상:

- auth-service
- ingradient-platform
- medilabel
- ai control plane

---

## 8.2 IDC

- AI GPU workers

---

## 8.3 Edge

- 설치형

---

# 9. UI 배포 전략

## ingradient-ui

- npm package 배포
- GitHub Pages로 데모 제공

---

# 10. Edge 배포 전략

## ingradient-edge

- GitHub Releases
- installer 제공
- 자동 빌드 (CI)

---

# 11. 데이터 흐름

## 학습

```
platform
 → dataset snapshot 생성
 → ai job 요청
 → ai가 storage에서 읽음
 → 학습 수행
 → 결과 storage 저장
 → platform 조회
```

## 추론

```
platform
 → inference 요청
 → ai 실행
 → 결과 저장
 → UI 표시
```

---

# 12. 핵심 설계 원칙

1. 서비스는 분리, storage는 공유
2. 데이터는 이동하지 않고 참조한다
3. AI는 공용 실행 엔진
4. UI는 제품별로 분리
5. Edge는 독립 실행

---

# 13. 한 줄 요약

INGRADIENT 시스템은

- 클라우드 기반 서비스
- 하이브리드 AI 실행
- 공유 스토리지
- 설치형 Edge

구조로 설계된다.

