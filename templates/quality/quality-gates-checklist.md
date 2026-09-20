**Tên tài liệu:** Quality Gates Checklist — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 09/03/2026
**Mục đích & khi nào dùng:** Bộ cổng chất lượng theo giai đoạn: không qua cổng thì không sang giai đoạn kế tiếp; dùng ở mỗi mốc chính và trong họp SteerCo.

---

## Bản đồ 6 cổng

| Cổng | Vị trí | Ai duyệt | Khi nào |
|---|---|---|---|
| **G1 Requirements Ready** | Trước khi story vào sprint | PO + Tech Lead | Mỗi refinement |
| **G2 Sprint Done** | Cuối sprint | PO + QA Lead | Mỗi Review |
| **G3 Release Candidate** | Khi cắt `release/*`, tag rc | Tech Lead + QA Lead | T30 (rc.1), T35 (rc.2) |
| **G4 UAT Exit** | Kết thúc UAT | Sponsor/PO + CS | T33, T37 |
| **G5 Go/No-Go** | Trước go-live | Sponsor (quyết), PM/QA/Tech Lead (khuyến nghị) | T33 (No-Go), T37 (Go) |
| **G6 Post Go-live** | Sau hypercare | PM + Sponsor | T44 |

## G1 — Requirements Ready
- [ ] Story có mục đích, tiêu chí chấp nhận kiểm tra được
- [ ] Thiết kế UX (nếu cần) đã duyệt
- [ ] Ước lượng xong, vừa một sprint; phụ thuộc rõ

## G2 — Sprint Done
- [ ] Story trong Sprint Goal đạt DoD
- [ ] Build staging thành công; tag `v0.N.0`
- [ ] Regression tự động xanh; không bug Critical mới

## G3 — Release Candidate
- [ ] Feature freeze; chỉ sửa lỗi trong `release/*`
- [ ] Không còn bug Critical đã biết; High có kế hoạch sửa
- [ ] Kiểm thử hiệu năng và bảo mật đã chạy; kết quả được lưu
- [ ] Release notes nháp, runbook nháp

## G4 — UAT Exit
- [ ] 100% kịch bản UAT đã chạy
- [ ] **Không còn bug Critical/High** mở; Medium có kế hoạch
- [ ] Người dùng đại diện (Châu, Huy, nhà hàng, tài xế) ký chấp nhận
- [ ] Sai khác so với phạm vi có văn bản chấp thuận

## G5 — Go/No-Go
- [ ] Đủ điều kiện G4
- [ ] Kế hoạch cutover và rollback đã diễn tập
- [ ] Đội hỗ trợ và người dùng được đào tạo
- [ ] Chứng nhận PayEasy còn hiệu lực; giám sát và cảnh báo sẵn sàng
- [ ] Sponsor ký quyết định

## G6 — Post Go-live
- [ ] Hypercare xong; SLA đạt
- [ ] Số bug escape được phân tích; bài học ghi lại
- [ ] Bàn giao vận hành

---

## Cách dùng cho dự án của bạn

1. Chọn số cổng phù hợp quy mô (nhỏ: 3 cổng; lớn: 6 cổng).
2. Gán người duyệt và ngày dự kiến trong lịch.
3. Đặt tiêu chí có số; ghi kết quả từng lần qua cổng.
4. Nếu bỏ qua cổng phải có chấp thuận có điều kiện và ghi vào RAID.
5. Rà lại sau mỗi mốc lớn: cổng nào chặn đúng, cổng nào gây ma sát vô ích?
