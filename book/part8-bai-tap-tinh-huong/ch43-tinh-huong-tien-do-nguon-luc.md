# Chương 43: Tình huống về tiến độ & nguồn lực

## Mục tiêu học

- Chẩn đoán nguyên nhân gốc của trễ tiến độ và thiếu nguồn lực bằng dữ liệu.
- So sánh các đòn bẩy (cắt scope, thêm người, đổi cách làm, làm rõ quyết định, reset kỳ vọng) và chọn có lý do.
- Xử lý nhân sự chủ chốt nghỉ việc, người chia sẻ, deadline bất khả thi, ước lượng sai hệ thống và đội lệch nhịp.

**Cách dùng:** tự viết đáp án trước khi mở phần tham khảo. Mỗi tình huống có ít nhất hai hướng hợp lệ.

---

### Tình huống 43.1 — Trễ 30% ở giữa dự án
**Giai đoạn:** Thực thi (tuần 20) · **Độ khó:** ★★☆ · **Kỹ năng:** đọc EVM, nói thật với Sponsor · **Chương liên quan:** Ch34, Ch35, Ch38

**Bối cảnh:** Thứ Sáu 22/05/2026, SPI = 0,82; SV −173 triệu (tương đương khoảng 200 ngày công). Anh Bảo hỏi trong cuộc họp: "Nói thật cho tôi biết, có kịp 03/10 không?" Đội trưởng nhóm nói "kịp, cố lên". Hà biết dự báo thô là chậm 8,6 tuần nếu không làm gì.

**Dữ kiện:** đường găng (thanh toán) đang giữ nhờ fast-tracking; nhánh dev float 5 ngày; velocity 30–34 SP; dự phòng còn 146 triệu (đã dùng 110); Scope Freeze 13/07.
**Gây nhiễu:** anh Bảo vừa hứa ngày ra mắt với đối tác.

**Câu hỏi:** (1) Bạn trả lời "có kịp không?" thế nào? (2) Bạn đề xuất gì trong 24 giờ? (3) Tài liệu nào cập nhật?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** không trả lời "có/không" mà cần **khoảng + điều kiện**. Nguyên nhân: Sprint 1–2 chậm, Tuấn bị rút, Sơn nghỉ, conflict nhánh; không phải yêu cầu đổi.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Cắt scope (25 ngày công) + thêm người hợp đồng đúng cách + rà họp + Scope Freeze | Nhiều đòn bẩy, giữ ngày | Cần Sponsor duyệt; rủi ro học việc |
| B. Dời go-live 4 tuần | An toàn | Đối tác, chiến dịch |
| C. Giữ nguyên, tăng ca | Không đổi kế hoạch | Kiệt sức; chất lượng |

**Khuyến nghị A**, với **kịch bản nếu không đạt** (điểm dừng: SPI < 0,80 hai tuần liền → cắt thêm/dời).

**Lời nói mẫu:** "Em không nói 'kịp' hay 'không' mà nói bằng số: nếu không làm gì, dự báo thô chậm 8 tuần. Đường găng thanh toán đang giữ; nhánh dev chậm khoảng 3,5 tuần công. Với 5 biện pháp em đề xuất, em kỳ vọng SPI 0,86 vào tuần 24 và 0,95 vào tuần 32; độ tin cậy giữ 03/10 khoảng 75%. Em cần anh duyệt cắt hai hạng mục hôm nay. Mình sẽ đo lại mỗi tuần."

**Tài liệu:** Recovery Plan, CR/Decision Log (DL-015), báo cáo tuần (đỏ), RAID, Roadmap R1.

**Sai lầm:** nói "kịp" để yên lòng; tăng ca + thêm người mặc định; giấu số.

**Phòng ngừa:** báo vàng ở tuần 16; ngưỡng RAG bằng số; kiểm tra capacity thực sớm.
</details>

---

