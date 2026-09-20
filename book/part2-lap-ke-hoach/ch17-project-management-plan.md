# Chương 17: Project Management Plan tổng hợp

## Mục tiêu học

- Liệt kê được các kế hoạch phụ tạo thành Project Management Plan (PM Plan).
- Phân biệt ba baseline (scope, lịch, chi phí) và quy tắc thay đổi chúng.
- Tổng hợp được PM Plan ngắn gọn (8–15 trang) bằng cách dẫn tới kế hoạch chi tiết.
- Dẫn dắt được buổi review và ký duyệt PM Plan với Sponsor.
- Duy trì PM Plan "sống" trong môi trường Agile/Hybrid.

## 17.1 PM Plan là gì và gồm những gì

**Project Management Plan** (PM Plan — kế hoạch quản lý dự án) là tài liệu **tổng hợp** mô tả **cách** dự án sẽ được thực hiện, giám sát và kiểm soát. Nó không thay thế các kế hoạch chi tiết mà **gắn chúng lại với nhau** và nêu các baseline đã được duyệt.

Cấu trúc gồm các **kế hoạch phụ**:

| Kế hoạch phụ | Trả lời | Chương/mẫu |
|---|---|---|
| Phạm vi | Làm gì; đổi phạm vi thế nào | Ch07, Ch10 |
| Lịch | Khi nào; đường găng | Ch12 |
| Chi phí | Bao nhiêu; dự phòng | Ch14 |
| Chất lượng | Tốt đến đâu; kiểm thử ra sao | Ch15 |
| Nguồn lực | Ai, bao lâu | Ch16 |
| Giao tiếp | Ai cần biết gì | Ch06 |
| Rủi ro | Điều gì có thể sai | Ch18–19 |
| Mua sắm | Mua gì, từ ai | Ch21 |
| Thay đổi | Đổi thế nào | Ch20 |
| Cấu hình/tài liệu | Quản lý phiên bản, nguồn sự thật | Ch22 |

**Ai đọc PM Plan?** Sponsor (để hiểu và ký), PM (để làm theo), Tech Lead/QA Lead/PO (để biết mình được kỳ vọng gì), người kế nhiệm (để tiếp quản). Vì vậy nó phải **ngắn để đọc**, **chính xác để tin** và **có đường dẫn để tra**.

## 17.2 Baseline

**Baseline** (đường cơ sở) là phiên bản đã được duyệt của kế hoạch, dùng làm chuẩn để so sánh khi thực hiện. Ba baseline cốt lõi:

| Baseline | Gồm | FoodNow |
|---|---|---|
| **Scope baseline** | Scope Statement + WBS + WBS Dictionary | v1.1 (13/02) + WBS v1.0 (06/02): 66 gói, 1.927 ngày công |
| **Schedule baseline** | Lịch được duyệt (Gantt/Schedule) | 27/02/2026; go-live 03/10 |
| **Cost baseline** | Chi phí kế hoạch theo thời gian + dự phòng | 02/03/2026; 2.140 + 256,8 |

Thêm **Quality baseline** (mục tiêu chất lượng) nếu cần. **Quy tắc đổi baseline:**

1. Chỉ đổi qua **change request** đã được người có thẩm quyền (CCB/Sponsor) duyệt.
2. **Lưu bản cũ** để so sánh; đánh phiên bản mới.
3. **Không đổi baseline để "làm đẹp"** — ví dụ dời baseline để SPI trông bằng 1 là gian dối với chính mình.
4. Thay đổi trong phạm vi epic (ưu tiên backlog) **không** đổi baseline; thêm epic/đổi mốc thì đổi.

📎 Mẫu đầy đủ: `templates/pm-plan/baseline-register.md`

## 17.3 Viết PM Plan ngắn gọn (8–15 trang)

Một PM Plan 100 trang không ai đọc và nhanh chóng lỗi thời. Cách giữ ngắn:

