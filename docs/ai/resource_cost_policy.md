# Resource Cost Policy

- 문서명: Resource Cost Policy
- 목적: GPU, CPU, storage 비용 사용 기준을 정의한다.
- 적용 범위: ai jobs, serving, shared execution resources
- 상태: Draft
- Owner: AI Platform
- Reviewer: Infra / Product Owners
- 마지막 수정일: 2026-03-27
- 관련 SSOT 문서: `execution_routing_policy.md`

## 리소스 분류
- realtime serving GPU
- batch training GPU
- CPU fallback
- artifact and cache storage

## 예약과 할당 정책
- 실시간 serving과 배치 학습 자원은 논리적으로 분리한다
- 장시간 job은 queue를 통해 자원을 할당한다

## 우선순위 정책
- production serving
- 운영상 긴급한 inference
- scheduled training
- exploratory or low-priority jobs

## quota와 제한 정책
- organization, project, plan 단위 quota를 둘 수 있다
- 동시 실행 수, GPU 시간, storage 사용량을 별도 제한할 수 있다

## 비용 통제 기준
- idle GPU를 줄인다
- cloud fallback은 비용 상한과 함께 사용한다
- artifact retention과 cache eviction을 정책화한다

## 모니터링 항목
- GPU utilization
- queue wait time
- job success rate
- cloud fallback ratio

