# Chương 5: Business Case & Project Charter

## Mục tiêu học

- Viết được Business Case có phương án "không làm gì", tính payback và ROI đơn giản và nêu giả định.
- Đặt được tiêu chí thành công đo được, phân biệt mục tiêu kinh doanh, sản phẩm và dự án.
- Lập được Project Charter đủ các mục và giải thích Charter khác Kế hoạch dự án ở đâu.
- Trao quyền cho PM bằng ngưỡng cụ thể trong Charter.

## 5.1 Vì sao có dự án: vấn đề, cơ hội và Business Case

Một dự án đáng làm khi **lợi ích kỳ vọng vượt chi phí và rủi ro**, và không có cách rẻ hơn để đạt cùng kết quả. Việc chứng minh điều đó là **Business Case** (luận chứng kinh doanh). Người viết thường là Sponsor hoặc BA, nhưng PM nên đọc kỹ và đóng góp vì từ đây con số ngân sách và mốc bắt đầu bị "khoá".

Business Case trả lời năm câu:

1. **Vấn đề/cơ hội** là gì, đang tốn kém hay bỏ lỡ điều gì?
2. Có **những phương án nào**, gồm cả "không làm gì"?
3. **Chi phí và lợi ích** của từng phương án, dựa trên giả định nào?
4. **Rủi ro** chính là gì?
5. **Khuyến nghị** — nên chọn gì, và cần ai duyệt?

### Phương án "không làm gì"

Luôn đưa vào. Nó là **mốc so sánh**: nếu không làm gì thì chuyện gì xảy ra trong 12–24 tháng? Với FoodNow, "không làm gì" nghĩa là tiếp tục trả phí nền tảng, không sở hữu dữ liệu khách. Phương án này cho Sponsor thấy cái giá của việc trì hoãn.

### Chi phí – lợi ích, payback và ROI đơn giản

- **Payback** (thời gian hoàn vốn): số tháng để tổng lợi nhuận tích luỹ bằng vốn đầu tư.
- **ROI** (tỷ suất hoàn vốn) = (Lợi ích tích luỹ − Chi phí đầu tư) ÷ Chi phí đầu tư, tính trong một khung thời gian cố định.

Ví dụ FoodNow (giả định: biên đóng góp 25.000 VND/đơn; chi phí vận hành 95 triệu/tháng; 3 tháng đầu 250 đơn/ngày, sau đó 500 đơn/ngày):

| Chỉ tiêu | Công thức | Kết quả |
|---|---|---|
| Lợi nhuận ròng/tháng khi ổn định | 500 × 25.000 × 30 − 95 triệu | 280 triệu |
| Lợi nhuận 3 tháng đầu | 3 × (250 × 25.000 × 30 − 95 triệu) | 277,5 triệu |
| Payback | 3 + (2.400 − 277,5) ÷ 280 | ≈ 10,6 tháng từ go-live |
| ROI 24 tháng | (277,5 + 21 × 280 − 2.400) ÷ 2.400 | ≈ 157% |

Quan trọng hơn con số là **phân tích độ nhạy**: nếu chỉ đạt 350 đơn/ngày, payback ≈ 15,7 tháng; nếu chỉ 250 đơn/ngày, ≈ 26 tháng — **vượt mục tiêu**. Sponsor cần biết ngưỡng "không đáng" để đặt cảnh báo sớm (Ch41).

> **Đừng tự tin thái quá với con số lợi ích.** Chúng dựa trên giả định thị trường, không phải chi phí bạn kiểm soát được. PM nên ghi rõ ai chịu trách nhiệm kiểm chứng giả định nào.

📎 Mẫu đầy đủ: `templates/project-charter/FoodNow-Business-Case.md`

## 5.2 Tiêu chí thành công đo được

Định nghĩa "xong" phải viết từ đầu, ở ba cấp (nhắc lại Ch01):

