# Execution Routing

- 문서명: Execution Routing
- 목적: backend 라우팅, fallback/overflow, CPU/GPU 실행 선택 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-28
- 관련 SSOT 문서: `../api_contract.md`, `../operations.md`

## 목적

AI Platform은 같은 논리 job을 항상 같은 인프라에서만 실행하지 않는다. 클라이언트는 "무엇을 실행할지"만 요청하고, 플랫폼은 "어디서 실행할지"를 결정한다.

## 기본 원칙

- backend selection과 worker/GPU admission control은 분리한다
- external execution은 customer policy와 data residency를 통과해야 한다
- fallback 발생 시 이유 코드와 audit trail을 남긴다
- CPU 실행은 명시적으로 지원되는 model/recipe에만 허용한다

## 3단계 라우팅

### 1단계: Backend Selection

job request와 policy 기준으로 backend 후보 집합을 생성하고 최적 backend를 선택한다.

| 판단 기준 | 설명 |
|-----------|------|
| external execution 허용 여부 | customer policy, data residency |
| CPU/GPU 실행 가능 여부 | model/recipe 메타데이터 기준 |
| backend pressure / quota / health | 현재 부하와 가용 자원 |
| preferred backend | job이 지정한 선호 backend |
| latency / cost / priority | SLA, 비용 상한, 실행 우선순위 |

### 2단계: Fallback / Overflow

기본 backend가 과부하이면 정책에 따라 우회한다.

| 트리거 | 대응 |
|--------|------|
| inference queue wait > X초 | batch inference → `vertex_batch_prediction` |
| training pool 포화 | low-priority training → `vertex_custom_job` |
| GPU unavailable | CPU fallback 가능한 recipe만 CPU queue로 전환 |
| `allow_external_execution=false` | 어떤 경우에도 외부 backend 금지 |
| `latency_class=realtime` | `vertex_batch_prediction` 금지 |

### 3단계: 내부 스케줄링

선택된 backend 내에서 GPU worker 할당. 상세는 `training_scheduler.md` 참조.

## Backend 후보

| backend_type | 설명 | external |
|-------------|------|----------|
| `self_hosted` | IDC GPU cluster | No |
| `gke_gpu` | GKE GPU node pool | No |
| `gke_cpu` | GKE CPU node pool | No |
| `vertex_custom_job` | Vertex AI Custom Job | Yes |
| `vertex_batch_prediction` | Vertex AI Batch Prediction | Yes |
| `vertex_endpoint` | Vertex AI Endpoint | Yes |
| `managed_batch` | 외부 managed batch | Yes |

## 주요 입력 필드

| 필드 | 값 | 설명 |
|------|-----|------|
| `execution_preference` | `auto`, `gpu`, `cpu` | 실행 모드 선호 |
| `required_accelerator` | `none`, `cpu`, `gpu` | 필수 가속기 (canonical) |
| `preferred_backend` | backend_type enum 또는 `any` | 선호 backend |
| `latency_class` | `realtime`, `interactive`, `batch` | 지연 민감도 |
| `fallback_policy` | policy identifier | fallback 규칙 |
| `allow_external_execution` | boolean | 외부 실행 허용 |
| `allow_cpu_fallback` | boolean | CPU 대체 허용 |
| `required_gpu_class` | enum / freeform | 필요 GPU 등급 |

## CPU fallback 기준

허용 조건 (모두 충족):

- `supports_cpu_inference=true` (model/recipe 메타)
- `allow_cpu_fallback=true` 또는 `execution_preference=cpu`
- `latency_class`가 `batch` 또는 `interactive`
- CPU memory requirement 충족

CPU fallback 시 반영 사항: 예상 latency 상승, timeout 기준 변경, batch size 재조정, SLA downgrade

### CPU 비권장 대상

- 대형 medical segmentation, heavy foundation model inference
- low-latency SLA가 있는 inference, 대부분의 장시간 training

## Backend Health / Pressure 모델

각 backend의 상태를 별도 관리한다.

| 상태 | 의미 |
|------|------|
| `healthy` | 정상 운영 |
| `degraded` | 일부 제한 |
| `saturated` | 과부하 |
| `maintenance` | 점검 중 |
| `quota-exceeded` | 할당량 초과 (managed backend) |

## 라우팅 결과 기록

모든 job은 아래 값을 남긴다.

- `selected_backend`, `routing_reason`, `routing_reason_code`
- `fallback_applied`, `policy_rule_id`
- `external_execution`, `selected_execution_mode`, `selected_accelerator`

## 운영 콘솔 요구사항

- Jobs: selected backend, routing reason, fallback applied, execution mode
- Workers & GPU: CPU pool 상태, backend saturation summary
- Queues: runtime + backend 기준 분류
- Analytics: backend별 job 수, self-hosted vs external 비율, CPU/GPU 비율, fallback 발생률

## 범위별 계획

| 범위 | 포함 |
|------|------|
| v1 | self-hosted 중심, `execution_preference`/`allow_cpu_fallback` API 추가, routing reason 기록 |
| v1.5 | Vertex AI offload (training, batch), CPU allowlist 확대, backend별 통계 |
| v2 | 정책 기반 자동 routing, cost/SLA-aware routing, queue pressure 자동 overflow |

## 관련 문서

- `../api_contract.md`, `../operations.md`
