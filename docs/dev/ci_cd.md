# CI CD

- 문서명: CI CD
- 목적: 빌드, 테스트, 배포 자동화 흐름을 정의한다.
- 적용 범위: web, backend, ai, edge, shared package
- 상태: Draft
- Owner: Infra / Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `release_strategy.md`, `../ops/test_strategy.md`

## 파이프라인 개요
- lint and static checks
- unit and integration tests
- build artifact
- deploy or publish

## 브랜치와 환경 연계
- main merge는 기본 배포 대상과 연결
- release branch나 tag는 선택적으로 사용

## 테스트 단계
- fast checks를 먼저
- integration과 e2e는 필요한 경로에 배치

## 배포 단계
- code-only deploy와 data-affecting deploy를 분리
- edge installer build는 cloud deploy와 분리

## 실패 시 처리
- 자동 배포 실패는 즉시 알림
- rollback 절차 또는 수동 승인 절차를 둔다

