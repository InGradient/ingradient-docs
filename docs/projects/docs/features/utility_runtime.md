# Utility Runtime

- 문서명: Utility Runtime
- 목적: preprocessing, export, report 등 보조 작업 runtime의 범위와 실행 기준을 정의한다.
- 상태: Draft
- Owner: AI
- 마지막 수정일: 2026-03-29
- 관련 SSOT 문서: `../architecture.md`, `runtime_contract.md`

## 목적

Utility runtime은 AI Platform에서 가장 먼저 구현되는 runtime이다. preprocessing, export, report 같은 보조 작업을 처리하며, 플랫폼 골격의 end-to-end 검증 대상이다.

## 책임

- 데이터 전처리 (image resize, normalization, format conversion)
- 결과 내보내기 (export to COCO, YOLO format 등)
- 리포트 생성 (metrics summary, comparison report)
- 경량 변환 작업

## 비책임

- 모델 학습 (training runtime 책임)
- 모델 추론 (inference runtime 책임)
- GPU 집약적 연산 (detection/medical runtime 책임)

## 실행 환경

- CPU 우선 (대부분의 utility job은 GPU 불필요)
- 필요 시 GPU 사용 가능 (GPU 전처리 등)
- `utility-pool` 또는 `utility-cpu-pool`에서 실행

## Job 예시

| task_type | 설명 | 실행 모드 |
|-----------|------|-----------|
| `preprocess` | 이미지 전처리 (resize, crop, augmentation) | CPU |
| `export` | 데이터셋/결과 내보내기 | CPU |
| `report` | 메트릭 요약 리포트 생성 | CPU |
| `convert` | 포맷 변환 (DICOM → PNG 등) | CPU |
| `validate_artifact` | artifact checksum/format 검증 | CPU |

## Runtime Contract 구현

`runtime_contract.md`의 7개 메서드를 구현한다.

- `can_accept`: job_type=utility, CPU 리소스 확인
- `prepare_model`: utility job은 모델 불필요한 경우 skip
- `prepare_inputs`: storage에서 입력 데이터 다운로드
- `execute`: task_type별 처리 로직 실행
- `collect_metrics`: 처리 시간, 입출력 크기 등
- `persist_outputs`: 결과를 object storage에 저장
- `cleanup`: 임시 파일 정리

## 입력 / 출력

- 입력: `input_artifacts` (storage URI, artifact_type)
- 출력: `output_prefix`에 결과 저장, artifact reference 반환
- 입출력 모두 immutable reference

## v1 범위 (Phase 1 — 최우선)

- preprocessing, export 기본 구현
- CPU-only 실행
- utility job end-to-end 흐름 검증 (플랫폼 골격 검증 목적)
- heartbeat + status 보고

## v1.5 이후

- GPU 전처리 지원
- 병렬 처리 (batch input)
- task_type 확장

## 관련 문서

- `runtime_contract.md`, `../architecture.md`, `job_lifecycle.md`
