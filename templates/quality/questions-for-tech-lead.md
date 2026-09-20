**Tên tài liệu:** 10 câu hỏi PM nên hỏi Tech Lead (và cách hiểu câu trả lời)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 12/01/2026
**Mục đích & khi nào dùng:** Giúp PM không biết code vẫn đánh giá được sức khoẻ kỹ thuật; dùng ở khởi động, trước mốc lớn và khi nghi ngờ rủi ro kỹ thuật.

---

## Mười câu hỏi

| # | Câu hỏi | Bạn đang tìm gì | Dấu hiệu tốt | Dấu hiệu đáng lo |
|---|---|---|---|---|
| 1 | "Phần nào của hệ thống khiến anh lo nhất, vì sao?" | Rủi ro kỹ thuật thật | Nêu cụ thể, có kế hoạch | "Không có gì" |
| 2 | "Nếu một người trong đội nghỉ, phần nào sẽ khó nhất?" | Bus factor | Có người dự phòng, tài liệu | Chỉ một người biết |
| 3 | "Từ lúc commit đến lúc chạy trên staging mất bao lâu, có tự động không?" | CI/CD | Tự động, vài phút–giờ | Thủ công, vài ngày |
| 4 | "Tỷ lệ test tự động ở phần thanh toán/quan trọng là bao nhiêu?" | Chất lượng | Có số, có ngưỡng | "Test tay là đủ" |
| 5 | "Nợ kỹ thuật lớn nhất hiện nay là gì, chi phí trì hoãn mỗi sprint?" | Nợ kỹ thuật | Có register, số ngày | Không ai theo dõi |
| 6 | "Làm thế nào để quay lại bản trước nếu bản mới lỗi?" | Rollback | Có quy trình đã thử | Chưa từng thử |
| 7 | "Hệ thống chịu được gấp đôi tải dự kiến không? Đã thử chưa?" | Hiệu năng | Có kết quả test tải | Chưa thử |
| 8 | "Dữ liệu nhạy cảm (thẻ, số điện thoại) nằm ở đâu, ai truy cập được?" | Bảo mật | Rõ vị trí, mã hoá, phân quyền | Mơ hồ |
| 9 | "Ước lượng nào anh ít tin nhất, vì sao?" | Bất định ước lượng | Chỉ ra cụ thể | "Tất cả đều chắc" |
| 10 | "Điều anh cần từ tôi (PM) để làm tốt hơn là gì?" | Hỗ trợ | Yêu cầu cụ thể | Không có |

## Cách nghe

- **Đừng tranh luận kỹ thuật**; hỏi "vì sao" và "bằng chứng nào".
- Hỏi lại bằng ví dụ: "Nếu chuyện đó xảy ra vào thứ Sáu trước go-live, mình làm gì?"
- Ghi câu trả lời vào RAID nếu là rủi ro/giả định.
- Lặp lại các câu hỏi 3, 5, 6, 7 ở mỗi mốc lớn.

## Ví dụ trả lời của Dũng (12/01/2026)

- Câu 1: "Tích hợp PayEasy và cập nhật vị trí thời gian thực." → R01, R05.
- Câu 2: "Sơn giữ đơn hàng/thanh toán; tôi giữ kiến trúc." → bus factor, ghi R02.
- Câu 3: "CI chạy 12 phút; deploy staging thủ công, sẽ tự động ở Sprint 2." → hành động cho Ánh.
- Câu 6: "Chưa có quy trình rollback rõ." → đưa vào Delivery Plan (Ch30–32).

---

## Cách dùng cho dự án của bạn

1. Hỏi lần đầu ở tuần 1 trong 1-1 (30 phút).
2. Chuyển câu trả lời đáng lo thành rủi ro/hành động có người và hạn.
3. Hỏi lại ở mỗi mốc lớn (Scope Freeze, UAT, go-live).
4. Điều chỉnh câu hỏi theo bối cảnh (mobile, dữ liệu, tích hợp).
5. Tôn trọng: hỏi để hiểu, không để bắt lỗi.
