# ingradient-ai User Scenarios

- 문서명: ingradient-ai User Scenarios
- 목적: 사용자가 특정 목적을 달성하기 위해 어떤 화면을 거치는지 흐름 단위로 정리한다.
- 상태: Draft
- Owner: Product / AI
- 마지막 수정일: 2026-03-30
- 관련 SSOT 문서: `product_guide.md`, `wireframes/`

## 이 문서의 역할

- `product_guide.md`가 "각 화면에서 뭘 할 수 있는가"라면, 이 문서는 **"이 목적을 달성하려면 어떤 화면을 거치는가"**를 정리한다
- features/의 상세 시나리오(예외 흐름, 에러 처리, 테스트 계획)까지는 다루지 않는다
- 기술 용어 없이, 사용자 관점의 흐름으로 작성한다

---

## 로그인

### Ops Console에 로그인할 때

1. Ops Console URL에 접속하면 로그인 페이지가 표시된다
2. auth-service Admin 계정의 Login ID + 비밀번호를 입력한다
3. 로그인 성공 시 Overview 페이지로 이동한다
4. admin이 아닌 계정으로 로그인하면 접근 거부 메시지가 표시되고 진입할 수 없다

---

## 시스템 상태 파악

### 전체 시스템 건강 상태를 빠르게 파악할 때

1. 로그인 후 Overview 페이지가 표시된다
2. KPI 카드에서 활성 job 수, 대기 job 수, 정상 GPU 수, 에러 job 수를 확인한다
3. queue 요약 카드에서 runtime별 대기 상황을 확인한다
4. GPU/worker 요약에서 비정상 장비가 있는지 확인한다
5. 최근 이벤트 스트립에서 critical/warning alert이 있는지 확인한다
6. 이상이 없으면 끝. 이상이 있으면 해당 KPI를 클릭하여 상세 페이지로 이동한다

### Queue에 job이 밀려 있을 때

1. Overview에서 대기 job 수 증가를 발견 → Queues 페이지로 이동한다
2. 문제 queue의 backlog 타임라인과 대기 시간을 확인한다
3. Workers & GPU에서 해당 runtime worker가 충분한지 확인한다
4. 원인에 따라 조치한다 (worker drain 해제, preload 요청, concurrency 조정)
5. Overview에서 backlog 감소를 확인한다

---

## Job 관리

### 실패한 job의 원인을 추적하고 재시도할 때

1. Jobs 페이지에서 Failed 탭을 선택한다
2. 필터로 runtime, model, 시간 범위를 좁힌다
3. 실패한 job을 클릭하면 상세 drawer가 열린다
4. Attempt History에서 각 시도의 실패 코드와 peak VRAM을 확인한다
5. Error Trace에서 구체적인 에러 메시지를 확인한다
6. Routing 섹션에서 어떤 backend/worker에서 실행되었는지 확인한다
7. 원인에 따라 조치한다:
   - 일시적 에러 → "Retry" 클릭
   - 설정 문제 → "Clone" 클릭하여 설정을 수정한 뒤 재실행
   - worker 문제 → Workers & GPU에서 해당 worker 상태 확인

### 대기 중인 job의 우선순위를 변경할 때

1. Jobs 페이지에서 Queued 탭을 선택한다
2. 대상 job을 클릭하여 상세 drawer를 연다
3. "Reprioritize"를 클릭한다
4. 새 우선순위를 선택하고 확인한다
5. job이 queue 내에서 재배치된다

### 실행 중인 job을 취소할 때

1. Jobs 페이지에서 Running 탭을 선택한다
2. 대상 job을 클릭하여 상세 drawer를 연다
3. "Cancel"을 클릭한다
4. 확인 다이얼로그에서 취소를 확정한다
5. job 상태가 cancel_requested → cancelled로 전환된다

---

## 학습 실행

### 콘솔에서 단일 학습 job을 생성할 때

1. Jobs 페이지에서 "+ New Job"을 클릭한다
2. Job Type "Training"을 선택한다
3. Runtime을 선택한다 (예: detection)
4. Recipe를 선택한다 (예: yolo-train) — 호환되는 recipe만 표시됨
5. Model을 선택한다 — recipe와 호환되는 model만 표시됨
6. Input Artifacts에 학습 데이터셋 URI를 입력한다
7. 실행 설정(GPU, priority 등)을 확인한다
8. "Create Job"을 클릭한다 → job이 생성되어 queue에 진입한다

### backbone을 선택하여 detection 학습을 시작할 때

1. Models 페이지에서 backbone model을 찾는다 (예: DINOv3 backbone)
2. model 상세 drawer에서 "Train with this Backbone"을 클릭한다
3. New Job 모달이 열리며 base_checkpoint_ref에 해당 backbone이 사전 입력된다
4. Detection recipe를 선택한다 (예: ltdetr-train)
5. 학습 데이터셋과 실행 설정을 입력한다
6. "Create Job"을 클릭한다

