# Chương 34: Theo dõi tiến độ: burndown, velocity, EVM

## Mục tiêu học

- Đọc được burndown/burnup và velocity, dùng chúng để dự báo trong Agile.
- Tính được đầy đủ EVM: PV, EV, AC, SV, CV, SPI, CPI, EAC, ETC, VAC, TCPI kèm ví dụ số.
- Chốt ngưỡng đèn xanh/vàng/đỏ và nhận diện "watermelon status".
- Dự báo ngày hoàn thành/chi phí cuối và biết khi nào chỉ số "nói dối".

## 34.1 Vì sao cần đo tiến độ

Tiến độ phần mềm không nhìn thấy bằng mắt. "Xong 90%" là câu nói nguy hiểm nhất của dự án. Đo tiến độ bằng **giá trị đã tạo ra** (story xong theo DoD, work package hoàn tất) chứ không bằng công đã bỏ ra hay cảm giác. Hai họ công cụ: **Agile** (burndown, burnup, velocity, CFD) để điều hành từng sprint/release, và **EVM** (Earned Value Management) để đo tiến độ và chi phí **tổng thể so với baseline** — hợp với Hybrid vì có ngân sách và mốc cố định.

## 34.2 Burndown, burnup và velocity

- **Burndown** (sprint/release): khối lượng còn lại theo thời gian; đường **ideal** (lý tưởng) đi thẳng xuống 0; đường **thực tế** so với nó. Đọc: thực tế nằm trên ideal = chậm; giảm theo bậc thang (cuối sprint mới sập) = story quá lớn/kiểm thử dồn.
- **Burnup**: khối lượng đã xong tăng dần so với **tổng phạm vi** (đường phạm vi có thể dịch chuyển). Ưu điểm hơn burndown: **thấy được phạm vi thay đổi**, không bị che.
- **Velocity**: số story point xong mỗi sprint; dùng **trung bình 3 sprint gần nhất** để dự báo. **Cùng một đội, cùng cách ước lượng** mới so sánh được (Ch11).
- **CFD**: ở Ch25.

Ví dụ velocity FoodNow (điểm hoàn thành mỗi sprint): 22, 23, 30, 34, 36, 32, 31, 34, 38, 40, 41, 39, 35, 32, 30, 28 (Sprint 1–16). Trung bình trượt 3 sprint tăng từ 25 (Sprint 3) lên khoảng 40 (Sprint 11); Sprint 1–2 thấp vì đội mới; Sprint 6–7 giảm do Sơn nghỉ và conflict nhánh (Ch31).

📎 Mẫu đầy đủ: `templates/status-report/burndown-data.csv` (burndown Sprint 7 và velocity 16 sprint, công thức trung bình trượt)

**Dự báo bằng velocity**: nếu backlog release còn 240 SP và velocity trung bình 35 → 240 ÷ 35 ≈ 6,9 sprint; nói **khoảng** (6–8 sprint) chứ không một con số.

## 34.3 EVM: các đại lượng và công thức

**EVM** (giá trị thu được) đo ba thứ trên cùng một thang tiền:

- **PV** (Planned Value): giá trị công việc **lẽ ra đã xong** đến ngày báo cáo (theo baseline lịch và ngân sách);
- **EV** (Earned Value): giá trị công việc **thực sự đã xong** (% hoàn thành × ngân sách gói);
- **AC** (Actual Cost): chi phí **thực tế đã bỏ ra**.

Từ đó:

| Đại lượng | Công thức | Ý nghĩa |
|---|---|---|
| **SV** (Schedule Variance) | EV − PV | Âm = chậm |
| **CV** (Cost Variance) | EV − AC | Âm = vượt chi |
| **SPI** | EV ÷ PV | < 1 = chậm; 0,82 = làm được 82% so với kế hoạch |
| **CPI** | EV ÷ AC | < 1 = đắt hơn dự kiến; 0,96 = mỗi 1 đồng chi tạo 0,96 đồng giá trị |
| **BAC** | Ngân sách baseline tổng | 2.140 triệu (không gồm dự phòng) |
| **EAC** (Estimate at Completion) | BAC ÷ CPI (giả định hiệu quả chi phí hiện tại tiếp diễn) | Dự báo tổng chi phí |
| **ETC** (Estimate to Complete) | EAC − AC | Còn phải chi |
| **VAC** (Variance at Completion) | BAC − EAC | Âm = dự báo vượt |
| **TCPI** (To-Complete Performance Index) | (BAC − EV) ÷ (BAC − AC) | Hiệu quả chi phí cần đạt cho phần còn lại; > 1 = phải làm tốt hơn hiện tại |

