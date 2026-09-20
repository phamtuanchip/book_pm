**Tên tài liệu:** Kế hoạch giao tiếp dự án
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.1 — 30/01/2026 (cập nhật sau khi phát hiện stakeholder Huy)
**Mục đích & khi nào dùng:** Quy định ai cần biết gì, qua kênh nào, bao lâu một lần và ai chịu trách nhiệm; dùng từ tuần đầu tiên và cập nhật khi có stakeholder mới.

---

## 1. Nguyên tắc

- Một sự thật, một nơi: quyết định và kế hoạch lưu ở Confluence; chat chỉ để trao đổi nhanh.
- Không bất ngờ: tin xấu báo ngay kèm phương án (xem Ch35).
- Mỗi cuộc họp có agenda, biên bản 1 trang, quyết định – hành động – người – hạn.
- Trả lời trong ngày làm việc; việc khẩn gắn nhãn [KHẨN].

## 2. Bảng kế hoạch giao tiếp

| # | Đối tượng | Cần gì | Kênh | Tần suất | Người phụ trách | Đầu ra |
|---|---|---|---|---|---|---|
| 1 | Sponsor (Bảo) | Tiến độ, ngân sách, quyết định cần duyệt | Họp Sponsor 30' + báo cáo tuần | Hằng tuần | Hà | Báo cáo 1 trang (thứ Sáu 15:00) |
| 2 | Hội đồng quản trị | Tình hình tổng quan, rủi ro lớn | SteerCo | Hằng tháng | Hà + Bảo | Báo cáo tháng |
| 3 | PO (Châu) | Ưu tiên, quyết định sản phẩm | Họp đồng bộ + Slack | 2 lần/tuần | Hà/Lan | Backlog ưu tiên |
| 4 | Đội phát triển | Mục tiêu sprint, blocker | Daily Scrum, Planning, Review, Retro | Hằng ngày/sprint | Dũng/Hà | Sprint Goal, retro action |
| 5 | Vendor PayEasy (Yến) | Ngày hứa, yêu cầu kỹ thuật, chứng nhận | Họp + email | Hằng tuần | Hà/Dũng | Log ngày hứa |
| 6 | CS Manager (Huy) | Quy trình hỗ trợ, kịch bản UAT | Họp + Slack | Hằng tuần | Hà | Kế hoạch hỗ trợ go-live |
| 7 | Nhà hàng/Tài xế thử nghiệm | Demo, phản hồi | Workshop/nhóm chat | Mỗi 2 tuần | Lan | Feedback log |
| 8 | Giám đốc BrightSoft | Sức khoẻ dự án, biên lợi nhuận | 1-1 | Hằng tháng | Hà | Tóm tắt |
| 9 | Toàn bộ stakeholder | Thông báo release, go-live | Email + Slack | Theo release | Hà | Release notes, thông báo |

## 3. Quy tắc leo thang (escalation)

| Cấp | Điều kiện | Ai xử lý | Hạn phản hồi |
|---|---|---|---|
| 1 | Blocker của đội không tự gỡ trong 1 ngày | Tech Lead → PM | 1 ngày làm việc |
| 2 | Rủi ro/vấn đề ảnh hưởng mốc hoặc > 5% ngân sách | PM → Sponsor | 2 ngày làm việc |
| 3 | Cần quyết định vượt quyền Sponsor hoặc tranh chấp hợp đồng | Sponsor + Giám đốc BrightSoft | 3 ngày làm việc |

Kèm mọi leo thang: **vấn đề – tác động – phương án – khuyến nghị – hạn cần quyết định**.

## 4. Lịch giao tiếp định kỳ

| Ngày | Sự kiện | Ai |
|---|---|---|
| Hằng ngày 08:45 | Daily Scrum | Đội |
| Thứ Hai | Rà RAID 15' | Hà, Dũng, Lan, Nam |
| Thứ Ba/Năm | Đồng bộ PO | Hà, Châu, Lan |
| Thứ Năm | Họp Sponsor 30' | Hà, Bảo, Châu |
| Thứ Sáu 15:00 | Gửi báo cáo tuần | Hà |
| Cuối sprint | Review + Retro | Đội, Châu |
| Hằng tháng | SteerCo | Bảo, HĐQT, Hà |

---

## Cách dùng cho dự án của bạn

1. Từ Stakeholder Register, liệt kê mỗi nhóm cần thông tin và đối chiếu với chiến lược trong ma trận quyền lực–quan tâm.
2. Điền bảng mục 2: mỗi hàng đúng một người phụ trách.
3. Chốt quy tắc leo thang bằng hạn phản hồi cụ thể.
4. Cắt bớt kênh/tần suất trùng lặp để không quá tải.
5. Xem lại sau mỗi 4 tuần và khi có stakeholder mới.
