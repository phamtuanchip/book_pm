**Tên tài liệu:** Rollback Plan — FoodNow `v1.0.0`
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 16/09/2026
**Mục đích & khi nào dùng:** Xác định khi nào, bằng cách nào và ai quyết định quay lại phiên bản trước; dùng cho mọi phát hành lớn.

---

## 1. Tiêu chí kích hoạt

| Tiêu chí | Ngưỡng |
|---|---|
| Tỷ lệ lỗi đặt đơn | > 5% trong 10 phút liên tục |
| Mất/lệch tiền | Bất kỳ trường hợp nào không giải thích được |
| Sập dịch vụ | > 10 phút không phục hồi |
| Dữ liệu | Phát hiện hỏng dữ liệu |
| Thời gian | Nếu không ổn định trong 90 phút và không có đường sửa nhanh |

## 2. Ai quyết định

Incident Commander (Hà) đề xuất; **Dũng** xác nhận kỹ thuật; **Bảo** quyết khi ảnh hưởng tiền/dữ liệu hoặc khi trước 03:30; hạn phản hồi 10 phút.

## 3. Điểm không quay lại

**02:40** — kích hoạt PayEasy live và mở giao dịch thật. Sau điểm này rollback phải kèm **xử lý giao dịch đã phát sinh** (đối soát thủ công).

## 4. Đường lùi

| Thành phần | Cách lùi | Thời gian mục tiêu |
|---|---|---|
| Backend/web | Deploy lại tag `v0.16.0` từ artifact lưu | ≤ 15 phút |
| Mobile | Ẩn bản mới ở store; bật cờ để dùng luồng cũ nếu có | ≤ 30 phút |
| Cơ sở dữ liệu | Khôi phục từ bản sao 01:45 nếu migration đã chạy | ≤ 30 phút |
| PayEasy | Tắt thanh toán thẻ (kill switch); giữ COD | ≤ 5 phút |
| Toàn hệ thống | Quay lại app bên thứ ba (FoodNow giữ hoạt động song song) | Tức thì |

## 5. Sau rollback

Thông báo Sponsor/nhà hàng/CS; đối soát giao dịch; báo cáo sự cố; họp Go/No-Go mới trước khi thử lại.

## 6. Ví dụ đánh giá INC-001 (03/10)

Tiêu chí kích hoạt **không** chạm ngưỡng (lỗi hiển thị, không mất tiền); migration đã chạy → rollback rủi ro hơn; quyết định **không rollback** (05:00), sửa bằng xả cache và hotfix.

---

## Cách dùng cho dự án của bạn

1. Viết tiêu chí kích hoạt bằng số; đừng để quyết định cảm tính giữa đêm.
2. Diễn tập đường lùi (thời gian thật).
3. Xác định điểm không quay lại và hậu quả.
4. Chuẩn bị phương án "chạy song song" hệ thống cũ nếu có.
5. Ghi quyết định rollback/không rollback và lý do.
