# Phụ lục B — Mẫu Project Charter + Business Case đầy đủ (FoodNow)

Bản in từ `templates/project-charter/`. Dùng làm điểm khởi đầu cho dự án của bạn; đọc kèm Ch05, Ch07, Ch08.

## B.1 Business Case

📎 Nguồn: `templates/project-charter/FoodNow-Business-Case.md`

**Tên tài liệu:** Business Case — Ứng dụng đặt và giao đồ ăn FoodNow (MVP)
**Dự án:** FoodNow MVP — FoodNow JSC & BrightSoft
**Phiên bản / ngày:** v1.0 — 10/12/2025 (bản trình Hội đồng quản trị FoodNow)
**Mục đích & khi nào dùng:** Chứng minh dự án đáng đầu tư trước khi ký Charter; dùng ở giai đoạn khởi động và khi cần bảo vệ ngân sách.

---

#### 1. Vấn đề và cơ hội

- **Vấn đề:** FoodNow đang nhận đơn qua app bên thứ ba. Phí nền tảng cao, không sở hữu dữ liệu khách hàng, không tự làm được khuyến mãi và trải nghiệm riêng.
- **Cơ hội:** Có app riêng cho khách hàng, nhà hàng, tài xế và trang Admin để tự chủ dữ liệu, giảm phí trung gian và xây thương hiệu.
- **Thời điểm:** Hội đồng quản trị cần quyết định ngân sách trong tháng 12/2025 để bắt đầu 05/01/2026.

#### 2. Các phương án

| Phương án | Mô tả | Chi phí/đầu tư | Lợi ích | Rủi ro | Kết luận |
|---|---|---|---|---|---|
| **A. Không làm gì** | Tiếp tục dùng app bên thứ ba | Không đầu tư; phí nền tảng tiếp tục | Không rủi ro triển khai | Mất dữ liệu khách; biên lợi nhuận thấp; phụ thuộc | Loại |
| **B. Mua SaaS white-label** | Thuê nền tảng đóng gói sẵn | Trả phí thuê hằng tháng | Ra mắt nhanh | Tuỳ biến hạn chế; phụ thuộc nhà cung cấp; phí lâu dài | Loại (không đáp ứng luồng riêng) |
| **C. Thuê BrightSoft xây riêng (MVP → R1 → R2)** | Hợp đồng Hybrid | **2,4 tỷ VND cho MVP** (gồm 12% dự phòng) | Sở hữu sản phẩm, dữ liệu; mở rộng theo lộ trình | Rủi ro tiến độ, tích hợp thanh toán | **Chọn** |

#### 3. Chi phí – lợi ích (giả định nêu rõ)

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

#### 4. Chi phí đầu tư MVP (tóm tắt)

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

#### 5. Tiêu chí thành công (đo được)

| Cấp | Chỉ tiêu | Thời điểm đo |
|---|---|---|
| Kinh doanh | 500 đơn/ngày; payback < 18 tháng | 3 tháng sau go-live |
| Sản phẩm | Tỷ lệ huỷ đơn < 5%; thời gian giao TB < 35 phút | 3 tháng sau go-live |
| Dự án | Go-live 03/10/2026; chi tiêu ≤ 2,4 tỷ; không còn bug Critical/High khi go-live | Go-live |

#### 6. Rủi ro cấp cao

| # | Rủi ro | Ảnh hưởng |
|---|---|---|
| 1 | Tích hợp cổng thanh toán (PayEasy) chậm hoặc trễ chứng nhận | Trễ go-live |
| 2 | Yêu cầu thay đổi liên tục từ Sponsor | Vượt ngân sách/lịch |
| 3 | Thiếu nhân sự (thiếu 1 Backend) | Trễ lịch |
| 4 | Số đơn không đạt mục tiêu | Không hoàn vốn |

#### 7. Khuyến nghị

Chọn **phương án C**. Đề nghị Hội đồng quản trị phê duyệt ngân sách MVP 2,4 tỷ VND (gồm dự phòng 12%) và cho phép ký Project Charter. Việc đầu tư R1 và R2 sẽ quyết định sau khi có số liệu 3 tháng sau go-live.

---

#### Cách dùng cho dự án của bạn

