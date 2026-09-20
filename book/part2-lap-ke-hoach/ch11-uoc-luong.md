# Chương 11: Ước lượng

## Mục tiêu học

- Phân biệt ước lượng và cam kết; giải thích nón bất định.
- Áp dụng được ba nhóm kỹ thuật (bottom-up, analogous, parametric) và biết khi nào dùng.
- Tính được PERT (kỳ vọng, độ lệch chuẩn) và tổng hợp nhiều task.
- Dùng được Planning Poker, story point, T-shirt và velocity trong Agile.
- Trả lời được "khi nào xong?" bằng khoảng có độ tin cậy và quy đổi công sức sang lịch.

## 11.1 Ước lượng không phải cam kết

**Ước lượng** (estimate) là dự đoán có cơ sở về công sức, thời gian hoặc chi phí, kèm mức bất định. **Cam kết** (commitment) là lời hứa giao kết quả theo một điều kiện. Sai lầm nền tảng của nhiều dự án là **biến ước lượng thành cam kết** khi mới có một câu trả lời mơ hồ.

| | Ước lượng | Cam kết |
|---|---|---|
| Bản chất | Dự đoán có khoảng | Lời hứa |
| Người tạo | Người sẽ làm | Người có quyền (PM, Sponsor) sau khi thương lượng |
| Khi thông tin đổi | Cập nhật | Chỉ đổi qua thương lượng |
| Ví dụ | "Khoảng 35–43 tuần, tin cậy 80%" | "Go-live 03/10/2026 nếu giữ phạm vi X" |

**Nón bất định** (cone of uncertainty): ở giai đoạn đầu, ước lượng có thể lệch rất lớn (nhiều lần), thu hẹp dần khi làm rõ yêu cầu và thiết kế. Nghĩa là **cùng một dự án, ước lượng ở tuần 1 không thể chính xác bằng ở tuần 20**, và khi khách đòi "con số chính xác" từ tuần 1 thì thực chất đòi điều bất khả thi. PM cần nói điều này bằng lời dễ hiểu, kèm kế hoạch thu hẹp khoảng (ví dụ ước lượng lại sau Sprint 0).

## 11.2 Các kỹ thuật ước lượng

| Kỹ thuật | Cách làm | Ưu điểm | Nhược điểm | Khi nào dùng |
|---|---|---|---|---|
| **Analogous** (tương tự) | So với dự án/gói đã xong tương tự | Nhanh, rẻ | Phụ thuộc chất lượng dữ liệu cũ | Giai đoạn đầu, chưa có WBS |
| **Bottom-up** | Ước lượng từng work package rồi cộng | Chi tiết, chính xác hơn | Tốn công, cần WBS | Đã có WBS |
| **Parametric** | Dùng đơn vị (ví dụ ngày công/màn hình, /API) × số lượng | Nhanh và nhất quán | Cần dữ liệu lịch sử | Công việc lặp lại |
| **Expert / Delphi** | Nhiều chuyên gia đưa ý, thảo luận, lặp | Giảm thiên lệch cá nhân | Cần người giỏi | Gói mới, rủi ro |

**Đối chiếu ít nhất hai kỹ thuật** — ví dụ bottom-up 1.927 ngày công đối chiếu với analogous (dự án tương tự trước đây của BrightSoft) để phát hiện lệch quá xa.

### Ba điểm và PERT

Với gói bất định, đừng đưa một con số; đưa **ba**: **O** (lạc quan — mọi thứ suôn sẻ), **M** (khả dĩ nhất), **P** (bi quan — trục trặc nhưng không thảm hoạ). Công thức PERT:

- **Kỳ vọng E = (O + 4M + P) / 6**
- **Độ lệch chuẩn SD = (P − O) / 6**

Ví dụ gói 3.5.3 (Dịch vụ đơn hàng): O = 50, M = 65, P = 95 ngày → E = (50 + 260 + 95)/6 = **67,5**; SD = (95 − 50)/6 = **7,5**.

