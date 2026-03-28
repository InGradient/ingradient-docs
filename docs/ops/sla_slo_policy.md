# SLA SLO Policy

- 문서명: SLA SLO Policy
- 목적: 서비스 수준 목표를 정의한다.
- 적용 범위: auth, platform, ai, edge sync, medilabel
- 상태: Draft
- Owner: Infra / Product
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `monitoring_observability.md`

## 대상 서비스
- auth-service
- platform
- medilabel
- ai control APIs and jobs
- edge sync

## SLA와 SLO 정의
- 외부 고객 약속은 SLA
- 내부 운영 목표는 SLO

## 측정 방식
- availability
- latency percentile
- job completion time
- sync delay

## 보고 주기
- 운영 리뷰는 주간 또는 월간
- 심각한 위반은 incident review에서 별도 다룬다

## 위반 시 조치
- error budget 소진 추적
- 릴리즈 속도 조절
- 근본 원인과 예방 조치 도출