1. Nêu vấn đề và cơ hội trong 3–5 dòng; tránh mô tả giải pháp trước.
2. Luôn có phương án "không làm gì" và ít nhất một phương án thay thế.
3. Ghi **giả định** rõ ràng cho từng con số lợi ích và nói ai chịu trách nhiệm kiểm chứng.
4. Tính payback và ROI bằng công thức viết ra; thêm phân tích độ nhạy (kịch bản xấu).
5. Kết bằng khuyến nghị và quyết định cần Sponsor/HĐQT thông qua.


## B.2 Project Charter

📎 Nguồn: `templates/project-charter/FoodNow-Project-Charter.md`

**Tên tài liệu:** Project Charter — FoodNow MVP
**Dự án:** FoodNow MVP — FoodNow JSC & BrightSoft
**Phiên bản / ngày:** v1.0 — ký ngày 15/12/2025
**Mục đích & khi nào dùng:** Văn bản chính thức khởi động dự án, trao quyền cho PM và chốt mục tiêu, ràng buộc; dùng ngay sau khi Business Case được duyệt.

---

#### 1. Mục đích dự án

Xây dựng hệ thống đặt và giao đồ ăn FoodNow gồm 3 ứng dụng và trang Admin để FoodNow tự vận hành kênh bán hàng, sở hữu dữ liệu khách hàng và giảm phụ thuộc phí nền tảng bên thứ ba. (Liên kết: Business Case v1.0, 10/12/2025.)

#### 2. Mục tiêu SMART

| # | Mục tiêu | Đo bằng | Hạn |
|---|---|---|---|
| 1 | Go-live MVP đủ 3 app + Admin + thanh toán thẻ và COD | Hệ thống chạy production, đã qua UAT | **Thứ Bảy 03/10/2026** |
| 2 | Không vượt ngân sách MVP | Chi thực tế ≤ 2,4 tỷ VND (gồm dự phòng 12%) | Đến khi đóng dự án |
| 3 | Chất lượng khi go-live | Không còn bug Critical/High; luồng thanh toán qua kiểm thử đầy đủ | Go-live |
| 4 | Đạt mục tiêu kinh doanh | 500 đơn/ngày; huỷ đơn < 5%; giao TB < 35 phút | 3 tháng sau go-live |
| 5 | Hoàn vốn | Payback < 18 tháng | Theo dõi hằng quý |

#### 3. Ràng buộc ưu tiên

**Scope: linh hoạt (cắt để giữ mốc) · Time: cố định (03/10/2026) · Cost: trần 2,4 tỷ · Quality: bất khả nhượng ở luồng thanh toán.**

#### 4. Phạm vi sơ bộ

| In-scope (MVP) | Out-of-scope (MVP) |
|---|---|
| App Khách hàng iOS/Android: tìm món, giỏ hàng, đặt đơn, theo dõi, lịch sử | Khuyến mãi, mã giảm giá, đánh giá món (R1) |
| App Nhà hàng (web tablet): nhận đơn, xác nhận, cập nhật trạng thái, quản lý thực đơn | Ví điện tử, đặt món theo nhóm (R2) |
| App Tài xế (Android): nhận chuyến, định vị, hoàn tất | App Tài xế iOS |
| Admin web: quản lý người dùng, nhà hàng, đơn, báo cáo cơ bản | Báo cáo BI nâng cao |
| Thanh toán thẻ (PayEasy) và COD; SMS OTP; bản đồ | Đa ngôn ngữ, đa thành phố |

#### 5. Deliverable chính

Bản phát hành MVP đã qua UAT; tài liệu vận hành; bộ kiểm thử; hạ tầng production; đào tạo người dùng; báo cáo đóng dự án.

#### 6. Mốc chính

| Mốc | Ngày dự kiến |
|---|---|
| Ký Charter | 15/12/2025 |
| Kickoff | 05/01/2026 |
| Chốt phạm vi MVP (Scope Freeze) | Tuần 28 (13/07/2026) |
| Bắt đầu UAT | Tuần 30 (27/07/2026) |
| **Go-live** | **03/10/2026** |
| Kết thúc hypercare | Tuần 43 (30/10/2026) |
| Đóng dự án | Tuần 44 (02/11/2026) |

#### 7. Ngân sách sơ bộ

