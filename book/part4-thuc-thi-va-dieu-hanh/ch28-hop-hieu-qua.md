# Chương 28: Họp hiệu quả & nghi thức dự án

## Mục tiêu học

- Lập được bảng các cuộc họp cần có (mục đích – tần suất – thời lượng – thành phần – đầu ra) và loại bỏ cuộc họp thừa.
- Chuẩn bị và điều hành họp bằng agenda, timebox và quyết định–hành động–người–hạn.
- Viết biên bản 1 trang và quản lý danh sách hành động.
- Điều hành họp từ xa, áp dụng "ngày không họp" và dẫn dắt SteerCo.
- Chạy retrospective với ít nhất ba định dạng.

## 28.1 Họp là chi phí

Một cuộc họp 1 giờ với 10 người tốn **10 giờ-người**. Với đội 12 người và mức lương như dự án FoodNow, một buổi họp lãng phí là một khoản tiền thật. Nguyên tắc: **họp chỉ khi cần trao đổi hai chiều hoặc ra quyết định**; thông tin một chiều thì viết. Và mọi cuộc họp phải trả lời được: **"Kết thúc buổi này, điều gì sẽ khác đi?"** Nếu không trả lời được, đừng họp.

## 28.2 Các cuộc họp cần có

Dự án Hybrid như FoodNow có nhóm nghi thức Scrum và nhóm nghi thức quản lý:

| Cuộc họp | Mục đích | Tần suất | Thời lượng | Thành phần | Đầu ra |
|---|---|---|---|---|---|
| **Daily Scrum** | Đồng bộ mục tiêu hôm nay, chặn | Hằng ngày | ≤ 15' | Đội phát triển | Kế hoạch 24h, blocker |
| **Sprint Planning** | Chọn Sprint Goal và story | Đầu sprint | ≤ 2h (sprint 2 tuần) | Đội, PO | Sprint Goal, Sprint Backlog |
| **Refinement** | Làm rõ, ước lượng story | 1–2 lần/tuần | 45–60' | PO, BA, Dev, QA | Story Ready |
| **Sprint Review** | Demo, phản hồi | Cuối sprint | ≤ 1h | Đội, PO, stakeholder | Phản hồi vào backlog |
| **Retrospective** | Cải tiến quy trình | Cuối sprint | ≤ 1h | Đội | 1–3 hành động |
| **Rà RAID** | Rủi ro, vấn đề, phụ thuộc | Hằng tuần | 15' | PM, Tech Lead, BA, QA | RAID cập nhật |
| **Họp Sponsor** | Quyết định cần duyệt | Hằng tuần | 30' | Sponsor, PO, PM | Quyết định |
| **CCB** | Duyệt thay đổi | Theo nhịp | ≤ 30' | CCB | Quyết định CR |
| **SteerCo** | Ban chỉ đạo xem tình hình | Hằng tháng | 60' | Sponsor, HĐQT, PM | Quyết định lớn |
| **1-1** | Con người | Hằng tuần | 30' | PM + 1 người | Hành động |

**Cuộc họp không cần** thường là: họp trạng thái tuần cho cả đội (thay bằng báo cáo viết), họp "đồng bộ" không agenda, họp có 15 người mà chỉ 3 người tham gia, họp lặp lại chỉ vì thói quen. **Audit** định kỳ: liệt kê mọi cuộc họp định kỳ, giờ-người mỗi tuần, đầu ra; hỏi "không có nó thì sao?".

## 28.3 Điều hành họp

**Chuẩn bị**: mục đích và đầu ra mong muốn ghi trong lời mời; **agenda** gửi trước với thời lượng từng mục; tài liệu đọc trước; chỉ mời người cần (có quyền quyết định hoặc có thông tin không thể thiếu). Với người chỉ cần biết kết quả, gửi biên bản.