- **Mỗi kế hoạch phụ một mục, 3–8 dòng**, nêu **quyết định và quy tắc**, không lặp nội dung chi tiết; dẫn liên kết.
- **Ưu tiên bảng** thay đoạn văn dài.
- **Đặt "cái gì người ký cần" lên đầu**: mục tiêu, ràng buộc ưu tiên, baseline, quyền hạn, quy tắc dự phòng và thay đổi.
- **Một nguồn sự thật**: số liệu (ngày công, ngân sách) chỉ nằm ở tài liệu gốc; PM Plan trích và tham chiếu, để tránh mâu thuẫn.
- **Đánh số phiên bản và ngày**, ghi người duyệt.

FoodNow: PM Plan có 15 mục, khoảng 10 trang khi in, dẫn tới hơn 20 tài liệu trong `templates/`.

📎 Mẫu đầy đủ: `templates/pm-plan/FoodNow-Project-Management-Plan.md`

## 17.4 Review và ký duyệt với Sponsor

Buổi review 60 phút, người đọc đã nhận tài liệu 2 ngày trước:

| Phút | Nội dung | Mục đích |
|---|---|---|
| 0–10 | Mục tiêu, ràng buộc ưu tiên, mốc chính | Cùng hiểu |
| 10–25 | Baseline scope/lịch/chi phí; đường găng | Xác nhận baseline |
| 25–40 | Rủi ro lớn nhất; quy tắc dự phòng; quy trình thay đổi | Thống nhất luật |
| 40–55 | Câu hỏi và thay đổi | Xử lý |
| 55–60 | Ký/ghi nhận; hạn cập nhật | Chốt |

Mẹo: đừng để buổi review biến thành thảo luận tính năng. Nếu Sponsor bắt đầu đổi phạm vi, ghi vào parking lot và xử lý bằng change request. Sponsor **ký baseline**, không phải ký "cam kết ma thuật" — chữ ký nghĩa là "chúng ta thống nhất đây là chuẩn để đo".

## 17.5 PM Plan "sống" trong Agile/Hybrid

Trong môi trường có sprint, PM Plan chia làm hai loại phần:

- **Phần ổn định** (cần duyệt để đổi): mục tiêu, ràng buộc, baseline, quy trình thay đổi, quy tắc dự phòng, RACI.
- **Phần sống** (cập nhật liên tục, không cần duyệt lại): backlog, lịch sprint, RAID, báo cáo, velocity.

Quy tắc: PM Plan **xem lại có hệ thống ở mỗi mốc lớn** (Scope Freeze, bắt đầu UAT, Go-live) và **sau mỗi thay đổi baseline**. Không sao chép PM Plan vào mọi tài liệu; hãy để các tài liệu sống là nơi cập nhật, còn PM Plan nêu cách chúng được quản lý.

## Tình huống FoodNow

Thứ Sáu 20/03/2026, tuần 11. Hà gửi PM Plan v1.0 cho anh Bảo, chị Châu và Dũng hai ngày trước. Buổi review 60 phút bắt đầu bằng câu hỏi của anh Bảo: "Sao chị Hà đưa cho tôi tài liệu dài thế này?" Hà đáp: "Thực ra chỉ 10 trang; phần chi tiết em dẫn sang tài liệu riêng. Anh chỉ cần đọc hai trang đầu và mục 13, phần baseline."

Chị dẫn anh Bảo qua mục 3 và 13: scope baseline v1.1, lịch baseline 27/02, cost baseline 02/03. Đến mục 5, anh Bảo hỏi về quy tắc dự phòng: "Nếu PayEasy trễ, chị cần tôi duyệt gì?" Hà: "Nếu dưới 120 triệu, em tự quyết trong tuần và báo anh. Trên đó em cần anh duyệt bằng văn bản." Anh gật đầu. Ở mục 11 (thay đổi), anh Bảo nhắc lại CR-001 ("đặt món theo nhóm") mà tuần trước Hà đã đánh giá; chị chỉ vào bảng lịch sử baseline: đã giữ ở R2, không đổi baseline. Đó là lúc chị nhận ra giá trị của việc ghi lại các quyết định đã có.

