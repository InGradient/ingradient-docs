# Common Engineering Standards

> 어떤 규모, 어떤 아키텍처의 프로젝트에도 가져다 쓸 수 있는 팀 기준.
> **스코프**와 **강도(Must / Should / Nice)**가 문서마다 명시돼 있다.

---

## 디렉터리 구조

```
common/
  core/              ← 모든 프로젝트 공통 최소 규칙
  operational/       ← 운영형 프로젝트 권장
  offline-first/     ← 로컬 우선 아키텍처 전용
  (기존 상세 문서)   ← 위 문서들의 참조용 상세 버전
```

---

## 어느 문서부터 읽어야 하는가

### Minimal — 프로토타입 / 내부 툴 / 1인 프로젝트

`core/` 3개만. 30분이면 읽을 수 있다.

| 문서 | 핵심 규칙 |
|------|---------|
| [core/structure.md](core/structure.md) | 파일 분리 기준, 레이어 방향, 네이밍 |
| [core/env-and-config.md](core/env-and-config.md) | 시작 시 환경 변수 검증, .env.example |
| [core/data-integrity.md](core/data-integrity.md) | DB 마이그레이션 불변성, 경계 입력 검증 |

### Recommended — 팀 프로젝트 / 배포하는 앱

`core/` + `operational/` 전체.

| 문서 | 핵심 규칙 |
|------|---------|
| [operational/error-policy.md](operational/error-policy.md) | Result/AppError 구분 — **Canonical** |
| [operational/logging-and-debugging.md](operational/logging-and-debugging.md) | 로그 레벨 기준, 디버깅 도구 스택 |
| [operational/testing.md](operational/testing.md) | Level 1/2/3 테스트 피라미드 |
| [operational/security.md](operational/security.md) | Must 보안 규칙 vs 권장 도구 |
| [operational/project-planning.md](operational/project-planning.md) | Phase 계획, DoD 체크리스트 |

### Full — 오프라인 지원 / 로컬 우선 앱 (e.g. Electron, mobile)

위 전체 + `offline-first/`.

| 문서 | 핵심 규칙 |
|------|---------|
| [offline-first/data-strategy.md](offline-first/data-strategy.md) | 로컬 우선 쓰기, 동기화 상태, 충돌 전략 |

---

## 표기 규칙

각 문서의 규칙은 아래 강도로 표시한다.

| 강도 | 의미 |
|------|------|
| **Must** | 위반 시 PR 리뷰에서 반드시 지적. 보안·데이터 손실·팀 충돌 방지. |
| **Should** | 강력 권장. 합당한 이유가 있으면 예외 가능하되 PR에 이유 기록. |
| **Nice** | 여유 있을 때. 없어도 릴리스 가능. |

---

## 정본(Canonical) 문서 지정

중복을 방지하기 위해 아래 주제는 지정된 정본에서만 상세 기술한다.
다른 문서는 요약 + 링크만.

| 주제 | 정본 |
|------|------|
| `Result<T>` / `AppError` 패턴 | [operational/error-policy.md](operational/error-policy.md) |
| Zod 입력 검증 패턴 | [core/data-integrity.md](core/data-integrity.md) |
| 환경 변수 Zod 검증 | [core/env-and-config.md](core/env-and-config.md) |
| 로그 레벨 기준 | [operational/logging-and-debugging.md](operational/logging-and-debugging.md) |
| DB 마이그레이션 불변성 | [core/data-integrity.md](core/data-integrity.md) |
| 보안 Must 규칙 | [operational/security.md](operational/security.md) |

---

## 적용 범위 태그

각 문서 상단에 명시:
```
적용 범위: 모든 프로젝트 | Electron 전용 | offline-first 전용 | 운영 환경 전용
```

