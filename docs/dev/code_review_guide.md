# Code Review Guide

- 문서명: Code Review Guide
- 목적: 코드 리뷰 시 확인해야 할 핵심 기준을 정의한다.
- 적용 범위: 모든 repo
- 상태: Draft
- Owner: Repo Owners
- Reviewer: Platform Architecture
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `coding_convention.md`, `api_convention.md`

## 리뷰 기본 원칙
- 버그, 회귀, 운영 위험을 먼저 본다
- 문서와 구현이 어긋나는지 확인한다
- 테스트와 rollback 가능성을 함께 본다

## 확인 항목
- 구조와 책임 분리
- API와 데이터 계약 일관성
- 권한과 보안 영향
- 운영과 릴리즈 영향
- 문서 업데이트 필요 여부

## 변경 요청 기준
- 구조적 위험이 있으면 block
- 단순 스타일 논쟁은 최소화
- open question은 명확히 남긴다

