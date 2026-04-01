# Offline License Strategy

- 문서명: Offline License Strategy
- 목적: auth-service와 ingradient-edge 간 오프라인 라이선스, 디바이스 인증, 로그인 만료 전략을 정리한다.
- 적용 범위: auth-service, ingradient-edge
- 상태: Draft
- Owner: Product / Auth
- Reviewer: —
- 마지막 수정일: 2026-03-31
- 관련 SSOT 문서: `../projects/auth-service/features/offline_license_entitlement.md`, `../projects/ingradient-edge/features/license_and_auth_flow.md`

## 업데이트 시기

| 시기 | 내용 |
|------|------|
| 오프라인 인증 방식이 바뀔 때 | 3장 인증 계층, 4장 만료 전략 갱신 |
| 디바이스 관리 정책이 바뀔 때 | 5장 디바이스 수명주기 갱신 |
| .ige 패키지 구조가 바뀔 때 | 3장 오프라인 로그인 흐름 갱신 |

## 1. 배경

ingradient-edge는 온라인과 오프라인 두 모드로 동작한다.

- **온라인**: auth-service에 직접 로그인. access token으로 인증. 디바이스 자동 등록.
- **오프라인**: 서버 접속 불가. license key + .ige 패키지의 로컬 사용자 정보로 인증.

오프라인 환경에서도 디바이스 수를 제한하고, 사용자 접근을 만료시킬 수 있어야 한다. 이 문서는 그 전략을 정리한다.

## 2. 현재 만료 포인트 분석

현재 시스템에 만료를 제어하는 지점이 3개 존재한다.

| 만료 대상 | 위치 | 누가 설정 | 확인 시점 |
|-----------|------|-----------|-----------|
| 조직 라이선스 만료 (`license.expiresAt`) | auth-service DB | Admin | 온라인 접속 시 |
| 오프라인 디바이스 만료 (`valid_until`) | 라이선스 발급 시 설정 | Admin (Issue 시) | 사용 안 됨 (edge에서 미참조) |
| .ige 사용자 만료 (`edge_users.valid_until`) | .ige 패키지 내 users.json | Platform export 시 | 오프라인 로그인 시 |

### 문제

- **디바이스 만료일이 실효성 없음**: edge 앱에서 디바이스의 `valid_until`을 참조하지 않는다. 오프라인 환경에서 만료를 강제할 수단이 없다.
- **만료 포인트 중복**: 디바이스 만료와 사용자 로그인 만료가 각각 존재하지만 실제로는 사용자 만료만 동작한다.
- **Admin 혼란**: Issue Offline License 시 만료일을 설정하지만 실제로 적용되지 않아 기대와 동작이 불일치한다.

## 3. 인증 계층 구조

오프라인 환경의 인증은 두 개의 독립된 계층으로 나뉜다.

```
┌─────────────────────────────────────────┐
│  계층 1: 디바이스 인증 (기기 허가)        │
│  "이 기기에서 Edge를 실행해도 되는가?"     │
│                                         │
│  방식: HMAC license key                  │
│  검증: 로컬 (서버 통신 불필요)             │
│  만료: 없음 (명시적 revoke/deactivate)    │
│  기기 수 제한: 발급 시점에 서버에서 차감    │
└─────────────────────────────────────────┘
              ↓ 통과 후
┌─────────────────────────────────────────┐
│  계층 2: 사용자 인증 (사람 허가)          │
│  "이 사람이 로그인해도 되는가?"            │
│                                         │
│  방식: .ige users.json (PBKDF2 hash)     │
│  검증: 로컬 (서버 통신 불필요)             │
│  만료: valid_until (Platform export 시점  │
│        에 설정, 로그인 시 확인)            │
└─────────────────────────────────────────┘
```

### 각 계층의 역할 요약

| 계층 | 역할 | 제어 시점 |
|------|------|-----------|
| **License key** (계층 1) | "이 기기에서 실행 허가" + 기기 수 제한 | **발급 시점** (서버) |
| **.ige 로그인** (계층 2) | "이 사람이 사용 허가" + 접근 기간 제한 | **사용 시점** (로컬) |