Sau 55 phút, anh Bảo ký. Trước khi kết thúc, Hà nêu lịch xem lại PM Plan: ở Scope Freeze (13/07), bắt đầu UAT (27/07) và trước go-live (16/09). Chị nhấn mạnh: "Anh ký để mình có chuẩn đo, không phải để không được thay đổi." Từ đó, khi SPI xuống 0,82 ở tuần 20, hai bên có chung thước để nói chuyện.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Lắp PM Plan.** Từ các bài tập trước (Charter, Scope Statement, WBS, ước lượng, lịch/Gantt, ngân sách, kế hoạch chất lượng, Resource Plan), lắp thành PM Plan cho dự án của bạn theo 15 mục của mẫu; mỗi mục 3–8 dòng, có liên kết; tổng cộng không quá 12 trang; có bảng baseline với người duyệt.

**Bài 2 (làm ra sản phẩm).** Lập Baseline Register với ít nhất 3 baseline và 2 thay đổi giả định.

**Bài 3 (tình huống ngắn).** Sponsor xem PM Plan và nói: "Tôi không ký. Ký rồi là mình bị trói, tôi muốn linh hoạt." Bạn phản ứng thế nào?

<details>
<summary>Gợi ý đáp án Bài 3</summary>

**Chẩn đoán:** Sponsor hiểu chữ ký như cam kết cứng, không nhận ra nó là chuẩn đo và cơ chế thay đổi. **Phương án A:** giải thích baseline không bất biến: mọi thay đổi vẫn được, chỉ cần qua CR có đánh giá tác động; ký để có "thước". **Phương án B:** ký từng phần (mục tiêu, ràng buộc trước; baseline chi tiết sau) và thoả thuận thời hạn chốt. **Phương án C:** nếu Sponsor vẫn từ chối, ghi biên bản họp có xác nhận email — nhưng ghi rõ rủi ro không có chuẩn đo vào RAID. **Khuyến nghị:** A + B. **Lời nói mẫu:** "Ký không có nghĩa là không đổi được. Nó nghĩa là khi anh muốn đổi, mình biết đổi từ cái gì, tốn gì, và anh là người quyết định. Không có baseline, em sẽ không nói được 'trễ bao nhiêu' khi anh hỏi." **Sai lầm:** bỏ qua việc ký; hoặc ép ký.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** PM Plan 100 trang. → **Hậu quả:** không ai đọc, nhanh lỗi thời. **Cách khắc phục:** 8–15 trang, dẫn tới kế hoạch chi tiết.
2. **Sai lầm:** Sao chép số liệu vào PM Plan và các tài liệu khác. → **Hậu quả:** mâu thuẫn khi cập nhật một nơi. **Cách khắc phục:** một nguồn sự thật, PM Plan tham chiếu.
3. **Sai lầm:** Không có baseline hoặc baseline không được duyệt. → **Hậu quả:** không thể đo trễ/vượt; tranh cãi về "kế hoạch ban đầu". **Cách khắc phục:** Sponsor ký baseline.
4. **Sai lầm:** Đổi baseline để trông đẹp. → **Hậu quả:** mất khả năng học từ sai lệch; báo cáo vô nghĩa. **Cách khắc phục:** chỉ đổi qua CR; lưu bản cũ.
5. **Sai lầm:** Coi PM Plan là "bản vẽ xong là xong". → **Hậu quả:** lệch thực tế; không ai theo. **Cách khắc phục:** xem lại ở mỗi mốc lớn, tách phần ổn định và phần sống.
6. **Sai lầm:** Review biến thành họp tính năng. → **Hậu quả:** không chốt baseline. **Cách khắc phục:** agenda 60 phút, parking lot, CR cho thay đổi.

## Tóm tắt & tiếp theo

- PM Plan tổng hợp các kế hoạch phụ và nêu baseline; ngắn (8–15 trang), có liên kết.
- Ba baseline (scope, lịch, chi phí); đổi qua CR, lưu bản cũ, không đổi để làm đẹp.
- Review 60 phút với Sponsor, đọc trước, ký baseline.
- Trong Agile/Hybrid, tách phần ổn định (cần duyệt) và phần sống; xem lại ở mỗi mốc lớn.

Hết Phần 2. Chương 18 mở Phần 3 với **quản lý rủi ro**: nhận diện, phân tích, ứng phó và theo dõi.
