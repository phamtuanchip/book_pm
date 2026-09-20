# Chương 2: Vai trò Project Manager trong dự án phần mềm

## Mục tiêu học

- Nêu được PM làm gì và **không** làm gì trong dự án phần mềm.
- Phân biệt được PM với Scrum Master, Product Owner, BA, Tech Lead và Engineering Manager bằng bảng RACI đơn giản.
- Mô tả được khác biệt của vai trò PM ở công ty outsource, công ty sản phẩm và in-house.
- Lập được lịch làm việc tuần của PM với các đầu việc lặp lại chính.
- Nhận ra kiểu PM "cảnh sát" đang phá đội như thế nào và thay bằng cách làm nào.

## 2.1 PM làm gì — và không làm gì

Một câu định nghĩa dùng được: **PM chịu trách nhiệm để dự án đạt mục tiêu đã thoả thuận, trong các ràng buộc đã chốt, bằng công sức của người khác.** Hai vế cuối là chỗ khó: PM ít khi tự tay làm ra sản phẩm, nhưng vẫn là người trả lời khi sản phẩm không ra.

**PM làm:**

- **Đặt mục tiêu và luật chơi**: cùng Sponsor chốt mục tiêu, ràng buộc, tiêu chí thành công (Ch05).
- **Biến mục tiêu thành kế hoạch**: phạm vi, lịch, ngân sách, nguồn lực, rủi ro (Phần 2–3).
- **Giữ nhịp**: theo dõi tiến độ, chi phí, chất lượng; phát hiện lệch sớm và điều chỉnh (Phần 6).
- **Gỡ vướng**: xử lý blocker mà đội tự gỡ không được — phụ thuộc bên ngoài, quyết định của khách, nguồn lực.
- **Kết nối và giao tiếp**: đảm bảo đúng người biết đúng thông tin đúng lúc (Ch06, Ch35).
- **Bảo vệ đội**: chắn bớt yêu cầu gấp, thay đổi vô tổ chức, áp lực phi lý (Ch20, Ch36).
- **Nói thật**: báo tin xấu sớm cùng phương án, không để Sponsor bất ngờ.

**PM không làm (mặc định):**

- **Không quyết định kỹ thuật thay Tech Lead.** PM đặt ràng buộc (thời gian, chi phí, rủi ro), Tech Lead chọn giải pháp. PM được hỏi "vì sao", được yêu cầu nêu phương án và đánh đổi, nhưng không áp giải pháp.
- **Không quyết định ưu tiên sản phẩm thay Product Owner.** PM cung cấp dữ liệu về chi phí và thời gian để PO chọn.
- **Không giao việc chi tiết cho từng Dev.** Trong đội Scrum, đội tự tổ chức; PM làm rõ mục tiêu và ràng buộc.
- **Không "quản lý" bằng cách kiểm soát mọi thứ.** Kiểm soát nhiều là dấu hiệu thiếu tin cậy (xem mục 2.6).

> **Câu hỏi hay gặp:** "PM có quyền quyết định kỹ thuật không?" Về nguyên tắc: **PM có quyền quyết định về ràng buộc và đánh đổi, Tech Lead có quyền quyết định về giải pháp.** Khi cả hai va nhau (giải pháp tốt nhất đòi thêm 3 tuần), quyết định thuộc Sponsor với thông tin từ cả hai. Bài tập 2 của chương này bàn kỹ hơn.

## 2.2 PM và các vai trò lân cận

Nhiều người mới nhầm lẫn PM với các vai trò khác, đặc biệt trong đội Agile. Ranh giới trên giấy khá rõ, nhưng ngoài đời bị mờ vì ở công ty nhỏ một người đảm nhiều vai.

