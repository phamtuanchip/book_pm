# Chương 46: Tình huống về vendor, ngân sách & pháp lý

## Mục tiêu học

- Xử lý vendor trễ, vượt ngân sách, cắt ngân sách, hợp đồng mập mờ, thay đổi quy định và quyết định dừng dự án.
- Dùng số liệu (EVM, EMV, payback) và văn bản (hợp đồng, CR, email chốt) để bảo vệ quyết định.
- Giữ quan hệ trong khi giữ ranh giới thương mại.

**Cách dùng:** tự viết đáp án trước; mỗi tình huống có ít nhất hai hướng hợp lệ.

---

### Tình huống 46.1 — Vendor trễ bàn giao
**Giai đoạn:** Thực thi (tuần 10) · **Độ khó:** ★☆☆ · **Kỹ năng:** quản lý phụ thuộc, dự phòng · **Chương liên quan:** Ch19, Ch21

**Bối cảnh:** Thứ Hai 09/03/2026, hạn nhận tài khoản sandbox SMS OTP là hôm nay; nhà cung cấp SMS báo trễ 4 ngày do kiểm duyệt nội dung tin nhắn. Story FN-101 (đăng ký OTP) trong Sprint 2 kết thúc 13/03.

**Dữ kiện:** có nhà cung cấp SMS dự phòng chưa ký; mock OTP dùng được; D-04 float: không trên đường găng.
**Nhiễu:** Khoa nói "cứ đợi vendor".

**Câu hỏi:** (1) Bạn làm gì? (2) Bạn nói gì với vendor? (3) Cập nhật gì?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** phụ thuộc bên ngoài không nằm trên đường găng nhưng ảnh hưởng Sprint Goal.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Dùng mock OTP để hoàn tất story; tích hợp thật khi sandbox có (sprint sau) | Giữ Sprint Goal | Kiểm thử thật muộn |
| B. Bắt đầu nhà cung cấp dự phòng | Giảm rủi ro | Tốn thời gian ký |
| C. Chờ | Đơn giản | Trễ story |

**Khuyến nghị: A + hỏi vendor ngày hứa bằng văn bản.** **Lời nói mẫu:** "Chúng tôi hiểu quy trình kiểm duyệt; xin xác nhận bằng email ngày cụ thể tài khoản sandbox được cấp, và nội dung tin nhắn nào cần chỉnh để duyệt nhanh." **Với đội:** "Dùng mock, ghi rõ story 'tích hợp thật' sang Sprint 3."

**Tài liệu:** RAID (D-04 ngày hứa mới), backlog, báo cáo tuần.

**Sai lầm:** chờ mà không đo ảnh hưởng; không cập nhật ngày hứa.

**Phòng ngừa:** vendor thứ hai; mock từ đầu; kế hoạch dự phòng cho mọi phụ thuộc.
</details>

---

### Tình huống 46.2 — Vượt ngân sách 20%
**Giai đoạn:** R1 (tuần 60, 2027) · **Độ khó:** ★★☆ · **Kỹ năng:** EAC, thương lượng · **Chương liên quan:** Ch14, Ch34

**Bối cảnh:** Thứ Sáu 26/02/2027. R1 có BAC 900 triệu; ở tuần 6/16, AC = 420, EV = 300, PV = 330. EAC (BAC/CPI) = 900 ÷ 0,714 = 1.260 (**vượt 40%**) nếu xu hướng tiếp diễn. Dự phòng R1: 108 triệu (12%).

**Dữ kiện:** nguyên nhân: tích hợp khuyến mãi phức tạp hơn dự kiến, nhân sự mới học việc; scope không đổi.
**Nhiễu:** Bảo nói "vượt 20% thì chấp nhận được".

**Câu hỏi:** (1) Bạn đọc số thế nào? (2) Bạn nói gì với Bảo? (3) Phương án?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Tính:** CPI = 300 ÷ 420 = 0,714; SPI = 300 ÷ 330 = 0,91; EAC = **1.260**; VAC = **−360** (+40%). Nếu sự cố là một lần (học việc), EAC = AC + (BAC − EV) = 420 + 600 = **1.020** (+13%). Khoảng dự báo: 1.020–1.260.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Cắt scope Could để giữ ≤ 1.000 | Giữ ngân sách | Giảm giá trị |
| B. Xin thêm ngân sách (≈ 12–20%) với bằng chứng | Giữ scope | Sponsor phải duyệt |
| C. Đổi cách làm (giảm học việc, pair, giảm rework) | Không tốn tiền | Kết quả chậm |

