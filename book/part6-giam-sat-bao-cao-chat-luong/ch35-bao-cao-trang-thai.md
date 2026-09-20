# Chương 35: Báo cáo trạng thái & dashboard

## Mục tiêu học

- Viết được báo cáo tuần 1 trang đủ sáu phần và báo cáo tháng cho SteerCo.
- Chọn số liệu đáng có cho dashboard và loại bỏ chỉ số "vanity".
- Viết tin xấu theo cấu trúc 5 phần và áp dụng nguyên tắc "không bất ngờ".
- Nhận biết và tránh watermelon status trong báo cáo.

## 35.1 Báo cáo để làm gì

Báo cáo trạng thái không phải để chứng minh bạn bận; nó để **người ra quyết định có thông tin đúng, đủ, đúng lúc** — và để **kéo quyết định cần thiết về phía họ**. Một báo cáo tốt trả lời năm câu: Dự án đang thế nào? Khác kế hoạch ra sao? Sắp có chuyện gì? Bạn cần gì từ tôi? Điều gì đã xong?

Nguyên tắc chung: **ngắn** (1 trang tuần, 1–2 trang tháng), **nhất quán** (cùng định dạng, cùng ngưỡng), **dựa dữ liệu** (số từ hệ thống), **hướng hành động** (quyết định cần lên đầu), **trung thực** (báo cả tin xấu).

## 35.2 Báo cáo tuần 1 trang

Sáu phần:

1. **Tóm tắt & RAG** (3 dòng): tổng thể xanh/vàng/đỏ và lý do.
2. **RAG theo chiều**: lịch, chi phí, phạm vi, chất lượng, rủi ro — mỗi chiều có số liệu.
3. **Thành tựu** tuần này (giá trị, không liệt kê hoạt động).
4. **Kế hoạch tuần sau** (Sprint Goal, việc quan trọng).
5. **Top 3 rủi ro/vấn đề** — mỗi cái có tác động, hành động, người chịu trách nhiệm.
6. **Quyết định cần** từ Sponsor: phương án, khuyến nghị, hạn.

Kèm bảng **chỉ số** ngắn (velocity, bug mở theo mức, dự phòng đã dùng, ngân sách đã chi).

Ba mẹo: (1) đặt "quyết định cần" ở nửa trên; (2) **gửi giờ cố định** (Thứ Sáu 15:00) để Sponsor biết khi nào đọc; (3) báo cáo **không được làm Sponsor bất ngờ** so với cuộc họp tuần.

📎 Mẫu đầy đủ: `templates/status-report/weekly-status-report.md` (tuần 20 FoodNow, SPI 0,82)

## 35.3 Báo cáo tháng cho SteerCo

Ngắn hơn về chi tiết, dài hơn về xu hướng: **tóm tắt điều hành**, **xu hướng SPI/CPI 4 kỳ gần nhất**, **mốc (kế hoạch – dự báo)**, **ngân sách (BAC, AC, EAC, dự phòng đã dùng, trần)**, **top 3 rủi ro**, **quyết định cần SteerCo**, **bài học**. Ban chỉ đạo ra quyết định (Ch28), nên báo cáo phải cho họ **đủ cơ sở** và **phương án**, không phải nhật ký.

📎 Mẫu đầy đủ: `templates/status-report/monthly-steerco-report.md`

## 35.4 Dashboard: số nào đáng có

**Dashboard** là bảng số liệu cập nhật (thường tự động) để Sponsor và đội xem bất kỳ lúc nào. Nguyên tắc chọn: mỗi chỉ số phải **dẫn tới một quyết định** hoặc **cảnh báo rủi ro**.

| Loại | Đáng có | "Vanity" (số đẹp, ít hành động) |
|---|---|---|
| Lịch | SPI, burnup so với phạm vi, mốc (kế hoạch – dự báo) | Số task "đã làm", % hoàn thành tự chấm |
| Chi phí | AC vs PV, CPI, EAC, dự phòng đã dùng | Tổng giờ làm |
| Chất lượng | Bug Critical/High mở, bug leakage, test pass rate | Số test case đã viết |
| Rủi ro | Top 5 rủi ro (Score, trigger), issue quá hạn | Số rủi ro đã ghi |
| Đội | Velocity 3 sprint, tuổi thẻ, tỷ lệ hành động retro xong | Số dòng code, số commit |
| Giá trị | (sau go-live) đơn/ngày, huỷ đơn, thời gian giao | Lượt tải app |

