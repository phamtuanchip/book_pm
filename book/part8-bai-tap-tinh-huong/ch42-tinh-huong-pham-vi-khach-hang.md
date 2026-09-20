# Chương 42: Tình huống về phạm vi & khách hàng

## Mục tiêu học

- Chẩn đoán vấn đề gốc (không chỉ triệu chứng) trong tình huống phạm vi, yêu cầu và quan hệ khách hàng.
- So sánh ít nhất hai hướng xử lý hợp lệ kèm đánh đổi và chọn có lý do.
- Viết lời nói/email mẫu và xác định tài liệu phải cập nhật (CR, RAID, Scope, báo cáo).

**Cách dùng chương:** đọc phần đề, **tự viết đáp án trước** (24 giờ đầu, lời nói với ai, cập nhật tài liệu nào), rồi mở phần "Phân tích & đáp án tham khảo". Mỗi tình huống có **ít nhất hai hướng hợp lệ**, không phải một đáp án duy nhất. (Các chương tình huống trong sách này được viết gọn hơn mức đề xuất ban đầu để dễ luyện tập.)

---

### Tình huống 42.1 — "Tiện thể" thêm nút chia sẻ
**Giai đoạn dự án:** Thực thi (Sprint 9, tuần 23) · **Độ khó:** ★☆☆ · **Kỹ năng luyện:** phát hiện scope creep, quy trình CR · **Chương liên quan:** Ch07, Ch20

**Bối cảnh:** Thứ Ba 09/06/2026, Hà đọc kênh Slack và thấy anh Bảo nhắn thẳng cho Khoa (Mobile): "Em tiện thể thêm nút chia sẻ đơn lên Zalo giúp anh nhé, chắc vài giờ thôi." Khoa trả lời "OK anh" và đã làm hai ngày. Hà mở backlog: không có story nào; Sprint Goal của Sprint 9 là thông báo và lịch sử đơn.

**Dữ kiện:**
- Khoa ước lượng cuối cùng 6 ngày công (gồm thiết kế, test, tương thích iOS/Android); đã dùng 2 ngày.
- Sprint 9 còn 6 ngày làm việc; velocity dự báo 40 SP, cam kết 40.
- SPI khoảng 0,86; dự phòng còn 86,8 triệu.
- (Gây nhiễu) Anh Bảo đang phấn khởi sau demo HĐQT.

**Câu hỏi:** (1) 24 giờ đầu bạn làm gì? (2) Bạn nói gì với anh Bảo và với Khoa? (3) Tài liệu nào cập nhật? (4) Ngăn lặp lại thế nào?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**1. Chẩn đoán gốc.** Không phải "Khoa làm sai": đó là **kênh yêu cầu không được bảo vệ** (Sponsor nói thẳng với Dev), không có quy tắc "yêu cầu mới phải qua PO/backlog". Hậu quả: 2 ngày công đã đốt, Sprint Goal bị đe doạ.

**2. Phương án.**

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Dừng ngay, đưa vào backlog, PO chấm ưu tiên ở Planning sau | Bảo vệ sprint | Anh Bảo có thể không hài lòng; 2 ngày đã mất |
| B. Hoàn thành (còn 4 ngày) nhưng **hoán đổi** với một story cùng cỡ trong sprint, ghi CR nhỏ | Đáp ứng Sponsor, giữ dung lượng | Mất một story; cần PO đồng ý |
| C. Hoàn thành thêm ngoài dung lượng, tăng ca | Nhanh với Sponsor | Phá Sprint Goal, quá tải; tạo tiền lệ |

**3. Khuyến nghị: B (hoặc A nếu PO không đồng ý hoán đổi).** Lý do: giá trị đã đầu tư 2 ngày, nhưng không thêm mà không đổi.

**4. Lời nói mẫu (với anh Bảo):** "Ý anh rất hay và Khoa đã bắt đầu. Để không phá Sprint Goal, mình cần đổi với một mục cùng cỡ — em đề xuất bỏ 'ghi chú đơn cho nhà hàng' (FN-128) sang sprint sau. Anh đồng ý không? Từ giờ yêu cầu anh gửi cho chị Châu hoặc em, để tụi em đánh giá trong ngày."
**Với Khoa:** "Cảm ơn em đã hỏi và làm cẩn thận. Từ giờ, yêu cầu ngoài sprint em báo lại cho PO/PM trước khi nhận — em không sai, đó là lỗ hổng quy trình của mình."

**5. Tài liệu cập nhật:** ghi CR nhỏ (CR-006) vào Change Log; Sprint Backlog (hoán đổi); RAID (R03 tăng theo dõi); nhắc lại Working Agreement.

