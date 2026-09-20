**Tên tài liệu:** Deployment Runbook — cutover `v1.0.0` và deploy thường ngày
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 16/09/2026 (cutover); phần B cập nhật 09/11/2026
**Mục đích & khi nào dùng:** Hướng dẫn từng bước, người phụ trách và điều kiện dừng cho một lần deploy; người trực đêm làm theo mà không cần hỏi.

---

## Phần A — Cutover `v1.0.0` (thứ Bảy 03/10/2026, 02:00)

| # | Giờ | Bước | Người | Xác nhận | Nếu lỗi |
|---|---|---|---|---|---|
| 1 | 01:30 | Họp go-live 15': kiểm tra danh sách; xác nhận Go | Hà | Bảo xác nhận | Hoãn |
| 2 | 01:45 | Sao lưu DB production; kiểm tra bản sao | Ánh | Bản sao đọc được | Dừng |
| 3 | 02:00 | Bật trang bảo trì; đóng băng thay đổi | Ánh | Trang hiển thị | — |
| 4 | 02:05 | Chạy migration DB (đơn hàng) | Dũng | Migration thành công | **Rollback DB từ bản sao** |
| 5 | 02:15 | Deploy backend `v1.0.0` (từ tag) | Ánh | Health check xanh | Rollback `v0.16.0` |
| 6 | 02:30 | Deploy web nhà hàng/Admin `v1.0.0` | Ánh | Health check xanh | Rollback |
| 7 | 02:40 | **Điểm không quay lại**: kích hoạt PayEasy live | Dũng | Giao dịch thử thành công | Giữ COD; tắt thẻ |
| 8 | 02:45 | Smoke test: đăng nhập, đặt đơn COD/thẻ, nhà hàng nhận, tài xế nhận | Nam | 100% pass | Điều tra hoặc rollback |
| 9 | 03:15 | Mở app store phát hành (đã duyệt sẵn) | Khoa | Phiên bản khả dụng | — |
| 10 | 03:30 | Tắt trang bảo trì; thông báo | Hà | Kênh go-live | — |
| 11 | 04:00 | Theo dõi metric; báo cáo giờ đầu | Dũng/Nam | Trong ngưỡng | Kích hoạt war room |

**Tiêu chí rollback:** tỷ lệ lỗi đặt đơn > 5% trong 10 phút, hoặc mất/lệch tiền, hoặc sập dịch vụ.
**Đường lùi:** deploy lại tag `v0.16.0` (staging đã diễn tập ≤ 30 phút), khôi phục DB nếu migration đã chạy.

## Phần B — Deploy thường ngày (mô hình B)

1. PR merge vào `main` → pipeline chạy (Ch33).
2. Staging tự động → smoke/regression.
3. Rủi ro thấp: canary 10% → theo dõi 15 phút → rollout 100%; rủi ro cao: Tech Lead duyệt.
4. Vượt ngưỡng lỗi → rollback tự động; thông báo; điều tra sau.
5. Ghi change record tự sinh; cập nhật `release-log.csv` cho tag.

## Liên hệ khẩn

| Vai trò | Người | Kênh |
|---|---|---|
| Chỉ huy cutover | Hà | Điện thoại + kênh go-live |
| Kỹ thuật | Dũng | Điện thoại |
| DevOps | Ánh | Điện thoại |
| QA | Nam | Điện thoại |
| Sponsor | Bảo | Điện thoại (Go/No-Go, tiền/dữ liệu) |
| Vendor thanh toán | Yến | Hotline PayEasy |

---

## Cách dùng cho dự án của bạn

1. Viết runbook cụ thể theo giờ, người, xác nhận, nếu lỗi.
2. Diễn tập trên staging ít nhất một lần; đo thời gian thật.
3. Xác định điểm không quay lại và tiêu chí rollback bằng số.
4. In ra giấy cho phòng chỉ huy; cập nhật sau mỗi lần dùng.
5. Sau release, ghi thời gian thực tế so với kế hoạch.