Với nhiều task độc lập: **tổng E = Σ E**; **SD tổng = √(Σ SD²)** (không cộng thẳng SD). Với 12 gói lớn của FoodNow: Σ M = 750, **Σ E = 772,5**, **SD tổng ≈ 26,3**. Khoảng ~80% (±1,28 SD): **≈ 739–806 ngày công**; khoảng ~95% (±1,96 SD): **≈ 721–824**. Lưu ý: E lớn hơn M vì phân phối lệch phải (rủi ro trễ nhiều hơn sớm). Nếu áp cùng tỷ lệ +3% cho toàn WBS 1.927 ngày, kỳ vọng ≈ **1.985 ngày công** ≈ 89% năng lực đội.

> **Giới hạn của PERT:** giả định các task độc lập và người ước lượng khách quan. Thực tế chúng phụ thuộc lẫn nhau, nên khoảng thực rộng hơn công thức. Hãy coi kết quả là cận dưới của sự bất định.

📎 Mẫu đầy đủ: `templates/estimation/three-point-estimate.csv` (công thức Excel viết sẵn), `templates/estimation/estimation-checklist.md`

## 11.3 Ước lượng trong Agile

Trong Agile, người ta ước lượng **kích thước tương đối** thay vì giờ:

- **Story point**: đơn vị tương đối phản ánh công sức, độ phức tạp và bất định; không quy ra giờ.
- **Planning Poker**: mỗi người chọn một lá bài (thường theo dãy Fibonacci 1, 2, 3, 5, 8, 13…) cùng lúc; lệch nhiều thì người cao/thấp nhất giải thích, rồi bốc lại. Mục đích là **thảo luận**, không phải trung bình.
- **T-shirt sizing** (S/M/L/XL): dùng cho epic, giai đoạn sớm.
- **Velocity**: số point đội hoàn thành mỗi sprint; dùng để **dự báo** số sprint cần: ví dụ backlog còn 240 point, velocity trung bình 30 → khoảng 8 sprint. Velocity chỉ có ý nghĩa với **cùng một đội, cùng cách ước lượng**; không dùng so sánh giữa đội hoặc chấm điểm cá nhân.

Kết nối với Hybrid: WBS (ngày công) dùng cho ngân sách và mốc; story point/velocity dùng để dự báo tiến độ sprint. Cần bảng quy đổi sơ bộ nhưng đừng coi 1 point = 1 số giờ cố định.

## 11.4 Buffer, contingency và hệ số năng suất

- **Buffer** (đệm thời gian) và **contingency** (dự phòng ngân sách) nên đặt ở **cấp dự án**, có tên và quy tắc dùng, thay vì "nhét" vào từng task. Đệm ở từng task bị ăn hết theo **định luật Parkinson** (công việc phình ra vừa hết thời gian cho phép), trong khi đệm chung có thể chia sẻ.
- **Quy đổi công sức → lịch**: một người 100% không có 8 giờ làm việc thực mỗi ngày; họp, review, việc lặt vặt ăn 30–40%. Hệ số năng suất thực **0,6–0,7**. Vì vậy 10 ngày công không bằng 10 ngày lịch của một người; mà bằng khoảng 14–16 ngày lịch nếu người đó có 30–40% thời gian không dành cho task.
- Ở FoodNow, WBS đã dùng năng lực 185 ngày/FTE (đã trừ Tết, lễ, phép) và chỉ xếp 87% để có chỗ cho họp và phát sinh.

## 11.5 Trả lời "khi nào xong?"

Câu hỏi khó nhất của PM. Cách trả lời tốt:

