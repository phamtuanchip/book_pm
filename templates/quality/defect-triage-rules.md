**Tên tài liệu:** Quy tắc phân loại và xử lý defect (triage)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 06/07/2026
**Mục đích & khi nào dùng:** Thống nhất severity, priority, SLA sửa lỗi và họp triage; dùng từ UAT (và cả trước đó).

---

## 1. Severity (mức nghiêm trọng) và Priority (mức ưu tiên)

**Severity** = mức độ ảnh hưởng kỹ thuật/nghiệp vụ (do QA đánh giá). **Priority** = thứ tự sửa theo kinh doanh (do PO/PM quyết định). Hai thứ khác nhau: lỗi Low về giao diện ở trang chủ có thể priority cao trước chiến dịch.

| Severity | Định nghĩa | Ví dụ FoodNow |
|---|---|---|
| **Critical** | Sập, mất/lệch tiền hoặc dữ liệu, chặn luồng chính, không có cách né | Thanh toán thẻ trừ tiền nhưng đơn không tạo |
| **High** | Chức năng chính lỗi, cách né khó hoặc ảnh hưởng nhiều người | Nhà hàng không nhận thông báo đơn mới |
| **Medium** | Chức năng phụ lỗi hoặc có cách né | Lịch sử đơn thiếu ngày trên một số máy |
| **Low** | Thẩm mỹ, lỗi chính tả, cải tiến nhỏ | Lệch 2px ở nút |

## 2. SLA sửa lỗi

| Severity | Phản hồi | Sửa và đưa vào rc | Retest |
|---|---|---|---|
| Critical | 1 giờ | ≤ 1 ngày làm việc | ≤ 4 giờ sau khi sửa |
| High | 4 giờ | ≤ 3 ngày làm việc | ≤ 1 ngày |
| Medium | 1 ngày | Trong sprint kế tiếp | Theo lịch |
| Low | — | Backlog (xét theo ưu tiên) | — |

## 3. Họp triage

- **Khi nào:** UAT: hằng ngày 10:00, 20 phút; ngoài UAT: 2 lần/tuần.
- **Ai:** Nam (chủ trì), Dũng, Châu (hoặc Lan), Hà khi có Critical.
- **Làm gì:** xác nhận severity/priority; gán người; đánh dấu "chặn Go/No-Go"; đóng trùng lặp; hỏi "có cần hotfix/rc mới không?".

## 4. Defect burn-down

Theo dõi **số defect mở theo ngày và theo severity**; mục tiêu: Critical/High về 0 trước Go/No-Go; nếu không giảm 3 ngày liền → leo thang.

Số liệu UAT vòng 1 (đến 21/08): tổng 47 defect — **3 Critical, 9 High, 22 Medium, 13 Low**. UAT vòng 2 (đến 16/09): **0 Critical, 0 High, 4 Medium mở, 9 Low mở** (18 Medium đã sửa, 4 Low đóng).

## 5. Regression và bug bash

- Mọi bản sửa lỗi phải chạy **regression** liên quan; rc mới chạy toàn bộ regression tự động.
- **Bug bash** (1–2 giờ, cả đội + người dùng thử nghiệm cùng "phá" hệ thống) trước rc.2 để tìm lỗi lọt.

---

## Cách dùng cho dự án của bạn

1. Viết định nghĩa severity với ví dụ của sản phẩm bạn; thống nhất với PO/khách.
2. Đặt SLA có số; xác nhận Dev chấp nhận.
3. Lên lịch triage cố định trong UAT; ghi kết quả.
4. Vẽ defect burn-down hằng ngày.
5. Sau dự án, so sánh phân bố severity với bug leakage (Ch15).
