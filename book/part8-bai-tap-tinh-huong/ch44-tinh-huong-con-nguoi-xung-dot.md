# Chương 44: Tình huống về con người & xung đột

## Mục tiêu học

- Chẩn đoán nguyên nhân gốc của xung đột và hành vi khó (không chỉ triệu chứng).
- Dùng SBI, 1-1, họp ba bên, ranh giới hành vi và giảm tải để xử lý tình huống con người.
- Nhận biết dấu hiệu kiệt sức, chính trị nội bộ và cách một PM mới xây uy tín.

**Cách dùng:** tự viết đáp án trước rồi mở phần tham khảo; có ít nhất hai hướng hợp lệ mỗi tình huống.

---

### Tình huống 44.1 — Senior Dev từ chối làm theo quy trình
**Giai đoạn:** Thực thi (tuần 19) · **Độ khó:** ★★☆ · **Kỹ năng:** ranh giới hành vi, SBI · **Chương liên quan:** Ch27, Ch31

**Bối cảnh:** Thứ Ba 12/05/2026. Backend 2 (senior, giỏi) liên tục nộp PR trên 900 dòng, không viết test, và nói với người review: "Tôi biết code của tôi đúng, mấy quy định này chậm." Hai PR gần nhất khiến Nam mất 2 ngày test. Người trẻ (Quỳnh) bắt đầu làm theo: "anh ấy cũng thế mà".

**Dữ kiện:** Working Agreement (PR < 400 dòng, test bắt buộc) do cả đội ký; chất lượng code thực sự tốt; Backend 2 đang gánh module quan trọng sau khi Sơn nghỉ; Dũng ngại "đụng" vì cần anh ấy.
**Nhiễu:** Backend 2 sắp có offer từ nơi khác (nghe đồn).

**Câu hỏi:** (1) Bạn làm gì trong 48 giờ? (2) Bạn nói gì với Backend 2? (3) Với Dũng?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** "ngôi sao kiêu" + thiếu ranh giới; hành vi ảnh hưởng người trẻ (hiệu ứng lan). Có thể còn nguyên nhân: quá tải và áp lực sau khi Sơn nghỉ.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. SBI riêng + đặt kỳ vọng cụ thể (PR ≤ 400 dòng có test trong 2 tuần) | Trực tiếp, tôn trọng | Có thể bị phản ứng |
| B. Giao vai **mentor** cho code review của người trẻ và đo hành vi | Chuyển năng lượng | Cần thời gian |
| C. Bỏ qua vì cần người này | Không xung đột | Văn hoá xấu, người trẻ học theo |
| D. Leo thang lên quản lý trực tiếp | Có hậu thuẫn | Có thể quá sớm |

**Khuyến nghị: A + B**, D nếu không cải thiện sau 2 tuần.

**Lời nói mẫu:** "Trong review hôm thứ Hai, PR giỏ hàng có 1.100 dòng và chưa có test; Nam mất 2 ngày kiểm thử. Em lo Sprint Goal chịu rủi ro và Quỳnh bắt đầu làm giống. Anh chia PR nhỏ hơn giúp em không? Đổi lại em sẽ giảm cho anh việc họp và nhờ Dũng ưu tiên review PR của anh trong 4 giờ." **Dũng:** "Em cần anh cùng em giữ Working Agreement; nếu tụi mình ngại, người trẻ sẽ hiểu quy tắc là tuỳ người."

**Tài liệu:** ghi chú 1-1; Working Agreement (không đổi); RAID (rủi ro giữ nhân sự); theo dõi số liệu PR (kích thước, thời gian review).

**Sai lầm:** nói trước cả đội; im lặng; áp dụng kỷ luật với người trẻ mà bỏ qua người senior.

**Phòng ngừa:** quy tắc áp dụng cho mọi người; công cụ giới hạn PR; ghi nhận khi người senior làm mẫu.
</details>

---

### Tình huống 44.2 — Hai lead cãi nhau về release
**Giai đoạn:** Phát hành (tuần 29) · **Độ khó:** ★★☆ · **Kỹ năng:** hoà giải, dữ liệu chung · **Chương liên quan:** Ch27, Ch32, Ch37

**Bối cảnh:** Thứ Sáu 24/07/2026, ngày cắt `release/1.0.0`. Dũng muốn tag rc.1 hôm nay để UAT bắt đầu 27/07 ("bug còn lại nhỏ"). Nam từ chối: "Còn 2 Critical đã biết ở luồng đối soát; đưa rc lên UAT là lãng phí người dùng thử nghiệm." Cả hai nâng giọng trước đội.

**Dữ kiện:** tiêu chí vào UAT: không Critical đã biết; UAT lịch với 25 người dùng đã đặt; hai Critical sửa được trong 1 ngày theo SLA nhưng chưa chắc đủ test.
**Nhiễu:** Sponsor nhắn "hôm nay chốt được không?"

