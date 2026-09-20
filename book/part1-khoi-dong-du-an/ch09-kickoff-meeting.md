# Chương 9: Kickoff meeting

## Mục tiêu học

- Phân biệt được kickoff nội bộ và kickoff với khách, và chọn thành phần, thời lượng phù hợp.
- Soạn được agenda 90 phút và deck 10 slide cho buổi kickoff.
- Dẫn dắt được buổi họp: giữ mục tiêu, dùng parking lot, kết thúc bằng quyết định–hành động–người–hạn.
- Viết được biên bản 1 trang và gửi đúng hạn.

## 9.1 Kickoff để làm gì

**Kickoff meeting** (họp khởi động) là buổi họp chính thức đầu tiên của cả đội và các bên liên quan khi dự án bắt đầu. Nó **không** phải buổi giới thiệu công ty hay đọc lại Charter. Mục đích:

1. **Cùng hiểu mục tiêu**: vì sao làm, thế nào là thành công.
2. **Cùng hiểu phạm vi và ranh giới**: làm gì, không làm gì.
3. **Cùng hiểu cách làm việc**: nhịp họp, kênh, ai quyết định gì.
4. **Xây dựng quan hệ**: người hai bên gặp nhau, nhìn thấy mặt trước khi có căng thẳng.
5. **Lộ ra sớm điều chưa rõ**: giả định sai, câu hỏi mở, kỳ vọng lệch.

Buổi kickoff tốt **không** tạo ra tài liệu mới nhiều; nó tạo ra **sự đồng thuận có dấu vết**.

## 9.2 Kickoff nội bộ và kickoff với khách

| | Nội bộ | Với khách |
|---|---|---|
| Thành phần | Đội BrightSoft | Đội + Sponsor, PO, vendor, CS |
| Mục tiêu | Cách làm việc, phân vai, rủi ro nội bộ | Mục tiêu, kỳ vọng, giao tiếp |
| Nội dung nhạy cảm | Có thể nói thẳng về biên lợi nhuận, rủi ro đội | Không |
| Thời lượng | 60 phút | 90 phút |
| Thời điểm | 1–2 ngày trước | Ngày bắt đầu |

Nên làm **nội bộ trước**: thống nhất với đội câu trả lời cho các câu hỏi khó (ví dụ "thiếu Backend thì sao?") để không bất đồng trước mặt khách.

## 9.3 Chuẩn bị

### Agenda 90 phút

| Giờ | Nội dung | Ai dẫn | Đầu ra |
|---|---|---|---|
| 0–10' | Chào mừng, ai là ai | PM | Biết nhau |
| 10–25' | Vì sao làm; mục tiêu kinh doanh | Sponsor | Cùng hiểu mục tiêu |
| 25–40' | Phạm vi, out-of-scope, mốc | PM | Xác nhận phạm vi |
| 40–55' | Cách làm việc (Hybrid, sprint) | Tech Lead/PM | Hiểu nhịp |
| 55–70' | Vai trò, RACI, giao tiếp, lịch họp | PM | RACI xác nhận |
| 70–80' | Rủi ro, giả định | PM/BA | RAID ban đầu |
| 80–90' | Câu hỏi mở, bước tiếp theo | PM | Hành động |

### Deck 10 slide

Tiêu đề · Bối cảnh · Mục tiêu & tiêu chí thành công · Phạm vi (in/out) · Lộ trình & mốc · Cách làm việc · Đội & RACI · Giao tiếp & lịch họp · Rủi ro & giả định · Bước tiếp theo. Mỗi slide một ý; tối đa 5 dòng.

### Tài liệu gửi trước

Gửi ít nhất **2 ngày làm việc** trước: Charter đã ký, Scope Statement sơ bộ, agenda, RACI dự thảo, danh sách giả định cần xác nhận. Người đến họp đã đọc thì buổi họp dành cho thảo luận, không phải đọc.

📎 Mẫu đầy đủ: `templates/meeting/kickoff-agenda-and-deck-outline.md`

## 9.4 Dẫn dắt buổi họp

- **Bắt đầu bằng mục tiêu**, để Sponsor nói trước — người ra tiền nói "vì sao" thuyết phục hơn PM.
- **Timebox từng phần**; có người giữ giờ.
- **Parking lot**: bất kỳ ý mới, tranh luận kỹ thuật sâu hay yêu cầu thay đổi được ghi vào bãi đỗ; hẹn thời hạn đánh giá. Đây là công cụ quan trọng nhất khi có người lệch mạch.
- **Mời phản hồi** bằng câu hỏi cụ thể: "Ai thấy phạm vi này thiếu gì?" thay vì "Có ai có ý kiến không?".
- **Xác nhận bằng lời**: "Vậy mình thống nhất X, Y, Z — anh chị có đồng ý không?"
- **Kết thúc đúng giờ** bằng đọc lại quyết định, hành động (người, hạn) và câu hỏi mở.

> **Khi Sponsor đổi ý ngay giữa họp:** không đồng ý, không từ chối tại chỗ. Ghi lại nguyên văn, xác nhận đã hiểu, nói rõ khi nào bạn phản hồi (thường trong 24–48 giờ) và với dữ liệu gì. Bạn giữ được cả cuộc họp lẫn uy tín.

## 9.5 Kết quả cần có và biên bản

Sau kickoff cần có:

- **RACI được xác nhận** bởi các bên.
- **Kênh liên lạc và lịch họp định kỳ** đã chốt.
- **Danh sách câu hỏi mở** kèm người trả lời và hạn.
- **Biên bản gửi trong 24 giờ**, yêu cầu phản hồi sai sót trong 1 ngày làm việc.

Biên bản 1 trang gồm: thông tin họp, tóm tắt 3 dòng, quyết định, hành động (người, hạn), câu hỏi mở, parking lot. Bỏ phần kể lại "ai nói gì".

