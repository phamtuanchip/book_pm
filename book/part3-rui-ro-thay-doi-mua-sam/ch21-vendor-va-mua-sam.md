# Chương 21: Quản lý phụ thuộc, vendor & mua sắm

## Mục tiêu học

- Quyết định được make, buy hay dùng SaaS cho từng hạng mục và ghi lý do.
- So sánh được các loại hợp đồng (Fixed-price, T&M, Cost-plus, Dedicated team) theo góc nhìn PM.
- Chấm điểm vendor bằng scorecard và viết SLA, điều khoản chấp nhận đo được.
- Vận hành nhịp quản lý vendor hằng tuần và leo thang có quy tắc.
- Lập kế hoạch dự phòng cho phụ thuộc bên ngoài (API đối tác, cổng thanh toán, app store).

## 21.1 Make, buy hay SaaS

Mỗi hạng mục dự án đều có thể **tự làm** (make), **mua** (buy, dịch vụ hoặc thành phần) hoặc **thuê dịch vụ trọn gói** (SaaS). Câu hỏi giúp quyết định:

| Câu hỏi | Nghiêng về Make | Nghiêng về Buy/SaaS |
|---|---|---|
| Đây có phải lợi thế cạnh tranh cốt lõi? | Có | Không |
| Có sản phẩm chuẩn đáp ứng ≥ 80% nhu cầu? | Không | Có |
| Có yêu cầu tuân thủ/chứng nhận nặng? | Ít | Nhiều (vendor đã có chứng nhận) |
| Thời gian ra thị trường ngắn? | Không | Có |
| Tổng chi phí sở hữu (TCO) sau 3 năm? | Thấp hơn nếu dùng lâu | Thấp hơn khi ngắn hạn |
| Rủi ro khoá nhà cung cấp (lock-in)? | Thấp | Cao |

FoodNow: ứng dụng lõi **make**; cổng thanh toán, SMS, bản đồ, pentest **buy**; hạ tầng **thuê**. Không ai tự làm hệ thống thanh toán thẻ trừ khi thanh toán là sản phẩm chính.

Buy không có nghĩa là nhẹ nhàng: **mỗi vendor thêm là một phụ thuộc bên ngoài**, và phụ thuộc bên ngoài là nơi rủi ro tập trung (Ch12, Ch19). Quyết định mua cần **kèm kế hoạch dự phòng**.

## 21.2 Các loại hợp đồng theo góc nhìn PM

| Loại | Cách tính | Ưu | Nhược | Khi dùng |
|---|---|---|---|---|
| **Fixed-price** | Giá cố định cho phạm vi cố định | Chi phí rõ; vendor giữ rủi ro | Đổi phạm vi khó; vendor có thể cắt chất lượng; tranh chấp | Phạm vi rõ (pentest, tích hợp chuẩn) |
| **T&M** (Time & Material) | Trả theo công thực tế | Linh hoạt | Khó dự báo tổng; cần kiểm soát giờ | Phạm vi chưa rõ |
| **Cost-plus** | Chi phí thực + biên | Minh bạch | Ít động lực tiết kiệm | Nghiên cứu, dự án lớn |
| **Dedicated team** | Thuê đội chuyên trách theo tháng | Ổn định, hợp Agile | Phụ thuộc, khó thoát | Dài hạn |

Ba điều PM cần kiểm tra trong hợp đồng, dù không phải người soạn:

1. **Tiêu chí chấp nhận đo được** ("qua 100% kịch bản sandbox" chứ không phải "chạy tốt").
2. **Điều khoản thời hạn và hậu quả trễ**: có phạt không? mức phạt có đủ bù thiệt hại không? (thường không — xem ví dụ dưới).
3. **Điều khoản thoát**: báo trước, bàn giao dữ liệu, chuyển nhà cung cấp.

**RFP/RFQ** (yêu cầu đề xuất/báo giá) tóm tắt: khi chọn vendor mới, gửi mô tả nhu cầu, tiêu chí đánh giá và thời hạn; nhận đề xuất; chấm bằng scorecard; thương lượng. Tránh chọn chỉ vì giá thấp nhất.

## 21.3 Scorecard chọn vendor

**Vendor scorecard** chấm điểm có trọng số theo tiêu chí. Bảng chọn cổng thanh toán của FoodNow (điểm 1–5):

| Tiêu chí | Trọng số | PayEasy | PayNova | GatePay |
|---|---|---|---|---|
| Chi phí | 20% | 4 | 3 | 5 |
| Năng lực kỹ thuật/API | 20% | 4 | 5 | 3 |
| Tốc độ onboarding và chứng nhận | 20% | 3 | 4 | 2 |
| Bảo mật và tuân thủ | 15% | 5 | 4 | 3 |
| Hỗ trợ và SLA | 15% | 4 | 3 | 3 |
| Uy tín tại Việt Nam | 10% | 4 | 3 | 2 |
| **Tổng có trọng số** | 100% | **3,95** | **3,75** | **3,10** |

