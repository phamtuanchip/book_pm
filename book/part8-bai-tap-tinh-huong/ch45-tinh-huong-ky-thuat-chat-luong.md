# Chương 45: Tình huống về kỹ thuật & chất lượng

## Mục tiêu học

- Xử lý các tình huống kỹ thuật ở vai PM: chất lượng, hiệu năng, nợ kỹ thuật, sự cố, dữ liệu, môi trường.
- Cân bằng lịch – chất lượng – rủi ro bằng tiêu chí đã ký và dữ liệu.
- Điều phối kỹ thuật mà không quyết thay Tech Lead.

**Cách dùng:** tự viết đáp án trước rồi mở phần tham khảo; mỗi tình huống có ít nhất hai hướng hợp lệ.

---

### Tình huống 45.1 — Bug Critical sát ngày phát hành
**Giai đoạn:** R1 (tuần 63, 2027) · **Độ khó:** ★★★ · **Kỹ năng:** Go/No-Go, đánh đổi lịch–chất lượng · **Chương liên quan:** Ch37, Ch32

**Bối cảnh:** Thứ Ba 09/03/2027, hai ngày trước cửa sổ phát hành R1 (`v1.1.0`, Thứ Năm 11/03). QA phát hiện lỗi Critical: **mã khuyến mãi có thể dùng nhiều lần** khi hai yêu cầu đến cùng lúc (race condition) — có thể gây thiệt hại tài chính. Chiến dịch marketing bắt đầu 12/03.

**Dữ kiện:** sửa dự kiến 1–2 ngày; regression tự động chạy 2 giờ; Go/No-Go tiêu chí: 0 Critical. Có feature flag `promo_engine`.
**Nhiễu:** Marketing đã trả tiền quảng cáo.

**Câu hỏi:** (1) Quyết định thế nào? (2) Bạn nói gì với Sponsor và Marketing? (3) Cập nhật gì?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** đúng loại lỗi No-Go (tiền); nhưng có **công tắc** để tách deploy và release.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Hoãn phát hành khuyến mãi đến khi sửa xong và regression | An toàn | Chiến dịch có thể dời |
| B. Phát hành `v1.1.0` với `promo_engine` **tắt**, sửa lỗi, kiểm thử, bật vào 12/03–13/03 | Giữ lịch triển khai; giảm rủi ro | Cần kiểm thử trên production nhỏ |
| C. Phát hành và bật, chấp nhận rủi ro | Đúng lịch | Có thể mất tiền, phá tiêu chí |

**Khuyến nghị: B** (A nếu không kịp sửa). **Lời nói mẫu (Bảo, Marketing):** "Lỗi mã khuyến mãi có thể bị dùng nhiều lần nên em không bật ngày 11. Em phát hành với công tắc tắt, sửa trong 1–2 ngày, bật cho 1% rồi 100% ngày 12–13/03. Chiến dịch có thể dời 1 ngày — em gửi kế hoạch chi tiết."

**Tài liệu:** Go/No-Go (ghi lý do), Release Notes (flag tắt), Feature Flag Register, RAID, Decision Log.

**Sai lầm:** bật vì áp lực; giấu QA; sửa gấp không regression.

**Phòng ngừa:** thanh toán/khuyến mãi cần concurrency test; flag mặc định tắt; tiêu chí Go/No-Go ký sớm.
</details>

---

### Tình huống 45.2 — Hiệu năng không đạt
**Giai đoạn:** Thực thi (tuần 26) · **Độ khó:** ★★☆ · **Kỹ năng:** ưu tiên kỹ thuật, spike, đánh đổi · **Chương liên quan:** Ch15, Ch29

**Bối cảnh:** Thứ Hai 29/06/2026, test tải Sprint 10: theo dõi đơn thời gian thực p95 = **2,4 giây** ở 2× tải dự kiến; mục tiêu ≤ 2 giây. Dũng: "Có thể tối ưu cache nhưng mất 2 tuần và đụng nhiều chỗ".

**Dữ kiện:** feature complete 17/07; UAT 27/07; tính năng này Must; R05 đã ghi; float nhánh dev 5 ngày.
**Nhiễu:** anh Bảo "khách mới nhìn thấy 2,4 giây chưa thấy sao".

