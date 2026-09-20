# Chương 26: Hybrid & mở rộng quy mô (nhiều đội)

## Mục tiêu học

- Thiết kế được Hybrid thực tế và tránh "Water-Scrum-Fall".
- Phối hợp 2–5 đội bằng Scrum of Scrums, đồng bộ release và bảng phụ thuộc chéo đội.
- Nhận biết ở mức khái niệm PI planning/SAFe và các khung scale khác.
- Phân biệt quản lý chương trình (program) với dự án và biết khi nào cần.
- Chọn ranh giới đội và kiến trúc sao cho giảm phụ thuộc.

## 26.1 Hybrid trong thực tế

Ở Ch03 bạn đã thấy Hybrid: **khung kế hoạch Waterfall + thực thi Agile**. Khi triển khai thật, ba điều quyết định thành bại:

1. **Ranh giới rõ**: cái gì cố định (mốc, ngân sách, phạm vi epic), cái gì linh hoạt (story, thứ tự, cách làm).
2. **Nhịp đồng bộ**: sprint cập nhật dự báo; khung cập nhật khi dự báo lệch mốc.
3. **Phản hồi sớm**: demo mỗi sprint với khách; kiểm thử trong sprint; UAT theo release.

### Water-Scrum-Fall và cách tránh

**Water-Scrum-Fall**: yêu cầu và thiết kế kiểu Waterfall (nhiều tháng), giữa là sprint "như dây chuyền", cuối là kiểm thử/UAT kiểu Waterfall. Dấu hiệu:

| Dấu hiệu | Hệ quả |
|---|---|
| Yêu cầu "đóng băng" trước khi sprint đầu tiên | Phản hồi không thể đổi cách làm |
| Sprint chỉ code, không có test/UAT trong sprint | Lỗi lộ muộn ở cuối |
| Demo chỉ cho nội bộ | Khách thấy sản phẩm lần đầu ở UAT |
| Release một lần lớn | Rủi ro dồn về cuối |

Cách tránh: **demo mỗi sprint với PO/khách**; **QA làm việc trong sprint** (DoD gồm test); **UAT theo release nhỏ** (staging mỗi sprint; UAT đợt cuối chỉ là xác nhận); **Sprint 0 ngắn**, đủ dựng khung chứ không đặc tả hết.

## 26.2 Phối hợp 2–5 đội

Khi nhiều hơn một đội cùng làm một sản phẩm, xuất hiện ba vấn đề: **phụ thuộc chéo đội**, **thống nhất hợp đồng kỹ thuật (API)** và **đồng bộ release**.

### Scrum of Scrums (SoS)

Mỗi đội cử một đại diện họp 15–20 phút, 2 lần/tuần, trả lời: đội mình đã làm gì ảnh hưởng đội khác? Đang chờ gì? Có gì chặn? Có thay đổi hợp đồng kỹ thuật nào? Điểm quan trọng: **SoS là nơi gỡ phụ thuộc**, không phải nơi báo cáo.

📎 Mẫu đầy đủ: `templates/sprint-agile/scrum-of-scrums-agenda.md`

### Bảng phụ thuộc chéo đội

Một bảng duy nhất liệt kê mỗi phụ thuộc: đội yêu cầu, đội cung cấp, nhu cầu, **ngày cần**, **ngày hứa**, trạng thái, chủ sở hữu, mức rủi ro, hành động. Nó là sự kế thừa của D trong RAID (Ch19) ở quy mô nhiều đội.

📎 Mẫu đầy đủ: `templates/sprint-agile/cross-team-dependency-board.csv`

### Đồng bộ release

- **Hợp đồng API** ghi rõ và có phiên bản; thay đổi phá vỡ (breaking) phải thông báo **≥ 1 sprint trước**.
- **Nhịp release chung**: nếu Mobile phát hành theo app store (review 1–3 ngày) còn Backend deploy hằng ngày (Ch33), Backend phải **tương thích ngược** ít nhất 2 phiên bản app.
- **Kế hoạch tích hợp**: staging chung, kiểm thử tích hợp mỗi sprint.

