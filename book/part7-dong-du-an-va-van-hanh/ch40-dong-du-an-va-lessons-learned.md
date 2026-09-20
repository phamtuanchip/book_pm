# Chương 40: Đóng dự án, bài học kinh nghiệm & bàn giao

## Mục tiêu học

- Phân biệt đóng giai đoạn với đóng dự án và lập checklist đóng dự án đầy đủ.
- Tổ chức bàn giao vận hành (KT handover, runbook, SLA) và nghiệm thu chính thức.
- Viết lessons learned **hành động được** thay vì cảm tính.
- Ghi nhận và chia tay đội đúng cách; viết báo cáo đóng dự án.

## 40.1 Đóng giai đoạn và đóng dự án

**Đóng giai đoạn** kết thúc một phần của dự án (ví dụ giai đoạn MVP) để chuyển sang phần khác (R1); **đóng dự án** kết thúc toàn bộ công việc: mọi deliverable đã giao, mọi hợp đồng được đóng, nguồn lực giải phóng. Ở Hybrid nhiều giai đoạn (MVP → R1 → R2), bạn **đóng từng giai đoạn** với đầy đủ nghi thức, vì mỗi giai đoạn có hợp đồng, ngân sách và nghiệm thu riêng.

Nhiều dự án "không bao giờ đóng": họ trôi sang vận hành mà không nghiệm thu, không bàn giao, không đo lại. Hậu quả: tranh cãi thanh toán, tri thức mất, đội bị giữ vô hạn. **Đóng dự án là một kỷ luật**, không phải thủ tục.

## 40.2 Checklist đóng dự án

Bảy nhóm, không nhóm nào bỏ được:

| Nhóm | Nội dung | Vì sao quan trọng |
|---|---|---|
| **A. Deliverable và nghiệm thu** | Bàn giao đủ; biên bản nghiệm thu ký; tồn đọng có kế hoạch | Căn cứ thanh toán và pháp lý |
| **B. Bàn giao kỹ thuật** | Mã nguồn, runbook, kiến trúc, cấu hình, bí mật, SLA, họp bàn giao | Đội vận hành tự chạy được |
| **C. Tài liệu và tri thức** | Sắp xếp kho, đánh dấu bản chính, lưu Decision Log/RAID | Người sau không phải đoán |
| **D. Hợp đồng và tài chính** | Thanh toán mốc cuối, đóng/chuyển hợp đồng vendor, đối chiếu chi phí cuối, ngày hết hạn chứng nhận | Không còn nợ treo |
| **E. Quyền truy cập và bảo mật** | Thu hồi quyền, đổi khoá, xoá dữ liệu thật ngoài production | Rủi ro bảo mật sau dự án |
| **F. Con người** | Ghi nhận, thư cảm ơn, giải phóng nguồn lực, chia tay | Giữ uy tín và động lực |
| **G. Học và đóng** | Retro cấp dự án, lessons learned, báo cáo đóng, kế hoạch đo lợi ích | Đầu vào cho dự án sau |

📎 Mẫu đầy đủ: `templates/closure/handover-checklist.md`

Nguyên tắc: **không đóng khi nhóm A, D, E còn mở**; lập checklist ngay từ khi vào hypercare, không đợi ngày đóng.

## 40.3 Bàn giao vận hành

**KT handover** (bàn giao kiến thức) từ đội dự án sang đội vận hành/bảo trì. Nội dung: kiến trúc và ADR, hướng dẫn build/deploy, runbook sự cố, giám sát và cảnh báo, danh sách nợ kỹ thuật, cấu hình và bí mật, quy trình hỗ trợ, SLA. Cách làm hiệu quả:

- **Bàn giao bằng thực hành**, không chỉ tài liệu: đội nhận tự deploy một bản trên staging, tự xử lý một sự cố mô phỏng, có đội cũ ngồi cạnh.
- **Hai buổi, mỗi buổi 2 giờ** trước khi kết thúc hypercare, và một khoảng **shadow** ngắn.
- **Kiểm tra đầu ra**: đội nhận trả lời 10 câu vận hành mà không cần hỏi lại.
- **Chuyển mô hình làm việc**: FoodNow chuyển từ Scrum sang **Kanban** cho bảo trì (Ch25).