Chi phí kế hoạch **2,14 tỷ VND** + dự phòng 12% (**≈ 0,26 tỷ**) = **2,4 tỷ VND**. Nhân sự 78%, hạ tầng & license 9%, vendor 6%, đào tạo & khác 7% (tính trên chi phí kế hoạch).

#### 8. Giả định và ràng buộc

**Giả định:** Đội 12 người sẵn sàng từ 05/01/2026 · Khách cung cấp API dữ liệu nhà hàng đúng hạn · PayEasy hoàn tất chứng nhận theo lịch · Sponsor và PO có mặt để quyết định trong 2 ngày làm việc.
**Ràng buộc:** Ngân sách trần 2,4 tỷ · Go-live không sau 03/10/2026 (chiến dịch marketing đã lên kế hoạch) · Tuân thủ quy định bảo vệ dữ liệu cá nhân · Hợp đồng Hybrid: khung fixed-price theo giai đoạn + CR theo T&M.

#### 9. Rủi ro cấp cao

| # | Rủi ro | Xác suất | Tác động |
|---|---|---|---|
| 1 | PayEasy trễ chứng nhận/tích hợp | Trung bình | Cao |
| 2 | Sponsor thay đổi/thêm yêu cầu liên tục | Cao | Trung bình |
| 3 | Thiếu 1 Backend ở giai đoạn đầu | Cao | Trung bình |
| 4 | PO thiếu thời gian, quyết định chậm | Trung bình | Trung bình |

#### 10. Stakeholder chính

Trần Quốc Bảo (Sponsor/CEO) · Lê Minh Châu (PO) · Nguyễn Thu Hà (PM) · Phạm Đức Dũng (Tech Lead) · Vũ Thị Lan (BA) · Đỗ Hoàng Nam (QA Lead) · PayEasy (vendor thanh toán).

#### 11. Quyền hạn của PM

Nguyễn Thu Hà được: (1) điều phối đội dự án và phân bổ công việc trong phạm vi ngân sách; (2) duyệt thay đổi nhỏ trong phạm vi, không ảnh hưởng mốc và ngân sách; (3) sử dụng dự phòng đến **5% ngân sách** (≈ 0,12 tỷ) mà không cần xin phê duyệt riêng, báo cáo sau; (4) leo thang trực tiếp đến Sponsor. Các thay đổi phạm vi, lịch hoặc dự phòng vượt mức này cần Sponsor phê duyệt.

#### 12. Chữ ký

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| Sponsor | Trần Quốc Bảo | | 15/12/2025 |
| Project Manager | Nguyễn Thu Hà | | 15/12/2025 |
| Đại diện BrightSoft | (Giám đốc dự án BrightSoft) | | 15/12/2025 |

---

#### Cách dùng cho dự án của bạn

1. Copy cấu trúc mục 1–12; điền mục tiêu SMART và ràng buộc ưu tiên trước, phần còn lại sau.
2. Ghi rõ in-scope/out-of-scope ở mức sơ bộ; chi tiết để dành cho Scope Statement.
3. Viết quyền hạn của PM bằng ngưỡng cụ thể (tiền, ngày), không nói chung chung.
4. Giữ Charter tối đa 2–3 trang; nếu dài hơn, bạn đang viết kế hoạch chứ không phải Charter.
5. Gửi Sponsor ký; lưu bản đã ký làm nguồn tham chiếu khi có tranh cãi.


## B.3 Scope Statement

📎 Nguồn: `templates/project-charter/scope-statement.md`

**Tên tài liệu:** Scope Statement — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.1 — 13/02/2026 (v1.0 ngày 06/02/2026)
**Mục đích & khi nào dùng:** Chốt ranh giới phạm vi làm căn cứ cho WBS, ước lượng và change control; dùng sau Charter, trước khi lập WBS.

---

#### 1. Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi | Người duyệt |
|---|---|---|---|
| v1.0 | 06/02/2026 | Bản đầu, ví điện tử "in-scope có điều kiện" | Bảo, Châu |
| **v1.1** | **13/02/2026** | Chuyển **thanh toán ví điện tử → Release 2** để giữ mốc 03/10/2026 (thoả thuận tuần 6) | Bảo, Châu, Hà |

#### 2. Mô tả phạm vi sản phẩm (product scope)