**6. Sai lầm điển hình:** mắng Dev; để Dev làm im lặng "cho xong"; từ chối thẳng trước mặt Sponsor.

**7. Phòng ngừa:** Working Agreement: Dev không nhận yêu cầu trực tiếp; Sponsor được cấp kênh nhanh (Slack riêng với PO) để có đường xử lý ≤ 24 giờ.
</details>

---

### Tình huống 42.2 — Yêu cầu mù mờ sát hạn
**Giai đoạn:** Thực thi (tuần 26) · **Độ khó:** ★★☆ · **Kỹ năng:** làm rõ yêu cầu dưới áp lực, phối hợp BA/PO · **Chương liên quan:** Ch07, Ch24

**Bối cảnh:** Thứ Hai 29/06/2026, còn 3 tuần đến feature complete (17/07). Story "Admin: quản lý tranh chấp đơn" (FN-126, 8 SP) mới chỉ có một dòng: "Admin xử lý tranh chấp giữa khách, nhà hàng và tài xế." Lan hỏi Châu nhiều lần chưa có câu trả lời vì Châu bận. Dev Backend 2 nói: "Em không biết nên làm thế nào, cho em ba ngày để đoán".

**Dữ kiện:**
- Kịch bản tranh chấp chưa liệt kê; chưa rõ ai có quyền hoàn tiền và mức hạn.
- Huy (CS) có kinh nghiệm thực tế về tranh chấp nhưng chưa được mời vào refinement.
- Sprint 10 bắt đầu 22/06 (đã chạy 1 tuần); Sprint 11 kết thúc 17/07.
- (Gây nhiễu) Sponsor hỏi mỗi ngày "Admin xong chưa?".

**Câu hỏi:** (1) Bạn làm gì trong 24 giờ? (2) Bạn hỏi ai, hỏi gì? (3) Nếu vẫn thiếu thông tin đến thứ Sáu, bạn làm gì?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** story không đạt Definition of Ready; người có tri thức (Huy) chưa tham gia; PO thiếu thời gian (rủi ro R04 đã ghi). Nếu "đoán", sẽ làm sai và làm lại.

**Phương án:**

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Workshop 60 phút với Huy, Châu, Lan để chốt 5 kịch bản tranh chấp và quyền hoàn tiền | Nhanh, có tri thức thật | Cần sắp lịch trong 24 giờ |
| B. Làm **bản tối giản** (xem đơn + ghi chú + hoàn tiền thủ công bằng đội CS) trong MVP; phần còn lại R1 | Giữ mốc | Giảm giá trị nhẹ |
| C. Để Dev tự đặc tả | Không chờ | Rủi ro làm sai, mất công |

**Khuyến nghị: A + B.** Lý do: làm rõ trước, đồng thời đặt "bản tối giản" làm phương án dự phòng nếu chưa đủ thông tin.

**Lời nói mẫu (với Châu):** "Story này là điểm nghẽn: nếu thứ Tư mình chưa chốt, em đề xuất làm bản tối giản để giữ mốc. Chị cho em 60 phút thứ Ba với anh Huy và chị Lan được không? Em chuẩn bị sẵn 5 kịch bản để chị chỉ cần xác nhận."
**Với Sponsor:** "Admin còn 1 story cần làm rõ; em đã hẹn workshop 60 phút ngày mai. Thứ Sáu em báo anh phương án chốt."

**Tài liệu:** cập nhật story (tiêu chí chấp nhận), RAID (R04 tăng), backlog (chia FN-126 thành 126a: xem và hoàn tiền thủ công; 126b: tự động), báo cáo tuần.

**Sai lầm:** "làm đại" rồi sửa; đẩy trách nhiệm cho PO mà không đề xuất sẵn; chậm báo Sponsor.

**Phòng ngừa:** DoR bắt buộc ≥ 2 sprint story Ready; mời người vận hành vào refinement; PO uỷ quyền quyết định nhỏ cho BA.
</details>

---

### Tình huống 42.3 — Khách đổi ý sau UAT
**Giai đoạn:** UAT (tuần 32) · **Độ khó:** ★★★ · **Kỹ năng:** phân biệt lỗi với thay đổi, đàm phán, CR khẩn · **Chương liên quan:** Ch20, Ch36, Ch37

