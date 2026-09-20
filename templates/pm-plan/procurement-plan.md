**Tên tài liệu:** Kế hoạch mua sắm (Procurement Plan) — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/03/2026 (thêm phụ lục contingency 21/04/2026)
**Mục đích & khi nào dùng:** Quyết định mua gì, từ ai, loại hợp đồng nào, tiêu chí chấp nhận, cách quản lý vendor và kế hoạch dự phòng; dùng khi dự án có phụ thuộc bên ngoài đáng kể.

---

## 1. Quyết định make / buy / SaaS

| Hạng mục | Quyết định | Lý do |
|---|---|---|
| Cổng thanh toán thẻ | **Buy (SaaS/tích hợp) — PayEasy** | Tuân thủ và chứng nhận không nên tự làm; điểm scorecard 3,95 |
| SMS OTP | **Buy** — 2 nhà cung cấp (chính + dự phòng) | Rẻ, tiêu chuẩn |
| Bản đồ và định tuyến | **Buy (API)** | Tự xây không hợp lý |
| Kiểm thử xâm nhập bảo mật | **Buy (dịch vụ)** | Cần bên độc lập |
| Hạ tầng cloud | **Buy (thuê)** | Linh hoạt |
| Ứng dụng lõi | **Make (BrightSoft)** | Là sản phẩm của dự án |

## 2. Danh mục mua sắm

| # | Hạng mục | Vendor | Loại hợp đồng | Giá trị (triệu) | Thời hạn | Người phụ trách |
|---|---|---|---|---|---|---|
| P1 | Tích hợp + chứng nhận thanh toán | PayEasy | Fixed-price (phí tích hợp) + phí giao dịch % | 60 | Sandbox 27/03; chứng nhận 29/05 | Hà, Dũng |
| P2 | SMS OTP | Nhà cung cấp SMS A (chính), B (dự phòng) | T&M theo lưu lượng | 24 | Cả dự án | Dũng |
| P3 | Bản đồ | Nhà cung cấp Maps | Pay-as-you-go | 30 | Cả dự án | Ánh |
| P4 | Pentest | Đơn vị bảo mật bên ngoài | Fixed-price | 45 | Tuần 27–28 | Nam |

## 3. Ưu/nhược các loại hợp đồng (góc PM)

| Loại | Ưu | Nhược | Dùng khi |
|---|---|---|---|
| **Fixed-price** | Chi phí rõ; rủi ro chuyển cho vendor | Cứng khi đổi phạm vi; vendor có thể "cắt xén" | Phạm vi rõ (pentest, tích hợp chuẩn) |
| **T&M** | Linh hoạt | Khó dự báo tổng chi phí | Phạm vi chưa rõ |
| **Cost-plus** | Minh bạch chi phí | Ít động lực tiết kiệm | Dự án nghiên cứu |
| **Dedicated team** | Đội ổn định | Phụ thuộc, khó thoát | Dài hạn, Agile |

## 4. SLA và điều khoản chấp nhận (PayEasy)

| Nội dung | Cam kết |
|---|---|
| Tỷ lệ giao dịch thành công (uptime) | ≥ 99,5% mỗi tháng |
| Phản hồi hỗ trợ | Critical: 1 giờ; High: 4 giờ; khác: 1 ngày làm việc |
| Thời hạn chứng nhận | 25 ngày làm việc kể từ khi nộp hồ sơ đầy đủ |
| Phạt trễ chứng nhận | 0,5% phí tích hợp/tuần trễ, tối đa 5% (≈ 3 triệu) — **rất nhỏ so với thiệt hại**; do vậy không dựa vào phạt |
| Chấp nhận | Kiểm thử sandbox pass 100% kịch bản; chứng nhận cấp; báo cáo bảo mật |
| Chấm dứt | 30 ngày báo trước; hoàn tất bàn giao dữ liệu |

## 5. Quản lý vendor hằng tuần

- Họp đồng bộ 30 phút mỗi thứ Ba (Hà, Dũng, Ánh, Yến); log **ngày hứa** trong RAID.
- Chấm điểm vận hành hằng tháng bằng `vendor-scorecard.csv` (tiến độ, chất lượng, giao tiếp).
- Leo thang: 1 ngày không phản hồi → PM; 3 ngày → Sponsor; 5 ngày → lãnh đạo vendor.

## 6. Phụ thuộc bên ngoài và kế hoạch dự phòng

| Phụ thuộc | Ngày cần | Rủi ro | Kế hoạch dự phòng |
|---|---|---|---|
| Sandbox PayEasy | 27/03 | Trễ | Dùng mock nội bộ để dev tiếp |
| Chứng nhận PayEasy | 29/05 | **Trễ** | Fast-tracking + crashing; nhờ Sponsor leo thang; **hoặc** ra mắt với COD trước |
| App Store review | Trước rc.1 | Bị từ chối | Submit beta sớm; Android trước |
| SMS | Đăng nhập | Lỗi | Chuyển nhà cung cấp B |

## 7. Phụ lục — Kích hoạt contingency PayEasy (21/04/2026)

- Sự kiện: PayEasy báo trễ chứng nhận 3 tuần (mới hứa 19/06).
- Hành động: (1) Sponsor gọi lãnh đạo PayEasy; (2) **fast-tracking**: làm thanh toán end-to-end trên sandbox từ 01/06, chỉ chuyển sang credential thật khi có chứng nhận; (3) **crashing**: 2 Dev hợp đồng + 1 QA hợp đồng trong 4 tuần (≈ 110 triệu từ dự phòng); (4) cập nhật RAID (D-02, I-006), lịch, ngân sách.
- Kết quả dự kiến: đường găng không dời; go-live giữ 03/10/2026.

---

## Cách dùng cho dự án của bạn

1. Lập bảng make/buy/SaaS với lý do; tránh tự xây thứ có dịch vụ chuẩn.
2. Với mỗi vendor, ghi loại hợp đồng, giá trị, mốc, người phụ trách.
3. Viết SLA và tiêu chí chấp nhận **đo được**; kiểm tra phạt có đủ để bù thiệt hại không.
4. Lập nhịp họp và quy tắc leo thang với vendor.
5. Viết kế hoạch dự phòng cho mọi phụ thuộc nằm trên hoặc gần đường găng.
