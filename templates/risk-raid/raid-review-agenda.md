**Tên tài liệu:** Agenda rà soát RAID hằng tuần (15 phút)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 12/01/2026 (dùng mỗi thứ Hai 09:30)
**Mục đích & khi nào dùng:** Giữ RAID Log luôn sống bằng nhịp rà soát ngắn, có đầu ra; dùng mỗi tuần và trước mỗi mốc lớn.

---

## Thông tin

| Mục | Nội dung |
|---|---|
| Thời điểm | Thứ Hai 09:30–09:45 |
| Chủ trì | Hà (PM) |
| Tham dự | Dũng, Lan, Nam (+ Châu khi có phụ thuộc phía khách) |
| Tài liệu | `FoodNow-RAID-Log.csv` (mở sẵn, lọc theo trạng thái) |

## Agenda 15 phút

| Phút | Nội dung | Câu hỏi | Đầu ra |
|---|---|---|---|
| 0–3 | **Issue mới/đang mở** | Có gì mới? Ai xử lý? Hạn? Cần leo thang? | Cập nhật trạng thái, leo thang nếu quá hạn |
| 3–6 | **Dependency sắp đến hạn** (14 ngày tới) | Ngày cần vs ngày hứa còn khớp không? Ai nhắc? | Log ngày hứa mới, hành động nhắc |
| 6–9 | **Top 5 rủi ro** | Trigger nào xuất hiện? Xác suất/tác động có đổi không? | Cập nhật Score; kích hoạt contingency nếu cần |
| 9–12 | **Assumption sắp kiểm chứng** | Giả định nào cần xác nhận tuần này? Có giả định sai? | Đóng/đổi trạng thái; nếu sai tạo Issue/Risk |
| 12–15 | **Rủi ro/vấn đề mới** & chốt hành động | Điều gì chúng ta vừa thấy mà chưa ghi? | Mục mới; danh sách hành động (người – hạn) |

## Quy tắc

1. Không thảo luận giải pháp dài; nếu cần, hẹn buổi riêng.
2. Mỗi mục có **chủ sở hữu** và **hạn**; không "cả đội".
3. Người nào bận vắng mặt thì gửi cập nhật trước 09:00.
4. Cập nhật RAID trong lúc họp, không sau.
5. Tin xấu được hoan nghênh; không ai bị đổ lỗi vì báo sớm.

## Mẫu ghi nhanh

| Mục | ID | Cập nhật | Hành động | Người | Hạn |
|---|---|---|---|---|---|
| Issue | I-006 | PayEasy mới hứa 19/06 | Leo thang Sponsor; kích hoạt contingency | Hà | 21/04 |
| Dependency | D-03 | API nhà hàng chưa có | Nhắc Châu; leo thang | Hà | 17/03 |

---

## Cách dùng cho dự án của bạn

1. Đặt lịch cố định hằng tuần, 15 phút, ngay đầu tuần.
2. Mở sẵn RAID và lọc: Issue mở, Dependency ≤ 14 ngày, top 5 Risk, Assumption cần xác nhận.
3. Cập nhật trực tiếp trong buổi; cuối buổi đọc lại hành động.
4. Đưa top 3 mục nóng vào báo cáo tuần.
5. Mỗi tháng dọn dẹp: đóng mục không còn liên quan; kiểm tra mục nào "cũ" quá 4 tuần không cập nhật.
