**Tên tài liệu:** Project Charter — FoodNow MVP
**Dự án:** FoodNow MVP — FoodNow JSC & BrightSoft
**Phiên bản / ngày:** v1.0 — ký ngày 15/12/2025
**Mục đích & khi nào dùng:** Văn bản chính thức khởi động dự án, trao quyền cho PM và chốt mục tiêu, ràng buộc; dùng ngay sau khi Business Case được duyệt.

---

## 1. Mục đích dự án

Xây dựng hệ thống đặt và giao đồ ăn FoodNow gồm 3 ứng dụng và trang Admin để FoodNow tự vận hành kênh bán hàng, sở hữu dữ liệu khách hàng và giảm phụ thuộc phí nền tảng bên thứ ba. (Liên kết: Business Case v1.0, 10/12/2025.)

## 2. Mục tiêu SMART

| # | Mục tiêu | Đo bằng | Hạn |
|---|---|---|---|
| 1 | Go-live MVP đủ 3 app + Admin + thanh toán thẻ và COD | Hệ thống chạy production, đã qua UAT | **Thứ Bảy 03/10/2026** |
| 2 | Không vượt ngân sách MVP | Chi thực tế ≤ 2,4 tỷ VND (gồm dự phòng 12%) | Đến khi đóng dự án |
| 3 | Chất lượng khi go-live | Không còn bug Critical/High; luồng thanh toán qua kiểm thử đầy đủ | Go-live |
| 4 | Đạt mục tiêu kinh doanh | 500 đơn/ngày; huỷ đơn < 5%; giao TB < 35 phút | 3 tháng sau go-live |
| 5 | Hoàn vốn | Payback < 18 tháng | Theo dõi hằng quý |

## 3. Ràng buộc ưu tiên

**Scope: linh hoạt (cắt để giữ mốc) · Time: cố định (03/10/2026) · Cost: trần 2,4 tỷ · Quality: bất khả nhượng ở luồng thanh toán.**

## 4. Phạm vi sơ bộ

| In-scope (MVP) | Out-of-scope (MVP) |
|---|---|
| App Khách hàng iOS/Android: tìm món, giỏ hàng, đặt đơn, theo dõi, lịch sử | Khuyến mãi, mã giảm giá, đánh giá món (R1) |
| App Nhà hàng (web tablet): nhận đơn, xác nhận, cập nhật trạng thái, quản lý thực đơn | Ví điện tử, đặt món theo nhóm (R2) |
| App Tài xế (Android): nhận chuyến, định vị, hoàn tất | App Tài xế iOS |
| Admin web: quản lý người dùng, nhà hàng, đơn, báo cáo cơ bản | Báo cáo BI nâng cao |
| Thanh toán thẻ (PayEasy) và COD; SMS OTP; bản đồ | Đa ngôn ngữ, đa thành phố |

## 5. Deliverable chính

Bản phát hành MVP đã qua UAT; tài liệu vận hành; bộ kiểm thử; hạ tầng production; đào tạo người dùng; báo cáo đóng dự án.

## 6. Mốc chính

| Mốc | Ngày dự kiến |
|---|---|
| Ký Charter | 15/12/2025 |
| Kickoff | 05/01/2026 |
| Chốt phạm vi MVP (Scope Freeze) | Tuần 28 (13/07/2026) |
| Bắt đầu UAT | Tuần 30 (27/07/2026) |
| **Go-live** | **03/10/2026** |
| Kết thúc hypercare | Tuần 43 (30/10/2026) |
| Đóng dự án | Tuần 44 (02/11/2026) |

## 7. Ngân sách sơ bộ

Chi phí kế hoạch **2,14 tỷ VND** + dự phòng 12% (**≈ 0,26 tỷ**) = **2,4 tỷ VND**. Nhân sự 78%, hạ tầng & license 9%, vendor 6%, đào tạo & khác 7% (tính trên chi phí kế hoạch).

## 8. Giả định và ràng buộc

**Giả định:** Đội 12 người sẵn sàng từ 05/01/2026 · Khách cung cấp API dữ liệu nhà hàng đúng hạn · PayEasy hoàn tất chứng nhận theo lịch · Sponsor và PO có mặt để quyết định trong 2 ngày làm việc.
**Ràng buộc:** Ngân sách trần 2,4 tỷ · Go-live không sau 03/10/2026 (chiến dịch marketing đã lên kế hoạch) · Tuân thủ quy định bảo vệ dữ liệu cá nhân · Hợp đồng Hybrid: khung fixed-price theo giai đoạn + CR theo T&M.

## 9. Rủi ro cấp cao

| # | Rủi ro | Xác suất | Tác động |
|---|---|---|---|
| 1 | PayEasy trễ chứng nhận/tích hợp | Trung bình | Cao |
| 2 | Sponsor thay đổi/thêm yêu cầu liên tục | Cao | Trung bình |
| 3 | Thiếu 1 Backend ở giai đoạn đầu | Cao | Trung bình |
| 4 | PO thiếu thời gian, quyết định chậm | Trung bình | Trung bình |

## 10. Stakeholder chính

Trần Quốc Bảo (Sponsor/CEO) · Lê Minh Châu (PO) · Nguyễn Thu Hà (PM) · Phạm Đức Dũng (Tech Lead) · Vũ Thị Lan (BA) · Đỗ Hoàng Nam (QA Lead) · PayEasy (vendor thanh toán).

## 11. Quyền hạn của PM

Nguyễn Thu Hà được: (1) điều phối đội dự án và phân bổ công việc trong phạm vi ngân sách; (2) duyệt thay đổi nhỏ trong phạm vi, không ảnh hưởng mốc và ngân sách; (3) sử dụng dự phòng đến **5% ngân sách** (≈ 0,12 tỷ) mà không cần xin phê duyệt riêng, báo cáo sau; (4) leo thang trực tiếp đến Sponsor. Các thay đổi phạm vi, lịch hoặc dự phòng vượt mức này cần Sponsor phê duyệt.

## 12. Chữ ký

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| Sponsor | Trần Quốc Bảo | | 15/12/2025 |
| Project Manager | Nguyễn Thu Hà | | 15/12/2025 |
| Đại diện BrightSoft | (Giám đốc dự án BrightSoft) | | 15/12/2025 |

---

## Cách dùng cho dự án của bạn

1. Copy cấu trúc mục 1–12; điền mục tiêu SMART và ràng buộc ưu tiên trước, phần còn lại sau.
2. Ghi rõ in-scope/out-of-scope ở mức sơ bộ; chi tiết để dành cho Scope Statement.
3. Viết quyền hạn của PM bằng ngưỡng cụ thể (tiền, ngày), không nói chung chung.
4. Giữ Charter tối đa 2–3 trang; nếu dài hơn, bạn đang viết kế hoạch chứ không phải Charter.
5. Gửi Sponsor ký; lưu bản đã ký làm nguồn tham chiếu khi có tranh cãi.