Có các biến thể EAC: (a) BAC ÷ CPI (xu hướng tiếp diễn); (b) AC + (BAC − EV) (sai lệch một lần, phần còn lại đúng kế hoạch); (c) AC + (BAC − EV) ÷ (CPI × SPI) (cả hai chỉ số ảnh hưởng). Chọn theo bản chất: nếu nguyên nhân là sự cố một lần, dùng (b); nếu là hệ thống, dùng (a) hoặc (c).

### Ví dụ số nhỏ

BAC = 600; PV = 300; EV = 240; AC = 270. SV = −60; CV = −30; SPI = 0,80; CPI = 0,889; EAC = 600 ÷ 0,889 = **675**; ETC = 675 − 270 = **405**; VAC = 600 − 675 = **−75**; TCPI = (600 − 240) ÷ (600 − 270) = **1,09**. Đọc: đang chậm 20% và đắt hơn 11%; nếu xu hướng tiếp diễn, sẽ vượt 75; để giữ trong BAC, phần còn lại phải làm hiệu quả gấp 1,09 lần hiện tại.

📎 Mẫu đầy đủ: `templates/status-report/evm-calculator.csv` (7 mốc tuần 12–36, công thức)

## 34.4 Đèn xanh, vàng, đỏ

Ngưỡng RAG (Red–Amber–Green) **đặt trước** và nhất quán qua báo cáo (Ch35, Ch47):

| Đèn | SPI hoặc CPI | Ý nghĩa | Hành động |
|---|---|---|---|
| **Xanh** | ≥ 0,95 | Đúng kế hoạch | Tiếp tục theo dõi |
| **Vàng** | 0,85 – < 0,95 | Cảnh báo | Rà nguyên nhân, kế hoạch khắc phục, báo Sponsor |
| **Đỏ** | < 0,85 | Nguy cơ | Kế hoạch phục hồi, quyết định cấp cao |

Đèn tổng hợp lấy **mức xấu nhất** của lịch, chi phí, phạm vi, chất lượng, rủi ro. **Watermelon status** ("dưa hấu": xanh ngoài, đỏ trong) là báo cáo luôn xanh dù thực tế đỏ: do sợ báo tin xấu, do định nghĩa "xanh" mơ hồ, hoặc chỉ báo "đã làm" thay vì "đã xong". Cách tránh: ngưỡng bằng số, dữ liệu từ hệ thống (không tự chấm), PM ký tên vào bản đánh giá và văn hoá không phạt tin xấu (Ch27).

## 34.5 Dự báo ngày hoàn thành

- **Theo SPI**: thời gian dự báo ≈ thời gian kế hoạch ÷ SPI. FoodNow: 39 tuần ÷ 0,82 ≈ **47,6 tuần** — chậm khoảng 8,6 tuần **nếu không làm gì**.
- **Theo velocity**: khối lượng còn lại ÷ velocity (Agile).
- **Theo đường găng**: quan trọng nhất — SPI trung bình toàn dự án có thể che rằng **nhánh găng vẫn đúng hạn** trong khi nhánh có float chậm (hoặc ngược lại). Hãy đọc SPI **cùng đường găng** (Ch12).

## 34.6 Khi chỉ số "nói dối"

- **EV dựa trên % hoàn thành chủ quan**: dùng quy tắc cứng (0/100: xong hay chưa; hoặc mốc 0–50–100).
- **SPI tiến dần về 1 khi dự án gần xong** dù thực tế trễ (vì cả PV và EV đều gần BAC). Dùng **Earned Schedule** hoặc kiểm tra đường găng.
- **Chi phí thấp vì thiếu người** (CPI > 1) — đó không phải tiết kiệm mà là cảnh báo.
- **Việc không có trong baseline** không làm EV tăng (ví dụ làm thêm CR).
- **Baseline bị sửa** để đẹp số — luôn hỏi baseline nào.
- Chỉ số đo **khối lượng**, không đo **giá trị người dùng**; thêm chỉ số chất lượng và giá trị.

## Đi sâu: đọc EVM đúng cách và những cái bẫy

### Ba điều kiện để EVM đáng tin