License key가 없으면 기기 수 제한을 걸 방법이 없다. 발급 시점에 서버가 슬롯을 차감하는 것이 유일한 게이트이므로, **오프라인 모드에서도 license key 발급은 필수**다.

### 온라인 모드와의 비교

| 항목 | 온라인 | 오프라인 |
|------|--------|----------|
| 디바이스 인증 | 자동 등록 (서버) | license key (로컬) |
| 사용자 인증 | auth-service 로그인 | .ige 로컬 인증 |
| 로그인 만료 | access token TTL | .ige users.valid_until |
| 디바이스 만료 | 필요 없음 (서버가 실시간 제어) | 필요 없음 (deactivate로 제어) |

## 4. 만료 전략

### 원칙: 디바이스에는 만료일을 두지 않는다

디바이스(기기)에 만료일을 두지 않는다. 만료일 기반 관리를 하지 않는 이유:

1. **오프라인에서 만료를 강제할 수 없다** — 서버 통신 없이 시간 기반 만료를 신뢰할 수 없다 (시스템 시계 조작 가능).
2. **사용자 만료로 충분하다** — 기기가 유효해도 로그인 만료가 되면 사용할 수 없다. 보안은 사용자 계층에서 제어한다.
3. **Admin 운영이 단순해진다** — "이 기기를 허용할 것인가 / 차단할 것인가"만 결정하면 된다.

대신 디바이스는 상태 기반으로 관리한다: PENDING (등록 대기) → ACTIVE (사용 중) → REVOKED (폐기됨). PENDING 상태에서 TTL(기본 24시간, Settings에서 설정 가능) 내에 fingerprint 바인딩이 완료되지 않으면 EXPIRED로 자동 전환된다. EXPIRED 디바이스는 Admin이 폐기(REVOKED)한 후 삭제할 수 있다.

### 만료별 역할 정리

| 만료 대상 | 유지 여부 | 역할 |
|-----------|-----------|------|
| 조직 라이선스 만료 | **유지** | 구독 관리. 만료되면 온라인 접속 시 조직 전체 접근 차단 |
| 디바이스 만료 (`valid_until`) | **제거** | 불필요. Revoke/Deactivate로 대체 |
| .ige 사용자 만료 (`valid_until`) | **유지** (핵심) | 오프라인 로그인 제어의 유일한 수단 |

### .ige 사용자 만료의 중요성

`.ige` 패키지를 export 할 때 각 사용자의 `valid_until`을 설정한다. 이 값은:

- 각 사용자의 적용 만료일을 그대로 사용 (조직 소속 시 조직 만료일, 미소속 시 개인 만료일)
- 오프라인 환경에서 로그인할 때마다 확인
- 만료 후 로그인 불가 → 새 .ige 패키지를 받아야 함

이것이 오프라인 환경에서 **접근 기간을 제한하는 유일한 수단**이다.

### 조직 만료일과 사용자 만료일의 관계

사용자가 조직에 소속된 경우, **조직 라이선스 만료일이 최상위 제한**이 된다. 개인 사용자의 만료일이 조직 만료일보다 길 수 없다.

| 상황 | 만료 기준 |
|------|-----------|
| 조직 소속 + 온라인 | 조직 라이선스 만료일 (서버에서 실시간 확인) |
| 조직 소속 + 오프라인 | `.ige` 사용자별 `valid_until` ≤ 소속 조직 만료일 |
| 조직 미소속 + 오프라인 | `.ige` 사용자별 `valid_until` ≤ 개인 만료일 |

#### .ige export 시 사용자별 만료일 개별 계산

`.ige`에 포함되는 사용자는 각각 소속과 만료일이 다를 수 있다. Platform은 export 시 **선택된 사용자 각각의 적용 만료일**을 `users.json`의 `valid_until`에 그대로 넣는다.

