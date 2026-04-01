---
name: implement-connect
description: UI와 Backend를 연동한다. Phase 1의 TODO 주석을 실제 API 호출로 교체하고 mock data를 삭제한다.
argument-hint: [feature명]
disable-model-invocation: true
allowed-tools: Bash
---

# Phase 4: 연동

$ARGUMENTS 기능의 UI와 Backend를 연동한다. Phase 1에서 남긴 TODO 주석을 실제 API 호출로 교체한다.

## 0단계: 사전 확인

Phase 3 (Backend)이 완료되었는지 확인한다. 완료되지 않았으면 먼저 /3-implement-backend를 실행하라고 안내한다.

Backend API가 실제로 동작하는지 확인한다. 테스트가 통과하는 상태여야 한다.

## 1단계: TODO 수집

Phase 1 코드에서 `// TODO: API 연동` 주석을 **모두** 수집한다. 하나도 빠뜨리지 않는다.

**현재 프로젝트의 TODO 목록 (자동 수집):**

!`grep -rn "// TODO: API" src/ 2>/dev/null || echo "(src/에서 TODO를 찾지 못했습니다)"`

위 목록이 비어있으면 프로젝트의 소스 코드 경로를 확인하고, 다른 경로에 있으면 해당 경로에서 다시 검색한다. 그래도 없으면 사용자에게 질문한다.

위 목록을 아래 형식으로 정리한다:

    | # | TODO 주석 | 파일:라인 | 대응 API (Phase 2) | 비고 |
    |---|-----------|-----------|-------------------|------|
    | 1 | ... | ... | ... | |

수집 후 확인:
- Phase 2에서 설계한 API가 모두 TODO에 대응되는가
- TODO에는 있지만 Phase 2에 없는 API가 있는가 → 있으면 질문
- Phase 2에는 있지만 TODO에 없는 API가 있는가 → UI에서 빠진 부분이 있는지 확인

## 2단계: 문서 읽기

| 문서 | 목적 |
|------|------|
| Phase 2에서 설계한 API | 각 endpoint의 요청/응답/에러 구조 |
| Phase 1의 mock data 파일 | 어떤 데이터 구조를 사용하고 있는지 — 실제 API 응답과 매핑 |
| Phase 3에서 구현한 코드 | 실제 API가 반환하는 응답 구조 확인 |

## 3단계: Plan 작성

TODO별로 교체 계획을 구체적으로 작성한다.

**필수 포함 항목 (TODO별로 반복):**

API 호출:
- [ ] 호출할 endpoint (method + path)
- [ ] 전달할 파라미터 (path param, query, body — UI에서 어떤 값을 가져오는지)
- [ ] 응답 데이터 매핑 (API 응답 필드 → UI 컴포넌트 prop)

에러 처리 — **API별로 구체적으로 나열한다. "에러 처리를 한다"로 끝내지 않는다:**
- [ ] 각 API의 에러 코드별 사용자 메시지 (예: DEVICE_LIMIT_REACHED → "디바이스 한도에 도달했습니다")
- [ ] 에러 표시 방식: 전역 토스트인지 필드별 에러인지 API마다 명시
- [ ] 네트워크 에러 처리 방식

로딩 상태 — **API별로 구체적으로 나열한다:**
- [ ] 각 API 호출 중 UI 표시 (어떤 버튼이 비활성화되는지, 스피너 위치, 스켈레톤 범위)
- [ ] 낙관적 업데이트(optimistic update)가 필요한 곳이 있는지

데이터 갱신 — **API별로 구체적으로 나열한다:**
- [ ] 각 API 성공 후 동작: 토스트 메시지 텍스트 (예: "PENDING 디바이스가 등록되었습니다")
- [ ] 목록 갱신 방식 (refetch, 로컬 업데이트, invalidate cache)
- [ ] 모달/다이얼로그 닫기 여부

Plan 예시는 [plan-example.md](references/plan-example.md)를 참고한다.

## 4단계: 구현

Plan 순서대로 TODO를 교체한다:

1. **API 클라이언트 함수 작성** — 기존 프로젝트의 API 호출 패턴을 따른다 (axios, fetch, tanstack-query 등)
2. **mock data 교체** — mock data import를 API 호출로 교체
3. **에러 처리 연결** — 에러 코드별 사용자 메시지 매핑
4. **로딩 상태 연결** — API 호출 중 UI 표시
5. **데이터 갱신 연결** — 성공 후 목록 refetch, 토스트

## 규칙

- **TODO 주석을 하나도 남기지 않는다.** 모든 TODO가 실제 API 호출로 교체되어야 한다
- **mock data 파일을 삭제한다.** 더 이상 사용하지 않는 mock data는 제거한다
- **기존 API 호출 패턴을 따른다.** 프로젝트에서 사용하는 HTTP 클라이언트, 상태 관리, 캐시 전략을 따른다
- **하드코딩된 값이 없는지 확인한다.** 특히 role이나 status 같은 값이 사용자 입력 대신 하드코딩되어 있지 않은지
- **에러 메시지는 사용자가 이해할 수 있게 작성한다.** 기술적 에러 코드를 그대로 보여주지 않는다

## 5단계: E2E 테스트 업데이트

Phase 1에서 작성한 Playwright E2E 테스트를 실제 API 연동에 맞게 업데이트한다.

**업데이트 대상:**

- [ ] mock data 기반 테스트를 실제 API 기반으로 전환 (테스트 환경의 API 서버 사용)
- [ ] API 호출 후 데이터가 올바르게 표시되는지 검증
- [ ] 에러 상황 테스트 — API 실패 시 에러 메시지가 표시되는가
- [ ] 로딩 상태 테스트 — API 호출 중 로딩 표시가 나타나는가
- [ ] 전체 사용자 흐름 테스트 — 생성 → 목록 갱신 → 수정 → 삭제 등 시나리오
- [ ] 권한별 테스트 — 권한 없는 사용자가 접근 시 올바르게 제한되는가

**Phase 1 테스트와의 관계:**
- Phase 1 테스트 중 mock data에 의존하는 것은 실제 API로 교체한다
- 화면 렌더링, 네비게이션 등 UI 자체의 테스트는 그대로 유지한다
- 새로 추가된 동작 (토스트, refetch, 에러 메시지)에 대한 테스트를 추가한다

## 완료 기준

- [ ] Phase 1의 모든 `// TODO: API 연동` 주석이 제거되었다
- [ ] 모든 mock data가 실제 API 응답으로 교체되었다
- [ ] 사용하지 않는 mock data 파일이 삭제되었다
- [ ] 각 API 호출에 에러 처리가 연결되었다
- [ ] 각 API 호출에 로딩 상태가 표시된다
- [ ] API 성공 후 데이터 갱신(refetch 등)이 동작한다
- [ ] 하드코딩된 값이 없다
- [ ] Playwright E2E 테스트가 업데이트되었고 통과한다

## 다음 단계 안내

    Phase 4 (연동)이 완료되었습니다.
    다음 단계는 Phase 5 (와이어프레임 검증)입니다.
    와이어프레임 검증을 진행할까요? (/5-verify-wireframe)