**Trong họp**: **timebox** từng mục; một người giữ giờ; một người ghi biên bản (không phải người chủ trì); **mỗi mục kết thúc bằng quyết định hoặc hành động**; ghi parking lot cho thứ lạc đề; tránh thảo luận kỹ thuật sâu — hẹn buổi riêng.

**Sau họp**: biên bản gửi trong **24 giờ**; hành động chuyển vào Action Item Log.

**Quyết định – Hành động – Người – Hạn** là bốn thứ phải có; nếu một hành động thiếu người hoặc hạn, nó không tồn tại.

## 28.4 Biên bản 1 trang và Action Item Log

Biên bản gồm: thông tin họp, tóm tắt 3 dòng, quyết định, hành động (người, hạn), câu hỏi mở, parking lot; bỏ phần "ai nói gì". **Action Item Log** là bảng theo dõi mọi hành động: nguồn, người, hạn, trạng thái, ngày xong. Đầu mỗi họp lặp lại, đọc các hành động quá hạn trước tiên. Chỉ số: **tỷ lệ hành động hoàn thành đúng hạn** (mục tiêu ≥ 80%).

📎 Mẫu đầy đủ: `templates/meeting/action-item-log.csv` (15 hành động), `templates/meeting/meeting-minutes.md`

## 28.5 Họp từ xa và ngày không họp

- **Camera và âm thanh**: bật camera khi thảo luận quan trọng; ghi lại (nếu được phép).
- **Công cụ trực quan**: bảng trắng số, tài liệu chung để mọi người viết cùng.
- **Họp bất đồng bộ**: thay bằng tài liệu bình luận (comment) khi có thể; đặt hạn phản hồi.
- **Khung trùng lặp**: họp trong giờ overlap (Ch08).
- **"Ngày không họp"** (no-meeting day): một ngày trong tuần không có họp định kỳ (ví dụ thứ Tư) để đội tập trung làm việc sâu; ngoại lệ chỉ cho sự cố.

## 28.6 Steering Committee

**SteerCo** (Ban chỉ đạo) họp hằng tháng để **ra quyết định** — không phải nghe báo cáo. Cấu trúc 60 phút: xác nhận biên bản; trạng thái (RAG); rủi ro lớn nhất (top 3, kèm phương án, khuyến nghị); **quyết định cần** (≥ 50% thời gian); dự báo; tổng kết hành động. Nguyên tắc: báo cáo gửi trước; **không bất ngờ** — mọi tin xấu đã được báo qua báo cáo tuần; mỗi quyết định có ≤ 3 phương án và khuyến nghị.

📎 Mẫu đầy đủ: `templates/meeting/steerco-agenda.md`

## 28.7 Retrospective

**Retrospective** (nhìn lại) là nghi thức cải tiến: đội xem lại sprint và chọn 1–3 hành động. Ba định dạng:

| Định dạng | Cấu trúc | Khi dùng |
|---|---|---|
| **Start–Stop–Continue** | Nên bắt đầu/dừng/tiếp tục gì | Đội mới, đơn giản |
| **4Ls** | Liked, Learned, Lacked, Longed for | Cuối giai đoạn |
| **Sailboat** | Gió, neo, đá ngầm, đảo | Nhìn phía trước, lộ rủi ro |

Khung 60 phút: mở đầu (luật không đổ lỗi), dữ liệu, thu thập ý kiến, gom nhóm + bỏ phiếu, hành động (mỗi chủ đề 1 hành động có người và hạn), kết. **Đọc lại hành động retro trước ở đầu buổi sau** — nếu không, retro trở thành "than vãn miễn phí".

📎 Mẫu đầy đủ: `templates/meeting/retrospective-formats.md`

## Đi sâu: điều phối họp khó và audit lịch họp

### Điều phối một cuộc họp ra quyết định trong 30 phút

Cuộc họp quyết định (ví dụ CCB) hiệu quả khi tuân thủ khung năm bước:

