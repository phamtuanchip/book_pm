**Tên tài liệu:** Agenda Scrum of Scrums (SoS) — hai đội FoodNow
**Dự án:** FoodNow R1–R2 (kế hoạch tách đội)
**Phiên bản / ngày:** v1.0 — 28/12/2026 (tuần 52)
**Mục đích & khi nào dùng:** Phối hợp giữa các đội Scrum: phụ thuộc chéo, rủi ro chung, đồng bộ release; dùng khi có từ 2 đội trở lên.

---

## 1. Thông tin

| Mục | Nội dung |
|---|---|
| Đội | **Đội Mobile** (Khoa, Tuấn, Quỳnh, QA Mobile) · **Đội Backend+Web** (Backend thay thế Sơn, Backend 2, FE Web, QA Backend) |
| Người tham dự SoS | 1 đại diện mỗi đội (thường Tech Lead/Scrum Master) + PM (dự thính) + DevOps |
| Nhịp | 2 lần/tuần (thứ Hai, thứ Năm), 20 phút |
| Kênh | Họp ngắn + bảng phụ thuộc chéo đội |

## 2. Agenda 20 phút

| Phút | Nội dung | Câu hỏi |
|---|---|---|
| 0–5 | **Tiến độ từng đội** | Từ lần họp trước, đội bạn đã làm gì ảnh hưởng đội khác? |
| 5–12 | **Phụ thuộc chéo đội** (bảng) | Đội bạn đang chờ gì từ đội khác? Ngày cần vs ngày hứa? |
| 12–16 | **Chặn và rủi ro chung** | Điều gì có thể làm cả hai đội trễ? Cần leo thang? |
| 16–20 | **Đồng bộ release** | Có thay đổi API/hợp đồng nào cần thông báo trước? Freeze, cửa sổ deploy? |

## 3. Quy tắc

1. Không thảo luận giải pháp dài; hẹn cuộc họp riêng giữa đội liên quan.
2. Mỗi phụ thuộc có **chủ sở hữu** ở đội cung cấp, **ngày cần** và **ngày hứa**.
3. Thay đổi API (breaking) phải thông báo tại SoS **trước ≥ 1 sprint**.
4. Đại diện SoS mang thông tin về lại đội trong 1 giờ.

## 4. Đầu ra

- Bảng phụ thuộc chéo đội cập nhật (`cross-team-dependency-board.csv`).
- Danh sách chặn cần PM leo thang.
- Lịch release chung (nối Delivery Plan, Ch30).

---

## Cách dùng cho dự án của bạn

1. Chọn đại diện từng đội; giữ họp ≤ 20 phút.
2. Đặt bảng phụ thuộc chéo đội làm tài liệu trung tâm; cập nhật ngay trong họp.
3. Chỉ mời thêm người khi có phụ thuộc thực sự.
4. Nếu SoS thường xuyên kéo dài hoặc lặp đi lặp lại vấn đề cũ, xem lại ranh giới đội (Ch26).
5. Xem lại hiệu quả sau 3 sprint: giảm phụ thuộc hay chỉ báo cáo?