| Vai trò | Câu hỏi họ chịu trách nhiệm | Trọng tâm | Không phải việc chính |
|---|---|---|---|
| **Project Manager** | "Dự án có đạt mục tiêu trong ràng buộc không?" | Kế hoạch, ngân sách, rủi ro, giao tiếp, stakeholder | Ưu tiên sản phẩm, chọn kiến trúc |
| **Scrum Master** | "Đội có làm Scrum tốt và tự cải tiến không?" | Quy trình Scrum, gỡ trở ngại của đội, coaching | Ngân sách, hợp đồng, báo cáo Sponsor |
| **Product Owner** | "Sản phẩm có giá trị nhất với người dùng không?" | Backlog, ưu tiên, tầm nhìn sản phẩm | Lịch chi tiết, quản lý con người |
| **Business Analyst** | "Yêu cầu có rõ, đủ và đúng không?" | Phân tích, đặc tả, tiêu chí chấp nhận | Kế hoạch tổng, ngân sách |
| **Tech Lead** | "Giải pháp kỹ thuật có đúng và bền không?" | Kiến trúc, chất lượng code, cố vấn kỹ thuật | Ngân sách, quan hệ khách hàng |
| **Engineering Manager** | "Con người kỹ thuật có phát triển và làm được việc không?" | Tuyển dụng, đánh giá, phát triển nhân sự | Kế hoạch dự án cụ thể |

Trong dự án Hybrid như FoodNow, ai làm gì cho mỗi việc lớn? Bảng RACI (R = Responsible – làm; A = Accountable – chịu trách nhiệm cuối, chỉ một người; C = Consulted – được tham vấn; I = Informed – được thông báo):

| Việc | PM (Hà) | PO (Châu) | BA (Lan) | Tech Lead (Dũng) | Sponsor (Bảo) |
|---|---|---|---|---|---|
| Duyệt mục tiêu & ngân sách | R | C | I | C | **A** |
| Ưu tiên backlog | C | **A/R** | R | C | I |
| Đặc tả yêu cầu chi tiết | I | A | **R** | C | I |
| Chọn kiến trúc & công nghệ | C | I | I | **A/R** | I |
| Lịch & dự báo ngày xong | **A/R** | C | C | R | I |
| Quản lý rủi ro dự án | **A/R** | C | C | R | I |
| Duyệt change request lớn | R | C | C | C | **A** |
| Báo cáo trạng thái | **A/R** | C | C | C | I |

Ở phần **Scrum Master**: trong công ty BrightSoft, đội FoodNow không có Scrum Master chuyên trách; Hà phối hợp với Dũng và Lan để giữ nhịp Scrum. Đây là tình huống phổ biến ở đội nhỏ. Vai trò không cần người riêng, nhưng **công việc của vai trò đó vẫn phải có người làm** — sẽ nói kỹ ở Ch23.

## 2.3 PM ở ba loại tổ chức

PM là cùng tên gọi nhưng khác việc tuỳ tổ chức:

| Khía cạnh | Outsource / gia công | Công ty sản phẩm | In-house (IT nội bộ) |
|---|---|---|---|
| Khách hàng | Bên ngoài, có hợp đồng | Người dùng thị trường, đại diện qua PO | Các phòng ban trong công ty |
| Điều gì cố định | Thường phạm vi + giá (fixed-price) hoặc đội + thời gian (T&M) | Thường thời gian và nguồn lực, phạm vi linh hoạt | Ngân sách năm, ưu tiên theo phòng ban |
| Rủi ro lớn nhất | Tranh chấp phạm vi, thanh toán, khách đổi ý | Chọn sai sản phẩm, chậm ra thị trường | Ưu tiên chồng chéo, thiếu nguồn lực |
| Việc riêng của PM | Hợp đồng, change request, nghiệm thu, biên lợi nhuận | Phối hợp với PO, roadmap, release cadence | Thương lượng nguồn lực, quản lý stakeholder nội bộ |
| Đo thành công | Nghiệm thu, đúng hạn, biên lợi nhuận, khách quay lại | Chỉ số sản phẩm | Giá trị nghiệp vụ, mức độ hài lòng phòng ban |

