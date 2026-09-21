# Chương 41: Sau dự án: đo lợi ích, PMO & danh mục dự án

## Mục tiêu học

- Lập được kế hoạch benefits realization: KPI, baseline, owner, lịch đo 1/3/6 tháng và hành động khi lệch.
- Phân biệt PMO Supportive/Controlling/Directive và biết khi nào tổ chức cần PMO.
- Phân biệt portfolio, program và project; chọn và ưu tiên dự án bằng điểm số.
- Quản lý được nhiều dự án đồng thời và bắt đầu xây phương pháp luận nội bộ.

## 41.1 Dự án xong chưa phải lợi ích đã đến

Ở Ch01 bạn đã học ba tầng thành công: **quản lý dự án** (đúng hạn, ngân sách, chất lượng), **sản phẩm** (người dùng dùng), **kinh doanh** (đạt mục tiêu ở Business Case). Hai tầng sau chỉ đo được **sau khi dự án kết thúc**, khi PM thường đã chuyển sang dự án khác. Nếu không có ai chịu trách nhiệm, lợi ích **"bốc hơi"**: không ai đo, không ai điều chỉnh, và lần sau Business Case dựa trên số không được kiểm chứng.

**Benefits realization** (hiện thực hoá lợi ích) là việc **xác định, đo và tối ưu** lợi ích sau dự án. PM giỏi giao lại không chỉ sản phẩm mà cả **kế hoạch đo lợi ích có chủ sở hữu**.

## 41.2 Kế hoạch đo lợi ích

Các thành phần:

| Thành phần | Nội dung |
|---|---|
| **Lợi ích** | Điều tổ chức nhận được (doanh số kênh riêng, giảm huỷ đơn) |
| **KPI** | Chỉ số đo lợi ích (đơn/ngày, tỷ lệ huỷ) |
| **Baseline** | Giá trị trước dự án (để so sánh) |
| **Mục tiêu** | Từ Business Case (500 đơn/ngày, huỷ < 5%) |
| **Nguồn dữ liệu** | Hệ thống nào cung cấp, đo thế nào |
| **Owner** | Người chịu trách nhiệm **sau dự án** (không phải PM) |
| **Lịch đo** | 1, 3, 6, 12 tháng |
| **Hành động khi lệch** | Kế hoạch điều chỉnh, cập nhật roadmap |

Quy tắc: **KPI lấy từ Business Case**; mỗi KPI có **baseline**; **owner là người thuộc tổ chức sử dụng** (PO/Head of Ops); đo bằng **dữ liệu hệ thống**; báo cáo ngắn (1 trang) cho SteerCo/HĐQT.

📎 Mẫu đầy đủ: `templates/closure/benefits-realization-plan.md`

### Đọc kết quả

Ba tình huống khi so sánh thực tế với mục tiêu: **đạt** (ghi nhận, phân tích vì sao); **lệch nhẹ** (điều chỉnh trong roadmap); **lệch nặng** (kiểm tra giả định Business Case, có thể dừng/đổi hướng). Điều quan trọng: **hiệu chỉnh giả định** — Business Case dự án sau cần dựa trên số thật của dự án này.

## 41.3 PMO là gì

**PMO** (Project Management Office — văn phòng quản lý dự án) là đơn vị trong tổ chức chuẩn hoá cách quản lý dự án và hỗ trợ dự án. Ba loại:

| Loại | Vai trò | Quyền | Ví dụ dịch vụ |
|---|---|---|---|
| **Supportive** | Cung cấp mẫu, đào tạo, kho tri thức | Tư vấn | Thư viện template, mentor PM |
| **Controlling** | Bảo đảm tuân thủ chuẩn, audit | Yêu cầu tuân thủ | Gate review, kiểm tra báo cáo |
| **Directive** | Trực tiếp quản lý dự án | Quyết định | PM thuộc PMO, phân bổ PM cho dự án |

