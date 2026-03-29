# Model Version Promotion & Rollback

- 문서명: Model Version Promotion & Rollback
- 목적: promote-default, promote-production, rollback 워크플로를 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `model_registry_and_byom.md`, `../api_contract.md`

## 목적

운영 중인 모델 버전을 안전하게 교체하고, 문제 발생 시 빠르게 이전 버전으로 복구한다. `model_registry_and_byom.md`의 version lifecycle 중 승격/rollback 워크플로를 상세화한다.

## 승격 유형

| 액션 | 포인터 변경 | 영향 |
|------|-----------|------|
| Promote to Default | `default_version_id` | 새 job의 기본 버전 변경 |
| Promote to Production | `production_version_id` | 운영 확정 버전 변경 |
| Rollback | default 또는 production 포인터 복원 | 이전 stable 버전으로 복구 |

## 승격 전 확인 (UI 표시)

| 항목 | 설명 |
|------|------|
| 현재 default version | 교체 대상 |
| 현재 production version | 영향 확인 |
| 승격 대상 version | 새 버전 상세 |
| validation_status | passed 또는 warning만 승격 가능 |
| 예상 영향 범위 | 해당 모델을 사용하는 queue/worker |
| rollback candidate | 문제 시 돌아갈 버전 |
| preload refresh 필요 여부 | warm model 교체 필요 시 |
| loaded worker 영향 | 현재 로드된 worker 수 |

## 승격 흐름

1. 운영자가 Promote 액션 실행
2. validation_status 확인 (passed/warning만 허용)
3. `disabled`/`archived` 버전은 승격 불가
4. 포인터 업데이트 (`default_version_id` 또는 `production_version_id`)
5. 실행 중인 job은 기존 version 유지
6. 새 job부터 새 version 적용
7. preload refresh 필요 시 이벤트 생성
8. audit log + promotion event 기록

## Rollback 흐름

1. 현재 version에서 문제 발생
2. rollback candidate 목록에서 stable 버전 선택 (`is_rollback_candidate=true`)
3. Rollback 실행 (1-click에 가깝게)
4. 포인터 복원
5. 실행 중인 job은 기존 version 유지
6. 이전 promotion 이력은 삭제하지 않음
7. audit log + rollback event 기록

## API

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `.../versions/{version_id}/promote-default` | 기본 버전 승격 |
| `POST` | `.../versions/{version_id}/promote-production` | 운영 버전 승격 |
| `POST` | `.../versions/{version_id}/rollback` | Rollback |

## UX 원칙

- overwrite처럼 보이는 버튼 라벨 금지
- destructive action은 confirmation + 영향 범위 요약 표시
- version history와 current pointer는 한 화면에서 동시에 보임
- before/after 비교 정보 제공

## Audit 기록

- `model_version_promoted_default`
- `model_version_promoted_production`
- `model_version_rollback_executed`
- actor, target version, before/after pointer, reason

## v1 범위

- Promote to Default + Rollback
- validation_status 기반 승격 제한
- confirmation dialog
- audit log

## v1.5 이후

- Promote to Production
- canary rollout (점진적 배포)
- percentage rollout
- scheduled promotion
- approval workflow

## 관련 문서

- `model_registry_and_byom.md`, `model_preload_management.md`, `audit_log.md`
