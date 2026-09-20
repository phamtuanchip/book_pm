**Tên tài liệu:** Quy trình Hotfix
**Dự án:** FoodNow (áp dụng từ go-live 03/10/2026)
**Phiên bản / ngày:** v1.0 — 20/09/2026 (dùng thật ngày 03/10/2026 với `v1.0.1`)
**Mục đích & khi nào dùng:** Sửa nhanh và an toàn lỗi nghiêm trọng đang chạy trên production; dùng khi có sự cố mức Critical/High không thể chờ release thường.

---

## 1. Khi nào là hotfix

Lỗi trên production gây: mất/lệch tiền, không đặt được đơn, sập dịch vụ, lộ dữ liệu, hoặc vi phạm SLA. Nếu có cách giảm nhẹ (tắt feature flag, rollback nhanh), **làm trước; hotfix sau**.

## 2. Các bước

1. **Ổn định** (5–30 phút): tắt flag/rollback/áp dụng workaround; thông báo kênh sự cố.
2. **Tạo nhánh** `hotfix/x.y.z` **từ tag production** hiện tại (ví dụ `v1.0.0` → `hotfix/1.0.1`).
3. **Sửa tối thiểu**: chỉ sửa nguyên nhân; thêm test tái hiện lỗi.
4. **Review nhanh**: PR với 1 approver (Tech Lead) — ghi nhận Hà/Bảo đã duyệt khẩn.
5. **Kiểm thử**: CI xanh; smoke test trên staging giống production.
6. **Tag PATCH**: `v1.0.1` trên nhánh hotfix.
7. **Deploy** theo runbook; theo dõi 30 phút.
8. **Back-merge**: merge hotfix về **`main`** và **`develop`** (bắt buộc).
9. **Phê duyệt ghi nhận**: ai duyệt, giờ nào (release log); hồ sơ CR khẩn (Ch20).
10. **Rút bài học** trong 48 giờ (post-incident review).

## 3. Phê duyệt khẩn cấp

| Vai trò | Quyền | Hạn phản hồi |
|---|---|---|
| Hà (PM) | Đề xuất và duyệt kế hoạch | 15 phút |
| Dũng (TL) | Duyệt kỹ thuật | 15 phút |
| Bảo (Sponsor) | Được thông báo; duyệt nếu ảnh hưởng dữ liệu/tiền | 30 phút |

## 4. Ví dụ: `v1.0.1` (03/10/2026)

| Giờ | Sự kiện |
|---|---|
| 02:00 | Cutover `v1.0.0` |
| 02:40 | Cảnh báo: giá và trạng thái đơn hiển thị không nhất quán (cache) |
| 03:10 | War room; xác định nguyên nhân: TTL cache cấu hình khác production |
| 06:10 | Xả cache và giảm TTL thủ công → ổn định (~4 giờ đầu) |
| 11:30 | Tag `v1.0.1` (chuẩn hoá cấu hình cache) |
| 12:10 | Deploy `v1.0.1`; theo dõi 30 phút |
| 13:00 | Back-merge `main`/`develop`; thông báo hoàn tất |

## 5. Không làm

- Không sửa tay trực tiếp trên server; không bỏ qua test; không gộp tính năng mới vào hotfix; không quên back-merge.

---

## Cách dùng cho dự án của bạn

1. Điền danh sách người duyệt và hạn phản hồi thực tế.
2. Diễn tập hotfix trên staging một lần trước go-live.
3. Chuẩn bị mẫu thông báo sự cố (Ch38).
4. Đặt checklist bước 8 (back-merge) dễ thấy nhất.
5. Sau mỗi hotfix, rà xem có thể phòng ngừa bằng kiểm thử/cấu hình chuẩn hoá không.
