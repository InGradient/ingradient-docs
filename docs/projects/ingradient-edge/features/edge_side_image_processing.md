# Edge-Side Image Processing

- 문서명: Edge-Side Image Processing
- 목적: Edge에서 원본 WebP + 썸네일 + 프리뷰를 모두 생성하여 Platform에 전송. Platform은 GCS 저장만 수행하여 서버 비용을 최소화한다.
- 적용 범위: ingradient-edge, ingradient-platform
- 상태: Draft
- Owner: Dev
- 마지막 수정일: 2026-04-06

## 1. 기능 개요

- 기능 이름: Edge-Side Image Processing
- 한 줄 정의: 이미지 변환(원본 WebP, 썸네일, 프리뷰)을 모두 Edge에서 수행하고 Platform에 함께 전송하여, Platform은 GCS 저장만 수행한다.

## 2. 문제 정의

### 현재 상태

Edge가 원본 lossless WebP 1장만 전송하면 Platform이 다음을 수행한다:

| 처리 | 내용 | Cloud Run 부하 |
|------|------|---------------|
| 원본 저장 | GCS 업로드 | 낮음 |
| 썸네일 생성 | `_make_webp_thumb_bytes()` — 원본에서 lossy WebP q75, max 1024px 리사이즈 | **중간** |
| 프리뷰 생성 | `encode_preview_webp()` — 원본에서 lossy WebP q75, max dim > 1024일 때만 | **높음** (고해상도 디코딩 + 재인코딩) |
| GCS 업로드 | 원본 + 썸네일 + 프리뷰 = 3회 | 낮음 |

**관련 코드:**
- Platform 썸네일: `ingradient-platform/backend/services/image_service.py` `_make_webp_thumb_bytes()`
- Platform 프리뷰: `ingradient-platform/backend/services/image_format.py` `encode_preview_webp()`
- Platform upload route: `ingradient-platform/backend/routes/image_upload_routes.py` 109~126행

### 이미 Edge에 있는 기능

Edge에는 이미 동일한 이미지 처리 함수가 있다:

| Edge 함수 | 위치 | 스펙 |
|-----------|------|------|
| `encodeLosslessWebp()` | `image-format.service.ts:32` | lossless WebP, quality 100, effort 4 |
| `encodeThumbWebp()` | `image-format.service.ts:47` | lossy WebP q75, max 1024px, effort 4 |
| `encodeThumbBboxWebp()` | `image-format.service.ts:68` | lossy WebP q85 (bbox 오버레이용) |

**없는 것:** 프리뷰 생성 함수 (Platform의 `encode_preview_webp`에 해당)

### 문제점

1. **Platform이 모든 이미지에 썸네일/프리뷰를 생성** → Cloud Run CPU 소비 + 응답 지연
2. **Edge PC는 유휴 CPU가 충분** → 촬영 후 로컬 저장 시 이미 WebP 변환을 하고 있으므로 썸네일/프리뷰를 추가 생성하는 비용이 거의 없음
3. **9장 시퀀스에서 Platform이 썸네일 + 프리뷰 18회 생성** → 불필요한 서버 부하
4. **.igp import 경로에서도 동일한 문제** — .igp에 원본만 담겨있어서 Platform이 import 시 썸네일/프리뷰 생성

### 왜 지금 필요한가
- Background Upload (v0.0.4) 이후 sync queue가 9장을 일괄 업로드 → Platform 부하 집중
- Cloud Run 비용 절감이 우선 과제
- Edge에 이미 인프라가 있어 구현 비용 낮음

## 3. 목표

### 사용자 목표
- Platform 업로드 응답 속도 개선 (썸네일/프리뷰 생성 제거)
- Gallery 표시 속도 변화 없음 (동일한 썸네일/프리뷰 품질)

### 운영/비즈니스 목표
- Cloud Run CPU 사용량 대폭 감소 → 비용 절감
- 이미지 처리를 Edge(고객 PC)로 오프로드 → 서버 스케일링 부담 감소

## 4. 범위

### Edge 수정