1. **Nêu quyết định cần** (một câu) và hạn — 2 phút.
2. **Trình dữ kiện** một trang, đã gửi trước — 5 phút.
3. **Làm rõ** (chỉ câu hỏi thông tin, chưa tranh luận) — 5 phút.
4. **Thảo luận phương án** theo thứ tự: người ít quyền lực nói trước để tránh bị neo — 10 phút.
5. **Quyết định và ghi**: ai quyết, quyết gì, hành động, hạn — 8 phút.

Nếu chưa quyết được, ghi rõ *thiếu thông tin gì*, *ai lấy*, *khi nào họp lại* — thay vì "để suy nghĩ thêm".

### Xử lý sáu kiểu người trong họp

| Kiểu | Dấu hiệu | Cách xử lý |
|---|---|---|
| Người nói quá nhiều | Chiếm > 40% thời gian | Đặt timebox từng người; "cảm ơn, mời người khác" |
| Người im lặng | Không nói cả buổi | Hỏi trực tiếp câu cụ thể; thu ý kiến viết trước |
| Người lạc đề | Kéo sang chuyện khác | Parking lot; hứa thời điểm quay lại |
| Người phản đối mọi thứ | "Không được" không kèm phương án | Hỏi "Điều kiện nào thì được?" |
| Người dùng điện thoại | Không tập trung | Cuộc họp quá dài hoặc không liên quan — hỏi lại "họ có cần ở đây không?" |
| Người chức vụ cao chiếm hết | Ý kiến của họ thành kết luận | Cho ý kiến sau cùng; hỏi trước từng người |

### Audit họp: công thức làm nhanh

1. Xuất lịch họp định kỳ của cả đội 4 tuần.
2. Với mỗi cuộc: thời lượng × số người = giờ-người/tuần; ghi đầu ra thực tế của 4 lần gần nhất.
3. Gán nhãn: **Giữ** (đầu ra rõ), **Rút gọn** (đầu ra có nhưng dài/đông), **Thay bằng văn bản** (thông tin một chiều), **Bỏ** (không đầu ra).
4. Đề xuất với đội, thử hai tuần, đo lại mức hài lòng và có ai bỏ lỡ thông tin không.

Kết quả FoodNow (90,5 → 63,0 giờ-người/tuần) đến từ chính bốn bước này; chỉ số kiểm soát là *số lần đội phải hỏi lại thông tin đã từng có trong họp* — không tăng.

### Họp với khách nước ngoài hoặc đa ngôn ngữ

Gửi agenda và tài liệu trước 48 giờ; dùng câu ngắn, tránh thành ngữ; tóm tắt bằng văn bản sau họp và yêu cầu xác nhận; luân phiên giờ họp bất tiện; đặt người nói ngôn ngữ chung làm cầu nối (bridge).

## Tình huống FoodNow

Thứ Hai 22/06/2026 (tuần 25). Dũng phàn nàn: "Tôi chỉ còn đúng hai buổi chiều để code." Hà thử đếm: mỗi người trong đội dành trung bình khoảng **7,5 giờ/tuần** cho họp (tổng khoảng **90,5 giờ-người/tuần** cho đội 12 người). Chị lập bảng audit 11 cuộc họp định kỳ, ghi giờ-người và đầu ra.

