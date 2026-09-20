**Tên tài liệu:** Kế hoạch UAT — FoodNow MVP (rc.1 và rc.2)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 06/07/2026
**Mục đích & khi nào dùng:** Kế hoạch nghiệm thu bởi người dùng: ai test, dữ liệu, môi trường, lịch, tiêu chí vào/ra; dùng ≥ 3 tuần trước UAT.

---

## 1. Mục tiêu

Xác nhận hệ thống đáp ứng nhu cầu nghiệp vụ và sẵn sàng vận hành; phát hiện lỗi mà QA không thấy; thu **sign-off** của Sponsor/PO/CS.

## 2. Phạm vi

- **Trong:** luồng khách đặt đơn và thanh toán (COD, thẻ sandbox/live theo giai đoạn), nhà hàng xử lý đơn, tài xế giao, Admin, thông báo, quy trình hỗ trợ CS.
- **Ngoài:** khuyến mãi, đánh giá món, ví điện tử (R1/R2).

## 3. Người tham gia

| Nhóm | Số người | Vai trò | Điều phối |
|---|---|---|---|
| Product | Châu | Duyệt kịch bản, ký sign-off | Lan |
| CS | Huy + 5 nhân viên | Kịch bản hỗ trợ, xử lý tình huống | Huy |
| Nhà hàng thử nghiệm | 3 nhà hàng | Nhận/xử lý đơn thật giả lập | Lan |
| Tài xế thử nghiệm | 10 người | Nhận/giao đơn | Lan |
| Khách thử | 12 người | Đặt đơn, thanh toán | Châu |
| QA | Nam + 1 | Hỗ trợ, phân loại defect | Nam |
| Dev | Theo phân công | Sửa lỗi theo SLA | Dũng |

## 4. Môi trường và dữ liệu

- Môi trường **UAT** giống production (Environment Matrix); tag `v1.0.0-rc.N`.
- Dữ liệu giả gần thật: 40 nhà hàng, 600 món, 30 tài khoản thử nghiệm; **không dữ liệu cá nhân thật**.
- PayEasy: sandbox trong vòng 1; **credential live** (nếu có chứng nhận) trong vòng 2 với giao dịch giá trị nhỏ.

## 5. Lịch

| Giai đoạn | Thời gian | Nội dung |
|---|---|---|
| Chuẩn bị | 13/07–24/07 | Viết kịch bản, huấn luyện người test, dựng dữ liệu |
| **UAT vòng 1** | 27/07–21/08 (20 ngày làm việc) | rc.1; chạy 60 kịch bản; log defect |
| Go/No-Go lần 1 | 21/08 | **No-Go** (47 defect gồm 3 Critical) |
| Sửa lỗi + rc.2 | 24/08–04/09 | Sửa Critical/High |
| **UAT vòng 2** | 07/09–16/09 | Retest + regression + kịch bản lõi |
| Go/No-Go lần 2 | 16/09 | **Go** |

## 6. Kịch bản

60 kịch bản chia nhóm: khách (20), nhà hàng (12), tài xế (10), Admin (6), thanh toán (8), thông báo (4). Mỗi kịch bản có: mã, bước, dữ liệu, kết quả mong đợi, người test, mức ưu tiên.

## 7. Tiêu chí

| Loại | Tiêu chí |
|---|---|
| **Vào UAT** | Không còn Critical đã biết; rc tag; smoke test đạt; dữ liệu và tài khoản sẵn sàng |
| **Ra UAT** | 100% kịch bản đã chạy; **không còn Critical/High**; Medium có kế hoạch; sign-off |
| **Tạm dừng UAT** | Môi trường sập > 4 giờ; > 5 Critical mới trong 2 ngày |

## 8. Quy trình defect

Phát hiện → log (Jira, có bước tái hiện, ảnh) → QA phân loại (severity, priority) trong 4 giờ → gán Dev → sửa theo SLA → QA retest → đóng. Chi tiết: `defect-triage-rules.md`.

## 9. Sign-off

Châu (Product), Huy (CS), Nam (QA), Bảo (Sponsor). Sign-off **có điều kiện** được phép với Medium/Low có kế hoạch.

---

## Cách dùng cho dự án của bạn

1. Xác định người dùng thật sẽ test; đặt lịch với họ ít nhất 3 tuần trước.
2. Viết kịch bản theo luồng nghiệp vụ, không theo màn hình.
3. Chốt tiêu chí vào/ra và tạm dừng bằng số.
4. Chuẩn bị dữ liệu và môi trường trước; kiểm thử smoke trước khi mời người dùng.
5. Đặt SLA sửa lỗi và người quyết định Go/No-Go.
