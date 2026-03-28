# 보안

```
적용 범위: 운영 환경 전용
강도: Must/Should/Nice 명시
정본: 이 파일이 "보안 Must 규칙"의 정본이다.
```

> **Must 규칙을 먼저 지킨다. Should/Nice는 운영 피로도와 균형을 맞춰 도입한다.**

---

## Must — 반드시 지켜야 하는 것

### 1. 외부 입력 검증

모든 IPC/API/폼 입력을 경계에서 Zod로 검증한다.
→ 자세한 패턴은 [core/data-integrity.md](../core/data-integrity.md) 참조.

### 2. SQL Injection 방지

파라미터화된 쿼리 사용. 문자열 연결로 SQL 구성 금지.

```typescript
// ❌
db.run(`SELECT * FROM users WHERE id = '${id}'`);

// ✅
db.run('SELECT * FROM users WHERE id = ?', [id]);
```

### 3. 경로 순회(Path Traversal) 방어

파일 경로를 외부에서 받을 때 허용된 디렉터리 안인지 확인.

```typescript
import { resolve } from 'path';

function safeReadFile(userPath: string, allowedDir: string): Buffer {
  const abs = resolve(userPath);
  if (!abs.startsWith(resolve(allowedDir))) {
    throw new AppError('FORBIDDEN', 'Path outside allowed directory');
  }
  return readFileSync(abs);
}
```

### 4. 시크릿을 코드에 넣지 않는다

API 키, DB 비밀번호, 서명 키는 코드에 하드코딩하면 안 된다.
→ 관리 방법은 [core/env-and-config.md](../core/env-and-config.md) 참조.

### 5. Electron 보안 설정

```typescript
new BrowserWindow({
  webPreferences: {
    contextIsolation: true,   // Must
    nodeIntegration: false,   // Must
    sandbox: false,           // preload에서 Node.js 필요한 경우만 false
    // webSecurity: false 절대 금지 — custom protocol로 해결
  }
});
```

---

## Should — 강력 권장

### ESLint 보안 플러그인

```bash
npm install -D eslint-plugin-security
```

```js
// eslint.config.js
import security from 'eslint-plugin-security';
rules: {
  'security/detect-object-injection': 'warn',       // obj[userInput]
  'security/detect-eval-with-expression': 'error',  // eval() with variable
  'security/detect-non-literal-regexp': 'warn',     // RegExp(userInput)
}
```

`detect-object-injection`은 false positive가 많다. 내부 로직에서 의도된 사용이면 `// eslint-disable-line`으로 개별 처리.

### XSS 방어 (브라우저/Electron renderer)

사용자 입력을 HTML로 렌더링할 때 DOMPurify 사용.

```typescript
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userContent);
```

React를 쓰면 `dangerouslySetInnerHTML`을 쓰지 않는 한 기본적으로 XSS 방어가 된다.

### npm audit 주기적 실행

```bash
npm audit --audit-level=high
```

**주의:** CI에서 `audit`을 blocking 조건으로 넣으면 false positive로 개발 흐름이 자주 끊길 수 있다. 주기적 수동 실행 + 심각한 것만 자동 블락 권장.

---

## Nice — 여유가 있을 때

### secretlint pre-commit 훅

커밋 전 시크릿 패턴을 감지한다.

```bash
npx secretlint "**/*"
```

### npm audit CI 자동화

```yaml
# .github/workflows/audit.yml (별도 워크플로 — 주 1회)
- run: npm audit --audit-level=critical
```

### Dependabot 자동 PR

`.github/dependabot.yml`로 의존성 취약점 PR을 자동 생성.

---

## 보안 코드 리뷰 체크리스트

```
Must:
[ ] 모든 외부 입력이 Zod로 검증되는가?
[ ] SQL 쿼리가 파라미터화됐는가?
[ ] 파일 경로 입력이 허용 디렉터리 내인지 확인하는가?
[ ] 시크릿이 코드 또는 git에 없는가?
[ ] contextIsolation: true, nodeIntegration: false 인가? (Electron)

Should:
[ ] eslint-plugin-security 경고가 확인됐는가?
[ ] dangerouslySetInnerHTML 사용이 없거나 DOMPurify를 거쳤는가?
```
