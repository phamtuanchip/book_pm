# Chương 36: Quản lý kỳ vọng & khách hàng khó

## Mục tiêu học

- Giải thích kỳ vọng hình thành thế nào và biết chỗ PM can thiệp được.
- Nói "không" khéo bằng cách đưa lựa chọn; đàm phán theo lợi ích, dùng BATNA và ZOPA.
- Xử lý các kiểu khách hàng khó: đổi ý liên tục, "biết code" can thiệp, Sponsor vắng mặt.
- Dùng demo định kỳ, email chốt lại và kịch bản reset kỳ vọng.
- Xử lý khủng hoảng niềm tin.

## 36.1 Kỳ vọng hình thành thế nào

**Kỳ vọng** là điều một người tin sẽ xảy ra. Nó hình thành từ bốn nguồn: **lời hứa** (bán hàng, kickoff, chat), **trải nghiệm trước** (dự án cũ), **so sánh** (đối thủ, app khác) và **im lặng** — điều không ai nói rõ, người ta tự điền theo hướng có lợi. Phần lớn xung đột không đến từ việc đội làm sai mà từ việc **hai bên hiểu khác nhau về cùng một chữ** ("xong", "đơn giản", "vài ngày", "đầy đủ").

Vì vậy quản lý kỳ vọng không phải nghệ thuật thuyết phục mà là **kỷ luật làm rõ** liên tục: nêu rõ bằng số, văn bản hoá, cho xem sản phẩm thật sớm và cập nhật khi thực tế đổi. Một nguyên tắc: **chênh lệch giữa kỳ vọng và thực tế sinh ra thất vọng, không phải chất lượng tuyệt đối** — khách hài lòng khi thực tế đạt điều họ đã được nói.

## 36.2 Nói "không" khéo

Bạn hiếm khi thực sự cần nói "không"; bạn cần nói **"được, với điều kiện…"** hoặc **"không cùng lúc, nhưng có thể…"**. Ba bước:

1. **Ghi nhận mục tiêu phía sau yêu cầu** ("Anh muốn chiến dịch có điểm nhấn.").
2. **Nêu ràng buộc bằng số** ("Cần 40 ngày công; SPI 0,86; dự phòng còn 86,8 triệu.").
3. **Đưa lựa chọn với đánh đổi** rồi khuyến nghị.

Câu nên tránh: "Không thể được", "Đội bảo không làm được", "Đó không thuộc phạm vi" nói trống không. Câu nên dùng: "Em muốn giúp anh đạt mục tiêu đó; cách nào giữ được ngày và chất lượng là…".

Kịch bản 6 bước chuẩn (ghi nhận mục tiêu → sự thật → hệ quả → lựa chọn → khuyến nghị → chốt văn bản) có ở mẫu.

📎 Mẫu đầy đủ: `templates/meeting/expectation-reset-script.md`

## 36.3 Đàm phán: lợi ích, BATNA, ZOPA

Mô hình đàm phán dựa trên nguyên tắc (Harvard):

- **Lập trường** (họ nói muốn gì) khác **lợi ích** (họ thật sự cần gì). Đàm phán theo lợi ích mở nhiều lối hơn: Sponsor đòi "khuyến mãi đầy đủ" (lập trường) nhưng cần "một điểm nhấn cho chiến dịch" (lợi ích).
- **BATNA** (Best Alternative To a Negotiated Agreement): phương án tốt nhất của bạn nếu không đạt thoả thuận. Biết BATNA của mình và của họ quyết định sức mạnh thương lượng. Nếu BATNA của bạn yếu, cải thiện nó trước khi đàm phán.
- **ZOPA** (Zone of Possible Agreement): vùng giao nhau nơi cả hai cùng chấp nhận được.
- Tách **người** khỏi **vấn đề**; đưa **tiêu chí khách quan** (dữ liệu, chuẩn ngành, ước lượng của đội) thay vì ý chí.
- **Tạo nhiều phương án** trước khi chọn; **ưu tiên thứ họ ít tốn, bạn có giá trị** (giá trị không đối xứng).

📎 Mẫu đầy đủ: `templates/meeting/negotiation-prep-sheet.md`

## 36.4 Các kiểu khách hàng khó

