# 데이터 무결성

```
적용 범위: 모든 프로젝트 (DB 사용 + 외부 입력이 있는 경우)
강도: Must (별도 표시 없는 것은 모두 Must)
정본: 이 파일이 "Zod 입력 검증" 및 "DB 마이그레이션 불변성"의 정본이다.
```

---

## 1. 외부 입력은 경계에서 반드시 검증한다

**Must** — TypeScript 타입은 컴파일 타임 보장이다. IPC, HTTP, 사용자 입력은 런타임에 무엇이든 들어올 수 있다.

### 검증 경계 기준

| 경계 유형 | 검증 필요 여부 |
|---------|------------|
| IPC 핸들러 (Electron) | ✅ Must |
| HTTP API 엔드포인트 | ✅ Must |
| 사용자 폼 입력 | ✅ Must |
| 파일 읽기 / JSON 파싱 | ✅ Must |
| 내부 서비스 호출 (같은 프로세스) | 타입으로 충분 |
| DB row → 도메인 객체 | Should (마이그레이션으로 스키마가 보장되면 타입으로 충분) |

### Zod 패턴 (정본)

```typescript
// schema 파일에서 한 번만 정의
import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
  role: z.enum(['admin', 'viewer']).default('viewer'),
});

// IPC / API / 서비스 경계에서 검증
function handleCreateUser(raw: unknown) {
  const result = CreateUserSchema.safeParse(raw);
  if (!result.success) {
    // 검증 실패: 로깅 후 error 반환 (throw 금지 — caller가 처리)
    return { ok: false, reason: result.error.issues[0]?.message ?? 'VALIDATION_FAILED' };
  }
  // result.data는 완전히 타입화됨
  return userService.create(result.data);
}
```

**Should** — 스키마에서 TypeScript 타입을 `z.infer<>`로 파생한다. 타입과 스키마가 이중 관리되는 것을 방지.
```typescript
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
```

---

## 2. DB 마이그레이션 불변성

**Must** — 마이그레이션 파일은 한 번 배포되면 수정하지 않는다. 수정이 필요하면 새 마이그레이션을 추가한다.

```
❌ migration_003.sql 파일을 열어서 수정
✅ migration_004.sql 에 변경사항 추가
```

**이유:** 수정한 마이그레이션을 재실행하는 것은 보통 불가능하다. 이미 반영된 변경을 다시 적용하면 오류가 나거나, 더 나쁜 경우 데이터가 손상된다.

### 버전 추적

**Must** — `_schema_version` 테이블로 어디까지 마이그레이션됐는지 추적한다.

```sql
CREATE TABLE IF NOT EXISTS _schema_version (
  version INTEGER PRIMARY KEY,
  applied_at TEXT NOT NULL
);
```

```typescript
// 마이그레이션 실행 전 버전 확인
const applied = getAppliedVersions();  // SELECT version FROM _schema_version
for (const migration of MIGRATIONS) {
  if (applied.has(migration.version)) continue;  // 이미 적용됨 — 건너뜀
  migration.up(db);
  recordVersion(migration.version);
}
```

### ADD COLUMN 안전 처리

**Must** — `ALTER TABLE ADD COLUMN`은 이미 컬럼이 있으면 실패한다. 멱등성을 보장한다.

```typescript
// 실행 전 컬럼 존재 확인
const cols = db.exec(`PRAGMA table_info(users)`)[0]?.values ?? [];
const exists = cols.some(row => row[1] === 'new_column');
if (!exists) {
  db.run('ALTER TABLE users ADD COLUMN new_column TEXT');
}
```

---

## 3. 저장 전 백업

**Should** — 로컬 DB의 save 경로 변경이나 전체 데이터 삭제 전에는 백업 파일을 만든다.

```typescript
async function saveWithBackup(db: Database, path: string) {
  if (existsSync(path)) {
    copyFileSync(path, `${path}.bak`);  // 백업
  }
  try {
    await writeFile(path, db.export());
  } catch (err) {
    // 실패 시 백업 복구
    if (existsSync(`${path}.bak`)) copyFileSync(`${path}.bak`, path);
    throw err;
  }
}
```

---

## 체크리스트

```
[ ] 모든 IPC/API 핸들러가 raw: unknown 으로 받고 Zod로 파싱하는가?
[ ] 스키마에서 z.infer<>로 타입을 파생하는가?
[ ] 마이그레이션 파일을 직접 수정하지 않았는가?
[ ] ADD COLUMN이 멱등성을 갖추고 있는가? (PRAGMA table_info 확인)
[ ] _schema_version 테이블이 있는가?
```
