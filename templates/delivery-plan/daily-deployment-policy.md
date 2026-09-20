**Tên tài liệu:** Chính sách Daily Deployment — backend/web FoodNow
**Dự án:** FoodNow (từ tuần 44)
**Phiên bản / ngày:** v1.0 — 09/11/2026
**Mục đích & khi nào dùng:** Quy định điều kiện, cửa sổ, chính sách và trách nhiệm khi deploy hằng ngày; dùng cho repo đã chuyển sang mô hình B.

---

## 1. Điều kiện tiên quyết (phải đạt mới được deploy hằng ngày)

- [ ] Test tự động đáng tin: unit ≥ 70% (thanh toán ≥ 85%), regression tự động, tỷ lệ flaky < 2%
- [ ] Trunk-based; PR nhỏ (≤ 200 dòng lý tưởng), review ≤ 4 giờ
- [ ] Feature flag cho mọi tính năng chưa hoàn chỉnh
- [ ] Monitoring, log, cảnh báo cho luồng đặt đơn và thanh toán
- [ ] Rollback ≤ 10 phút (tự động hoặc một nút)
- [ ] On-call rõ ràng

## 2. Cửa sổ deploy

| Loại | Cửa sổ | Ghi chú |
|---|---|---|
| Thay đổi thường | Thứ Hai–Năm 09:00–16:00 | Có người trực |
| Thứ Sáu | Trước 12:00; **không deploy sau 12:00** | Tránh cuối tuần |
| Trước lễ (≥ 1 ngày làm việc) | **Cấm** | Trừ hotfix |
| Cuối tuần | Chỉ hotfix có duyệt | |
| Lưu lượng cao (bữa trưa 11:00–13:00, tối 18:00–21:00) | Tránh; canary vẫn được nhưng hoãn rollout 100% | Tối ưu cho doanh nghiệp giao đồ ăn |

## 3. Phê duyệt

- Thay đổi rủi ro thấp (không đụng thanh toán/DB): **tự động** nếu pipeline xanh và ngoài cửa sổ cấm.
- Thay đổi rủi ro cao (thanh toán, migration, hạ tầng): **Tech Lead duyệt** trong pipeline.
- **Change record** tự sinh từ pipeline (tag, người commit, người duyệt, thời điểm, kết quả) phục vụ kiểm toán.

## 4. Khi deploy hỏng

1. Tắt feature flag hoặc **rollback** (mục tiêu ≤ 10 phút) — **trước khi điều tra**.
2. Thông báo kênh sự cố; ghi thời gian.
3. Sửa tiếp bằng PR nhỏ; deploy lại khi pipeline xanh.
4. Post-incident review trong 48 giờ (không đổ lỗi).

## 5. On-call

Lịch luân phiên 1 tuần; người trực trả lời cảnh báo trong 15 phút; có runbook; được bù giờ nếu trực ngoài giờ.

## 6. Chỉ số (DORA) — dùng cho hệ thống, không chấm điểm cá nhân

| Chỉ số | Mục tiêu sau 12 tuần |
|---|---|
| Deployment Frequency | Hằng ngày (≥ 1/ngày làm việc) |
| Lead Time for Changes | < 1 ngày (mục tiêu ≤ 8 giờ) |
| Change Failure Rate | ≤ 15% (thực tế 9%) |
| Time to Restore | < 1 giờ |

## 7. Giới hạn

- Mobile: **không** daily deploy bản app; chỉ backend/web/remote config; app theo release train 2 tuần.
- Thay đổi bắt buộc kiểm toán ngoài (nếu có) theo quy trình riêng.

---

## Cách dùng cho dự án của bạn

1. Chỉ bật khi đủ điều kiện mục 1; ghi ngày đạt từng điều kiện.
2. Điều chỉnh cửa sổ theo giờ cao điểm của doanh nghiệp bạn.
3. Xác định "rủi ro cao" bằng danh sách cụ thể.
4. Diễn tập rollback mỗi tháng.
5. Theo dõi DORA hằng tuần; xem xét lại chính sách mỗi quý.