PayEasy được chọn với **điểm yếu đã biết** (tốc độ onboarding chỉ 3): điểm yếu đó được ghi thành rủi ro R01 ngay từ đầu (Ch18). Đây là cách dùng scorecard đúng: **không chọn "vendor hoàn hảo" mà chọn vendor có điểm yếu bạn quản lý được**.

📎 Mẫu đầy đủ: `templates/pm-plan/vendor-scorecard.csv`

## 21.4 SLA và điều khoản chấp nhận

**SLA** (Service Level Agreement) là cam kết về mức dịch vụ đo được: uptime, thời gian phản hồi, thời hạn xử lý. Một SLA tốt:

- **Đo được** ("≥ 99,5% giao dịch thành công mỗi tháng", không phải "ổn định");
- **Gắn hậu quả** (phạt, hoàn tiền, quyền chấm dứt);
- **Có cách báo cáo** (ai gửi số liệu, bao lâu một lần).

Ví dụ PayEasy trong hợp đồng: thời hạn chứng nhận 25 ngày làm việc kể từ khi nộp hồ sơ đầy đủ; phạt 0,5% phí tích hợp mỗi tuần trễ, tối đa 5%. Với phí tích hợp 60 triệu, phạt tối đa ≈ **3 triệu**. Nghĩa là **phạt hầu như không bù nổi thiệt hại** (crashing ≈ 110 triệu). Bài học: **đừng dựa vào điều khoản phạt để bảo vệ lịch; hãy dựa vào quan hệ, leo thang và kế hoạch dự phòng**.

📎 Mẫu đầy đủ: `templates/pm-plan/procurement-plan.md`

## 21.5 Quản lý vendor hằng tuần

Vendor không tự "quản lý" mình. Nhịp làm việc gợi ý:

| Nhịp | Hoạt động | Đầu ra |
|---|---|---|
| Hằng tuần | Họp 30 phút với vendor; rà ngày hứa (RAID) | Ngày hứa cập nhật, hành động |
| Hằng tháng | Chấm điểm vận hành bằng scorecard (tiến độ, chất lượng, giao tiếp) | Điểm và phản hồi |
| Khi trễ | Leo thang theo quy tắc: 1 ngày → PM; 3 ngày → Sponsor; 5 ngày → lãnh đạo vendor | Cam kết mới bằng văn bản |
| Cuối hợp đồng | Đánh giá tổng, bài học | Quyết định gia hạn |

Nguyên tắc: **văn bản hoá mọi cam kết ngày**; **giữ quan hệ cá nhân tốt** với đầu mối (Yến) nhưng **có kênh cấp cao** khi cần; **biến vendor thành một thành viên có tên trong RACI**, không phải "họ".

## 21.6 Phụ thuộc bên ngoài và kế hoạch dự phòng

Phụ thuộc bên ngoài điển hình trong dự án phần mềm: **API đối tác** (dữ liệu nhà hàng), **cổng thanh toán** (sandbox, chứng nhận), **app store** (review Apple/Google), **nhà cung cấp SMS/bản đồ**, **cơ quan quản lý** (giấy phép, quy định).

Mỗi phụ thuộc cần bốn thứ (Ch19): **ngày cần, ngày hứa, người liên hệ, kế hoạch dự phòng**. Kế hoạch dự phòng thường thuộc bốn nhóm:

1. **Đường vòng**: làm phần khác trước (dùng mock/sandbox);
2. **Tăng tốc**: crashing hoặc fast-tracking phần phụ thuộc (Ch12);
3. **Phương án thay thế**: vendor dự phòng (SMS B), ra mắt bản rút gọn (COD trước);
4. **Dời và chấp nhận**: dời mốc, thông báo Sponsor sớm.

## Tình huống FoodNow

Thứ Hai 20/04/2026 (tuần 16). Yến báo bằng email: hồ sơ PayEasy đang dồn ứ; chứng nhận sẽ trễ **3 tuần**, mới hứa **19/06** thay vì 29/05. Hà biết ngay trên đường găng: đây là chuỗi thanh toán, không có float. Chị không hoảng vì đã có kế hoạch từ tháng 1.

Trong 24 giờ, chị làm bốn việc. **Một**, cập nhật RAID: D-02 (ngày hứa 19/06), I-006 (Issue, P1) và báo anh Bảo. **Hai**, đề nghị anh Bảo gọi lãnh đạo PayEasy — vì hợp đồng chỉ phạt tối đa 3 triệu, đòn bẩy thật là quan hệ và uy tín của FoodNow với PayEasy. **Ba**, **fast-tracking**: thay vì chờ chứng nhận để bắt đầu end-to-end (01/06), đội dựng và kiểm thử toàn bộ luồng thanh toán trên sandbox và chỉ chuyển sang credential thật ở tuần cuối; nhờ vậy 3 tuần chờ không còn nằm trên đường găng. **Bốn**, **crashing**: thuê 2 Dev hợp đồng và 1 QA hợp đồng trong 4 tuần để chạy song song đối soát và kiểm thử, chi phí ≈ **110 triệu** — dưới ngưỡng 5% (≈ 120 triệu) mà Charter cho phép Hà tự quyết. Chị báo anh Bảo ngay trong ngày và ghi vào budget-tracking.