| Cấp | Ví dụ FoodNow | Đo khi nào |
|---|---|---|
| Kinh doanh | 500 đơn/ngày; payback < 18 tháng | 3 tháng sau go-live |
| Sản phẩm | Huỷ đơn < 5%; giao TB < 35 phút | 3 tháng sau go-live |
| Dự án | Go-live 03/10/2026; ≤ 2,4 tỷ; không bug Critical/High | Go-live |

Mẹo kiểm tra: mỗi tiêu chí phải có **con số, thời điểm và người đo**. "Ứng dụng dễ dùng" không phải tiêu chí; "80% người dùng mới hoàn tất đơn đầu tiên trong 3 phút" mới là tiêu chí.

## 5.3 Project Charter: văn bản khai sinh dự án

**Project Charter** (điều lệ dự án) là văn bản ngắn (2–3 trang) do Sponsor ký, chính thức khởi động dự án, xác nhận mục tiêu, ràng buộc và **trao quyền cho PM**. Nếu không có Charter, PM không có cơ sở pháp lý để điều phối nguồn lực hay từ chối yêu cầu.

Các mục cần có:

| Mục | Nội dung | Ghi chú |
|---|---|---|
| Mục đích | Vì sao làm | 2–3 câu, liên kết Business Case |
| Mục tiêu SMART | Cụ thể, đo được, khả thi, liên quan, có hạn | Xem 5.2 |
| Ràng buộc ưu tiên | Cái gì cố định, cái gì linh hoạt | Một dòng |
| Phạm vi sơ bộ | In-scope/out-of-scope | Chi tiết ở Scope Statement (Ch07) |
| Deliverable chính | Sản phẩm bàn giao | |
| Mốc chính | Ngày các mốc | |
| Ngân sách sơ bộ | Tổng và cơ cấu | |
| Giả định & ràng buộc | Điều được coi là đúng; giới hạn | Đưa vào RAID (Ch19) |
| Rủi ro cấp cao | 3–5 rủi ro lớn nhất | |
| Stakeholder chính | Ai quan trọng nhất | Ch06 |
| **Quyền hạn của PM** | Ngưỡng tiền/ngày PM tự quyết | **Đây là phần quan trọng nhất** |
| Chữ ký | Sponsor, PM, đại diện các bên | |

📎 Mẫu đầy đủ: `templates/project-charter/FoodNow-Project-Charter.md`

Trích một phần **quyền hạn của PM** trong Charter FoodNow: *Hà được dùng dự phòng đến 5% ngân sách (≈ 0,12 tỷ) mà không cần xin phê duyệt riêng, báo cáo sau; thay đổi phạm vi, lịch hoặc dự phòng vượt mức này cần Sponsor phê duyệt.* Nhờ dòng này, khi Sponsor đòi thêm tính năng ngoài phạm vi, Hà có cơ sở để nói "được, nhưng phải qua change request".

### Charter khác gì Kế hoạch dự án?

| | Project Charter | Project Management Plan |
|---|---|---|
| Mục đích | Cho phép dự án tồn tại, trao quyền | Chỉ dẫn cách thực hiện |
| Người ký | Sponsor | PM, Sponsor duyệt |
| Độ dài | 2–3 trang | 8–15 trang (Ch17) |
| Mức chi tiết | Cấp cao | Chi tiết theo lĩnh vực |
| Thời điểm | Trước khi bắt đầu | Sau Charter, cập nhật suốt dự án |
| Thay đổi | Hiếm | Theo change control |

Nếu Charter của bạn dài 15 trang, bạn đang viết kế hoạch. Nếu kế hoạch của bạn không tham chiếu Charter, bạn đang làm dự án không có gốc.

## Đi sâu: viết Business Case để người duyệt tin được

### Cấu trúc một Business Case một trang rưỡi

