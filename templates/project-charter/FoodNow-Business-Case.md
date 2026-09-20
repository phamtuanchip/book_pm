**Tên tài liệu:** Business Case — Ứng dụng đặt và giao đồ ăn FoodNow (MVP)
**Dự án:** FoodNow MVP — FoodNow JSC & BrightSoft
**Phiên bản / ngày:** v1.0 — 10/12/2025 (bản trình Hội đồng quản trị FoodNow)
**Mục đích & khi nào dùng:** Chứng minh dự án đáng đầu tư trước khi ký Charter; dùng ở giai đoạn khởi động và khi cần bảo vệ ngân sách.

---

## 1. Vấn đề và cơ hội

- **Vấn đề:** FoodNow đang nhận đơn qua app bên thứ ba. Phí nền tảng cao, không sở hữu dữ liệu khách hàng, không tự làm được khuyến mãi và trải nghiệm riêng.
- **Cơ hội:** Có app riêng cho khách hàng, nhà hàng, tài xế và trang Admin để tự chủ dữ liệu, giảm phí trung gian và xây thương hiệu.
- **Thời điểm:** Hội đồng quản trị cần quyết định ngân sách trong tháng 12/2025 để bắt đầu 05/01/2026.

## 2. Các phương án

| Phương án | Mô tả | Chi phí/đầu tư | Lợi ích | Rủi ro | Kết luận |
|---|---|---|---|---|---|
| **A. Không làm gì** | Tiếp tục dùng app bên thứ ba | Không đầu tư; phí nền tảng tiếp tục | Không rủi ro triển khai | Mất dữ liệu khách; biên lợi nhuận thấp; phụ thuộc | Loại |
| **B. Mua SaaS white-label** | Thuê nền tảng đóng gói sẵn | Trả phí thuê hằng tháng | Ra mắt nhanh | Tuỳ biến hạn chế; phụ thuộc nhà cung cấp; phí lâu dài | Loại (không đáp ứng luồng riêng) |
| **C. Thuê BrightSoft xây riêng (MVP → R1 → R2)** | Hợp đồng Hybrid | **2,4 tỷ VND cho MVP** (gồm 12% dự phòng) | Sở hữu sản phẩm, dữ liệu; mở rộng theo lộ trình | Rủi ro tiến độ, tích hợp thanh toán | **Chọn** |

## 3. Chi phí – lợi ích (giả định nêu rõ)

**Giả định kinh doanh (do FoodNow cung cấp, cần kiểm chứng sau go-live):**

- Giá trị đơn trung bình: 165.000 VND; phí nền tảng thu bình quân 15% → **biên đóng góp ≈ 25.000 VND/đơn** (đã làm tròn).
- Mục tiêu ổn định: **500 đơn/ngày** sau 3 tháng go-live; 3 tháng đầu trung bình 250 đơn/ngày.
- **Chi phí vận hành hằng tháng sau go-live:** 95 triệu VND (hạ tầng, license, bảo trì, hỗ trợ khách hàng).

**Tính toán:**

| Chỉ tiêu | Công thức | Kết quả |
|---|---|---|
| Đóng góp/tháng ở 500 đơn/ngày | 500 × 25.000 × 30 | 375 triệu |
| Lợi nhuận ròng vận hành/tháng (ổn định) | 375 − 95 | **280 triệu** |
| Tháng 1–3 sau go-live (250 đơn/ngày) | (250 × 25.000 × 30) − 95 = 187,5 − 95 = 92,5/tháng × 3 | 277,5 triệu |
| Số tháng còn lại để hoàn vốn | (2.400 − 277,5) ÷ 280 | ≈ 7,6 tháng |
| **Payback (tính từ go-live)** | 3 + 7,6 | **≈ 10,6 tháng** (mục tiêu < 18 tháng) |
| ROI 24 tháng sau go-live | (277,5 + 21 × 280 − 2.400) ÷ 2.400 | **≈ 157%** |

**Phân tích độ nhạy:** nếu chỉ đạt 350 đơn/ngày ổn định, lợi nhuận ròng ≈ 262,5 − 95 = 167,5 triệu/tháng; payback kéo dài ≈ 15,7 tháng (3 tháng đầu + phần còn lại), vẫn dưới 18 tháng. Nếu chỉ đạt 250 đơn/ngày, lợi nhuận chỉ 92,5 triệu/tháng và payback ≈ 26 tháng → **đây là kịch bản dự án không đạt mục tiêu**.

## 4. Chi phí đầu tư MVP (tóm tắt)

| Hạng mục | Tỷ trọng | Số tiền (tỷ VND) |
|---|---|---|
| Nhân sự | 78% | 1,67 |
| Hạ tầng & license | 9% | 0,19 |
| Vendor (thanh toán, SMS, bản đồ) | 6% | 0,13 |
| Đào tạo & khác | 7% | 0,15 |
| **Chi phí kế hoạch** | 100% | **2,14** |
| Dự phòng 12% | | 0,26 |
| **Tổng ngân sách MVP** | | **2,40** |

(Tổng làm tròn; chi tiết trong `FoodNow-Budget.csv`, Ch14.)

## 5. Tiêu chí thành công (đo được)

| Cấp | Chỉ tiêu | Thời điểm đo |
|---|---|---|
| Kinh doanh | 500 đơn/ngày; payback < 18 tháng | 3 tháng sau go-live |
| Sản phẩm | Tỷ lệ huỷ đơn < 5%; thời gian giao TB < 35 phút | 3 tháng sau go-live |
| Dự án | Go-live 03/10/2026; chi tiêu ≤ 2,4 tỷ; không còn bug Critical/High khi go-live | Go-live |

## 6. Rủi ro cấp cao

| # | Rủi ro | Ảnh hưởng |
|---|---|---|
| 1 | Tích hợp cổng thanh toán (PayEasy) chậm hoặc trễ chứng nhận | Trễ go-live |
| 2 | Yêu cầu thay đổi liên tục từ Sponsor | Vượt ngân sách/lịch |
| 3 | Thiếu nhân sự (thiếu 1 Backend) | Trễ lịch |
| 4 | Số đơn không đạt mục tiêu | Không hoàn vốn |

## 7. Khuyến nghị

Chọn **phương án C**. Đề nghị Hội đồng quản trị phê duyệt ngân sách MVP 2,4 tỷ VND (gồm dự phòng 12%) và cho phép ký Project Charter. Việc đầu tư R1 và R2 sẽ quyết định sau khi có số liệu 3 tháng sau go-live.

---

## Cách dùng cho dự án của bạn

1. Nêu vấn đề và cơ hội trong 3–5 dòng; tránh mô tả giải pháp trước.
2. Luôn có phương án "không làm gì" và ít nhất một phương án thay thế.
3. Ghi **giả định** rõ ràng cho từng con số lợi ích và nói ai chịu trách nhiệm kiểm chứng.
4. Tính payback và ROI bằng công thức viết ra; thêm phân tích độ nhạy (kịch bản xấu).
5. Kết bằng khuyến nghị và quyết định cần Sponsor/HĐQT thông qua.