### Tình huống 43.2 — Dev senior nghỉ việc giữa sprint
**Giai đoạn:** Thực thi (tuần 14) · **Độ khó:** ★★☆ · **Kỹ năng:** chuyển giao tri thức, bus factor · **Chương liên quan:** Ch16, Ch27

**Bối cảnh:** Thứ Hai 06/04/2026, Sơn (Backend senior, giữ dịch vụ đơn hàng và thanh toán) nộp đơn nghỉ; theo hợp đồng còn **2 tuần** làm việc. Sprint 4 đang chạy (đến 10/04), Sprint 5 bắt đầu 13/04; tích hợp PayEasy sandbox sắp bắt đầu 30/03 (đã chạy).

**Dữ kiện:**
- Backend 2 đã pair với Sơn từ tháng 3 (mỗi tuần 1 buổi); ADR thanh toán mới có 3/8.
- Có Backend bench 50% đến 08/05; BrightSoft có thể điều thêm 1 người sau 3 tuần.
- Sơn sẵn lòng hỗ trợ bàn giao nhưng "hơi nản".
- **Gây nhiễu:** Sponsor hỏi "chị có kịp thay Sơn không?"

**Câu hỏi:** (1) Kế hoạch 2 tuần bàn giao? (2) Bạn nói gì với Sơn và đội? (3) Ảnh hưởng lịch và ngân sách?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** rủi ro R02 đã xảy ra; mất kiến thức chưa ghi. Ưu tiên là **thu kiến thức có giá trị nhất** trong 10 ngày làm việc.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Bàn giao chuyên sâu 2 tuần: Sơn 60% thời gian viết ADR, tài liệu, pair mới; Backend 2 tiếp quản module | Giảm rủi ro | Giảm 40% năng suất Sơn |
| B. Giữ Sơn làm tính năng đến hết, bàn giao vội | Giữ tiến độ ngắn hạn | Mất tri thức |
| C. Đề nghị Sơn tư vấn part-time sau khi nghỉ | Có hỗ trợ | Cần thoả thuận, chi phí |

**Khuyến nghị A + C nếu Sơn đồng ý**; điều bench lên 100% từ 13/04 (chi phí ≈ 60 triệu từ dự phòng).

**Lời nói mẫu (Sơn):** "Em cảm ơn anh vì đã báo sớm. Em muốn hai tuần tới anh dành phần lớn thời gian để để lại những thứ mà chỉ anh biết; em sẽ sắp xếp để anh không bị chia việc. Nếu anh sẵn sàng tư vấn vài giờ mỗi tháng sau khi rời, mình sẽ trao đổi điều kiện." **Đội:** "Sơn rời sau hai tuần. Chúng ta có kế hoạch bàn giao, bench hỗ trợ và pair. Ai có băn khoăn, nói với em." **Sponsor:** "Mất một người quan trọng, em đã chuẩn bị rủi ro này. Ảnh hưởng ước tính 2 tuần công; em dùng khoảng 60 triệu dự phòng."

**Tài liệu:** RAID (R02 → I-004), Resource Plan v1.2, Risk Register (bus factor còn lại: Dũng), budget-tracking, báo cáo tuần.

**Sai lầm:** ép Sơn làm hết việc đang dở; im lặng với đội; hứa Sponsor "không ảnh hưởng".

**Phòng ngừa:** pair và ADR từ Sprint 0; kỳ vọng nghỉ việc 5% mỗi năm trong ước lượng rủi ro; thoả thuận thời gian bàn giao.
</details>

---

### Tình huống 43.3 — Nhân sự chia sẻ bị rút
**Giai đoạn:** Thực thi (tuần 12) · **Độ khó:** ★☆☆ · **Kỹ năng:** thương lượng nguồn lực · **Chương liên quan:** Ch16

**Bối cảnh:** Thứ Ba 24/03/2026, quản lý của Mai Anh (UX 50%) thông báo dự án khác cần Mai Anh 100% trong hai tuần tới, trùng thiết kế màn hình App Tài xế (3.3.2) cần bàn giao cho Dev vào 03/04.