```
선택된 사용자 각각에 대해:

  사용자가 조직 소속인 경우:
    valid_until = 소속 조직 라이선스 만료일

  사용자가 조직 미소속인 경우:
    valid_until = 사용자 개인 만료일
```

예시 — 같은 .ige에 3명의 사용자가 포함된 경우:

| 사용자 | 소속 | 결과 valid_until |
|--------|------|-----------------|
| 사용자 A | 조직 X (만료 2026-06-30) | **2026-06-30** |
| 사용자 B | 조직 Y (만료 2026-04-15) | **2026-04-15** |
| 사용자 C | 미소속 (개인 만료 2026-08-01) | **2026-08-01** |

Edge에서 로그인 시 **해당 사용자의 `valid_until`**만 확인한다. 사용자 B가 사용자 A보다 먼저 만료되어도 사용자 A의 접근에는 영향 없다.

만료 후 계속 사용하려면 해당 사용자의 라이선스를 갱신한 뒤 새 `.ige` 패키지를 재발급해야 한다.

#### 만료일 변경 대응

사용자의 만료일이 변경되면 (예: 조직 구독 갱신, 개인 라이선스 연장 등) **.ige를 재발급**하면 된다. 재발급 시 모든 사용자의 `valid_until`이 각자의 최신 만료일로 갱신된다.

**.ige users.json:**

```json
[
  { "email": "alice@example.com", "valid_until": "2026-04-15T00:00:00Z", ... },
  { "email": "bob@example.com", "valid_until": "2026-08-01T00:00:00Z", ... }
]
```

Edge 로그인 시 해당 사용자의 `valid_until`만 확인한다. 만료 시 "계정이 만료되었습니다. 새 패키지를 받으세요." 메시지와 함께 거부한다.

### 조직 가입/탈퇴 시 만료일 전환

#### 원칙: 조직에 소속되면 조직 만료일을 따른다

개인 유료 사용자가 조직에 가입하면, 해당 사용자의 만료일은 **조직 라이선스 만료일**로 전환된다. 개인 만료일은 보존되지만 비활성 상태가 된다.

```
사용자 A: 개인 만료일 2026-08-01 (잔여 4개월)
  → 2026-04-01에 조직 X 가입 (조직 만료일 2026-06-30)
  → 적용 만료일: 2026-06-30 (조직 기준)
  → 개인 잔여일 4개월은 동결(freeze)

사용자 A: 2026-06-30 조직 X 만료
  → 개인 잔여일 복원: 탈퇴 시점 + 동결된 잔여일
  → 적용 만료일: 2026-06-30 + 4개월 = 2026-10-30
```

조직 소속 기간 동안 개인 만료일은 **동결**된다. 탈퇴 시 동결된 잔여일을 탈퇴 시점 기준으로 재계산하여 복원한다. 개인이 유료로 남은 기간을 손해보지 않는다.

**동결 데이터 저장:**

```
조직 가입 시 auth-service에 저장:
  - frozen_personal_remaining_days: 개인 만료일 - 가입 시점 (일수)
  - org_joined_at: 가입 시점

조직 탈퇴/만료 시 복원:
  - 새 개인 만료일 = 탈퇴 시점 + frozen_personal_remaining_days
```

#### 조직 만료일이 개인보다 짧을 때 — 알림

조직 만료일이 개인 만료일보다 먼저 끝나는 경우, 만료 전에 사용자에게 **ingradient-platform의 notice 기능**을 통해 알림을 보낸다.

| 시점 | 대상 | 알림 내용 |
|------|------|-----------|
| 조직 가입 시 | 사용자 | "조직 라이선스로 전환되었습니다. 개인 라이선스 잔여 N일은 동결되며, 조직 탈퇴 또는 만료 시 복원됩니다." |
| 조직 만료 30일 전 | 사용자 | "소속 조직의 라이선스가 30일 후 만료됩니다. 만료 후 개인 라이선스(잔여 N일)로 자동 전환됩니다." |
| 조직 만료 30일 전 | 조직 Admin | "조직 라이선스가 30일 후 만료됩니다. 갱신하지 않으면 소속 멤버가 개인 라이선스로 전환됩니다." |
| 조직 만료 7일 전 | 사용자 | "소속 조직의 라이선스가 7일 후 만료됩니다. 개인 라이선스 잔여: N일" |
| 조직 만료 시점 | 사용자 | "소속 조직의 라이선스가 만료되었습니다. 개인 라이선스로 전환되었습니다. (만료일: YYYY-MM-DD)" |
| 조직 만료 시점 (잔여일 없음) | 사용자 | "소속 조직의 라이선스가 만료되었습니다. 개인 라이선스가 없어 접근이 차단됩니다." |

