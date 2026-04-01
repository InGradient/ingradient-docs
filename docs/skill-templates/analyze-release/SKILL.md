---
name: analyze-release
description: 릴리즈의 구현 범위를 분석하고 feature 단위로 쪼개어 구현 순서를 제안한다. releases/ 문서를 읽고 의존성을 파악한다.
argument-hint: "릴리즈 버전 예: v0.0.5 (생략 시 최신)"
disable-model-invocation: true
---

# Analyze Release

**현재 프로젝트의 릴리즈 목록:**

!`ls docs/releases/v*.md 2>/dev/null | sort -V | tail -5 || echo "(docs/releases/ 에서 릴리즈 파일을 찾지 못했습니다)"`

**인자 처리:**

- 인자가 없으면: 위 목록에서 최신 릴리즈를 자동으로 선택한다
- $ARGUMENTS가 있으면: docs/releases/$ARGUMENTS.md를 읽는다

## 0단계: 사전 확인

| 확인 항목 | 누락 시 질문 |
|-----------|-------------|
| 대상 프로젝트 | 어떤 프로젝트의 릴리즈인가? |
| 릴리즈 파일 | 대상 릴리즈 파일이 존재하는가? |

## 1단계: 릴리즈 문서 읽기

docs/releases/$ARGUMENTS.md를 읽고 아래를 파악한다:

- 버전 목표 (전체 방향)
- 모든 체크리스트 항목 (새 기능, 개선사항, 기타)
- 각 항목이 참조하는 features/ 문서
- 각 항목이 참조하는 docs/wireframes/ 문서
- 배포 계획 (migration, 환경변수, downstream 영향)
- 의존성/제약사항

## 2단계: 관련 문서 읽기

릴리즈에서 참조하는 모든 문서를 읽는다. **문서가 존재하지 않으면 건너뛰지 말고 질문한다.**

| 문서 유형 | 목적 |
|-----------|------|
| docs/features/ 관련 문서 | 각 기능의 상세 명세, 비즈니스 규칙 |
| docs/wireframes/ 관련 문서 | UI 변경 범위 |
| 참조된 전략/정책 문서 | 기능의 근거, 제약조건 |
| docs/data_model.md | 현재 DB 스키마 — 변경 영향 파악 |
| docs/api_contract.md | 현재 API — 변경 영향 파악 |

## 3단계: Feature 단위 분류

릴리즈의 모든 체크리스트 항목을 **독립적으로 구현 가능한 feature 단위**로 분류한다.

분류 기준:
- **같은 도메인/모듈**에 속하는 항목끼리 묶는다
- **DB 변경이 공유**되는 항목끼리 묶는다
- **하나의 API endpoint**에 관련된 항목끼리 묶는다
- **하나의 화면**에 관련된 UI 변경끼리 묶는다
- 단, 하나의 feature가 너무 크면 (체크리스트 6개 이상) 더 쪼갤 수 있는지 검토한다

## 4단계: 의존성 분석

feature 간 의존성을 파악한다.

- 어떤 feature가 다른 feature의 DB 변경에 의존하는가
- 어떤 feature가 다른 feature의 API에 의존하는가
- 선행 작업이 필요한 feature는 무엇인가
- 독립적으로 구현 가능한 feature는 무엇인가

## 5단계: 출력

아래 형식으로 분석 결과를 출력한다.

    ## 릴리즈 분석: $ARGUMENTS

    ### 요약
    - 총 체크리스트 항목: N개
    - 분류된 feature 수: N개
    - 예상 구현 순서: N단계

    ### Feature 목록

    #### Feature 1: [feature 이름]
    - 체크리스트 항목:
      - [ ] 항목 1 (릴리즈 문서 원문)
      - [ ] 항목 2
    - 관련 문서: features/xxx.md, docs/wireframes/xxx.md
    - DB 변경: [있으면 구체적으로, 없으면 "없음"]
    - API 변경: [있으면 구체적으로, 없으면 "없음"]
    - UI 변경: [있으면 구체적으로, 없으면 "없음"]
    - 의존: [다른 feature에 의존하면 명시, 없으면 "없음 (독립)"]

    ### 의존성 그래프

    Feature 1 (이름)
      └→ Feature 2 (이름)
           ├→ Feature 3 (이름)
           └→ Feature 4 (이름)
    Feature 5 (이름) ← 독립

    ### 권장 구현 순서

    1단계: Feature 1 → 다른 feature의 전제
    2단계: Feature 2, Feature 5 → 동시 진행 가능 (독립)
    3단계: ...

    ### 릴리즈 분할 제안 (선택)

    현재 릴리즈가 feature N개로 구성되어 있습니다.
    한 버전에서 모두 구현할 수 있지만, 분할을 원하시면:

    $ARGUMENTS (핵심): Feature 1, 2, 3 — [핵심 로직 설명]
    v.next (확장): Feature 4, 5 — [확장 기능 설명]

    릴리즈를 분할할까요, 아니면 현재 버전에서 feature 순서대로 진행할까요?

## 규칙

- **구현하지 않는다.** 분석과 분류만 한다
- **릴리즈 문서의 체크리스트 항목을 하나도 빠뜨리지 않는다.** 모든 항목이 어떤 feature에 속해야 한다
- **feature 하나는 /plan-feature → /verify-wireframe 한 사이클로 구현 가능한 크기여야 한다.** 너무 크면 쪼갠다
- **의존성이 있으면 반드시 명시한다.** 의존성을 무시하고 구현하면 나중에 충돌한다
- **릴리즈 분할은 제안만 한다.** 실제 분할은 확인 후 진행한다
- **downstream 서비스 영향도 feature에 포함한다.** 다른 프로젝트에서 해야 할 작업이 있으면 별도로 명시한다

## 완료 기준

- [ ] 릴리즈의 모든 체크리스트 항목이 feature로 분류되었다
- [ ] 각 feature의 관련 문서, DB/API/UI 변경이 파악되었다
- [ ] feature 간 의존성이 분석되었다
- [ ] 구현 순서가 제안되었다
- [ ] 릴리즈 분할 여부에 대한 의견이 제시되었다

## 다음 단계 안내

    릴리즈 분석이 완료되었습니다.

    [릴리즈를 분할하는 경우]
    릴리즈를 분할할까요? 분할하면 releases/ 문서를 업데이트합니다.

    [현재 버전으로 진행하는 경우]
    첫 번째 feature부터 구현을 시작할까요?
    → /plan-feature [첫 번째 feature명]
