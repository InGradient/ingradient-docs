# medilabel Data Model

## 데이터 개요
medilabel은 의료 이미지와 segmentation workflow metadata를 소유한다.

## 핵심 엔티티
- organization
- project
- dataset
- image asset
- segmentation
- class definition
- upload or ingest job

## 관계
- project 안에서 dataset, assets, classes, segmentations가 함께 관리된다

## 저장 위치
- medilabel DB
- object storage for uploaded files and generated artifacts

## 주의사항
- PHI와 민감 데이터 보호가 중요하다
- DICOM과 NIfTI ingest 정책 차이를 명확히 유지한다

