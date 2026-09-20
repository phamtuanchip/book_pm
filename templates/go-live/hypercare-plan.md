**Tên tài liệu:** Hypercare Plan — 4 tuần sau go-live
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 16/09/2026; kết quả cập nhật 30/10/2026
**Mục đích & khi nào dùng:** Giai đoạn hỗ trợ tăng cường sau go-live: thời gian, đội trực, SLA, chỉ số, tiêu chí kết thúc; dùng ngay sau mỗi lần phát hành lớn.

---

## 1. Thời gian và đội

| Mục | Nội dung |
|---|---|
| Thời gian | **4 tuần**: 03/10 – 30/10/2026 |
| Tuần 1 | Trực 07:00–23:00 hằng ngày; đội đầy đủ |
| Tuần 2–4 | Trực giờ hành chính + on-call ngoài giờ; giảm dần |
| Đội trực | Dũng (kỹ thuật), Backend 2 và Backend thay thế, Khoa (mobile), Nam/QA, Ánh (DevOps), Lan (nghiệp vụ), Huy (CS), Hà (điều phối) |
| Kênh | Slack #hypercare; hotline CS; on-call điện thoại |

## 2. SLA hypercare

| Mức | Phản hồi | Khắc phục |
|---|---|---|
| P1 | 15 phút | 4 giờ (giảm nhẹ ngay) |
| P2 | 1 giờ | 1 ngày làm việc |
| P3 | 1 ngày | Trong hypercare |
| P4 | — | Backlog |

## 3. Nhịp làm việc

- **Daily 08:30** (15'): đơn hàng hôm qua, ticket, lỗi, hành động.
- **Báo cáo ngày** tuần 1 → **báo cáo tuần** từ tuần 2.
- **Retro** cuối tuần 2 và cuối hypercare.

## 4. Chỉ số theo dõi

Số đơn/ngày; tỷ lệ huỷ; thời gian giao TB; lỗi đặt đơn (%); số ticket CS/100 đơn; escaped defects; thời gian khôi phục sự cố; đối soát thanh toán.

## 5. Tiêu chí kết thúc hypercare

- Không P1/P2 mở; ≥ 7 ngày liên tiếp không sự cố P1;
- Ticket CS/100 đơn ≤ ngưỡng; đối soát khớp 100% ba tuần liền;
- Runbook cập nhật; Kanban bảo trì sẵn sàng; Sponsor xác nhận bàn giao vận hành.

## 6. Kết quả thực tế (cập nhật 30/10/2026)

| Chỉ số | Kết quả |
|---|---|
| Đơn/ngày | Ngày 1: 61 · Tuần 1 TB: 118 · Tuần 4 TB: 205 |
| Sự cố | 1 P1 (INC-001, ngày 1), 1 P2, 7 P3 |
| Escaped defects | 9 (0 Critical còn mở) |
| Thời gian khôi phục P1 | 3 giờ 30 phút |
| Đối soát thanh toán | Khớp 100% |
| Kết thúc | 30/10; bàn giao vận hành sang đội bảo trì (Kanban) |

---

## Cách dùng cho dự án của bạn

1. Đặt thời gian theo rủi ro (thường 2–4 tuần) và giảm dần cường độ trực.
2. Xác định đội trực và SLA rõ; có on-call và người thay.
3. Đặt tiêu chí kết thúc bằng số.
4. Họp ngắn hằng ngày; đo chỉ số kinh doanh, không chỉ kỹ thuật.
5. Kết thúc hypercare bằng bàn giao chính thức và retro.