📎 Mẫu đầy đủ: `templates/meeting/meeting-minutes.md`

## Tình huống FoodNow

Thứ Hai 05/01/2026, 09:00. Đội và khách ngồi chật phòng họp FoodNow. Hà mở đầu ngắn, mời anh Bảo nói về lý do làm dự án. Anh Bảo nói rất hào hứng, rồi dừng giữa chừng: "Tôi muốn đổi mục tiêu. 500 đơn/ngày phải đạt trong **một tháng** đầu, không phải ba tháng. Chiến dịch marketing sẽ đẩy mạnh."

Cả phòng im lặng. Dũng nhìn Hà. Hà không phản bác và cũng không đồng ý. Chị nói: "Em ghi lại đề xuất của anh: 500 đơn/ngày trong 1 tháng đầu. Mục tiêu này sẽ ảnh hưởng đến cách mình thiết kế hiệu năng và kế hoạch ra mắt. Em xin đưa vào parking lot; chị Châu và em sẽ đánh giá tác động và gửi anh trong 48 giờ để anh chọn." Chị ghi ngay lên bảng, và tiếp tục agenda.

Hai ngày sau (07/01), Hà và Châu gửi anh Bảo phân tích: đạt 500 đơn/ngày trong 1 tháng phụ thuộc vào chi phí marketing (ngoài phạm vi dự án) và đòi hỏi kiểm thử tải sớm — cộng thêm khoảng 2 tuần công. Ba lựa chọn: giữ 3 tháng; thêm mốc theo dõi 200 đơn/ngày ở tuần 4 sau go-live; hoặc tăng ngân sách cho kiểm thử tải. Anh Bảo chọn **giữ mục tiêu 500 đơn/ngày sau 3 tháng và thêm mốc theo dõi 200 đơn/ngày ở tháng đầu**. Hà cập nhật Charter (ghi vào phụ lục thay đổi) và biên bản kickoff. Cuối buổi 05/01, Hà cũng đọc lại 5 quyết định và ghi câu hỏi mở về PayEasy. Biên bản gửi ngày 06/01.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Agenda kickoff.** Soạn agenda 90 phút và danh sách 10 slide cho kickoff dự án của bạn, ghi người dẫn, đầu ra từng phần và tài liệu gửi trước.

**Bài 2 (làm ra sản phẩm).** Viết biên bản 1 trang cho một buổi họp giả định gồm ≥ 3 quyết định, 4 hành động, 2 câu hỏi mở.

**Bài 3 (tình huống ngắn).** Giữa kickoff, một stakeholder cấp cao phàn nàn: "Sao phạm vi này không có tính năng X? Tôi tưởng đã có." X nằm trong out-of-scope. Bạn phản ứng thế nào tại chỗ?

<details>
<summary>Gợi ý đáp án Bài 3</summary>

**Chẩn đoán:** kỳ vọng lệch; may là lộ ra sớm. **Phương án A:** chỉ vào slide out-of-scope, giải thích lý do và giai đoạn dự kiến (R1/R2). **Phương án B:** ghi vào parking lot, hẹn đánh giá đưa X vào bằng change request (nêu tác động lịch/chi phí). **Khuyến nghị:** A ngay để giữ cuộc họp, B nếu người đó vẫn muốn. **Lời nói mẫu:** "Cảm ơn anh, việc này rất quan trọng nên em muốn làm đúng: X đang nằm ở Release 2 vì [lý do]. Nếu anh muốn đưa vào MVP, em sẽ đánh giá tác động trong 48 giờ để mình chọn đổi với gì." **Sai lầm:** hứa "được" ngay; hoặc tranh luận đối đầu trước mặt cả phòng.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Kickoff biến thành buổi thuyết trình một chiều 90 phút. → **Hậu quả:** không ai nói, hiểu lầm lộ muộn. **Cách khắc phục:** mỗi phần có câu hỏi cho khán giả; tối thiểu 20% thời gian để thảo luận.
2. **Sai lầm:** Không gửi tài liệu trước. → **Hậu quả:** cả buổi họp dành đọc tài liệu. **Cách khắc phục:** gửi ≥ 2 ngày trước, nhắc trước 1 ngày.
3. **Sai lầm:** Đồng ý ngay với thay đổi của Sponsor giữa họp. → **Hậu quả:** cam kết không qua đánh giá, vỡ mốc sau. **Cách khắc phục:** parking lot và hạn phản hồi 24–48 giờ.
4. **Sai lầm:** Không có biên bản hoặc gửi chậm. → **Hậu quả:** mỗi người nhớ một kiểu, tranh cãi về "đã thống nhất". **Cách khắc phục:** biên bản 1 trang trong 24 giờ.
5. **Sai lầm:** Bỏ kickoff nội bộ. → **Hậu quả:** đội bất đồng trước mặt khách. **Cách khắc phục:** họp nội bộ 60 phút trước 1–2 ngày.

## Tóm tắt & tiếp theo

- Kickoff tạo đồng thuận có dấu vết về mục tiêu, phạm vi, cách làm việc và vai trò.
- Làm kickoff nội bộ trước, rồi kickoff với khách; agenda 90 phút, deck 10 slide, tài liệu gửi trước ≥ 2 ngày.
- Dẫn dắt bằng mục tiêu, timebox, parking lot; khi Sponsor đổi ý, ghi lại và hẹn phản hồi thay vì quyết ngay.
- Biên bản 1 trang trong 24 giờ: quyết định, hành động, câu hỏi mở.

Hết Phần 1. Chương 10 mở Phần 2 (lập kế hoạch) bằng **WBS**: phân rã phạm vi thành những gói việc quản lý được.
