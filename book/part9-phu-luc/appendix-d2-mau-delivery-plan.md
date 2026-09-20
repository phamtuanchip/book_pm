# Phụ lục D2 — Mẫu Delivery Plan đầy đủ (FoodNow)

Bản in từ `templates/delivery-plan/`. Đọc kèm Ch30–Ch33.

## D2.1 Delivery Plan

📎 Nguồn: `templates/delivery-plan/FoodNow-Delivery-Plan.md`

**Tên tài liệu:** Delivery Plan tổng thể — FoodNow MVP → R1
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 30/01/2026 (tuần 4); cập nhật v1.1 ngày 02/11/2026 cho giai đoạn sau go-live
**Mục đích & khi nào dùng:** Nối Roadmap → Release Plan → lịch build/deploy thực tế: nhịp phát hành, môi trường, chiến lược nhánh/tag, trách nhiệm; dùng từ Sprint 0 và cập nhật khi đổi chiến lược.

---

#### 1. Delivery Plan khác gì Release Plan và Gantt

| Tài liệu | Trả lời | Ví dụ FoodNow |
|---|---|---|
| Roadmap | Hướng đi | MVP → R1 → R2 |
| Release Plan | Mỗi release gồm gì, tiêu chí Go/No-Go | MVP: 11 epic, không Critical/High |
| **Delivery Plan** | **Bản nào lên môi trường nào, khi nào, bằng cách nào, ai duyệt** | Tag `v0.N.0` cuối sprint → staging; `v1.0.0-rc.N` → UAT; `v1.0.0` → prod |
| Gantt | Task, ngày, phụ thuộc | Đường găng thanh toán |

#### 2. Chiến lược đã chọn (quyết định DL-005, 30/01/2026)

- **Giai đoạn MVP (mô hình A):** **GitFlow-lite + release theo sprint + tag SemVer**. Lý do: hợp đồng theo mốc, app mobile qua app store, cần UAT, đội có Backend mới chưa quen trunk-based.
- **Sau go-live (mô hình B, từ tuần 44):** backend/web chuyển **trunk-based + daily deploy**; mobile vẫn theo **release train** 2 tuần vì app store review 1–3 ngày.
- Chi tiết: `branching-strategy.md`, `tagging-and-versioning-policy.md`, `release-strategy-migration-plan.md`.

#### 3. Cấp phát hành và nhịp

| Cấp | Môi trường | Khi nào | Tag | Ai duyệt |
|---|---|---|---|---|
| Build nội bộ | Dev | Mỗi commit (CI) | — | Tự động |
| Cuối sprint | Staging | Thứ Sáu cuối sprint, 17:30 | `v0.N.0` | Dũng + Nam |
| Ứng viên phát hành | UAT | 27/07 (rc.1), 04/09 (rc.2) | `v1.0.0-rc.N` | Dũng + Nam + Châu |
| Go-live | Production | 03/10 02:00 | `v1.0.0` | Sponsor (Go/No-Go) |
| Hotfix | Production | Khi cần | `v1.0.x` | Hà + Dũng + Bảo |

**Release cadence MVP:** mỗi 2 tuần lên staging; **UAT** đợt rc; **production** một lần lớn (go-live) rồi hotfix.

#### 3b. Mapping Sprint → Release candidate → Tag → Môi trường

| Sprint | Ngày cuối | Tag | Môi trường |
|---|---|---|---|
| 1–11 | 27/02 … 17/07 | v0.1.0 … v0.11.0 | Staging |
| 12 | 31/07 | v0.12.0; cắt `release/1.0.0` 24/07 → `v1.0.0-rc.1` 27/07 | Staging; UAT |
| 13–15 | 14/08 … 11/09 | v0.13.0 … v0.15.0; `v1.0.0-rc.2` 04/09 | Staging; UAT |
| 16 | 25/09 | v0.16.0 | Staging |
| Go-live | 03/10 | `v1.0.0` (tag 02/10) | Production |

#### 4. Freeze và cửa sổ deploy