Cuốn sách này chọn góc nhìn **outsource** (Hà thuộc BrightSoft) vì phổ biến nhất với độc giả Việt Nam và vì nó phơi ra nhiều vấn đề nhất: hợp đồng, thay đổi, khách hàng. Ở từng chương, phần nào khác nhau đáng kể giữa ba loại tổ chức sẽ được nêu.

## 2.4 Một tuần của PM

Nhiều người mới nghĩ PM chỉ họp và làm báo cáo. Thực tế, khối lượng chính là **suy nghĩ về điều sắp xảy ra**: rủi ro nào sắp tới, phụ thuộc nào sắp trễ, ai đang quá tải. Nếu không khoá thời gian cho việc này, nó bị họp nuốt hết.

10 đầu việc lặp lại của PM:

1. Cập nhật lịch và dự báo ngày hoàn thành.
2. Rà soát RAID Log (rủi ro, giả định, vấn đề, phụ thuộc).
3. Viết và gửi báo cáo trạng thái.
4. 1-1 với thành viên đội.
5. Theo dõi ngân sách thực tế so với kế hoạch.
6. Xử lý change request.
7. Gỡ blocker.
8. Đồng bộ với stakeholder và vendor.
9. Chuẩn bị họp SteerCo (họp Ban chỉ đạo, thường hằng tháng).
10. Quan sát sức khoẻ đội: quá tải, xung đột, im lặng bất thường.

📎 Mẫu đầy đủ: `templates/meeting/pm-weekly-routine.md`

Trích đoạn lịch mẫu của Hà (giữa sprint):

| Thứ | Hoạt động | Đầu ra |
|---|---|---|
| Hai | Rà RAID 15 phút; giờ sâu 1: cập nhật kế hoạch | RAID + forecast mới |
| Ba | 1-1 Dũng; đồng bộ PO; đồng bộ vendor | Việc kỹ thuật, ưu tiên, ngày hứa vendor |
| Tư | 1-1 luân phiên; điểm chất lượng với Nam | Tín hiệu đội, chỉ số chất lượng |
| Năm | Họp Sponsor 30 phút; giờ sâu 2: báo cáo tuần | Quyết định, bản nháp báo cáo |
| Sáu | Gửi báo cáo lúc 15:00; rà lịch tuần sau | Báo cáo 1 trang, 3 ưu tiên |

**Quy tắc bảo vệ giờ sâu:** nếu hai tuần liền bạn không có giờ sâu, đó là dấu hiệu bạn đang chữa cháy chứ không quản lý. Hãy cắt họp.

## 2.5 Kỹ năng của PM

**Kỹ năng cứng** (học được bằng sách và thực hành có chủ đích):

- Lập kế hoạch: WBS, ước lượng, lịch, ngân sách (Phần 2).
- Quản lý rủi ro và thay đổi (Phần 3).
- Hiểu quy trình phát triển: Waterfall, Scrum, Kanban, CI/CD (Phần 4–5).
- Đọc số liệu: velocity, EVM, DORA (Ch34, Ch33).
- Hiểu kỹ thuật ở mức đủ để hỏi đúng câu (Ch29).

**Kỹ năng mềm** (khó học hơn, quyết định thăng tiến):

- **Giao tiếp rõ và ngắn**: viết một trang thay vì mười trang.
- **Đàm phán**: tìm lợi ích đằng sau lập trường (Ch36).
- **Lãnh đạo không quyền lực**: PM ít khi là sếp trực tiếp của thành viên; phải ảnh hưởng bằng uy tín và sự công bằng.
- **Quyết định trong bất định**: chọn phương án tốt nhất với thông tin chưa đủ, và sẵn sàng đổi.
- **Chịu được áp lực và giữ bình tĩnh**: khủng hoảng lây từ PM ra đội.
- **Nói thật một cách khéo**: phản ánh tin xấu mà không đổ lỗi.