Kết quả: sau các biện pháp, dự báo ngày end-to-end trên credential thật rơi vào 22–26/06 thay vì bị kéo tới tháng 7, đường găng không dời và go-live vẫn là 03/10. Hà cũng cập nhật procurement-plan (mục 7) với hồ sơ contingency và điều chỉnh R17 (vượt ngân sách) lên theo dõi sát. Đây là lúc khoản dự phòng 12% chứng minh giá trị: nếu Hà phải xin phê duyệt hai tuần, cơ hội fast-tracking đã mất.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Scorecard 3 vendor.** Chấm điểm 3 nhà cung cấp dịch vụ bản đồ cho một app giao hàng, theo 6 tiêu chí do bạn chọn (trọng số tổng 100%), tính điểm có trọng số bằng công thức, chọn một vendor và ghi rõ **điểm yếu bạn chấp nhận** và cách quản lý điểm yếu đó.

**Bài 2 (làm ra sản phẩm).** Lập bảng phụ thuộc bên ngoài của dự án bạn (≥ 6 dòng): ngày cần, ngày hứa, người liên hệ, kế hoạch dự phòng thuộc nhóm nào trong 4 nhóm.

**Bài 3 (tình huống ngắn).** Vendor báo trễ 2 tuần một phụ thuộc nằm trên đường găng. Hợp đồng có điều khoản phạt 1% giá trị mỗi tuần trễ. Sponsor nói: "Cứ phạt họ rồi chờ." Bạn phản hồi thế nào?

<details>
<summary>Gợi ý đáp án Bài 3</summary>

**Chẩn đoán:** phạt chỉ bù một phần nhỏ thiệt hại; trong khi chờ, đường găng trễ 2 tuần → trễ go-live. **Phương án A:** leo thang và đàm phán cam kết mới bằng văn bản, nhờ Sponsor liên hệ cấp cao vendor. **Phương án B:** fast-tracking/đường vòng để giảm tác động trễ (làm trên sandbox/mock). **Phương án C:** crashing (thêm nguồn lực) nếu phần việc phía mình chia được. **Phương án D:** phương án thay thế (vendor dự phòng) nếu trễ kéo dài. **Khuyến nghị:** A + B ngay; D nếu vendor không cam kết được. **Lời nói mẫu:** "Phạt chỉ đền khoảng vài triệu, còn trễ 2 tuần có thể tốn hàng trăm triệu. Em đề xuất mình leo thang với lãnh đạo vendor và song song chạy phương án dùng sandbox để không mất thời gian." **Sai lầm:** chờ và hy vọng; hoặc chỉ dựa vào phạt.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Chọn vendor chỉ vì giá thấp. → **Hậu quả:** chậm, kém hỗ trợ, tốn nhiều hơn. **Cách khắc phục:** scorecard nhiều tiêu chí; nêu rõ điểm yếu chấp nhận.
2. **Sai lầm:** Dựa vào điều khoản phạt để bảo vệ lịch. → **Hậu quả:** phạt nhỏ hơn thiệt hại nhiều. **Cách khắc phục:** kế hoạch dự phòng, quan hệ, leo thang.
3. **Sai lầm:** SLA mơ hồ ("hỗ trợ nhanh"). → **Hậu quả:** không có cơ sở đòi. **Cách khắc phục:** số đo cụ thể, có hậu quả.
4. **Sai lầm:** Cam kết ngày miệng. → **Hậu quả:** vendor đổi lời, không có dấu vết. **Cách khắc phục:** email chốt sau mỗi cuộc họp; log ngày hứa trong RAID.
5. **Sai lầm:** Không có kế hoạch dự phòng cho phụ thuộc trên đường găng. → **Hậu quả:** trễ là bất ngờ. **Cách khắc phục:** bốn nhóm dự phòng; kích hoạt theo trigger.
6. **Sai lầm:** Quản lý vendor như "bên kia". → **Hậu quả:** phối hợp kém, thông tin trễ. **Cách khắc phục:** đưa vendor vào RACI, họp hằng tuần, cùng mục tiêu.

## Tóm tắt & tiếp theo

- Quyết định make/buy/SaaS bằng câu hỏi lợi thế cốt lõi, khả năng chuẩn, tuân thủ, TCO, lock-in; mỗi vendor thêm là một phụ thuộc.
- So sánh hợp đồng (fixed-price, T&M, cost-plus, dedicated team); kiểm tra tiêu chí chấp nhận, hậu quả trễ, điều khoản thoát.
- Scorecard chọn vendor và ghi điểm yếu; SLA đo được; phạt thường không đủ bù thiệt hại.
- Quản lý vendor hằng tuần; leo thang có cấp; kế hoạch dự phòng bốn nhóm cho phụ thuộc trên đường găng.

Chương 22 kết thúc Phần 3 bằng **quản lý cấu hình, tài liệu và tri thức dự án**.
