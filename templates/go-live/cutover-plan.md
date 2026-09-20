**Tên tài liệu:** Cutover Plan — FoodNow MVP (`v1.0.0`)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 16/09/2026 (sau Go); diễn tập 10/09 (24 phút), 24/09 và 28/09
**Mục đích & khi nào dùng:** Kế hoạch chuyển từ hệ thống cũ (app bên thứ ba) sang hệ thống mới theo giờ, từ T−7 ngày đến T+7 ngày; dùng cho go-live.

---

## 1. Chiến lược phát hành

**Phased (theo giai đoạn) kết hợp canary**: đêm 03/10 chuyển hệ thống; **40 nhà hàng và 90 tài xế** đầu tiên đã được đào tạo; khách hàng đón nhận qua app store và chiến dịch marketing dồn về **Chủ nhật–thứ Hai** để có 1–2 ngày an toàn. Không big bang vì rủi ro cao; không blue-green vì chi phí hạ tầng.

## 2. Lịch theo ngày (T = thứ Bảy 03/10/2026)

| Mốc | Việc | Người |
|---|---|---|
| T−7 (26/09) | Freeze thay đổi; rà checklist Go/No-Go; thông báo lịch cutover | Hà |
| T−5 (28/09) | Diễn tập cutover lần 2 trên staging (mục tiêu ≤ 30 phút) | Dũng, Ánh |
| T−3 (30/09) | Đào tạo cuối cho nhà hàng/tài xế; xác nhận danh sách 40 + 90 | Lan |
| T−2 (01/10) | Sao lưu prod hiện tại; kiểm tra khôi phục; xác nhận PayEasy live | Ánh, Dũng |
| T−1 (02/10) | Tag `v1.0.0` (18:00); họp go-live 17:00; trực đội | Dũng, Hà |
| **T (03/10)** | **Cutover 02:00–06:00** (runbook) | Cả đội |
| T+1 (04/10) | Theo dõi; daily 08:30; báo cáo ngày | Hà |
| T+7 (10/10) | Rà tuần đầu; điều chỉnh hypercare | Hà |

## 3. Timeline đêm cutover (02:00 thứ Bảy)

| Giờ | Việc | Người | Xác nhận |
|---|---|---|---|
| 01:30 | Họp 15': xác nhận Go, danh sách mặt | Hà, Bảo | Go |
| 01:45 | Sao lưu DB và kiểm tra | Ánh | Bản sao đọc được |
| 02:00 | Bật trang bảo trì; đóng băng | Ánh | |
| 02:05 | Migration DB | Dũng | Thành công |
| 02:15 | Deploy backend `v1.0.0` | Ánh | Health xanh |
| 02:30 | Deploy web/Admin | Ánh | Health xanh |
| 02:40 | **Điểm không quay lại**: PayEasy live | Dũng | Giao dịch thử |
| 02:45 | Smoke test | Nam | 100% |
| 03:15 | Phát hành app store (đã duyệt) | Khoa | Khả dụng |
| 03:30 | Tắt trang bảo trì; thông báo | Hà | |
| 04:00–06:00 | Giám sát, báo cáo giờ | Dũng, Nam | Trong ngưỡng |

## 4. Di chuyển dữ liệu

- Hồ sơ **nhà hàng và thực đơn** (40 nhà hàng) nhập từ bảng do FoodNow cung cấp (D-03) đã qua kiểm tra; đối chiếu số lượng và mẫu 10%.
- **Không** di chuyển đơn cũ từ app bên thứ ba (ngoài phạm vi); giữ tài khoản khách mới đăng ký.

## 5. Truyền thông go-live

| Đối tượng | Nội dung | Khi nào | Người |
|---|---|---|---|
| Đội | Kế hoạch giờ, vai trò | T−1 17:00 | Hà |
| Sponsor/HĐQT | Tình trạng theo giờ | T 01:30, 03:30, 06:30 | Hà |
| Nhà hàng/tài xế | Thông báo sẵn sàng, hotline | T−1 và T 07:00 | Lan |
| Khách | Thông báo ra mắt, marketing | T+1 | FoodNow Marketing |
| CS | Kịch bản hỗ trợ, đường dây nóng | T−2 | Huy |

## 6. Tiêu chí thành công và rollback

- Thành công: smoke 100%; lỗi đặt đơn < 1% trong 4 giờ đầu; đối soát khớp.
- Rollback: xem `rollback-plan.md`.

---

## Cách dùng cho dự án của bạn

1. Chọn chiến lược phát hành (big bang, phased, canary, blue-green) theo rủi ro.
2. Lập lịch theo ngày và theo giờ cho đêm cutover; gán người và xác nhận.
3. Xác định điểm không quay lại và cách xử lý dữ liệu.
4. Diễn tập ít nhất hai lần; đo thời gian thật.
5. Chuẩn bị truyền thông cho từng nhóm.
