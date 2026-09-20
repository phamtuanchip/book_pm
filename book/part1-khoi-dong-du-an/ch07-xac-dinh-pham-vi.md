# Chương 7: Xác định phạm vi (Scope) & yêu cầu cấp cao

## Mục tiêu học

- Viết được Scope Statement gồm in-scope, out-of-scope, deliverable, tiêu chí chấp nhận và giả định.
- Phân biệt được product scope với project scope và giải thích vì sao quan trọng.
- Cắt được phạm vi thành MVP bằng tiêu chí rõ ràng.
- Áp dụng được các kỹ thuật chống scope creep ngay từ đầu.

## 7.1 Scope là gì, vì sao là "cạnh" nguy hiểm nhất

**Phạm vi** (scope) là toàn bộ công việc cần làm và **chỉ** công việc đó để giao được sản phẩm đúng yêu cầu. Hai loại:

- **Product scope**: tính năng và đặc điểm của sản phẩm (app cho phép đặt món, thanh toán thẻ, theo dõi đơn).
- **Project scope**: công việc cần làm để tạo ra sản phẩm (phân tích, thiết kế, phát triển, kiểm thử, triển khai, đào tạo, tài liệu, quản lý dự án).

Nhiều người mới chỉ nghĩ đến product scope và quên project scope: quên đào tạo, di chuyển dữ liệu, tài liệu vận hành, UAT. Kết quả là ước lượng thiếu 20–30% việc.

Scope là cạnh nguy hiểm nhất vì nó **mềm**: ai cũng có thể thêm "một chút", và mỗi "chút" nghe vô hại. **Scope creep** (phạm vi phình dần) không đến từ một yêu cầu lớn, mà từ hàng chục yêu cầu nhỏ không ai đo. Ch20 nói về xử lý thay đổi; chương này nói cách vẽ ranh giới để có cái mà bảo vệ.

## 7.2 Scope Statement

**Scope Statement** (bản tuyên bố phạm vi) là văn bản mô tả rõ những gì dự án **làm** và **không làm**. Các mục:

| Mục | Câu hỏi | Ghi chú |
|---|---|---|
| Mô tả sản phẩm | Ta làm ra cái gì? | 3–5 câu |
| **In-scope** | Làm những gì? | Ở mức epic |
| **Out-of-scope** | Không làm gì? | Tường minh, kèm lý do, ít nhất 5 mục |
| Deliverable | Bàn giao thứ gì? | Có thể đếm được |
| Tiêu chí chấp nhận | Thế nào là xong? | Kiểm tra được, có người nghiệm thu |
| Giả định & ràng buộc | Điều kiện nào phải đúng? | Đưa vào RAID (Ch19) |
| Cơ chế thay đổi | Đổi phạm vi thế nào? | Liên kết Ch20 |

Trong đó **out-of-scope tường minh** quan trọng nhất và hay bị bỏ qua. Nếu bạn không ghi "ví điện tử không nằm trong MVP", một ngày Sponsor sẽ hỏi "sao chưa có ví?" và bạn không có gì để dẫn.

📎 Mẫu đầy đủ: `templates/project-charter/scope-statement.md`

Trích phần out-of-scope của FoodNow:

| # | Hạng mục | Lý do | Dự kiến |
|---|---|---|---|
| O1 | Thanh toán ví điện tử | Giữ mốc; phụ thuộc thêm vendor | R2 |
| O2 | Đặt món theo nhóm | Phức tạp, chưa cần cho MVP | R2 |
| O3 | Khuyến mãi, mã giảm giá | Không chặn ra mắt | R1 |
| O4 | Đánh giá và xếp hạng món | Không chặn ra mắt | R1 |
| O5 | App Tài xế iOS | Tài xế thử nghiệm dùng Android | Chưa lên lịch |

## 7.3 Từ yêu cầu cấp cao đến epic

PM không thay BA viết yêu cầu chi tiết. Nhưng PM cần đủ ở mức **yêu cầu cấp cao → epic** để đặt ranh giới và ước lượng sơ bộ. Ranh giới trách nhiệm:

