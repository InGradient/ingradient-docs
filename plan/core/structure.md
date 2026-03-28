# 구조 규칙

```
적용 범위: 모든 프로젝트
강도: Must (별도 표시 없는 것은 모두 Must)
```

---

## 1. 파일은 책임 기준으로 나눈다

**Must** — 파일 한 개 = 책임 한 개.

```
❌ userUtils.ts          (무엇이든 넣는 파일)
✅ user.service.ts       (비즈니스 로직)
✅ user.repo.ts          (DB 쿼리)
✅ user.schema.ts        (Zod 검증 스키마)
```

파일이 100줄을 넘고 역할이 두 가지 이상이면 분리를 고려한다.

---

## 2. 레이어 의존 방향은 단방향

**Must** — 순환 의존 금지.

```
UI → Service → Repository → DB
         ↓
      외부 API / IPC
```

- `Repository`가 `Service`를 import하면 안 된다.
- `UI 컴포넌트`가 `Repository`를 직접 import하면 안 된다.
- 공유 타입/상수는 `types/` 또는 `shared/`에 두고 양쪽에서 import한다.

---

## 3. 네이밍 기준

**Must**

| 대상 | 규칙 | 예시 |
|------|------|------|
| 파일명 | kebab-case | `user-service.ts` |
| 클래스 / 타입 / 인터페이스 | PascalCase | `UserService`, `AuthState` |
| 함수 / 변수 | camelCase | `getUserById`, `isLoading` |
| 상수 (불변값) | SCREAMING_SNAKE | `MAX_RETRY_COUNT` |
| React 컴포넌트 파일 | PascalCase | `UserCard.tsx` |
| DB 컬럼 | snake_case | `created_at`, `user_id` |

**Should** — boolean 변수는 `is`, `has`, `can` 접두사.
`isLoading`, `hasError`, `canEdit`

---

## 4. 데이터 변환은 레이어 경계에서만

**Must** — DB row → Domain model, Domain model → API response 변환을 함수 중간에 섞지 않는다.

```typescript
// ❌ 서비스 로직 중간에 변환 섞임
function processOrder(row: DbRow) {
  const name = row.user_name.toUpperCase();  // 변환을 여기서?
  return saveOrder(name);
}

// ✅ 레이어 진입점에서 변환 완료
function toOrder(row: DbRow): Order { ... }     // repo → service 경계
function toOrderDto(o: Order): OrderDto { ... } // service → API 경계
```

---

## 5. 디렉터리 구조 원칙

**Should** — 기능(feature) 단위로 묶는다. 역할(type) 단위보다 응집도가 높다.

```
src/
  features/
    user/          ← 한 기능의 모든 것
      User.tsx
      user.service.ts
      user.repo.ts
      user.schema.ts
  shared/          ← 2개 이상 feature에서 쓰는 공통 코드
  types/           ← 전역 타입 선언
```

---

---

## 6. ADR (Architecture Decision Record) 템플릿

**Nice** — 팀이 왜 이 결정을 내렸는지 나중에 알 수 있도록 기록한다.
`docs/decisions/ADR-NNN-제목.md` 형식으로 저장.

```markdown
# ADR-001: [결정 제목]

날짜: YYYY-MM-DD
상태: 제안 / 수락 / 폐기

## 맥락

왜 이 결정이 필요했는가? 어떤 문제를 해결하려 했는가?

## 결정

무엇을 하기로 했는가?

## 결과

이 결정으로 인해 생기는 trade-off, 제약, 후속 작업.
```

---

## 체크리스트

```
[ ] 파일 하나에 역할이 하나인가?
[ ] 레이어 간 역방향 import가 없는가?
[ ] 변수/함수/파일명이 무엇을 하는지 이름만으로 알 수 있는가?
[ ] 데이터 변환이 레이어 경계에서만 일어나는가?
```
