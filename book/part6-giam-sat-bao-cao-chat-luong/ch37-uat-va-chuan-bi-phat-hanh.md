# Chương 37: Kiểm thử, UAT & chuẩn bị phát hành

## Mục tiêu học

- Phân biệt các cấp kiểm thử và biết PM phải hỏi gì ở mỗi cấp.
- Lập kế hoạch UAT: người test, dữ liệu, môi trường, lịch, tiêu chí vào/ra.
- Quản lý defect: severity vs priority, triage, SLA, defect burn-down.
- Áp dụng tiêu chí Go/No-Go, regression, bug bash và sign-off UAT (kể cả sign-off có điều kiện).

## 37.1 Các cấp kiểm thử — nhìn từ PM

Ở Ch15 bạn đã có bảy cấp kiểm thử. Ở giai đoạn phát hành, ba cấp quyết định thành bại:

| Cấp | Câu hỏi | Ai chịu trách nhiệm | PM hỏi gì |
|---|---|---|---|
| **System test** | Hệ thống làm đúng yêu cầu? | QA | Bao nhiêu % yêu cầu đã có test? Tỷ lệ đạt? |
| **Regression** | Cái mới có phá cái cũ? | QA (tự động) | Regression tự động chạy bao lâu? Đã chạy trên rc chưa? |
| **UAT** (User Acceptance Testing) | Người dùng thật chấp nhận không? | PO, CS, người dùng | Ai test? Test gì? Ký gì? |

Khác biệt cốt lõi: **QA kiểm tra "làm đúng cách" (theo yêu cầu); UAT kiểm tra "làm đúng việc" (phục vụ nhu cầu thật)**. Hệ thống có thể qua QA nhưng bị UAT từ chối vì quy trình không hợp thực tế.

## 37.2 Lập kế hoạch UAT

PM (cùng BA, PO, QA) lập kế hoạch UAT ít nhất **3 tuần trước** khi bắt đầu:

1. **Mục tiêu và phạm vi**: xác nhận điều gì; luồng nào trong/ngoài.
2. **Người test**: người dùng thật, đại diện các vai trò (CS, nhà hàng, tài xế, khách thử) — không chỉ nội bộ; điều phối bởi một người.
3. **Kịch bản**: theo luồng nghiệp vụ (60 kịch bản ở FoodNow), mỗi kịch bản có bước, dữ liệu, kết quả mong đợi.
4. **Môi trường và dữ liệu**: môi trường UAT giống production; dữ liệu giả gần thật; **không dữ liệu cá nhân thật**.
5. **Lịch**: chuẩn bị, vòng 1, sửa lỗi, vòng 2, Go/No-Go.
6. **Tiêu chí vào/ra/tạm dừng**: vào UAT (không Critical đã biết, rc tag, smoke đạt); ra UAT (100% kịch bản, không Critical/High, sign-off); tạm dừng (môi trường sập, quá nhiều Critical).
7. **Quy trình defect và sign-off**.

📎 Mẫu đầy đủ: `templates/quality/uat-plan.md`

Ba kinh nghiệm: (a) **lịch người dùng đặt trước** — nhà hàng, tài xế không rảnh vào tuần cuối; (b) **hỗ trợ tận nơi** người dùng trong UAT; (c) **UAT không phải nơi tìm lỗi cơ bản** — nếu QA chưa smoke test, người dùng sẽ mất niềm tin.

## 37.3 Quản lý defect

**Severity** (mức nghiêm trọng, do QA đánh giá) khác **Priority** (thứ tự sửa theo kinh doanh, do PO/PM quyết). Bảng severity 4 mức: **Critical** (sập, mất/lệch tiền, chặn luồng chính không cách né), **High** (chức năng chính lỗi), **Medium** (có cách né), **Low** (thẩm mỹ). Ví dụ lỗi Low ở trang chủ có thể priority cao trước một chiến dịch.

**SLA sửa lỗi** (FoodNow): Critical ≤ 1 ngày làm việc; High ≤ 3 ngày; Medium: sprint sau; Low: backlog.

**Triage**: họp ngắn hằng ngày trong UAT (10:00, 20 phút) — QA chủ trì, Tech Lead, PO; xác nhận severity/priority, gán người, đánh dấu "chặn Go/No-Go", đóng trùng.

