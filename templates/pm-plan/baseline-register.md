**Tên tài liệu:** Baseline Register — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/03/2026
**Mục đích & khi nào dùng:** Ghi lại các baseline (scope, lịch, chi phí) đã được duyệt và mọi thay đổi baseline; dùng để so sánh kế hoạch với thực tế và truy vết thay đổi.

---

## 1. Baseline hiện hành

| ID | Loại | Nội dung | Tài liệu | Giá trị chính | Ngày duyệt | Người duyệt |
|---|---|---|---|---|---|---|
| BL-S-01 | Scope | 11 epic in-scope, 7 out-of-scope; WBS 66 work package | Scope Statement v1.1; WBS v1.0 | 1.927 ngày công | 13/02/2026 | Bảo, Châu |
| BL-T-01 | Lịch | Gantt, Schedule; đường găng 131 ngày làm việc | Gantt v1.0 (27/02) | Go-live 03/10/2026 | 27/02/2026 | Bảo |
| BL-C-01 | Chi phí | 2.140 triệu + dự phòng 256,8 = 2.396,8 | Budget v1.0 (02/03) | Trần 2.400 triệu | 02/03/2026 | Bảo |
| BL-Q-01 | Chất lượng | Không bug Critical/High khi go-live | Quality Plan v1.0 (09/03) | 0 Critical/High | 09/03/2026 | Bảo, Nam |

## 2. Quy tắc đổi baseline

- Chỉ đổi baseline qua **Change Request** được CCB duyệt; không sửa trực tiếp.
- Mỗi thay đổi: lý do, tác động, người duyệt, phiên bản mới; **giữ nguyên bản cũ** để so sánh.
- Đổi baseline không được dùng để "làm đẹp" số liệu (ví dụ dời baseline để SPI = 1).

## 3. Lịch sử thay đổi baseline

| # | Ngày | Baseline | Thay đổi | CR | Quyết định |
|---|---|---|---|---|---|
| 1 | 13/02/2026 | Scope | v1.0 → v1.1: ví điện tử → R2 | (thoả thuận tuần 6) | Duyệt |
| 2 | 09–13/03/2026 | Scope | Yêu cầu đưa "đặt món theo nhóm" vào MVP | CR-001 | **Không đổi baseline** — giữ ở R2 |

(Các thay đổi sau được ghi thêm theo thời gian; xem Change Log ở Ch20.)

---

## Cách dùng cho dự án của bạn

1. Sau khi Sponsor duyệt scope/lịch/chi phí, ghi mỗi baseline một dòng với tài liệu và phiên bản.
2. Đưa quy tắc đổi baseline vào PM Plan; ai được duyệt loại thay đổi nào.
3. Mỗi lần đổi, thêm dòng vào lịch sử và lưu bản cũ.
4. Khi báo cáo tiến độ, so với baseline hiện hành và nói rõ baseline nào.
5. Cuối dự án, dùng bảng này làm nguyên liệu cho lessons learned.