**Khuyến nghị: A + C**, chuẩn bị B nếu xu hướng không cải thiện sau 2 sprint. **Lời nói mẫu:** "Dự báo chi phí hiện là 1.020–1.260 triệu, tức vượt 13–40% so với 900. Nguyên nhân là tích hợp khuyến mãi và học việc. Em đề xuất cắt hai hạng mục Could, cải thiện năng suất, và đo lại sau hai sprint; nếu vẫn xu hướng đó, em sẽ xin anh duyệt thêm có kèm lý do."

**Tài liệu:** budget-tracking, EAC, RAID (R17), CR/Decision Log.

**Sai lầm:** giấu số; chờ tới cuối; chỉ dùng EAC bi quan hoặc lạc quan.

**Phòng ngừa:** ngưỡng cảnh báo CPI < 0,95; dự phòng theo EMV; onboarding tốt.
</details>

---

### Tình huống 46.3 — Cắt ngân sách giữa chừng
**Giai đoạn:** R1 (tuần 62, 2027) · **Độ khó:** ★★☆ · **Kỹ năng:** ưu tiên theo giá trị, truyền thông · **Chương liên quan:** Ch14, Ch24

**Bối cảnh:** Thứ Ba 09/03/2027, HĐQT cắt ngân sách R1 15% (135 triệu) vì doanh thu tháng thấp hơn kỳ vọng. Bảo yêu cầu "vẫn ra R1 đúng Q1".

**Dữ kiện:** R1 gồm khuyến mãi (E12), đánh giá món (E13), cải thiện huỷ đơn (E14), nợ kỹ thuật; đội 8 người; đã chi 60%.
**Nhiễu:** Marketing nói "khuyến mãi là quan trọng nhất".

**Câu hỏi:** (1) Bạn xử lý thế nào? (2) Ưu tiên bằng dữ liệu nào? (3) Bạn nói gì với đội?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** ràng buộc Cost giảm, Time cố định → **Scope phải linh hoạt**; ưu tiên theo giá trị.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Cắt E13 (đánh giá món) và giảm nợ kỹ thuật; giữ E12, E14 | Giữ giá trị lõi (giảm huỷ, khuyến mãi) | Trì hoãn E13 |
| B. Giảm cỡ toàn bộ (làm bản tối giản) | Giữ mọi thứ | Chất lượng thấp |
| C. Giảm đội | Tiết kiệm nhân sự | Mất người, rủi ro |

**Khuyến nghị: A**, dùng RICE/WSJF và mục tiêu R1 (giảm huỷ, tăng đơn lặp). **Lời nói mẫu:** "Ngân sách giảm 15% thì mình cần bỏ khoảng 130 ngày công. Theo mục tiêu R1 (huỷ < 5%, đơn lặp), em đề xuất giữ khuyến mãi và cải thiện huỷ đơn, hoãn đánh giá món sang R2. Nếu anh/chị Marketing có dữ liệu Impact khác, mình chấm lại." **Đội:** "Mục tiêu R1 vẫn giữ; hạng mục giảm; ưu tiên rõ; chúng ta không tăng ca."

**Tài liệu:** Baseline (cost, scope) qua CR; Roadmap; backlog; Decision Log.

**Sai lầm:** cắt đều mọi nơi; cắt kiểm thử; im lặng.

**Phòng ngừa:** roadmap theo outcome; hạng mục Could tường minh.
</details>

---

### Tình huống 46.4 — Fixed-price nhưng scope mập mờ
**Giai đoạn:** Khởi động R2 (2027) · **Độ khó:** ★★★ · **Kỹ năng:** bảo vệ hợp đồng, làm rõ scope · **Chương liên quan:** Ch03, Ch21