알림은 ingradient-platform의 notice 시스템을 통해 전달한다.

#### 만료일 결정 규칙 정리

```
사용자가 조직에 소속된 경우:
  적용 만료일 = 조직 라이선스 만료일
  개인 잔여일 = 동결 (frozen_personal_remaining_days)

사용자가 조직에 미소속인 경우:
  적용 만료일 = 개인 만료일

조직 탈퇴/만료 시 (동결된 잔여일이 있는 경우):
  적용 만료일 = 탈퇴 시점 + 동결된 잔여일 (자동 복원)

조직 탈퇴/만료 시 (동결된 잔여일이 없는 경우):
  적용 만료일 = 만료됨 (접근 차단)
```

이 규칙은 온라인/오프라인 모두에 동일하게 적용된다. 온라인에서는 auth-service가 실시간 확인하고, 오프라인에서는 .ige export 시점에 계산된 `valid_until`로 반영된다.

## 5. 디바이스 수명주기

디바이스는 만료 없이, 명시적 상태 전환으로 관리한다.

```
  [최초 등록]         [활성화]            [폐기]              [삭제]
   ──→  PENDING  ──→  ACTIVE  ──→  REVOKED  ──→  (삭제됨)
```

### 온라인 디바이스

| 행동 | 방법 | 주체 |
|------|------|------|
| 등록 | Edge 앱이 서버 접속 시 자동 (`POST /devices/register`) → 즉시 ACTIVE | Edge 앱 |
| 폐기 | Admin Console에서 Revoke 클릭 | Admin |
| 삭제 | Admin Console에서 Delete 클릭 (REVOKED 상태만) | Admin |

### 오프라인 디바이스

| 행동 | 방법 | 주체 |
|------|------|------|
| 등록 | Platform에서 .ige export 시 기기명 입력 → PENDING 등록 (fingerprint 미정) | 사용자 |
| 활성화 | Edge에서 license key 입력 → fingerprint 바인딩 → ACTIVE 전환 | Edge 사용자 |
| 재발급 | Platform에서 등록된 기기 선택 → .ige 재발급 (fingerprint 포함) | 사용자 |
| 폐기 (온라인) | Admin Console에서 Revoke 클릭 | Admin |
| 폐기 (오프라인) | Edge에서 Deactivation Code 생성 → Admin Console에서 코드 입력 | Edge 사용자 + Admin |
| 삭제 | Admin Console에서 Delete 클릭 (REVOKED 상태만) | Admin |

### 오프라인 디바이스 — 최초 발급 흐름

최초 발급 시에는 기기의 fingerprint를 알 수 없다. Edge가 설치된 후 기기에서 license key를 입력해야 fingerprint가 바인딩된다.

```
Platform (온라인)                  Edge (오프라인)

1. .ige export
   → 기기명 입력
   → auth-service에 PENDING 등록
     (fingerprint 없음, 슬롯 차감)
   → .ige 발급 (fingerprint 미포함)
       │
       │  .ige + license key 전달
       │  ──────────────────→
       │                         2. Edge 설치 + .ige 로드
       │                            → 기기의 fingerprint 표시
       │
       │                         3. license key 입력
       │                            → Edge가 fingerprint + key를
       │                              auth-service에 전달
       │                            → PENDING에 fingerprint 바인딩
       │                            → ACTIVE 전환
```

### PENDING 디바이스 TTL 만료 시 복구 절차

