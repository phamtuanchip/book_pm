**Tên tài liệu:** Delivery Plan tổng thể — FoodNow MVP → R1
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 30/01/2026 (tuần 4); cập nhật v1.1 ngày 02/11/2026 cho giai đoạn sau go-live
**Mục đích & khi nào dùng:** Nối Roadmap → Release Plan → lịch build/deploy thực tế: nhịp phát hành, môi trường, chiến lược nhánh/tag, trách nhiệm; dùng từ Sprint 0 và cập nhật khi đổi chiến lược.

---

## 1. Delivery Plan khác gì Release Plan và Gantt

| Tài liệu | Trả lời | Ví dụ FoodNow |
|---|---|---|
| Roadmap | Hướng đi | MVP → R1 → R2 |
| Release Plan | Mỗi release gồm gì, tiêu chí Go/No-Go | MVP: 11 epic, không Critical/High |
| **Delivery Plan** | **Bản nào lên môi trường nào, khi nào, bằng cách nào, ai duyệt** | Tag `v0.N.0` cuối sprint → staging; `v1.0.0-rc.N` → UAT; `v1.0.0` → prod |
| Gantt | Task, ngày, phụ thuộc | Đường găng thanh toán |

## 2. Chiến lược đã chọn (quyết định DL-005, 30/01/2026)

- **Giai đoạn MVP (mô hình A):** **GitFlow-lite + release theo sprint + tag SemVer**. Lý do: hợp đồng theo mốc, app mobile qua app store, cần UAT, đội có Backend mới chưa quen trunk-based.
- **Sau go-live (mô hình B, từ tuần 44):** backend/web chuyển **trunk-based + daily deploy**; mobile vẫn theo **release train** 2 tuần vì app store review 1–3 ngày.
- Chi tiết: `branching-strategy.md`, `tagging-and-versioning-policy.md`, `release-strategy-migration-plan.md`.

## 3. Cấp phát hành và nhịp

| Cấp | Môi trường | Khi nào | Tag | Ai duyệt |
|---|---|---|---|---|
| Build nội bộ | Dev | Mỗi commit (CI) | — | Tự động |
| Cuối sprint | Staging | Thứ Sáu cuối sprint, 17:30 | `v0.N.0` | Dũng + Nam |
| Ứng viên phát hành | UAT | 27/07 (rc.1), 04/09 (rc.2) | `v1.0.0-rc.N` | Dũng + Nam + Châu |
| Go-live | Production | 03/10 02:00 | `v1.0.0` | Sponsor (Go/No-Go) |
| Hotfix | Production | Khi cần | `v1.0.x` | Hà + Dũng + Bảo |

**Release cadence MVP:** mỗi 2 tuần lên staging; **UAT** đợt rc; **production** một lần lớn (go-live) rồi hotfix.

## 3b. Mapping Sprint → Release candidate → Tag → Môi trường

| Sprint | Ngày cuối | Tag | Môi trường |
|---|---|---|---|
| 1–11 | 27/02 … 17/07 | v0.1.0 … v0.11.0 | Staging |
| 12 | 31/07 | v0.12.0; cắt `release/1.0.0` 24/07 → `v1.0.0-rc.1` 27/07 | Staging; UAT |
| 13–15 | 14/08 … 11/09 | v0.13.0 … v0.15.0; `v1.0.0-rc.2` 04/09 | Staging; UAT |
| 16 | 25/09 | v0.16.0 | Staging |
| Go-live | 03/10 | `v1.0.0` (tag 02/10) | Production |

## 4. Freeze và cửa sổ deploy

- **Scope Freeze:** 13/07 · **Feature complete:** 17/07 · **Code freeze (release branch):** 24/07.
- **Cấm deploy:** Tết (16–20/02), 27/04, 30/04–01/05, 02/09; **chiều thứ Sáu** cho production (trừ cutover); từ 17/09 đến go-live chỉ theo runbook.
- **Cửa sổ go-live:** thứ Bảy 02:00–06:00 (lượng đơn thấp nhất).

## 5. Trách nhiệm (Release Manager)

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

## 6. Lưu ý mobile

App Store/Google Play có review 1–3 ngày → **không** "daily deploy" bản app; chỉ backend, web và **feature flag/remote config**. Backend hỗ trợ **≥ 2 phiên bản app**.

## 7. Liên kết

`release-calendar.csv` · `environment-matrix.md` · `delivery-strategy-decision-matrix.md` · `release-log.csv` · Ch30–33.

---

## Cách dùng cho dự án của bạn

1. Sao chép bảng cấp phát hành; điền môi trường và người duyệt của bạn.
2. Chọn chiến lược A hay B bằng ma trận quyết định; ghi quyết định vào Decision Log.
3. Dựng Release Calendar từ Gantt (freeze, lễ, cửa sổ deploy).
4. Gán Release Manager và RACI.
5. Xem lại khi bối cảnh đổi (sau go-live, đổi hợp đồng).
