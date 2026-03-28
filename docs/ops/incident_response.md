# Incident Response

- 문서명: Incident Response
- 목적: 실제 사고 대응 절차를 정의한다.
- 적용 범위: 운영 환경 장애와 보안 사고
- 상태: Draft
- Owner: Infra / Platform
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `failure_retry_policy.md`, `sla_slo_policy.md`

## Incident 등급
- Sev1: 전체 서비스 중단 또는 심각한 데이터 손실 위험
- Sev2: 핵심 기능 장애, 일부 고객 영향 큼
- Sev3: 우회 가능, 제한된 범위 영향

## 대응 체계
- on-call 또는 owner 지정
- incident commander 지정
- 커뮤니케이션 채널과 기록 채널 분리

## 탐지부터 대응까지
- 탐지
- 영향 범위 확인
- 임시 완화
- 근본 원인 조사
- 복구 검증

## 커뮤니케이션 규칙
- 시간, 영향 범위, 다음 업데이트 시점을 남긴다
- 추측이 아닌 확인된 사실만 공유한다

## RCA 기준
- 무엇이 일어났는가
- 왜 탐지가 늦었는가
- 어떤 방지 조치를 할 것인가