**Defect burn-down**: số defect mở theo ngày và theo severity. Nếu Critical/High không giảm 3 ngày liền, leo thang. FoodNow UAT vòng 1: **47 defect** (3 Critical, 9 High, 22 Medium, 13 Low); vòng 2 (16/09): 0 Critical, 0 High, 4 Medium và 9 Low còn mở.

📎 Mẫu đầy đủ: `templates/quality/defect-triage-rules.md`

## 37.4 Regression và bug bash

- **Regression**: mỗi bản sửa lỗi phải chạy regression liên quan; rc mới chạy toàn bộ. Sửa lỗi Critical mà không regression là cách tạo lỗi mới.
- **Bug bash**: 1–2 giờ cả đội và người dùng thử nghiệm cùng "phá" hệ thống; phù hợp trước rc.2 hoặc trước go-live để tìm lỗi lọt.
- **Đóng băng thay đổi** khi UAT: chỉ sửa lỗi; thay đổi tính năng vào backlog sau.

## 37.5 Tiêu chí Go/No-Go và sign-off

**Go/No-Go** là quyết định cuối trước phát hành. Tiêu chí **ký từ giai đoạn kế hoạch** (Ch13, Ch15), đo bằng số; chia **bắt buộc** (Critical = 0, High = 0, sign-off, hiệu năng, bảo mật, thanh toán, cutover/rollback đã diễn tập) và **nên có** (đào tạo, tuân thủ). Quy tắc quyết định:

- **Go**: mọi tiêu chí bắt buộc đạt.
- **Go có điều kiện**: chỉ khi tiêu chí không bắt buộc còn thiếu và có kế hoạch, ký bởi Sponsor và QA Lead.
- **No-Go**: ≥ 1 tiêu chí bắt buộc không đạt → nêu điều kiện quay lại và ngày họp lại.

**Ai quyết**: Sponsor; **ai khuyến nghị**: PM, Tech Lead, QA Lead; **QA Lead có quyền phản đối bằng văn bản**.

**Sign-off UAT**: xác nhận bằng chữ ký/email của Product, CS, QA và Sponsor. **Sign-off có điều kiện** cho phép defect Medium/Low còn lại với kế hoạch sửa; ghi rõ danh sách và hạn. Tránh sign-off "cho xong" mà không nêu điều kiện.

📎 Mẫu đầy đủ: `templates/quality/go-no-go-checklist.md`

Xem thêm sách *IT Business Analyst — Từ Zero Đến Thành Thạo* (chương về UAT và sign-off) để hiểu vai trò BA trong chuẩn bị kịch bản và tiêu chí chấp nhận.

## Đi sâu: thiết kế kịch bản UAT và quản lý vòng lặp sửa lỗi

### Viết kịch bản UAT theo luồng nghiệp vụ

Kịch bản tốt gồm: **mã**, **vai trò**, **điều kiện đầu**, **các bước**, **kết quả mong đợi**, **dữ liệu**, **mức ưu tiên**. Ví dụ một kịch bản của FoodNow:

| Trường | Nội dung |
|---|---|
| Mã | UAT-RF-04 |
| Vai trò | Nhà hàng + CS |
| Điều kiện đầu | Đơn đã thanh toán thẻ, nhà hàng huỷ vì hết món |
| Các bước | Nhà hàng chọn "Huỷ — hết món" → hệ thống thông báo khách → CS mở đơn ở Admin → xác nhận hoàn tiền |
| Kết quả mong đợi | Khách nhận thông báo; hoàn tiền được tạo; số liệu đối soát khớp |
| Ưu tiên | Cao (luồng tiền) |

Nhóm kịch bản theo **luồng** (đặt đơn → giao → thanh toán → hoàn tiền) hơn là theo màn hình, và dành phần lớn cho luồng có tiền hoặc dữ liệu cá nhân.

### Vòng lặp sửa lỗi: giữ nhịp

