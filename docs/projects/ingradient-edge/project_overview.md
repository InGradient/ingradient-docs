# ingradient-edge Project Overview

## 프로젝트 소개
`ingradient-edge`는 현장 장치 제어, 데이터 수집, 오프라인 동작, 서버 동기화를 담당하는 설치형 애플리케이션이다.

## 목적
- 현장에서 데이터를 안정적으로 수집한다
- 네트워크가 불안정해도 작업을 이어간다
- cloud 제품과 데이터 및 상태를 동기화한다

## 범위 / 비범위
- 범위: device control, capture, local queue, sync, diagnostics
- 비범위: 중앙 auth SoT, 중앙 dataset ownership, GPU orchestration

## 주요 의존성
- platform APIs
- auth
- local device SDK and camera drivers

## 관련 SSOT 문서
- `../../api/edge_api.md`
- `../../ops/failure_retry_policy.md`
- 원본 근거: `/home/june/workspace/projects/ingradient-edge/docs/reference/edge-platform-sync.md`