**Bối cảnh:** Thứ Sáu 14/08/2026, hết UAT vòng 1 tuần 2. Huy báo cáo: "Luồng hoàn tiền khi nhà hàng huỷ đơn thì khách phải chờ 3 ngày, đội CS không chấp nhận; phải hoàn ngay." Đặc tả luồng hoàn tiền đã được Châu ký từ tháng 4 với "hoàn tiền trong 3 ngày làm việc theo đối soát PayEasy". Huy nói: "Đó là sai, không phải thay đổi."

**Dữ kiện:**
- Hoàn ngay cần thay đổi luồng đối soát và thoả thuận với PayEasy; ước lượng 12 ngày công + phụ thuộc vendor.
- Feature freeze đã qua (17/07); còn 2 tuần trước rc.2 (04/09).
- 47 defect đang mở (3 Critical); đội đang căng.
- (Gây nhiễu) Có tin đối thủ hoàn tiền tức thì.

**Câu hỏi:** (1) Đây là defect hay change request? (2) Bạn xử lý thế nào trong 48 giờ? (3) Bạn nói gì với Huy và Bảo?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** Theo đặc tả đã ký, hệ thống **đúng**; đây là **thay đổi yêu cầu** phát sinh khi người vận hành thấy trải nghiệm thật. Nó có giá trị (CS, đối thủ) nhưng đụng phụ thuộc vendor và freeze.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. CR khẩn, làm cho MVP: hoàn ngay | Thoả CS | Rủi ro thanh toán, phá freeze, trễ rc.2 |
| B. Giữ 3 ngày ở MVP; **workaround CS** (hoàn thủ công cho trường hợp huỷ do nhà hàng); hoàn ngay ở R1 | Giữ ngày, an toàn | CS phải làm thủ công 2–3 tháng |
| C. Bản giữa: hoàn ngay chỉ cho trường hợp **nhà hàng huỷ** bằng quy trình nghiệp vụ (không đổi đối soát), phần còn lại R1 | Giải quyết 70% ca | Cần PayEasy đồng ý quy trình |

**Khuyến nghị: B kết hợp khảo sát C** (hỏi PayEasy 24 giờ); quyết định qua CCB. Lý do: Quality thanh toán bất khả nhượng; tiêu chí Go/No-Go đã ký.

**Lời nói mẫu (Huy):** "Em hiểu CS không thể để khách chờ 3 ngày. Đặc tả cũ ghi 3 ngày nên em ghi nhận đây là **thay đổi yêu cầu có giá trị**. Em đánh giá tác động trong 48 giờ; tạm thời mình dùng quy trình hoàn thủ công cho ca nhà hàng huỷ để không ai chờ."
**Bảo:** "Đây không phải lỗi mà là yêu cầu mới rất hợp lý. Làm ngay cho MVP tốn 12 ngày và rủi ro thanh toán; em đề xuất mình chọn B và làm đầy đủ ở R1 — quyết định ở CCB thứ Năm."

**Tài liệu:** CR-006 (Change Log) + Impact Assessment; RAID (phụ thuộc PayEasy mới); backlog R1; quy trình CS (workaround); báo cáo tuần.

**Sai lầm:** cãi "đúng đặc tả rồi"; nhận làm ngay mà không đánh giá; giấu CS.

**Phòng ngừa:** mời CS vào UAT sớm (đã làm từ tuần 4); kịch bản UAT cho luồng tiền; tiêu chí chấp nhận có "trải nghiệm vận hành".
</details>

---

### Tình huống 42.4 — Sponsor đòi giảm giá sau No-Go
**Giai đoạn:** UAT/hợp đồng (tuần 33) · **Độ khó:** ★★☆ · **Kỹ năng:** đàm phán, bảo vệ giá trị, văn bản hoá · **Chương liên quan:** Ch21, Ch36

**Bối cảnh:** Sau Go/No-Go lần 1 (21/08/2026), anh Bảo nói: "Đã trễ và còn lỗi Critical, tôi muốn giảm 10% phí mốc còn lại." Mốc thanh toán còn lại khoảng 35% của giá trị hợp đồng khung (≈ 750 triệu). Hà biết hai trong ba Critical do sai sót của BrightSoft, nhưng cũng có 12 ngày công CR từ phía khách.

**Dữ kiện:** go-live vẫn giữ 03/10 (chưa trễ); Charter ghi ưu tiên Time cố định; hợp đồng có điều khoản nghiệm thu theo tiêu chí và thay đổi tính T&M.

