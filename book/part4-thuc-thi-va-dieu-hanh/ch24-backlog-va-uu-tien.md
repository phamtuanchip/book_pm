# Chương 24: Backlog & ưu tiên ở góc độ PM

## Mục tiêu học

- Phân biệt Product Backlog, Sprint Backlog và Release Backlog, và ai sở hữu cái nào.
- Chia việc giữa PM, PO và BA về backlog một cách rõ ràng.
- Dùng được MoSCoW, RICE/WSJF và Kano để ưu tiên; chấm RICE đúng công thức.
- Vận hành refinement, Definition of Ready và quản lý tồn đọng.
- Nối backlog với WBS và roadmap.

## 24.1 Ba loại backlog

| Loại | Nội dung | Chủ sở hữu | Vòng đời |
|---|---|---|---|
| **Product Backlog** | Danh sách có thứ tự mọi thứ sản phẩm cần | **PO** | Suốt vòng đời sản phẩm |
| **Release Backlog** | Phần của Product Backlog thuộc một release (MVP, R1…) | PO + PM | Một release |
| **Sprint Backlog** | Story chọn cho sprint + kế hoạch làm | **Developers** | Một sprint |

Ba mối quan hệ cần nhớ:
- Product Backlog **sống**, mục cao ưu tiên chi tiết, mục thấp thô.
- **Release Backlog** là cầu nối với **Release Plan** (Ch13) và WBS/ngân sách.
- **Sprint Backlog** thuộc quyền tự tổ chức của đội; PM không thêm việc vào.

## 24.2 PM, PO và BA chia việc thế nào

| Việc | PO | BA | PM |
|---|---|---|---|
| Quyết định ưu tiên | **A/R** | C | C (cung cấp chi phí, thời gian) |
| Viết và làm rõ story, tiêu chí chấp nhận | A | **R** | I |
| Refinement | A | R | Dự thính khi cần |
| Ước lượng | I | C | I (đội làm) |
| Bảo vệ baseline (phạm vi ngoài epic) | C | C | **A/R** |
| Báo cáo tiến độ theo release | I | C | **A/R** |

Trong bối cảnh Hybrid, **PM không sắp xếp backlog** nhưng cần: (1) **nhìn thấy** backlog để dự báo; (2) **cung cấp thông tin chi phí** cho quyết định ưu tiên; (3) bảo đảm thay đổi ngoài epic đi qua CR (Ch20). Xem thêm sách *IT Business Analyst — Từ Zero Đến Thành Thạo* (các chương về Product Backlog và ưu tiên hoá) để đi sâu vai trò BA.

## 24.3 Các kỹ thuật ưu tiên

### MoSCoW

Phân loại: **Must** (không có thì không ra mắt), **Should** (quan trọng nhưng có cách né), **Could** (nice-to-have), **Won't** (không làm ở bản này, ghi rõ). Quy tắc: **Must chiếm không quá ~60% dung lượng** để có đệm; nếu Must chiếm 90% thì không còn linh hoạt.

### RICE

**RICE** cho điểm để so sánh:

**RICE = (Reach × Impact × Confidence) ÷ Effort**

- **Reach**: số người bị ảnh hưởng trong kỳ (dùng thang 1–10 hoặc số thật);
- **Impact**: mức tác động (0,25 rất nhỏ; 0,5 nhỏ; 1 vừa; 2 lớn; 3 rất lớn);
- **Confidence**: độ tin cậy vào ước lượng (0,5–1);
- **Effort**: công sức (story point hoặc người-tuần).

Ví dụ: "Hủy đơn của khách" (Reach 7, Impact 3, Confidence 0,8, Effort 5 SP) → 7×3×0,8÷5 = **3,36**. "Banner khuyến mãi trang chủ" (Reach 10, Impact 1, Confidence 0,5, Effort 8) → 10×1×0,5÷8 = **0,625**.

### WSJF

**WSJF** (Weighted Shortest Job First, dùng trong SAFe): **Cost of Delay ÷ Job Size**, trong đó Cost of Delay = giá trị kinh doanh + mức khẩn cấp theo thời gian + giảm rủi ro/tạo cơ hội. Ưu tiên việc **giá trị cao, chi phí trì hoãn cao, kích thước nhỏ**. Hợp khi có nhiều dự án/đội tranh nguồn lực.

### Kano (tóm tắt)

Phân loại tính năng: **cơ bản** (phải có, thiếu là tức giận), **hiệu suất** (càng nhiều càng thích), **hấp dẫn** (ngạc nhiên vui). Dùng để cân bằng: MVP phải có đủ tính năng cơ bản trước khi làm tính năng hấp dẫn.

**Cẩn trọng**: điểm số chỉ là **công cụ hội thoại**, không phải chân lý. Khi hai bên tranh cãi, con số buộc mọi người nêu giả định (Reach bao nhiêu? Impact vì sao?), và **PO quyết định**.

## 24.4 Refinement, Definition of Ready và tồn đọng

**Refinement** (làm mịn backlog) là hoạt động liên tục: chia nhỏ, làm rõ, ước lượng story sắp làm. Nhịp gợi ý: 1 buổi/tuần, ≤ 10% thời gian đội. Mục tiêu: luôn có **≥ 2 sprint** story ở trạng thái **Ready**.

