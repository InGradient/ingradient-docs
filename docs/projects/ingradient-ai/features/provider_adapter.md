# Provider Adapter

- 문서명: Provider Adapter
- 목적: 외부/managed 모델 실행을 위한 provider 추상화 계층을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../architecture.md`, `execution_routing.md`

## 목적

Provider Adapter는 Runtime(실행 모드)과 Provider(실행 소스)를 분리하여, 동일한 Job API로 self-hosted와 managed/external 모델을 모두 실행할 수 있게 한다.

## Runtime vs Provider

| 개념 | 설명 | 예시 |
|------|------|------|
| **Runtime** | 실행 모드 분류 | detection, medical, llm, generative-image |
| **Provider** | 실행 소스 | self-hosted, vertex-ai-managed, vertex-endpoint, external API |

같은 runtime의 job이라도 provider에 따라 실행 경로가 달라진다.

## Provider 유형

| Provider | 설명 | 관리 주체 |
|----------|------|-----------|
| `self_hosted` | 자체 GPU cluster | 플랫폼 |
| `vertex_custom_job` | Vertex AI Custom Job | GCP |
| `vertex_batch_prediction` | Vertex AI Batch Prediction | GCP |
| `vertex_endpoint` | Vertex AI Endpoint | GCP |
| `managed_batch` | 외부 managed batch | 외부 |

## Provider Adapter 책임

| 역할 | 설명 |
|------|------|
| Auth | provider별 credential 관리 (API key, service account) |
| Request 변환 | 내부 job 포맷 → provider 요청 포맷 |
| Response 정규화 | provider 응답 → 내부 결과 포맷 |
| Usage 추출 | provider 사용량 → UsageRecord |
| Error 표준화 | provider 에러 → 표준 에러 코드 |

## Capability 기반 호출

provider에 무관하게 동일 capability로 호출:

| Capability | 설명 |
|-----------|------|
| `inferVision` | 이미지 기반 추론 |
| `segmentByPrompt` | prompt 기반 segmentation |
| `generateText` | 텍스트 생성 |
| `embedText` | 텍스트 embedding |
| `generateImage` | 이미지 생성 |
| `editImage` | 이미지 편집 |

## External Execution 정책

- external provider 사용은 `allow_external_execution` 필드로 제어
- customer policy와 data residency 통과 필수
- external execution 시 routing_reason에 기록

## Provider 선택 정책

| 모델 유형 | 기본 provider | 대체 provider |
|-----------|-------------|-------------|
| LLM | managed API (Vertex) | self-hosted (data isolation) |
| Image generation | Vertex AI Imagen | - |
| SAM 계열 | self-hosted (대형 입력) | - |
| Medical | self-hosted 또는 batch | - |
| Detection | self-hosted | vertex_custom_job (overflow) |

## v1 범위

- provider adapter 인터페이스 정의
- self_hosted provider 구현 (기본)
- 구조만 수용, managed provider 실제 연동 없음

## v1.5 범위

- Vertex AI Custom Job adapter (training offload)
- Vertex AI Batch Prediction adapter
- provider별 사용량 통계

## v2 범위

- Vertex AI Endpoint adapter
- policy 기반 provider 선택 엔진
- provider health monitoring
- cost-aware provider routing

## 관련 문서

- `../architecture.md`, `execution_routing.md`, `../deployment.md`