**Câu hỏi:** (1) Bạn xử lý quan hệ và số liệu thế nào? (2) Bạn có nhượng bộ không, bằng cách nào? (3) Bạn báo cáo trong BrightSoft ra sao?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** lập trường "giảm 10%"; lợi ích: **được đền bù cho rủi ro/uy tín** và **kiểm soát chi phí**. Go-live **chưa trễ**; tiêu chí No-Go là để bảo vệ khách.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Từ chối | Bảo vệ biên lợi nhuận | Căng quan hệ |
| B. Nhượng một phần có điều kiện: thưởng/phạt gắn go-live (giảm 3% nếu trễ quá 03/10; không nếu đúng hạn) | Cân bằng, kích thích hoàn thành | Rủi ro nếu trễ |
| C. Thay giảm giá bằng giá trị: thêm bảo hành 2 tháng, hoặc bản tối giản khuyến mãi miễn phí | Giữ giá | Tốn công |
| D. Chấp nhận 10% | Nhanh | Tiền lệ xấu; ảnh hưởng đội |

**Khuyến nghị: B hoặc C**, kèm chốt bằng phụ lục hợp đồng, sau khi hỏi Giám đốc BrightSoft (thẩm quyền).

**Lời nói mẫu:** "Em hiểu anh lo về trễ và lỗi. Thực tế go-live vẫn giữ 03/10 và mình đang sửa lỗi theo SLA. Em đề xuất: nếu mình trễ quá 03/10, phí mốc cuối giảm 3%; nếu đúng hạn thì giữ nguyên, và BrightSoft thêm 2 tháng bảo hành đầu miễn phí. Anh thấy sao?"

**Tài liệu:** email chốt; phụ lục hợp đồng (Giám đốc BrightSoft ký); RAID (rủi ro thương mại); báo cáo tuần; Decision Log.

**Sai lầm:** hứa giảm giá không có thẩm quyền; cãi lại bằng lỗi của khách; để căng thẳng ảnh hưởng đội.

**Phòng ngừa:** điều khoản thưởng/phạt rõ ngay từ hợp đồng; tách CR khỏi giá khung; báo sớm khi có nguy cơ.
</details>

---

### Tình huống 42.5 — Khách không chịu ký nghiệm thu
**Giai đoạn:** Đóng dự án (tuần 44) · **Độ khó:** ★★☆ · **Kỹ năng:** nghiệm thu có điều kiện, leo thang · **Chương liên quan:** Ch40, Ch36

**Bối cảnh:** Thứ Ba 03/11/2026. Trưởng nhóm Marketing FoodNow không chịu để anh Bảo ký biên bản nghiệm thu vì "banner khuyến mãi chưa đúng thiết kế" (banner tĩnh thêm ngày 08/06). Anh Bảo nói: "Chờ Marketing đồng ý đã." Mốc thanh toán cuối 10% (≈ 214 triệu) gắn với nghiệm thu; hypercare đã kết thúc 30/10.

**Dữ kiện:** thiết kế banner do Mai Anh làm, được Châu duyệt ngày 12/06; Marketing chưa có mặt ở UAT; điều khoản hợp đồng: nghiệm thu mặc nhiên sau 10 ngày làm việc kể từ khi nhận biên bản nếu không có phản hồi bằng văn bản.

**Câu hỏi:** (1) Bạn làm gì trong 24 giờ? (2) Bạn xử lý người của Marketing và anh Bảo thế nào? (3) Khi nào bạn nhắc điều khoản mặc nhiên?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** người "phủ quyết" (Marketing) không có trong stakeholder register; góp ý về thiết kế thuộc **cải tiến**, không phải lỗi nghiêm trọng.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Sửa banner ngay theo Marketing (nhỏ) | Nhanh, giữ quan hệ | Có thể mở cửa thêm góp ý |
| B. Nghiệm thu **có điều kiện**: liệt kê góp ý banner như tồn đọng (hạn 10 ngày) | Không chặn thanh toán | Cần Sponsor đồng ý |
| C. Nhắc điều khoản mặc nhiên | Có căn cứ | Có thể làm căng |

**Khuyến nghị: A hoặc B (thường cả hai)**, C là dự phòng cuối. **Lời nói mẫu (Marketing):** "Em muốn banner đúng như ý chị. Chị cho em xem thiết kế chị mong muốn; nếu là chỉnh màu/copy em làm trong 2 ngày và ghi vào tồn đọng để không chặn nghiệm thu chung." **Bảo:** "Em đề xuất anh ký nghiệm thu có điều kiện; góp ý banner được sửa trong 5 ngày và Marketing xác nhận sau."

**Tài liệu:** Stakeholder Register (thêm Marketing), biên bản nghiệm thu (tồn đọng), RAID, Decision Log.

**Sai lầm:** đợi mọi người hài lòng 100%; đe doạ hợp đồng ngay; bỏ qua Marketing.