**Câu hỏi:** (1) Bạn làm gì? (2) Bạn hỏi Dũng gì? (3) Đề xuất phương án?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** chênh lệch 20% ở tải cao (2× dự kiến); cần biết **mức tải thực**. Có thể 2,4 giây ở tải thật (1×) chỉ 1,7 giây.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Đo lại ở 1× và 1,5×; nếu đạt, chấp nhận với giám sát | Nhanh, dựa dữ liệu | Rủi ro tăng tải |
| B. Tối ưu cache chọn lọc (5 ngày) + giảm tần suất cập nhật vị trí (giảm tải) | Kỹ thuật + sản phẩm | Cần PO đồng ý tần suất |
| C. Tối ưu đầy đủ 2 tuần | Chắc chắn | Ăn float, trễ |

**Khuyến nghị: A rồi B.** **Hỏi Dũng:** "Nút cổ chai ở đâu (số liệu)? Phương án nhỏ nhất đạt ≤ 2 giây? Rủi ro gì nếu giảm tần suất cập nhật?" **Lời nói mẫu (Bảo):** "Ở tải dự kiến thực tế con số tốt hơn; em xác nhận trong 2 ngày. Nếu cần, em giảm tần suất cập nhật vị trí từ 3 giây xuống 5 giây để đạt mục tiêu mà vẫn dùng được."

**Tài liệu:** Quality Plan (kết quả tải), RAID (R05), backlog (story tối ưu), báo cáo.

**Sai lầm:** bỏ mục tiêu; ép Dũng làm hết trong 2 tuần; giấu số liệu.

**Phòng ngừa:** test tải mỗi sprint; spike sớm; định nghĩa tải thực.
</details>

---

### Tình huống 45.3 — Nợ kỹ thuật vs áp lực tính năng
**Giai đoạn:** R1 (T58, 2027) · **Độ khó:** ★★☆ · **Kỹ năng:** thương lượng nợ kỹ thuật · **Chương liên quan:** Ch29

**Bối cảnh:** Thứ Hai 08/02/2027. Bảo muốn dùng toàn bộ sprint cho tính năng R1 và cắt "10% mỗi sprint trả nợ". Dũng cảnh báo nợ TD-01 (đơn hàng ↔ thanh toán) làm mỗi story R1 chậm 15%.

**Dữ kiện:** TD-01 gốc 12 ngày, lãi 1,5 ngày/sprint (tăng vì thêm khuyến mãi); còn 5 sprint đến R1; CFR đang 9%.
**Nhiễu:** đối thủ vừa ra tính năng mới.

**Câu hỏi:** (1) Bạn tính chi phí trì hoãn thế nào? (2) Bạn nói gì với Bảo? (3) Đề xuất?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** thiếu ngôn ngữ chung: nợ kỹ thuật không được dịch thành thời gian/tiền.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Trả TD-01 hết trong 1 sprint | Giải quyết gốc | Chậm tính năng 1 sprint |
| B. Giữ 10% mỗi sprint, ưu tiên TD-01 trước | Đều, ít rủi ro | Kéo dài |
| C. Bỏ trả nợ | Nhanh tính năng | Lãi tăng, rủi ro |

**Phép tính:** payback = 12 ÷ 1,5 = 8 sprint > 5 sprint còn lại (ở mức lãi hiện tại); nhưng lãi tăng do khuyến mãi (ước 2,5 ngày/sprint) → payback 4,8 sprint < 5 → **nên trả**. **Khuyến nghị: B với TD-01 ưu tiên** (2 sprint, 20% dung lượng).

**Lời nói mẫu:** "Mỗi sprint mình mất khoảng 2,5 ngày vì module này; trả nó tốn 12 ngày và hoàn vốn trong khoảng 5 sprint — đúng lúc R1 xong và trước R2. Em đề xuất 20% hai sprint tới để trả TD-01; sau đó quay lại 10%."

**Tài liệu:** Technical Debt Register, backlog, Decision Log, Roadmap (không đổi ngày R1, cắt hạng mục Could nếu cần).

**Sai lầm:** nói "nợ kỹ thuật quan trọng" không có số; đồng ý bỏ hết; lấy 2 tuần liền.

**Phòng ngừa:** register, payback; 10% mỗi sprint từ đầu.
</details>