### multi-step 학습 파이프라인을 구성할 때 (예: SSL → Detection)

1. Training Pipeline 페이지에서 "+ New Pipeline"을 클릭한다
2. 템플릿에서 "Lightly SSL → LTDETR Detection"을 선택한다 (또는 수동 구성)
3. Step 1: SSL 사전학습 설정 (recipe: lightly-ssl-train, 라벨 없는 이미지 데이터셋)
4. Step 2: Detection 학습 설정 (recipe: ltdetr-train, 라벨링된 데이터셋)
   - Base Checkpoint는 "이전 Step 산출물"이 기본 선택됨
5. "Save & Run"을 클릭한다
6. Step 1이 실행되고, 완료되면 자동으로 Step 2가 시작된다
7. Training Pipeline 페이지에서 진행 상황을 시각적으로 모니터링한다
8. 전체 완료 후 최종 detection model이 registry에 등록된다

### 학습 파이프라인이 중간에 실패했을 때

1. Training Pipeline 페이지에서 failed 상태의 파이프라인을 찾는다
2. 파이프라인 다이어그램에서 실패한 step(빨간색)을 클릭한다
3. Job 링크를 통해 실패 원인을 확인한다 (에러 코드, peak VRAM 등)
4. "Edit Step"으로 설정을 수정한다 (예: GPU class 변경, batch size 조정)
5. "Run"을 클릭하면 실패한 step부터 다시 실행된다
6. 이전 step의 산출물은 그대로 재사용된다

---

## Worker & GPU 관리

### 문제 있는 worker를 찾아 조치할 때

1. Workers & GPU에서 degraded/no_heartbeat 노드를 찾는다
2. GPU 그리드와 worker 테이블에서 OOM 이력, 재시작 횟수를 확인한다
3. 원인에 따라 "Drain" → "Restart", 또는 "Cordon"으로 스케줄링 차단

### GPU 활용 상태를 점검할 때

1. Workers & GPU에서 GPU 그리드로 활용률, VRAM, 온도를 확인한다
2. 유휴/과부하 GPU를 파악하고, backend 포화도에서 overflow 필요 여부를 판단한다

---

## Model 관리

### 새 model version을 등록하고 검증할 때

1. Models 페이지의 Available 탭에서 대상 model family를 클릭한다
2. 상세 drawer에서 "Upload New Version"을 클릭한다
3. 아티팩트 URI, checksum 등 메타데이터를 입력한다
4. version이 uploaded 상태로 등록된다
5. "Validate"를 클릭하여 검증을 실행한다
6. 검증이 완료되면 상태가 validated → ready로 전환된다

### model을 승격하거나 롤백할 때

1. Models에서 대상 model의 상세 drawer → version history를 연다
2. 승격: ready version에서 "Promote to Default" → 확인 → 이후 새 job부터 적용
3. 롤백: "Rollback" → 이전 stable version으로 즉시 변경 (실행 중 job은 영향 없음)

### GPU에 model을 미리 로딩할 때

1. Models Available 탭에서 preload할 model을 선택하고 "Preload"를 클릭한다
2. 대상 worker/GPU를 선택하고 확인한다
3. Loaded 탭에서 cold → warming → warm 전환을 확인한다

---

## 이벤트 & 알림 대응

### Critical alert에 대응할 때

1. Events & Alerts에서 severity를 Critical로 필터링한다
2. alert 상세에서 관련 entity 링크를 클릭하여 문제 원인으로 이동한다
3. 조치 후 "Acknowledge" → 해결 완료 시 "Resolve"
4. 반복 alert은 "Mute"로 일정 기간 음소거할 수 있다

---

## 사용량 분석

### 사용량과 실패 패턴을 분석할 때

1. Usage Analytics 페이지에서 시간 범위를 선택한다
2. GPU 활용률, model별 사용 시간, 실패 분포 차트를 확인한다
3. 노드별/시간대별 히트맵에서 부하 편중이나 실패 집중 구간을 파악한다
4. breakdown 테이블에서 model/runtime/node 단위로 drill-down한다
5. 필요하면 Jobs 페이지로 이동하여 상세 확인한다

---

## 설정 관리

### 설정을 확인하거나 정책을 조정할 때

1. Settings 페이지에 진입한다
2. 정적 설정 섹션에서 현재 시스템 구성을 확인한다 (읽기 전용)
3. 동적 정책 섹션에서 alert 임계값, queue 한도, preload 정책 등을 조정한다
4. "Save"를 클릭하여 저장한다