| Kiểu | Biểu hiện | Nguyên nhân thường gặp | Cách xử lý |
|---|---|---|---|
| **Đổi ý liên tục** | Mỗi tuần một yêu cầu mới; phủ định điều đã chốt | Chưa rõ nhu cầu; thấy sản phẩm mới nghĩ ra ý mới; áp lực thị trường | Demo sớm để ý tưởng lộ ra sớm; CR (Ch20); ghi lại quyết định; "hoán đổi" thay vì "thêm" |
| **Khách "biết code"** | Can thiệp giải pháp kỹ thuật, chỉ đạo Dev trực tiếp | Muốn kiểm soát; từng làm kỹ thuật | Kênh chính thức qua PM/Tech Lead; nêu **mục tiêu** trước giải pháp; mời tham gia review kiến trúc để có tiếng nói đúng chỗ |
| **Sponsor vắng mặt** | Không phản hồi, không dự demo, quyết định chậm | Quá bận; không thấy ưu tiên | Lịch cố định ngắn; quyết định 1 trang; uỷ quyền bằng văn bản; leo thang qua cấp cao; ghi hậu quả chậm quyết định vào RAID |
| **"Micromanager"** | Hỏi tiến độ hằng giờ | Lo lắng; thiếu thông tin | Dashboard, báo cáo đúng giờ, giảm bất ngờ |
| **Không chịu ký nghiệm thu** | Kéo dài "còn góp ý nhỏ" | Sợ mất đòn bẩy; kỳ vọng chưa rõ | Tiêu chí chấp nhận từ đầu; UAT có sign-off; nghiệm thu có điều kiện (Ch37) |

## 36.5 Demo định kỳ để khoá kỳ vọng

**Demo hai tuần một lần** (Sprint Review) là công cụ quản lý kỳ vọng mạnh nhất: khách **thấy** thay vì **tưởng tượng**. Quy tắc: demo **phần mềm chạy được** trên staging, không slide; mời đúng người quyết định; ghi phản hồi vào backlog; **nêu rõ cái gì chưa có** để tránh hiểu lầm; kết bằng email tóm tắt ("đã thấy gì, đồng ý gì, sẽ làm gì tiếp"). Với FoodNow, demo chạy thật cho HĐQT ngày 03/06 là kết quả của thoả thuận ở tuần 6 (Ch11).

## 36.6 Văn bản hoá: email chốt lại

Sau mỗi cuộc họp có quyết định, gửi **email chốt lại trong 2 giờ**: mục tiêu, quyết định, điều **không** thay đổi, hành động. Nó bảo vệ cả hai bên: người ta nhớ theo cách có lợi; văn bản là bộ nhớ chung. Ghi vào Decision Log và cập nhật RAID.

## 36.7 Khủng hoảng niềm tin

Khi khách mất niềm tin (vì trễ, lỗi lặp, bị bất ngờ):

1. **Nhận thẳng sự thật**, không biện minh; xin lỗi cụ thể cho điều đã xảy ra.
2. **Nghe** lý do và cảm giác của họ trước khi giải thích.
3. **Đưa kế hoạch phục hồi** ngắn, cụ thể, có mốc kiểm tra và người chịu trách nhiệm.
4. **Tăng minh bạch** tạm thời: báo cáo thường xuyên hơn, dashboard, họp ngắn hằng tuần.
5. **Giữ cam kết nhỏ đều đặn** để xây lại niềm tin; đừng hứa lớn.
6. **Leo thang có chủ đích**: đưa lãnh đạo hai bên vào khi cần.

## Tình huống FoodNow

Thứ Hai 08/06/2026, sau buổi demo chạy thật cho HĐQT (03/06) rất thành công, anh Bảo gọi Hà: "Hội đồng thích lắm. Tôi muốn thêm **khuyến mãi** vào MVP để chiến dịch tháng 10 có điểm nhấn. **Không tăng ngân sách**, giữ ngày 03/10 nhé." Hà biết trước mình đối diện với một Sponsor đang phấn khởi và không muốn nghe "không".

Chị dành 30 phút chuẩn bị bằng **phiếu đàm phán**: lập trường của anh Bảo là "khuyến mãi đầy đủ, không thêm tiền"; lợi ích là "điểm nhấn cho chiến dịch và đối tác". BATNA của chị: giữ phạm vi, khuyến mãi ở R1, báo cáo rủi ro nếu bị ép. Dữ kiện: khuyến mãi đầy đủ cần khoảng **40 ngày công**; SPI khoảng 0,86; dự phòng còn **86,8 triệu**; ranh giới: không dời go-live, không giảm kiểm thử thanh toán.

Chiều hôm đó chị gặp anh Bảo, dùng **kịch bản 6 bước**. Bước 1: "Em hiểu anh muốn chiến dịch có điểm nhấn." Bước 2–3: nêu 40 ngày công, và nếu thêm mà giữ ngày, phải cắt thứ khác hoặc trễ khoảng 2 tuần. Bước 4: ba lựa chọn — (A) hoãn khuyến mãi sang R1; (B) **banner khuyến mãi tĩnh** trong MVP, 8 ngày công, hoán đổi với nút chia sẻ (Could); (C) khuyến mãi đầy đủ và dời go-live hoặc thêm ngân sách. Bước 5: khuyến nghị B. Anh Bảo hỏi: "Banner tĩnh thì có gì hay?" Hà: "Anh có màn hình hiển thị chương trình, nhà hàng đối tác thấy được, và mình vẫn giữ luồng thanh toán an toàn." Anh chọn B. Bước 6: Hà gửi **email chốt lại** trong hai giờ: quyết định, hoán đổi với hạng mục Could, ngày go-live và ngân sách không đổi. Anh Bảo trả lời "OK" trong 20 phút. Nhờ đó, ở tuần 30, khi anh Bảo nhắc "khuyến mãi", email 08/06 là điểm tựa; và khuyến mãi đầy đủ được xếp vào R1 với cam kết mốc.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Role-play đàm phán.** Kịch bản: Sponsor nói "Tôi muốn thêm tính năng chat với tài xế vào bản ra mắt, không thêm tiền, không dời ngày. Đội ước lượng 3 tuần." Bạn là PM. (a) Điền phiếu chuẩn bị (lợi ích, BATNA, ZOPA, ranh giới); (b) viết kịch bản 6 bước với ít nhất 3 lựa chọn; (c) viết email chốt lại 4 dòng.

