**Tên tài liệu:** Definition of Done (DoD) — Đội FoodNow
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.1 — 09/03/2026 (v1.0 sơ bộ 14/01/2026 trong Working Agreement)
**Mục đích & khi nào dùng:** Thoả thuận chung "xong nghĩa là gì" ở ba cấp (story, sprint, release); dùng ở mọi Sprint Review và khi nghiệm thu; xem lại ở retro.

---

## 1. DoD cấp Story

- [ ] Code đã được review bởi ≥ 1 người và merge vào `develop` (CI xanh)
- [ ] Unit test viết cho logic mới; coverage của module không giảm; **logic thanh toán ≥ 85%**, module khác ≥ 70% (ngưỡng đội thống nhất)
- [ ] Tiêu chí chấp nhận của story được QA kiểm thử và đạt
- [ ] Không còn bug Critical/High liên quan story
- [ ] Không có cảnh báo bảo mật mức cao từ công cụ quét (SAST/dependency)
- [ ] API/tài liệu (Swagger, Confluence) được cập nhật
- [ ] Thông báo/log/metric cần thiết đã có
- [ ] PO xem và chấp nhận (tại Review hoặc qua demo ngắn)

## 2. DoD cấp Sprint

- [ ] Mọi story trong Sprint Goal đạt DoD cấp Story (hoặc được chuyển lại backlog có lý do)
- [ ] Bản build lên **staging** thành công, có tag `v0.N.0`
- [ ] Regression tự động chạy xanh
- [ ] Demo cho PO/Sponsor đã diễn ra; phản hồi được ghi vào backlog
- [ ] RAID/Backlog đã cập nhật; số liệu sprint (velocity, burndown) đã ghi

## 3. DoD cấp Release

- [ ] Tất cả story trong phạm vi release đạt DoD
- [ ] UAT đạt tiêu chí thoả thuận; **không còn bug Critical/High**
- [ ] Kiểm thử hiệu năng đạt ngưỡng (500 đơn/ngày + biên an toàn)
- [ ] Kiểm thử bảo mật đạt; chứng nhận thanh toán còn hiệu lực
- [ ] Release notes, runbook, kế hoạch rollback được duyệt
- [ ] Đội hỗ trợ (CS) được đào tạo; kênh hỗ trợ sẵn sàng
- [ ] Go/No-Go được ký theo checklist

## 4. Quy tắc

- Story **không đạt DoD thì không tính điểm** vào velocity.
- Muốn giảm DoD phải có quyết định của PM + Tech Lead + QA Lead và ghi vào Decision Log.
- DoD được xem lại ở retro mỗi 4 sprint; nâng dần (ví dụ tăng coverage) khi đội ổn định.

---

## Cách dùng cho dự án của bạn

1. Bắt đầu từ danh sách này; xoá dòng không áp dụng, thêm dòng theo rủi ro của bạn.
2. Chọn ngưỡng định lượng (coverage, số bug) bằng thảo luận cả đội, không PM áp đặt.
3. Gắn DoD vào công cụ (checklist trong ticket/PR template).
4. Nhắc ở Sprint Review: câu hỏi "có đạt DoD chưa?" đến trước "có demo được không?".
5. Nâng chuẩn dần theo năng lực đội; ghi lại mỗi lần đổi.
