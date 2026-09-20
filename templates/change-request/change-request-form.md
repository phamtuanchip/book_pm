**Tên tài liệu:** Change Request (CR) — mẫu điền sẵn: CR-001
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — nộp 09/03/2026, CCB quyết định 12/03/2026
**Mục đích & khi nào dùng:** Ghi lại một đề xuất thay đổi phạm vi/lịch/chi phí/chất lượng để đánh giá và quyết định; dùng cho mọi thay đổi ngoài baseline.

---

## 1. Thông tin chung

| Trường | Nội dung |
|---|---|
| Mã CR | **CR-001** |
| Ngày đề xuất | 09/03/2026 |
| Người đề xuất | Trần Quốc Bảo (Sponsor) |
| Tên thay đổi | Đưa "Đặt món theo nhóm" vào MVP |
| Loại | Thêm phạm vi (ngoài baseline; hiện ở R2) |
| Mức khẩn | Thường (không khẩn cấp) |
| Người đánh giá | Hà (PM), Dũng, Lan, Nam |

## 2. Mô tả thay đổi

**Nhu cầu:** Nhiều nhóm công sở đặt chung; Sponsor muốn có tính năng này để marketing chiến dịch "văn phòng".
**Mô tả:** Một người tạo phiên đặt nhóm, chia sẻ link; nhiều người thêm món; chia hoá đơn; một lần thanh toán.
**Giá trị kỳ vọng:** Tăng giá trị đơn trung bình và số khách mới từ nhóm văn phòng (giả định của Sponsor, chưa có số liệu).

## 3. Đánh giá tác động (tóm tắt — chi tiết ở `impact-assessment.md`)

| Khía cạnh | Tác động |
|---|---|
| Scope | Thêm 1 epic (≈ 104 ngày công theo PERT) |
| Time | Trễ khoảng **4 tuần** nếu giữ nguyên đội; đường găng không đổi nhưng nhánh dev mất float |
| Cost | ≈ 104 ngày × 1,25 triệu = **130 triệu** (T&M) |
| Risk | Tăng rủi ro thanh toán (chia hoá đơn); lộ thêm tích hợp |
| Quality | Thêm kiểm thử thanh toán nhóm |
| Resource | Backend đã quá tải T13–T16 |

## 4. Các phương án

| Phương án | Mô tả | Tác động |
|---|---|---|
| A | Đưa vào MVP, giữ đội | Trễ ~4 tuần hoặc cắt hạng mục khác |
| B | Đưa vào MVP và cắt hạng mục khác cùng cỡ | Mất báo cáo, thông báo nâng cao |
| C | **Giữ ở Release 2** (khuyến nghị) | Không đổi baseline |
| D | Làm bản tối giản (chỉ chia link, không chia hoá đơn) ở R1 | Chi phí ≈ 35 ngày |

## 5. Khuyến nghị của PM

Chọn **C**, xếp đặt món theo nhóm vào R2 sau khi có dữ liệu MVP; cân nhắc **D** cho R1 nếu dữ liệu ủng hộ.

## 6. Quyết định của CCB (12/03/2026)

| Trường | Nội dung |
|---|---|
| Quyết định | **Từ chối đưa vào MVP; giữ ở R2 (phương án C)** |
| Người duyệt | Bảo (chủ trì), Châu, Hà, Dũng, Nam |
| Baseline thay đổi? | Không |
| Hành động | Cập nhật Roadmap v1.0; ghi vào Change Log; thông báo đội |

---

## Cách dùng cho dự án của bạn

1. Mọi yêu cầu ngoài baseline phải vào form; không nhận thay đổi bằng lời nói.
2. Điền mục 3 với số liệu do người làm ước lượng, không PM đoán.
3. Luôn có ít nhất 3 phương án (gồm "không làm" hoặc "làm sau").
4. CCB quyết định; ghi người, ngày, có đổi baseline không.
5. Thông báo kết quả cho người đề xuất và đội trong 24 giờ.
