**Tên tài liệu:** Cấu trúc thư mục tài liệu dự án và quy ước đặt tên
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 06/04/2026 (sau sự cố hai bản spec, tuần 14)
**Mục đích & khi nào dùng:** Chuẩn hoá nơi lưu tài liệu, đặt tên, phiên bản, quyền truy cập và nguồn sự thật; dùng ngay từ tuần đầu tiên.

---

## 1. Nguyên tắc

1. **Một nguồn sự thật duy nhất** cho mỗi loại thông tin (không lưu bản chính trong email/chat).
2. **Phiên bản có nhãn và ngày**; bản cũ giữ lại (archive), không xoá.
3. **Đặt tên nhất quán**, tìm được không cần hỏi.
4. **Quyền tối thiểu cần thiết**; dữ liệu khách hàng được bảo vệ.
5. Mỗi tài liệu có **chủ sở hữu**.

## 2. Cấu trúc (Confluence + kho tài liệu)

```
FoodNow/
├── 00-Quan-ly-du-an/        Charter, PM Plan, Baseline, RAID, Decision Log, báo cáo, biên bản
├── 01-Yeu-cau/              Scope, Epic, User Story, SRS, tiêu chí chấp nhận (do BA sở hữu)
├── 02-Thiet-ke/             UX/UI (Figma link), kiến trúc, ADR, API contract
├── 03-Phat-trien/           Chính sách nhánh, hướng dẫn build, coding convention
├── 04-Kiem-thu/             Quality Plan, test case, báo cáo test, UAT
├── 05-Phat-hanh/            Delivery Plan, release notes, runbook, cutover, rollback
├── 06-Van-hanh/             Hướng dẫn hỗ trợ, SLA, hypercare
├── 07-Vendor-Hop-dong/      Hợp đồng, SLA, scorecard (hạn chế quyền)
└── 99-Archive/              Bản cũ theo ngày
```

Mã nguồn ở Git (GitHub/GitLab); công việc ở Jira; thiết kế ở Figma. Mỗi thư mục có trang mục lục liên kết tới nơi chứa.

## 3. Quy ước đặt tên và phiên bản

- **Tên tệp:** `YYYY-MM-DD_Loai_Ten_vX.Y` (ví dụ `2026-02-13_Scope_FoodNow_v1.1`); trong Confluence dùng tiêu đề + nhãn phiên bản ở đầu.
- **Phiên bản:** `v0.x` = nháp; `v1.0` = được duyệt; `v1.1` = sửa nhỏ; `v2.0` = thay đổi lớn/baseline mới.
- Mỗi tài liệu đầu trang: **Chủ sở hữu · Phiên bản · Ngày · Trạng thái (Nháp/Đã duyệt/Lỗi thời)**.
- Tài liệu lỗi thời **đánh dấu rõ và chuyển vào Archive**; không xoá.

## 4. Phân quyền

| Thư mục | Đội dự án | Khách (Bảo, Châu) | Vendor |
|---|---|---|---|
| 00-Quan-ly | Đọc/viết | Đọc | — |
| 01–06 | Đọc/viết | Đọc (viết khi cần) | Đọc phần liên quan |
| 07-Vendor-Hop-dong | PM, Dũng | — | Bản thân vendor |
| Dữ liệu khách hàng thật | Chỉ môi trường được phép | — | — |

## 5. Quản lý quyết định

- **Decision Log** (`decision-log.csv`): mỗi quyết định có ngày, bối cảnh, phương án, người quyết, tác động, tài liệu liên quan.
- **ADR** (Architecture Decision Record) cho quyết định kỹ thuật, do Tech Lead sở hữu.

## 6. Sao lưu và bảo mật

- Confluence/Git/Figma dùng SSO; bật 2FA; sao lưu theo chính sách của công cụ; xuất kho tài liệu chính hằng tháng.
- **Không** lưu dữ liệu cá nhân/thẻ thật trong tài liệu; dùng dữ liệu giả.
- Khi thành viên rời đội: thu hồi quyền trong 1 ngày làm việc.

---

## Cách dùng cho dự án của bạn

1. Chốt cấu trúc thư mục trong Sprint 0; tạo trang mục lục.
2. Quy định tên tệp, nhãn phiên bản và chủ sở hữu.
3. Thiết lập quyền theo bảng ở mục 4; rà quyền mỗi quý.
4. Khởi tạo Decision Log từ cuộc họp đầu tiên; cập nhật mỗi khi có quyết định lớn.
5. Kiểm tra định kỳ: có tài liệu nào tồn tại ở hai nơi khác nhau không? Nếu có, chọn một nguồn và xoá bản còn lại (hoặc trỏ liên kết).
