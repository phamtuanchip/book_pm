**Tên tài liệu:** Release Checklist — trước / trong / sau
**Dự án:** FoodNow MVP (áp dụng cho `v1.0.0`)
**Phiên bản / ngày:** v1.0 — 16/09/2026
**Mục đích & khi nào dùng:** Bảo đảm không bỏ sót bước trong một lần phát hành lên production; dùng cho mọi release và hotfix.

---

## A. Trước phát hành (T−7 đến T−1)

- [ ] Go/No-Go đã ký (Sponsor) — tham chiếu `go-no-go-checklist.md`
- [ ] Không còn bug Critical/High; Medium có kế hoạch
- [ ] Release branch đóng băng; chỉ tag đã qua UAT
- [ ] **Tag** `v1.0.0` đã tạo trên đúng commit và được bảo vệ
- [ ] Release notes (kỹ thuật + người dùng) đã duyệt
- [ ] Danh sách khác biệt cấu hình staging ↔ production đã rà (đặc biệt cache, khoá, endpoint)
- [ ] **Rollback plan** rõ (deploy lại `v0.16.0`/tag trước; dữ liệu/migration có đường lùi)
- [ ] Cutover rehearsal đã chạy trên staging; thời gian đo
- [ ] Giám sát và cảnh báo đã bật; ngưỡng đặt
- [ ] Đội hỗ trợ (CS) được đào tạo; kênh liên lạc go-live sẵn sàng
- [ ] Thông báo người dùng/khách/vendor; cửa sổ deploy đã thông báo
- [ ] Sao lưu production trước cutover; đã kiểm tra khôi phục

## B. Trong phát hành

- [ ] Bắt đầu đúng giờ (thứ Bảy 02:00); người phụ trách từng bước có mặt
- [ ] Đóng băng thay đổi khác; bật trang bảo trì (nếu có)
- [ ] Deploy theo runbook (đánh dấu từng bước, giờ)
- [ ] Kiểm tra nhanh (smoke test): đăng nhập, đặt đơn COD, thanh toán thẻ, nhận đơn nhà hàng, tài xế
- [ ] Theo dõi log/metric 30 phút đầu; so sánh với ngưỡng
- [ ] Điểm không quay lại (point of no return) được xác định và thông báo
- [ ] Nếu vượt ngưỡng lỗi: kích hoạt rollback theo tiêu chí đã thoả thuận

## C. Sau phát hành

- [ ] Smoke test lần hai (sau 1 giờ) và kiểm tra dữ liệu/đối soát thanh toán
- [ ] Thông báo hoàn tất tới stakeholder
- [ ] Bật hypercare (trực, kênh, SLA)
- [ ] Cập nhật `release-log.csv` (tag, giờ, người duyệt, môi trường)
- [ ] Đóng Fix Version trong Jira; gắn tag vào ticket
- [ ] Ghi bài học/sự cố; cập nhật runbook
- [ ] Merge back nhánh `release/*` vào `develop` (nếu chưa)

---

## Cách dùng cho dự án của bạn

1. Sao chép; xoá bước không áp dụng; thêm bước đặc thù (di chuyển dữ liệu, chứng nhận).
2. Gán người phụ trách cho từng mục.
3. Chạy rehearsal với checklist trước lần thật.
4. Lưu bản đã tích và ký cùng release log.
5. Sau mỗi release, thêm mục học được.
