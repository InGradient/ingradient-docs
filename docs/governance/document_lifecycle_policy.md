# Document Lifecycle Policy

- 문서명: Document Lifecycle Policy
- 목적: 문서 상태와 수명주기를 정의한다.
- 적용 범위: `ingradient-docs/docs`와 각 repo 핵심 문서
- 상태: Draft
- Owner: Platform Architecture
- Reviewer: Repo Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `documentation_policy.md`

## 문서 상태 정의
- Draft: 초안, 내용 변경 가능
- Review: 리뷰 중, 구조는 거의 확정
- Approved: 현재 기준 문서
- Deprecated: 더 이상 기준이 아님, 대체 문서 존재

## 상태 전환 규칙
- Draft → Review: 구조와 범위가 갖춰졌을 때
- Review → Approved: owner와 reviewer가 동의했을 때
- Approved → Deprecated: 더 적합한 SSOT가 생기거나 시스템이 바뀌었을 때

## 버전 관리
- 문서는 git 이력이 기본 버전 관리다.
- 큰 정책 변경은 문서 하단 또는 관련 release note에서 변경 이유를 기록한다.

## Deprecated 처리 기준
- 대체 문서 링크
- 더 이상 사용하지 않는 이유
- 적용 중단 시점

## Archive 정책
- 완전히 obsolete 된 문서는 `.archive/` 또는 별도 archive 위치로 이동한다.
- 운영 중 참고 가능성이 있으면 삭제하지 않는다.

