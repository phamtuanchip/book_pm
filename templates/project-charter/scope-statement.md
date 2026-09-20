**Tên tài liệu:** Scope Statement — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.1 — 13/02/2026 (v1.0 ngày 06/02/2026)
**Mục đích & khi nào dùng:** Chốt ranh giới phạm vi làm căn cứ cho WBS, ước lượng và change control; dùng sau Charter, trước khi lập WBS.

---

## 1. Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi | Người duyệt |
|---|---|---|---|
| v1.0 | 06/02/2026 | Bản đầu, ví điện tử "in-scope có điều kiện" | Bảo, Châu |
| **v1.1** | **13/02/2026** | Chuyển **thanh toán ví điện tử → Release 2** để giữ mốc 03/10/2026 (thoả thuận tuần 6) | Bảo, Châu, Hà |

## 2. Mô tả phạm vi sản phẩm (product scope)

Hệ thống đặt và giao đồ ăn cho khu vực nội thành Hà Nội gồm 3 ứng dụng, Admin web và các tích hợp bên thứ ba, phục vụ 3 loại người dùng: khách hàng, nhà hàng, tài xế.

## 3. Trong phạm vi (In-scope)

| # | Epic | Mô tả ngắn | Người dùng |
|---|---|---|---|
| E1 | Đăng ký/đăng nhập | Số điện thoại + OTP SMS | Khách, tài xế |
| E2 | Duyệt và tìm món | Danh sách nhà hàng, thực đơn, tìm kiếm | Khách |
| E3 | Giỏ hàng và đặt đơn | Tạo đơn, ghi chú, địa chỉ | Khách |
| E4 | Thanh toán thẻ và COD | Thẻ qua PayEasy; tiền mặt khi nhận | Khách |
| E5 | Nhận và xử lý đơn (nhà hàng) | Nhận, xác nhận/từ chối, cập nhật trạng thái | Nhà hàng |
| E6 | Quản lý thực đơn | Thêm/sửa món, giá, tình trạng còn hàng | Nhà hàng |
| E7 | Nhận chuyến và giao hàng | Ghép đơn, định vị, hoàn tất | Tài xế |
| E8 | Theo dõi đơn thời gian thực | Bản đồ, trạng thái | Khách |
| E9 | Lịch sử đơn | Xem, đặt lại | Khách |
| E10 | Admin | Người dùng, nhà hàng, đơn, báo cáo cơ bản | Admin |
| E11 | Thông báo | Push/SMS theo trạng thái đơn | Tất cả |

## 4. Ngoài phạm vi (Out-of-scope, tường minh)

| # | Hạng mục | Lý do | Dự kiến |
|---|---|---|---|
| O1 | Thanh toán ví điện tử | Giữ mốc go-live; phụ thuộc thêm vendor | R2 |
| O2 | Đặt món theo nhóm | Phức tạp, chưa cần cho MVP | R2 |
| O3 | Khuyến mãi, mã giảm giá | Giá trị tốt nhưng không chặn ra mắt | R1 |
| O4 | Đánh giá và xếp hạng món | Không chặn ra mắt | R1 |
| O5 | App Tài xế iOS | Nhóm tài xế thử nghiệm dùng Android | Chưa lên lịch |
| O6 | Đa thành phố, đa ngôn ngữ | Ngoài mục tiêu MVP | Chưa lên lịch |
| O7 | Báo cáo BI nâng cao | Báo cáo cơ bản đủ cho MVP | R1+ |

## 5. Deliverable và tiêu chí chấp nhận

| Deliverable | Tiêu chí chấp nhận | Người nghiệm thu |
|---|---|---|
| 3 app + Admin đã triển khai production | Qua UAT; không còn bug Critical/High | Châu, Bảo |
| Tích hợp thanh toán thẻ | Giao dịch thành công/thất bại/hoàn tiền đúng; qua kiểm thử bảo mật cơ bản | Nam, Yến |
| Tài liệu vận hành và runbook | Đội hỗ trợ tự xử lý được 10 tình huống mẫu | Huy |
| Đào tạo người dùng | ≥ 90% nhà hàng và tài xế thử nghiệm hoàn tất đào tạo | Lan |

## 6. Giả định và ràng buộc

- Giả định: PayEasy hoàn tất chứng nhận theo lịch; khách cung cấp dữ liệu nhà hàng đúng hạn; đội đủ 12 người sau Sprint 0.
- Ràng buộc: go-live 03/10/2026; ngân sách 2,4 tỷ; tuân thủ bảo vệ dữ liệu cá nhân.

## 7. Cơ chế thay đổi phạm vi

Thay đổi ngoài bảng in-scope đi qua **Change Request** (Ch20): đánh giá tác động scope/time/cost/risk/quality → Sponsor duyệt → cập nhật baseline. Thay đổi trong epic (chi tiết story) điều chỉnh qua backlog bởi PO.

---

## Cách dùng cho dự án của bạn

1. Liệt kê epic in-scope trước, sau đó **liệt kê tường minh** ít nhất 5 mục out-of-scope kèm lý do.
2. Với mỗi deliverable, viết tiêu chí chấp nhận có thể kiểm tra được và ghi người nghiệm thu.
3. Ghi phiên bản và người duyệt; mọi thay đổi phải nâng phiên bản.
4. Gửi Sponsor/PO duyệt bằng email và lưu dấu vết.
5. Dùng bảng này làm đầu vào cho WBS (Ch10) và Change Request (Ch20).
