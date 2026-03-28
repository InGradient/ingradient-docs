# 로컬 우선(Offline-First) 데이터 전략

```
적용 범위: offline-first 전용 (Electron 데스크탑 앱, 모바일 앱, 로컬 우선 아키텍처)
강도: Must/Should 표시
```

> **이 문서의 "로컬 우선" 원칙은 서버가 source of truth인 일반 SaaS/협업형 앱에는 맞지 않는다.**
> 로컬 DB를 primary store로 사용하고 원격 동기화가 best-effort인 아키텍처 전용이다.

---

## 핵심 원칙

1. **로컬 쓰기는 즉시 성공한다** — 원격 서버가 없어도 사용자 작업은 항상 성공한다.
2. **원격 동기화는 best-effort다** — 네트워크 실패는 재시도 큐에 쌓이고, 사용자 동작 실패가 아니다.
3. **로컬이 source of truth다** — 충돌 시 로컬 데이터를 우선한다 (명시적 정책이 없다면).

---

## 1. 쓰기 흐름 (Must)

```
사용자 동작
    ↓
로컬 DB 저장 (즉시, 항상 성공)
    ↓
sync_state = 'local_only'
    ↓
동기화 큐에 추가
    ↓ (백그라운드, 비동기)
원격 서버 업로드
    ↓
성공: sync_state = 'synced'
실패: sync_state = 'upload_failed', retry_count++
```

```typescript
// Service 레이어 예시
async function saveImage(data: ImageData): Promise<Result<Image>> {
  // 1. 로컬 저장 (실패하면 전체 실패)
  const saved = await imageRepo.save({ ...data, sync_state: 'local_only' });
  if (!saved.ok) return saved;

  // 2. 동기화 큐에 추가 (실패해도 로컬 저장은 유지)
  syncQueue.enqueue(saved.data.id).catch((err) =>
    log.warn('[save] sync enqueue failed', err)  // 조용히 실패 허용
  );

  return saved;
}
```

---

## 2. 동기화 상태 모델 (Must)

| 상태 | 의미 |
|------|------|
| `local_only` | 로컬에만 있음, 아직 동기화 안 됨 |
| `uploading` | 업로드 진행 중 |
| `synced` | 서버에 성공적으로 동기화됨 |
| `upload_failed` | 업로드 실패, 재시도 대기 |

**Must** — `sync_state`를 UI에 표시한다. 사용자가 자신의 데이터가 서버에 있는지 알 수 있어야 한다.

---

## 3. 재시도 정책 (Should)

```typescript
const MAX_RETRY = 5;
const RETRY_DELAY_MS = [1000, 5000, 15000, 60000, 300000]; // exponential backoff

async function retryFailed(): Promise<void> {
  const failed = await imageRepo.getByState('upload_failed');
  for (const image of failed) {
    if ((image.retry_count ?? 0) >= MAX_RETRY) {
      log.error('[sync] max retries exceeded', { imageId: image.image_id });
      continue;
    }
    await syncQueue.enqueue(image.image_id);
  }
}
```

**Should** — 최대 재시도 횟수를 초과하면 사용자에게 알린다 (경고 배지, 토스트 등).

---

## 4. 오프라인 감지 (Should)

```typescript
// 연결 상태 모니터 (polling 방식)
async function checkConnectivity(url: string): Promise<boolean> {
  try {
    const res = await fetch(`${url}/health`, { signal: AbortSignal.timeout(4000) });
    return res.ok;
  } catch {
    return false;
  }
}
```

**Should** — 오프라인 상태를 UI에 명확히 표시한다. 사용자가 오프라인인지 몰라서 패닉하지 않도록.

**Should** — 오프라인 → 온라인 전환 시 동기화 큐를 즉시 플러시한다.

---

## 5. 로컬 저장소 관리 (Should)

**Should** — 동기화 완료된 데이터의 로컬 보관 기간을 정책으로 정한다.

```typescript
// 예: 동기화 완료된 이미지는 30일 후 로컬 삭제 가능
const SYNC_RETENTION_DAYS = 30;
const cutoff = new Date(Date.now() - SYNC_RETENTION_DAYS * 86400000);
const deletable = images.filter(
  img => img.sync_state === 'synced' && new Date(img.captured_at) < cutoff
);
```

**Must** — `local_only` 또는 `upload_failed` 데이터는 사용자 확인 없이 삭제하지 않는다.

---

## 6. 오프라인 테스트 케이스 (Should)

오프라인 앱은 아래 시나리오를 반드시 수동 또는 E2E로 테스트한다.

```
[ ] 오프라인 상태에서 데이터 저장 → 성공해야 함
[ ] 오프라인 상태에서 저장 후 온라인 전환 → 자동 동기화
[ ] 동기화 중 앱 종료 후 재시작 → 중단된 동기화 재개
[ ] 서버 500 오류 → 재시도 큐에 쌓임, 앱 크래시 없음
[ ] 최대 재시도 초과 → 사용자에게 경고 표시
[ ] 디스크 부족 → 명확한 오류 메시지
```

---

## 체크리스트

```
[ ] 로컬 저장 실패 없이 사용자 동작이 완료되는가?
[ ] 원격 실패가 로컬 저장에 영향을 주지 않는가?
[ ] sync_state가 UI에 표시되는가?
[ ] 재시도 정책(횟수, 백오프)이 명시됐는가?
[ ] 오프라인 → 온라인 전환 시 동기화가 자동으로 시작되는가?
[ ] local_only / upload_failed 데이터를 사용자 확인 없이 삭제하지 않는가?
```
