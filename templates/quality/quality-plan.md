**Tên tài liệu:** Kế hoạch chất lượng (Quality Plan) — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 09/03/2026
**Mục đích & khi nào dùng:** Quy định mục tiêu chất lượng, chiến lược kiểm thử, chỉ số và vai trò; dùng làm kế hoạch phụ trong PM Plan (Ch17).

---

## 1. Mục tiêu chất lượng

| # | Mục tiêu | Ngưỡng | Đo bằng |
|---|---|---|---|
| Q1 | Không còn bug Critical/High khi go-live | 0 | Defect log, UAT exit |
| Q2 | Luồng thanh toán an toàn và chính xác | 0 lỗi mất tiền; đối soát khớp 100% | Kiểm thử thanh toán, đối soát |
| Q3 | Hiệu năng | Đặt đơn ≤ 2 giây (p95) ở 500 đơn/ngày × 2 | Kiểm thử hiệu năng |
| Q4 | Ổn định | Tỷ lệ crash app < 1% phiên | Monitoring/App store |
| Q5 | Bảo mật | Không lỗ hổng mức cao | Pentest, SAST |

## 2. Chiến lược kiểm thử (mức PM cần biết)

| Cấp | Mục đích | Ai làm | Khi nào | Tự động? |
|---|---|---|---|---|
| **Unit** | Logic từng hàm | Dev | Mỗi PR | Có |
| **Integration** | Các thành phần + API | Dev/QA | Mỗi sprint | Có (phần lớn) |
| **System** | Toàn hệ thống theo yêu cầu | QA | Mỗi sprint | Một phần |
| **Regression** | Không làm hỏng cái cũ | QA | Mỗi build lên staging | Có |
| **Performance** | Chịu tải | QA + DevOps | Trước rc.1 và trước go-live | Có |
| **Security** | Lỗ hổng | Bên ngoài + Dev | Trước rc.1 | Một phần |
| **UAT** | Người dùng xác nhận | PO, CS, nhà hàng, tài xế | T30–T37 | Không |

## 3. Chỉ số chất lượng

| Chỉ số | Công thức | Ngưỡng cảnh báo |
|---|---|---|
| Defect density | Số defect ÷ (KLOC hoặc 100 story point) | Theo xu hướng; tăng 2 sprint liên tiếp thì rà soát |
| Escaped defects | Số defect phát hiện **sau** release | > 5 Critical/High trong hypercare là đỏ |
| Bug leakage | Escaped ÷ (Found trước + Escaped) × 100% | > 10% cần hành động |
| Test pass rate | Test đạt ÷ Test chạy | < 95% thì chặn cổng |
| Code coverage | % dòng/nhánh được test | Giảm so với sprint trước |
| Defect burn-down | Số defect mở theo thời gian | Không giảm trong UAT là đỏ |

## 4. Chi phí chất lượng (cost of quality)

| Loại | Ví dụ FoodNow |
|---|---|
| Phòng ngừa | Review yêu cầu, thiết kế, đào tạo, code review, CI |
| Thẩm định | Test, pentest, UAT |
| Lỗi nội bộ | Sửa bug trước release |
| Lỗi bên ngoài | Sự cố sau go-live, bồi thường, mất khách |

Nguyên tắc: **tăng phòng ngừa để giảm lỗi bên ngoài** (xem EMV trong Ch14).

## 5. Vai trò

| Vai trò | Trách nhiệm |
|---|---|
| Nam (QA Lead) | Chiến lược, kế hoạch, báo cáo chất lượng, quyền chặn cổng |
| Dũng (Tech Lead) | Chuẩn code, review, nợ kỹ thuật |
| Hà (PM) | Bảo đảm nguồn lực, quyết định đánh đổi, báo cáo |
| Châu (PO) | Tiêu chí chấp nhận, UAT |

---

## Cách dùng cho dự án của bạn

1. Đặt 3–5 mục tiêu chất lượng có số; gắn với rủi ro kinh doanh.
2. Chọn chiến lược kiểm thử theo cấp; ghi ai làm, khi nào.
3. Chọn 4–6 chỉ số; đặt ngưỡng cảnh báo; đưa vào báo cáo tuần.
4. Liên kết với DoD và Quality Gates.
5. Xem lại sau mỗi release: chỉ số nào giúp quyết định, chỉ số nào chỉ là "vanity"?