1. **Nói bằng khoảng và độ tin cậy**, không nói một ngày: "Dự kiến tuần 35–43, tin cậy khoảng 80%."
2. **Nêu giả định lớn nhất** (đội đủ người, vendor đúng hạn).
3. **Nêu điều gì làm khoảng thu hẹp và khi nào**: "Sau Sprint 3 và khi PayEasy xác nhận sandbox, em sẽ ước lượng lại và báo khoảng hẹp hơn."
4. **Đưa lựa chọn**: "Nếu anh cần sớm hơn, mình có thể cắt X, Y — mỗi cái tiết kiệm được bao nhiêu."
5. **Không nhượng bộ bằng cách "cố gắng"**. "Cố gắng" không phải phương án; nó là cách chuyển rủi ro sang đội.

## Tình huống FoodNow

Tuần 6 (09–13/02/2026). Anh Bảo gọi họp khẩn: "Đối thủ sắp ra app. Tôi cần MVP trong **6 tháng**, chị Hà làm được không?" Trong khi đó, ước lượng của đội cho MVP đủ ba app là **9 tháng**.

Hà không nói "được" hay "không". Chị chuẩn bị ba con số trong hai ngày. Một: **bottom-up** 1.927 ngày công (kỳ vọng PERT ≈ 1.985), vừa 87–89% năng lực 12 FTE × 185 ngày. Hai: nếu cố nén xuống 6 tháng (khoảng 25 tuần làm việc, sau Tết), năng lực chỉ còn ≈ 12 FTE × 4,74 ngày/tuần × 25 ≈ **1.420 ngày** — thiếu ≈ 560 ngày ngay cả khi đội làm 100% năng lực. Ba: thêm người **không giải quyết được**: kể cả tăng lên 16 FTE, sau khi trừ chi phí phối hợp và thời gian học việc, năng lực hiệu dụng vẫn dưới nhu cầu (Brooks, Ch16).

Chị trình bày cho anh Bảo ba phương án: (A) **6 tháng** nhưng bỏ khoảng 38% phạm vi — thực chất chỉ còn app Khách hàng và Nhà hàng, không có Tài xế và Admin, không đủ vận hành; (B) **9 tháng** giữ phạm vi đầy đủ, ví điện tử để R2; (C) 7,5 tháng với rủi ro cao và không dự phòng. Chị nói: "Em khuyên B. Em không thể cam kết A vì em sẽ phải hứa điều đội không làm được." Anh Bảo hỏi: "Còn nếu tôi cần lấy ví điện tử vào ngay?" Hà đáp: "Ví thêm khoảng 60–70 ngày công và một vendor mới, tức là kéo thêm 2–3 tuần và một rủi ro tích hợp nữa; em đề nghị đẩy sang R2."

Kết quả: anh Bảo chấp nhận **giữ 9 tháng bằng cách chuyển ví điện tử sang R2** (Scope Statement v1.1, 13/02/2026) và đề nghị một buổi **demo chạy thật cho hội đồng quản trị ở tuần 22 (01–05/06/2026)** để có "thứ để cho xem". Hà đồng ý và ghi vào kế hoạch.

## Bài tập

**Bài 1 (làm ra sản phẩm) — PERT.** Tính E và SD cho 5 task, sau đó tính tổng E, SD tổng và khoảng ~80%:

| Task | O | M | P |
|---|---|---|---|
| A. Thiết kế CSDL | 8 | 12 | 22 |
| B. API đăng nhập | 5 | 8 | 14 |
| C. Màn hình danh sách | 6 | 10 | 16 |
| D. Tích hợp thanh toán | 15 | 25 | 50 |
| E. Kiểm thử tích hợp | 10 | 14 | 24 |

**Bài 2 (làm ra sản phẩm).** Dùng `three-point-estimate.csv` làm mẫu, ước lượng 8 gói lớn nhất của dự án của bạn.

