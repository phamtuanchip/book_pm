**Tên tài liệu:** Chính sách đánh số phiên bản và tag — FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 30/01/2026 (chốt cùng Delivery Plan)
**Mục đích & khi nào dùng:** Quy định cách đánh số, khi nào tag, ánh xạ tag ↔ Release Plan ↔ Jira Fix Version ↔ môi trường; dùng cho mọi repo.

---

## 1. Semantic Versioning (SemVer) `MAJOR.MINOR.PATCH`

| Thành phần | Tăng khi | Ví dụ |
|---|---|---|
| **MAJOR** | Thay đổi không tương thích ngược (breaking) hoặc release lớn (go-live) | 1.0.0 → 2.0.0 |
| **MINOR** | Thêm tính năng tương thích ngược | 1.0.0 → 1.1.0 |
| **PATCH** | Sửa lỗi tương thích ngược | 1.0.0 → 1.0.1 |
| **Hậu tố** | `-rc.N` (release candidate), `-beta.N` | 1.0.0-rc.1 |

Trước go-live dùng **0.x**: `v0.N.0` = bản cuối Sprint N (chưa phải sản phẩm hoàn chỉnh).

## 2. Tag là gì và quy tắc

- **Tag** đóng dấu một commit cụ thể, **bất biến** (không di chuyển/xoá).
- **Mọi bản lên UAT hoặc production phải có tag.** Bản staging cuối sprint cũng tag `v0.N.0`.
- Chỉ pipeline/Release Manager tạo tag `v*` (bảo vệ tag).
- Tag đặt trên `main` (bản production), `release/*` (rc), `develop` (sprint).

## 3. Quy ước tag theo Release Plan

| Tag | Ý nghĩa | Môi trường | Ví dụ FoodNow |
|---|---|---|---|
| `v0.N.0` | Cuối Sprint N | Staging | `v0.1.0` 27/02 … `v0.16.0` 25/09 |
| `v1.0.0-rc.N` | Ứng viên phát hành | UAT | rc.1 27/07; rc.2 04/09 |
| `v1.0.0` | Go-live MVP | Production | Tag 02/10; deploy 03/10 02:00 |
| `v1.0.x` | Hotfix | Production | `v1.0.1` 03/10 |
| `v1.1.0` | R1 | Production | Q1/2027 |

## 4. Ánh xạ tag ↔ Release Plan ↔ Jira ↔ môi trường

| Tag | Release Plan | Jira Fix Version | Môi trường | Người duyệt |
|---|---|---|---|---|
| `v0.N.0` | MVP (sprint) | `FN-MVP-0.N` | Staging | Dũng + Nam |
| `v1.0.0-rc.N` | MVP (UAT) | `FN-MVP-1.0` | UAT | Dũng + Nam + Châu |
| `v1.0.0` | MVP go-live | `FN-MVP-1.0` | Production | Bảo (Go/No-Go) |
| `v1.0.1` | Hotfix | `FN-MVP-1.0.1` | Production | Hà + Dũng + Bảo |

Quy tắc: mọi story trong bản phát hành gắn **Fix Version** tương ứng; release notes sinh từ Fix Version.

## 5. Mobile

- `versionName` = SemVer (ví dụ 1.0.0); `versionCode`/build number **tăng đơn điệu** mỗi bản gửi store.
- Backend hỗ trợ **≥ 2 phiên bản app** gần nhất; có cơ chế **force update** khi phiên bản quá cũ hoặc có lỗi bảo mật.

## 6. Rollback và truy vết

- **Rollback = deploy lại tag cũ** (ví dụ từ `v1.0.1` về `v1.0.0`) theo runbook; không sửa tay trên server.
- **Audit**: ghi ai duyệt, khi nào, tag nào chạy ở đâu trong `release-log.csv`.
- **Nhiều phiên bản hỗ trợ**: dùng cherry-pick/backport từ `main` sang nhánh hỗ trợ (chỉ sửa lỗi nghiêm trọng).

---

## Cách dùng cho dự án của bạn

1. Chọn SemVer + hậu tố; định nghĩa `v0.N.0` nếu phát hành theo sprint.
2. Ghi bảng tag ↔ Release Plan ↔ Fix Version ↔ môi trường.
3. Bật bảo vệ tag; chỉ pipeline/Release Manager được tạo.
4. Quy định mobile (versionCode, force update, hỗ trợ ≥ 2 phiên bản).
5. Ghi mọi tag vào release log kèm người duyệt.