Hệ thống đặt và giao đồ ăn cho khu vực nội thành Hà Nội gồm 3 ứng dụng, Admin web và các tích hợp bên thứ ba, phục vụ 3 loại người dùng: khách hàng, nhà hàng, tài xế.

#### 3. Trong phạm vi (In-scope)

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

#### 4. Ngoài phạm vi (Out-of-scope, tường minh)

| # | Hạng mục | Lý do | Dự kiến |
|---|---|---|---|
| O1 | Thanh toán ví điện tử | Giữ mốc go-live; phụ thuộc thêm vendor | R2 |
| O2 | Đặt món theo nhóm | Phức tạp, chưa cần cho MVP | R2 |
| O3 | Khuyến mãi, mã giảm giá | Giá trị tốt nhưng không chặn ra mắt | R1 |
| O4 | Đánh giá và xếp hạng món | Không chặn ra mắt | R1 |
| O5 | App Tài xế iOS | Nhóm tài xế thử nghiệm dùng Android | Chưa lên lịch |
| O6 | Đa thành phố, đa ngôn ngữ | Ngoài mục tiêu MVP | Chưa lên lịch |
| O7 | Báo cáo BI nâng cao | Báo cáo cơ bản đủ cho MVP | R1+ |

#### 5. Deliverable và tiêu chí chấp nhận

| Deliverable | Tiêu chí chấp nhận | Người nghiệm thu |
|---|---|---|
| 3 app + Admin đã triển khai production | Qua UAT; không còn bug Critical/High | Châu, Bảo |
| Tích hợp thanh toán thẻ | Giao dịch thành công/thất bại/hoàn tiền đúng; qua kiểm thử bảo mật cơ bản | Nam, Yến |
| Tài liệu vận hành và runbook | Đội hỗ trợ tự xử lý được 10 tình huống mẫu | Huy |
| Đào tạo người dùng | ≥ 90% nhà hàng và tài xế thử nghiệm hoàn tất đào tạo | Lan |

#### 6. Giả định và ràng buộc

- Giả định: PayEasy hoàn tất chứng nhận theo lịch; khách cung cấp dữ liệu nhà hàng đúng hạn; đội đủ 12 người sau Sprint 0.
- Ràng buộc: go-live 03/10/2026; ngân sách 2,4 tỷ; tuân thủ bảo vệ dữ liệu cá nhân.

#### 7. Cơ chế thay đổi phạm vi

Thay đổi ngoài bảng in-scope đi qua **Change Request** (Ch20): đánh giá tác động scope/time/cost/risk/quality → Sponsor duyệt → cập nhật baseline. Thay đổi trong epic (chi tiết story) điều chỉnh qua backlog bởi PO.

---

#### Cách dùng cho dự án của bạn

1. Liệt kê epic in-scope trước, sau đó **liệt kê tường minh** ít nhất 5 mục out-of-scope kèm lý do.
2. Với mỗi deliverable, viết tiêu chí chấp nhận có thể kiểm tra được và ghi người nghiệm thu.
3. Ghi phiên bản và người duyệt; mọi thay đổi phải nâng phiên bản.
4. Gửi Sponsor/PO duyệt bằng email và lưu dấu vết.
5. Dùng bảng này làm đầu vào cho WBS (Ch10) và Change Request (Ch20).


## B.4 Team Charter và Working Agreement

📎 Nguồn: `templates/project-charter/team-charter-working-agreement.md`

**Tên tài liệu:** Team Charter & Working Agreement — Đội FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 14/01/2026 (Sprint 0), do cả đội cùng thống nhất
**Mục đích & khi nào dùng:** Ghi lại mục đích đội, vai trò, quy tắc làm việc và định nghĩa Ready/Done sơ bộ; dùng trong Sprint 0 và xem lại mỗi 4–6 sprint (ở retro).

---

#### 1. Team Charter

**Sứ mệnh đội:** Giao MVP FoodNow đúng mốc 03/10/2026, chất lượng thanh toán bất khả nhượng, và làm việc theo cách để không ai phải làm đêm hai tuần liên tiếp.

**Giá trị của đội:** nói thật sớm · tôn trọng thời gian nhau · quyết định có dấu vết · học từ lỗi, không đổ lỗi.

**Cơ cấu (12 người tương đương FTE; UX và DevOps 50%):**

