# medilabel Roadmap

## 현재 범위

현재 문서 기준으로 아래 축이 핵심이다.

- auth와 project entry
- catalog and upload
- segmentation import
- class management
- viewer integration
- cloud deployment

## 단계별 계획

### 1. catalog와 ingest 안정화

- NIfTI 중심 운영 경로 정리
- DICOM ingest and canonical conversion 정리
- status transition 안정화

### 2. labeling과 segmentation workflow 강화

- class mapping
- latest result policy
- viewer overlay 품질 향상

### 3. 협업과 consensus 확장

- multiple segmentation versions
- reviewer and consensus flow

### 4. 배포 확장

- on-prem 또는 isolated deployment 고려
- cloud와 최대한 동일한 UX 유지

## 우선순위

1. ingest와 catalog 안정화
2. segmentation and viewer flow
3. permission and settings
4. deployment expansion

## 기술 부채

- cloud-first와 on-prem 요구를 동시에 만족해야 한다
- 의료 메타데이터와 anonymization 정책을 더 세밀하게 정리할 필요가 있다

## 미결정 사항

- local auth 포함 범위
- consensus 저장 구조 세부
- 일부 viewer integration depth