| 수정 | 내용 |
|------|------|
| 프리뷰 생성 함수 추가 | `image-format.service.ts`에 `encodePreviewWebp()` 추가 (lossy WebP q75, 리사이즈 없음, max dim > 1024일 때만) |
| 로컬 저장 시 썸네일/프리뷰 생성 | `image.service.ts`에서 이미지 저장 시 원본 + 썸네일 + 프리뷰 모두 디스크에 저장 |
| sync queue에서 3파일 전송 | `sync.service.ts`에서 원본 + 썸네일 + 프리뷰를 multipart로 함께 전송 |
| .igp export에 썸네일/프리뷰 포함 | `export.service.ts`에서 .igp에 `thumbs/`, `previews/` 디렉토리 추가 |

### Platform 수정

| 수정 | 내용 |
|------|------|
| upload route에서 첨부된 썸네일/프리뷰 수신 | multipart에 `thumb`, `preview` 필드 추가 |
| 첨부 있으면 서버 생성 건너뛰기 | 썸네일/프리뷰가 첨부되면 `_make_webp_thumb_bytes()`, `encode_preview_webp()` 호출 스킵 |
| 첨부 없으면 기존대로 생성 | 브라우저 직접 업로드 등 Edge가 아닌 경우 하위 호환 |
| .igp import에서도 동일 | `import_helpers.py`에서 `thumbs/`, `previews/` 디렉토리가 있으면 사용 |

## 5. 사용자 시나리오

### 기본 흐름

1. Edge에서 촬영 → 원본 WebP 디스크 저장
2. Edge에서 썸네일 WebP + 프리뷰 WebP 생성 → 디스크 저장
3. sync queue가 백그라운드에서 3파일을 Platform에 전송
4. Platform은 3파일을 GCS에 저장만 함 (변환 없음)
5. Gallery에서 썸네일/프리뷰 정상 표시

### .igp export 흐름

1. Edge에서 .igp 생성 시 `images/`, `thumbs/`, `previews/` 포함
2. Platform import 시 3파일 모두 GCS에 저장 (생성 불필요)

### 하위 호환

- 브라우저에서 직접 업로드 (PNG/JPEG): 기존대로 Platform이 변환 + 썸네일 + 프리뷰 생성
- 이전 Edge 버전 (썸네일/프리뷰 미첨부): 기존대로 Platform이 생성
- 이전 .igp (thumbs/previews 없음): 기존대로 Platform이 생성

## 6. UI / UX 방향

### 변경되는 화면
- 없음 (사용자에게 보이지 않는 내부 최적화)

### 변경되지 않는 것
- Gallery 썸네일 품질: 동일 (lossy WebP q75, max 1024px)
- Image Detail 프리뷰 품질: 동일 (lossy WebP q75)
- 원본 다운로드: 동일 (lossless WebP)

## 7. 데이터 / API / 권한 영향

### Edge 수정 상세

| 파일 | 변경 내용 |
|------|-----------|
| `src/electron/services/image-format.service.ts` | `encodePreviewWebp(input, opts)` 함수 추가 — lossy WebP q75, max dim > 1024일 때만 생성 |
| `src/electron/services/image.service.ts` | 이미지 저장 시 썸네일(`{id}_thumb.webp`) + 프리뷰(`{id}_preview.webp`) 생성하여 디스크 저장 |
| `src/electron/db/image.repo.ts` | `preview_file_path` 컬럼 추가 (또는 네이밍 규칙으로 유추) |
| `src/electron/services/sync.service.ts` | multipart FormData에 `thumb`(썸네일 파일), `preview`(프리뷰 파일) 추가 |
| `src/electron/services/export.service.ts` | .igp에 `thumbs/{id}_thumb.webp`, `previews/{id}_preview.webp` 포함 |

### Platform 수정 상세

