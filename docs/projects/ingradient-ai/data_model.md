# ingradient-ai Data Model

## 데이터 개요
AI 서비스는 model, job, execution metadata, artifact reference를 소유한다.

## 핵심 엔티티
- model
- model_version
- training_job
- inference_job
- execution_target
- artifact_reference
- metrics and logs summary

## 관계
- model_version은 job outputs와 연결되고
- job은 snapshot 또는 input reference를 가진다

## 저장 위치
- ai DB for metadata
- object storage for artifacts
- cache for execution optimization

## 주의사항
- dataset ownership은 platform 또는 medilabel에 있다
- artifact reference는 immutable input / output lineage를 유지해야 한다