---

### Tình huống 45.4 — Sự cố production giờ cao điểm
**Giai đoạn:** Vận hành (tuần 48) · **Độ khó:** ★★★ · **Kỹ năng:** ứng phó sự cố, giao tiếp · **Chương liên quan:** Ch38, Ch33

**Bối cảnh:** Thứ Năm 03/12/2026, 19:30 (giờ cao điểm): tỷ lệ thanh toán thẻ thành công giảm từ 98% xuống 61%. PayEasy báo một sự cố phía họ; COD vẫn bình thường. Hà đang ở nhà.

**Dữ kiện:** có kill switch `killswitch_payment_card`; ~300 đơn/giờ giờ này; on-call: Ánh.
**Nhiễu:** anh Bảo đang gọi điện liên tục.

**Câu hỏi:** (1) 5 việc đầu tiên trong 15 phút? (2) Bạn thông báo gì cho người dùng, nhà hàng, CS? (3) Sau sự cố làm gì?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** P1; nguyên nhân bên ngoài (vendor); tác động lớn ở giờ cao điểm; có đường giảm nhẹ.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Bật kill switch thẻ; chỉ COD trong khi PayEasy khắc phục | Giữ đơn, tránh giao dịch lỗi | Mất khách chỉ muốn thẻ |
| B. Giữ thẻ và chờ | Không đổi | 39% thất bại → mất khách |
| C. Chuyển sang cổng dự phòng | Tốt nhất nếu có | Chưa có |

**Khuyến nghị: A ngay.** **Việc đầu tiên:** (1) xác nhận P1, mở war room, Incident Commander; (2) kill switch thẻ; (3) liên hệ hotline PayEasy; (4) nhắn Sponsor 1 tin ngắn (vấn đề – tác động – việc đang làm – cập nhật tiếp lúc 20:00); (5) thông báo người dùng trong app ("Hiện thanh toán thẻ tạm gián đoạn, bạn có thể chọn COD") và CS/nhà hàng.

**Sau sự cố:** báo cáo sự cố trong 48 giờ; đối soát; thoả thuận SLA với PayEasy; thêm cổng dự phòng vào backlog R2; kiểm thử kill switch hằng tháng.

**Sai lầm:** chờ điều tra; hứa thời gian khôi phục chưa chắc; để nhiều người chỉ huy.

**Phòng ngừa:** kill switch, cổng dự phòng, cảnh báo tỷ lệ thành công; diễn tập.
</details>

---

### Tình huống 45.5 — Lộ dữ liệu khách hàng
**Giai đoạn:** Vận hành (tuần 46) · **Độ khó:** ★★★ · **Kỹ năng:** quản lý sự cố dữ liệu, tuân thủ · **Chương liên quan:** Ch29, Ch38

**Bối cảnh:** Thứ Ba 17/11/2026. Một nhân viên CS dùng Admin xuất file CSV **300 khách (tên, số điện thoại, địa chỉ)** để "phân tích" và gửi email cho người ngoài công ty theo yêu cầu của một đối tác. Huy phát hiện qua cảnh báo Admin export.

**Dữ kiện:** file đã gửi cách đây 2 giờ; không có dữ liệu thẻ; Admin cho phép export toàn bộ.
**Nhiễu:** nhân viên nói "đối tác cần gấp".

**Câu hỏi:** (1) Bạn làm gì trong 24 giờ? (2) Ai cần biết? (3) Bạn sửa gốc thế nào?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** sự cố dữ liệu cá nhân (nội bộ/quyền quá rộng); cần **chứa** (contain), **đánh giá**, **thông báo đúng quy định**, **sửa gốc**. Không phải chỉ kỷ luật cá nhân.

| Bước | Hành động |
|---|---|
| Chứa | Yêu cầu người nhận xoá/không dùng và xác nhận; thu hồi quyền export của tài khoản; lưu log |
| Đánh giá | Loại dữ liệu, số người, rủi ro, đã có ai khác nhận |
| Thông báo | Sponsor, pháp lý; đánh giá nghĩa vụ thông báo theo quy định (nhờ pháp lý xác nhận), có thể thông báo cho khách bị ảnh hưởng |
| Sửa gốc | Hạn chế export (giới hạn cột/số lượng, cần duyệt), che dữ liệu nhạy cảm, log audit, đào tạo |