**Khi nào cần PMO?** Khi có nhiều dự án đồng thời (≥ 5) và nguồn lực chia sẻ; kết quả phụ thuộc người chứ không phải quy trình; lãnh đạo không so sánh được báo cáo; tri thức mất khi PM rời. **Khi nào chưa cần?** Công ty có 1–3 dự án, đội nhỏ, văn hoá tự chủ — một "PM guild" hoặc thư viện mẫu là đủ.

**Cách xây PMO nhẹ**: bắt đầu **Supportive** (thư viện mẫu, đào tạo, báo cáo danh mục), chỉ tiến lên Controlling khi đã có giá trị rõ; đo chỉ số PMO (tỷ lệ dự án đạt baseline, mức tuân thủ, độ chính xác ước lượng, hài lòng stakeholder, tái sử dụng bài học); **tránh trở thành "cảnh sát tài liệu"**. Bài học nền tảng: bộ template trong sách này là điểm khởi đầu tốt.

📎 Mẫu đầy đủ: `templates/closure/pmo-starter-kit.md`

## 41.4 Portfolio, program, project

| | Dự án (project) | Chương trình (program) | Danh mục (portfolio) |
|---|---|---|---|
| Đối tượng | Một đầu ra cụ thể | Nhóm dự án liên quan | Tập hợp mọi dự án/chương trình |
| Mục tiêu | Giao đúng scope/time/cost | Đạt lợi ích chung | Tối ưu giá trị tổng, khớp chiến lược |
| Câu hỏi | Làm thế nào? | Phối hợp thế nào? | **Nên làm dự án nào, ngừng dự án nào?** |
| Người quản lý | PM | Program/Delivery Manager | Lãnh đạo, PMO |

**Chọn và ưu tiên dự án (portfolio scoring)**: chấm 1–5 theo giá trị chiến lược, lợi ích tài chính, rủi ro (điểm cao = rủi ro thấp), nguồn lực sẵn có, độ khẩn cấp; nhân trọng số; xếp hạng. Điểm số chỉ là **công cụ thảo luận**; lãnh đạo quyết. Phần quan trọng: **cũng cần quyền dừng** dự án điểm thấp.

## 41.5 Quản lý nhiều dự án đồng thời

Ở cấp PM, khi bạn quản lý 2–3 dự án cùng lúc:

- **Chuẩn hoá nhịp và mẫu**: cùng ngày báo cáo, cùng ngưỡng RAG — giảm chi phí chuyển ngữ cảnh.
- **Ưu tiên rõ**: khi va nhau, dự án nào là số một (Sponsor quyết).
- **Uỷ quyền**: Tech Lead/BA dẫn dắt hằng ngày; bạn tập trung rủi ro, quyết định, stakeholder.
- **Bảo vệ thời gian sâu**: khoá khung giờ cho từng dự án.
- **Biết giới hạn**: mỗi dự án thêm giảm hiệu quả của mọi dự án (Ch16).
- **Nguồn lực chung**: bảng tải cấp tổ chức để tránh một người chia cho 4 dự án.

## 41.6 Xây phương pháp luận nội bộ

Phương pháp luận không phải cuốn sách dày; là **bộ khung tối thiểu** để dự án của tổ chức bạn nhất quán: (1) vòng đời chuẩn (Hybrid) và các cổng; (2) bộ mẫu chuẩn; (3) ngưỡng RAG, DoD, Go/No-Go; (4) nguyên tắc leo thang, thay đổi, báo cáo; (5) cách học (lessons learned được đưa vào mẫu). Xây từ **thực tiễn dự án đã làm** — ví dụ chính bài học 12 điểm của FoodNow — thay vì sao chép khung lý thuyết. Duy trì bằng cách **xem lại mỗi 6–12 tháng**.

## Đi sâu: đo lợi ích và chọn dự án cho portfolio

### Chuỗi từ đầu ra đến lợi ích