1. **PV lấy từ baseline đã duyệt**, không phải lịch đang sửa; 2. **EV đo theo quy tắc rõ** (0/100, 50/50 hoặc % theo cột mốc) và áp dụng nhất quán; 3. **AC ghi đủ và đúng kỳ**, kể cả lương nội bộ và chi phí nhà thầu chưa thanh toán. Thiếu một điều thì SPI/CPI chỉ là con số trang trí.

### Chọn quy tắc tính EV

| Quy tắc | Cách tính | Hợp với |
|---|---|---|
| **0/100** | Xong mới tính 100% | Gói ngắn, dễ kiểm |
| **50/50** | Bắt đầu 50%, xong 100% | Gói vừa, ít cần chi tiết |
| **Cột mốc có trọng số** | Tính theo % của từng cột mốc | Gói dài, có bước trung gian |

### Ví dụ đọc T20 của FoodNow

BAC 2.140, PV 962, EV 789, AC 825 (triệu đồng): SV = EV − PV = −173; CV = EV − AC = −36; SPI = 0,82; CPI = 0,96. Chi phí gần khớp kế hoạch nhưng tiến độ chậm ~18%: vấn đề là **năng suất và lịch**, không phải vượt chi. Do đó hành động ưu tiên là gỡ nghẽn, nâng công suất hoặc cắt phạm vi, không phải cắt chi phí.

### Ba bẫy thường gặp

**Bẫy 1 — SPI tự về 1,0 ở cuối:** mọi dự án khi xong đều có SPI = 1, nên cuối dự án cần dùng **độ trễ trên đường găng (float)** để cảnh báo. **Bẫy 2 — CPI tốt nhờ trì hoãn chi:** AC thấp vì chưa nhận hoá đơn; kiểm tra công nợ. **Bẫy 3 — EAC máy móc:** công thức BAC/CPI giả định hiệu suất quá khứ lặp lại; nếu nguyên nhân chậm đã dứt thì dùng EAC = AC + ETC bottom-up.

## Tình huống FoodNow

Thứ Sáu 22/05/2026, cuối tuần 20 (kết thúc Sprint 7). Hà cập nhật EVM: **BAC 2.140**, **PV 962**, **EV 789**, **AC 825** (triệu VND). Kết quả: SV = −173, CV = −36, **SPI = 0,82** (đỏ), **CPI = 0,96** (xanh, sát ngưỡng); EAC = 2.140 ÷ 0,956 ≈ **2.238**, ETC = **1.413**, VAC = **−98**, TCPI = **1,03**. So với hai lần đo trước: SPI 0,95 (tuần 12) → 0,90 (tuần 16) → **0,82** — xu hướng đi xuống.

Hà đọc số: SV −173 triệu tương đương khoảng **200 ngày công** — khoảng 3,5 tuần của cả đội. Nguyên nhân: Sprint 1–2 chậm; Tuấn bị rút 4 tuần; **Sơn nghỉ** ở tuần 14; conflict nhánh ở Sprint 6. **CPI 0,96** nhìn ổn, nhưng chi tiêu năm tháng đầu thấp hơn kế hoạch vì thiếu người (Ch14) — không phải tiết kiệm. Dự báo thô là go-live chậm 8 tuần. Nhưng chị nhìn thêm đường găng: chuỗi thanh toán vẫn còn bảo đảm nhờ fast-tracking; chỉ nhánh dev (float 5 ngày) bị áp lực.

Chị họp riêng với Bảo, Châu và Dũng và trình bày **kế hoạch phục hồi**: (1) **cắt phạm vi**: báo cáo doanh thu nhà hàng (3.2.4) và nút "đặt lại" (một phần 3.1.6) sang R1, khoảng **25 ngày công**; (2) **thêm người đúng cách** — 2 Dev hợp đồng và 1 QA hợp đồng 4 tuần từ 01/06 (đã dự phòng từ Ch21), chỉ cho việc chia được; (3) **đổi cách làm**: rà lịch họp để giải phóng thời gian làm việc (kết quả ở Ch28: giảm 30%), 10% sprint trả nợ để tốc độ dài hạn không giảm; (4) **làm rõ quyết định**: Sponsor chốt Scope Freeze 13/07 và không CR mới lớn; (5) **reset kỳ vọng**: dự báo velocity và SPI hồi phục 0,86 → 0,91 → 0,95 vào tuần 24–32. Anh Bảo chấp nhận việc cắt hai hạng mục (DL-015, 22/05). Kết quả: SPI 0,86 (T24), 0,91 (T28), 0,95 (T32), 0,98 (T36); go-live vẫn 03/10.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Tính EVM.** BAC = 1.200; ở tuần báo cáo: PV = 500; EV = 420; AC = 460. Tính SV, CV, SPI, CPI, EAC (BAC/CPI), ETC, VAC, TCPI; xác định đèn (theo ngưỡng của sách) và viết 3 dòng đọc số.

