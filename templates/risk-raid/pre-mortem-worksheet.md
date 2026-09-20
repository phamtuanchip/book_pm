**Tên tài liệu:** Phiếu Pre-mortem — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 22/01/2026 (buổi họp 90 phút, tuần 3)
**Mục đích & khi nào dùng:** Tưởng tượng dự án đã thất bại rồi tìm nguyên nhân để nhận diện rủi ro sớm; dùng ở cuối khởi động hoặc trước mốc lớn.

---

## 1. Cách chạy (90 phút)

1. **Đặt bối cảnh (5')**: "Hôm nay là 04/10/2026. Go-live đã thất bại nặng. Hãy viết vì sao."
2. **Viết một mình (10')**: mỗi người 5–8 nguyên nhân trên giấy dán (không thảo luận).
3. **Chia sẻ và gom nhóm (25')**: đọc lần lượt, gom nhóm giống nhau.
4. **Bỏ phiếu (10')**: mỗi người 5 chấm cho nhóm đáng lo nhất.
5. **Phân tích top 8 (30')**: dấu hiệu sớm? phòng ngừa? ai phụ trách?
6. **Ghi vào Risk Register (10')**: mỗi nhóm thành rủi ro có ID và chủ sở hữu.

Quy tắc: không đổ lỗi cá nhân; nói "hệ thống/quy trình", không nói "người X".

## 2. Kết quả của buổi họp 22/01/2026

| Nhóm nguyên nhân | Số phiếu | Dấu hiệu sớm | Phòng ngừa | Risk ID | Chủ sở hữu |
|---|---|---|---|---|---|
| Cổng thanh toán trễ chứng nhận | 11 | Sandbox chậm; vendor phản hồi chậm | Họp vendor hằng tuần; mốc bằng văn bản; kế hoạch dự phòng | R01 | Hà |
| Mất người then chốt | 9 | Người quá tải; không có tài liệu | Pair, ADR, chia sẻ kiến thức | R02 | Dũng |
| Sponsor thêm yêu cầu liên tục | 8 | Yêu cầu "tiện thể" | Parking lot; CR | R03 | Hà |
| PO không có thời gian | 6 | Quyết định chờ > 3 ngày | Họp cố định; BA thay quyền | R04 | Châu |
| Hiệu năng theo dõi thời gian thực | 5 | Test tải sớm thất bại | Spike, test tải mỗi sprint | R05 | Dũng |
| Nhà hàng/tài xế không dùng | 5 | Khảo sát thấp | Workshop, thử nghiệm | R10 | Lan |
| CS chưa sẵn sàng | 4 | Không có kịch bản hỗ trợ | Mời CS vào đội UAT | R11 | Hà |
| Nợ kỹ thuật | 4 | Coverage giảm | Bảng nợ, sprint trả nợ | R07 | Dũng |

## 3. Bài học

- Ba nhóm đầu tiên trùng với rủi ro cấp cao trong Charter, nhưng buổi họp lộ **"CS chưa sẵn sàng"** — chưa có trong danh sách cũ; khi truy tìm "ai chịu trách nhiệm CS", đội phát hiện anh Huy chưa có trong Stakeholder Register (26/01, Ch06).
- Người trẻ nói ra những điều người senior ít nói; ưu tiên cho họ nói trước.

---

## Cách dùng cho dự án của bạn

1. Mời 6–12 người, gồm cả người vận hành và QA; đừng chỉ mời quản lý.
2. Chạy đúng 6 bước và giữ thời gian; đừng để 5 phút đầu trở thành tranh luận.
3. Với mỗi nhóm được bỏ phiếu cao, ghi dấu hiệu sớm và người chịu trách nhiệm.
4. Chuyển kết quả vào Risk Register trong 24 giờ.
5. Chạy lại trước mốc lớn (Scope Freeze, UAT, go-live).