## 26.3 PI planning và SAFe (mức nhận biết)

Với tổ chức lớn (5+ đội), **SAFe** (Scaled Agile Framework) đưa ra cấu trúc: đội gom thành **Agile Release Train (ART)**, cùng làm **Program Increment (PI)** dài khoảng 8–12 tuần. Đầu mỗi PI có **PI Planning** hai ngày: tất cả đội cùng lập kế hoạch, vẽ phụ thuộc, nhận diện rủi ro, cam kết mục tiêu PI. Khác: **Scrum@Scale**, **LeSS**, **Disciplined Agile**. Nhận xét thực dụng: chọn khung theo **cần gì**, không theo tên. Đa số dự án 2–3 đội chỉ cần SoS + bảng phụ thuộc + release plan chung; khung lớn chỉ đáng khi chi phí phối hợp vượt lợi ích.

## 26.4 Program và dự án

**Program** (chương trình) là nhóm **dự án liên quan** được quản lý phối hợp để đạt lợi ích không có được khi quản lý riêng. Khác biệt:

| | Dự án | Chương trình |
|---|---|---|
| Mục tiêu | Tạo đầu ra cụ thể | Đạt lợi ích chung (kinh doanh) |
| Thời gian | Có hạn | Dài hơn, gồm nhiều dự án |
| Người quản lý | PM | Program Manager (Delivery Manager) |
| Trọng tâm | Scope-time-cost | Phụ thuộc, lợi ích, nguồn lực chung, rủi ro tổng |

FoodNow MVP → R1 → R2 với hai đội có thể coi là một chương trình nhỏ: Hà lên vai **Delivery Manager** phối hợp hai PM/Tech Lead thay vì tự điều hành từng chi tiết.

## 26.5 Ranh giới đội và kiến trúc

**Định luật Conway**: cấu trúc hệ thống phản ánh cấu trúc giao tiếp của tổ chức. Nếu hai đội phải trao đổi liên tục để làm một tính năng, kiến trúc hoặc ranh giới đội đang sai. Nguyên tắc tách đội:

- **Theo luồng giá trị** (feature team) khi có thể; theo **thành phần** (component team) chỉ khi phụ thuộc kỹ thuật lớn.
- **Giảm phụ thuộc** bằng hợp đồng API rõ, nhánh/CI độc lập, môi trường riêng.
- Mỗi đội **≤ 9 người**, có đủ kỹ năng chính.
- Chia sẻ người (DevOps, UX) qua **đội nền tảng** hoặc lịch khối.

FoodNow: sau MVP, tách thành **Mobile** và **Backend+Web** vì hai nhóm này phát triển gần độc lập qua API, còn DevOps phục vụ chung.

## Tình huống FoodNow

Thứ Hai 28/12/2026 (tuần 52). Sau 3 tháng go-live, số đơn tăng và anh Bảo muốn R1 (khuyến mãi, đánh giá) ra trong Q1/2027 và R2 trong Q3. Đội 12 người đã thu gọn còn 6 lúc bảo trì và sắp tăng lại; Dũng đề xuất **tách hai đội** để R1 và R2 chạy song song. Hà đồng ý nhưng lo ba điều: phụ thuộc chéo đội, API đổi bất ngờ, và nhịp release khác nhau (Mobile qua app store, Backend đã chuyển daily deploy — Ch33).

