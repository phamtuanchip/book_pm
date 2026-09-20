**Tên tài liệu:** Báo cáo tháng cho SteerCo — FoodNow MVP, tháng 6/2026
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — gửi 24/06/2026 cho họp SteerCo 26/06/2026
**Mục đích & khi nào dùng:** Báo cáo 1–2 trang cho Ban chỉ đạo; nhấn vào quyết định, xu hướng và dự báo; dùng mỗi tháng.

---

## 1. Tóm tắt điều hành

Dự án **🟡 VÀNG** (SPI 0,86 ở tuần 24, đang hồi phục từ 0,82). Go-live **03/10/2026** vẫn khả thi; đường găng (thanh toán) đang chạy theo kế hoạch sau fast-tracking. Ngân sách: chi 1.035 triệu (tuần 24), dự báo **EAC 2.217** (< trần 2.400). Chất lượng ổn (0 Critical mở).

## 2. Xu hướng (4 tuần đo gần nhất)

| Tuần | SPI | CPI | Đèn |
|---|---|---|---|
| T12 | 0,95 | 1,12 | 🟢 |
| T16 | 0,90 | 1,09 | 🟡 |
| T20 | 0,82 | 0,96 | 🔴 |
| T24 | 0,86 | 0,97 | 🟡 |

Xu hướng: phục hồi sau kế hoạch ngày 22/05 (cắt 25 ngày công, thêm 3 nhân sự hợp đồng, rà lịch họp).

## 3. Mốc

| Mốc | Kế hoạch | Dự báo | Đèn |
|---|---|---|---|
| Demo HĐQT | 03/06 | Hoàn tất | ✅ |
| PayEasy chứng nhận | 29/05 | 19/06 (đã nhận) | ✅ |
| Feature complete | 17/07 | 17/07 | 🟢 |
| Scope Freeze | 13/07 | 13/07 | 🟢 |
| UAT bắt đầu | 27/07 | 27/07 | 🟢 |
| **Go-live** | **03/10** | **03/10** | **🟢** |

## 4. Ngân sách

| | Triệu VND |
|---|---|
| BAC (không gồm dự phòng) | 2.140 |
| AC tuần 24 | 1.035 |
| EAC (BAC/CPI) | 2.217 |
| Dự phòng đã dùng | 170 / 256,8 (66%) |
| Trần đã duyệt | 2.400 |

Cảnh báo: dự phòng đã dùng 66% trước Scope Freeze; quy tắc: vượt 50% trước tuần 30 → cắt hạng mục Could (R17).

## 5. Top 3 rủi ro

| # | Rủi ro | Trạng thái | Hành động |
|---|---|---|---|
| 1 | Hiệu năng realtime | Đang theo dõi (p95 2,4 giây) | Tối ưu cache; test tải Sprint 10 |
| 2 | UAT: người dùng thật có đủ? | Đang theo dõi | Đặt lịch với nhà hàng/tài xế |
| 3 | Vượt ngân sách | Theo dõi | Cắt Could nếu cần |

## 6. Quyết định cần SteerCo

1. Xác nhận **Scope Freeze 13/07** và nguyên tắc **không nhận CR lớn** đến go-live.
2. Ghi nhận dùng dự phòng 170 triệu (PayEasy 110 + thay thế nhân sự 60).
3. Chấp thuận kế hoạch UAT 2 vòng (27/07–21/08 và 07–16/09).

## 7. Bài học tháng này

Cắt họp 30%; luật nhánh ≤ 5 ngày; báo cáo tuần viết thay họp trạng thái.

---

## Cách dùng cho dự án của bạn

1. Giữ báo cáo 1–2 trang; đưa biểu đồ xu hướng thay bảng dài.
2. Đưa "quyết định cần" thành phần chính; mỗi quyết định có phương án và khuyến nghị.
3. Nhất quán ngưỡng RAG và định nghĩa số với báo cáo tuần.
4. Gửi ≥ 2 ngày trước họp.
5. Sau họp, cập nhật Decision Log và Action Item Log.