Đầu ra (output) là thứ đội bàn giao; kết quả (outcome) là hành vi thay đổi; lợi ích (benefit) là giá trị đo được cho tổ chức. Ví dụ FoodNow: đầu ra = ứng dụng đặt món; kết quả = nhà hàng nhận đơn qua app thay vì điện thoại; lợi ích = 430 đơn/ngày sau 3 tháng, huỷ đơn 6%, hoàn vốn ước ~11,9 tháng. PM phải đứng ở cả ba bậc, không dừng ở bậc một.

### Ba thời điểm đo

| Thời điểm | Đo gì | Ai đo |
|---|---|---|
| Go-live + 2 tuần | Ổn định, lỗi, sử dụng ban đầu | Đội dự án |
| +3 tháng | Số đơn, tỷ lệ huỷ, hài lòng | Sponsor + vận hành |
| +12 tháng | Hoàn vốn, chi phí vận hành thực | Tài chính + PMO |

### Chấm điểm để xếp hạng dự án

PMO thường dùng thang điểm có trọng số: giá trị chiến lược 30%, lợi ích tài chính 25%, rủi ro 20%, độ sẵn sàng nguồn lực 15%, độ khẩn cấp 10%. Không có công thức hoàn hảo; giá trị của thang là buộc cuộc thảo luận dùng cùng ngôn ngữ và lộ ra giả định.

### Xung đột nguồn lực giữa các dự án

Ba cấp xử lý: (1) hai PM tự thoả thuận lịch mượn người; (2) PMO điều phối theo bảng công suất chung; (3) hội đồng portfolio quyết dự án nào lùi. Một quy tắc hữu ích: **không chia một người ra quá 3 dự án** — chi phí chuyển ngữ cảnh làm hiệu suất thực rơi xuống dưới tổng cộng.

## Tình huống FoodNow

Ngày 05/01/2027, ba tháng sau go-live, Hà cùng Châu trình bày **kết quả đo lợi ích** cho anh Bảo và HĐQT so với Business Case: **430 đơn/ngày** (85% mục tiêu 500; run-rate), **tỷ lệ huỷ 6%** (mục tiêu < 5% — chưa đạt), thời gian giao trung bình 33 phút (đạt), và **payback dự báo ≈ 11,9 tháng** từ go-live (kế hoạch 10,6; vẫn dưới 18 tháng). Trước đó họ đã đo 1 tháng (03/11) đúng như kế hoạch.

Anh Bảo hỏi: "Huỷ đơn 6% — lỗi ở app hay ở nhà hàng?" Châu mở phân tích: 45% do nhà hàng hết món, 25% tài xế không nhận kịp, 20% khách đổi ý. Hà đề xuất **điều chỉnh R1** thay vì đổ lỗi: ưu tiên tính năng "món tạm hết" và cảnh báo thời gian thực cho nhà hàng, thuật toán ghép tài xế v2 (đã thử ở feature flag), và khuyến mãi để đẩy đơn từ 430 lên 500. Mục tiêu R1 được đổi thành "huỷ < 5% ổn định; 600 đơn/ngày sau 6 tháng"; Roadmap lên v1.2; số liệu thật cũng được đưa vào Business Case cho R1/R2 (giả định biên đóng góp 25.000 vẫn đúng; chi phí vận hành thực 102 triệu/tháng so với 95 dự kiến).

Cuối tháng, Giám đốc BrightSoft mời Hà dẫn dắt **PMO khởi đầu**: chị gom thư viện mẫu từ FoodNow (Phụ lục A), viết onboarding cho PM mới và lập báo cáo danh mục hằng tháng cho bảy dự án đang chạy. Khi lập bảng ưu tiên danh mục, R1 của FoodNow đạt 4,10 điểm, cao hơn dự án nội bộ "chuẩn hoá CI" (3,35) — nhưng chị đề nghị vẫn cấp nguồn lực cho CI vì nó giảm rủi ro của hầu hết dự án. Đó là lúc chị nhận ra: quản lý danh mục là chuyện **chọn không làm** nhiều như chọn làm.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Kế hoạch đo lợi ích.** Cho một dự án "cổng thông tin khách hàng cho công ty bảo hiểm" (Business Case: giảm 30% cuộc gọi hỗ trợ, tăng 20% gia hạn online, payback < 24 tháng). Lập kế hoạch đo lợi ích: ≥ 4 KPI có baseline, mục tiêu, nguồn dữ liệu, owner, lịch đo 1/3/6 tháng, và 2 hành động khi lệch.