Nhóm kỹ năng thứ hai thường là chỗ PM gốc kỹ thuật yếu, và PM gốc quản trị lại thiếu nhóm thứ nhất. Đừng chỉ luyện cái mình đã giỏi.

## 2.6 Ba kiểu PM — và vì sao "cảnh sát" thất bại

| Kiểu | Cách làm | Ưu điểm | Nhược điểm |
|---|---|---|---|
| **Điều phối** (coordinator) | Kết nối người và việc, theo dõi kế hoạch, báo cáo | Ít gây ma sát, dễ bắt đầu | Dễ trở thành "người chuyển tin", thiếu quyết đoán |
| **Người phục vụ** (servant leader) | Gỡ blocker, che chắn đội, tạo điều kiện để đội tự quyết | Đội gắn kết, chất lượng cao | Nếu thiếu kỷ luật có thể trôi tiến độ |
| **"Cảnh sát"** (controller) | Giám sát từng việc, hỏi tiến độ liên tục, kiểm soát bằng báo cáo và phạt | Cảm giác kiểm soát | Xem dưới đây |

Vì sao kiểu thứ ba thất bại trong dự án phần mềm:

- Công việc trí óc **không nhìn thấy được tiến độ bằng mắt**; hỏi "xong chưa?" chỉ làm người ta báo "xong 90%" cho êm chuyện.
- Áp lực kiểm soát khiến đội **che giấu vấn đề**, và vấn đề được che sẽ nổ lớn hơn.
- Người giỏi rời đi trước; người ở lại học cách làm vừa đủ để khỏi bị soi.
- Nó phá vỡ **văn hoá nói thật**, thứ duy nhất giúp PM nhận tin xấu kịp thời.

PM giỏi kết hợp: **kỷ luật với kế hoạch** (như điều phối) + **phục vụ đội** (như servant leader) + **kiểm soát thông tin thay vì kiểm soát con người** (chỉ số, RAID, báo cáo hằng tuần). Bạn không "kiểm tra xem họ có làm không"; bạn kiểm tra **dữ liệu có đáng tin không** và **có gì đang cản họ**.

## 2.7 Đạo đức nghề nghiệp

Ba nguyên tắc mà PM dễ gặp thử thách:

1. **Nói thật về rủi ro.** Đừng "ngâm" tin xấu hy vọng tự tốt lên. Tin xấu báo sớm còn phương án; báo muộn chỉ còn hậu quả. Quy tắc "không bất ngờ" (no surprises) sẽ quay lại ở Ch35.
2. **Không cam kết thay đội cái đội chưa đồng ý.** Đưa cho khách hạn chót chưa qua đội ước lượng là nhận nợ thay người khác, và người trả thường là đội.
3. **Trung thực với khách và với công ty.** Không dùng "cắt xén" chất lượng kín đáo để giữ tiến độ. Không báo xanh khi thực tế đỏ ("watermelon status", Ch34). Không thổi phồng năng lực của đội để thắng hợp đồng.

Khi xung đột giữa lợi ích ngắn hạn (giữ hợp đồng, giữ mặt) và đạo đức, hãy hỏi: *nếu chuyện này lộ ra sau 3 tháng, tôi có bảo vệ được lựa chọn của mình không?* Nếu không, đó là dấu hiệu dừng lại.

## Tình huống FoodNow

Thứ Hai, 08/12/2025, ngày đầu tiên Hà nhận dự án FoodNow. Đội chưa đủ người, Charter đang chờ ký, và anh Bảo đã gọi hai lần hỏi "khi nào bắt đầu?". Hà không mở ngay Jira hay Gantt. Chị dành ngày đầu cho bốn việc.

Sáng, chị ngồi 45 phút với Dũng (Tech Lead) để hỏi ba điều: *đội hiện có ai, thiếu gì, rủi ro kỹ thuật lớn nhất là gì.* Dũng nói thẳng: đội đang thiếu một Backend, và tích hợp cổng thanh toán PayEasy là điểm chưa chắc chắn. Chị ghi cả hai vào RAID Log ngay trong buổi sáng.

