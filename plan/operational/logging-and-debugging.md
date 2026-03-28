# 로깅 & 디버깅

```
적용 범위: 운영 환경 전용
강도: Must/Should/Nice 표시
정본: 이 파일이 "로그 레벨 기준"의 정본이다.
```

---

## 1. 로그 레벨 기준 (Must)

| 레벨 | 언제 쓰나 | 예시 |
|------|---------|------|
| `error` | 즉각 대응이 필요한 실패. 사용자 동작이 완전히 실패했거나 데이터 손실 위험 | DB 쓰기 실패, 크래시 |
| `warn` | 문제가 될 수 있지만 지금 당장은 동작함 | 재시도 발생, deprecated 기능 호출 |
| `info` | 주요 흐름의 정상 이벤트 | 앱 시작, 사용자 로그인, 동기화 완료 |
| `debug` | 개발/진단용 상세 정보. 프로덕션에서는 보통 off | IPC 호출 파라미터, 쿼리 결과 |
| `verbose` / `trace` | 매우 상세한 추적. 로컬 디버깅 전용 | 루프 내 각 iteration |

**Must** — `error`는 오직 실제 오류에만. 예상 가능한 흐름(입력 검증 실패, Not Found)은 `warn` 이하.

---

## 2. 로깅 라이브러리

### Node.js / Electron

**Should** — [electron-log](https://github.com/megahertz/electron-log) 또는 [pino](https://getpino.io/).

```typescript
import log from 'electron-log';

// 컨텍스트를 항상 붙인다
log.info('[sync] 동기화 완료', { imageCount: 42, durationMs: 1200 });
log.error('[db] 저장 실패', { imageId, error: err instanceof Error ? err.message : err });
```

**Should** — 로그 파일 위치를 알고 있어야 한다.
- Electron: `app.getPath('logs')` → `%APPDATA%/앱명/logs/main.log`
- Node.js: stdout JSON → 로그 집계 서비스 (CloudWatch, Loki 등)

### Python (FastAPI 백엔드)

**Should** — 표준 `logging` + `rich` (개발), `structlog` (프로덕션).

```python
# 개발: rich traceback
from rich.traceback import install
install(show_locals=True)  # ⚠️ 로컬 변수 노출 — 개발 환경에서만

# 프로덕션: JSON 구조화 로그
import structlog
log = structlog.get_logger()
log.info("sync_complete", image_count=42)
```

---

## 3. 원격 오류 수집 — Sentry (Nice)

소규모 프로젝트는 없어도 된다. 여러 사용자의 프로덕션 환경이라면 도입 가치가 높다.

```typescript
import * as Sentry from '@sentry/electron';

Sentry.init({
  dsn: env.SENTRY_DSN,
  environment: env.NODE_ENV,
  // PII 필터링 필수
  beforeSend: (event) => {
    if (event.user) delete event.user.email;
    return event;
  },
});
```

**Must (Sentry 도입 시)** — PII(이메일, 이름, IP) 제거 후 전송.

---

## 4. 디버깅 도구 스택

### source-map-support (Must, Electron/Node.js)

컴파일된 JS 줄번호가 아닌 TypeScript 원본 줄번호로 스택 트레이스 표시.

```bash
npm install -D source-map-support @types/source-map-support
```

```typescript
// main process 최상단 (다른 import보다 먼저)
import 'source-map-support/register';
```

```typescript
// electron-vite 또는 vite 빌드 설정
main: { build: { sourcemap: true } }
```

### IPC 디버그 로거 (Should, Electron)

`ipcMain.handle`을 래핑해서 모든 IPC 채널명 / 인자 / 응답 / 시간을 dev 모드에서 자동 기록.

```typescript
export function wrapIpcHandle(): void {
  if (!is.dev) return;
  const original = ipcMain.handle.bind(ipcMain);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (ipcMain as any).handle = (channel: string, listener: any) => {
    return original(channel, async (event, ...args) => {
      const t = performance.now();
      try {
        const result = await listener(event, ...args);
        log.debug(`[ipc] ✓ ${channel} (${(performance.now()-t).toFixed(1)}ms)`);
        return result;
      } catch (err) {
        log.error(`[ipc] ✗ ${channel}`, err);
        throw err;
      }
    });
  };
}
// registerAllIpc() 이전에 한 번 호출
```

### Zustand devtools (Should, React)

```typescript
// stores/createStore.ts
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

const isDev = process.env.NODE_ENV === 'development';

export function createStore<T>(name: string, initializer: StateCreator<T>) {
  if (isDev) return create<T>()(devtools(initializer, { name }));
  return create<T>()(initializer);
}
```

Chrome/Edge의 **Redux DevTools Extension** 설치 후 DevTools에서 상태 변화를 시간순으로 확인하고 되감기(time-travel) 가능.

### electron-unhandled (Must, Electron)

```bash
npm install electron-unhandled
```

```typescript
import unhandled from 'electron-unhandled';
unhandled({ logger: (err) => log.error('[unhandled]', err) });
```

### React DevTools (Nice)

Electron DevTools(`Ctrl+Shift+I`) 기본 제공. 성능 문제는 **Profiler 탭**에서 어느 컴포넌트가 느린지 확인.

---

## 5. 증상별 디버깅 체크리스트

| 증상 | 먼저 볼 곳 |
|------|-----------|
| 오류 줄번호가 이상한 JS 번호 | `source-map-support` 설치됐는지 확인 |
| IPC 호출 응답이 안 옴 | IPC 로거로 채널명/인자 확인 |
| 조용히 실패하는 기능 | `electron-unhandled` 로그 확인 |
| 상태가 예상과 다름 | Redux DevTools에서 상태 변화 추적 |
| 렌더링이 느림 | React DevTools Profiler |
| Python 백엔드 크래시 | rich traceback으로 지역 변수 포함 출력 |

---

## 체크리스트

```
[ ] 로그에 컨텍스트(모듈명, 관련 ID)가 붙어 있는가?
[ ] error 레벨이 정말 즉각 대응이 필요한 것만 사용하는가?
[ ] source-map-support가 main process 최상단에 등록됐는가?
[ ] unhandledRejection 핸들러가 등록됐는가?
[ ] dev 모드에서 IPC 로거가 동작하는가?
```