**Câu hỏi:** (1) Bạn làm gì ngay trong buổi họp? (2) Bạn quyết định dựa trên gì? (3) Bạn hàn gắn hai người thế nào?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** cả hai bảo vệ mục tiêu thật (lịch vs chất lượng); tiêu chí đã ký cho thấy đáp án. Xung đột leo thang vì diễn ra trước đội.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Tạm dừng họp, dùng **tiêu chí vào UAT đã ký**: chưa đạt → rc.1 chưa lên; sửa 2 Critical, tag thứ Hai sáng | Khách quan | Dời 1 ngày UAT |
| B. Tag rc.1 với danh sách Critical đã biết, UAT các luồng khác trước | Giữ lịch | Trái tiêu chí; rủi ro |
| C. Cho Sponsor quyết | Nhanh | Đẩy trách nhiệm |

**Khuyến nghị: A** (có thể kết hợp B nếu Nam ký "có điều kiện" bằng văn bản). Lý do: tiêu chí đã thống nhất; QA Lead có quyền chặn cổng.

**Lời nói mẫu (tại chỗ):** "Mình dừng 5 phút. Tiêu chí vào UAT mình đã ký: không Critical đã biết. Hai Critical còn mở nên rc.1 chưa lên. Anh Dũng, anh xử lý hai lỗi trong hôm nay; anh Nam kiểm thử chiều mai; nếu đạt, mình tag rc.1 thứ Hai 09:00 — UAT lùi 1 ngày. Em báo anh Bảo." Sau họp gặp riêng từng người, rồi họp ba bên 20 phút: nhắc mục tiêu chung là "UAT không lãng phí người dùng".

**Tài liệu:** Release calendar (rc.1 27/07 09:00), Decision Log, báo cáo tuần, RAID.

**Sai lầm:** chọn phe; để cãi trước đội; quyết theo áp lực Sponsor.

**Phòng ngừa:** tiêu chí vào/ra viết sẵn; quyền chặn cổng rõ; họp "release readiness" ngày trước.
</details>

---

### Tình huống 44.3 — Thành viên hiệu suất kém
**Giai đoạn:** Thực thi (tuần 17) · **Độ khó:** ★★☆ · **Kỹ năng:** chẩn đoán, phản hồi, kế hoạch cải thiện · **Chương liên quan:** Ch27

**Bối cảnh:** Thứ Hai 27/04/2026 (nghỉ bù; họp ngày 28/04). Một QA (thành viên vào từ tuần 2) hoàn thành khoảng 50% khối lượng test được giao trong ba sprint liền; bug lọt lưới tăng. Nam nói: "Em ấy chậm, nên thay." QA nói với Hà: "Em không được ai hướng dẫn rõ."

**Dữ kiện:** chưa từng có đào tạo regression; test case dùng file chung khó tìm; QA đang ngồi cạnh Nam.
**Nhiễu:** Nam đang rất áp lực vì lịch.

**Câu hỏi:** (1) Bạn chẩn đoán thế nào? (2) Bạn nói gì với QA và với Nam? (3) Kế hoạch 4 tuần?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** có thể là **thiếu kỹ năng/hướng dẫn** hơn là thiếu động lực; cần dữ liệu hai phía (test case, bug lọt lưới) và 1-1.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Kế hoạch cải thiện 4 tuần: mục tiêu cụ thể, buddy, đào tạo regression | Công bằng, có căn cứ | Tốn thời gian của Nam |
| B. Đổi vai sang nhiệm vụ phù hợp (ví dụ chuẩn bị dữ liệu UAT) | Tận dụng | Thiếu người test |
| C. Thay người ngay | Nhanh | Mất công học lại, chưa chắc giải quyết |

**Khuyến nghị: A, B nếu không tiến bộ sau 2 tuần**, và C chỉ khi thất bại sau 4 tuần với ghi chép.

**Lời nói mẫu (QA):** "Trong ba sprint qua, khối lượng test hoàn thành khoảng 50% và có 5 bug lọt lưới. Em muốn biết bạn cần gì để làm tốt hơn: đào tạo, tài liệu hay hướng dẫn? Mình đặt mục tiêu 4 tuần: 80% khối lượng, buddy là Nam 2 buổi/tuần." **Nam:** "Anh giúp em 1 giờ/tuần để hướng dẫn; em sẽ giảm việc họp cho anh để bù thời gian."

**Tài liệu:** ghi chú 1-1 và kế hoạch cải thiện (chia sẻ với QA); phối hợp quản lý trực tiếp/HR; Resource Plan.

**Sai lầm:** kết luận chậm ngay; nói với người khác trước; cho thay người mà không cho cơ hội.

**Phòng ngừa:** onboarding có mục tiêu 30/60/90 ngày; test case ở hệ thống có tìm kiếm; phản hồi sớm.
</details>

