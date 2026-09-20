**Tên tài liệu:** Báo cáo sự cố (Incident Report) — INC-001: sự cố cache giờ đầu go-live
**Dự án:** FoodNow MVP — production
**Phiên bản / ngày:** v1.0 — 05/10/2026 (post-incident review 05/10; sự cố xảy ra 03/10/2026)
**Mục đích & khi nào dùng:** Ghi lại sự cố production: dòng thời gian, tác động, nguyên nhân gốc, hành động; dùng trong 48 giờ sau mọi sự cố mức P1/P2.

---

## 1. Tóm tắt

| Mục | Nội dung |
|---|---|
| Mã / mức | INC-001 / **P1** (giá và trạng thái đơn không nhất quán) |
| Thời gian ảnh hưởng | 02:40 – 06:10, 03/10/2026 (**3 giờ 30 phút** từ khi phát hiện; ≈ 4 giờ từ cutover) |
| Tác động | 38 khách thấy giá/thực đơn cũ; 42 đơn có giá hiển thị lệch; **không mất tiền** (thanh toán đối soát khớp); 15 ticket CS |
| Nguyên nhân gốc | TTL cache cấu hình khác nhau giữa staging (60 giây) và production (300 giây) + khoá cache không phân phiên bản sau migration |
| Khắc phục | Xả cache và giảm TTL thủ công (06:10); hotfix `v1.0.1` chuẩn hoá cấu hình (deploy 12:10) |
| Chủ sự cố | Dũng (kỹ thuật), Hà (điều phối/truyền thông) |

## 2. Dòng thời gian

| Giờ | Sự kiện |
|---|---|
| 02:00 | Cutover `v1.0.0` bắt đầu |
| 02:40 | Cảnh báo: chênh lệch giá/trạng thái đơn giữa app và Admin |
| 02:50 | Nam xác nhận lỗi trên smoke test lần hai |
| 03:10 | Mở **war room**; phân công: Dũng điều tra, Ánh hạ tầng, Nam kiểm tra, Hà truyền thông |
| 03:30 | Loại trừ lỗi code và PayEasy; nghi ngờ cache |
| 04:15 | Xác định TTL cache khác nhau và khoá cache không có phiên bản |
| 05:00 | Quyết định **không rollback** (dữ liệu migration đã chạy; rollback rủi ro hơn) |
| 06:10 | Xả cache, giảm TTL → **ổn định**; smoke test đạt |
| 06:30 | Thông báo Sponsor và CS: đã khắc phục tạm thời |
| 11:30 | Tag `v1.0.1` |
| 12:10 | Deploy `v1.0.1`; theo dõi 30 phút |
| 13:00 | Đóng sự cố; hypercare tiếp tục |

## 3. Nguyên nhân gốc (5 lần "vì sao")

1. Vì sao khách thấy giá cũ? → Cache trả dữ liệu cũ.
2. Vì sao cache cũ? → TTL 300 giây và khoá không đổi sau migration.
3. Vì sao TTL khác staging? → Cấu hình đặt tay theo môi trường.
4. Vì sao không phát hiện ở UAT? → Staging dùng TTL 60 giây nên lỗi không tái hiện.
5. Vì sao khác biệt cấu hình không được chuẩn hoá? → TD-06 bị đánh giá rủi ro thấp và hoãn.

## 4. Điều làm tốt / chưa tốt

**Tốt:** phát hiện trong 40 phút nhờ giám sát; war room có vai trò rõ; quyết định không rollback có lập luận; thông báo trung thực.
**Chưa tốt:** khác biệt cấu hình đã biết nhưng chưa xử lý; smoke test không kiểm tra cập nhật thực đơn giữa hai lần chạy.

## 5. Hành động

| # | Hành động | Người | Hạn |
|---|---|---|---|
| 1 | Chuẩn hoá cấu hình cache; xoá khác biệt staging–production (`v1.0.1`) | Ánh | Xong 03/10 |
| 2 | Thêm phiên bản vào khoá cache và invalidation khi cập nhật thực đơn | Dũng | 09/10 |
| 3 | Thêm smoke test "cập nhật thực đơn → hiển thị" | Nam | 09/10 |
| 4 | Nâng rủi ro TD-06 lên 5; rà mọi khoản nợ hạ tầng | Dũng | 16/10 |
| 5 | Thêm "config diff staging–production" vào checklist mỗi release | Hà | 09/10 |

---

## Cách dùng cho dự án của bạn

1. Viết trong 48 giờ; dùng ngôn ngữ không đổ lỗi.
2. Đặt dòng thời gian bằng dữ liệu (log, chat), không bằng trí nhớ.
3. Tìm nguyên nhân gốc bằng "5 vì sao" đến khi chạm quy trình.
4. Mỗi hành động có người và hạn; theo dõi ở Action Item Log.
5. Chia sẻ báo cáo với đội và Sponsor; tổng kết ở retro.