1. **Vấn đề/cơ hội** — một đoạn, có con số hiện tại (ví dụ nhà hàng nhận đơn qua điện thoại, sai đơn ~8%); 2. **Mục tiêu đo được** — 2–4 chỉ số; 3. **Các phương án** — gồm "không làm gì", "mua sẵn", "tự xây"; 4. **Chi phí** — một lần và định kỳ; 5. **Lợi ích** — định lượng và định tính, ghi rõ giả định; 6. **Rủi ro chính** và **đề xuất**. Người duyệt hiếm khi đọc quá hai trang: phần còn lại đẩy sang phụ lục.

### Ba lỗi làm Business Case mất uy tín

| Lỗi | Biểu hiện | Cách sửa |
|---|---|---|
| **Lợi ích thổi phồng** | Giả định 100% người dùng chuyển sang app ngay tháng đầu | Dùng ba kịch bản (thận trọng / cơ sở / lạc quan) và dựa vào số kịch bản cơ sở |
| **Bỏ chi phí vận hành** | Chỉ tính chi phí xây, quên hosting, hỗ trợ, phí cổng thanh toán | Tính tổng chi phí sở hữu 3 năm |
| **Không có người chịu trách nhiệm lợi ích** | Ai cũng nói "lợi ích sẽ đến" | Gắn mỗi lợi ích với một chủ sở hữu và mốc đo |

### Kiểm tra độ nhạy bằng một bảng nhỏ

Trước khi trình, đổi từng giả định chính ±20% và xem payback thay đổi ra sao. Nếu chỉ một giả định (ví dụ số đơn/ngày) làm payback từ 12 lên 30 tháng, đó là **giả định sống còn**: ghi vào Charter, đo sớm bằng pilot, và đặt làm điều kiện Go/No-Go giai đoạn sau.

### Charter: ba câu hỏi phân biệt bản tốt và bản trang trí

(a) Nếu PM nghỉ việc, người mới đọc Charter có biết mình được quyền quyết gì không? (b) Nếu khách đòi thêm tính năng, Charter có nói ai phê duyệt không? (c) Tiêu chí thành công có số và ngày không? Câu nào trả lời "không" thì bổ sung trước khi ký.

## Tình huống FoodNow

Ngày 10/12/2025, hội đồng quản trị FoodNow họp để duyệt ngân sách. Anh Bảo trình bày Business Case do Hà và Lan chuẩn bị. Một thành viên hội đồng hỏi: "Nếu chúng ta không làm gì thì sao?" — Hà đã chuẩn bị bảng phương án A/B/C, nên trả lời bằng số liệu: phương án A giữ nguyên biên lợi nhuận thấp và không có dữ liệu khách; phương án B (SaaS white-label) không đáp ứng luồng riêng. Kết luận nghiêng về phương án C.

Sau đó, anh Bảo đề nghị: "Dự phòng 12% cao quá, cắt còn 5% cho gọn." Hà không phản bác cảm tính. Chị chỉ vào bảng rủi ro: PayEasy chưa chắc chắn, thiếu một Backend, Sponsor hay thêm yêu cầu — ba rủi ro có xác suất trung bình đến cao. "Dự phòng 12% tương ứng khoảng 0,26 tỷ, đủ cho hai trong ba rủi ro nếu xảy ra. Nếu cắt còn 5% thì mình chỉ chịu được một. Em đề nghị giữ 12%, và em sẽ chỉ được tự dùng đến 5%; phần còn lại anh duyệt." Hội đồng đồng ý.

Charter được ký ngày **15/12/2025** với ba dòng Hà đã chốt từ tháng trước (Ch01): Time cố định, Scope linh hoạt, Quality thanh toán bất khả nhượng. Quyết định của Hà ở đây là **biến dự phòng thành công cụ quản trị rủi ro có kiểm soát**, không thành khoản "mong muốn của PM".

## Bài tập