**Definition of Ready** (DoR): story có giá trị rõ, tiêu chí chấp nhận, thiết kế, phụ thuộc, ước lượng ≤ 8 SP, vừa trong một sprint. DoR là hướng dẫn, không phải cổng cứng.

📎 Mẫu đầy đủ: `templates/sprint-agile/dor-checklist.md`

**Quản lý tồn đọng**: backlog phình vô hạn làm mất tập trung. Quy tắc: mục **quá 3 tháng không được chạm** thì xem xét xoá hoặc gộp; giữ mục thấp ở mức thô; phân biệt **ý tưởng** (kho riêng) với **backlog cam kết**.

## 24.5 Backlog ↔ WBS ↔ roadmap

| Tài liệu | Đơn vị | Mục đích | Liên kết |
|---|---|---|---|
| **Roadmap** | Theme/outcome | Hướng đi (Ch13) | Theme → epic |
| **WBS** | Work package (ngày công) | Ngân sách, lịch, baseline (Ch10) | Work package ↔ nhóm story |
| **Backlog** | Epic/story (SP) | Thực thi hằng sprint | Epic là cầu nối |

Ánh xạ mẫu (FoodNow): WBS 3.1.3 "Giỏ hàng và đặt đơn" (65 ngày công) ↔ Epic **E3** ↔ story FN-109, FN-110, FN-128, FN-129… Khi backlog đổi trong epic, baseline WBS không đổi; khi thêm epic mới thì CR.

📎 Mẫu đầy đủ: `templates/sprint-agile/product-backlog.csv` (30 story, có MoSCoW, RICE bằng công thức, Sprint đích và trạng thái)

## Đi sâu: ví dụ chấm điểm và các bẫy khi ưu tiên

### Ví dụ RICE và WSJF trên cùng một tập story

Cho bốn story của FoodNow ở Sprint 8 (Reach 1–10; Impact 0,25–3; Confidence 0,5–1; Effort là story point):

| Story | Reach | Impact | Conf. | Effort | RICE |
|---|---|---|---|---|---|
| Hủy đơn của khách (FN-129) | 7 | 3 | 0,8 | 5 | 3,36 |
| Thông báo push trạng thái đơn (FN-120) | 9 | 2 | 0,8 | 5 | 2,88 |
| Lịch sử đơn hàng (FN-121) | 8 | 1 | 0,9 | 3 | 2,40 |
| Banner khuyến mãi (đề xuất) | 10 | 1 | 0,5 | 8 | 0,63 |

Cách đọc: RICE ưu tiên **hủy đơn** vì tác động lớn ở chi phí nhỏ; banner đứng cuối vì độ tin cậy thấp — nếu Marketing đo được tác động thật, Confidence tăng và thứ hạng đổi. Đó là ý nghĩa chính: điểm số **buộc người nêu giả định**.

**WSJF** dùng khi phải xếp việc có *chi phí trì hoãn* khác nhau. Ví dụ hai việc cùng cỡ 5: (A) khoản tuân thủ có hạn pháp lý sau 6 tuần — giá trị kinh doanh 3, khẩn cấp theo thời gian 8, giảm rủi ro 8 → Cost of Delay 19, WSJF = 19 ÷ 5 = 3,8; (B) một cải tiến giao diện — 5 + 2 + 1 = 8, WSJF = 1,6. A đi trước dù "giá trị người dùng" của B nghe hấp dẫn.

### Năm bẫy thường gặp

1. **Ưu tiên theo người nói to nhất.** Cách chặn: mọi đề xuất phải kèm giả định về Reach/Impact.
2. **Điểm số giả chính xác.** RICE 3,36 và 3,20 không khác nhau đáng kể; coi chênh nhỏ hơn 15% là hoà và dùng phán đoán.
3. **Chỉ chấm giá trị, quên phụ thuộc.** Story có RICE cao nhưng chờ vendor vẫn không làm được; đưa cột "phụ thuộc" vào bảng.
4. **Chấm một lần rồi quên.** Dữ liệu thay đổi; chấm lại ở đầu mỗi release.
5. **Backlog đầy "Must".** Nếu 80% là Must, MoSCoW đã mất nghĩa; buộc mỗi Must trả lời "nếu không có, ra mắt được không?".

### Backlog cho đội có hai chân: phát triển và bảo trì

Khi một đội vừa làm tính năng vừa xử lý lỗi, hãy tách **hai làn** trong cùng backlog: làn *giá trị mới* (theo roadmap) và làn *bảo trì/kỹ thuật* (chiếm cố định, ví dụ 20–30% dung lượng). Làm vậy tránh hai thái cực: bảo trì nuốt hết sprint, hoặc nợ tích tụ vì tính năng luôn "gấp hơn". Dung lượng mỗi làn là quyết định của PO với dữ liệu của PM.

## Tình huống FoodNow

