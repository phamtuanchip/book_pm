**Tên tài liệu:** Project Management Plan (PM Plan) — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/03/2026 (Sponsor duyệt); baseline scope/lịch/chi phí thiết lập từ 06/02–09/03/2026
**Mục đích & khi nào dùng:** Kế hoạch tổng hợp "cách chúng ta sẽ quản lý dự án": tóm tắt và dẫn tới các kế hoạch phụ; dùng làm tài liệu tham chiếu chính và để Sponsor phê duyệt baseline.

---

## 1. Tổng quan

| Mục | Nội dung |
|---|---|
| Mục đích | Xây MVP FoodNow: 3 app + Admin + thanh toán thẻ/COD; go-live **03/10/2026** |
| Ràng buộc ưu tiên | **Time cố định · Scope linh hoạt · Cost trần 2,4 tỷ · Quality thanh toán bất khả nhượng** |
| Mục tiêu kinh doanh | 500 đơn/ngày sau 3 tháng; huỷ < 5%; giao TB < 35 phút; payback < 18 tháng |
| Tài liệu gốc | Business Case (10/12/2025), Charter (15/12/2025) |
| PM | Nguyễn Thu Hà · Sponsor: Trần Quốc Bảo · PO: Lê Minh Châu · Tech Lead: Phạm Đức Dũng |

## 2. Cách tiếp cận (Hybrid)

- **Khung Waterfall:** baseline scope/lịch/chi phí, mốc thanh toán, change control.
- **Bên trong Agile:** Scrum sprint 2 tuần, Sprint 0 dài 4 tuần, backlog do PO ưu tiên, demo mỗi sprint.
- Ma trận chọn mô hình: `templates/pm-plan/methodology-decision-matrix.md` (Hybrid 4,20 điểm).

## 3. Kế hoạch quản lý phạm vi

- Phạm vi: `templates/project-charter/scope-statement.md` (v1.1, 13/02/2026) — 11 epic in-scope, 7 hạng mục out-of-scope.
- WBS: `templates/wbs/FoodNow-WBS.md` và `FoodNow-WBS.csv` (66 work package, **1.927 ngày công**).
- Thay đổi trong epic: PO điều chỉnh backlog; ngoài epic: Change Request (mục 11).

## 4. Kế hoạch quản lý lịch

- Lịch baseline: `templates/timeline-gantt/FoodNow-Gantt.md` và `FoodNow-Schedule.csv` (27/02/2026).
- **Đường găng: tích hợp thanh toán → chứng nhận PayEasy → end-to-end → bảo mật → UAT → go-live (131 ngày làm việc)**; nhánh phát triển float 2–5 ngày.
- Mốc: Kickoff 05/01 · Demo HĐQT 03/06 · Scope Freeze 13/07 · UAT bắt đầu 27/07 · Go/No-Go 21/08 & 16/09 · Go-live 03/10 · Hypercare đến 30/10 · Đóng dự án 02/11.
- Cập nhật hằng tuần; dự báo bằng khoảng (Ch11).

## 5. Kế hoạch quản lý chi phí

- Ngân sách: `templates/budget/FoodNow-Budget.csv`: **2.140 triệu + dự phòng 12% (256,8 triệu) = 2.396,8 ≈ 2,4 tỷ**.
- Quy tắc dự phòng: chỉ dùng cho rủi ro có trong RAID; PM tự dùng tới **5% ngân sách (≈ 120 triệu)** và báo trong tuần; vượt cần Sponsor duyệt bằng văn bản.
- Theo dõi: `budget-tracking.csv` hằng tháng; EVM hằng tuần từ tuần 12 (Ch34).
- Thanh toán theo mốc: 7 mốc (Ch14).

## 6. Kế hoạch chất lượng

- `templates/quality/quality-plan.md`, `definition-of-done.md`, `quality-gates-checklist.md`.
- Mục tiêu: **không còn bug Critical/High khi go-live**; coverage logic thanh toán ≥ 85%; 6 quality gates; QA Lead có quyền chặn cổng G3–G5.

## 7. Kế hoạch nguồn lực