**Bài 3 (tình huống ngắn).** Sponsor nói: "Tôi đã hứa với hội đồng: xong sau 4 tháng. Anh chị ước lượng lại để khớp đi." Đội ước lượng 6 tháng. Bạn làm gì trong 24 giờ đầu? Nêu 2 hướng và lời nói mẫu.

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** A: E = (8+48+22)/6 = 13,0; SD = 14/6 = 2,33. B: (5+32+14)/6 = 8,5; SD = 1,5. C: (6+40+16)/6 = 10,33; SD = 1,67. D: (15+100+50)/6 = 27,5; SD = 5,83. E: (10+56+24)/6 = 15,0; SD = 2,33. **Tổng E = 74,33**; Σ SD² = 5,44+2,25+2,78+34,03+5,44 = 49,94 → **SD tổng ≈ 7,07**. Khoảng ~80%: 74,33 ± 1,28×7,07 ≈ **65,3–83,4** ngày công. Nhận xét: task D (thanh toán) chiếm phần lớn bất định — làm spike sớm.

**Bài 3:** Chẩn đoán: cam kết đã đưa ra trước ước lượng (neo). Hướng A: đưa dữ liệu (khoảng, giả định) rồi để Sponsor chọn cắt phạm vi giữ 4 tháng, ghi rõ cắt gì. Hướng B: đàm phán lại với hội đồng, chia phase (phase 1 ở tháng 4 với phạm vi nhỏ). Lời nói mẫu: "Em hiểu anh đã hứa với hội đồng. Với phạm vi hiện tại, đội cần khoảng 5–7 tháng. Để giữ 4 tháng, mình phải cắt các hạng mục X, Y, Z — anh muốn cắt cái nào, hoặc mình đề xuất với hội đồng một bản phase 1?" Sai lầm: ép đội "nghĩ lại" để ra con số nhỏ hơn; đồng ý rồi báo trễ sau.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Trả lời "khi nào xong?" bằng một ngày duy nhất. → **Hậu quả:** ngày đó bị coi như cam kết; khi lệch, mất uy tín. **Cách khắc phục:** trả lời bằng khoảng, độ tin cậy và giả định.
2. **Sai lầm:** PM ước lượng thay đội. → **Hậu quả:** con số không có sở hữu, đội không cam kết. **Cách khắc phục:** người làm ước lượng; PM tổng hợp và thách thức bằng dữ liệu.
3. **Sai lầm:** Bị neo bởi hạn chót của khách. → **Hậu quả:** ước lượng bị bóp cho vừa hạn. **Cách khắc phục:** ước lượng độc lập trước, rồi mới thảo luận đánh đổi.
4. **Sai lầm:** Nhét đệm vào từng task. → **Hậu quả:** đệm bị ăn hết (Parkinson), không ai thấy tổng đệm. **Cách khắc phục:** đệm cấp dự án, tên rõ, quy tắc dùng.
5. **Sai lầm:** Dùng velocity để so sánh đội hoặc đánh giá cá nhân. → **Hậu quả:** đội "thổi" point, dữ liệu vô nghĩa. **Cách khắc phục:** velocity chỉ để dự báo trong một đội.
6. **Sai lầm:** Cộng thẳng SD của các task. → **Hậu quả:** khoảng bất định quá lớn, mất niềm tin vào công cụ. **Cách khắc phục:** SD tổng = √(Σ SD²), và nhớ giới hạn giả định độc lập.

## Tóm tắt & tiếp theo

- Ước lượng là dự đoán có khoảng; cam kết là lời hứa sau thương lượng; nón bất định thu hẹp theo thời gian.
- Dùng ≥ 2 kỹ thuật; PERT: E = (O+4M+P)/6, SD = (P−O)/6, SD tổng = √Σ SD².
- Agile dùng story point, Planning Poker, velocity để dự báo trong một đội.
- Đệm ở cấp dự án; quy đổi công sức sang lịch bằng hệ số 0,6–0,7; trả lời "khi nào xong?" bằng khoảng, giả định và lựa chọn.

Chương 12 biến ước lượng thành **lịch**: quan hệ phụ thuộc, đường găng (critical path) và Gantt.
