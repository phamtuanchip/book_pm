**Tên tài liệu:** Từ điển WBS (WBS Dictionary) — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 06/02/2026
**Mục đích & khi nào dùng:** Mô tả chi tiết từng work package quan trọng để mọi người hiểu cùng một nghĩa; dùng cho các gói lớn/rủi ro cao.

---

## Khung mô tả

Mỗi work package: **ID · Tên · Mô tả phạm vi · Deliverable · Tiêu chí hoàn thành · Chịu trách nhiệm · Ước lượng · Phụ thuộc · Giả định/Rủi ro.**

## 3.5.3 Dịch vụ đơn hàng và vòng đời

| Trường | Nội dung |
|---|---|
| Mô tả | Tạo, cập nhật, huỷ đơn; máy trạng thái (mới → xác nhận → chuẩn bị → giao → hoàn tất/huỷ) |
| Deliverable | API đơn hàng; tài liệu máy trạng thái; unit test |
| Tiêu chí hoàn thành | Mọi chuyển trạng thái hợp lệ được kiểm thử; API theo hợp đồng; qua code review; không bug Critical/High |
| Người chịu trách nhiệm | Sơn |
| Ước lượng | 65 ngày (khoảng 50–80) |
| Phụ thuộc | 3.5.1 |
| Rủi ro | Yêu cầu huỷ/hoàn tiền chưa rõ → BA làm rõ trước Sprint 3 |

## 6.1.1 Tích hợp PayEasy và chứng nhận

| Trường | Nội dung |
|---|---|
| Mô tả | Tích hợp cổng thanh toán thẻ: tạo giao dịch, callback, hoàn tiền, đối soát; hoàn tất chứng nhận của PayEasy |
| Deliverable | Module tích hợp; báo cáo kiểm thử sandbox; giấy chứng nhận |
| Tiêu chí hoàn thành | Giao dịch thành công/thất bại/hoàn tiền đúng; đối soát khớp; chứng nhận được cấp |
| Người chịu trách nhiệm | Dũng |
| Ước lượng | 40 ngày (chưa gồm thời gian chờ chứng nhận của vendor) |
| Phụ thuộc | 2.3.2 |
| Rủi ro | **Cao**: vendor có thể trễ chứng nhận — ghi RAID, kế hoạch dự phòng (Ch18, Ch21) |

## 3.1.5 Theo dõi đơn và bản đồ (app Khách hàng)

| Trường | Nội dung |
|---|---|
| Mô tả | Hiển thị vị trí tài xế theo thời gian thực, thời gian dự kiến, trạng thái đơn |
| Deliverable | Màn hình theo dõi iOS/Android; kết nối realtime |
| Tiêu chí hoàn thành | Cập nhật vị trí ≤ 5 giây; pin/dữ liệu trong ngưỡng chấp nhận; qua UAT |
| Người chịu trách nhiệm | Khoa |
| Ước lượng | 70 ngày |
| Phụ thuộc | 3.1.3, 3.5.7 |

## 4.2.5 Hỗ trợ UAT và regression cuối

| Trường | Nội dung |
|---|---|
| Mô tả | Chuẩn bị dữ liệu, môi trường UAT; hỗ trợ người dùng; chạy regression khi có bản vá |
| Deliverable | Báo cáo UAT; danh sách defect và trạng thái |
| Tiêu chí hoàn thành | Đạt tiêu chí Go/No-Go (Ch37) |
| Người chịu trách nhiệm | Nam |
| Ước lượng | 30 ngày |

---

## Cách dùng cho dự án của bạn

1. Chỉ viết từ điển cho gói lớn (> 30 ngày), rủi ro cao hoặc hay gây hiểu lầm.
2. Viết tiêu chí hoàn thành kiểm tra được, không dùng từ như "tốt", "ổn".
3. Ghi khoảng ước lượng (thấp–cao), không chỉ một con số.
4. Cập nhật từ điển khi WBS đổi; lưu cùng phiên bản.
5. Gửi người chịu trách nhiệm xác nhận từng dòng.