**SLA vận hành** cần thoả thuận rõ: mức sự cố, thời gian phản hồi/khắc phục, kênh, giờ trực — vì hypercare có SLA cao hơn hỗ trợ thường.

**Nghiệm thu chính thức** bằng **biên bản nghiệm thu**: liệt kê deliverable, tiêu chí đạt, tồn đọng, chữ ký các bên; nó là căn cứ thanh toán mốc cuối. Tránh "nghiệm thu miệng".

📎 Mẫu đầy đủ: `templates/closure/acceptance-certificate.md`

## 40.4 Lessons learned hành động được

**Lessons learned** (bài học kinh nghiệm) là thứ dự án sau sẽ dùng. Nhưng phần lớn bài học ghi ra vô dụng: "Cần giao tiếp tốt hơn". Ba lỗi: quá chung, không có ngữ cảnh, không có hành động.

**Bài học hành động được** có bốn thành phần:

1. **Ngữ cảnh** (chuyện gì xảy ra, số liệu);
2. **Tác động** (hệ quả, tích cực hay tiêu cực);
3. **Hành động cho lần sau** dưới dạng **"Khi X, thì làm Y"**, cụ thể và kiểm tra được;
4. **Chủ sở hữu** (ai đưa vào quy trình/mẫu).

So sánh:

| Chung chung | Hành động được |
|---|---|
| "Cần quản lý nhánh tốt hơn" | "Khi bắt đầu dự án, đưa luật nhánh ≤ 5 ngày và branch protection vào Working Agreement Sprint 0 (chủ: Tech Lead). Bối cảnh: conflict 200 file mất ~2 ngày công." |
| "Giao tiếp với vendor" | "Với phụ thuộc vendor trên đường găng, viết contingency và quy tắc dùng dự phòng trước khi vendor trễ. Bối cảnh: PayEasy trễ 3 tuần, giữ go-live nhờ 110 triệu dự phòng." |

**Cách thu thập**: **retro cấp dự án** (nửa ngày) với nhiều định dạng (4Ls, Sailboat — Ch28); phỏng vấn stakeholder chính (Sponsor, PO, CS, vendor); đọc RAID, Decision Log, CR, báo cáo sự cố; **cả bài học tích cực** (điều làm tốt cần nhân rộng). **Không đổ lỗi**; nhóm theo chủ đề (phạm vi, lịch, chất lượng, con người, kỹ thuật, vendor, giao tiếp).

**Lưu trữ**: register có ID, giai đoạn, bài học, ngữ cảnh, tác động, hành động, chủ sở hữu, trạng thái; đưa vào **template và quy trình** của tổ chức (checklist khởi động, Working Agreement mẫu) — đó mới là "áp dụng". Bài học chỉ nằm trong file là bài học chưa học.

📎 Mẫu đầy đủ: `templates/closure/lessons-learned-register.csv` (12 bài học của FoodNow)

## 40.5 Ghi nhận và chia tay đội

Cách bạn kết thúc dự án quyết định người ta có muốn làm việc với bạn lần nữa không.

- **Ghi nhận cụ thể**: nêu việc mỗi người đã làm và tác động (SBI tích cực), không "cảm ơn cả đội" chung chung; gửi phản hồi cho quản lý trực tiếp của họ.
- **Thư cảm ơn/chứng nhận** ngắn cho người đóng góp lớn; vinh danh cả người ít nổi (QA, DevOps, BA).
- **Chia tay**: buổi ăn/nói chuyện; cho phép nói về khó khăn; hỏi mong muốn tiếp theo (đưa vào kế hoạch nhân sự).
- **Giải phóng nguồn lực** có kế hoạch: báo trước cho quản lý; đừng để người "trôi" không việc.
- **Người ở lại** (đội bảo trì) cũng cần ghi nhận và hiểu vai trò mới.

## 40.6 Báo cáo đóng dự án