.ige를 발급해서 현장에 전달했지만, TTL(기본 24시간) 내에 Edge에서 license key를 입력하지 못하면 PENDING → EXPIRED로 자동 전환된다. 이 경우:

1. Admin이 EXPIRED 디바이스를 "폐기"(REVOKED)한 후 삭제 → 슬롯 반환
2. Platform에서 같은 기기명으로 .ige를 다시 export → 새 PENDING 등록
3. 새 .ige + license key를 현장에 재전달

현장에 이미 전달된 기존 .ige는 무효가 된다 (PENDING 디바이스가 EXPIRED되어 바인딩 불가). 현장 담당자에게 "새 패키지를 받으세요" 안내가 필요하다.

> **운영 팁**: TTL을 넉넉하게 설정하면 이 상황을 줄일 수 있다. 물류 시간이 긴 현장이라면 Settings에서 TTL을 48시간 또는 72시간으로 늘리는 것을 권장한다.

### 오프라인 디바이스 — 재발급 흐름

재발급 시에는 이미 fingerprint가 등록되어 있으므로, .ige에 fingerprint를 포함시켜 해당 기기에서만 사용할 수 있도록 한다.

```
Platform (온라인)                  Edge (오프라인)

1. 등록된 기기 목록에서 선택
   → .ige 재발급 (fingerprint 포함)
       │
       │  .ige 전달
       │  ──────────────────→
       │                         2. Edge에서 .ige 로드
       │                            → .ige의 fingerprint와
       │                              현재 기기 fingerprint 비교
       │                            → 일치: 진행
       │                            → 불일치: 거부
       │                              ("이 패키지는 다른 기기용입니다")
       │
       │                         3. license key 재입력 불필요
       │                            (이미 ACTIVE)
```

재발급된 .ige를 다른 기기에 복사해도 fingerprint 불일치로 로드가 거부되므로, 하나의 .ige로 여러 기기를 사용하는 것이 불가능하다.

### Deactivation Code 흐름

오프라인 디바이스는 서버에 접속할 수 없으므로, 슬롯 반환을 위해 코드 기반 비활성화를 사용한다.

```
Edge (오프라인)                    Admin Console (온라인)
     │                                    │
     │  1. "Deactivate" 실행               │
     │  → 코드 생성: BASE64(fingerprint     │
     │    |timestamp|HMAC)                 │
     │  → 로컬 license 삭제                 │
     │                                    │
     │  2. 코드를 Admin에게 전달 (메일 등)    │
     │  ──────────────────────────────→    │
     │                                    │
     │                   3. "Deactivate" 모달에 코드 입력
     │                   → 서버가 HMAC 검증
     │                   → 디바이스 REVOKED
     │                   → 라이선스 슬롯 반환
```

## 6. 온라인 ↔ 오프라인 모드 전환

실제 현장에서는 같은 기기가 온라인과 오프라인을 오갈 수 있다. 전환 시 인증 방식이 달라지므로 이를 매끄럽게 처리해야 한다.

### 원칙: 온라인 사용 중 로컬에 계정 정보를 항상 캐시한다

온라인으로 auth-service에 로그인하면, 해당 계정의 인증 정보(password hash, salt, 만료일)를 Edge 로컬에 캐시한다. 인터넷이 끊겨도 캐시된 정보로 즉시 오프라인 모드로 전환할 수 있다.

### 온라인 → 오프라인 전환

```
[온라인 사용 중]
  auth-service 인증, access token 기반
  → 로컬에 계정 정보 캐시 (hash, salt, 만료일)
  → fingerprint는 이미 online 디바이스로 등록된 상태
       │
       │  인터넷 끊김 감지 (health check 실패)
       ↓
[오프라인 모드 자동 전환]
  → 캐시된 계정 정보로 로컬 인증 전환
  → 계정 만료일까지 계속 사용 가능
  → license key 불필요 (캐시 기반 자동 전환)
  → 작업 데이터는 로컬에 저장, 온라인 복귀 시 sync
```