- **Scope Freeze:** 13/07 · **Feature complete:** 17/07 · **Code freeze (release branch):** 24/07.
- **Cấm deploy:** Tết (16–20/02), 27/04, 30/04–01/05, 02/09; **chiều thứ Sáu** cho production (trừ cutover); từ 17/09 đến go-live chỉ theo runbook.
- **Cửa sổ go-live:** thứ Bảy 02:00–06:00 (lượng đơn thấp nhất).

#### 5. Trách nhiệm (Release Manager)

| Việc | Hà (PM) | Dũng (TL) | Ánh (DevOps) | Nam (QA) | Bảo (Sponsor) |
|---|---|---|---|---|---|
| Lịch phát hành | **A** | C | C | C | I |
| Cắt release branch, tag | I | **A** | R | C | I |
| Deploy staging/UAT | I | A | **R** | C | I |
| Kiểm thử trước rc | I | C | I | **A/R** | I |
| Go/No-Go | R | C | C | R | **A** |
| Deploy production | A | C | **R** | C | I |
| Hotfix | A | R | R | R | C (báo) |

Release Manager = **Dũng** (kỹ thuật) với **Hà** chịu trách nhiệm lịch và truyền thông.

#### 6. Lưu ý mobile

App Store/Google Play có review 1–3 ngày → **không** "daily deploy" bản app; chỉ backend, web và **feature flag/remote config**. Backend hỗ trợ **≥ 2 phiên bản app**.

#### 7. Liên kết

`release-calendar.csv` · `environment-matrix.md` · `delivery-strategy-decision-matrix.md` · `release-log.csv` · Ch30–33.

---

#### Cách dùng cho dự án của bạn

1. Sao chép bảng cấp phát hành; điền môi trường và người duyệt của bạn.
2. Chọn chiến lược A hay B bằng ma trận quyết định; ghi quyết định vào Decision Log.
3. Dựng Release Calendar từ Gantt (freeze, lễ, cửa sổ deploy).
4. Gán Release Manager và RACI.
5. Xem lại khi bối cảnh đổi (sau go-live, đổi hợp đồng).


## D2.2 Release Calendar