**Dữ kiện:** thiết kế phải xong trước Sprint 5 (13/04); Backend và Mobile có việc khác để làm; Mai Anh làm thiết kế theo khối thứ Hai–Ba–Tư.
**Nhiễu:** quản lý nói "dự án kia sát hạn".

**Câu hỏi:** (1) Bạn thương lượng thế nào? (2) Phương án dự phòng? (3) Cập nhật gì?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** không xếp người chia sẻ lên đường găng; nhưng thiết kế trước dev là điều kiện cho Sprint 5. Thời hạn: 03/04.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Thương lượng: Mai Anh dành 2 ngày tuần này để hoàn tất phần ưu tiên (điều hướng, nhận chuyến), chuyển phần còn lại sang cuối tuần sau | Giữ mốc | Cần quản lý đồng ý |
| B. Đề nghị designer khác từ pool mượn 1 tuần | Không phụ thuộc | Học việc |
| C. Dev dùng design system, thiết kế đơn giản, tinh chỉnh sau | Giữ tiến độ | Chất lượng UI giảm nhẹ |

**Khuyến nghị: A + C**, B là dự phòng. **Lời nói mẫu (quản lý):** "Em hiểu dự án kia sát hạn. Em xin 2 ngày của Mai Anh cho 3 màn hình ưu tiên trước 03/04 — phần còn lại tuần sau. Nếu không, Sprint 5 của tụi em sẽ trễ và ảnh hưởng thanh toán." **Dữ kiện:** đưa bảng phụ thuộc thiết kế → dev.

**Tài liệu:** Resource Plan, RAID (D: thiết kế), backlog (đánh dấu story cần UX), lịch.

**Sai lầm:** đồng ý vô điều kiện; leo thang ngay lên lãnh đạo mà không đề xuất; không có dự phòng.

**Phòng ngừa:** lịch khối, thoả thuận ưu tiên với quản lý từ đầu, thiết kế trước dev ≥ 1 sprint.
</details>

---

### Tình huống 43.4 — Deadline bất khả thi
**Giai đoạn:** UAT (tuần 30) · **Độ khó:** ★★★ · **Kỹ năng:** thương lượng ràng buộc, bảo vệ chất lượng · **Chương liên quan:** Ch11, Ch36, Ch37

**Bối cảnh:** Thứ Hai 27/07/2026 (UAT bắt đầu), anh Bảo: "Hội đồng vừa chốt: ra mắt **19/09** thay vì 03/10 để kịp mùa khuyến mãi." Đó là sớm 2 tuần. Bảng lịch: UAT vòng 1 đến 21/08; sửa lỗi; UAT vòng 2; cutover diễn tập.

**Dữ kiện:** đường găng tính từ UAT: 27/07 → 03/10 = 131 ngày làm việc chuỗi (từ 30/03) — phần UAT + sửa lỗi + vòng 2 + cutover = 9 tuần (không float). Ít nhất 2 vòng UAT do thanh toán. Tiêu chí Go/No-Go đã ký.

**Nhiễu:** chiến dịch marketing đã đặt.

**Câu hỏi:** (1) Bạn phản hồi thế nào? (2) Những đòn bẩy nào khả thi? (3) Bạn nói gì với Nam?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** ràng buộc ngược với Charter (Quality thanh toán bất khả nhượng); yêu cầu rút 2 tuần trên **đường găng không float**.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Giữ 03/10, tách **soft launch** 19/09 cho nhóm nhỏ (nhà hàng thử nghiệm) để chạy chiến dịch giới hạn | Đáp ứng một phần | Cần hạ tầng/CS sẵn sàng sớm; rủi ro |
| B. Rút UAT còn 1 vòng | Sớm hơn | Phá tiêu chí chất lượng |
| C. Cắt thêm phạm vi để rút sửa lỗi | Có thể | Không đủ để rút 2 tuần |
| D. Giữ 03/10, đề nghị điều chỉnh chiến dịch | An toàn | Sponsor phải nói lại với HĐQT |

