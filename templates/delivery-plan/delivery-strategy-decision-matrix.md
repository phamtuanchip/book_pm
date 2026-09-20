**Tên tài liệu:** Ma trận chọn chiến lược delivery: (A) Release theo kế hoạch/GitFlow vs (B) Trunk-based + Daily deploy
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 30/01/2026 (MVP) và bản cập nhật 02/11/2026 (sau go-live)
**Mục đích & khi nào dùng:** Chọn có lý do giữa hai mô hình delivery; dùng ở Sprint 0 và khi bối cảnh đổi.

---

## 1. Tiêu chí và điểm (1–5; 5 = rất hợp)

| # | Tiêu chí | Câu hỏi | Trọng số | A: theo kế hoạch | B: daily deploy | Ghi chú MVP (T4) |
|---|---|---|---|---|---|---|
| 1 | Quy mô và kinh nghiệm đội | Đội có quen trunk-based, PR nhỏ? | 15% | 4 | 2 | Backend mới, đội chưa ổn định |
| 2 | Mức tự động hoá test | Test tự động đáng tin chưa? | 20% | 3 | 1 | Chưa có regression tự động |
| 3 | Tuân thủ/kiểm toán | Cần vết duyệt, UAT chính thức? | 15% | 5 | 3 | Thanh toán + UAT |
| 4 | Hợp đồng theo mốc | Thanh toán theo mốc phát hành? | 15% | 5 | 3 | 7 mốc thanh toán |
| 5 | Loại sản phẩm | Mobile hay web/backend? | 10% | 5 | 2 | 3 app mobile/tablet |
| 6 | Tần suất khách muốn nhận | Khách muốn bản hằng ngày? | 10% | 4 | 3 | Chỉ nhận ở sprint review |
| 7 | Hạ tầng và giám sát | Có canary, rollback nhanh, monitoring? | 15% | 3 | 1 | Hạ tầng đang dựng |
| | **Điểm có trọng số** | | 100% | **4,05** | **2,05** | → **Chọn A cho MVP** |

Cách tính: `Σ trọng số × điểm`. A = 0,15×4 + 0,20×3 + 0,15×5 + 0,15×5 + 0,10×5 + 0,10×4 + 0,15×3 = **4,05**. B = 0,15×2 + 0,20×1 + 0,15×3 + 0,15×3 + 0,10×2 + 0,10×3 + 0,15×1 = **2,05**.

## 2. Bản cập nhật sau go-live (02/11/2026) — chỉ backend/web

| # | Tiêu chí | Trọng số | A | B |
|---|---|---|---|---|
| 1 | Quy mô và kinh nghiệm đội (đã quen sau 9 tháng) | 15% | 3 | 4 |
| 2 | Test tự động (regression ≥ 70%, contract test) | 20% | 3 | 4 |
| 3 | Tuân thủ/kiểm toán (approval tự động, log pipeline) | 15% | 4 | 4 |
| 4 | Hợp đồng (chuyển sang hỗ trợ/T&M) | 15% | 3 | 5 |
| 5 | Loại sản phẩm (backend/web) | 10% | 3 | 5 |
| 6 | Khách muốn thay đổi nhanh | 10% | 3 | 5 |
| 7 | Hạ tầng, giám sát, feature flag | 15% | 3 | 4 |
| | **Điểm có trọng số** | 100% | **3,15** | **4,35** |

A = 0,15×3 + 0,20×3 + 0,15×4 + 0,15×3 + 0,10×3 + 0,10×3 + 0,15×3 = **3,15**; B = 0,15×4 + 0,20×4 + 0,15×4 + 0,15×5 + 0,10×5 + 0,10×5 + 0,15×4 = **4,35**. → **Backend/web chuyển sang B; mobile giữ release train.**

## 3. Quy tắc

- Chênh < 0,5 điểm: chọn cái đội quen.
- Chọn B chỉ khi **điều kiện tiên quyết** (test tự động, feature flag, monitoring, rollback) đã sẵn sàng (Ch33).
- Mobile không daily deploy vì review app store.

---

## Cách dùng cho dự án của bạn

1. Chấm điểm cho từng thành phần (backend, web, mobile) riêng.
2. Điều chỉnh trọng số theo bối cảnh; đừng chấm theo mong muốn.
3. Ghi kết luận, lý do vào Decision Log.
4. Đặt lịch xem lại (sau mỗi mốc lớn).
5. Nếu chọn B, lập kế hoạch chuyển đổi (xem `release-strategy-migration-plan.md`).