Sau khi hỏi đội "cuộc họp nào bỏ mà không ai nhận ra?", chị đề xuất năm thay đổi: (1) **bỏ** họp trạng thái tuần cho cả đội, thay bằng báo cáo viết thứ Sáu (−12 giờ-người); (2) Refinement từ 2 buổi × 60' xuống 2 × 40' (−4); (3) Planning 2h xuống 1,5h nhờ Ready coverage cao (−1,5); (4) họp kỹ thuật thứ Năm giảm còn 30' (−3); (5) Design review chuyển sang comment Figma + 20 phút hai tuần một lần (−4), cùng **ngày không họp thứ Tư** (giảm ad-hoc từ 10 xuống 7 giờ-người, −3). Kết quả: từ **90,5** xuống **63,0 giờ-người/tuần**, giảm **30,4%** mà không mất thông tin: báo cáo viết vẫn đến Sponsor, RAID vẫn 15 phút mỗi thứ Hai, quyết định vẫn được ghi. Hà hỏi lại sau 4 tuần: điểm hài lòng về họp tăng, và Dũng có thêm một buổi chiều "sâu" mỗi tuần.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Audit lịch họp.** Liệt kê mọi cuộc họp định kỳ của đội bạn (hoặc giả định 8 cuộc), tính giờ-người/tuần, xác định 3 cuộc họp có thể bỏ hoặc thay bằng văn bản, đề xuất "ngày không họp" và tính mức giảm.

**Bài 2 (làm ra sản phẩm).** Viết agenda 60 phút cho SteerCo tháng đầu tiên của dự án bạn (có ≥ 3 quyết định cần) và biên bản 1 trang giả định.

**Bài 3 (tình huống ngắn).** Sponsor yêu cầu thêm một buổi "họp cập nhật hằng ngày" 30 phút với toàn đội để ông "nắm tiến độ". Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án</summary>

Chẩn đoán: Sponsor cần **thông tin** chứ không cần họp; họp hằng ngày sẽ tốn 6 giờ-người/ngày. Phương án A: báo cáo ngắn hằng ngày (3 dòng) hoặc bảng dashboard để ông xem bất kỳ lúc nào. B: PM họp riêng 15 phút với Sponsor 2 lần/tuần. C: Sponsor dự thính Daily (không hỏi). Khuyến nghị A + B. Lời nói mẫu: "Để anh nắm tiến độ mà không làm đội mất 6 giờ mỗi ngày, em đề xuất anh có một dashboard cập nhật hằng ngày và em gọi anh 15 phút thứ Ba, thứ Năm." Sai lầm: đồng ý rồi đội quá tải; từ chối không có giải pháp.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Họp không có mục đích và đầu ra. → **Hậu quả:** tốn giờ, không quyết định. **Cách khắc phục:** "Kết thúc buổi này điều gì khác đi?".
2. **Sai lầm:** Mời cả đội "cho biết". → **Hậu quả:** nhiều người ngồi vô ích. **Cách khắc phục:** chỉ mời người cần; gửi biên bản cho phần còn lại.
3. **Sai lầm:** Không ghi người và hạn cho hành động. → **Hậu quả:** không ai làm. **Cách khắc phục:** Action Item Log, đọc ở đầu buổi sau.
4. **Sai lầm:** Người chủ trì tự ghi biên bản. → **Hậu quả:** điều hành kém, biên bản sơ sài. **Cách khắc phục:** phân người ghi.
5. **Sai lầm:** SteerCo chỉ là báo cáo. → **Hậu quả:** quyết định chậm. **Cách khắc phục:** ≥ 50% thời gian cho quyết định; báo cáo gửi trước.
6. **Sai lầm:** Retro không có hành động hoặc không đọc lại. → **Hậu quả:** than vãn, không cải tiến. **Cách khắc phục:** 1–3 hành động có người, đọc ở đầu buổi sau.

## Tóm tắt & tiếp theo

- Họp là chi phí; chỉ họp khi cần trao đổi hai chiều hoặc quyết định; luôn hỏi "điều gì sẽ khác đi?".
- Bảng họp cần có: mục đích – tần suất – thời lượng – thành phần – đầu ra; audit định kỳ.
- Agenda, timebox, quyết định–hành động–người–hạn; biên bản 1 trang trong 24 giờ; Action Item Log.
- Họp từ xa, ngày không họp; SteerCo tập trung quyết định; retro với 3 định dạng.

Chương 29 hết Phần 4 với **PM và kỹ thuật**: CI/CD, môi trường, nợ kỹ thuật và DevOps.
