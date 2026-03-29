# 라이선스 시스템 이관

- 적용 범위: auth-service
- 상태: Released (v0.0.1)
- 마지막 수정일: 2026-03-29

## 개요

ingradient-platform에서 라이선스 관리 책임을 auth-service로 이관한다.

## 포함 항목

- 조직 라이선스 할당 (`POST /organizations/:orgId/license` — upsert)
- 라이선스 조회 (`GET /organizations/:orgId/license`)
- 속성: planCode, maxUsers, maxDevices, offlineEnabled, offlineMaxDays, featuresJson, expiresAt
- 조직당 1개 라이선스 (unique constraint)