| 파일 | 변경 내용 |
|------|-----------|
| `backend/routes/image_upload_routes.py` | `thumb: Optional[UploadFile]`, `preview: Optional[UploadFile]` 파라미터 추가. 첨부 있으면 서버 생성 스킵, GCS 저장만 |
| `backend/routes/image_direct_upload_routes.py` | 동일 적용 |
| `backend/services/edge/import_helpers.py` | .igp에 `thumbs/`, `previews/` 있으면 파일 사용, 없으면 기존대로 서버 생성 |

### Platform 변경 로직

```python
# image_upload_routes.py — 썸네일 처리
if thumb_file:
    thumb_bytes = await thumb_file.read()
    thumb = store_bytes("assets", thumb_object_name(...), thumb_bytes, content_type="image/webp")
else:
    thumb_bytes = _make_webp_thumb_bytes(webp_bytes)
    thumb = store_bytes("assets", thumb_object_name(...), thumb_bytes, content_type="image/webp")

# 프리뷰 처리
if preview_file:
    preview_bytes = await preview_file.read()
    preview_stored = store_bytes("assets", preview_object_name(...), preview_bytes, content_type="image/webp")
    preview_ref = preview_stored.ref
elif max(img_width, img_height) > 1024:
    preview_bytes = encode_preview_webp(webp_bytes)
    preview_stored = store_bytes("assets", preview_object_name(...), preview_bytes, content_type="image/webp")
    preview_ref = preview_stored.ref
```

### DB/migration

- Edge: `preview_file_path` 컬럼 추가 필요 (또는 `{file_path}_preview.webp` 네이밍 규칙 사용 시 불필요)
- Platform: 변경 없음

### 권한 변경
- 없음

## 8. 테스트 계획

### unit
- Edge: `encodePreviewWebp()` — 고해상도 입력 → lossy WebP q75 출력, max dim 유지 확인
- Edge: `encodePreviewWebp()` — max dim ≤ 1024 입력 → 생성 건너뛰기 확인
- Edge: `encodeThumbWebp()` — 기존 테스트 유지 (스펙 변경 없음)
- Platform: thumb 첨부 시 `_make_webp_thumb_bytes()` 호출 안 됨 확인
- Platform: preview 첨부 시 `encode_preview_webp()` 호출 안 됨 확인
- Platform: 첨부 없으면 기존대로 생성 확인

### integration
- Edge 촬영 → 디스크에 원본 + 썸네일 + 프리뷰 3파일 저장 확인
- sync queue → 3파일 multipart 전송 → Platform GCS에 3파일 저장 확인
- .igp export → thumbs/, previews/ 포함 확인
- .igp import → thumbs/previews 사용하여 서버 생성 건너뛰기 확인
- 브라우저 직접 업로드 (thumb/preview 미첨부) → 기존대로 서버 생성 확인

### e2e / scenario
- Edge 촬영 → Platform Gallery → 썸네일 정상 표시 확인
- Edge 촬영 → Platform Image Detail → 프리뷰 정상 표시 확인
- 이전 Edge 버전에서 업로드한 이미지 → 기존대로 표시 확인

## 9. 릴리즈 고려사항

### release note
- 이미지 업로드 속도 개선 (서버 이미지 처리 제거)
- Platform 서버 비용 절감

### user guide
- 변경 없음 (사용자에게 보이지 않는 내부 최적화)

### ops 영향
- Cloud Run CPU 사용량 대폭 감소 (이미지 처리 완전 Edge 오프로드)
- Edge 디스크 사용량 소폭 증가 (썸네일 + 프리뷰 추가 저장)
- sync queue 전송 데이터량 소폭 증가 (원본 + 썸네일 + 프리뷰)

## 10. 오픈 이슈

- 프리뷰 스펙을 Platform과 정확히 일치시킬지 (현재 Platform: q75, full-resolution lossy. Edge에서도 동일하게?)
- 기존에 로컬에 저장된 이미지(썸네일/프리뷰 없는)에 대한 마이그레이션: sync queue 업로드 시 없으면 그때 생성? 또는 무시하고 Platform이 기존대로 생성?
- `preview_file_path`를 DB 컬럼으로 추가할지, 네이밍 규칙(`{id}_preview.webp`)으로 유추할지