**핵심**: 사용자가 아무것도 하지 않아도 자동 전환된다. 온라인 로그인 시 캐시된 각 사용자의 `valid_until`이 기준이 되어, 해당 만료일까지 오프라인으로 작업을 계속할 수 있다.

**캐시 분실 시**: Edge 앱 재설치 등으로 로컬 캐시가 삭제된 경우, 서버에 fingerprint를 보내 license key를 재발급받아야 한다. 완전 오프라인 상태에서 캐시가 없으면 .ige + license key로 재설치가 필요하다.

### 오프라인 → 온라인 전환

```
[오프라인 사용 중]
  로컬 인증, 캐시된 계정 기반
       │
       │  인터넷 연결 감지 (health check 성공)
       ↓
[온라인 모드 자동 전환]
  → auth-service에 자동 재인증 시도
     → 성공: 온라인 모드 전환
              - access token 재발급
              - auth-service에 PATCH /devices/:id { mode: 'online' } 호출 → DB mode 갱신
              - 로컬 캐시 정보 최신화 (만료일 등)
              - 밀린 sync 데이터 자동 업로드
     → 실패 (계정 만료, 비밀번호 변경 등):
              - 사용자에게 알림
              - 재로그인 요청
```

**핵심**: 온라인으로 복귀하면 최신 계정 정보를 서버에서 다시 받아 로컬 캐시를 갱신한다. 조직 만료일이 변경되었더라도 이 시점에 반영된다.

### 온라인 기기의 오프라인 전환 등록

기존에 온라인으로만 사용하던 기기를 **의도적으로 오프라인 환경에 배치**하는 경우:

```
Admin Console (온라인)                  Edge (현장)

1. Licenses & Devices에서 해당 기기 선택
2. "오프라인 전환" 클릭
   → PATCH /devices/:id { mode: 'offline' }
   → 서버가 기존 fingerprint 기반
     license key 생성 및 반환
   → Admin Console에 key 표시 (복사 가능)
3. Platform에서 .ige 발급 (fingerprint 포함)
       │
       │  .ige + license key 전달
       │  ──────────────────→
       │                         4. Edge에서 license key 입력
       │                            → 로컬 검증 통과
       │                            → 오프라인 운영 시작
```

> 온라인 사용 중 **갑자기 인터넷이 끊기는 경우**와 다름. 갑작스런 끊김은 캐시 기반 자동 전환이고, 여기는 **의도적으로** 오프라인 환경에 기기를 배치하는 경우.

### 로컬 캐시 구조

온라인 사용 시 Edge가 로컬에 저장하는 계정 정보:

```json
{
  "user_id": "...",
  "email": "...",
  "name": "...",
  "role": "...",
  "password_hash": "...",
  "salt": "...",
  "valid_until": "2026-05-01T00:00:00Z",
  "cached_at": "2026-04-01T10:30:00Z"
}
```

- `password_hash` / `salt`: 오프라인 로그인 검증용. 온라인 로그인 성공 시 auth-service에서 받아 저장.
- `valid_until`: 사용자 만료일 (조직 소속 시 조직 만료일, 미소속 시 개인 만료일). 이 날짜까지 오프라인 로그인 허용. `null`이면 만료 검사 건너뜀 (무기한). 단, .ige export 시에는 `valid_until`이 null인 사용자는 export 불가 (Admin에게 만료일 설정 요청).
- `cached_at`: 캐시 시점. 오래된 캐시에 대한 경고 표시 기준.

로컬 캐시는 Electron의 `safeStorage`로 암호화하여 저장한다.

## 7. 기기 수 제한 전략

### 원칙: 기기 수 제한은 발급 시점에 서버에서 제어한다

오프라인 환경에서는 "지금 몇 대가 동작 중인지" 실시간으로 알 수 없다. 따라서 기기 수 제한은 **license key 발급 시점**에 서버가 슬롯을 차감하는 방식으로 제어한다. 런타임에서는 제어하지 않는다.