Quy tắc: **tối đa 8–10 số**, mỗi số có ngưỡng và mũi tên xu hướng; dữ liệu từ hệ thống (Jira, Git, CI), không nhập tay; phân biệt dashboard cho **đội** (chi tiết) và cho **Sponsor** (cấp cao).

## 35.5 Viết tin xấu

Tin xấu không đẹp lên bằng thời gian. Cách viết theo 5 phần: **vấn đề** (sự thật, ngắn) → **tác động** (scope/time/cost/quality bằng số) → **phương án** (2–3, đánh đổi) → **khuyến nghị** → **quyết định cần** (ai, trước khi nào).

Ví dụ (rút gọn): "Anh Bảo, PayEasy báo trễ chứng nhận 3 tuần (mới hứa 19/06). Đây là chuỗi đường găng; chờ thì go-live có thể trễ ~3 tuần. Phương án A chờ; B fast-tracking; C B + thuê 2 Dev và 1 QA (≈ 110 triệu dự phòng). Em khuyên C. Em cần anh gọi lãnh đạo PayEasy hôm nay và ghi nhận việc dùng dự phòng."

Tránh: chờ có đủ thông tin mới báo; đổ lỗi; email dài; giấu quyết định cần ở cuối; nói "không sao".

📎 Mẫu đầy đủ: `templates/status-report/bad-news-email-template.md`

### Nguyên tắc "không bất ngờ" (no surprises)

**Sponsor không bao giờ nên nghe tin xấu lần đầu từ người khác hoặc trong cuộc họp công khai.** Mỗi tin xấu đi theo trình tự: **gọi/nhắn trước** → **báo cáo viết** → **họp quyết định**. Đổi lại, Sponsor cho bạn **không gian xử lý**. Tin xấu báo sớm còn phương án; báo muộn chỉ còn hậu quả.

## 35.6 Watermelon status

**Watermelon status** (xanh ngoài, đỏ trong) là khi báo cáo luôn xanh dù thực tế đang đỏ. Nguyên nhân: sợ phản ứng, "hy vọng sẽ tự tốt lên", định nghĩa màu mơ hồ, đội báo "đã làm" thay vì "đã xong". Dấu hiệu nhận biết: báo cáo xanh nhiều tuần rồi đột ngột đỏ; SPI xu hướng giảm nhưng đèn vẫn xanh; đội nói khác báo cáo. Phòng tránh: **ngưỡng bằng số** (Ch34), **dữ liệu hệ thống**, **xu hướng** (không chỉ tuần này), PM **chịu trách nhiệm cá nhân** với đèn tổng, và **văn hoá không phạt tin xấu** (Ch27).

## Tình huống FoodNow

Hà giữ ba báo cáo tuần tiêu biểu cho thấy sự chuyển màu và cách chị xử lý.

**Báo cáo tuần 12 (27/03/2026) — 🟢 Xanh.** SPI 0,95, CPI 1,12; Sprint 3 xong, đội đủ người. Ghi chú: "CPI cao do thiếu 1 Backend đến tuần 4 — đây không phải tiết kiệm." Một dòng tiêu đề chứa quyết định cần nhỏ: đồng ý ngày sandbox PayEasy 27/03.

**Báo cáo tuần 16 (24/04/2026) — 🟡 Vàng.** SPI 0,90; PayEasy báo trễ (20/04), Sơn nghỉ việc (06/04). Báo cáo mở đầu: "Dự án chuyển vàng vì hai chuyện đã xảy ra: nhân sự và vendor. Em đã kích hoạt kế hoạch dự phòng." Kèm bảng phương án như trong mẫu tin xấu. Anh Bảo đọc và không ngạc nhiên vì Hà đã gọi từ 20/04.

**Báo cáo tuần 20 (22/05/2026) — 🔴 Đỏ.** SPI 0,82. Hà chọn đỏ dù CPI 0,96 vì lịch đỏ quyết định đèn tổng (mức xấu nhất). Chị không tô màu; tiêu đề: "Lịch đỏ; go-live chưa bị đe doạ nhờ đường găng; cần quyết định cắt 25 ngày công." Đội một số người lo: "Báo đỏ có bị hiểu là thất bại không?" Hà trả lời: "Đỏ nghĩa là cần quyết định cấp cao, không phải cần đổ lỗi." Anh Bảo phản hồi bằng quyết định trong ngày (DL-015).

