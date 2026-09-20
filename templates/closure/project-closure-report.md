**Tên tài liệu:** Báo cáo đóng dự án — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 02/11/2026 (tuần 44)
**Mục đích & khi nào dùng:** Tổng kết kết quả dự án so với baseline, xác nhận nghiệm thu, bàn giao và bài học; dùng khi đóng dự án hoặc giai đoạn.

---

## 1. Tóm tắt điều hành

FoodNow MVP **go-live đúng hạn 03/10/2026**, chi thực **2,31 tỷ VND** (dưới trần 2,4 tỷ; vượt chi phí kế hoạch 2,14 tỷ là 170 triệu, dùng từ dự phòng), **không còn bug Critical/High khi go-live**, hypercare hoàn tất 30/10/2026. Bàn giao vận hành sang đội bảo trì (Kanban).

## 2. Kết quả so với baseline

| Ràng buộc | Baseline | Thực tế | Đánh giá |
|---|---|---|---|
| Thời gian | Go-live 03/10/2026 | 03/10/2026 | ✅ Đúng hạn |
| Chi phí | 2.140 triệu + dự phòng 256,8 (trần 2.400) | **2.310** (dùng dự phòng 170/256,8) | ✅ Trong trần; vượt kế hoạch 170 |
| Phạm vi | 11 epic in-scope | 11 epic; cắt 2 hạng mục nhỏ sang R1 (25 ngày công); banner khuyến mãi tĩnh thêm 8 ngày công | ✅ Có kiểm soát (3 CR duyệt, 1 từ chối, 1 hoãn) |
| Chất lượng | 0 Critical/High | 0 Critical/High; 9 escaped defects (hypercare), 0 Critical mở | ✅ |

## 3. Mục tiêu thành công

| Cấp | Chỉ tiêu | Kết quả tại đóng dự án | Ghi chú |
|---|---|---|---|
| Dự án | Đúng hạn/ngân sách/chất lượng | Đạt | Như trên |
| Sản phẩm | Huỷ đơn < 5%; giao TB < 35 phút | Theo dõi (đo 3 tháng sau go-live) | Ch41 |
| Kinh doanh | 500 đơn/ngày sau 3 tháng; payback < 18 tháng | Theo dõi (tuần 4: 205 đơn/ngày) | Ch41 |

## 4. Deliverable và nghiệm thu

| Deliverable | Tiêu chí | Kết quả | Người nghiệm thu |
|---|---|---|---|
| 3 app + Admin production | Qua UAT, 0 Critical/High | Đạt | Châu, Bảo |
| Tích hợp thanh toán | Sandbox pass 100%, chứng nhận | Đạt | Nam, Yến |
| Tài liệu vận hành và runbook | CS xử lý 10 tình huống | Đạt | Huy |
| Đào tạo | ≥ 90% | 94% | Lan |

Nghiệm thu chính thức: `acceptance-certificate.md` (ký 02/11/2026).

## 5. Chỉ số dự án

| Chỉ số | Giá trị |
|---|---|
| SPI tại T20 / T36 | 0,82 / 0,98 |
| CPI tại T36 | 0,96 |
| Velocity Sprint 1 → 12 | 22 → 41 SP |
| CR | 5 (3 duyệt, trong đó 1 khẩn; 1 từ chối; 1 hoãn sang R1) |
| Defect UAT vòng 1 | 47 (3 Critical) |
| Sự cố production | 1 P1 (INC-001) |
| DORA | Bắt đầu chuyển đổi 12 tuần (mục tiêu CFR ≤ 15%, deploy hằng ngày) |

## 6. Bàn giao

Đã bàn giao: mã nguồn và quyền truy cập; tài liệu (Confluence); runbook; vendor và hợp đồng; giám sát; Kanban bảo trì; quyền truy cập được rà soát; giải phóng nguồn lực. Chi tiết: `handover-checklist.md`.

## 7. Bài học (12) — tóm tắt

Xem `lessons-learned-register.csv`: ràng buộc ưu tiên; Sprint 0 đủ dài; giả định có owner; rà stakeholder; bus factor; nhánh ≤ 5 ngày; dự phòng cho vendor; Go/No-Go ký sớm; config diff; audit họp; capacity thực; RAG số.

## 8. Việc còn lại

Đo lợi ích 1/3/6 tháng (`benefits-realization-plan.md`); R1 (Q1/2027); nợ kỹ thuật (TD-01, TD-03, TD-04, TD-08); hợp đồng hỗ trợ.

## 9. Ký

| Vai trò | Họ tên | Ngày |
|---|---|---|
| Sponsor | Trần Quốc Bảo | 02/11/2026 |
| PM | Nguyễn Thu Hà | 02/11/2026 |

---

## Cách dùng cho dự án của bạn

1. So từng ràng buộc với baseline bằng số; giải thích chênh lệch.
2. Ghi rõ mục tiêu kinh doanh cần đo sau dự án và người chịu trách nhiệm.
3. Đính kèm chứng chỉ nghiệm thu, bàn giao và bài học.
4. Gửi Sponsor ký; lưu cùng hồ sơ dự án.
5. Đưa việc còn lại sang giai đoạn/vận hành.