Trưa, chị gặp Lan (BA) để nghe **ai là người quyết định phía khách** và ai hay đổi ý. Lan cho biết Châu (PO) hiểu nghiệp vụ nhưng thường bận, còn anh Bảo hay bổ sung ý tưởng ngay trong cuộc họp.

Chiều, chị họp 30 phút với anh Bảo. Chị nói rõ vai trò của mình: "Em sẽ chịu trách nhiệm để dự án đạt mục tiêu trong ngân sách và thời gian đã thoả thuận. Em không chọn kiến trúc thay anh Dũng, và cũng không quyết định ưu tiên sản phẩm thay chị Châu. Anh cứ đưa ý mới, em sẽ đánh giá tác động rồi báo anh chọn." Anh Bảo hơi ngạc nhiên vì "PM trước hay nói là được hết", rồi đồng ý.

Cuối ngày, chị lập lịch tuần của mình theo mẫu `pm-weekly-routine.md`: hai khung giờ sâu, buổi họp Sponsor thứ Năm, báo cáo thứ Sáu 15:00. Chị chốt với Dũng và Lan nhịp rà RAID 15 phút mỗi thứ Hai.

Điểm đáng để ý: ngày đầu tiên của Hà **không nhằm tạo tài liệu mà nhằm xác lập vai trò và kênh sự thật**: ai quyết định gì, ai nói thật với mình, và mình xuất hiện trước Sponsor với luật chơi gì.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Mô tả công việc.** Viết mô tả công việc (job description) cho vị trí PM của một đội 10 người (6 Dev, 2 QA, 1 BA, 1 UX) làm app quản lý kho. Gồm: (a) mục tiêu vị trí trong 2 câu, (b) 8 trách nhiệm chính, (c) 4 việc **không** thuộc PM, (d) 5 tiêu chí đo hiệu quả, (e) kỹ năng bắt buộc/ưu tiên.

**Bài 2 (tình huống ngắn).** Dev senior nói: "PM không hiểu code thì đừng quyết định kỹ thuật. Tôi chọn framework X, không thảo luận." Tuy nhiên framework X sẽ làm đội mất thêm 3 tuần học và dự án chỉ còn 2 tuần dự phòng. Bạn xử lý thế nào? Nêu 2 phương án hợp lệ và lời bạn nói với Dev.

**Bài 3 (làm ra sản phẩm) — Lịch tuần.** Lập lịch làm việc tuần của bạn (với vai PM một đội 8 người, sprint 2 tuần) theo bảng mục 2.4. Đảm bảo có ≥ 2 giờ sâu và tổng giờ họp ≤ 25% thời gian làm việc.

<details>
<summary>Gợi ý đáp án Bài 2</summary>

**Chẩn đoán:** Dev đúng ở chỗ *giải pháp kỹ thuật thuộc quyền chuyên môn*, nhưng ràng buộc thời gian và rủi ro thuộc PM và Sponsor. Đây là xung đột giữa giải pháp và ràng buộc, không phải giữa "biết code" và "không biết code".

**Phương án A — Cùng tìm phương án:** yêu cầu Dev nêu 2–3 phương án khác (gồm cả framework X) kèm chi phí học, rủi ro và lợi ích dài hạn, trong 2 ngày. Ưu điểm: giữ tôn trọng chuyên môn, quyết định dựa trên dữ liệu. Nhược: mất 2 ngày.

**Phương án B — Spike có hạn giờ:** cho 3 ngày thử (spike) với X trên một tính năng nhỏ, đo tốc độ thật rồi quyết. Ưu điểm: bằng chứng thực. Nhược: tốn công nếu X bị loại.