---

### Tình huống 44.4 — Đội kiệt sức vì làm thêm giờ
**Giai đoạn:** Sửa lỗi sau No-Go (tuần 35) · **Độ khó:** ★★★ · **Kỹ năng:** bảo vệ đội, cân bằng lịch/sức khoẻ · **Chương liên quan:** Ch27, Ch38

**Bối cảnh:** Thứ Ba 01/09/2026, ngày thứ 8 liên tiếp đội làm đến 21:00 để sửa lỗi Critical/High trước rc.2 (04/09). Hai người báo ốm, một người tuyên bố "em xin nghỉ ngày mai". Anh Bảo nhắn: "Đội cố thêm vài hôm nhé, sát ngày rồi."

**Dữ kiện:** còn 9 lỗi High; rc.2 cần sẵn sàng thứ Sáu; Working Agreement: OT ngoại lệ ≤ 2 tuần liền.
**Nhiễu:** Dũng nói "mình gồng được".

**Câu hỏi:** (1) Bạn làm gì hôm nay? (2) Bạn nói gì với Sponsor? (3) Kế hoạch sau đợt này?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** lỗi nghiêm trọng do làm việc trong áp lực, tăng ca kéo dài làm tăng lỗi; hai người có dấu hiệu burnout. Đợt OT đã sắp chạm ngưỡng 2 tuần.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Ưu tiên lại: chỉ sửa Critical + High bắt buộc; dời Medium; nghỉ luân phiên; giới hạn 19:00 | Bảo vệ sức người, giữ chất lượng | Có thể cần dời rc.2 nửa ngày |
| B. Tiếp tục OT | Giữ mốc | Rủi ro lỗi và nghỉ việc |
| C. Thêm người hỗ trợ tạm (từ bench) | Giảm tải | Học việc |

**Khuyến nghị: A + C**, thông báo dời rc.2 nếu cần (04/09 chiều thay vì sáng). **Lời nói mẫu (Sponsor):** "Đội đã làm đến 21:00 tám ngày liền; nếu ép thêm, rủi ro lỗi và nghỉ việc cao và có thể phải sửa lại mất nhiều hơn. Em đề xuất chỉ sửa các lỗi bắt buộc, cho đội nghỉ luân phiên và dời rc.2 nửa ngày; go-live vẫn giữ." **Đội:** "Từ hôm nay 19:00 là giờ về; ai mệt cứ nghỉ; hai lỗi khó nhất em chia lại cho người khỏe."

**Tài liệu:** Working Agreement (ngoại lệ OT ghi lại và bù nghỉ), kế hoạch (rc.2), RAID (rủi ro nhân sự), báo cáo tuần.

**Sai lầm:** khen "tinh thần" để ép thêm; phớt lờ người báo ốm; không bù nghỉ.

**Phòng ngừa:** giới hạn OT; capacity thực; cắt phạm vi sớm; theo dõi năng lượng ở 1-1.
</details>

---

### Tình huống 44.5 — Stakeholder chính trị, phá đám
**Giai đoạn:** Chuẩn bị go-live (tuần 36) · **Độ khó:** ★★★ · **Kỹ năng:** bản đồ ảnh hưởng, xử lý chính trị · **Chương liên quan:** Ch06, Ch27, Ch36

**Bối cảnh:** Thứ Ba 08/09/2026. Trưởng nhóm Vận hành của FoodNow (không thuộc dự án) nói với Sponsor rằng "hệ thống chưa sẵn sàng, đội BrightSoft che giấu lỗi", và đề nghị dời go-live sang tháng 11. Anh ta muốn giữ quy trình cũ trên app bên thứ ba vì đội anh ta sẽ mất quyền kiểm soát.

**Dữ kiện:** anh ta không có mặt ở UAT; anh Bảo bắt đầu nghi ngờ; Go/No-Go lần 2 là 16/09.
**Nhiễu:** anh ta là bạn lâu năm của Sponsor.

**Câu hỏi:** (1) Bạn làm gì trong 24 giờ? (2) Bạn xử lý quan hệ với anh ta thế nào? (3) Bạn báo Sponsor ra sao?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** stakeholder "ẩn/phản đối" có lợi ích riêng (mất quyền kiểm soát); cần chuyển từ chống đối sang tham gia bằng dữ liệu.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Mời anh ta vào review Go/No-Go, xem báo cáo UAT và tham gia kịch bản vận hành | Minh bạch, chuyển thành đồng minh | Tốn thời gian |
| B. Trình dữ liệu cho Sponsor và để Sponsor xử lý | Nhanh | Không giải quyết quan hệ |
| C. Đối đầu | — | Nguy hiểm |