Cuối tháng, Hà nhận được tin nhắn từ Giám đốc BrightSoft: "Tôi thích báo cáo của chị vì khi nó đỏ, tôi biết chị đã có phương án." Ba báo cáo xanh → vàng → đỏ không phải ba lần thất bại; chúng là ba lần thông tin đến đúng lúc.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Báo cáo tuần từ dữ liệu.** Cho dữ liệu: dự án web thương mại, tuần 14/26; BAC 900, PV 470, EV 385, AC 410; Sprint vừa xong đạt 80% Sprint Goal; bug mở: 1 Critical, 5 High; vendor thanh toán báo trễ 1 tuần; PO vắng 3 ngày; quyết định cần: cắt 1 tính năng Could. Viết báo cáo tuần 1 trang theo mẫu (tính SPI, CPI, đèn từng chiều, tổng thể).

**Bài 2 (làm ra sản phẩm).** Viết email tin xấu 5 phần cho tình huống: nhân sự chủ chốt nghỉ việc, dự án sẽ trễ 2 tuần.

**Bài 3 (tình huống ngắn).** Đội đề nghị báo cáo xanh "để Sponsor không hoảng" vì SPI 0,87 (vàng) và xu hướng đang giảm. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** SPI = 385 ÷ 470 = **0,82** (đỏ); CPI = 385 ÷ 410 = **0,94** (vàng); EAC = 900 ÷ 0,939 ≈ **958**; chất lượng đỏ (có Critical mở); rủi ro vàng; **tổng thể đỏ**. Báo cáo cần: tóm tắt "Lịch đỏ, chất lượng đỏ (1 Critical mở); go-live cần đánh giá"; hành động cho Critical; quyết định cắt tính năng Could; hành động với vendor. **Bài 3:** Chẩn đoán: watermelon status; đội sợ phản ứng Sponsor. Phương án A: báo vàng theo ngưỡng, kèm xu hướng và kế hoạch, giải thích rằng vàng là cảnh báo sớm để còn phương án; B: báo vàng ngay và họp ngắn 15 phút với Sponsor trước khi gửi. Khuyến nghị A + B. Lời nói mẫu với đội: "Em muốn Sponsor nhận vàng từ mình còn hơn nhận đỏ từ người khác vào tháng sau." Sai lầm: đồng ý báo xanh; điều chỉnh ngưỡng để đẹp.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Báo cáo dài 10 trang. → **Hậu quả:** không ai đọc phần quan trọng. **Cách khắc phục:** 1 trang, quyết định cần ở đầu.
2. **Sai lầm:** Báo cáo hoạt động thay vì kết quả. → **Hậu quả:** Sponsor không biết dự án đến đâu. **Cách khắc phục:** thành tựu theo giá trị, số liệu so baseline.
3. **Sai lầm:** Dashboard đầy vanity metrics. → **Hậu quả:** thấy đẹp mà không hành động. **Cách khắc phục:** mỗi chỉ số dẫn tới quyết định; ≤ 10 số.
4. **Sai lầm:** Chờ đủ thông tin mới báo tin xấu. → **Hậu quả:** Sponsor bất ngờ; mất phương án. **Cách khắc phục:** báo trong 24 giờ với thông tin hiện có.
5. **Sai lầm:** Watermelon status. → **Hậu quả:** mất niềm tin khi vỡ. **Cách khắc phục:** ngưỡng số, xu hướng, dữ liệu hệ thống.
6. **Sai lầm:** Đổ lỗi trong báo cáo. → **Hậu quả:** phá quan hệ vendor/đội. **Cách khắc phục:** nói hành vi/sự thật, không nói lỗi người.

## Tóm tắt & tiếp theo

- Báo cáo tuần 1 trang sáu phần; báo cáo tháng tập trung xu hướng và quyết định.
- Dashboard: ≤ 10 số dẫn tới quyết định; tránh vanity metrics.
- Tin xấu 5 phần: vấn đề – tác động – phương án – khuyến nghị – quyết định cần; nguyên tắc không bất ngờ.
- Tránh watermelon status bằng ngưỡng số, xu hướng và văn hoá nói thật.

Chương 36 nói về **quản lý kỳ vọng và khách hàng khó**.