**Bài 2 (làm ra sản phẩm).** Lập bảng ưu tiên danh mục cho 5 dự án của công ty giả định (chấm 5 tiêu chí với trọng số của mẫu), chọn 3 dự án làm trước và giải thích một dự án điểm thấp nhưng vẫn nên làm.

**Bài 3 (tình huống ngắn).** Sáu tháng sau go-live, Sponsor hỏi: "Dự án mình xong rồi, sao chỉ số chưa đạt?" Bạn đã rời dự án sang việc khác. Bạn làm gì?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 3:** Chẩn đoán: không có owner và kế hoạch đo lợi ích rõ. Bước: (1) gặp Sponsor và owner thực tế (PO/Head of Ops) để xem dữ liệu; (2) phân tích chênh lệch (nguyên nhân: giả định sai, tính năng chưa dùng, chất lượng, thị trường); (3) đề xuất hành động điều chỉnh (roadmap/R1) và người chịu trách nhiệm; (4) cập nhật Business Case; (5) rút bài học cho dự án sau (luôn giao kế hoạch đo lợi ích khi đóng dự án). Lời nói mẫu: "Dự án xong nghĩa là sản phẩm đã giao; lợi ích cần thời gian và người theo dõi. Em đề nghị mình cùng chị Châu xem số 3 tháng và lên kế hoạch điều chỉnh; em sẽ đề xuất thêm người chịu trách nhiệm đo lợi ích cho các dự án sau." Sai lầm: đổ cho người dùng; bảo "hết trách nhiệm".
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Đóng dự án mà không giao kế hoạch đo lợi ích. → **Hậu quả:** lợi ích không được đo và tối ưu. **Cách khắc phục:** KPI, baseline, owner, lịch 1/3/6/12 tháng trước khi đóng.
2. **Sai lầm:** Owner đo lợi ích là PM đã rời. → **Hậu quả:** không ai làm. **Cách khắc phục:** owner thuộc tổ chức sử dụng.
3. **Sai lầm:** Lập PMO kiểu Controlling ngay từ đầu. → **Hậu quả:** bị coi là cảnh sát tài liệu, bị né. **Cách khắc phục:** bắt đầu Supportive, chứng minh giá trị.
4. **Sai lầm:** Ưu tiên danh mục bằng "ai la to nhất". → **Hậu quả:** nguồn lực bị chia nhỏ theo chính trị. **Cách khắc phục:** scoring có tiêu chí và quyền dừng dự án.
5. **Sai lầm:** Sao chép khung phương pháp luận lý thuyết. → **Hậu quả:** nặng nề, ít áp dụng. **Cách khắc phục:** xây từ bài học dự án thật, xem lại mỗi 6–12 tháng.
6. **Sai lầm:** Quản lý nhiều dự án bằng cách mở rộng giờ làm. → **Hậu quả:** quá tải, chất lượng giảm. **Cách khắc phục:** chuẩn hoá nhịp, uỷ quyền, ưu tiên rõ.

## Tóm tắt & tiếp theo

- Lợi ích phải được đo sau dự án bằng kế hoạch có KPI, baseline, owner, lịch 1/3/6/12 tháng và hành động khi lệch.
- PMO có ba loại (Supportive, Controlling, Directive); bắt đầu nhẹ và chứng minh giá trị.
- Portfolio quyết chọn/dừng dự án bằng scoring; program phối hợp dự án liên quan.
- Xây phương pháp luận từ bài học thật; FoodNow: 430 đơn/ngày (85%), huỷ 6%, payback ≈ 11,9 tháng → điều chỉnh R1.

Hết Phần 7. Phần 8 là **bài tập tình huống**: bắt đầu với Chương 42 — phạm vi và khách hàng.
