# 테스트 전략

```
적용 범위: 운영 환경 전용
강도: 레벨에 따라 다름 (아래 참조)
```

> **모든 테스트를 처음부터 다 도입하면 초반 속도가 죽는다.**
> 프로젝트 단계에 맞는 레벨을 선택하고, 올라가면서 추가한다.

---

## 테스트 레벨

### Level 1 — 필수 (모든 프로젝트, Must)

ESLint + 새 서비스 로직의 단위 테스트.

| 항목 | 도구 | 기준 |
|------|------|------|
| 코드 품질 | ESLint + TypeScript | PR merge 전 0 errors |
| 서비스 단위 테스트 | Vitest (또는 Node.js test runner) | 새 서비스 파일 PR에는 테스트 필수 |
| 타입 검사 | `tsc --noEmit` | CI에서 항상 실행 |

```bash
# 최소 CI 파이프라인
npm run lint
npm run typecheck
npm test
```

### Level 2 — 권장 (배포하는 앱, Should)

통합 테스트 + 자동화된 CI.

| 항목 | 도구 | 기준 |
|------|------|------|
| API 통합 테스트 | Supertest (Node) / pytest (Python) | 모든 HTTP 엔드포인트 커버 |
| CI 파이프라인 | GitHub Actions | PR 열리면 자동 실행 |
| 커버리지 추적 | Vitest coverage | 80% 미만이면 PR 코멘트 (실패 처리는 상황에 따라) |

```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --coverage
```

### Level 3 — 완전 자동화 (Nice, 중요한 프로덕션 앱)

E2E + 접근성 + 시각 회귀.

| 항목 | 도구 | 기준 |
|------|------|------|
| E2E 테스트 | Playwright | 핵심 유저 플로우 커버 |
| 접근성 | axe-playwright | E2E 실행 중 접근성 위반 감지 |
| 시각 회귀 | Storybook + Chromatic | UI 컴포넌트 스크린샷 비교 |

```typescript
// Playwright E2E with axe
import AxeBuilder from '@axe-core/playwright';

test('로그인 페이지 접근성', async ({ page }) => {
  await page.goto('/login');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

---

## 단위 테스트 원칙

**Must** — 외부 의존성(DB, 네트워크)을 Mock할 때는 실제 동작과 차이가 없는지 주기적으로 확인한다. Mock이 너무 현실과 다르면 테스트가 통과해도 프로덕션에서 실패한다.

**Should** — 통합 테스트 중 DB가 포함된 것은 실제 DB를 사용한다 (인메모리 SQLite, 테스트 컨테이너 등).

**Should** — 테스트는 독립적으로 실행 가능해야 한다. 테스트 실행 순서에 의존하면 안 된다.

```typescript
// 좋은 단위 테스트
describe('userService.create', () => {
  it('이메일이 중복이면 CONFLICT 반환', async () => {
    // Given
    mockUserRepo.findByEmail.mockResolvedValue({ id: '1', email: 'a@a.com' });
    // When
    const result = await userService.create({ email: 'a@a.com', name: 'Test' });
    // Then
    expect(result.ok).toBe(false);
    expect(result.reason).toContain('CONFLICT');
  });
});
```

---

## TDD는 언제?

**Nice** — 복잡한 비즈니스 로직, 오류 케이스가 많은 서비스에 효과적.
단순한 CRUD나 UI 컴포넌트에는 over-engineering이 될 수 있다.

---

## 체크리스트

```
Level 1 (모두 Must):
[ ] npm run lint + typecheck → 0 errors
[ ] 새 서비스 파일에 테스트가 있는가?
[ ] 테스트가 서로 독립적인가? (순서 의존 없음)

Level 2 (Should):
[ ] PR이 열리면 CI가 자동 실행되는가?
[ ] API 엔드포인트 통합 테스트가 있는가?

Level 3 (Nice):
[ ] 핵심 유저 플로우 E2E 테스트가 있는가?
[ ] 접근성 검사가 CI에 포함됐는가?
```
