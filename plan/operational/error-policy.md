# 오류 처리 정책

```
적용 범위: 운영 환경 전용 (프로토타입은 throw/console.error로 시작해도 무방)
강도: Must/Should 표시
정본: 이 파일이 "Result<T>" 및 "AppError" 패턴의 정본이다.
```

---

## 핵심 규칙 한 줄

> **내부 도메인 로직은 `throw AppError`, 경계(IPC/API/public service)는 `Result<T>` 반환.**

---

## 1. 내부 vs 경계 구분

| 위치 | 오류 처리 방식 | 이유 |
|------|-------------|------|
| Repository, 내부 유틸 | `throw AppError` | 호출자가 catch해서 처리 |
| Service (public method) | `Result<T>` 반환 | IPC/API caller가 타입으로 처리 가능 |
| IPC 핸들러 | `Result<T>` 반환 | Renderer는 try/catch 없이 `result.ok` 체크 |
| HTTP API 엔드포인트 | `Result<T>` → HTTP 상태코드로 변환 | 표준 HTTP 의미론 유지 |

---

## 2. AppError (Must)

```typescript
// shared/errors.ts
export class AppError extends Error {
  constructor(
    public readonly code: string,   // 'NOT_FOUND', 'UNAUTHORIZED', 'DB_ERROR' 등
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = 'AppError';
  }
}
```

사용 규칙:
- **Must** — `throw new Error('...')` 대신 `throw new AppError('CODE', '...')` 사용
- **Must** — catch 블록에서 `unknown`으로 받고 `instanceof AppError`로 구분

```typescript
try {
  const user = findUser(id);
} catch (err: unknown) {
  if (err instanceof AppError && err.code === 'NOT_FOUND') {
    return { ok: false, reason: 'USER_NOT_FOUND' };
  }
  throw err;  // 알 수 없는 오류는 위로 전파
}
```

---

## 3. Result<T> (Must)

```typescript
// shared/result.ts
export type Result<T> =
  | { ok: true;  data: T }
  | { ok: false; reason: string; code?: string };

export const ok  = <T>(data: T): Result<T>  => ({ ok: true, data });
export const fail = (reason: string, code?: string): Result<never> =>
  ({ ok: false, reason, code });
```

사용 패턴:
```typescript
// Service
async function getUser(id: string): Promise<Result<User>> {
  try {
    const row = userRepo.findById(id);  // throws AppError('NOT_FOUND', ...)
    return ok(toUser(row));
  } catch (err: unknown) {
    if (err instanceof AppError) return fail(err.message, err.code);
    log.error('[getUser] unexpected error', err);
    return fail('INTERNAL_ERROR');
  }
}

// IPC / API caller
const result = await getUser(id);
if (!result.ok) return { error: result.reason };
return result.data;
```

---

## 4. `.catch(() => {})` 금지 (Must)

```typescript
// ❌ 오류가 조용히 사라짐
doSomething().catch(() => {});

// ✅ 최소한 로그
doSomething().catch((err) => log.warn('[context] failed', err));

// ✅ 더 좋음 — 사용자에게도 알림
doSomething().catch((err) => {
  log.error('[context] critical failure', err);
  toast.error('작업에 실패했습니다');
});
```

ESLint 규칙으로 강제:
```js
'@typescript-eslint/no-floating-promises': 'error'
```

---

## 5. 오류 코드 네이밍 (Should)

```
VALIDATION_FAILED  — 입력값 검증 실패
NOT_FOUND          — 리소스 없음
UNAUTHORIZED       — 인증 필요
FORBIDDEN          — 권한 없음
CONFLICT           — 이미 존재
INTERNAL_ERROR     — 예상치 못한 서버 오류
NETWORK_ERROR      — 네트워크 / 원격 연결 실패
```

HTTP 상태코드와 1:1 매핑할 필요 없다. 도메인 언어로 표현한다.

---

## 6. 전역 unhandled rejection 잡기 (Must)

```typescript
// Node.js / Electron main process
process.on('unhandledRejection', (reason) => {
  log.error('[process] unhandledRejection:', reason);
});

// Electron — electron-unhandled 패키지 사용
import unhandled from 'electron-unhandled';
unhandled({ logger: (err) => log.error('[unhandled]', err) });

// React renderer
window.addEventListener('unhandledrejection', (e) => {
  log.error('[window] unhandledRejection:', e.reason);
});
```

---

## 체크리스트

```
[ ] .catch(() => {}) 없음 (ESLint no-floating-promises 통과)
[ ] 내부 오류는 AppError로 throw, 경계에서 Result<T>로 변환
[ ] 전역 unhandledRejection 핸들러 등록됨
[ ] catch 블록이 unknown 타입으로 받는가? (use-unknown-in-catch-callback-variable)
[ ] 모든 오류에 코드(string)가 붙어 있는가?
```
