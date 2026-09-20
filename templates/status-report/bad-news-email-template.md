**Tên tài liệu:** Mẫu email/tin nhắn báo tin xấu
**Dự án:** FoodNow (ví dụ: PayEasy trễ chứng nhận, 20/04/2026)
**Phiên bản / ngày:** v1.0 — 20/04/2026
**Mục đích & khi nào dùng:** Báo tin xấu kịp thời, ngắn, kèm phương án và khuyến nghị; dùng khi có sự cố, trễ mốc, vượt ngân sách hoặc rủi ro thành hiện thực.

---

## 1. Nguyên tắc "không bất ngờ"

1. **Báo sớm**: trong ngày bạn biết (tối đa 24 giờ).
2. **Báo trực tiếp**: người ra quyết định nghe từ bạn, không phải từ người khác.
3. **Báo kèm phương án**: vấn đề – tác động – phương án – khuyến nghị – quyết định cần và hạn.
4. **Nói thật, không tô hồng, không đổ lỗi**.
5. **Kênh**: sự cố nghiêm trọng gọi điện trước rồi văn bản hoá; còn lại email/tin nhắn.

## 2. Cấu trúc 5 phần

| Phần | Nội dung | Độ dài |
|---|---|---|
| 1. Vấn đề | Chuyện gì xảy ra, sự thật, khi nào | 1–2 câu |
| 2. Tác động | Lên scope/time/cost/quality/rủi ro, con số | 2–3 câu |
| 3. Phương án | 2–3 phương án và đánh đổi | Bảng ngắn |
| 4. Khuyến nghị | Chọn cái nào, vì sao | 1–2 câu |
| 5. Quyết định cần | Ai quyết gì, trước ngày nào | 1 câu |

## 3. Ví dụ — email gửi anh Bảo (20/04/2026, 11:05)

> **Tiêu đề:** [Cần quyết định hôm nay] PayEasy trễ chứng nhận 3 tuần — em đề xuất phương án
>
> Anh Bảo,
>
> **Vấn đề:** Sáng nay chị Yến (PayEasy) báo chứng nhận sẽ trễ 3 tuần, mới hứa 19/06 thay vì 29/05 do hồ sơ dồn ứ.
> **Tác động:** Đây là chuỗi trên đường găng. Nếu chờ, go-live có thể trễ tới 3 tuần (khoảng 24/10) và chi phí trễ khoảng… (ước tính trong file đính kèm).
> **Phương án:**
> | | Mô tả | Chi phí | Kết quả |
> |---|---|---|---|
> | A | Chờ | 0 | Go-live trễ ~3 tuần |
> | B | Fast-tracking: làm end-to-end trên sandbox, chỉ chuyển credential thật khi có chứng nhận | Trong sprint | Giữ 03/10 nếu thành công |
> | C | B + thuê thêm 2 Dev và 1 QA hợp đồng 4 tuần | ≈ 110 triệu (dự phòng) | Giữ 03/10 với rủi ro thấp hơn |
> **Khuyến nghị:** C — dùng dự phòng đã chuẩn bị (≈ 110 triệu, trong ngưỡng 120 triệu em được tự quyết).
> **Em cần:** anh (1) gọi lãnh đạo PayEasy hôm nay để giục; (2) ghi nhận việc dùng dự phòng. Em sẽ báo cáo kết quả trong họp thứ Năm.
>
> Hà

## 4. Mẫu tin nhắn ngắn (sự cố khẩn)

> "Anh Bảo, em báo gấp: [1 câu vấn đề]. Tác động [1 câu]. Em đang [hành động]. Em sẽ gọi anh lúc [giờ] để nói cụ thể."

## 5. Tránh

- Chờ "khi có đầy đủ thông tin" (báo sớm với thông tin hiện có, ghi rõ chưa biết gì).
- Đổ lỗi ("vendor kém").
- Một email 3 trang; giấu quyết định cần ở cuối.
- Nói "không sao" khi có sao.

---

## Cách dùng cho dự án của bạn

1. Sao chép cấu trúc 5 phần; đặt sẵn trong bản nháp.
2. Chuẩn bị tối thiểu 2 phương án trước khi gửi.
3. Gọi điện trước với sự cố nghiêm trọng.
4. Ghi vào RAID và Decision Log sau khi quyết định.
5. Sau sự việc, xem lại: đã báo sớm chưa, Sponsor có bất ngờ không?
