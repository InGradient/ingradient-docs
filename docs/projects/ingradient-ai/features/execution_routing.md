# Execution Routing

## 목적

AI Platform은 같은 논리 job을 항상 같은 인프라에서만 실행하지 않는다. 이 문서는 preferred backend, fallback, overflow, CPU/GPU 선택 기준을 정리한다.

## 기본 원칙

- 클라이언트는 무엇을 실행할지만 요청한다.
- 플랫폼은 어디서 실행할지를 결정한다.
- backend selection과 worker/gpu admission control은 분리한다.
- external execution은 customer policy와 data residency를 통과해야 한다.
- fallback 발생 시 이유 코드와 audit trail을 남긴다.

## backend 후보 예시

- `self_hosted`
- `gke_gpu`
- `gke_cpu`
- `vertex_custom_job`
- `vertex_batch_prediction`
- `vertex_endpoint`
- `managed_batch`

## 선택 순서

1. job request와 policy로 backend 후보 집합 생성
2. external execution 허용 여부 확인
3. CPU/GPU 실행 가능 여부 확인
4. backend pressure, health, quota 확인
5. preferred backend 우선 시도
6. 실패 시 fallback 후보 탐색
7. 최종 backend 선택 후 내부 스케줄링 수행

## 주요 입력 필드

- `execution_preference`
- `required_accelerator`
- `preferred_backend`
- `latency_class`
- `fallback_policy`
- `allow_external_execution`
- `allow_cpu_fallback`
- `required_gpu_class`

## CPU fallback 기준

- `supports_cpu_inference=true`
- `allow_cpu_fallback=true` 또는 `execution_preference=cpu`
- latency class가 batch 또는 low-sensitivity
- CPU memory requirement 충족
- SLA downgrade 허용

## 운영 콘솔에서 보여야 할 것

- selected backend
- routing reason
- fallback applied
- external execution 여부
- selected accelerator
- backend health / queue pressure

## 관련 문서

- `../api_contract.md`
- `../operations.md`
- `/home/june/workspace/projects/ingradient-ai/docs/plan/ai_platform_execution_backend_routing_plan.md`
