# auth-service Project Overview

- 문서명: auth-service Project Overview
- 목적: auth-service의 목적, 범위, 기술 스택, 모듈 구성을 설명한다.
- 상태: Draft
- Owner: Auth
- Reviewer: Platform / Edge Owners
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `architecture.md`, `data_model.md`, `api_contract.md`, `../../api/auth_api.md`

## 프로젝트 소개

`auth-service`는 INGRADIENT 제품군의 공통 인증과 access primitive를 제공하는 shared service다. 모든 제품(platform, medilabel, ai, edge)이 auth-service를 통해 인증하고 멤버십/역할 정보를 조회한다.

## 목적

- 로그인, 토큰, 세션, 멤버십, 조직과 Product access 기초 정보를 중앙에서 관리한다.
- 여러 제품이 auth DB를 직접 공유하지 않도록 API 기반 service boundary를 제공한다.
- Edge 오프라인 환경을 위한 엔타이틀먼트 토큰을 발급한다.
- 디바이스 등록/승인과 라이선스 관리를 담당한다.

## 범위 / 비범위

### 범위
- 인증: 로그인, 로그아웃, 토큰 갱신, 비밀번호 재설정
- 세션: 생성, 조회, 취소
- 사용자: CRUD, 계정 상태 관리 (ACTIVE, DISABLED, INVITED, LOCKED)
- 조직: CRUD, 상태 관리 (ACTIVE, SUSPENDED, DISABLED)
- Product: CRUD, Product 멤버 관리
- 멤버십: 조직/Product 멤버십, 역할 부여, 정지/삭제
- 역할/권한: 시스템 역할 (ADMIN, ORGANIZER, MEMBER), 커스텀 역할, 권한 매핑
- 라이선스: 조직별 사용량 제한 (maxUsers, maxDevices, offlineMaxDays)
- 디바이스: 등록, 승인, 취소, 상태 관리
- 초대/가입: Invitation (이메일), Join Code (공개 코드)
- 오프라인: Entitlement 토큰 발급/취소 (RS256 JWT)
- 감사: Audit Log 기록

### 비범위
- 제품별 비즈니스 권한 해석 (예: "export 버튼을 보여줄 것인가")
- 데이터셋, 모델, Edge workflow
- UI 화면 (admin-next는 관리용 최소 UI)

## 기술 스택

| 항목 | 기술 |
|------|------|
| Runtime | Node.js, TypeScript |
| Framework | Fastify |
| ORM | Prisma |
| DB | PostgreSQL |
| 인증 | JWT (HS256: Access/Refresh, RS256: Entitlement) |
| Admin UI | React, Vite, styled-components, @ingradient/ui |

## 모듈 구성

auth, users, organizations, products, memberships, roles, permissions, licenses, devices, invitations, join-codes, offline, audit

> 모듈별 책임 상세는 `architecture.md` 참조.

## 프로젝트 구조

```
auth-service/
├── prisma/              # DB 스키마, 마이그레이션, 시드
├── src/
│   ├── common/auth/     # Guard (requireBearer, requireAdmin 등)
│   ├── modules/         # 모듈별 route, service, schema
│   │   ├── auth/
│   │   ├── users/
│   │   ├── organizations/
│   │   ├── products/
│   │   ├── memberships/
│   │   ├── roles/
│   │   ├── permissions/
│   │   ├── licenses/
│   │   ├── devices/
│   │   ├── invitations/
│   │   ├── join-codes/
│   │   ├── offline/
│   │   └── tokens/
│   └── app.ts           # Fastify 앱 설정
├── web/admin-next/      # Admin UI (React)
└── package.json
```

## 주요 의존성

| 대상 | 관계 |
|------|------|
| PostgreSQL | 전용 DB |
| 환경변수 | ACCESS_TOKEN_SECRET, REFRESH_TOKEN_TTL_DAYS, BOOTSTRAP_SECRET, ENTITLEMENT_PRIVATE_KEY 등 |
| Downstream 서비스 | platform, medilabel, ai, edge가 토큰 검증 및 멤버십 조회 |

## 관련 문서

| 문서 | 위치 |
|------|------|
| 내부 아키텍처 | `architecture.md` |
| 데이터 모델 | `data_model.md` |
| API 계약 | `api_contract.md` |
| 공통 Auth API | `../../api/auth_api.md` |
| 보안/접근 제어 | `../../ops/security_access_control.md` |
| 기능 문서 | `features/README.md` |