- `templates/pm-plan/resource-plan.csv` (v1.1): 12 FTE; Bench Backend 50% từ 30/03–08/05; Tuấn 50% 09/03–03/04.
- Bus factor: dịch vụ đơn hàng/thanh toán (Sơn), kiến trúc (Dũng) — biện pháp: pair, ADR.
- Working Agreement: `templates/project-charter/team-charter-working-agreement.md`.

## 8. Kế hoạch giao tiếp

- `templates/stakeholder-comms/communication-plan.md` (v1.1), `stakeholder-register.csv` (15 stakeholder), `raci-matrix.csv` (18 hạng mục).
- Báo cáo tuần thứ Sáu 15:00; họp Sponsor thứ Năm; SteerCo hằng tháng; leo thang 3 cấp.

## 9. Kế hoạch quản lý rủi ro và RAID

- Rủi ro: `templates/risk-raid/FoodNow-Risk-Register.csv` (Ch18); RAID: `FoodNow-RAID-Log.csv` (Ch19).
- Rà soát: RAID mỗi thứ Hai 15 phút; top 5 rủi ro vào báo cáo tuần.
- Rủi ro lớn nhất: PayEasy trễ chứng nhận; bus factor; thay đổi yêu cầu.

## 10. Kế hoạch mua sắm

- `templates/pm-plan/procurement-plan.md` (Ch21): PayEasy, SMS, bản đồ, kiểm thử bảo mật bên ngoài; đồng bộ vendor hằng tuần.

## 11. Kế hoạch quản lý thay đổi

- Quy trình CR: đề xuất → đánh giá tác động (scope/time/cost/risk/quality) → CCB → quyết định → cập nhật baseline → thông báo.
- **CCB:** Bảo (chủ trì), Châu, Hà, Dũng, Nam; họp thứ Năm cùng họp Sponsor; thay đổi khẩn: Hà + Bảo duyệt trong 24 giờ.
- Biểu mẫu: `templates/change-request/*` (Ch20).

## 12. Quản lý cấu hình & tài liệu

- `templates/pm-plan/project-folder-structure.md`, `decision-log.csv` (Ch22); nguồn sự thật duy nhất: Confluence; mã nguồn: Git theo chính sách nhánh (Ch31).

## 13. Baseline

| Baseline | Tài liệu | Phiên bản | Ngày | Người duyệt |
|---|---|---|---|---|
| Scope | Scope Statement + WBS | v1.1 / v1.0 | 13/02 và 06/02/2026 | Bảo, Châu |
| Lịch | Gantt + Schedule | v1.0 | 27/02/2026 | Bảo |
| Chi phí | Budget + Cost baseline | v1.0 | 02/03/2026 | Bảo |

Chi tiết và lịch sử thay đổi: `templates/pm-plan/baseline-register.md`.

## 14. Cách cập nhật PM Plan

- Baseline chỉ đổi qua CR được CCB duyệt.
- Phần "sống" (backlog, lịch sprint, RAID) cập nhật liên tục, không cần duyệt lại.
- Xem lại toàn bộ PM Plan ở mỗi mốc lớn (Scope Freeze, UAT, Go-live) và ghi vào lịch sử.

## 15. Chữ ký

| Vai trò | Họ tên | Ngày |
|---|---|---|
| Sponsor | Trần Quốc Bảo | 20/03/2026 |
| Project Manager | Nguyễn Thu Hà | 20/03/2026 |
| Product Owner | Lê Minh Châu | 20/03/2026 |
| Tech Lead | Phạm Đức Dũng | 20/03/2026 |

---

## Cách dùng cho dự án của bạn

1. Sao chép khung 15 mục; mỗi mục viết 3–8 dòng và **dẫn tới tài liệu chi tiết** thay vì chép lại.
2. Ghi số liệu baseline (scope, lịch, chi phí) và người duyệt; đó là phần quan trọng nhất.
3. Giữ toàn bộ PM Plan trong 8–15 trang; nếu dài hơn, cắt chi tiết ra kế hoạch phụ.
4. Gửi Sponsor review bằng họp 60 phút, đọc trước, chỉ thảo luận quyết định.
5. Đặt lịch xem lại PM Plan ở các mốc lớn và khi có thay đổi baseline.
