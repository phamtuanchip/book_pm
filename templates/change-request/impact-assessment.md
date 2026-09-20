**Tên tài liệu:** Đánh giá tác động thay đổi — CR-001
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 11/03/2026
**Mục đích & khi nào dùng:** Phân tích tác động của một CR lên scope, lịch, chi phí, rủi ro, chất lượng, nguồn lực để CCB quyết định; dùng trước mọi buổi CCB.

---

## 1. Ước lượng công (do người làm)

| Hạng mục | Người ước | Ngày công (O / M / P) | PERT E |
|---|---|---|---|
| Backend: phiên đặt nhóm, chia hoá đơn | Dũng, Sơn | 22 / 30 / 45 | 31,2 |
| Mobile: giao diện nhóm, chia sẻ link | Khoa | 30 / 40 / 55 | 40,8 |
| Thanh toán nhóm (PayEasy) | Dũng | 10 / 15 / 25 | 15,8 |
| Kiểm thử | Nam | 8 / 10 / 16 | 10,7 |
| UX/UI | Mai Anh | 4 / 5 / 8 | 5,3 |
| **Tổng** | | | **≈ 103,8** |

PERT E = (O + 4M + P) / 6. Tổng E ≈ **104 ngày công** (khoảng lạc quan–bi quan: 74–149). Bất định lớn vì thanh toán nhóm.

## 2. Tác động lên các ràng buộc

| Ràng buộc | Tác động | Cách tính |
|---|---|---|
| **Scope** | +1 epic (E12) | Ngoài baseline |
| **Time** | **+4 tuần** nếu giữ đội | Chỉ Backend/Mobile làm được (~6,5 FTE): 6,5 × 4,74 ngày/tuần × 0,87 ≈ 26,8 ngày/tuần; 104 ÷ 26,8 ≈ **3,9 tuần** |
| **Cost** | ≈ 130 triệu | 104 ngày × 1,25 triệu/ngày (T&M) |
| **Risk** | Thêm rủi ro thanh toán | Ghi vào Risk Register |
| **Quality** | Thêm kiểm thử thanh toán nhóm | Tăng thời gian UAT |
| **Resource** | Backend đã quá tải 145% T13–T16 | Không đủ nếu không thêm người |

## 3. Đường găng và float

- Nhánh dev có float 5 ngày; +104 ngày công trên nhóm 6,5 FTE làm float bằng 0 và **trễ go-live nếu không giảm phạm vi khác**.
- Đường găng (thanh toán) không đổi, nhưng chia hoá đơn cần tích hợp thêm với PayEasy, có thể làm chuỗi găng dài hơn.

## 4. Kết luận đánh giá

Thay đổi hợp lệ về giá trị nhưng **không phù hợp ràng buộc ưu tiên** (Time cố định, Cost trần, Quality thanh toán bất khả nhượng). Khuyến nghị C (giữ ở R2) hoặc D (bản tối giản ở R1).

---

## Cách dùng cho dự án của bạn

1. Gọi người làm ước lượng theo O/M/P cho từng hạng mục; PM không tự đoán.
2. Chuyển công thành thời gian bằng năng lực **của nhóm thực sự làm việc đó**, không dùng cả đội.
3. Kiểm tra tác động lên đường găng và float; cập nhật Risk Register.
4. Nêu ít nhất 3 phương án và khuyến nghị.
5. Gửi CCB trước buổi họp 1 ngày làm việc.
