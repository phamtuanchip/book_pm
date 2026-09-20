**Tên tài liệu:** Ma trận chọn mô hình quản lý dự án (Waterfall / Agile / Hybrid)
**Dự án:** FoodNow — MVP
**Phiên bản / ngày:** v1.0 — 12/2025 (trước Charter)
**Mục đích & khi nào dùng:** Chấm điểm có hệ thống để chọn mô hình và ghi lại lý do; dùng ở giai đoạn khởi động, trước khi lập kế hoạch.

---

## 1. Cách chấm

Mỗi tiêu chí chấm **1–5** cho mức độ nghiêng về từng mô hình (5 = rất hợp). Trọng số phản ánh tầm quan trọng với dự án cụ thể (tổng 100%).

## 2. Bảng chấm cho FoodNow MVP

| # | Tiêu chí | Câu hỏi | Trọng số | Waterfall | Agile | Hybrid | Ghi chú FoodNow |
|---|---|---|---|---|---|---|---|
| 1 | Độ ổn định yêu cầu | Yêu cầu đã chốt chưa? | 20% | 2 | 5 | 4 | Startup, yêu cầu sẽ đổi khi thử thị trường |
| 2 | Hợp đồng & ngân sách | Khách cần giá/mốc cố định? | 20% | 5 | 2 | 5 | Sponsor cần trần 2,4 tỷ và mốc thanh toán |
| 3 | Mức tham gia của khách | Khách có mặt thường xuyên? | 10% | 2 | 5 | 4 | PO Châu bận, chỉ ~50% thời gian |
| 4 | Quy mô & độ phức tạp | Đội và số tích hợp? | 10% | 3 | 4 | 4 | 12 người, 3 app + cổng thanh toán |
| 5 | Rủi ro kỹ thuật | Có nhiều điều chưa biết? | 15% | 2 | 5 | 4 | Tích hợp PayEasy chưa chắc chắn |
| 6 | Tuân thủ pháp lý | Cần tài liệu kiểm toán? | 10% | 5 | 2 | 4 | Thanh toán thẻ cần vết kiểm toán |
| 7 | Kinh nghiệm của đội | Đội quen mô hình nào? | 10% | 3 | 4 | 4 | Đội BrightSoft đã làm Scrum |
| 8 | Nhu cầu giá trị sớm | Cần ra thử sớm không? | 5% | 1 | 5 | 4 | Có MVP rồi R1, R2 |
| | **Điểm có trọng số** | | 100% | **3,05** | **3,90** | **4,20** | |

Cách tính: `Σ (trọng số × điểm)`. Ví dụ Hybrid = 0,20×4 + 0,20×5 + 0,10×4 + 0,10×4 + 0,15×4 + 0,10×4 + 0,10×4 + 0,05×4 = **4,20**.

**Kết luận:** chọn **Hybrid** — khung Waterfall cho ngân sách, mốc và tuân thủ (giai đoạn MVP → R1 → R2, mốc thanh toán); bên trong dùng Scrum sprint 2 tuần.

## 3. Ma trận hợp đồng × mô hình

| Loại hợp đồng | Waterfall | Agile | Hybrid | Rủi ro chính cho nhà thầu |
|---|---|---|---|---|
| **Fixed-price** | Hợp | Khó (phạm vi phải cố định) | Hợp nếu phạm vi từng giai đoạn chốt rõ | Scope creep ăn vào biên lợi nhuận |
| **T&M** (Time & Material) | Hợp lý | Rất hợp | Hợp | Khách khó dự báo tổng chi phí |
| **Dedicated team** | Ít hợp | Rất hợp | Hợp | Khách phụ thuộc, khó chuyển giao |
| **Hybrid (khung fixed + CR T&M)** | — | — | **FoodNow dùng** | Cần quy trình CR chặt (Ch20) |

## 4. Quy tắc áp dụng cho FoodNow

- Ngân sách/mốc: quản lý theo Waterfall (baseline, EVM, mốc thanh toán).
- Thực thi: Scrum, sprint 2 tuần, Sprint Goal, review với PO.
- Thay đổi: nếu nằm trong phạm vi giai đoạn thì đổi trong backlog; nếu ngoài phạm vi thì đi qua Change Request.

---

## Cách dùng cho dự án của bạn

1. Sửa cột "Câu hỏi" và "Trọng số" theo bối cảnh của bạn (tổng luôn 100%).
2. Chấm 1–5 từng mô hình; ghi lý do vào cột "Ghi chú".
3. Tính điểm có trọng số; nếu hai mô hình cách nhau < 0,3 điểm, ưu tiên mô hình đội đã quen.
4. Đối chiếu với loại hợp đồng ở mục 3, phát hiện xung đột sớm.
5. Ghi kết luận và lý do vào Charter; xem xét lại khi bối cảnh đổi lớn.