**Bài 1 (làm ra sản phẩm) — Charter đặt lịch cắt tóc.** Viết Project Charter cho dự án "app đặt lịch cắt tóc" của một chuỗi 8 tiệm (đội 6 người, 5 tháng, ngân sách 700 triệu VND). Gồm đủ 12 mục ở bảng 5.3; ghi ràng buộc ưu tiên một dòng và quyền hạn của PM bằng ngưỡng cụ thể.

**Bài 2 (làm ra sản phẩm) — Business Case ngắn.** Với dự án trên, tính payback và ROI 12 tháng với giả định do bạn tự đặt (ghi rõ giả định) và thêm một kịch bản xấu.

**Bài 3 (tình huống ngắn).** Sponsor nói: "Charter làm chi cho mất thời gian, cứ bắt đầu đi, tôi tin chị." Bạn phản hồi thế nào? Nêu 2 lý do và một đề xuất thoả hiệp.

<details>
<summary>Gợi ý đáp án Bài 3</summary>

Lý do 1: Charter là cơ sở để PM điều phối nguồn lực và từ chối yêu cầu ngoài phạm vi; không có Charter, khi tranh cãi không có gì để dẫn. Lý do 2: khi Sponsor thay đổi, hoặc người khác kế nhiệm, Charter giữ "luật chơi". Thoả hiệp: viết Charter **1 trang** (mục đích, mục tiêu, ràng buộc ưu tiên, ngân sách, mốc, quyền hạn PM) và xin Sponsor xác nhận qua email trong 30 phút; mở rộng sau nếu cần. Lời nói mẫu: "Em tin anh, và vì thế em muốn ghi lại những gì mình đã thống nhất — 1 trang thôi — để lúc chuyện gấp em không phải đoán ý anh." Sai lầm: viết 10 trang khiến Sponsor bỏ qua, hoặc bỏ hẳn.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Business Case chỉ có một phương án. → **Hậu quả:** Sponsor không thấy được lý do chọn; hội đồng nghi ngờ. **Cách khắc phục:** luôn có "không làm gì" và ít nhất một phương án thay thế.
2. **Sai lầm:** Số liệu lợi ích không nêu giả định. → **Hậu quả:** khi thực tế lệch, không ai biết giả định nào sai. **Cách khắc phục:** ghi giả định, chủ sở hữu và cách kiểm chứng.
3. **Sai lầm:** Mục tiêu mơ hồ ("nâng cao trải nghiệm"). → **Hậu quả:** cuối dự án ai cũng có cách hiểu riêng về thành công. **Cách khắc phục:** SMART, có con số, thời điểm, người đo.
4. **Sai lầm:** Charter không nêu quyền hạn của PM. → **Hậu quả:** PM chịu trách nhiệm mà không có quyền; mọi quyết định đều phải xin. **Cách khắc phục:** ghi ngưỡng tiền và ngày PM tự quyết.
5. **Sai lầm:** Trộn Charter với kế hoạch. → **Hậu quả:** tài liệu dài, không ai đọc và không ai ký. **Cách khắc phục:** giữ 2–3 trang; chi tiết đưa vào các kế hoạch phụ.
6. **Sai lầm:** Bỏ dự phòng vì "khách không chịu". → **Hậu quả:** rủi ro xảy ra là vượt ngân sách. **Cách khắc phục:** gắn dự phòng với các rủi ro cụ thể và đề xuất quy tắc dùng.

## Tóm tắt & tiếp theo

- Business Case chứng minh dự án đáng làm; luôn có phương án "không làm gì" và phân tích độ nhạy.
- Tiêu chí thành công phải có số, thời điểm và người đo, ở ba cấp: kinh doanh, sản phẩm, dự án.
- Charter là văn bản 2–3 trang do Sponsor ký, trao quyền cho PM bằng ngưỡng cụ thể.
- Charter khác Kế hoạch dự án: Charter cho phép dự án tồn tại; kế hoạch chỉ dẫn cách làm.

Chương 6 chuyển sang **stakeholder và kế hoạch giao tiếp**: nhận diện ai ảnh hưởng đến dự án, nhất là những người "ẩn".