**Khuyến nghị: A + B.** **Lời nói mẫu (anh ta):** "Em muốn đảm bảo anh yên tâm; em mời anh xem báo cáo UAT và dự Go/No-Go 16/09. Nếu anh thấy điểm nào chưa ổn, em ghi vào tiêu chí." **Sponsor:** "Em nghe anh A lo lắng; em đề nghị anh A xem trực tiếp dữ liệu UAT (47 defect ban đầu, hiện 0 Critical/High), và tham gia họp Go/No-Go. Mọi quyết định theo tiêu chí đã ký."

**Tài liệu:** Stakeholder Register (thêm/đổi chiến lược: Quản lý chặt), RAID (rủi ro chính trị), truyền thông.

**Sai lầm:** phản ứng phòng thủ; nói xấu; phớt lờ.

**Phòng ngừa:** rà stakeholder ở mỗi mốc; mời sớm người bị ảnh hưởng; minh bạch số liệu.
</details>

---

### Tình huống 44.6 — PM mới bị đội "test"
**Giai đoạn:** R2 chuẩn bị (2027) · **Độ khó:** ★★☆ · **Kỹ năng:** xây uy tín, lắng nghe · **Chương liên quan:** Ch02, Ch27

**Bối cảnh:** Bạn là PM mới nhận đội Backend+Web đang chạy R1 từ Hà (chuyển sang Delivery Manager). Sau hai tuần, Tech Lead nói "PM mới không hiểu kỹ thuật"; một Dev không nộp báo cáo tuần của mình; trong họp, đội im lặng khi bạn hỏi. Có người nhắn riêng: "Họ đang xem chị chịu được bao lâu."

**Dữ kiện:** bạn có 6 năm kinh nghiệm nhưng chưa từng làm sản phẩm giao đồ ăn; Hà vẫn có mặt và uy tín cao; đội đang ổn định.
**Nhiễu:** Hà đề nghị "để chị can thiệp cho".

**Câu hỏi:** (1) Bạn làm gì trong 2 tuần đầu? (2) Bạn nói gì với Tech Lead? (3) Bạn dùng Hà thế nào?

<details>
<summary>Phân tích & đáp án tham khảo</summary>

**Chẩn đoán:** giai đoạn forming/storming khi đổi lãnh đạo; đội thử ranh giới và tính nhất quán.

| Phương án | Ưu | Nhược |
|---|---|---|
| A. Nghe nhiều hơn nói: 1-1 với từng người, hỏi "điều gì đang cản bạn", làm một việc gỡ vướng cụ thể trong tuần | Xây uy tín bằng hành động | Chậm |
| B. Nhờ Hà can thiệp | Nhanh | Làm yếu vị thế |
| C. Ép bằng quy định | Rõ ràng | Kháng cự tăng |

**Khuyến nghị: A**, dùng Hà làm **cố vấn** (không làm người chỉ huy). **Lời nói mẫu (Tech Lead):** "Anh nói đúng là em chưa hiểu sâu kỹ thuật; em cần anh giúp em hiểu. Em sẽ không quyết giải pháp; em sẽ lo lịch, phụ thuộc và gỡ blocker. Anh cho em biết ba điều đang cản đội nhất?" **Hà:** "Chị giúp em bằng cách giới thiệu ngữ cảnh và ủng hộ em ở những quyết định lớn, nhưng để em tự xử lý vấn đề hằng ngày."

**Tài liệu:** kế hoạch 30 ngày, ghi chú 1-1, Working Agreement (xác nhận lại).

**Sai lầm:** thể hiện quyền lực; can thiệp kỹ thuật; nhờ sếp cũ can thiệp.

**Phòng ngừa:** giới thiệu bàn giao có ngữ cảnh; kế hoạch 30/60/90; thành công nhỏ sớm.
</details>

---

## Kỹ năng đã luyện

| Tình huống | Kỹ năng | Chương gốc |
|---|---|---|
| 44.1 | Ranh giới hành vi, SBI, mentor | Ch27 |
| 44.2 | Hoà giải bằng tiêu chí đã ký | Ch27, Ch37 |
| 44.3 | Chẩn đoán hiệu suất, kế hoạch cải thiện | Ch27 |
| 44.4 | Bảo vệ đội khỏi burnout | Ch27 |
| 44.5 | Bản đồ ảnh hưởng, chính trị | Ch06, Ch36 |
| 44.6 | Xây uy tín khi nhận đội | Ch02 |

## Ba tình huống mở (tự viết đáp án)

1. **Hai người thân thiết nhưng hiệu suất kéo nhau xuống:** họ nói chuyện riêng nhiều, ảnh hưởng người khác. Bạn làm gì?
2. **Người nói quá nhiều trong họp:** một người chiếm 60% thời gian và làm người khác im lặng. Bạn xử lý thế nào?
3. **Thành viên nói "em muốn chuyển sang PM":** bạn hỗ trợ ra sao mà không làm hỏng dự án?
