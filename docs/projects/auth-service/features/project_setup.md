# 프로젝트 초기화

- 적용 범위: auth-service
- 상태: Released (v0.0.1)
- 마지막 수정일: 2026-03-29

## 개요

ingradient-platform에서 인증/인가 책임을 분리하여 독립 서비스를 구축한다.

## 포함 항목

- Fastify 5 + TypeScript (ESM) 프로젝트 스캐폴딩
- Prisma ORM + PostgreSQL 16
- Docker Compose (PostgreSQL + Redis)
- 환경변수 (dotenv + Zod 스키마 검증)
- 구조화 로그 (Fastify pino, JSON)
- 에러 핸들링 (HttpError 클래스, 일관된 `{ statusCode, code, message }` 응답)
- 입력 검증 (Zod + `validateBody()`)
- Health check (`GET /health`)
- 개발 서버 (`npm run dev` — tsx watch, DB 자동 시작)
- Seed 스크립트 (기본 역할 + admin 계정)
