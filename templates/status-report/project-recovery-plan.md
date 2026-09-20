**Tên tài liệu:** Kế hoạch phục hồi dự án "đỏ" — FoodNow MVP, tuần 20
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 22/05/2026
**Mục đích & khi nào dùng:** Khi dự án chuyển đỏ (SPI < 0,85 hoặc mốc bị đe doạ): chẩn đoán, chọn đòn bẩy, mục tiêu phục hồi, người chịu trách nhiệm, mốc kiểm tra; dùng ngay trong tuần phát hiện.

---

## 1. Chẩn đoán

| Mục | Số liệu |
|---|---|
| Dấu hiệu | SPI 0,95 → 0,90 → **0,82**; SV −173 triệu; CPI 0,96; EAC 2.238 |
| Nguyên nhân gốc | (1) Sprint 1–2 chậm; (2) Tuấn bị rút 4 tuần; (3) Sơn nghỉ việc, mất bus factor; (4) conflict nhánh Sprint 6; (5) ước lượng lạc quan ở một số gói |
| Không phải nguyên nhân | Yêu cầu đổi liên tục (CR-001, CR-002 đều được hoãn) |
| Đường găng | Thanh toán vẫn giữ nhờ fast-tracking; nhánh dev float 5 ngày bị áp lực |
| Dự báo nếu không làm gì | 39 ÷ 0,82 ≈ 47,6 tuần (chậm ~8,6 tuần) |

## 2. Năm đòn bẩy

| # | Đòn bẩy | Hành động | Tác động dự kiến | Chi phí/rủi ro | Owner |
|---|---|---|---|---|---|
| 1 | **Cắt phạm vi** | Báo cáo doanh thu nhà hàng (3.2.4) và "đặt lại" sang R1 (25 ngày công) | −25 ngày công | Giảm giá trị nhẹ; Sponsor duyệt | Hà, Bảo |
| 2 | **Thêm người đúng cách** | 2 Dev + 1 QA hợp đồng 4 tuần từ 01/06 cho việc chia được (đối soát, kiểm thử, màn hình) | +≈ 40 ngày công | ≈ 110 triệu dự phòng; rủi ro học việc → onboarding 5 ngày, buddy | Dũng |
| 3 | **Đổi cách làm** | Rà lịch họp (giải phóng ~3 ngày công/tuần); 10% sprint trả nợ; luật nhánh ≤ 5 ngày; capacity thực | +≈ 50 ngày công (15 tuần) | Cần kỷ luật | Hà |
| 4 | **Làm rõ quyết định** | Scope Freeze 13/07; không CR lớn; PO uỷ quyền thêm cho BA; quyết định trong 48 giờ | Giảm chờ | Cần Sponsor cam kết | Bảo, Châu |
| 5 | **Reset kỳ vọng** | Dự báo mới bằng khoảng: SPI 0,86 (T24) → 0,91 (T28) → 0,95 (T32); go-live giữ 03/10 với độ tin cậy ~75%; báo cáo tuần + SteerCo | Minh bạch | Sponsor lo | Hà |

## 3. Mục tiêu và mốc kiểm tra

| Mốc | Chỉ số mục tiêu |
|---|---|
| T24 (19/06) | SPI ≥ 0,86; velocity ≥ 35 |
| T28 (17/07) | SPI ≥ 0,91; feature complete |
| T32 (14/08) | SPI ≥ 0,95 |
| Bất kỳ lúc | Nếu SPI < 0,80 hai tuần liền → xem xét dời go-live/cắt thêm |

## 4. Rủi ro của kế hoạch

| Rủi ro | Giảm thiểu |
|---|---|
| Người hợp đồng học việc chậm | Onboarding 5 ngày, buddy, việc chia được |
| Đội mệt | Không tăng ca dài; theo dõi 1-1 |
| Sponsor thêm yêu cầu | Scope Freeze; CR |

## 5. Giao tiếp

Sponsor: họp 22/05 và báo cáo tuần; đội: giải thích trong Sprint Review; BrightSoft: cập nhật hằng tháng; nhà hàng/khách: không cần (không đổi mục tiêu).

---

## Cách dùng cho dự án của bạn

1. Chẩn đoán bằng dữ liệu (EVM, đường găng, velocity); tìm nguyên nhân gốc.
2. Chọn 2–4 đòn bẩy trong năm loại; ghi tác động và chi phí.
3. Đặt mốc kiểm tra định lượng; chỉ định "điểm dừng" (khi nào cắt thêm hoặc dời mốc).
4. Có Sponsor duyệt; báo đội và stakeholder.
5. Đo lại hằng tuần; điều chỉnh, ghi lịch sử.