**Phòng ngừa:** mời Marketing vào review thiết kế; sign-off riêng cho thành phần Marketing; điều khoản nghiệm thu rõ.
</details>

---

### Tình huống 42.6 — Yêu cầu vi phạm quy định
**Giai đoạn:** R1 lập kế hoạch (T53) · **Độ khó:** ★★★ · **Kỹ năng:** tuân thủ, nói "không" có nguyên tắc · **Chương liên quan:** Ch29, Ch36

**Bối cảnh:** Thứ Hai 11/01/2027, Marketing đề xuất cho R1: "Gửi SMS quảng cáo tới **toàn bộ** số điện thoại đã có trong hệ thống, kể cả khách chưa đồng ý nhận quảng cáo, và tự đồng bộ **danh bạ** để mời bạn bè." Anh Bảo ủng hộ vì "đối thủ đang làm".

**Dữ kiện:** app hiện chỉ có đồng ý điều khoản dịch vụ, chưa có đồng ý riêng cho quảng cáo; quy định về bảo vệ dữ liệu cá nhân yêu cầu sự đồng ý và mục đích rõ (cần pháp lý xác nhận); R1 dự kiến Q1/2027.

**Câu hỏi:** (1) Bạn phản hồi thế nào? (2) Bạn giữ mục tiêu của Marketing ra sao? (3) Ai cần tham gia trước khi quyết định?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** mục tiêu (tăng đơn, giới thiệu bạn bè) hợp lệ; **phương tiện** có nguy cơ vi phạm dữ liệu cá nhân, ảnh hưởng uy tín và pháp lý — vượt quyền của PM.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Làm theo yêu cầu | Nhanh | Rủi ro pháp lý, mất khách |
| B. Từ chối và giải thích, đề xuất **thu đồng ý** (opt-in) ở luồng đăng nhập + gửi SMS cho người đã đồng ý; giới thiệu bạn bè qua **mã giới thiệu** thay vì đọc danh bạ | Tuân thủ, đạt mục tiêu dần | Hiệu quả chậm hơn |
| C. Hoãn để pháp lý đánh giá rồi làm | An toàn | Chậm |

**Khuyến nghị: B + C** (nhờ pháp lý xác nhận văn bản hiện hành).

**Lời nói mẫu (Bảo):** "Mục tiêu của Marketing rất đúng và em muốn giúp đạt. Nhưng gửi quảng cáo cho người chưa đồng ý và đọc danh bạ có thể vi phạm quy định về dữ liệu cá nhân, rủi ro bị phạt và mất niềm tin. Em đề xuất: thêm hộp đồng ý nhận quảng cáo, gửi SMS cho người đã đồng ý, và mã giới thiệu thay vì đọc danh bạ. Em xin ý kiến cố vấn pháp lý trong 3 ngày."

**Tài liệu:** RAID (rủi ro pháp lý, R14), backlog R1 (opt-in, mã giới thiệu), CR nếu cần, Decision Log, kế hoạch tuân thủ.

**Sai lầm:** làm rồi xin lỗi sau; tự diễn giải luật; từ chối không đề xuất giải pháp.

**Phòng ngừa:** luồng đồng ý dữ liệu ngay từ MVP; checklist tuân thủ ở mỗi epic; cố vấn pháp lý tham gia refinement khi có dữ liệu cá nhân.
</details>

---

## Kỹ năng đã luyện

| Tình huống | Kỹ năng chính | Chương gốc |
|---|---|---|
| 42.1 | Bảo vệ kênh yêu cầu, CR nhỏ | Ch20 |
| 42.2 | Làm rõ yêu cầu, DoR | Ch07, Ch24 |
| 42.3 | Phân biệt lỗi/thay đổi, CCB | Ch20, Ch37 |
| 42.4 | Đàm phán, thẩm quyền | Ch36 |
| 42.5 | Nghiệm thu có điều kiện | Ch40 |
| 42.6 | Tuân thủ, nói "không" có nguyên tắc | Ch29 |

## Ba tình huống mở (tự viết đáp án)

1. **Phạm vi vô hình:** Khách hàng nói "làm giống app X" mà không có tài liệu. Bạn có 3 tuần trước khi ký hợp đồng. Bạn làm gì?
2. **Sponsor mới:** Sponsor đổi giữa dự án, người mới nói "tôi muốn làm lại phần UI theo phong cách của tôi". Bạn xử lý thế nào?
3. **Yêu cầu từ pháp lý cuối dự án:** Hai tuần trước go-live, đội pháp chế yêu cầu thêm ba điều khoản trong luồng đăng ký. Bạn làm gì?