| Vai trò | Người | Ghi chú |
|---|---|---|
| Project Manager | Nguyễn Thu Hà | |
| Business Analyst | Vũ Thị Lan | |
| Tech Lead | Phạm Đức Dũng | |
| Backend (2) | Ngô Thanh Sơn; 1 Backend điều động từ dự án nội bộ (vào 26/01/2026) | Thiếu 1 vị trí từ kickoff |
| Mobile (3) | Đặng Văn Khoa, Bùi Tuấn, Lý Quỳnh | iOS + Android |
| Web/Admin FE (1) | Thành viên FE của BrightSoft | Web nhà hàng + Admin |
| QA (2) | Đỗ Hoàng Nam (Lead) + 1 QA | |
| UX/UI (50%) | Hoàng Mai Anh | Chia sẻ dự án khác |
| DevOps (50%) | Trịnh Ngọc Ánh | Hạ tầng, CI/CD |

#### 2. Working Agreement

| Chủ đề | Thoả thuận |
|---|---|
| **Giờ làm việc** | 09:00–17:30; khung trùng lặp bắt buộc 10:00–16:00 (kể cả làm từ xa) |
| **Daily Scrum** | 08:45, tối đa 15 phút; chỉ nói mục tiêu hôm nay và blocker; thảo luận sâu để sau |
| **Giao tiếp** | Hỏi nhanh: Slack kênh dự án (phản hồi trong 2 giờ làm việc); quyết định: ghi Confluence; khẩn: gọi + [KHẨN] |
| **Code review** | PR nhỏ (< 400 dòng); review trong 24 giờ; tối thiểu 1 approver; CI xanh mới merge |
| **Nhánh** | Theo chính sách nhánh (Ch31); nhánh sống ≤ 5 ngày |
| **Tài liệu** | Nguồn sự thật duy nhất ở Confluence; không lưu bản chính trong chat/email |
| **Họp** | Có agenda; kết thúc bằng quyết định–hành động–người–hạn; không họp trước 09:00 và sau 17:30 |
| **Làm thêm giờ** | Ngoại lệ, có PM đồng ý; không quá 2 tuần liền; bù nghỉ |
| **Báo tin xấu** | Báo ngay khi phát hiện, kèm phương án; không đổ lỗi |
| **Bất đồng** | Nêu phương án và đánh đổi; nếu 2 ngày chưa chốt → chuyển Tech Lead (kỹ thuật) hoặc PM (ràng buộc) |
| **Vắng mặt** | Báo trước ≥ 2 ngày; bàn giao việc đang làm |

#### 3. Definition of Ready / Done (sơ bộ)

**Definition of Ready (story sẵn sàng vào sprint):**
- [ ] Có mô tả người dùng – mục đích – giá trị
- [ ] Có tiêu chí chấp nhận kiểm tra được
- [ ] Thiết kế UX (nếu cần) đã duyệt
- [ ] Phụ thuộc đã rõ; đã ước lượng
- [ ] Vừa trong một sprint

**Definition of Done (story hoàn thành):**
- [ ] Code đã review và merge
- [ ] Unit test viết và xanh; coverage không giảm
- [ ] QA kiểm thử theo tiêu chí chấp nhận
- [ ] Không còn bug Critical/High liên quan
- [ ] Tài liệu/API được cập nhật
- [ ] PO chấp nhận trong Review

(Bản đầy đủ: `templates/quality/definition-of-done.md`, Ch15.)

#### 4. Cam kết và chữ ký

Chúng tôi đồng ý làm theo thoả thuận này và sửa đổi khi retro thấy cần.

| Người | Ngày |
|---|---|
| Toàn đội (ghi nhận tại buổi họp 14/01/2026) | 14/01/2026 |

---

#### Cách dùng cho dự án của bạn

1. Tổ chức workshop 60–90 phút trong Sprint 0; để cả đội đề xuất, đừng PM tự viết.
2. Chốt từng mục bằng câu "chúng ta có thể sống với điều này không?" — ai phản đối thì sửa.
3. Ghi cụ thể bằng số (giờ, ngày, dòng code) thay vì "sớm", "nhỏ".
4. In/đặt ở nơi đội thấy hằng ngày; nhắc lại khi có người mới.
5. Xem lại ở retro mỗi 4–6 sprint; đổi nếu thấy không hiệu quả.