**Khuyến nghị:** làm cả bốn, dẫn dắt bởi pháp lý và Sponsor. **Lời nói mẫu (nhân viên):** "Em hiểu đối tác cần gấp, nhưng dữ liệu khách không được gửi ra ngoài. Việc quan trọng bây giờ là mình cùng xử lý để giảm hậu quả." **Sponsor:** "Có một sự cố dữ liệu cá nhân nội bộ, 300 khách, không có dữ liệu thẻ. Em đã chứa và đang cùng pháp lý đánh giá nghĩa vụ thông báo; đề xuất siết quyền export."

**Tài liệu:** báo cáo sự cố, RAID (R06), Decision Log, thay đổi phân quyền (CR), đào tạo.

**Sai lầm:** giấu; chỉ kỷ luật cá nhân; sửa im lặng.

**Phòng ngừa:** quyền tối thiểu; export có duyệt; log audit; đào tạo dữ liệu.
</details>

---

### Tình huống 45.6 — Môi trường staging không ổn định
**Giai đoạn:** Chuẩn bị UAT (tuần 27) · **Độ khó:** ★★☆ · **Kỹ năng:** ưu tiên hạ tầng, tác động lịch · **Chương liên quan:** Ch30, Ch33

**Bối cảnh:** Thứ Ba 07/07/2026. Staging sập 3 lần trong tuần (hai team dùng chung một DB test); QA mất 30% thời gian chờ môi trường. UAT bắt đầu 27/07.

**Dữ kiện:** Ánh 50% thời gian; cần môi trường UAT riêng; chi phí cloud thêm khoảng 6 triệu/tháng.
**Nhiễu:** Ánh đang quá tải.

**Câu hỏi:** (1) Bạn làm gì? (2) Bạn thương lượng gì? (3) Tiêu chí vào UAT?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** thiếu môi trường riêng cho UAT; DB dùng chung; ảnh hưởng đường găng (kiểm thử bảo mật/UAT).

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Dựng môi trường UAT riêng ngay (infra as code), tách DB | Giải quyết gốc | Ánh cần thêm 4–5 ngày |
| B. Lịch dùng chung staging | Rẻ | Vẫn gây gián đoạn |
| C. Thêm người DevOps hỗ trợ 2 tuần | Nhanh | Chi phí |

**Khuyến nghị: A + C** (dự phòng ≈ 20 triệu). **Lời nói mẫu (quản lý Ánh/Sponsor):** "Staging sập làm QA mất 30% thời gian; UAT không thể chạy trên môi trường này. Em xin thêm 5 ngày của Ánh và một DevOps hỗ trợ 2 tuần; chi phí khoảng 20 triệu từ dự phòng." **Tiêu chí vào UAT:** môi trường UAT riêng, giống production (config diff), smoke test 100%.

**Tài liệu:** Environment Matrix, RAID, budget, Release Calendar.

**Sai lầm:** để UAT chạy trên môi trường không ổn định; không tính môi trường vào WBS.

**Phòng ngừa:** lập môi trường trong Sprint 0; IaC; test tự động môi trường.
</details>

---

## Kỹ năng đã luyện

| Tình huống | Kỹ năng | Chương gốc |
|---|---|---|
| 45.1 | Go/No-Go, feature flag | Ch32, Ch37 |
| 45.2 | Spike và đánh đổi hiệu năng | Ch15, Ch29 |
| 45.3 | Nợ kỹ thuật bằng payback | Ch29 |
| 45.4 | Sự cố production | Ch38 |
| 45.5 | Sự cố dữ liệu, tuân thủ | Ch29 |
| 45.6 | Môi trường và UAT | Ch30 |

## Ba tình huống mở (tự viết đáp án)

1. **Dev đề xuất đổi framework giữa dự án:** nói sẽ tốt lâu dài. Còn 4 tháng đến hạn. Bạn làm gì?
2. **Test tự động đỏ 30% do flaky:** đội bắt đầu bỏ qua kết quả. Bạn xử lý thế nào?
3. **Lỗi chỉ xảy ra trên một dòng điện thoại cũ:** 15% người dùng thử nghiệm dùng dòng đó. Bạn quyết định thế nào?