**Khuyến nghị: A hoặc D**, kèm số liệu. **Lời nói mẫu:** "Em không thể cam kết 19/09 mà vẫn giữ 0 Critical/High vì UAT + sửa lỗi + vòng hai + diễn tập cutover là chuỗi 9 tuần. Em đề xuất hai hướng: soft launch 19/09 cho 10 nhà hàng thử nghiệm để anh chạy chiến dịch giới hạn, hoặc giữ 03/10 và em cùng marketing dời chiến dịch. Em gửi anh bảng lịch để trình HĐQT."
**Nam:** "Nếu bị ép rút UAT, em không ký; em đề xuất anh giữ quyền chặn cổng và nêu lý do bằng văn bản."

**Tài liệu:** Gantt và tính lại đường găng; RAID (rủi ro lịch, R quyết định), báo cáo/SteerCo; Decision Log.

**Sai lầm:** nhận "cố gắng"; bóp UAT âm thầm; cãi với Sponsor trước HĐQT.

**Phòng ngừa:** mốc go-live trong hợp đồng có điều kiện; đường găng công khai; Sponsor hiểu Go/No-Go.
</details>

---

### Tình huống 43.5 — Ước lượng sai hệ thống
**Giai đoạn:** Thực thi (tuần 22) · **Độ khó:** ★★☆ · **Kỹ năng:** dùng dữ liệu hiệu chỉnh ước lượng · **Chương liên quan:** Ch11, Ch34

**Bối cảnh:** Thứ Sáu 05/06/2026. Hà phân tích 8 sprint: story của **Mobile** luôn mất khoảng **1,4 lần** ước lượng; story của Backend chỉ 1,05 lần. Người ước lượng Mobile là Khoa, giỏi nhưng lạc quan. Sponsor lo vì mọi dự báo dựa trên ước lượng.

**Dữ kiện:** phần Mobile còn lại khoảng 210 SP; velocity Mobile 15 SP/sprint; Backend còn 140 SP, velocity 12.
**Nhiễu:** Khoa nhạy cảm về chuyện này.

**Câu hỏi:** (1) Bạn hiệu chỉnh dự báo thế nào? (2) Bạn nói gì với Khoa? (3) Bạn cải thiện ước lượng ra sao?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** thiên lệch hệ thống (optimism bias), không phải lười. **Dùng năng suất thực** thay vì ước lượng thô.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Dự báo bằng **velocity thực** (không phụ thuộc ước lượng thô) | Nhanh, khách quan | Không sửa nguồn |
| B. Hệ số hiệu chỉnh 1,4 cho Mobile trong dự báo | Đơn giản | Mang tính thống kê |
| C. Ước lượng nhóm (Planning Poker), thêm reviewer, tách story nhỏ | Cải thiện dài hạn | Tốn công |

**Khuyến nghị: A + C.** Tính: Mobile 210 SP ÷ 15 = **14 sprint** (không phải 10,5 nếu tin ước lượng); Backend 140 ÷ 12 ≈ **11,7 sprint**. Dự báo phải thể hiện Mobile là nhánh găng gần; cần biện pháp (thêm người hoặc cắt).

**Lời nói mẫu (Khoa):** "Số liệu cho thấy ước lượng Mobile hay thấp hơn thực tế khoảng 40%, và điều này ở cả nhóm chứ không riêng ai. Mình cùng dùng Planning Poker cả ba Mobile để ước lượng, và chia story nhỏ hơn. Em cần anh giúp bằng cách nói cho em biết những thứ hay bị quên (test, tích hợp, sửa lỗi UI)."

**Tài liệu:** dự báo (velocity), Quality/DoD (bao gồm test), Resource Plan (Mobile), RAID (rủi ro ước lượng).

