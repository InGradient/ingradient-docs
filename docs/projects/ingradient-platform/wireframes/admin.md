# 조직 관리 (Admin)

## 전체 레이아웃 (`/admin`)

2-컬럼: 좌측 사이드바(180px) + 우측 콘텐츠.

```
┌──────────────┬───────────────────────────────────────────┐
│ Organization │  Members                                  │
│ Admin        │                                           │
│              │  ┌─────────────────────────────────────┐  │
│ Organization │  │ Name          │ Email       │ Role  │  │
│ Members ◀    │  ├─────────────────────────────────────┤  │
│ License      │  │ Kim June      │ june@ing... │ owner │  │
│ Devices      │  │ Lee Minho     │ lee@ing...  │ member│  │
│ Invitations  │  │ Rhee Sungmin  │ min@gm...   │ member│  │
│              │  └─────────────────────────────────────┘  │
│              │                                           │
│              │  [+ Invite Member]                        │
└──────────────┴───────────────────────────────────────────┘
```

## Organization 탭

```
│ Organization                                            │
│                                                         │
│ Name    [Finemtech                ]                     │
│ Code    finemtech (읽기 전용)                            │
│ Status  ● Active                                        │
```

## Members 탭

```
│ Members                                                 │
│                                                         │
│ ┌─────────────┬──────────────┬────────┬──────┐         │
│ │ Name        │ Email        │ Role   │      │         │
│ ├─────────────┼──────────────┼────────┼──────┤         │
│ │ Kim June    │ june@ing...  │ owner  │      │         │
│ │ Lee Minho   │ lee@ing...   │ member │ [⋯]  │         │
│ │ Rhee Sungmin│ min@gm...    │ member │ [⋯]  │         │
│ └─────────────┴──────────────┴────────┴──────┘         │
│                                                         │
│ [⋯] → 역할 변경 / 제거                                  │
```

## License 탭

```
│ License                                                 │
│                                                         │
│ Plan        Standard                                    │
│ Max Users   10                                          │
│ Max Devices 5                                           │
│ Offline     ☑ Enabled (7일)                             │
│ Expires     2027-03-30                                  │
│ Status      ● Active                                    │
```

## Devices 탭

```
│ Devices                                                 │
│                                                         │
│ ┌──────────────┬──────────────┬──────────┬──────┐      │
│ │ Device UID   │ Name         │ Status   │      │      │
│ ├──────────────┼──────────────┼──────────┼──────┤      │
│ │ DEV-A1B2C3   │ Factory-01   │ ● Active │ [⋯]  │      │
│ │ DEV-D4E5F6   │ Factory-02   │ ● Active │ [⋯]  │      │
│ │ DEV-G7H8I9   │ Lab-01       │ ○ Revoked│ [⋯]  │      │
│ └──────────────┴──────────────┴──────────┴──────┘      │
│                                                         │
│ [⋯] → 폐기 / 삭제                                       │
```

## Invitations 탭

```
│ Invitations                                             │
│                                                         │
│ ┌──────────────────┬────────────┬──────────┬──────┐    │
│ │ Email            │ Sent       │ Expires  │      │    │
│ ├──────────────────┼────────────┼──────────┼──────┤    │
│ │ new@company.com  │ 2026-03-28 │ 2026-03-31│ [⋯] │    │
│ └──────────────────┴────────────┴──────────┴──────┘    │
│                                                         │
│ [+ Send Invitation]                                     │
│                                                         │
│ [⋯] → 재발송 / 취소                                      │
```