Báo cáo đóng dự án là bản tổng kết 2–4 trang: **tóm tắt điều hành**; **so sánh baseline** (thời gian, chi phí, phạm vi, chất lượng) bằng số và giải thích chênh lệch; **mục tiêu thành công theo 3 cấp** (dự án đo ngay; sản phẩm và kinh doanh đo sau — Ch41); **deliverable và nghiệm thu**; **chỉ số dự án** (SPI/CPI, velocity, CR, defect, sự cố); **bàn giao**; **bài học**; **việc còn lại**; chữ ký. Nguyên tắc: trung thực (không tô hồng lệch baseline), ngắn, có bằng chứng.

📎 Mẫu đầy đủ: `templates/closure/project-closure-report.md`

## Tình huống FoodNow

Thứ Hai 02/11/2026 (tuần 44). Hà đóng **giai đoạn MVP**. Chị đã mở checklist đóng dự án từ tuần 40 (giữa hypercare) và chia việc: Nam hoàn tất tồn đọng; Dũng bàn giao kỹ thuật cho đội bảo trì bằng hai buổi thực hành (họ tự deploy và tự xử lý một sự cố cache mô phỏng); Lan hoàn tất tài liệu người dùng; Ánh thu hồi quyền và chuyển bí mật; chị làm việc với Bảo về nghiệm thu. Ngân sách: **thực chi 2,31 tỷ** so với trần 2,4 tỷ; dự phòng đã dùng 170 triệu, 86,8 triệu chưa dùng trả lại FoodNow.

Buổi **retro cấp dự án** nửa ngày (30/10) dùng Sailboat và 4Ls; chị cũng phỏng vấn anh Bảo, chị Châu, anh Huy, chị Yến. Kết quả: **12 bài học** — mỗi bài viết theo công thức "Khi X, thì làm Y", có chủ sở hữu. Một số: "Khi đội chưa đủ người hoặc scope chưa chốt, lên kế hoạch Sprint 0 3–4 tuần và cam kết Sprint 1 ≤ 50% capacity"; "Với mọi phụ thuộc bên ngoài trên đường găng, viết contingency và quy tắc dùng dự phòng trước"; "Khi phát hành, rà config diff staging–production". Hà đưa ba bài học đầu vào **Working Agreement mẫu** và **checklist khởi động** của BrightSoft, để dự án tiếp theo tự động có chúng.

Ngày 02/11, anh Bảo và chị Châu ký **biên bản nghiệm thu** (kèm danh sách tồn đọng: 4 Medium, 9 Low; nợ kỹ thuật cho R1). Hà tổ chức buổi cảm ơn: chị gửi cho từng người một phản hồi SBI tích cực — ví dụ cho Ánh: "Đêm go-live, khi báo cáo lệch giá xuất hiện, chị Ánh xả cache trong 8 phút sau khi có quyết định; nhờ vậy thời gian khôi phục dưới 4 giờ." Chị cũng gửi thư cho quản lý của từng người; hai thành viên được đề bạt trong quý sau. Báo cáo đóng dự án gửi Sponsor lúc 15:00.

## Bài tập

**Bài 1 (làm ra sản phẩm) — 5 bài học hành động được.** Từ đoạn kể sau, viết 5 bài học hành động được theo mẫu (ngữ cảnh, tác động, hành động "Khi X, thì Y", chủ sở hữu): "Dự án web 6 tháng trễ 5 tuần. Khách gửi yêu cầu qua email, chat và họp nên đội xây hai bản thiết kế khác nhau; một Dev senior nghỉ việc ở tháng thứ 4 và không ai hiểu module thanh toán; UAT phát hiện luồng hoàn tiền sai vì yêu cầu chỉ được viết ở tuần cuối; khi phát hành, khác biệt cấu hình giữa staging và production làm hỏng email xác nhận; báo cáo tuần luôn 'xanh' cho đến tháng thứ 5."

**Bài 2 (làm ra sản phẩm).** Lập checklist đóng dự án cho dự án của bạn (7 nhóm A–G, mỗi nhóm ≥ 3 mục, có người và hạn) và soạn nội dung buổi KT handover 4 giờ.