**Sai lầm:** nói "Khoa ước lượng kém"; áp hệ số bí mật; bỏ qua dữ liệu.

**Phòng ngừa:** ước lượng nhóm; retro về sai lệch; hiệu chỉnh hằng sprint.
</details>

---

### Tình huống 43.6 — Nhiều đội lệch nhịp
**Giai đoạn:** R1 (T56, 2027) · **Độ khó:** ★★☆ · **Kỹ năng:** phối hợp nhiều đội, cadences · **Chương liên quan:** Ch26, Ch33

**Bối cảnh:** Thứ Hai 25/01/2027, đội Mobile chạy sprint 2 tuần và release train app store; đội Backend đã daily deploy và đổi API thường xuyên. Tuần này Mobile báo "API đánh giá món" đổi hai lần trong 5 ngày làm app crash trên staging, trễ 1 tuần (X-02).

**Dữ kiện:** Backend hỗ trợ ≥ 2 phiên bản app; hợp đồng API chưa có phiên bản cho endpoint mới; SoS 2 lần/tuần.
**Nhiễu:** cả hai bên đều cho rằng "đội kia cẩu thả".

**Câu hỏi:** (1) Bạn làm gì trong 24 giờ? (2) Quy tắc phối hợp nào bạn đặt? (3) Bạn đưa gì vào SoS?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** khác nhịp (daily vs 2 tuần) và thiếu **hợp đồng API có phiên bản/thông báo thay đổi**; không phải "cẩu thả".

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Đóng băng hợp đồng API v1.1, thay đổi tiếp theo là v1.2 thông báo ≥ 1 sprint | Ổn định | Backend chậm hơn |
| B. Contract test tự động + môi trường tích hợp chung | Phát hiện sớm | Cần đầu tư |
| C. Mobile dùng mock theo hợp đồng cho đến khi ổn | Giảm phụ thuộc | Rủi ro lệch |

**Khuyến nghị: A + B, C tạm thời.** **Lời nói mẫu (SoS):** "Mình không tranh xem ai sai; mình cần một hợp đồng: endpoint đánh giá món v1.1 đóng băng từ hôm nay; mọi thay đổi vào v1.2 thông báo trước một sprint. Backend giữ v1.1 ≥ 2 sprint. Nam thêm contract test tuần này."

**Tài liệu:** bảng phụ thuộc chéo đội (X-02), Working Agreement, chính sách API, RAID.

**Sai lầm:** ép một đội đổi nhịp; đổ lỗi; không có người phụ trách hợp đồng.

**Phòng ngừa:** API có phiên bản, contract test, thông báo ≥ 1 sprint; SoS tập trung phụ thuộc.
</details>

---

## Kỹ năng đã luyện

| Tình huống | Kỹ năng | Chương gốc |
|---|---|---|
| 43.1 | EVM, nói thật, đòn bẩy | Ch34, Ch38 |
| 43.2 | Bus factor, chuyển giao | Ch16 |
| 43.3 | Thương lượng nguồn lực chia sẻ | Ch16 |
| 43.4 | Bảo vệ đường găng và chất lượng | Ch12, Ch36 |
| 43.5 | Hiệu chỉnh ước lượng bằng dữ liệu | Ch11 |
| 43.6 | Phối hợp nhiều đội, hợp đồng API | Ch26 |

## Ba tình huống mở (tự viết đáp án)

1. **Hai dự án một người:** Một Tech Lead được chia 50/50 cho hai dự án, cả hai đang căng. Bạn thương lượng thế nào?
2. **Tết đến gần:** Ba tuần trước Tết, 30% đội xin nghỉ dài; mốc đang sát. Bạn làm gì?
3. **Vendor offshore lệch múi giờ:** Vendor ở múi giờ chênh 5 giờ, mỗi câu hỏi mất một ngày. Bạn tổ chức lại thế nào?