Quy tắc vận hành UAT vòng 1 của FoodNow: **triage 10:00 hằng ngày**; Critical sửa trong 1 ngày làm việc; **gom bản sửa** thành build hằng ngày lên UAT lúc 17:00 (không sửa "nóng" từng lỗi để tránh khó kiểm soát); người dùng retest sáng hôm sau. Cách này giữ dòng chảy ổn định và cho người dùng thử nghiệm biết khi nào có bản mới.

### Khi người dùng UAT không đủ hoặc không nhiệt tình

Bốn biện pháp: (1) đặt lịch trước với người phụ trách của họ; (2) chia nhỏ phiên (60–90 phút) thay vì cả ngày; (3) trực tại chỗ hỗ trợ; (4) ghi nhận đóng góp (cảm ơn cá nhân, phản hồi kết quả họ tìm được). Nếu vẫn thiếu, giảm phạm vi UAT theo rủi ro và ghi rõ phần chưa được kiểm chứng vào tiêu chí Go/No-Go.

### Đọc số liệu UAT

Ba số nên xem hằng ngày: *số kịch bản đã chạy/tổng*; *defect mở theo severity*; *tỷ lệ defect mới/ngày* — nếu tỷ lệ này không giảm sau tuần thứ hai, chất lượng nền còn thấp và một vòng UAT nữa là chắc chắn cần. FoodNow: vòng 1 tuần 1 phát hiện 26 defect, tuần 4 chỉ 3 — đường cong đúng kỳ vọng.

## Tình huống FoodNow

UAT vòng 1 chạy từ 27/07 đến 21/08 trên `v1.0.0-rc.1` với 60 kịch bản, 3 nhà hàng, 10 tài xế, 12 khách thử và đội CS của anh Huy. Sau bốn tuần: **47 defect**, gồm **3 Critical** (một lỗi trừ tiền nhưng không tạo đơn, một lỗi mất kết nối khiến tài xế nhận trùng chuyến, một lỗi đối soát lệch), **9 High**, 22 Medium, 13 Low. Cutover chưa diễn tập; sign-off chưa có; pentest còn một lỗ hổng High.

Thứ Sáu 21/08, Go/No-Go lần 1. Hà mở checklist đã ký từ 09/03: mục 1 (Critical = 0) và 2 (High = 0) đỏ. Anh Bảo hỏi: "Có thể Go có điều kiện với ba Critical đã có kế hoạch sửa không? Chiến dịch marketing đã lên kế hoạch." Nam đưa ý kiến phản đối bằng văn bản: "Lỗi trừ tiền không tạo đơn là loại không thể chấp nhận." Hà trình bày: "Tiêu chí này anh đã ký từ tháng 3. Nếu đổi bây giờ, em chỉ có thể báo rủi ro mất tiền của khách. Em đề xuất **No-Go**, sửa 12 defect, rc.2 ngày 04/09, diễn tập cutover, UAT vòng 2 rồi họp lại 16/09; go-live vẫn giữ 03/10." Anh Bảo chần chừ, rồi nói: "Được, tôi không muốn mất mặt vì lỗi thanh toán." Kết quả: **No-Go** lần 1 (DL-016).

Vòng sửa: 24/08–04/09 (Critical trong 1 ngày, High trong 3 ngày theo SLA); `v1.0.0-rc.2` ngày 04/09; bug bash 1 giờ trước rc.2 tìm thêm 2 Medium; UAT vòng 2 07–16/09. Ngày **16/09**, 0 Critical, 0 High; Châu và Huy ký; cutover diễn tập 24 phút; đào tạo ≥ 90%. **Go** (DL-017). Nhờ tiêu chí định lượng đã ký từ sớm, quyết định No-Go không phải cuộc chiến ý kiến — chỉ là đọc bảng.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Ra quyết định Go/No-Go từ bảng dữ liệu.** Dữ liệu cho một hệ thống đặt lịch khám: Critical 0; High 2 (một ở đặt lịch, một ở thông báo SMS); Medium 14; sign-off Product ✔, CS ✘ (chưa xem xét); hiệu năng đạt; pentest đạt; cutover diễn tập chưa; đào tạo 95%; Sponsor muốn go-live tuần sau. Tiêu chí bắt buộc đã ký: Critical = 0; High = 0; sign-off Product và CS; hiệu năng; pentest; cutover diễn tập. Ra quyết định (Go/Go có điều kiện/No-Go), nêu điều kiện quay lại và soạn 3 dòng thông báo cho Sponsor.