| Cấp | Ai viết | PM cần |
|---|---|---|
| Mục tiêu kinh doanh | Sponsor/PO | Hiểu và xác nhận |
| **Yêu cầu cấp cao / epic** | PO + BA | **Cùng chốt phạm vi** |
| User story, tiêu chí chi tiết | BA + PO | Kiểm tra sự đầy đủ, không viết thay |
| Đặc tả kỹ thuật | Tech Lead | Hiểu tác động lên lịch |

Xem thêm sách *IT Business Analyst — Từ Zero Đến Thành Thạo* để đọc về kỹ thuật thu thập và đặc tả yêu cầu (các chương về yêu cầu và user story).

Một cách kiểm tra epic tốt cho PM: **mỗi epic có thể trả lời "ai dùng, để làm gì, khi nào xong"** và ước lượng được ở mức khoảng (Ch11).

## 7.4 MVP và cách cắt phạm vi

**MVP** (Minimum Viable Product — sản phẩm khả dụng tối thiểu) là bản nhỏ nhất **đủ để người dùng thật dùng và cho ta học được điều cần học**. MVP không phải "bản dở"; nó là bản đủ dùng cho một tập luồng cốt lõi.

Quy trình cắt phạm vi thực dụng:

1. **Xác định luồng cốt lõi**: FoodNow — khách đặt món, nhà hàng nhận đơn, tài xế giao, khách nhận và thanh toán.
2. **Áp MoSCoW** (Must/Should/Could/Won't) cho từng epic: Must = không có thì không ra mắt được; Won't = chưa làm ở bản này (Ch24).
3. **Hỏi "nếu không có, ra mắt được không?"** cho từng hạng mục. Nếu ra mắt được → không phải Must.
4. **Ghi "Won't" thành out-of-scope tường minh.** Đây là bước quyết định.
5. **Chốt cùng Sponsor và PO bằng văn bản.**

Cắt phạm vi là **quyết định đánh đổi**, không phải kỹ thuật thuần: cắt thêm thì ra mắt sớm hơn hoặc rẻ hơn, nhưng sản phẩm ít giá trị hơn. Dữ liệu (ước lượng, dự báo giá trị) giúp Sponsor chọn.

### Phạm vi theo giai đoạn

| Giai đoạn | Nội dung chính |
|---|---|
| MVP | Luồng cốt lõi 3 app, thanh toán thẻ + COD |
| R1 (Q1/2027) | Khuyến mãi, đánh giá |
| R2 (Q3/2027) | Ví điện tử, đặt món theo nhóm |

## 7.5 Chống scope creep ngay từ đầu

Bốn kỹ thuật đơn giản, làm ngay ở giai đoạn khởi động:

1. **Danh sách out-of-scope tường minh** — được Sponsor ký.
2. **Dấu vết phê duyệt** — mọi thay đổi phạm vi có email/CR ghi người duyệt và ngày.
3. **Câu trả lời chuẩn cho yêu cầu mới**: "Ý hay. Em ghi vào backlog và đánh giá tác động; anh chọn thêm hay đổi để giữ mốc." (Ch20, Ch36)
4. **Baseline phạm vi**: một phiên bản đã duyệt để so sánh khi có yêu cầu; thay đổi baseline phải qua change control.

> **Cảnh giác với "tiện thể".** "Tiện thể thêm nút chia sẻ đơn nhé" là hình thức phổ biến nhất của scope creep. Không phải mọi thay đổi đều xấu; vấn đề là **thay đổi không được đánh giá**.

## Tình huống FoodNow

Cuối tháng 1/2026 (tuần 3–5), Hà, Lan và chị Châu ngồi hai buổi workshop để chốt phạm vi MVP. Ba nhóm người dùng (khách, nhà hàng, tài xế) mỗi nhóm có danh sách mong muốn dài. Hà không tranh luận từng tính năng; chị dùng câu hỏi "nếu thiếu cái này, ra mắt được không?" và chấm MoSCoW. Kết quả: 11 epic (E1–E11) là Must; khuyến mãi và đánh giá món là Should nhưng đẩy sang R1; **ví điện tử** ban đầu được ghi "in-scope có điều kiện" vì anh Bảo yêu cầu.

Scope Statement v1.0 ra ngày 06/02/2026. Tuần 6 (09–13/02), anh Bảo yêu cầu rút MVP xuống 6 tháng, đội ước lượng 9 tháng (Ch11). Sau đàm phán, cả hai thống nhất giữ mốc 03/10/2026 bằng cách **chuyển ví điện tử sang R2**. Hà nâng Scope Statement lên **v1.1 (13/02/2026)**, ghi lý do, người duyệt (Bảo, Châu). Nhờ có bảng out-of-scope, khi anh Bảo hỏi lại "ví ở đâu?" ở tuần 12, Hà chỉ cần mở tài liệu: "Đã thoả thuận ngày 13/02, ở R2. Nếu anh muốn đưa lại vào MVP, em sẽ đánh giá bằng change request."

## Bài tập

**Bài 1 (làm ra sản phẩm) — Scope Statement.** Viết Scope Statement cho dự án "app đặt lịch cắt tóc" (Ch05): mô tả sản phẩm, ≥ 6 epic in-scope, **5 mục out-of-scope** kèm lý do và giai đoạn dự kiến, 3 deliverable có tiêu chí chấp nhận.

**Bài 2 (tình huống ngắn).** Ở tuần 6 của dự án, khách hàng nói: "Tiện thể thêm tính năng chat với tài xế nhé, chắc chỉ vài ngày thôi." Đội ước lượng cần 3 tuần. Bạn xử lý thế nào? Nêu 2 hướng và kịch bản lời nói.

**Bài 3.** Dùng MoSCoW phân loại 10 tính năng của một app quản lý chi tiêu cá nhân và chỉ ra bộ MVP.

<details>
<summary>Gợi ý đáp án Bài 2</summary>

**Chẩn đoán:** "vài ngày" là ước lượng lạc quan; tính năng chat phụ thuộc thông báo, lưu trữ, kiểm duyệt. **Phương án A:** đưa vào backlog, đánh giá và để PO xếp ưu tiên; nếu thêm thì hoán đổi với tính năng khác cùng cỡ. **Phương án B:** tạo Change Request nếu ngoài phạm vi: nêu chi phí, tác động lịch 3 tuần, để Sponsor quyết. **Khuyến nghị:** A + B tuỳ có thuộc epic đã có hay không. **Lời nói:** "Ý rất hay. Đội ước lượng khoảng 3 tuần vì phải làm thêm lưu tin nhắn và thông báo. Em ghi vào danh sách và mang đi cân nhắc với anh Châu: nếu thêm chat thì mình đổi với tính năng nào để giữ mốc?" **Sai lầm:** nói "được" ngay; hoặc "không" mà không có lý do. **Phòng ngừa:** out-of-scope tường minh, quy trình CR.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Không ghi out-of-scope. → **Hậu quả:** mỗi bên hiểu phạm vi khác nhau, tranh cãi ở UAT. **Cách khắc phục:** ≥ 5 mục out-of-scope kèm lý do, có chữ ký.
2. **Sai lầm:** Chỉ nghĩ product scope. → **Hậu quả:** ước lượng thiếu việc đào tạo, tài liệu, di chuyển dữ liệu. **Cách khắc phục:** liệt kê project scope trong WBS (Ch10).
3. **Sai lầm:** MVP là "bản tạm bợ". → **Hậu quả:** người dùng thất vọng, mất niềm tin. **Cách khắc phục:** MVP phải đủ luồng cốt lõi chạy tốt.
4. **Sai lầm:** Viết yêu cầu chi tiết thay BA. → **Hậu quả:** PM sa vào chi tiết, bỏ bê điều phối. **Cách khắc phục:** dừng ở epic; để BA lo phần còn lại.
5. **Sai lầm:** Đồng ý miệng với yêu cầu mới. → **Hậu quả:** không có dấu vết, tranh cãi sau này. **Cách khắc phục:** mọi thay đổi ghi văn bản.

## Tóm tắt & tiếp theo

- Scope gồm product scope và project scope; scope creep đến từ hàng chục "tiện thể" không ai đo.
- Scope Statement chốt in-scope, out-of-scope tường minh, deliverable, tiêu chí chấp nhận, giả định.
- MVP là luồng cốt lõi đủ dùng; cắt phạm vi là quyết định đánh đổi ghi bằng văn bản.
- Chống scope creep bằng out-of-scope tường minh, dấu vết phê duyệt, câu trả lời chuẩn và baseline.

Chương 8 dựng **đội và cách làm việc**: cơ cấu, Team Charter, Working Agreement và onboarding.