**Bối cảnh:** Khách mới của BrightSoft ký hợp đồng **fixed-price 1,2 tỷ** cho "ứng dụng quản lý giao hàng tương tự FoodNow". Phụ lục scope chỉ có bốn dòng. Khách nói "làm giống FoodNow nhưng tốt hơn". Bạn là PM nhận dự án sau khi ký.

**Dữ kiện:** đội ước lượng sơ bộ 1,5 tỷ nếu "giống FoodNow đầy đủ"; giám đốc kinh doanh đã cam kết giá.
**Nhiễu:** khách "rất thân thiện".

**Câu hỏi:** (1) Bạn làm gì trong tuần đầu? (2) Bạn nói gì với khách? (3) Bạn báo nội bộ thế nào?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** rủi ro thương mại nghiêm trọng: giá cố định, scope mờ, kỳ vọng "tốt hơn" — BrightSoft giữ rủi ro.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Workshop scope 2 tuần → Scope Statement chi tiết có out-of-scope, khách ký; thay đổi qua CR T&M | Bảo vệ hợp đồng | Khách có thể phản ứng |
| B. Đề nghị tách hợp đồng: giai đoạn khám phá (T&M) rồi fixed-price cho phạm vi đã chốt | Công bằng | Cần đàm phán |
| C. Làm theo "giống FoodNow" và chịu lỗ | Giữ quan hệ | Lỗ lớn |

**Khuyến nghị: A + B nếu cần**, báo Giám đốc BrightSoft ngay. **Lời nói mẫu (khách):** "Để giao đúng điều anh cần và giá cố định, mình cùng chốt phạm vi trong 2 tuần: chức năng nào có, không có. Mọi bổ sung sau đó tính theo CR minh bạch." **Nội bộ:** "Hợp đồng fixed-price 1,2 tỷ nhưng ước lượng sơ bộ 1,5 tỷ nếu scope 'giống FoodNow đầy đủ'; em cần workshop scope và quy trình CR trước khi đội bắt đầu."

**Tài liệu:** Scope Statement (ký), Charter, RAID (rủi ro thương mại), quy trình CR, hợp đồng phụ lục.

**Sai lầm:** bắt đầu code khi chưa chốt scope; giấu rủi ro với giám đốc; cãi với khách.

**Phòng ngừa:** PM tham gia trước khi ký; scope có tiêu chí chấp nhận; điều khoản CR.
</details>

---

### Tình huống 46.5 — Thay đổi quy định giữa chừng
**Giai đoạn:** Kế hoạch R2 (tuần 27, 2026) · **Độ khó:** ★★☆ · **Kỹ năng:** đánh giá tác động pháp lý, cập nhật roadmap · **Chương liên quan:** Ch13, Ch20, Ch29

**Bối cảnh:** Thứ Hai 06/07/2026, cố vấn pháp lý báo yêu cầu tuân thủ mới về xác thực người dùng khi dùng ví điện tử; phải hoàn tất trước khi ra mắt ví. R2 (Q3/2027) gồm ví điện tử và đặt món theo nhóm.

**Dữ kiện:** yêu cầu cần thêm eKYC (ước lượng 40 ngày công + vendor mới); MVP không chứa ví; Later không có ngày.
**Nhiễu:** Bảo lo "lại dời".

**Câu hỏi:** (1) Bạn làm gì? (2) Cập nhật roadmap thế nào? (3) Bạn nói gì với Sponsor?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** thay đổi thuộc vùng Later; tác động lên thứ tự, không phải mục tiêu.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Đổi thứ tự trong R2: đặt món theo nhóm đi trước; ví sau khi có eKYC | Giữ mục tiêu R2 | Ví chậm |
| B. Đẩy toàn bộ R2 | An toàn | Mất đà |
| C. Làm eKYC trong R1 | Sớm | Chưa cần thiết, tốn |

**Khuyến nghị: A.** **Lời nói mẫu (Bảo):** "Mục tiêu R2 và quý dự kiến không đổi; chỉ đổi thứ tự bên trong: đặt món theo nhóm trước, ví sau khi hoàn tất xác thực. Em đưa thay đổi vào roadmap v1.1 kèm lịch sử thay đổi." **Tài liệu:** Roadmap v1.1, Release Plan, RAID (R14), Decision Log, đánh giá pháp lý.

