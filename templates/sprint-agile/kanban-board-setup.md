**Tên tài liệu:** Thiết lập bảng Kanban — đội bảo trì FoodNow sau go-live
**Dự án:** FoodNow (sau MVP)
**Phiên bản / ngày:** v1.0 — 02/11/2026 (tuần 44)
**Mục đích & khi nào dùng:** Cấu hình cột, WIP limit, chính sách và nhịp họp cho đội làm việc theo dòng chảy (bảo trì, hỗ trợ); dùng khi chuyển từ Scrum sang Kanban.

---

## 1. Bối cảnh

Sau hypercare (kết thúc 30/10/2026), đội MVP thu gọn còn **6 người** (2 Backend, Khoa, QA, Dũng 50%, Hà 30%) làm **bảo trì, sửa lỗi và cải tiến nhỏ**. Việc đến ngẫu nhiên hằng ngày, ưu tiên đổi liên tục → **Kanban** hợp hơn sprint.

## 2. Cột và WIP limit

| Cột | Ý nghĩa | WIP limit | Chính sách vào cột |
|---|---|---|---|
| **Backlog** | Việc chờ (đã phân loại) | Không giới hạn (dọn hằng tuần) | Có mô tả và loại |
| **Sẵn sàng (Ready)** | Đã rõ, xếp theo ưu tiên | 5 | PO/PM xác nhận |
| **Đang làm (In Progress)** | Có người đang làm | **4** (≤ 1 thẻ/người) | Người nhận chủ động kéo |
| **Review/Test** | Chờ review hoặc QA | **3** | PR đã mở; test case sẵn |
| **Chờ triển khai** | Xong, chờ cửa sổ deploy | 3 | Qua QA |
| **Xong (Done)** | Đã deploy production | — | Đã xác minh |

Đường nhanh (**Expedite**): tối đa 1 thẻ cho sự cố production; có thể vượt WIP, nhưng phải xin PM.

## 3. Loại thẻ và SLE

| Loại | Ví dụ | SLE (85% thẻ xong trong…) |
|---|---|---|
| Bug production (Critical/High) | Đơn kẹt, thanh toán lỗi | 2 ngày |
| Bug thường | Hiển thị sai | 5 ngày |
| Cải tiến | Tối ưu truy vấn | 7 ngày |
| Nợ kỹ thuật / tài liệu | Dọn feature flag | 10 ngày |

**SLE** (Service Level Expectation): dự đoán "85% thẻ loại này xong trong N ngày", rút từ dữ liệu cycle time.

## 4. Nhịp và chỉ số

| Nhịp | Nội dung |
|---|---|
| Hằng ngày 09:00 | Họp đứng 10 phút: nhìn bảng từ phải sang trái; chỗ tắc |
| Hằng tuần (thứ Hai) | Ưu tiên lại Backlog; xem Ready |
| Hai tuần | Review số liệu (lead/cycle time, throughput); cải tiến |
| Chỉ số | Lead time, cycle time, throughput, WIP, tuổi thẻ (age) |

## 5. Quy tắc "dừng bắt đầu, bắt đầu hoàn thành"

- Không kéo thẻ mới khi cột đầy WIP; giúp hoàn thành thẻ đang tắc.
- Thẻ đứng yên > 5 ngày phải có người xử lý và ghi lý do.
- Bất kỳ ai cũng có thể dừng dây chuyền bằng cách nêu "thẻ chặn".

---

## Cách dùng cho dự án của bạn

1. Vẽ dòng chảy thực của đội (không phải lý tưởng), đặt tên cột theo trạng thái thực.
2. Đặt WIP limit ban đầu = số người ÷ 1,5 hoặc ít hơn; điều chỉnh sau 2–4 tuần dựa trên tắc nghẽn.
3. Viết chính sách rõ cho từng cột; đưa lên ngay trên bảng.
4. Ghi ngày vào/ra để tính cycle time (xem `flow-metrics.csv`).
5. Sau 4 tuần, đặt SLE từ dữ liệu và tránh đặt trước bằng cảm tính.
