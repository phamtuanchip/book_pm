**Tên tài liệu:** Phiếu tính đường găng (Critical Path Worksheet)
**Dự án:** FoodNow MVP (ví dụ) và bài luyện tập
**Phiên bản / ngày:** v1.0 — 27/02/2026
**Mục đích & khi nào dùng:** Tính tay ES/EF/LS/LF và float để tìm đường găng; dùng khi lập lịch hoặc khi cần đánh giá tác động của một task trễ.

---

## 1. Quy ước

- **ES** (Early Start): bắt đầu sớm nhất = lớn nhất EF của các task tiền nhiệm (0 nếu không có).
- **EF** (Early Finish) = ES + Duration.
- **LF** (Late Finish): kết thúc muộn nhất mà không làm trễ dự án = nhỏ nhất LS của các task hậu nhiệm (= EF lớn nhất của dự án nếu là task cuối).
- **LS** (Late Start) = LF − Duration.
- **Float (Total Float)** = LS − ES = LF − EF.
- **Đường găng** = chuỗi task có Float = 0; độ dài = tổng Duration = thời gian ngắn nhất để xong dự án.
- Quan hệ dùng: Finish-to-Start (FS) không lag.

## 2. Ví dụ mẫu (6 task)

| Task | Duration | Tiền nhiệm |
|---|---|---|
| A | 3 | — |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B |
| E | 3 | C |
| F | 2 | D, E |

**Lượt đi (forward):** A 0→3; B 3→7; C 3→5; D 7→12; E 5→8; F: ES = max(12, 8) = 12 → EF = 14.
**Lượt về (backward):** F: LF = 14, LS = 12; D: LF = 12, LS = 7; E: LF = 12, LS = 9; B: LF = 7, LS = 3; C: LF = 9, LS = 7; A: LF = min(LS(B), LS(C)) = min(3, 7) = 3, LS = 0.

| Task | Dur | ES | EF | LS | LF | Float | Găng? |
|---|---|---|---|---|---|---|---|
| A | 3 | 0 | 3 | 0 | 3 | 0 | Có |
| B | 4 | 3 | 7 | 3 | 7 | 0 | Có |
| C | 2 | 3 | 5 | 7 | 9 | 4 | Không |
| D | 5 | 7 | 12 | 7 | 12 | 0 | Có |
| E | 3 | 5 | 8 | 9 | 12 | 4 | Không |
| F | 2 | 12 | 14 | 12 | 14 | 0 | Có |

**Đường găng: A → B → D → F = 14 ngày.** C và E có float 4: trễ tới 4 ngày không ảnh hưởng dự án.

## 3. Bài luyện (8 task) — tự điền

| Task | Duration | Tiền nhiệm | ES | EF | LS | LF | Float |
|---|---|---|---|---|---|---|---|
| A | 2 | — | | | | | |
| B | 4 | A | | | | | |
| C | 3 | A | | | | | |
| D | 5 | B | | | | | |
| E | 2 | B, C | | | | | |
| F | 4 | C | | | | | |
| G | 3 | D, E | | | | | |
| H | 2 | F, G | | | | | |

Câu hỏi: (1) Đường găng và tổng thời gian? (2) Float của C, E, F? (3) Nếu D trễ 2 ngày thì sao? (đáp án ở cuối chương 12).

## 4. Đường găng của FoodNow (từ `FoodNow-Schedule.csv`)

| Task | Bắt đầu | Kết thúc | Ngày làm việc | Float |
|---|---|---|---|---|
| PayEasy cấp sandbox (mốc vendor) | 27/03 | 27/03 | 0 | 0 |
| Tích hợp PayEasy + kiểm thử chứng nhận | 30/03 | 24/04 | 20 | 0 |
| Vendor cấp chứng nhận | 28/04 | 29/05 | 22 | 0 |
| Thanh toán end-to-end + đối soát | 01/06 | 26/06 | 20 | 0 |
| Kiểm thử bảo mật + tích hợp thanh toán | 29/06 | 17/07 | 15 | 0 |
| Cắt release/1.0.0, rc.1 | 20/07 | 24/07 | 5 | 0 |
| UAT vòng 1 | 27/07 | 21/08 | 20 | 0 |
| Sửa lỗi Critical/High, rc.2 | 24/08 | 04/09 | 9 | 0 |
| UAT vòng 2 → Go/No-Go lần 2 | 07/09 | 16/09 | 8 | 0 |
| Chuẩn bị cutover, đào tạo | 17/09 | 02/10 | 12 | 0 |
| Go-live | 03/10 | 03/10 | — | 0 |

Tổng chuỗi: 20 + 22 + 20 + 15 + 5 + 20 + 9 + 8 + 12 = **131 ngày làm việc**.

**Task gần găng (float 2–5 ngày làm việc):** app Khách hàng, Nhà hàng, Tài xế, Backend (float 5); kiểm thử chức năng theo sprint (float 2). Theo dõi sát vì một trễ nhỏ biến chúng thành găng.

## 5. Hành động khi đường găng bị trễ

1. Xác định task nào và trễ bao nhiêu ngày làm việc.
2. Trễ trên đường găng ⇒ trễ dự án; hỏi: **crashing** (thêm nguồn lực cho task găng) hay **fast-tracking** (chạy song song các task vốn tuần tự)?
3. Ghi chi phí và rủi ro của từng lựa chọn; chọn với Sponsor.
4. Cập nhật lịch, RAID và báo cáo tuần.

---

## Cách dùng cho dự án của bạn

1. Liệt kê task, Duration, tiền nhiệm (FS); vẽ mạng nếu cần.
2. Tính ES/EF từ trái sang phải; LS/LF từ phải sang trái.
3. Float = LS − ES; tô đậm task có Float = 0.
4. Ghi task gần găng (float ≤ 20% thời lượng) để theo dõi sát.
5. Tính lại mỗi khi có thay đổi lớn hoặc task găng bị trễ.
