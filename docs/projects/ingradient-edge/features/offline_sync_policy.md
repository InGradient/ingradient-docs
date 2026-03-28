# Offline Sync Policy

## 목적

`ingradient-edge`는 현장 장비에서 오프라인 또는 불안정 네트워크 환경에서도 작업을 계속할 수 있어야 한다. 이 문서는 platform과의 sync 기준과 local-first 원칙을 정리한다.

## 기본 원칙

- 현장 작업은 local record를 기준으로 지속 가능해야 한다.
- network 유무에 따라 login, upload, sync 경로가 달라질 수 있다.
- dataset/class identifier는 Platform과 동일해야 한다.

## 주요 흐름

1. Platform이 프로젝트 범위와 dataset 정보를 export한다.
2. Edge는 해당 범위 안에서만 dataset을 노출한다.
3. 사용자는 local에서 capture/labeling을 진행한다.
4. network가 가능하면 sync queue를 통해 Platform으로 업로드한다.
5. sync 상태는 local UI에서 확인 가능해야 한다.

## sync 상태 예시

- Local
- Uploading
- Synced
- Upload Failed

## metadata 규칙

- sequence id
- sequence step
- sequence kind
- pattern label
- sync state

위 값은 local 저장소와 platform upload 모두가 같은 의미로 이해해야 한다.

## 충돌/재시도 원칙

- 중복 업로드를 막기 위해 idempotency key를 사용한다.
- terminal 상태가 되기 전 중간 결과를 사용자에게 과하게 노출하지 않는다.
- offline 데이터 정리 기준과 재시도 정책은 운영 문서에 남긴다.

## 관련 문서

- `../operations.md`
- `/home/june/workspace/projects/ingradient-edge/docs/reference/edge-platform-sync.md`
- `/home/june/workspace/projects/ingradient-edge/docs/reference/igp-offline-export.md`
