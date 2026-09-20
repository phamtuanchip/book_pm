**Tên tài liệu:** Definition of Ready (DoR) — checklist story sẵn sàng vào sprint
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.1 — 09/03/2026
**Mục đích & khi nào dùng:** Bảo đảm story đủ rõ để đội làm trong một sprint; dùng ở mỗi buổi refinement và trước Sprint Planning.

---

## 1. Checklist

- [ ] **Giá trị rõ**: mô tả "Là [ai], tôi muốn [gì] để [giá trị]"
- [ ] **Tiêu chí chấp nhận** kiểm tra được (ít nhất 3 điều kiện Given/When/Then hoặc danh sách)
- [ ] **Thiết kế UX** đã duyệt (nếu có giao diện) hoặc ghi rõ "không cần"
- [ ] **Phụ thuộc** đã xác định; không bị chặn bởi bên ngoài (hoặc có phương án mock)
- [ ] **Ước lượng** xong bởi đội (Planning Poker); **≤ 8 SP** (lớn hơn phải chia nhỏ)
- [ ] **Vừa trong một sprint** cùng các story khác
- [ ] **Dữ liệu/môi trường test** đã có hoặc có kế hoạch
- [ ] **Câu hỏi mở** đã được PO/BA trả lời
- [ ] **PO đồng ý ưu tiên** và Story được xếp vào backlog sẵn sàng (Ready)

## 2. Quy trình

1. BA/PO chuẩn bị story; đội xem ở **Refinement** (mỗi tuần 1 buổi, 1 giờ).
2. Story đạt checklist chuyển trạng thái **Ready**.
3. Chỉ story **Ready** mới được chọn vào Sprint Planning.
4. Mục tiêu: luôn có **≥ 2 sprint** story Ready ở đầu backlog.

## 3. Chỉ số

| Chỉ số | Công thức | Ngưỡng |
|---|---|---|
| Ready coverage | Số SP Ready ÷ velocity | ≥ 2 sprint |
| Story quay lại "chưa rõ" giữa sprint | Số story ÷ tổng | < 10% |

## 4. Lưu ý

DoR là **hướng dẫn**, không phải cổng cứng: PO và đội có thể chấp nhận ngoại lệ có lý do. Nếu DoR quá nghiêm, đội sẽ tê liệt vì chờ đặc tả hoàn hảo.

---

## Cách dùng cho dự án của bạn

1. Bắt đầu bằng danh sách này; bỏ mục không cần.
2. Đặt ngưỡng SP tối đa cho một story bằng năng lực đội (thường ≤ 1/3 velocity một người).
3. Gắn vào công cụ (trạng thái Ready trong Jira).
4. Theo dõi Ready coverage; nếu thấp, tăng thời gian refinement.
5. Xem lại ở retro: DoR có giúp giảm lỗi hiểu nhầm không?