📎 Nguồn: `templates/delivery-plan/release-calendar.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| Start_Date | End_Date | Type | Event | Environment | Tag | Owner | Deploy_Allowed | Notes |
|---|---|---|---|---|---|---|---|---|
| 2026-01-05 | 2026-01-05 | Mốc | Kickoff | — |  | Hà | Có |  |
| 2026-01-30 | 2026-01-30 | Quyết định | Chốt chiến lược nhánh + Delivery Plan (GitFlow-lite, SemVer) | — |  | Dũng, Hà | Có | DL-005 |
| 2026-02-16 | 2026-02-20 | Nghỉ lễ | Tết Nguyên Đán | Tất cả |  | — | Không deploy | Đóng băng mọi thay đổi |
| 2026-02-27 | 2026-02-27 | Phát hành nội bộ | Kết thúc Sprint 1 → staging | Staging | v0.1.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 8 |
| 2026-03-13 | 2026-03-13 | Phát hành nội bộ | Kết thúc Sprint 2 → staging | Staging | v0.2.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 10 |
| 2026-03-27 | 2026-03-27 | Phát hành nội bộ | Kết thúc Sprint 3 → staging | Staging | v0.3.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 12 |
| 2026-04-10 | 2026-04-10 | Phát hành nội bộ | Kết thúc Sprint 4 → staging | Staging | v0.4.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 14 |
| 2026-04-24 | 2026-04-24 | Phát hành nội bộ | Kết thúc Sprint 5 → staging | Staging | v0.5.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 16 |
| 2026-04-27 | 2026-04-27 | Nghỉ lễ | Nghỉ bù Giỗ Tổ | Tất cả |  | — | Không deploy |  |
| 2026-04-30 | 2026-05-01 | Nghỉ lễ | 30/4–1/5 | Tất cả |  | — | Không deploy |  |
| 2026-05-08 | 2026-05-08 | Phát hành nội bộ | Kết thúc Sprint 6 → staging | Staging | v0.6.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 18 |
| 2026-05-22 | 2026-05-22 | Phát hành nội bộ | Kết thúc Sprint 7 → staging | Staging | v0.7.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 20 |
| 2026-06-03 | 2026-06-03 | Mốc | Demo chạy thật cho HĐQT | Staging | v0.8.0 (bản trước) | Hà | Có |  |
| 2026-06-05 | 2026-06-05 | Phát hành nội bộ | Kết thúc Sprint 8 → staging | Staging | v0.8.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 22 |
| 2026-06-19 | 2026-06-19 | Phát hành nội bộ | Kết thúc Sprint 9 → staging | Staging | v0.9.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 24 |
| 2026-07-03 | 2026-07-03 | Phát hành nội bộ | Kết thúc Sprint 10 → staging | Staging | v0.10.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 26 |
| 2026-07-13 | 2026-07-13 | Freeze | Scope Freeze (không nhận phạm vi mới) | — |  | Hà, Châu | — |  |
| 2026-07-17 | 2026-07-17 | Phát hành nội bộ | Kết thúc Sprint 11 → staging | Staging | v0.11.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 28 |
| 2026-07-17 | 2026-07-17 | Freeze | Feature complete | Develop | v0.11.0 | Dũng | — |  |
| 2026-07-24 | 2026-07-24 | Freeze | Cắt release/1.0.0; code freeze cho rc | Release |  | Dũng, Ánh | Có | Chỉ sửa lỗi từ đây |
| 2026-07-27 | 2026-08-21 | UAT | UAT vòng 1 (rc.1) | UAT | v1.0.0-rc.1 | Châu, Huy, Nam | Có (theo yêu cầu) |  |
| 2026-07-31 | 2026-07-31 | Phát hành nội bộ | Kết thúc Sprint 12 → staging | Staging | v0.12.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 30 |
| 2026-08-14 | 2026-08-14 | Phát hành nội bộ | Kết thúc Sprint 13 → staging | Staging | v0.13.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 32 |
| 2026-08-21 | 2026-08-21 | Quyết định | Go/No-Go lần 1 = No-Go | — |  | Bảo | — | 47 defect, 3 Critical |
| 2026-08-28 | 2026-08-28 | Phát hành nội bộ | Kết thúc Sprint 14 → staging | Staging | v0.14.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 34 |
| 2026-09-02 | 2026-09-02 | Nghỉ lễ | Quốc khánh | Tất cả |  | — | Không deploy |  |
| 2026-09-04 | 2026-09-04 | Phát hành nội bộ | rc.2 lên UAT | UAT | v1.0.0-rc.2 | Dũng | Có |  |
| 2026-09-07 | 2026-09-16 | UAT | UAT vòng 2 | UAT | v1.0.0-rc.2 | Châu, Huy, Nam | Có |  |
| 2026-09-11 | 2026-09-11 | Phát hành nội bộ | Kết thúc Sprint 15 → staging | Staging | v0.15.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 36 |
| 2026-09-16 | 2026-09-16 | Quyết định | Go/No-Go lần 2 = Go | — |  | Bảo | — |  |
| 2026-09-17 | 2026-10-02 | Chuẩn bị | Cutover rehearsal, đào tạo, đóng băng thay đổi | Staging/Prod |  | Dũng, Lan, Ánh | Chỉ theo runbook | Cấm deploy chiều thứ Sáu 25/09 và 02/10 (trừ tag v1.0.0) |
| 2026-09-25 | 2026-09-25 | Phát hành nội bộ | Kết thúc Sprint 16 → staging | Staging | v0.16.0 | Dũng, Ánh | Có (17:30, sau CI xanh) | Tuần 38 |
| 2026-10-03 | 2026-10-03 | Go-live | Cutover 02:00 thứ Bảy | Production | v1.0.0 | Cả đội | Có (cửa sổ 02:00–06:00) |  |
| 2026-10-03 | 2026-10-03 | Hotfix | Hotfix cache | Production | v1.0.1 | Dũng | Có (khẩn) |  |
| 2026-10-03 | 2026-10-30 | Hypercare | Hypercare 4 tuần | Production |  | Hà, Dũng, Nam | Chỉ hotfix, có duyệt |  |
| 2026-11-02 | 2027-01-24 | Chuyển đổi | Backend/web chuyển trunk-based + daily deploy (12 tuần) | Production |  | Dũng, Ánh | Theo policy daily | Ch33 |

## D2.3 Environment Matrix

📎 Nguồn: `templates/delivery-plan/environment-matrix.md`

**Tên tài liệu:** Environment Matrix — FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 30/01/2026
**Mục đích & khi nào dùng:** Mô tả từng môi trường: mục đích, ai deploy, dữ liệu, cổng vào; dùng để tránh nhầm lẫn "code đang chạy ở đâu".

---

| Môi trường | Mục đích | Ai deploy | Cách deploy | Dữ liệu | Cổng vào | Ai truy cập |
|---|---|---|---|---|---|---|
| **Local/Dev** | Dev tự thử | Dev | Thủ công | Dữ liệu giả | Không | Dev |
| **CI** | Build và chạy test tự động | CI | Mỗi commit | Dữ liệu tạo trong test | Không | Hệ thống |
| **QA/Integration** | Kiểm thử tích hợp mỗi sprint | Ánh/CI | Tự động từ `develop` | Dữ liệu giả có cấu trúc | CI xanh | Đội |
| **Staging** | Bản giống production để test và demo | Ánh (CI) | Tự động khi tag `v0.N.0` | Dữ liệu ẩn danh/giả; không PII thật | Tag + QA duyệt | Đội, Châu, Sponsor (xem) |
| **UAT** | Người dùng nghiệm thu | Ánh | Tự động khi tag `rc` | Dữ liệu giả gần thật; tài khoản thử nghiệm | Tag rc + Nam/Dũng duyệt | Châu, Huy, nhà hàng, tài xế |
| **Production** | Người dùng thật | Ánh + Dũng | Theo runbook; sau go-live: pipeline có duyệt | Dữ liệu thật | Go/No-Go, tag `v1.0.0` | Người dùng; hạn chế đội (ghi log) |

#### Quy tắc

1. **Staging giống production**: cùng cấu hình, cùng cache, cùng phiên bản dịch vụ ngoài (sandbox tương ứng).
2. **Không dữ liệu thật ngoài production**.
3. Mọi bản lên UAT/production **phải có tag**.
4. Khác biệt cấu hình staging–production phải nằm trong **danh sách khác biệt được biết** (config diff) và được rà trước go-live.
5. Truy cập production: quyền tối thiểu, ghi log, có người duyệt.

#### Config diff staging ↔ production (cập nhật 20/09/2026)

| Mục | Staging | Production | Ghi chú |
|---|---|---|---|
| TTL cache | Đặt tay 60 s | Đặt tay 300 s | **Cần chuẩn hoá** (TD-06) |
| PayEasy | Sandbox | Live | Khác endpoint và khoá |
| Kích thước DB | Nhỏ | Lớn | Tải khác |

---

#### Cách dùng cho dự án của bạn

1. Liệt kê môi trường thực có; đừng tạo nhiều hơn đội quản lý nổi.
2. Ghi rõ ai deploy, cổng vào và dữ liệu.
3. Giữ danh sách khác biệt cấu hình; rà trước mỗi mốc lớn.
4. Ràng buộc quy tắc dữ liệu thật/giả.
5. Xem lại khi thêm môi trường mới.


## D2.4 Chính sách nhánh

📎 Nguồn: `templates/delivery-plan/branching-strategy.md`

**Tên tài liệu:** Chính sách nhánh (Branching Policy) — FoodNow
**Dự án:** FoodNow MVP → R1
**Phiên bản / ngày:** v1.1 — 08/05/2026 (v1.0 ngày 30/01/2026; v1.1 thêm luật nhánh ≤ 5 ngày sau sự cố Sprint 6)
**Mục đích & khi nào dùng:** Quy định các loại nhánh, cách đặt tên, merge, bảo vệ và ngoại lệ; dùng cho mọi repo của dự án.

---

#### 1. Chiến lược theo repo

| Repo | Chiến lược MVP | Sau go-live | Lý do |
|---|---|---|---|
| `foodnow-backend` | **GitFlow-lite** | Trunk-based + daily deploy (tuần 44+) | API dùng chung; UAT cần release branch |
| `foodnow-web` (nhà hàng + Admin) | GitFlow-lite | Trunk-based (tuần 44+) | Như backend |
| `foodnow-mobile` (iOS/Android) | GitFlow-lite | **Giữ** release train 2 tuần | App store review 1–3 ngày |
| `foodnow-infra` (IaC) | GitHub Flow (main + PR) | Giữ | Thay đổi nhỏ, có review bắt buộc |

#### 2. GitFlow-lite

| Nhánh | Vai trò | Tạo từ | Merge về | Sống bao lâu |
|---|---|---|---|---|
| `main` | Luôn phản ánh production; mỗi commit là một tag phát hành | — | — | Vĩnh viễn |
| `develop` | Tích hợp liên tục; nguồn của staging | `main` | — | Vĩnh viễn |
| `feature/*` | Một story/nhóm nhỏ | `develop` | `develop` (PR) | **≤ 5 ngày** |
| `release/x.y.z` | Ổn định bản phát hành (chỉ sửa lỗi) | `develop` | `main` **và** `develop` | Vài ngày–vài tuần |
| `hotfix/x.y.z` | Sửa khẩn production | `main` (tag prod) | `main` **và** `develop` | ≤ 1 ngày |

**Bỏ so với GitFlow đầy đủ:** không dùng nhánh `support/*`; không tạo `release/*` cho từng sprint (chỉ cho rc); merge bằng squash để giữ lịch sử gọn.

#### 3. Đặt tên nhánh

`feature/FN-123-them-gio-hang` · `bugfix/FN-456-loi-tinh-gia` · `release/1.0.0` · `hotfix/1.0.1`
Quy tắc: bắt đầu bằng loại nhánh, có mã Jira, chữ thường không dấu, nối bằng gạch ngang.

#### 4. Pull Request

- PR **nhỏ** (< 400 dòng thay đổi); **review trong 24 giờ**; ≥ 1 approver (thanh toán: 2).
- CI xanh (build, test, lint, quét bảo mật) mới được merge.
- Dùng `pull-request-template.md`; liên kết story Jira.
- Merge bằng **squash** vào `develop`; **merge commit** cho `release/*` và `hotfix/*` về `main`.

#### 5. Nhánh sống lâu và luật 5 ngày (v1.1)

- **Nhánh `feature/*` không được mở quá 5 ngày làm việc**; ngày thứ 4 báo trong Daily; ngày thứ 5 phải tách nhỏ, rebase hoặc dùng feature flag.
- Cập nhật (rebase/merge từ `develop`) ít nhất mỗi ngày.
- Chia tính năng lớn thành PR nhỏ ẩn sau feature flag thay vì một nhánh dài.
- Bảng theo dõi nhánh cũ hằng tuần (tuổi nhánh).

#### 6. Bảo vệ nhánh

Xem `branch-protection-checklist.md`: bắt buộc PR, ≥ 1 review, CI xanh, cấm force-push `main`/`develop`, cấm xoá.

#### 7. Ngoại lệ

Hotfix khẩn cấp có thể có 1 approver (Tech Lead) sau khi Hà và Bảo duyệt; ghi vào release log.

---

#### Cách dùng cho dự án của bạn

1. Chọn chiến lược cho từng repo bằng ma trận (`delivery-strategy-decision-matrix.md`).
2. Định nghĩa bảng nhánh; thêm luật tuổi nhánh phù hợp đội bạn.
3. Bật branch protection theo checklist.
4. Đo tuổi nhánh hằng tuần; báo khi > 5 ngày.
5. Xem lại sau mỗi sự cố merge; ghi thay đổi vào lịch sử phiên bản.


## D2.5 Chính sách tag và phiên bản

📎 Nguồn: `templates/delivery-plan/tagging-and-versioning-policy.md`

**Tên tài liệu:** Chính sách đánh số phiên bản và tag — FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 30/01/2026 (chốt cùng Delivery Plan)
**Mục đích & khi nào dùng:** Quy định cách đánh số, khi nào tag, ánh xạ tag ↔ Release Plan ↔ Jira Fix Version ↔ môi trường; dùng cho mọi repo.

---

#### 1. Semantic Versioning (SemVer) `MAJOR.MINOR.PATCH`

| Thành phần | Tăng khi | Ví dụ |
|---|---|---|
| **MAJOR** | Thay đổi không tương thích ngược (breaking) hoặc release lớn (go-live) | 1.0.0 → 2.0.0 |
| **MINOR** | Thêm tính năng tương thích ngược | 1.0.0 → 1.1.0 |
| **PATCH** | Sửa lỗi tương thích ngược | 1.0.0 → 1.0.1 |
| **Hậu tố** | `-rc.N` (release candidate), `-beta.N` | 1.0.0-rc.1 |

Trước go-live dùng **0.x**: `v0.N.0` = bản cuối Sprint N (chưa phải sản phẩm hoàn chỉnh).

#### 2. Tag là gì và quy tắc

- **Tag** đóng dấu một commit cụ thể, **bất biến** (không di chuyển/xoá).
- **Mọi bản lên UAT hoặc production phải có tag.** Bản staging cuối sprint cũng tag `v0.N.0`.
- Chỉ pipeline/Release Manager tạo tag `v*` (bảo vệ tag).
- Tag đặt trên `main` (bản production), `release/*` (rc), `develop` (sprint).

#### 3. Quy ước tag theo Release Plan

| Tag | Ý nghĩa | Môi trường | Ví dụ FoodNow |
|---|---|---|---|
| `v0.N.0` | Cuối Sprint N | Staging | `v0.1.0` 27/02 … `v0.16.0` 25/09 |
| `v1.0.0-rc.N` | Ứng viên phát hành | UAT | rc.1 27/07; rc.2 04/09 |
| `v1.0.0` | Go-live MVP | Production | Tag 02/10; deploy 03/10 02:00 |
| `v1.0.x` | Hotfix | Production | `v1.0.1` 03/10 |
| `v1.1.0` | R1 | Production | Q1/2027 |

#### 4. Ánh xạ tag ↔ Release Plan ↔ Jira ↔ môi trường

| Tag | Release Plan | Jira Fix Version | Môi trường | Người duyệt |
|---|---|---|---|---|
| `v0.N.0` | MVP (sprint) | `FN-MVP-0.N` | Staging | Dũng + Nam |
| `v1.0.0-rc.N` | MVP (UAT) | `FN-MVP-1.0` | UAT | Dũng + Nam + Châu |
| `v1.0.0` | MVP go-live | `FN-MVP-1.0` | Production | Bảo (Go/No-Go) |
| `v1.0.1` | Hotfix | `FN-MVP-1.0.1` | Production | Hà + Dũng + Bảo |

Quy tắc: mọi story trong bản phát hành gắn **Fix Version** tương ứng; release notes sinh từ Fix Version.

#### 5. Mobile

- `versionName` = SemVer (ví dụ 1.0.0); `versionCode`/build number **tăng đơn điệu** mỗi bản gửi store.
- Backend hỗ trợ **≥ 2 phiên bản app** gần nhất; có cơ chế **force update** khi phiên bản quá cũ hoặc có lỗi bảo mật.

#### 6. Rollback và truy vết

- **Rollback = deploy lại tag cũ** (ví dụ từ `v1.0.1` về `v1.0.0`) theo runbook; không sửa tay trên server.
- **Audit**: ghi ai duyệt, khi nào, tag nào chạy ở đâu trong `release-log.csv`.
- **Nhiều phiên bản hỗ trợ**: dùng cherry-pick/backport từ `main` sang nhánh hỗ trợ (chỉ sửa lỗi nghiêm trọng).

---

#### Cách dùng cho dự án của bạn

1. Chọn SemVer + hậu tố; định nghĩa `v0.N.0` nếu phát hành theo sprint.
2. Ghi bảng tag ↔ Release Plan ↔ Fix Version ↔ môi trường.
3. Bật bảo vệ tag; chỉ pipeline/Release Manager được tạo.
4. Quy định mobile (versionCode, force update, hỗ trợ ≥ 2 phiên bản).
5. Ghi mọi tag vào release log kèm người duyệt.


## D2.6 Release Log (tag v0.1.0 → v1.0.1)

📎 Nguồn: `templates/delivery-plan/release-log.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| Tag | Date | Time | Sprint | Environment | Approved_By | Jira_Fix_Version | Notes | Branch |
|---|---|---|---|---|---|---|---|---|
| v0.1.0 | 2026-02-27 | 17:30 | Sprint 1 | Staging | Dũng + Nam | FN-MVP-0.1 | Đăng nhập, khung app (40% cam kết) | develop |
| v0.2.0 | 2026-03-13 | 17:30 | Sprint 2 | Staging | Dũng + Nam | FN-MVP-0.2 | OTP, danh sách nhà hàng | develop |
| v0.3.0 | 2026-03-27 | 17:30 | Sprint 3 | Staging | Dũng + Nam | FN-MVP-0.3 | Giỏ hàng, tạo đơn | develop |
| v0.4.0 | 2026-04-10 | 17:30 | Sprint 4 | Staging | Dũng + Nam | FN-MVP-0.4 | Nhà hàng nhận đơn, thực đơn | develop |
| v0.5.0 | 2026-04-24 | 17:30 | Sprint 5 | Staging | Dũng + Nam | FN-MVP-0.5 | COD, sandbox PayEasy | develop |
| v0.6.0 | 2026-05-08 | 17:30 | Sprint 6 | Staging | Dũng + Nam | FN-MVP-0.6 | Tài xế nhận chuyến; conflict nhánh được xử lý | develop |
| v0.7.0 | 2026-05-22 | 17:30 | Sprint 7 | Staging | Dũng + Nam | FN-MVP-0.7 | Điều hướng tài xế | develop |
| v0.8.0 | 2026-06-05 | 17:30 | Sprint 8 | Staging | Dũng + Nam | FN-MVP-0.8 | Hủy đơn, thanh toán thẻ (sandbox) | develop |
| v0.9.0 | 2026-06-19 | 17:30 | Sprint 9 | Staging | Dũng + Nam | FN-MVP-0.9 | Thông báo, lịch sử đơn | develop |
| v0.10.0 | 2026-07-03 | 17:30 | Sprint 10 | Staging | Dũng + Nam | FN-MVP-0.10 | Admin người dùng/nhà hàng | develop |
| v0.11.0 | 2026-07-17 | 17:30 | Sprint 11 | Staging | Dũng + Nam | FN-MVP-0.11 | Feature complete | develop |
| v1.0.0-rc.1 | 2026-07-27 | 09:00 | Sprint 12 | UAT | Dũng + Nam + Châu | FN-MVP-1.0 | Cắt release/1.0.0 ngày 24/07; feature freeze | release/1.0.0 |
| v0.12.0 | 2026-07-31 | 17:30 | Sprint 12 | Staging | Dũng + Nam | FN-MVP-0.12 | Ổn định sau rc.1 | develop |
| v0.13.0 | 2026-08-14 | 17:30 | Sprint 13 | Staging | Dũng + Nam | FN-MVP-0.13 | Sửa lỗi UAT vòng 1 | develop |
| v0.14.0 | 2026-08-28 | 17:30 | Sprint 14 | Staging | Dũng + Nam | FN-MVP-0.14 | Sửa lỗi Critical/High | develop |
| v1.0.0-rc.2 | 2026-09-04 | 17:00 | Sprint 14/15 | UAT | Dũng + Nam + Châu | FN-MVP-1.0 | Sau No-Go lần 1: sửa 3 Critical và High | release/1.0.0 |
| v0.15.0 | 2026-09-11 | 17:30 | Sprint 15 | Staging | Dũng + Nam | FN-MVP-0.15 | Ổn định rc.2 | develop |
| v0.16.0 | 2026-09-25 | 17:30 | Sprint 16 | Staging | Dũng + Nam | FN-MVP-0.16 | Bản cuối trước go-live | develop |
| v1.0.0 | 2026-10-02 | 18:00 | Cutover | Production | Bảo (Go/No-Go 16/09) + Hà + Dũng | FN-MVP-1.0 | Triển khai 02:00 thứ Bảy 03/10 | main |
| v1.0.1 | 2026-10-03 | 11:30 | Hotfix | Production | Hà + Dũng + Bảo (khẩn) | FN-MVP-1.0.1 | Hotfix cấu hình cache; deploy 12:10 | hotfix/1.0.1 |

## D2.7 DORA metrics (12 tuần)

📎 Nguồn: `templates/delivery-plan/dora-metrics.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| Week | Start_Date | Deployments | Failed_Deployments | Change_Failure_Rate | Median_Lead_Time_hours | Median_Time_to_Restore_min | Deployment_Frequency_per_day | Ghi_chu |
|---|---|---|---|---|---|---|---|---|
| W1 | 2026-11-02 | 3 | 1 | =ROUND(D2/C2,3) | 96 | 180 | =ROUND(C2/5,2) | Bắt đầu chuyển đổi; deploy còn thủ công có duyệt |
| W2 | 2026-11-09 | 4 | 1 | =ROUND(D3/C3,3) | 84 | 165 | =ROUND(C3/5,2) |  |
| W3 | 2026-11-16 | 5 | 1 | =ROUND(D4/C4,3) | 72 | 150 | =ROUND(C4/5,2) | Tự động deploy staging |
| W4 | 2026-11-23 | 6 | 1 | =ROUND(D5/C5,3) | 60 | 140 | =ROUND(C5/5,2) |  |
| W5 | 2026-11-30 | 7 | 1 | =ROUND(D6/C6,3) | 48 | 120 | =ROUND(C6/5,2) | PR nhỏ ≤ 400 dòng; feature flag đầu tiên |
| W6 | 2026-12-07 | 8 | 1 | =ROUND(D7/C7,3) | 36 | 95 | =ROUND(C7/5,2) |  |
| W7 | 2026-12-14 | 9 | 1 | =ROUND(D8/C8,3) | 28 | 70 | =ROUND(C8/5,2) | Canary prod 10% |
| W8 | 2026-12-21 | 11 | 1 | =ROUND(D9/C9,3) | 22 | 6 | =ROUND(C9/5,2) | Một deploy lỗi rollback 6 phút nhờ flag |
| W9 | 2026-12-28 | 13 | 1 | =ROUND(D10/C10,3) | 14 | 55 | =ROUND(C10/5,2) | Hằng ngày prod |
| W10 | 2027-01-04 | 14 | 1 | =ROUND(D11/C11,3) | 10 | 45 | =ROUND(C11/5,2) |  |
| W11 | 2027-01-11 | 13 | 1 | =ROUND(D12/C12,3) | 8 | 40 | =ROUND(C12/5,2) |  |
| W12 | 2027-01-18 | 15 | 2 | =ROUND(D13/C13,3) | 6 | 35 | =ROUND(C13/5,2) | Ổn định |
| W1-W4 | 2026-11-02 | =SUM(C2:C5) | =SUM(D2:D5) | =ROUND(D14/C14,3) | =MEDIAN(F2:F5) | =MEDIAN(G2:G5) | =ROUND(C14/20,2) | Trước chuyển đổi (22%) |
| W9-W12 | 2026-12-28 | =SUM(C10:C13) | =SUM(D10:D13) | =ROUND(D15/C15,3) | =MEDIAN(F10:F13) | =MEDIAN(G10:G13) | =ROUND(C15/20,2) | Sau chuyển đổi (9%) |
