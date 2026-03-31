# 이미지 다운로드 / 라벨 일괄 작업 (Image Download & Bulk Label Operations)

## 기능 개요

개별 이미지 원본 파일 다운로드, 데이터셋 단위 라벨 일괄 삭제 등 데이터 관리 보조 기능이다.

## 기능 목록

### 이미지 다운로드

- Gallery 상세 모달에서 원본 이미지 파일 직접 다운로드
- API: `GET /api/images/{id}/download`

### 데이터셋 클래스 라벨 일괄 삭제

- 특정 데이터셋 내 특정 클래스의 모든 라벨을 일괄 삭제
- 클래스 재정의나 오류 라벨 정리에 사용
- API: `DELETE /api/datasets/{dataset_id}/classes/{class_id}/clear-labels`
- 복구 불가 — 확인 대화상자 필수

### 카탈로그 뷰 환경설정

- 갤러리 뷰의 정렬/필터 설정을 사용자별 저장
- API: `GET/PATCH /api/catalog/preferences`
- 새로고침 후에도 마지막 뷰 설정 유지

## 데이터 / API / 권한 영향

| API | 용도 |
|-----|------|
| `GET /api/images/{id}/download` | 원본 이미지 다운로드 |
| `DELETE /api/datasets/{id}/classes/{classId}/clear-labels` | 라벨 일괄 삭제 |
| `GET /api/catalog/preferences` | 뷰 설정 로드 |
| `PATCH /api/catalog/preferences` | 뷰 설정 저장 |

- 이미지 다운로드: 프로젝트 멤버 전원
- 라벨 일괄 삭제: `data.delete` 권한 필요
