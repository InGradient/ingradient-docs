# ingradient-edge Roadmap

## 현재 범위

repo 문서 기준으로 아래 축이 핵심이다.

- auth and license
- capture stability
- offline sync
- camera diagnostics
- UI migration
- error handling and security quality

## 단계별 계획

### 1. 현장 안정성 강화

- capture reliability
- crash loop 대응
- diagnostics 강화

### 2. offline / online 흐름 고도화

- package load
- offline login
- sync recovery
- duplicate / idempotency 처리

### 3. UX와 설정 개선

- GigE NIC settings UI
- images pattern switcher
- user scenario 기반 QA 강화

### 4. 구조 개선

- refactoring
- code quality
- UI package migration

## 우선순위

1. 현장 장비 안정성
2. offline sync 신뢰성
3. 설치와 설정 UX
4. 구조 개선

## 기술 부채

- 버그와 troubleshooting 지식이 여러 문서에 흩어져 있다
- offline auth, package flow, sync flow의 구현 gap이 남아 있다

## 미결정 사항

- 일부 hardware-specific tuning 범위
- local AI나 더 강한 on-device processing 범위