**Khuyến nghị:** A kết hợp B khi hai bên vẫn chưa đồng ý. Nếu sau đó vẫn bất đồng, **chuyển quyết định cho Sponsor** với đánh đổi rõ: X = tốt dài hạn nhưng trễ 3 tuần, giảm dự phòng còn 2 tuần.

**Lời nói mẫu:** "Anh chọn giải pháp, em tôn trọng. Nhưng em cần biết chi phí. Nếu chọn X, đội mất khoảng 3 tuần học, dự phòng còn 2 tuần. Anh nêu giúp em phương án thay thế và đánh đổi để mình cùng quyết, hoặc mình thử trong 3 ngày trước."

**Sai lầm điển hình:** (1) PM cứng nhắc "tôi quyết định"; (2) PM im lặng chấp nhận rồi báo trễ sau; (3) PM đi kể với Sponsor sau lưng Dev.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** PM nhảy vào làm việc kỹ thuật vì "làm nhanh hơn" (viết code, sửa lỗi hộ). → **Hậu quả:** kế hoạch, rủi ro và giao tiếp không ai lo; đội thấy PM không tin họ. **Cách khắc phục:** giữ ranh giới, mỗi việc PM làm hộ đội phải có lý do và ngày kết thúc.
2. **Sai lầm:** Mặc định mình là "sếp" của đội. → **Hậu quả:** đội chỉ làm theo lệnh, không đưa tin xấu, không phản biện. **Cách khắc phục:** dùng ảnh hưởng thay cho quyền lực; hỏi đội "cần gì để làm được?" trước khi hỏi "bao giờ xong?".
3. **Sai lầm:** Không phân biệt PM/PO/SM nên mọi quyết định chồng chéo. → **Hậu quả:** hai người cùng quyết định một việc, hoặc không ai quyết. **Cách khắc phục:** lập RACI (mỗi việc đúng một "A") ngay từ đầu và chia sẻ với đội.
4. **Sai lầm:** Họp và báo cáo chiếm hết tuần, không có giờ sâu. → **Hậu quả:** kế hoạch cũ, rủi ro không cập nhật, sự cố là bất ngờ. **Cách khắc phục:** khoá giờ sâu trước, họp xếp sau; cắt họp không có đầu ra.
5. **Sai lầm:** Che tin xấu để "không làm sếp lo". → **Hậu quả:** Sponsor phát hiện muộn, mất niềm tin, mất cả cơ hội xử lý sớm. **Cách khắc phục:** báo tin xấu ngay kèm ít nhất hai phương án và đề xuất của bạn.
6. **Sai lầm:** Chỉ tập trung kỹ năng cứng, bỏ bê giao tiếp và lãnh đạo. → **Hậu quả:** kế hoạch đẹp nhưng không ai làm theo. **Cách khắc phục:** mỗi tháng chọn một kỹ năng mềm để luyện (phản hồi SBI, 1-1, đàm phán) — Ch27, Ch36.

## Tóm tắt & tiếp theo

- PM chịu trách nhiệm để dự án đạt mục tiêu trong ràng buộc bằng công sức của người khác; **quyết định ràng buộc và đánh đổi**, không thay Tech Lead chọn giải pháp hay PO chọn ưu tiên.
- Dùng bảng RACI để phân biệt PM, Scrum Master, PO, BA, Tech Lead, Engineering Manager; mỗi việc chỉ có một "A".
- Vai trò PM khác nhau ở công ty outsource, sản phẩm và in-house; sách này dùng góc nhìn outsource.
- Bảo vệ giờ sâu và nhịp tuần; PM giỏi kiểm soát **thông tin**, không kiểm soát **con người**.
- Đạo đức nghề PM là nói thật về rủi ro và không cam kết thay đội.

Chương 3 sẽ đặt PM vào **vòng đời dự án** và so sánh **Waterfall, Agile và Hybrid**, để bạn biết chọn mô hình nào và vì sao FoodNow chọn Hybrid.
