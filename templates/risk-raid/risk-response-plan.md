**Tên tài liệu:** Kế hoạch ứng phó rủi ro — top rủi ro FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/04/2026 (tuần 16)
**Mục đích & khi nào dùng:** Mô tả chi tiết cách ứng phó cho các rủi ro lớn nhất: chiến lược, hành động, trigger, kế hoạch dự phòng, chi phí, rủi ro còn lại; dùng cho top 5–8 rủi ro (Score ≥ 12).

---

## 1. Bốn chiến lược cho rủi ro tiêu cực

| Chiến lược | Ý nghĩa | Ví dụ |
|---|---|---|
| **Avoid** (tránh) | Loại bỏ nguyên nhân | Luật nhánh ≤ 5 ngày để không có nhánh dài |
| **Mitigate** (giảm) | Giảm xác suất hoặc tác động | Pair để giảm bus factor |
| **Transfer** (chuyển giao) | Chuyển tác động sang bên khác | Dùng tokenization của PayEasy, pentest bên ngoài |
| **Accept** (chấp nhận) | Không làm gì hoặc dự phòng | Chấp nhận thay đổi quy định nhỏ, có dự phòng |

Cho cơ hội: **Exploit, Enhance, Share, Accept**.

## 2. Kế hoạch chi tiết

| ID | Rủi ro | Score | EMV (triệu) | Chiến lược | Hành động phòng ngừa | Trigger | Kế hoạch dự phòng (contingency) | Chi phí ứng phó | Chủ sở hữu | Hạn | Rủi ro còn lại |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R01 | PayEasy trễ chứng nhận | 20 | 72,0 | Mitigate | Họp vendor 2 lần/tuần; ngày hứa bằng văn bản; leo thang qua Sponsor | Vendor báo trễ | Crashing thanh toán E2E; fast-tracking kiểm thử bảo mật; thuê thêm Dev/QA 4 tuần | ≈ 110 triệu từ dự phòng | Hà | Liên tục | Trung bình |
| R02 | Mất Backend senior (bus factor 1) | 15 | 32,4 | Mitigate | Pair; ADR; tài liệu API | Đơn nghỉ việc | Điều động bench; tuyển thay thế | ≈ 60 triệu | Dũng | Liên tục | Trung bình |
| R03 | Sponsor thêm yêu cầu | 12 | 28,0 | Mitigate | Parking lot; CR; out-of-scope | ≥ 2 yêu cầu ngoài phạm vi/tháng | Hoán đổi hạng mục Could | Trong CR | Hà | Liên tục | Thấp |
| R05 | Hiệu năng realtime | 12 | 30,0 | Mitigate | Spike; test tải mỗi sprint | p95 > 5 giây | Giảm tần suất cập nhật | Trong sprint | Dũng | Sprint 8 | Thấp |
| R07 | Nợ kỹ thuật | 12 | 22,4 | Mitigate | Bảng nợ; 10% sprint | Coverage giảm 2 sprint | Sprint trả nợ sau UAT | Trong sprint | Dũng | Liên tục | Trung bình |
| R10 | Nhà hàng/tài xế không dùng | 12 | 24,0 | Mitigate | Workshop; nhóm thử nghiệm | Khảo sát < 70% | Hỗ trợ tận nơi | Trong ngân sách đào tạo | Lan | UAT | Thấp |
| R17 | Vượt ngân sách | 12 | 28,0 | Mitigate | Theo dõi tuần; quy tắc dự phòng | Dùng > 50% dự phòng trước T30 | Cắt hạng mục Could | Không | Hà | Liên tục | Trung bình |
| R06 | Lộ dữ liệu thẻ/PII | 5 | 80,0 | Transfer | Tokenization; pentest 45 triệu | Pentest thấy lỗ hổng cao | Kế hoạch ứng phó sự cố dữ liệu | 45 triệu | Dũng | UAT | Thấp |

**Tổng EMV các rủi ro Score ≥ 12:** 72,0 + 32,4 + 28,0 + 30,0 + 22,4 + 24,0 + 28,0 = **236,8 triệu**, nằm trong dự phòng 256,8 triệu (đủ 92%).

## 3. Quy tắc sử dụng dự phòng

1. Chỉ dùng cho rủi ro có ID trong Risk Register.
2. PM tự dùng ≤ 5% ngân sách (≈ 120 triệu) và báo cáo trong tuần; vượt cần Sponsor duyệt bằng văn bản.
3. Ghi vào budget-tracking cột dự phòng đã dùng.

---

## Cách dùng cho dự án của bạn

1. Chọn 5–8 rủi ro Score cao nhất để lập kế hoạch chi tiết.
2. Với mỗi rủi ro: một chiến lược, hành động phòng ngừa, trigger đo được, kế hoạch dự phòng, người chịu trách nhiệm.
3. So tổng EMV của rủi ro chính với dự phòng; nếu thiếu, thảo luận với Sponsor sớm.
4. Rà kế hoạch ở họp RAID hằng tuần; cập nhật rủi ro còn lại sau mỗi hành động.
5. Khi trigger xảy ra, kích hoạt kế hoạch dự phòng và chuyển rủi ro thành Issue (Ch19).
