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

## Quy tắc

1. **Staging giống production**: cùng cấu hình, cùng cache, cùng phiên bản dịch vụ ngoài (sandbox tương ứng).
2. **Không dữ liệu thật ngoài production**.
3. Mọi bản lên UAT/production **phải có tag**.
4. Khác biệt cấu hình staging–production phải nằm trong **danh sách khác biệt được biết** (config diff) và được rà trước go-live.
5. Truy cập production: quyền tối thiểu, ghi log, có người duyệt.

## Config diff staging ↔ production (cập nhật 20/09/2026)

| Mục | Staging | Production | Ghi chú |
|---|---|---|---|
| TTL cache | Đặt tay 60 s | Đặt tay 300 s | **Cần chuẩn hoá** (TD-06) |
| PayEasy | Sandbox | Live | Khác endpoint và khoá |
| Kích thước DB | Nhỏ | Lớn | Tải khác |

---

## Cách dùng cho dự án của bạn

1. Liệt kê môi trường thực có; đừng tạo nhiều hơn đội quản lý nổi.
2. Ghi rõ ai deploy, cổng vào và dữ liệu.
3. Giữ danh sách khác biệt cấu hình; rà trước mỗi mốc lớn.
4. Ràng buộc quy tắc dữ liệu thật/giả.
5. Xem lại khi thêm môi trường mới.
