**Tên tài liệu:** Release Notes — mẫu (ví dụ `v1.0.0`)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 02/10/2026 (cho bản phát hành 03/10/2026)
**Mục đích & khi nào dùng:** Thông báo thay đổi của một bản phát hành cho hai nhóm: người dùng và kỹ thuật; dùng cho mọi release.

---

## Phần 1 — Cho người dùng (nhà hàng, tài xế, khách hàng)

# FoodNow 1.0.0 — 03/10/2026

**Điểm mới**
- Đặt món và theo dõi đơn theo thời gian thực.
- Thanh toán bằng thẻ hoặc tiền mặt khi nhận hàng.
- Nhà hàng nhận, xác nhận và cập nhật thực đơn trên máy tính bảng.
- Tài xế nhận chuyến, xem đường đi và cập nhật trạng thái giao hàng.

**Cải thiện**
- Thông báo trạng thái đơn qua ứng dụng và SMS.

**Đã sửa**
- (Bản đầu tiên — chưa có mục sửa lỗi.)

**Lưu ý**
- Cần cập nhật ứng dụng lên 1.0.0. Liên hệ hỗ trợ: hotline/kênh CS.

## Phần 2 — Cho kỹ thuật

| Mục | Nội dung |
|---|---|
| Tag | `v1.0.0` (commit …); nhánh `release/1.0.0` |
| Jira Fix Version | `FN-MVP-1.0` (xem danh sách story) |
| Thay đổi API | Phiên bản v1; không breaking so với rc.2 |
| Migration DB | Có (schema đơn hàng); có đường lùi |
| Feature flag | 3 flag mặc định TẮT (khuyến mãi, đánh giá — chưa dùng) |
| Cấu hình cần lưu ý | TTL cache production; khoá PayEasy live |
| Rủi ro đã biết | TD-06 (cache config) — theo dõi |
| Rollback | Deploy lại `v0.16.0` theo runbook (≤ 30 phút) |
| Người duyệt | Bảo (Go), Dũng, Nam, Hà |

## Quy tắc viết

- Người dùng: ngôn ngữ thường, mỗi dòng bắt đầu bằng động từ, không thuật ngữ kỹ thuật.
- Kỹ thuật: đủ để người trực đêm rollback mà không cần hỏi.
- Sinh danh sách từ Jira Fix Version; PM kiểm tra bản người dùng.

---

## Cách dùng cho dự án của bạn

1. Tạo mẫu trong wiki; điền tự động từ Fix Version nếu có.
2. Tách hai phần; gửi phần người dùng qua kênh họ đọc.
3. Ghi rõ thay đổi API/migration/flag và rollback.
4. Duyệt nội dung bởi PO/PM trước khi phát hành.
5. Lưu bản đã phát hành cùng tag.
