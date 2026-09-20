**Tên tài liệu:** Kế hoạch đo lợi ích (Benefits Realization Plan) — FoodNow MVP
**Dự án:** FoodNow MVP (sau go-live)
**Phiên bản / ngày:** v1.0 — 02/11/2026; cập nhật kết quả 05/01/2027 (3 tháng sau go-live)
**Mục đích & khi nào dùng:** Định nghĩa lợi ích cần đo, cách đo, người chịu trách nhiệm và hành động khi lệch; dùng ngay khi đóng dự án để lợi ích không "bốc hơi".

---

## 1. Lợi ích và KPI

| # | Lợi ích | KPI | Baseline | Mục tiêu (Business Case) | Nguồn dữ liệu | Owner |
|---|---|---|---|---|---|---|
| B1 | Doanh số kênh riêng | Đơn/ngày | 0 (chưa có kênh riêng) | **500 sau 3 tháng** | Admin/DB | Châu |
| B2 | Chất lượng đơn | Tỷ lệ huỷ đơn | — | **< 5%** | Admin | Huy |
| B3 | Trải nghiệm giao | Thời gian giao TB | — | **< 35 phút** | Log tài xế | Châu |
| B4 | Hoàn vốn | Payback | — | **< 18 tháng** kể từ go-live | Tài chính | Bảo |
| B5 | Giảm phụ thuộc | Tỷ trọng đơn qua kênh riêng | 0% | Theo dõi | Admin | Bảo |
| B6 | Vận hành | Ticket CS/100 đơn | — | Theo dõi, xu hướng giảm | Hệ thống hỗ trợ | Huy |

## 2. Lịch đo

| Mốc | Thời điểm | Người báo cáo | Hình thức |
|---|---|---|---|
| 1 tháng | 03/11/2026 | Châu | Báo cáo 1 trang |
| 3 tháng | 03/01/2027 (báo cáo 05/01) | Châu, Hà | Báo cáo + họp Sponsor |
| 6 tháng | 03/04/2027 | Châu | Báo cáo SteerCo |
| 12 tháng | 03/10/2027 | Bảo | Tổng kết với HĐQT |

## 3. Kết quả 3 tháng (05/01/2027)

| KPI | Mục tiêu | Thực tế | Đánh giá |
|---|---|---|---|
| Đơn/ngày (run-rate) | 500 | **430** (85%) | 🟡 |
| Tỷ lệ huỷ đơn | < 5% | **6%** | 🔴 |
| Thời gian giao TB | < 35 phút | 33 phút | 🟢 |
| Payback dự báo | < 18 tháng | ≈ 11,9 tháng từ go-live | 🟢 |

Cách tính payback thực tế: chi thực 2.310 triệu; lợi nhuận ròng tháng 1–3 ≈ 285 triệu (2,5 + 100 + 182,5); run-rate 430 đơn/ngày × 25.000 × 30 − 95 = **227,5 triệu/tháng**; số tháng còn lại (2.310 − 285) ÷ 227,5 ≈ 8,9 → **≈ 11,9 tháng** (kế hoạch 10,6).

**Nguyên nhân huỷ đơn 6%:** nhà hàng hết món 45%, tài xế không nhận kịp 25%, khách đổi ý 20%, khác 10%.

## 4. Hành động điều chỉnh (đưa vào R1)

| # | Hành động | Liên kết |
|---|---|---|
| 1 | Ưu tiên tính năng "món tạm hết" và cảnh báo realtime cho nhà hàng | R1, R-14 |
| 2 | Cải thiện ghép tài xế (thuật toán v2 đã thử ở flag) | FF-05 |
| 3 | Khuyến mãi để đẩy đơn (đạt 500) | R1, R-12 |
| 4 | Điều chỉnh mục tiêu R1: huỷ < 5% ổn định; đơn 600/ngày sau 6 tháng | Roadmap v1.2 |

---

## Cách dùng cho dự án của bạn

1. Lấy KPI từ Business Case; thêm baseline, nguồn dữ liệu và owner cho từng KPI.
2. Đặt lịch đo (1/3/6/12 tháng) ngay trước khi đóng dự án.
3. Gán người chịu trách nhiệm sau dự án (không phải PM đã rời).
4. Khi lệch, lập hành động điều chỉnh và cập nhật roadmap.
5. Dùng kết quả để cập nhật giả định của Business Case (hiệu chỉnh cho dự án sau).