**Bài 2 (làm ra sản phẩm).** Lập kế hoạch UAT 1 trang cho dự án của bạn: người test, 10 kịch bản mẫu, lịch, tiêu chí vào/ra, SLA defect.

**Bài 3 (tình huống ngắn).** Ngày 2 của UAT, người dùng phản hồi: "Luồng huỷ đơn không hợp quy trình thực tế của chúng tôi" — nhưng luồng đó đúng đặc tả đã ký. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** Bắt buộc còn thiếu: High = 0 (đang 2), sign-off CS (chưa), cutover diễn tập (chưa). → **No-Go**. Điều kiện quay lại: sửa 2 High (SLA 3 ngày làm việc), CS review và ký (2 ngày), diễn tập cutover (1 ngày), rồi họp lại (khoảng 5–6 ngày làm việc). Thông báo: "Chưa đủ điều kiện Go tuần sau vì còn 2 High, chưa sign-off CS và chưa diễn tập cutover. Nếu hoàn tất trong 6 ngày làm việc, mình có thể họp lại ngày [X] và go-live sau đó vài ngày. Em sẽ báo tiến độ hằng ngày."

**Bài 3:** Chẩn đoán: đặc tả đúng nhưng chưa phản ánh thực tế → là yêu cầu thay đổi (change request) hoặc phát hiện thiếu sót. Phương án A: nếu nhỏ, PO duyệt thay đổi trong epic và ghi CR nhẹ; B: nếu lớn, CR chính thức (đánh giá tác động), có thể dời sang bản sau kèm workaround; C: ghi vào backlog UAT "cải tiến" và xin sign-off có điều kiện. Khuyến nghị: xác nhận với PO, phân loại defect hay CR, không sửa "ngay" mà không đánh giá. Lời nói mẫu: "Cảm ơn phản hồi. Luồng này đúng đặc tả nhưng chưa hợp quy trình; em ghi nhận và cùng chị Châu đánh giá tác động trong ngày." Sai lầm: nói "đúng đặc tả rồi" và bỏ qua; hoặc sửa gấp phá freeze.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Bắt đầu UAT khi chưa smoke test. → **Hậu quả:** người dùng gặp lỗi cơ bản, mất niềm tin. **Cách khắc phục:** tiêu chí vào UAT; QA smoke trước.
2. **Sai lầm:** Người test chỉ là nội bộ. → **Hậu quả:** UAT không phát hiện vấn đề quy trình thật. **Cách khắc phục:** mời nhà hàng, tài xế, CS thật.
3. **Sai lầm:** Nhầm severity với priority. → **Hậu quả:** sửa sai thứ tự. **Cách khắc phục:** QA định severity, PO định priority.
4. **Sai lầm:** Sửa lỗi Critical mà không regression. → **Hậu quả:** tạo lỗi mới. **Cách khắc phục:** regression cho mỗi bản sửa.
5. **Sai lầm:** Đặt tiêu chí Go/No-Go lúc quyết định. → **Hậu quả:** cuộc chiến ý kiến, áp lực chính trị. **Cách khắc phục:** ký từ giai đoạn kế hoạch, đo bằng số.
6. **Sai lầm:** Sign-off "cho xong". → **Hậu quả:** tranh cãi sau go-live. **Cách khắc phục:** sign-off có điều kiện, liệt kê defect còn lại và hạn.

## Tóm tắt & tiếp theo

- QA kiểm tra "làm đúng cách", UAT kiểm tra "làm đúng việc"; PM hỏi đúng ở từng cấp.
- Kế hoạch UAT: người dùng thật, kịch bản theo luồng, môi trường/dữ liệu, lịch, tiêu chí vào/ra/tạm dừng.
- Severity khác priority; SLA và triage hằng ngày; defect burn-down; regression và bug bash.
- Go/No-Go theo tiêu chí bắt buộc ký từ sớm; QA Lead có quyền phản đối; sign-off có điều kiện.

Chương 38 kết thúc Phần 6 với **xử lý sự cố, leo thang và quản trị khủng hoảng**.