**Bài 2 (làm ra sản phẩm).** Lập kế hoạch xử lý cho một khách "biết code" đang nhắn tin trực tiếp cho Dev: mục tiêu, cách chuyển kênh, cách tạo cho họ tiếng nói đúng chỗ, dấu hiệu thành công.

**Bài 3 (tình huống ngắn).** Sponsor không dự 3 buổi demo liên tiếp và không trả lời quyết định treo 10 ngày; sprint bị chặn. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** (a) Lập trường: "thêm chat, không tiền, không dời." Lợi ích có thể: khách liên lạc được tài xế khi giao hàng; giảm cuộc gọi; điểm nổi bật. BATNA của PM: giữ phạm vi; đề xuất giải pháp thay thế. ZOPA: nút gọi điện/ẩn số (2–3 ngày) trong bản ra mắt, chat đầy đủ ở R1. (b) Ba lựa chọn: A chat ở R1; B "gọi tài xế qua tổng đài ẩn số" (rẻ, ~5 ngày công); C chat đầy đủ + dời 3 tuần hoặc thêm tiền. Khuyến nghị B. (c) Email: mục tiêu, quyết định B, không đổi ngày/ngân sách, chat ở R1. 

**Bài 3:** Chẩn đoán: quyết định chậm là rủi ro; Sponsor quá bận hoặc không thấy ưu tiên. Phương án: A — lịch quyết định 15 phút cố định + quyết định 1 trang; B — uỷ quyền bằng văn bản cho PO; C — leo thang tới cấp trên/giám đốc BrightSoft và cấp HĐQT nếu bị chặn; D — ghi hậu quả (ngày trễ/tiền) vào RAID và báo cáo. Khuyến nghị A + B, với D làm bằng chứng. Lời nói mẫu: "Em cần 15 phút mỗi thứ Năm để anh duyệt các quyết định treo; nếu anh bận, anh uỷ quyền cho chị Châu bằng email để sprint không bị chặn." Sai lầm: tự quyết thay Sponsor; im lặng chờ.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Nói "không" trần trụi. → **Hậu quả:** khách phòng thủ, quan hệ xấu. **Cách khắc phục:** ghi nhận mục tiêu, số liệu, lựa chọn.
2. **Sai lầm:** Đồng ý miệng rồi "cố gắng". → **Hậu quả:** trễ, mất tin. **Cách khắc phục:** đánh giá tác động trước; chốt bằng văn bản.
3. **Sai lầm:** Không có email chốt lại. → **Hậu quả:** mỗi người nhớ một kiểu. **Cách khắc phục:** email trong 2 giờ; ghi Decision Log.
4. **Sai lầm:** Đàm phán theo lập trường. → **Hậu quả:** bế tắc, thắng–thua. **Cách khắc phục:** tìm lợi ích, tạo nhiều phương án.
5. **Sai lầm:** Để khách chỉ đạo Dev trực tiếp. → **Hậu quả:** phá kế hoạch, đội bối rối. **Cách khắc phục:** kênh chính thức và tiếng nói đúng chỗ.
6. **Sai lầm:** Chỉ demo slide. → **Hậu quả:** khách không thấy thực tế, kỳ vọng lệch. **Cách khắc phục:** demo sản phẩm chạy được, ghi nhận phản hồi.

## Tóm tắt & tiếp theo

- Kỳ vọng hình thành từ lời hứa, trải nghiệm, so sánh và im lặng; quản lý kỳ vọng là kỷ luật làm rõ.
- Nói "được, với điều kiện…": ghi nhận mục tiêu, nêu số, đưa lựa chọn; đàm phán theo lợi ích, BATNA, ZOPA.
- Xử lý khách đổi ý, "biết code", vắng mặt bằng demo, kênh chính thức, quyết định 1 trang, CR.
- Email chốt lại trong 2 giờ; khủng hoảng niềm tin: nhận thẳng, kế hoạch phục hồi, minh bạch, cam kết nhỏ đều.

Chương 37 nói về **kiểm thử, UAT và chuẩn bị phát hành**: từ kế hoạch UAT đến Go/No-Go.