Chị lập ba thứ: (1) **SoS** hai lần/tuần, 20 phút, có Ánh (DevOps) và chị dự thính; (2) **bảng phụ thuộc chéo đội** với 8 mục đầu tiên — X-02 (API đánh giá món) đã trễ một tuần ngay tuần đầu, Mobile dùng mock trong khi Hà leo thang; (3) luật **thông báo breaking change ≥ 1 sprint** và Backend hỗ trợ ≥ 2 phiên bản app. Trong bốn tuần, phụ thuộc chéo đội giảm từ 8 xuống 5 nhờ Dũng chuyển hợp đồng API sang định dạng có phiên bản. Hà cũng nhận ra vai trò mình đổi: từ "PM một đội" sang **Delivery Manager**, tập trung vào release plan chung, rủi ro tổng và ngân sách hai đội.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Bản đồ phụ thuộc 3 đội.** Cho 3 đội (Mobile, Backend, Web) cùng làm 6 tính năng (danh sách bạn tự đặt), vẽ bản đồ phụ thuộc bằng Mermaid, lập bảng phụ thuộc chéo đội (≥ 8 dòng, có ngày cần, ngày hứa), và đề xuất 2 cách giảm phụ thuộc.

**Bài 2 (làm ra sản phẩm).** Soạn agenda SoS cho hai đội của bạn và quy tắc thông báo thay đổi API.

**Bài 3 (tình huống ngắn).** Đội Backend đổi API đơn hàng (breaking) vào thứ Sáu mà không báo; đội Mobile phát hiện thứ Hai khi app crash trên staging. Bạn xử lý thế nào?

<details>
<summary>Gợi ý đáp án Bài 3</summary>

**Chẩn đoán:** thiếu hợp đồng API có phiên bản và thông báo breaking change. **Hành động 24 giờ:** (1) khôi phục tương thích (rollback hoặc giữ endpoint cũ) để Mobile chạy; (2) họp ngắn hai Tech Lead; (3) thoả thuận quy tắc mới. **Phương án A:** Backend giữ endpoint cũ song song 2 sprint và phát hành v2. **B:** Mobile cập nhật ngay nếu thay đổi nhỏ. **Khuyến nghị:** A và đưa vào SoS. **Phòng ngừa:** API có phiên bản, contract test, thông báo ≥ 1 sprint. **Sai lầm:** đổ lỗi; đội Mobile tự vá lặng lẽ.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Water-Scrum-Fall. → **Hậu quả:** phản hồi muộn, lỗi ở cuối. **Cách khắc phục:** demo/test/UAT nhỏ theo sprint.
2. **Sai lầm:** SoS thành họp báo cáo dài. → **Hậu quả:** tốn thời gian, phụ thuộc không được gỡ. **Cách khắc phục:** tập trung phụ thuộc, chặn, hợp đồng.
3. **Sai lầm:** Không có bảng phụ thuộc chéo đội. → **Hậu quả:** đội chờ nhau, lộ muộn. **Cách khắc phục:** một bảng chung, ngày cần/hứa.
4. **Sai lầm:** Tách đội mà không xem kiến trúc. → **Hậu quả:** phụ thuộc chằng chịt. **Cách khắc phục:** tách theo luồng giá trị và giao diện rõ.
5. **Sai lầm:** Áp SAFe cho 2 đội. → **Hậu quả:** nghi thức nặng. **Cách khắc phục:** dùng vừa đủ, chọn theo nhu cầu.
6. **Sai lầm:** PM vẫn vào từng chi tiết khi có nhiều đội. → **Hậu quả:** nghẽn. **Cách khắc phục:** chuyển sang vai Delivery Manager, uỷ quyền cho Tech Lead từng đội.

## Tóm tắt & tiếp theo

- Hybrid tốt cần ranh giới rõ, nhịp đồng bộ và phản hồi sớm; tránh Water-Scrum-Fall.
- Nhiều đội: SoS, bảng phụ thuộc chéo đội, hợp đồng API có phiên bản, đồng bộ release.
- SAFe/PI planning cho tổ chức lớn; dùng vừa đủ; program khác project ở trọng tâm lợi ích và phụ thuộc.
- Tách đội theo luồng giá trị và giao diện rõ (Conway); PM chuyển dần sang Delivery Manager.

Chương 27 nói về **lãnh đạo và quản lý con người**, phần khó nhất của nghề PM.