```
[서버 — 발급 시점]                    [Edge — 사용 시점]

 조직 한도: maxDevices = 5            license key로 로컬 검증
 현재 등록: 3대                       → fingerprint 일치하면 통과
 → 4번째 발급 요청 → OK (슬롯 차감)    → 서버 통신 불필요
 → 6번째 발급 요청 → 거절
   (DEVICE_LIMIT_REACHED)
```

### 전체 흐름

```
1. Platform에서 .ige export (기기명 입력)
   → auth-service에 PENDING 디바이스 등록 (슬롯 차감)
   → 사용자별 만료일 = 각 사용자의 적용 만료일 (조직 만료일 또는 개인 만료일)
   → .ige 생성
         ↓
2. Edge에 .ige 전달 및 설치
   → Edge가 fingerprint를 서버에 전달
   → 서버가 license key 생성 후 반환 → ACTIVE 전환
         ↓
3. 오프라인 사용 (사용자별 만료일까지)
```

### license key 복제 방지

license key는 fingerprint 기반 HMAC이므로 다른 기기에서 재사용할 수 없다.

```
기기 A (fingerprint: A1B2-...) → HMAC(secret, "A1B2-...") → key_A
기기 B (fingerprint: C3D4-...) → HMAC(secret, "C3D4-...") → key_B

key_A를 기기 B에 입력 → 기기 B의 expected key ≠ key_A → 검증 실패
```

.ige 패키지는 USB 등으로 여러 기기에 복사할 수 있지만, license key가 없으면 Edge 앱 자체가 실행되지 않으므로 (계층 1 차단) 무단 사용이 불가능하다.

### 슬롯 반환 시나리오

| 상황 | 해결 방법 |
|------|-----------|
| 기기를 더 이상 사용하지 않음 | Edge에서 Deactivate → Admin에게 코드 전달 → 슬롯 반환 |
| 기기 고장 / 분실 (코드 발급 불가) | Admin이 Admin Console에서 직접 Revoke → 슬롯 반환 |
| 기기 교체 | 기존 기기 Deactivate 또는 Admin Revoke → 새 기기에 재발급 |

기기 고장이나 분실처럼 Deactivation Code를 발급할 수 없는 경우, Admin이 강제로 Revoke하여 슬롯을 회수한다.

## 8. Platform .ige export UI 변경

### 현재 UI 구조

```
[Export Tab]
  ☑ Datasets 선택
  ☑ Users 선택
  Account Expiry: [90] 일
  [Create Project File (.ige)]

[Export History]
  Version | Status    | Created    | Actions
  v2      | completed | 2026-03-31 | [Download] [Delete]
  v1      | completed | 2026-03-28 | [Download] [Delete]
```

### 변경 후 UI 구조

```
[Export Tab]
  ☑ Datasets 선택
  ☑ Users 선택
  Device Name: [공장 A - 1번 라인]        ← 신규 필드
  [Create Project File (.ige)]

[Export History — 기기별 관리]
  Device Name       | Status    | Created    | Actions
  공장 A - 1번 라인 ✎ | completed | 2026-03-31 | [Download] [Reissue]
  공장 B - 검수 라인 ✎ | completed | 2026-03-28 | [Download] [Reissue]
```

### 변경 상세

**Export 폼:**
- "Device Name" 텍스트 입력 필드 추가 (필수)
- export 시 auth-service에 `POST /licenses` → PENDING 디바이스 등록 (슬롯 차감)
- license key가 응답으로 반환됨 → 다운로드 시 함께 제공하거나 별도 표시

**History 테이블:**
- "Device Name" 컬럼 추가 — 인라인 수정 가능 (✎ 아이콘 클릭)
  - 이름 변경 시 auth-service에도 `PATCH /devices/:id` 로 동기화
- "Reissue" (재발급) 버튼 추가 — 기존 기기 기준으로 새 .ige 생성
  - 재발급 시 fingerprint가 이미 등록되어 있으면 .ige에 fingerprint 포함
  - 재발급 시 auth-service 재등록 불필요 (기존 ACTIVE 디바이스 유지)
