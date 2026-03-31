# 설정 모달

## 전체 레이아웃

모달 최대 크기 1200×820px. 좌측 탭 + 우측 콘텐츠.

```
┌──────────────────────────────────────────────────────────┐
│ Settings                                            [✕] │
├──────────┬───────────────────────────────────────────────┤
│          │                                               │
│ General  │  (선택된 탭의 콘텐츠)                           │
│ Account  │                                               │
│ Project  │                                               │
│ Edge     │                                               │
│ Models   │                                               │
│          │                                               │
│ ── Admin ─│                                               │
│ Org      │                                               │
│ Members  │                                               │
│ License  │                                               │
│ Devices  │                                               │
│ Invites  │                                               │
│          │                                               │
└──────────┴───────────────────────────────────────────────┘
```

## General 탭

```
│ Language          [한국어 ▾]                             │
│ ☑ Hover preview                                        │
│ ☐ Single-click to edit                                 │
│ ☑ Show labels on thumbnails                            │
```

## Account 탭

```
│ Account                                                 │
│                                                         │
│ Email    june@ingradient.ai (읽기 전용)                  │
│ Name     [June Lee          ] [Save]                    │
│                                                         │
│ Password                                                │
│ [Change Password]                                       │
│                                                         │
│ ── Danger Zone ──                                       │
│ [🗑 Delete Account]                                     │
│                                                         │
│ [Logout]                                                │
```

## Project 탭

```
│ Project  [ingradient-demo ▾]                            │
│                                                         │
│ Project name  [ingradient-demo     ] ✓                  │
│ Description   [산업 검사 데이터 관리  ]                    │
│                                                         │
│ ── Multi-Image Grouping ──                              │
│ ☑ Enable grouping                                      │
│ Group regex   [^(.+?)_\d+\.jpg$    ]                   │
│ ☐ Allow duplicate filenames                            │
│                                                         │
│ ── Gallery Display ──                                   │
│ ☑ Show filename in gallery                             │
│ ☑ Show bbox class names in detail                      │
│                                                         │
│ ── Members ──                                           │
│ [🔍 Search users to invite]                             │
│ ┌──────────────────────────────────────────┐            │
│ │ 👤 Kim (june@ingradient.ai)   owner  [⋯]│            │
│ │ 👤 Lee (lee@ingradient.ai)    editor [⋯]│            │
│ │ 👤 Park (park@test.com)       viewer [⋯]│            │
│ └──────────────────────────────────────────┘            │
│                                                         │
│ ── Permissions ──                                       │
│ ┌──────┬──────┬──────┬──────┬──────┬──────┐            │
│ │      │Proj  │Data  │Label │Share │Anlys │            │
│ │owner │ ●●●  │ ●●●  │ ●●●  │ ●●●  │ ●●●  │            │
│ │manager│ ●●○  │ ●●●  │ ●●●  │ ●●○  │ ●●●  │            │
│ │labeler│ ○○○  │ ●●○  │ ●●○  │ ○○○  │ ○○○  │            │
│ │viewer│ ○○○  │ ●○○  │ ○○○  │ ○○○  │ ●○○  │            │
│ └──────┴──────┴──────┴──────┴──────┴──────┘            │
│ (● = 허용, ○ = 거부, 좌측 role 고정, 가로 스크롤)         │
│                                                         │
│ ── Danger Zone ──                                       │
│ [🗑 Delete Project]                                     │
```

## 계정 삭제 다이얼로그

```
┌───────────────────────────────────────┐
│ Delete Account                        │
│                                       │
│ ⚠ 이 작업은 되돌릴 수 없습니다.        │
│                                       │
│ 영향 받는 프로젝트:                     │
│ • ingradient-demo (owner)             │
│   ○ 소유권 이전: [Lee ▾]              │
│   ○ 프로젝트 삭제                      │
│                                       │
│ 확인을 위해 이메일 입력:                │
│ [                                   ] │
│ 비밀번호:                              │
│ [                                   ] │
│                                       │
│ [Cancel]           [Delete Account]   │
└───────────────────────────────────────┘
```
