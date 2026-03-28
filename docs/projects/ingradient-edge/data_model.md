# ingradient-edge Data Model

## 데이터 개요
edge는 로컬 runtime state와 sync queue를 소유한다.

## 핵심 엔티티
- device
- capture item
- local sync queue item
- settings snapshot
- diagnostics bundle
- license state

## 관계
- device가 capture와 local queue를 생성하고
- sync 완료 후 중앙 시스템과 상태를 맞춘다

## 저장 위치
- local filesystem or embedded DB
- 필요 시 temporary cache

## 주의사항
- 중앙 SoT를 장기적으로 대체하지 않는다
- offline 상태에서 생성된 데이터의 idempotent sync가 중요하다

