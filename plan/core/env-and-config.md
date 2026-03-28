# 환경 변수 & 설정 관리

```
적용 범위: 모든 프로젝트
강도: Must (별도 표시 없는 것은 모두 Must)
정본: 이 파일이 "환경 변수 Zod 검증" 패턴의 정본이다.
```

---

## 1. 앱 시작 시 환경 변수를 검증한다

**Must** — 잘못된 환경으로 앱이 실행되는 것을 방지한다. 런타임 중간에 `undefined`로 죽는 것보다 시작 시 명확한 오류가 훨씬 낫다.

```typescript
// src/config/env.ts
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // 기본값이 있으면 optional, 없으면 required
  DATABASE_URL: z.string().min(1),
  API_BASE_URL: z.string().url().default('https://api.example.com'),

  // boolean 환경 변수
  FEATURE_NEW_UI: z.string().transform(v => v === 'true').default(false),
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  // eslint-disable-next-line no-console
  console.error('[env] 환경 변수 오류:');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parsed.error.issues.forEach((e: any) => console.error(` ${e.path.join('.')}: ${e.message}`));
  process.exit(1);
}

export const env = parsed.data;
```

```typescript
// 어디서든 import해서 사용 — process.env 직접 접근 금지
import { env } from '../config/env';
env.DATABASE_URL  // string (undefined 없음)
env.FEATURE_NEW_UI  // boolean
```

---

## 2. `.env.example`은 필수

**Must** — `.env.example`이 없으면 새 팀원이 어떤 변수가 필요한지 알 수 없다.

```bash
# .env.example — 실제 값이 아닌 설명용 예시
DATABASE_URL=postgres://localhost:5432/mydb
API_BASE_URL=https://api.example.com
FEATURE_NEW_UI=false
SECRET_KEY=<production에서는 반드시 설정>
```

규칙:
- `.env.example`은 git에 커밋한다 (**Must**)
- `.env`, `.env.local`, `.env.*.local`은 `.gitignore`에 넣는다 (**Must**)
- 실제 시크릿이 `.env.example`에 들어가지 않도록 주의 (**Must**)

---

## 3. 환경별 파일 우선순위

**Should** — 아래 순서대로 로드, 나중 것이 앞을 덮어쓴다.

```
.env              ← 기본값 (git에 커밋)
.env.local        ← 로컬 오버라이드 (git 무시)
.env.[NODE_ENV]   ← 환경별 기본값 (git에 커밋 가능)
.env.[NODE_ENV].local  ← 환경별 로컬 오버라이드 (git 무시)
```

---

## 4. 시크릿은 배포 환경의 비밀 저장소에서 주입

**Must** — 시크릿(API 키, DB 비밀번호, 서명 키)은 코드베이스에 절대 넣지 않는다.

| 배포 환경 | 방법 |
|----------|------|
| CI/CD (GitHub Actions) | Repository Secrets |
| 서버 | 환경 변수 또는 AWS Secrets Manager / Vault |
| Electron (로컬) | `safeStorage` API 또는 OS keychain |
| 개발 로컬 | `.env.local` (git 무시) |

**Should** — `secretlint` pre-commit 훅으로 시크릿 패턴이 커밋되는 것을 방지:
```bash
npx secretlint "**/*"
```

---

## 5. 설정 파일 분리 기준

**Should** — 환경 변수 vs 런타임 설정 파일을 구분한다.

| 구분 | 사용처 | 예시 |
|------|--------|------|
| 환경 변수 (`.env`) | 배포 환경마다 다른 값 | DB URL, API 키 |
| 설정 파일 (JSON/YAML) | 운영 중 변경되는 값 | 기능 활성화, 사용자 설정 |
| 코드 상수 | 절대 바뀌지 않는 값 | 최대 재시도 횟수 |

---

## 체크리스트

```
[ ] EnvSchema (Zod)가 모든 환경 변수를 커버하는가?
[ ] 실패 시 process.exit(1)이 호출되는가?
[ ] .env.example에 모든 변수가 기술돼 있는가?
[ ] .env, .env.local이 .gitignore에 있는가?
[ ] process.env.* 직접 접근이 없는가? (env.* 사용)
```
