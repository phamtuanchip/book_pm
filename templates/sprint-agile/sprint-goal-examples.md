**Tên tài liệu:** Ví dụ Sprint Goal tốt và chưa tốt — FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 02/03/2026
**Mục đích & khi nào dùng:** Mẫu và phản mẫu để viết Sprint Goal; dùng ở Sprint Planning và khi review chất lượng Goal.

---

## 1. Sprint Goal là gì

**Sprint Goal** là một câu nêu **mục tiêu giá trị** của sprint — lý do đội làm sprint này. Nó mềm dẻo ở việc chọn story nhưng **cố định về mục đích**. Goal giúp đội quyết định khi phải cắt việc giữa sprint: giữ cái phục vụ Goal.

## 2. Công thức

**[Ai] có thể [làm gì] để [giá trị], được chứng minh bằng [tiêu chí demo].**

## 3. Ví dụ tốt (FoodNow)

| Sprint | Sprint Goal | Vì sao tốt |
|---|---|---|
| Sprint 2 | Khách hàng đăng ký/đăng nhập bằng OTP và duyệt danh sách nhà hàng trên app (staging). | Có người dùng, hành động, demo được |
| Sprint 3 | Khách hàng thêm món vào giỏ và tạo đơn đầu tiên (chưa thanh toán) trên staging. | Luồng end-to-end đầu tiên |
| Sprint 4 | Nhà hàng nhận và xác nhận đơn trên tablet; đơn hiển thị trạng thái cho khách. | Nối hai phía |
| Sprint 5 | Thanh toán COD hoạt động end-to-end; sandbox PayEasy kết nối được. | Giảm rủi ro đường găng |
| Sprint 8 | Tài xế nhận chuyến và cập nhật trạng thái giao; khách theo dõi được vị trí. | Giá trị cho 3 vai trò |
| Sprint 11 | Hoàn tất toàn bộ tính năng MVP; regression xanh; sẵn sàng feature freeze. | Mục tiêu mốc |

## 4. Phản mẫu

| Goal chưa tốt | Vấn đề | Sửa lại |
|---|---|---|
| "Làm xong 12 story trong backlog" | Danh sách việc, không có giá trị | "Khách tạo được đơn đầu tiên trên staging" |
| "Cải thiện app" | Mơ hồ, không kiểm chứng | "Thời gian tải danh sách nhà hàng < 2 giây (p95)" |
| "Hoàn thành mọi task của Backend" | Theo người, không theo giá trị | "API thanh toán COD sẵn sàng cho app" |
| "Fix bug" | Không nói bug nào, giá trị gì | "Không còn bug Critical trong luồng đặt đơn" |

## 5. Checklist Sprint Goal

- [ ] Một câu, có người dùng và giá trị
- [ ] Demo/kiểm chứng được
- [ ] Đạt được trong một sprint với capacity thật
- [ ] Ưu tiên rủi ro (phụ thuộc bên ngoài, đường găng) sớm
- [ ] PO đồng ý

---

## Cách dùng cho dự án của bạn

1. Với mỗi sprint, thử viết Goal bằng công thức ở mục 2 trước khi chọn story.
2. Nếu không viết được Goal, kiểm tra lại: backlog có ưu tiên theo giá trị chưa?
3. Dùng Goal để quyết định cắt việc khi trễ (giữ việc phục vụ Goal).
4. Đọc Goal ở Daily Scrum và Sprint Review.
5. Sau sprint, hỏi: Goal có đạt không, có đúng loại Goal không?