Thứ Hai 25/05/2026, Sprint 8 Planning. Kể từ khi đội cắt bớt hai hạng mục ở tuần 20 (Ch34), backlog vẫn còn dày và hai bên kéo về hai phía. Trưởng nhóm **Marketing** của FoodNow muốn thêm **banner khuyến mãi trang chủ** và **nút chia sẻ đơn lên mạng xã hội** cho chiến dịch ra mắt. Anh **Huy** (CS Manager) muốn **hủy đơn của khách (FN-129)** và **quản lý tranh chấp trong Admin (FN-126)** lên sớm, vì đội CS sẽ ngập ticket nếu khách không tự huỷ được.

Châu đang bị kẹt giữa hai bên. Hà không chọn phe; chị đề nghị họp 45 phút, mỗi bên trình bày **giả định** và dùng RICE. Marketing: banner (R10, I1, C0,5, E8) → 0,625; chia sẻ MXH (R8, I1, C0,5, E5) → 0,8. Huy: hủy đơn (R7, I3, C0,8, E5) → 3,36; tranh chấp Admin (R3, I3, C0,8, E8) → 0,9. Marketing phản bác Reach của họ bị đánh giá thấp vì "thương hiệu"; Hà hỏi: "Anh có dữ liệu về Impact chưa?" Họ chưa có, nên Confidence 0,5.

Châu quyết định: đưa **FN-129 vào Sprint 8**, FN-126 vào Sprint 10, banner và chia sẻ MXH thuộc **R1** (đã có trong roadmap dưới theme "giữ chân khách"). Hà bổ sung: "Nếu Marketing có dữ liệu Impact sau khi MVP chạy, mình sẽ chấm lại." Không ai thắng thua; cả hai bên thấy lý do rõ ràng, và nhóm Marketing được giao hai mục cho R1.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Ưu tiên 12 story.** Cho 12 story (tự đặt) của một app quản lý chi tiêu. Phân loại MoSCoW (Must ≤ 60% tổng effort) và chấm RICE (Reach 1–10, Impact 0,25–3, Confidence 0,5–1, Effort SP); xếp thứ tự và ghi quyết định cuối; nêu một trường hợp MoSCoW và RICE bất đồng, giải thích.

**Bài 2 (làm ra sản phẩm).** Ánh xạ 5 work package của WBS dự án bạn với epic/story; kiểm tra mỗi epic thuộc đúng release.

**Bài 3 (tình huống ngắn).** Sponsor gửi cho đội một tính năng mới qua chat và nói "làm sprint này". Sprint đang chạy ngày thứ 4. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án Bài 3</summary>

Chẩn đoán: bỏ qua PO và kênh backlog; sprint bị đe doạ. Phương án A: đưa vào backlog, PO chấm ưu tiên, xét ở Planning kế tiếp (2 tuần sau). B: nếu khẩn cấp và giá trị lớn, PO + đội đánh giá đổi hạng mục cùng cỡ trong sprint (hoán đổi, không thêm), ghi vào Change Log. C: nếu ngoài epic đã duyệt → CR. Khuyến nghị A hoặc B. Lời nói mẫu: "Em đưa vào backlog và cùng chị Châu chấm ưu tiên ngay hôm nay. Nếu anh cần gấp trong sprint, mình sẽ đổi với một mục cùng cỡ để không phá Sprint Goal." Sai lầm: đội tự thêm; PM ép nhận.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** PM tự sắp xếp backlog. → **Hậu quả:** PO mất quyền, ưu tiên theo chi phí thay vì giá trị. **Cách khắc phục:** PM cung cấp dữ liệu; PO quyết.
2. **Sai lầm:** Must chiếm gần hết dung lượng. → **Hậu quả:** không còn chỗ thay đổi; sprint nào cũng căng. **Cách khắc phục:** Must ≤ 60%.
3. **Sai lầm:** Coi RICE là chân lý. → **Hậu quả:** tranh luận về con số thay vì giá trị. **Cách khắc phục:** dùng để làm lộ giả định; PO quyết.
4. **Sai lầm:** Không refinement. → **Hậu quả:** Planning kéo dài, story mơ hồ. **Cách khắc phục:** 1 buổi/tuần, ≥ 2 sprint Ready.
5. **Sai lầm:** Backlog 500 mục không dọn. → **Hậu quả:** mất tập trung. **Cách khắc phục:** dọn mục cũ; tách kho ý tưởng.
6. **Sai lầm:** Backlog không nối với WBS/roadmap. → **Hậu quả:** báo cáo không khớp, không biết release đến đâu. **Cách khắc phục:** epic là cầu nối; ánh xạ WBS.

## Tóm tắt & tiếp theo

- Ba loại backlog: Product (PO), Release (PO + PM), Sprint (đội).
- PM cung cấp dữ liệu chi phí, bảo vệ baseline; PO ưu tiên; BA làm rõ story.
- MoSCoW (Must ≤ 60%), RICE = R×I×C÷E, WSJF, Kano; điểm số là công cụ hội thoại.
- Refinement liên tục, DoR, dọn tồn đọng; backlog ↔ WBS ↔ roadmap qua epic.

Chương 25 giới thiệu **Kanban và chỉ số dòng chảy**, khi Scrum không phải lựa chọn tốt nhất.
