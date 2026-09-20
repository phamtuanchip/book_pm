**Tên tài liệu:** Team Charter & Working Agreement — Đội FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 14/01/2026 (Sprint 0), do cả đội cùng thống nhất
**Mục đích & khi nào dùng:** Ghi lại mục đích đội, vai trò, quy tắc làm việc và định nghĩa Ready/Done sơ bộ; dùng trong Sprint 0 và xem lại mỗi 4–6 sprint (ở retro).

---

## 1. Team Charter

**Sứ mệnh đội:** Giao MVP FoodNow đúng mốc 03/10/2026, chất lượng thanh toán bất khả nhượng, và làm việc theo cách để không ai phải làm đêm hai tuần liên tiếp.

**Giá trị của đội:** nói thật sớm · tôn trọng thời gian nhau · quyết định có dấu vết · học từ lỗi, không đổ lỗi.

**Cơ cấu (12 người tương đương FTE; UX và DevOps 50%):**

| Vai trò | Người | Ghi chú |
|---|---|---|
| Project Manager | Nguyễn Thu Hà | |
| Business Analyst | Vũ Thị Lan | |
| Tech Lead | Phạm Đức Dũng | |
| Backend (2) | Ngô Thanh Sơn; 1 Backend điều động từ dự án nội bộ (vào 26/01/2026) | Thiếu 1 vị trí từ kickoff |
| Mobile (3) | Đặng Văn Khoa, Bùi Tuấn, Lý Quỳnh | iOS + Android |
| Web/Admin FE (1) | Thành viên FE của BrightSoft | Web nhà hàng + Admin |
| QA (2) | Đỗ Hoàng Nam (Lead) + 1 QA | |
| UX/UI (50%) | Hoàng Mai Anh | Chia sẻ dự án khác |
| DevOps (50%) | Trịnh Ngọc Ánh | Hạ tầng, CI/CD |

## 2. Working Agreement

| Chủ đề | Thoả thuận |
|---|---|
| **Giờ làm việc** | 09:00–17:30; khung trùng lặp bắt buộc 10:00–16:00 (kể cả làm từ xa) |
| **Daily Scrum** | 08:45, tối đa 15 phút; chỉ nói mục tiêu hôm nay và blocker; thảo luận sâu để sau |
| **Giao tiếp** | Hỏi nhanh: Slack kênh dự án (phản hồi trong 2 giờ làm việc); quyết định: ghi Confluence; khẩn: gọi + [KHẨN] |
| **Code review** | PR nhỏ (< 400 dòng); review trong 24 giờ; tối thiểu 1 approver; CI xanh mới merge |
| **Nhánh** | Theo chính sách nhánh (Ch31); nhánh sống ≤ 5 ngày |
| **Tài liệu** | Nguồn sự thật duy nhất ở Confluence; không lưu bản chính trong chat/email |
| **Họp** | Có agenda; kết thúc bằng quyết định–hành động–người–hạn; không họp trước 09:00 và sau 17:30 |
| **Làm thêm giờ** | Ngoại lệ, có PM đồng ý; không quá 2 tuần liền; bù nghỉ |
| **Báo tin xấu** | Báo ngay khi phát hiện, kèm phương án; không đổ lỗi |
| **Bất đồng** | Nêu phương án và đánh đổi; nếu 2 ngày chưa chốt → chuyển Tech Lead (kỹ thuật) hoặc PM (ràng buộc) |
| **Vắng mặt** | Báo trước ≥ 2 ngày; bàn giao việc đang làm |

## 3. Definition of Ready / Done (sơ bộ)

**Definition of Ready (story sẵn sàng vào sprint):**
- [ ] Có mô tả người dùng – mục đích – giá trị
- [ ] Có tiêu chí chấp nhận kiểm tra được
- [ ] Thiết kế UX (nếu cần) đã duyệt
- [ ] Phụ thuộc đã rõ; đã ước lượng
- [ ] Vừa trong một sprint

**Definition of Done (story hoàn thành):**
- [ ] Code đã review và merge
- [ ] Unit test viết và xanh; coverage không giảm
- [ ] QA kiểm thử theo tiêu chí chấp nhận
- [ ] Không còn bug Critical/High liên quan
- [ ] Tài liệu/API được cập nhật
- [ ] PO chấp nhận trong Review

(Bản đầy đủ: `templates/quality/definition-of-done.md`, Ch15.)

## 4. Cam kết và chữ ký

Chúng tôi đồng ý làm theo thoả thuận này và sửa đổi khi retro thấy cần.

| Người | Ngày |
|---|---|
| Toàn đội (ghi nhận tại buổi họp 14/01/2026) | 14/01/2026 |

---

## Cách dùng cho dự án của bạn

1. Tổ chức workshop 60–90 phút trong Sprint 0; để cả đội đề xuất, đừng PM tự viết.
2. Chốt từng mục bằng câu "chúng ta có thể sống với điều này không?" — ai phản đối thì sửa.
3. Ghi cụ thể bằng số (giờ, ngày, dòng code) thay vì "sớm", "nhỏ".
4. In/đặt ở nơi đội thấy hằng ngày; nhắc lại khi có người mới.
5. Xem lại ở retro mỗi 4–6 sprint; đổi nếu thấy không hiệu quả.