**Bài 2 (làm ra sản phẩm).** Với `evm-calculator.csv`, thay dữ liệu bằng số của dự án bạn (3 mốc), dự báo EAC bằng cả ba biến thể và so sánh.

**Bài 3 (tình huống ngắn).** Báo cáo tuần của đội luôn "xanh" nhưng burnup cho thấy phạm vi tăng 25% trong 6 tuần và SPI 0,88. Bạn làm gì?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** SV = 420 − 500 = **−80**; CV = 420 − 460 = **−40**; SPI = 420 ÷ 500 = **0,84** (đỏ); CPI = 420 ÷ 460 = **0,913** (vàng); EAC = 1.200 ÷ 0,913 = **1.314**; ETC = 1.314 − 460 = **854**; VAC = 1.200 − 1.314 = **−114**; TCPI = (1.200 − 420) ÷ (1.200 − 460) = 780 ÷ 740 = **1,054**. Đọc: chậm 16%, đắt hơn 9%; nếu xu hướng tiếp diễn sẽ vượt 114; phần còn lại phải hiệu quả gấp 1,05 lần hiện tại; đèn tổng: **đỏ** (SPI < 0,85).

**Bài 3:** Chẩn đoán: watermelon status; phạm vi phình không qua CR; SPI thực tế vàng. Hành động: tính lại báo cáo bằng ngưỡng số (SPI 0,88 = vàng), đưa burnup vào báo cáo, ghi nhận phạm vi tăng và xử lý bằng CR/PO (Ch20), họp với đội hỏi vì sao báo "xanh". Lời nói mẫu: "Em cần báo cáo theo ngưỡng số và có biểu đồ phạm vi. SPI đang 0,88, tức vàng. Mình đổi cách báo để Sponsor thấy thật." Sai lầm: giữ xanh để tránh phản ứng.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Báo "xong 90%". → **Hậu quả:** 10% cuối chiếm 50% thời gian. **Cách khắc phục:** EV theo quy tắc 0/100 hoặc mốc.
2. **Sai lầm:** Đọc chi tiêu tách khỏi tiến độ. → **Hậu quả:** "chi ít" tưởng tốt. **Cách khắc phục:** CPI cùng SPI; hỏi nguyên nhân.
3. **Sai lầm:** Không đặt ngưỡng RAG bằng số. → **Hậu quả:** báo cáo chủ quan, watermelon. **Cách khắc phục:** ngưỡng xác lập trước, dữ liệu từ hệ thống.
4. **Sai lầm:** Dựa vào SPI tổng, không nhìn đường găng. → **Hậu quả:** phát hiện trễ muộn hoặc báo động giả. **Cách khắc phục:** đọc cùng lịch găng.
5. **Sai lầm:** Sửa baseline để đẹp số. → **Hậu quả:** mất khả năng học và mất tin. **Cách khắc phục:** chỉ qua CR, ghi baseline.
6. **Sai lầm:** So velocity giữa đội hoặc đánh giá cá nhân. → **Hậu quả:** thổi điểm, dữ liệu vô nghĩa. **Cách khắc phục:** chỉ dùng trong một đội để dự báo.

## Tóm tắt & tiếp theo

- Agile: burndown, burnup (thấy phạm vi đổi), velocity (trung bình 3 sprint) để dự báo bằng khoảng.
- EVM: PV, EV, AC → SV, CV, SPI, CPI → EAC, ETC, VAC, TCPI; chọn biến thể EAC theo nguyên nhân.
- Ngưỡng RAG: xanh ≥ 0,95; vàng 0,85–0,95; đỏ < 0,85; tránh watermelon status.
- Dự báo bằng SPI, velocity và đường găng; cẩn thận khi chỉ số nói dối. FoodNow T20: SPI 0,82 / CPI 0,96 → kế hoạch phục hồi.

Chương 35 nói về **báo cáo trạng thái và dashboard**: biến các con số này thành thông tin Sponsor hành động được.