- Version, Delete 버튼 없음 — 삭제는 auth-service Admin Console에서 디바이스를 삭제하면 자동으로 반영

**재발급 흐름:**
1. History에서 기기 행의 "Reissue" 클릭
2. 기존 기기 정보(이름, fingerprint) 유지, 최신 데이터셋/사용자로 새 .ige 생성
3. fingerprint가 바인딩된 상태이면 .ige에 포함 → Edge에서 기기 검증
4. license key 재입력 불필요

## 9. 구현 영향 (향후 작업)

이 전략을 적용하려면 아래 변경이 필요하다. 별도 기획 문서에서 다룬다.

### auth-service

- `POST /licenses` API에서 `valid_until` 파라미터 제거
- PENDING 상태 디바이스 지원 (fingerprint 없이 등록, 이후 바인딩)
- `PATCH /devices/:id` API로 기기명 변경 및 모드 전환 (online ↔ offline) 지원
- 온라인 로그인 응답에 계정 캐시용 정보 포함 (hash, salt, 만료일)
- Admin Console에서 온라인 디바이스 → 오프라인 전환 UI (license key 발급 포함)
- 조직 가입 시 만료일을 조직 기준으로 전환, 개인 잔여일 동결 (`frozen_personal_remaining_days` 저장)
- 조직 탈퇴/만료 시 개인 만료일 복원 (탈퇴 시점 + 동결 잔여일)
- Admin Console Users 상세 모달에 라이선스 잔여일 표시 (조직 소속 시 조직 잔여일 + 동결된 개인 잔여일, 미소속 시 개인 잔여일)
- Admin Console Issue Offline License 모달에서 `Valid Until` 필드 제거
- wireframes/licenses_devices.md 업데이트

### ingradient-platform

- Export 폼: "Account Expiry" 필드 제거, "Device Name" 필드 추가
- Export 시 auth-service에 PENDING 디바이스 등록 API 호출
- History 테이블: Version 컬럼 제거, Delete 버튼 제거 (auth-service에서 디바이스 삭제 시 자동 반영)
- History 테이블에 기기명 컬럼 (인라인 수정 가능) + "Reissue" 버튼 추가
- 기기명 변경 시 auth-service에 `PATCH /devices/:id` 호출하여 동기화
- 재발급 시 기존 기기 기반 .ige 생성 (fingerprint 포함)
- 사용자별 `valid_until` 적용 로직 구현 (조직 소속 시 조직 만료일, 미소속 시 개인 만료일)
- 조직 만료 임박 시 notice 알림 발송 (30일 전, 7일 전, 만료 시점)
- 조직 만료 시 개인 만료일 자동 복원 및 전환 알림
- `edge_packages` DB 테이블에 `device_name`, `device_id` 컬럼 추가
- Settings > Account 탭에 계정 만료일 표시 (조직 소속 시 조직 만료일, 미소속 시 개인 만료일)

### ingradient-edge

- .ige 로드 시 fingerprint 포함 여부 확인
  - fingerprint 있으면 현재 기기와 비교 → 불일치 시 거부
  - fingerprint 없으면 (최초 발급) 스킵
- 로그인 시 해당 사용자의 `valid_until` 확인 → 만료 시 로그인 거부
- 온라인 로그인 성공 시 계정 정보 로컬 캐시 (hash, salt, 만료일)
- 인터넷 끊김 감지 시 캐시 기반 오프라인 자동 전환
- 인터넷 복귀 감지 시 auth-service 재인증 → 캐시 최신화 → 온라인 전환

## 10. 관련 문서

- `../projects/auth-service/features/offline_license_entitlement.md` — 오프라인 라이선스 발급/비활성화 상세
- `../projects/auth-service/features/device_management.md` — 온라인 디바이스 등록/폐기 상세
- `../projects/ingradient-edge/features/license_and_auth_flow.md` — Edge 측 라이선스/인증 흐름
- `../projects/ingradient-edge/features/offline_sync_policy.md` — 오프라인 동기화 정책
- `../product/terminology.md` — 용어 정의 (Device, License, Entitlement 등)