**Sai lầm:** giấu; hứa ngày ví; phớt lờ.

**Phòng ngừa:** roadmap theo outcome; Later không ngày; theo dõi văn bản pháp luật.
</details>

---

### Tình huống 46.6 — Đề xuất dừng dự án
**Giai đoạn:** R2 (2027) · **Độ khó:** ★★★ · **Kỹ năng:** phân tích dừng, chi phí chìm, bàn giao · **Chương liên quan:** Ch38, Ch41

**Bối cảnh:** Thứ Ba 05/10/2027. R2 (ví điện tử) đã chi 400 triệu (ngân sách 700). Sau khi làm, vendor ví đổi phí giao dịch tăng gấp đôi; dữ liệu cho thấy chỉ 8% khách hỏi ví; nhóm còn cần 300 triệu; doanh thu R1 đúng kỳ vọng nhưng ví không tăng đơn.

**Dữ kiện:** Business Case R2: 25% giao dịch qua ví; payback hiện tính ≈ 40 tháng (mục tiêu < 18); 400 triệu là chi phí chìm.
**Nhiễu:** Bảo: "Đã bỏ 400 triệu rồi, không thể bỏ."

**Câu hỏi:** (1) Bạn phân tích thế nào? (2) Bạn đề xuất gì? (3) Bạn trình bày ra sao?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** Business Case không còn đứng vững; 400 triệu là **chi phí chìm** (không nên dùng để quyết định); chi phí tiếp 300 triệu so với lợi ích còn lại.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Dừng ví, thu hồi giá trị (tách phần tái dùng), chuyển nguồn lực | Dừng đốt tiền | Mất khoản đã chi |
| B. Thu nhỏ: ví chỉ cho một nhóm khách/đối tác, chi phí 100 triệu | Giữ một phần | Giá trị nhỏ |
| C. Tiếp tục | Hoàn tất | Payback 40 tháng |

**Khuyến nghị: A hoặc B** dựa vào dữ liệu; cần Sponsor/HĐQT quyết. **Lời nói mẫu:** "400 triệu đã chi là chi phí chìm; câu hỏi là 300 triệu nữa có tạo giá trị hơn dùng cho việc khác không. Dữ liệu cho thấy payback 40 tháng, cao hơn nhiều ngưỡng 18 tháng. Em đề xuất dừng ví, giữ phần tái sử dụng (xác thực), và chuyển đội sang giảm huỷ đơn — tác động lớn hơn."

**Dừng có trật tự:** bảo toàn tài sản (code, tài liệu), bàn giao, chăm sóc đội, đóng hợp đồng vendor, lessons learned.

**Tài liệu:** báo cáo dừng, Decision Log, Lessons Learned, Roadmap, hợp đồng vendor.

**Sai lầm:** tiếp tục vì "đã lỡ"; dừng đột ngột không bàn giao; đổ lỗi đội.

**Phòng ngừa:** cổng quyết định định kỳ (stage-gate) với tiêu chí kinh doanh; thu nhỏ trước khi đầu tư lớn.
</details>

---

## Kỹ năng đã luyện

| Tình huống | Kỹ năng | Chương gốc |
|---|---|---|
| 46.1 | Phụ thuộc vendor, mock | Ch21 |
| 46.2 | EAC hai kịch bản, đàm phán | Ch14, Ch34 |
| 46.3 | Ưu tiên khi cắt ngân sách | Ch24 |
| 46.4 | Hợp đồng fixed-price, scope | Ch03, Ch21 |
| 46.5 | Thay đổi pháp lý, roadmap | Ch13 |
| 46.6 | Dừng dự án, chi phí chìm | Ch38, Ch41 |

## Ba tình huống mở (tự viết đáp án)

1. **Vendor phá vỡ hợp đồng:** vendor thông báo tăng giá 40% giữa hợp đồng. Bạn làm gì?
2. **Đối thủ ép giá:** khách yêu cầu giảm 15% với lý do "bên khác rẻ hơn". Bạn đàm phán thế nào?
3. **Kiểm toán bất ngờ:** khách thông báo kiểm toán quy trình mua sắm trong hai tuần. Bạn chuẩn bị gì?