**Bài 3 (tình huống ngắn).** Khách không chịu ký nghiệm thu, nói "còn vài góp ý nhỏ" đã 3 tuần trong khi bạn cần đóng dự án để thanh toán mốc cuối. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1 (mẫu):** (1) Khi nhận yêu cầu từ nhiều kênh, thì chỉ chấp nhận yêu cầu qua một nguồn (backlog/Confluence) và xác nhận bằng email chốt (chủ: BA); (2) Khi module lõi chỉ một người biết, thì pair và ADR ngay từ Sprint 0 (Tech Lead); (3) Khi có luồng tiền, thì viết yêu cầu và kịch bản UAT trước khi phát triển (BA + QA); (4) Khi phát hành, thì rà config diff staging–production trong checklist (DevOps); (5) Khi báo cáo, thì đặt ngưỡng RAG bằng số và dữ liệu từ hệ thống (PM). Mỗi bài có bối cảnh và tác động như trong đoạn kể.

**Bài 3:** Chẩn đoán: nghiệm thu bị kéo dài, có thể vì kỳ vọng chưa rõ hoặc đòn bẩy thương lượng. Phương án A: đưa danh sách "góp ý" ra và phân loại: lỗi thuộc phạm vi (sửa, có hạn), thay đổi ngoài phạm vi (CR), cải tiến (backlog); đề nghị **nghiệm thu có điều kiện**; B: leo thang lên Sponsor và điều khoản hợp đồng về thời hạn nghiệm thu (ví dụ nghiệm thu mặc nhiên sau X ngày); C: hẹn họp 45 phút với khách để ký. Khuyến nghị: A + C, kèm nhắc điều khoản. Lời nói mẫu: "Em tổng hợp 12 góp ý: 4 thuộc phạm vi em sửa trong 1 tuần, 6 là cải tiến đưa vào R1, 2 cần CR. Anh ký nghiệm thu có điều kiện với danh sách này để mình cùng chốt được không?" Sai lầm: né tránh; hoặc chiều mọi góp ý vô hạn.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Không đóng dự án chính thức. → **Hậu quả:** tranh cãi thanh toán, đội bị giữ vô hạn. **Cách khắc phục:** checklist A–G, nghiệm thu bằng biên bản.
2. **Sai lầm:** Bàn giao chỉ bằng tài liệu. → **Hậu quả:** đội nhận không tự xử lý được sự cố. **Cách khắc phục:** bàn giao bằng thực hành, shadow, kiểm tra đầu ra.
3. **Sai lầm:** Lessons learned chung chung. → **Hậu quả:** không ai áp dụng. **Cách khắc phục:** "Khi X, thì Y", chủ sở hữu, đưa vào template.
4. **Sai lầm:** Bỏ qua bài học tích cực. → **Hậu quả:** không nhân rộng điều tốt. **Cách khắc phục:** thu cả tích cực và tiêu cực.
5. **Sai lầm:** Quên thu hồi quyền/đổi khoá. → **Hậu quả:** rủi ro bảo mật. **Cách khắc phục:** nhóm E của checklist, hạn 1 ngày làm việc.
6. **Sai lầm:** Giải tán đội mà không ghi nhận. → **Hậu quả:** mất niềm tin, khó tuyển đội lần sau. **Cách khắc phục:** ghi nhận cụ thể, thư cho quản lý, kế hoạch nguồn lực.

## Tóm tắt & tiếp theo

- Đóng giai đoạn khác đóng dự án; đóng là kỷ luật với checklist A–G.
- Bàn giao kỹ thuật bằng thực hành và kiểm tra đầu ra; nghiệm thu bằng biên bản, SLA vận hành rõ.
- Lessons learned hành động được: ngữ cảnh, tác động, "Khi X, thì Y", chủ sở hữu, đưa vào template.
- Ghi nhận cụ thể và chia tay đội; báo cáo đóng dự án trung thực, có bằng chứng.

Chương 41 kết thúc Phần 7: **đo lợi ích sau dự án, PMO và danh mục dự án**.
