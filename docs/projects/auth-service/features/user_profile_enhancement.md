# 프로필 이미지 + 언어/로케일

- 문서명: 프로필 이미지 + 언어/로케일
- 목적: 사용자 프로필에 이미지와 언어/로케일 설정을 추가한다.
- 적용 범위: auth-service
- 상태: Draft
- Owner: Backend
- Reviewer: —
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: gap-analysis.md

## 1. 기능 개요

- 기능 이름: 프로필 이미지 + 언어/로케일
- 한 줄 정의: 사용자가 프로필 이미지를 업로드하고 선호 언어/로케일을 설정할 수 있는 기능을 제공한다.

## 2. 문제 정의

- 현재 사용자 프로필에 이미지와 언어 설정이 없어 개인화가 부족하다.
- 다국어 지원 시 사용자별 언어 설정이 필요하다.

## 3. 목표

- 사용자 목표: 프로필 이미지를 설정하고 선호 언어로 서비스를 이용한다.
- 운영 목표: 프로필 이미지 저장소 관리, 지원 언어 목록 관리.

## 4. 범위 / 비범위

- 포함: 프로필 이미지 업로드/삭제, 이미지 리사이즈, 언어/로케일 설정 (locale, timezone), `/auth/me` 응답에 포함
- 비범위: 이미지 CDN 배포, 다국어 번역 시스템 자체

## 5. 사용자 시나리오

### 기본 흐름 — 프로필 이미지 업로드

1. 참여자: 사용자
2. 선행 조건: 인증 상태
3. 기본 흐름: `POST /users/me/avatar` (multipart/form-data) → 이미지 리사이즈 (128x128, 256x256) → 저장 → URL 반환
4. 예외 흐름: 파일 크기 초과 (2MB) → 400, 지원하지 않는 형식 → 400
5. 로그 포인트: `avatar_upload`, `locale_update`

## 6. UI / UX 방향

- 사용자 설정 → 프로필 → 이미지 업로드 영역 + 언어/시간대 드롭다운

## 7. 데이터 / API / 권한 영향

- User 테이블 확장: `avatar_url`, `locale` (default: "ko"), `timezone` (default: "Asia/Seoul")
- 새 API: `POST /users/me/avatar`, `DELETE /users/me/avatar`
- 기존 API 확장: `PATCH /users/me` (locale, timezone 필드 추가)
- 파일 저장: 로컬 스토리지 → 추후 S3/MinIO 전환

## 8. 테스트 계획

- unit: 이미지 리사이즈, 파일 형식 검증, 크기 제한
- integration: 업로드 → 저장 → `/auth/me`에서 avatar_url 확인
- e2e: 프로필 이미지 변경 → UI 반영 확인

## 9. 릴리즈 고려사항

- release note: 프로필 이미지 및 언어/로케일 설정 추가
- migration: avatar_url, locale, timezone 컬럼 추가

## 10. 오픈 이슈

- 이미지 저장소 선택 (로컬 vs S3)
- Gravatar 연동 여부
