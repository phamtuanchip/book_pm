**Tên tài liệu:** Báo cáo trạng thái tuần — FoodNow MVP, tuần 20
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — gửi thứ Sáu 22/05/2026, 15:00 (người gửi: Hà)
**Mục đích & khi nào dùng:** Báo cáo 1 trang cho Sponsor/PO: trạng thái (RAG), thành tựu, kế hoạch tuần sau, rủi ro/vấn đề top 3, quyết định cần, chỉ số; dùng mỗi tuần.

---

## 1. Tóm tắt (3 dòng)

**Tổng thể: 🔴 ĐỎ (lịch).** SPI = 0,82 (tuần 12: 0,95 → tuần 16: 0,90 → tuần 20: 0,82). Go-live 03/10 **chưa bị đe doạ** ở đường găng (thanh toán) nhưng nhánh phát triển chậm khoảng 3,5 tuần công. **Cần quyết định hôm nay:** cắt 2 hạng mục sang R1 (25 ngày công) và xác nhận dùng dự phòng cho 3 nhân sự hợp đồng.

## 2. RAG theo chiều

| Chiều | Đèn | Số liệu | Ghi chú |
|---|---|---|---|
| Lịch | 🔴 | SPI 0,82; SV −173 triệu | Sprint 1–2 chậm, Sơn nghỉ (T14), conflict nhánh (Sprint 6) |
| Chi phí | 🟢 (sát ngưỡng) | CPI 0,96; AC 825; EAC 2.238 (VAC −98) | Chi thấp do thiếu người, không phải tiết kiệm |
| Phạm vi | 🟡 | 25 ngày công đề xuất cắt sang R1 | Không đổi mục tiêu |
| Chất lượng | 🟢 | 0 Critical mở; 4 High; coverage thanh toán 87% | |
| Rủi ro | 🟡 | 2 rủi ro đỏ đã xảy ra | PayEasy trễ; nhân sự |

Ngưỡng RAG: xanh ≥ 0,95; vàng 0,85–< 0,95; đỏ < 0,85 (SPI/CPI).

## 3. Thành tựu tuần này (Sprint 7 kết thúc, tag `v0.7.0`)

- Điều hướng tài xế và cập nhật trạng thái giao (FN-118) đạt DoD; demo cho Châu.
- Theo dõi đơn thời gian thực: spike hiệu năng đạt p95 < 3 giây (mục tiêu 2 giây; tiếp tục).
- Kiểm thử tự động mở rộng: 68% coverage (mục tiêu 70%).

## 4. Kế hoạch tuần sau (25/05–29/05, Sprint 8)

- Sprint Goal: khách huỷ đơn và thanh toán thẻ (sandbox) chạy end-to-end.
- Chuẩn bị 3 nhân sự hợp đồng vào 01/06 (onboarding 5 ngày).
- Họp vendor PayEasy 26/05; cập nhật chứng nhận (mới hứa 19/06).

## 5. Top 3 rủi ro/vấn đề

| # | Loại | Nội dung | Tác động | Hành động | Owner |
|---|---|---|---|---|---|
| 1 | Issue I-006 | PayEasy trễ chứng nhận 3 tuần (19/06) | Đường găng | Fast-tracking đã áp dụng; leo thang | Hà |
| 2 | Issue I-004 | Mất Backend senior (Sơn) | Velocity, bus factor | Bench full-time; pair | Dũng |
| 3 | Risk R05 | Hiệu năng realtime | UX | Test tải mỗi sprint | Dũng |

## 6. Quyết định cần từ Sponsor

| # | Quyết định | Phương án | Khuyến nghị | Hạn |
|---|---|---|---|---|
| 1 | Cắt sang R1: báo cáo doanh thu nhà hàng (3.2.4) và "đặt lại" | A cắt; B giữ và trễ ~1 tuần | **A** | 22/05 |
| 2 | Dùng dự phòng ≈ 110 triệu cho 2 Dev + 1 QA hợp đồng 4 tuần | A đồng ý; B không (trễ thêm) | **A** (trong ngưỡng 5%, xin ghi nhận) | 22/05 |

## 7. Chỉ số

| Chỉ số | Giá trị |
|---|---|
| Velocity Sprint 7 | 31 SP (trung bình 3 sprint: 32,3) |
| Bug mở (Critical/High/Medium) | 0 / 4 / 17 |
| Dự phòng đã dùng | 110 / 256,8 triệu (43%) |
| Ngân sách đã chi | 825 triệu (baseline chi 2.140) |

---

## Cách dùng cho dự án của bạn

1. Giữ 1 trang; đặt "quyết định cần" ở trên nửa đầu.
2. Dùng ngưỡng số cho RAG và lấy số liệu từ hệ thống.
3. Mỗi rủi ro/vấn đề có owner và hành động; chỉ top 3.
4. Gửi đúng giờ cố định; không bất ngờ so với cuộc họp Sponsor.
5. Lưu bản báo cáo để so sánh xu hướng ("xanh → vàng → đỏ") trong SteerCo.
