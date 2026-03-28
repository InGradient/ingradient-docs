# ingradient-platform Data Model

## 데이터 개요
platform은 dataset과 labeling workflow metadata를 소유한다.

## 핵심 엔티티
- project
- dataset
- asset
- annotation
- export job
- training request
- snapshot reference

## 관계
- project 안에 dataset과 assets가 있고
- annotation과 export, training request가 그 위에 연결된다

## 저장 위치
- platform DB
- object storage for large files and export outputs

## 주의사항
- auth data는 auth-service SoT
- model metadata는 ingradient-ai SoT

