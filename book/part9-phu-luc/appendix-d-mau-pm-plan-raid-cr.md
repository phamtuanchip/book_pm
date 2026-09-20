# Phụ lục D — Mẫu Project Management Plan + Risk/RAID + Change Request đầy đủ (FoodNow)

Bản in từ `templates/pm-plan/`, `risk-raid/`, `change-request/`. Đọc kèm Ch17–Ch20.

## D.1 Project Management Plan

📎 Nguồn: `templates/pm-plan/FoodNow-Project-Management-Plan.md`

**Tên tài liệu:** Project Management Plan (PM Plan) — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/03/2026 (Sponsor duyệt); baseline scope/lịch/chi phí thiết lập từ 06/02–09/03/2026
**Mục đích & khi nào dùng:** Kế hoạch tổng hợp "cách chúng ta sẽ quản lý dự án": tóm tắt và dẫn tới các kế hoạch phụ; dùng làm tài liệu tham chiếu chính và để Sponsor phê duyệt baseline.

---

#### 1. Tổng quan

| Mục | Nội dung |
|---|---|
| Mục đích | Xây MVP FoodNow: 3 app + Admin + thanh toán thẻ/COD; go-live **03/10/2026** |
| Ràng buộc ưu tiên | **Time cố định · Scope linh hoạt · Cost trần 2,4 tỷ · Quality thanh toán bất khả nhượng** |
| Mục tiêu kinh doanh | 500 đơn/ngày sau 3 tháng; huỷ < 5%; giao TB < 35 phút; payback < 18 tháng |
| Tài liệu gốc | Business Case (10/12/2025), Charter (15/12/2025) |
| PM | Nguyễn Thu Hà · Sponsor: Trần Quốc Bảo · PO: Lê Minh Châu · Tech Lead: Phạm Đức Dũng |

#### 2. Cách tiếp cận (Hybrid)

- **Khung Waterfall:** baseline scope/lịch/chi phí, mốc thanh toán, change control.
- **Bên trong Agile:** Scrum sprint 2 tuần, Sprint 0 dài 4 tuần, backlog do PO ưu tiên, demo mỗi sprint.
- Ma trận chọn mô hình: `templates/pm-plan/methodology-decision-matrix.md` (Hybrid 4,20 điểm).

#### 3. Kế hoạch quản lý phạm vi

- Phạm vi: `templates/project-charter/scope-statement.md` (v1.1, 13/02/2026) — 11 epic in-scope, 7 hạng mục out-of-scope.
- WBS: `templates/wbs/FoodNow-WBS.md` và `FoodNow-WBS.csv` (66 work package, **1.927 ngày công**).
- Thay đổi trong epic: PO điều chỉnh backlog; ngoài epic: Change Request (mục 11).

#### 4. Kế hoạch quản lý lịch

- Lịch baseline: `templates/timeline-gantt/FoodNow-Gantt.md` và `FoodNow-Schedule.csv` (27/02/2026).
- **Đường găng: tích hợp thanh toán → chứng nhận PayEasy → end-to-end → bảo mật → UAT → go-live (131 ngày làm việc)**; nhánh phát triển float 2–5 ngày.
- Mốc: Kickoff 05/01 · Demo HĐQT 03/06 · Scope Freeze 13/07 · UAT bắt đầu 27/07 · Go/No-Go 21/08 & 16/09 · Go-live 03/10 · Hypercare đến 30/10 · Đóng dự án 02/11.
- Cập nhật hằng tuần; dự báo bằng khoảng (Ch11).

#### 5. Kế hoạch quản lý chi phí

- Ngân sách: `templates/budget/FoodNow-Budget.csv`: **2.140 triệu + dự phòng 12% (256,8 triệu) = 2.396,8 ≈ 2,4 tỷ**.
- Quy tắc dự phòng: chỉ dùng cho rủi ro có trong RAID; PM tự dùng tới **5% ngân sách (≈ 120 triệu)** và báo trong tuần; vượt cần Sponsor duyệt bằng văn bản.
- Theo dõi: `budget-tracking.csv` hằng tháng; EVM hằng tuần từ tuần 12 (Ch34).
- Thanh toán theo mốc: 7 mốc (Ch14).

#### 6. Kế hoạch chất lượng

- `templates/quality/quality-plan.md`, `definition-of-done.md`, `quality-gates-checklist.md`.
- Mục tiêu: **không còn bug Critical/High khi go-live**; coverage logic thanh toán ≥ 85%; 6 quality gates; QA Lead có quyền chặn cổng G3–G5.

#### 7. Kế hoạch nguồn lực

- `templates/pm-plan/resource-plan.csv` (v1.1): 12 FTE; Bench Backend 50% từ 30/03–08/05; Tuấn 50% 09/03–03/04.
- Bus factor: dịch vụ đơn hàng/thanh toán (Sơn), kiến trúc (Dũng) — biện pháp: pair, ADR.
- Working Agreement: `templates/project-charter/team-charter-working-agreement.md`.

#### 8. Kế hoạch giao tiếp

- `templates/stakeholder-comms/communication-plan.md` (v1.1), `stakeholder-register.csv` (15 stakeholder), `raci-matrix.csv` (18 hạng mục).
- Báo cáo tuần thứ Sáu 15:00; họp Sponsor thứ Năm; SteerCo hằng tháng; leo thang 3 cấp.

#### 9. Kế hoạch quản lý rủi ro và RAID

- Rủi ro: `templates/risk-raid/FoodNow-Risk-Register.csv` (Ch18); RAID: `FoodNow-RAID-Log.csv` (Ch19).
- Rà soát: RAID mỗi thứ Hai 15 phút; top 5 rủi ro vào báo cáo tuần.
- Rủi ro lớn nhất: PayEasy trễ chứng nhận; bus factor; thay đổi yêu cầu.

#### 10. Kế hoạch mua sắm

- `templates/pm-plan/procurement-plan.md` (Ch21): PayEasy, SMS, bản đồ, kiểm thử bảo mật bên ngoài; đồng bộ vendor hằng tuần.

#### 11. Kế hoạch quản lý thay đổi

- Quy trình CR: đề xuất → đánh giá tác động (scope/time/cost/risk/quality) → CCB → quyết định → cập nhật baseline → thông báo.
- **CCB:** Bảo (chủ trì), Châu, Hà, Dũng, Nam; họp thứ Năm cùng họp Sponsor; thay đổi khẩn: Hà + Bảo duyệt trong 24 giờ.
- Biểu mẫu: `templates/change-request/*` (Ch20).

#### 12. Quản lý cấu hình & tài liệu

- `templates/pm-plan/project-folder-structure.md`, `decision-log.csv` (Ch22); nguồn sự thật duy nhất: Confluence; mã nguồn: Git theo chính sách nhánh (Ch31).

#### 13. Baseline

| Baseline | Tài liệu | Phiên bản | Ngày | Người duyệt |
|---|---|---|---|---|
| Scope | Scope Statement + WBS | v1.1 / v1.0 | 13/02 và 06/02/2026 | Bảo, Châu |
| Lịch | Gantt + Schedule | v1.0 | 27/02/2026 | Bảo |
| Chi phí | Budget + Cost baseline | v1.0 | 02/03/2026 | Bảo |

Chi tiết và lịch sử thay đổi: `templates/pm-plan/baseline-register.md`.

#### 14. Cách cập nhật PM Plan

- Baseline chỉ đổi qua CR được CCB duyệt.
- Phần "sống" (backlog, lịch sprint, RAID) cập nhật liên tục, không cần duyệt lại.
- Xem lại toàn bộ PM Plan ở mỗi mốc lớn (Scope Freeze, UAT, Go-live) và ghi vào lịch sử.

#### 15. Chữ ký

| Vai trò | Họ tên | Ngày |
|---|---|---|
| Sponsor | Trần Quốc Bảo | 20/03/2026 |
| Project Manager | Nguyễn Thu Hà | 20/03/2026 |
| Product Owner | Lê Minh Châu | 20/03/2026 |
| Tech Lead | Phạm Đức Dũng | 20/03/2026 |

---

#### Cách dùng cho dự án của bạn

1. Sao chép khung 15 mục; mỗi mục viết 3–8 dòng và **dẫn tới tài liệu chi tiết** thay vì chép lại.
2. Ghi số liệu baseline (scope, lịch, chi phí) và người duyệt; đó là phần quan trọng nhất.
3. Giữ toàn bộ PM Plan trong 8–15 trang; nếu dài hơn, cắt chi tiết ra kế hoạch phụ.
4. Gửi Sponsor review bằng họp 60 phút, đọc trước, chỉ thảo luận quyết định.
5. Đặt lịch xem lại PM Plan ở các mốc lớn và khi có thay đổi baseline.


## D.2 Baseline Register

📎 Nguồn: `templates/pm-plan/baseline-register.md`

**Tên tài liệu:** Baseline Register — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/03/2026
**Mục đích & khi nào dùng:** Ghi lại các baseline (scope, lịch, chi phí) đã được duyệt và mọi thay đổi baseline; dùng để so sánh kế hoạch với thực tế và truy vết thay đổi.

---

#### 1. Baseline hiện hành

| ID | Loại | Nội dung | Tài liệu | Giá trị chính | Ngày duyệt | Người duyệt |
|---|---|---|---|---|---|---|
| BL-S-01 | Scope | 11 epic in-scope, 7 out-of-scope; WBS 66 work package | Scope Statement v1.1; WBS v1.0 | 1.927 ngày công | 13/02/2026 | Bảo, Châu |
| BL-T-01 | Lịch | Gantt, Schedule; đường găng 131 ngày làm việc | Gantt v1.0 (27/02) | Go-live 03/10/2026 | 27/02/2026 | Bảo |
| BL-C-01 | Chi phí | 2.140 triệu + dự phòng 256,8 = 2.396,8 | Budget v1.0 (02/03) | Trần 2.400 triệu | 02/03/2026 | Bảo |
| BL-Q-01 | Chất lượng | Không bug Critical/High khi go-live | Quality Plan v1.0 (09/03) | 0 Critical/High | 09/03/2026 | Bảo, Nam |

#### 2. Quy tắc đổi baseline

- Chỉ đổi baseline qua **Change Request** được CCB duyệt; không sửa trực tiếp.
- Mỗi thay đổi: lý do, tác động, người duyệt, phiên bản mới; **giữ nguyên bản cũ** để so sánh.
- Đổi baseline không được dùng để "làm đẹp" số liệu (ví dụ dời baseline để SPI = 1).

#### 3. Lịch sử thay đổi baseline

| # | Ngày | Baseline | Thay đổi | CR | Quyết định |
|---|---|---|---|---|---|
| 1 | 13/02/2026 | Scope | v1.0 → v1.1: ví điện tử → R2 | (thoả thuận tuần 6) | Duyệt |
| 2 | 09–13/03/2026 | Scope | Yêu cầu đưa "đặt món theo nhóm" vào MVP | CR-001 | **Không đổi baseline** — giữ ở R2 |

(Các thay đổi sau được ghi thêm theo thời gian; xem Change Log ở Ch20.)

---

#### Cách dùng cho dự án của bạn

1. Sau khi Sponsor duyệt scope/lịch/chi phí, ghi mỗi baseline một dòng với tài liệu và phiên bản.
2. Đưa quy tắc đổi baseline vào PM Plan; ai được duyệt loại thay đổi nào.
3. Mỗi lần đổi, thêm dòng vào lịch sử và lưu bản cũ.
4. Khi báo cáo tiến độ, so với baseline hiện hành và nói rõ baseline nào.
5. Cuối dự án, dùng bảng này làm nguyên liệu cho lessons learned.


## D.3 Risk Register

📎 Nguồn: `templates/risk-raid/FoodNow-Risk-Register.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| Risk_ID | Type | Risk | Category | Cause_Consequence | P_1_5 | I_1_5 | Score | Level | Probability | Impact_MVND | EMV_MVND | Strategy | Response_Actions | Trigger | Contingency_Plan | Owner | Status | Date_Raised |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R01 | Mối đe doạ | PayEasy trễ cấp chứng nhận thanh toán | Vendor | Vendor quá tải hồ sơ → chứng nhận trễ → trễ end-to-end và UAT | 5 | 4 | =F2*G2 | =IF(H2>=17,"Rất cao",IF(H2>=10,"Cao",IF(H2>=5,"Trung bình","Thấp"))) | 0.9 | 80 | =J2*K2 | Mitigate | Crashing thanh toán end-to-end; fast-tracking kiểm thử bảo mật; họp vendor 2 lần/tuần | Vendor báo trễ; sandbox không ổn định | Dùng dự phòng thuê thêm Dev/QA 4 tuần | Hà | Đã xảy ra (T16) → Issue I-006 | 2025-12-08 |
| R02 | Mối đe doạ | Mất Backend senior (Sơn) — bus factor 1 | Nguồn lực | Chỉ một người hiểu dịch vụ đơn hàng/thanh toán → nghỉ việc → chậm | 5 | 3 | =F3*G3 | =IF(H3>=17,"Rất cao",IF(H3>=10,"Cao",IF(H3>=5,"Trung bình","Thấp"))) | 0.9 | 36 | =J3*K3 | Mitigate | Pair Sơn–Backend 2; ADR thanh toán; tài liệu API | Sơn nộp đơn nghỉ | Điều động Backend bench, kéo dài lịch 2 tuần | Dũng | Đã xảy ra (T14) → Issue I-004 | 2026-03-02 |
| R03 | Mối đe doạ | Sponsor đổi/thêm yêu cầu liên tục | Phạm vi | Ý tưởng mới ngoài phạm vi → scope creep → vượt lịch/ngân sách | 4 | 3 | =F4*G4 | =IF(H4>=17,"Rất cao",IF(H4>=10,"Cao",IF(H4>=5,"Trung bình","Thấp"))) | 0.7 | 40 | =J4*K4 | Mitigate | Parking lot; CR có đánh giá tác động; out-of-scope tường minh | ≥ 2 yêu cầu ngoài phạm vi/tháng | Hoán đổi với hạng mục Could | Hà | Đang theo dõi | 2025-12-08 |
| R04 | Mối đe doạ | PO thiếu thời gian, quyết định chậm | Con người | PO ~50% thời gian → backlog thiếu câu trả lời → story không sẵn sàng | 3 | 3 | =F5*G5 | =IF(H5>=17,"Rất cao",IF(H5>=10,"Cao",IF(H5>=5,"Trung bình","Thấp"))) | 0.5 | 24 | =J5*K5 | Mitigate | Họp đồng bộ cố định 2 lần/tuần; BA đại diện quyết định nhỏ | Story chờ quyết định > 3 ngày | Sponsor uỷ quyền thêm cho BA | Châu | Đang theo dõi | 2025-12-08 |
| R05 | Mối đe doạ | Theo dõi đơn thời gian thực không đạt hiệu năng | Kỹ thuật | Tải cao → cập nhật vị trí chậm → trải nghiệm kém | 3 | 4 | =F6*G6 | =IF(H6>=17,"Rất cao",IF(H6>=10,"Cao",IF(H6>=5,"Trung bình","Thấp"))) | 0.5 | 60 | =J6*K6 | Mitigate | Spike sớm; kiểm thử tải theo sprint; caching | Độ trễ p95 > 5 giây ở test | Giảm tần suất cập nhật; polling | Dũng | Đang theo dõi | 2026-02-09 |
| R06 | Mối đe doạ | Lộ dữ liệu thẻ/PII | Bảo mật | Lỗ hổng → lộ dữ liệu → phạt, bồi thường, mất khách | 1 | 5 | =F7*G7 | =IF(H7>=17,"Rất cao",IF(H7>=10,"Cao",IF(H7>=5,"Trung bình","Thấp"))) | 0.1 | 800 | =J7*K7 | Transfer | Tokenization của PayEasy; pentest bên ngoài; mã hoá | Pentest phát hiện lỗ hổng mức cao | Kế hoạch ứng phó sự cố dữ liệu | Dũng | Đang theo dõi | 2025-12-08 |
| R07 | Mối đe doạ | Nợ kỹ thuật tích luỹ do lịch căng | Kỹ thuật | Bỏ qua refactor → code khó bảo trì → tốn công về sau | 4 | 3 | =F8*G8 | =IF(H8>=17,"Rất cao",IF(H8>=10,"Cao",IF(H8>=5,"Trung bình","Thấp"))) | 0.7 | 32 | =J8*K8 | Mitigate | Bảng nợ kỹ thuật; dành 10% sprint trả nợ | Coverage giảm 2 sprint liên tiếp | Sprint trả nợ sau UAT | Dũng | Đang theo dõi | 2026-02-27 |
| R08 | Mối đe doạ | Chi phí bản đồ vượt quota | Vendor | Lưu lượng cao hơn dự kiến → phí tăng | 2 | 2 | =F9*G9 | =IF(H9>=17,"Rất cao",IF(H9>=10,"Cao",IF(H9>=5,"Trung bình","Thấp"))) | 0.3 | 16 | =J9*K9 | Mitigate | Cache tuyến; giám sát quota | Dùng > 80% quota | Nâng gói với ngân sách dự phòng | Ánh | Đang theo dõi | 2026-03-16 |
| R09 | Mối đe doạ | iOS bị từ chối/duyệt chậm ở App Store | Bên ngoài | Review 1–3 ngày; có thể từ chối → trễ phát hành | 3 | 3 | =F10*G10 | =IF(H10>=17,"Rất cao",IF(H10>=10,"Cao",IF(H10>=5,"Trung bình","Thấp"))) | 0.5 | 24 | =J10*K10 | Mitigate | Submit bản beta sớm; checklist review | Bản beta bị từ chối | Phát hành Android trước | Khoa | Đang theo dõi | 2026-03-16 |
| R10 | Mối đe doạ | Nhà hàng/tài xế không chấp nhận quy trình mới | Người dùng | Đổi cách làm → phản đối → dùng ít | 3 | 4 | =F11*G11 | =IF(H11>=17,"Rất cao",IF(H11>=10,"Cao",IF(H11>=5,"Trung bình","Thấp"))) | 0.5 | 48 | =J11*K11 | Mitigate | Workshop; đào tạo; nhóm thử nghiệm | Khảo sát < 70% hài lòng | Hỗ trợ tận nơi; điều chỉnh UX | Lan | Đang theo dõi | 2026-01-12 |
| R11 | Mối đe doạ | Đội CS chưa sẵn sàng khi go-live | Vận hành | Thiếu quy trình → ticket ngập → trải nghiệm xấu | 3 | 3 | =F12*G12 | =IF(H12>=17,"Rất cao",IF(H12>=10,"Cao",IF(H12>=5,"Trung bình","Thấp"))) | 0.5 | 28 | =J12*K12 | Mitigate | Huy vào đội UAT; kịch bản hỗ trợ; đào tạo | CS chưa hoàn thành đào tạo 3 tuần trước go-live | Tăng ca hỗ trợ hypercare | Hà | Đang theo dõi (giảm từ P4) | 2026-01-27 |
| R12 | Mối đe doạ | Môi trường staging không ổn định | Hạ tầng | Cấu hình lệch prod → lỗi ẩn → UAT trễ | 3 | 3 | =F13*G13 | =IF(H13>=17,"Rất cao",IF(H13>=10,"Cao",IF(H13>=5,"Trung bình","Thấp"))) | 0.5 | 24 | =J13*K13 | Mitigate | IaC; staging giống prod; giám sát | Lỗi chỉ xảy ra ở prod | Dùng bản sao môi trường | Ánh | Đang theo dõi | 2026-03-16 |
| R13 | Mối đe doạ | Người chia sẻ (Mai Anh, Ánh) không đủ giờ | Nguồn lực | Ưu tiên dự án khác → thiết kế/hạ tầng chậm | 3 | 2 | =F14*G14 | =IF(H14>=17,"Rất cao",IF(H14>=10,"Cao",IF(H14>=5,"Trung bình","Thấp"))) | 0.5 | 16 | =J14*K14 | Accept | Lịch khối; thoả thuận với quản lý họ | Thiết kế trễ > 1 tuần | Điều Designer/DevOps bổ sung | Hà | Chấp nhận, theo dõi | 2026-01-05 |
| R14 | Mối đe doạ | Quy định về ví điện tử/dữ liệu thay đổi | Pháp lý | Yêu cầu mới → làm lại/thời gian tuân thủ | 3 | 3 | =F15*G15 | =IF(H15>=17,"Rất cao",IF(H15>=10,"Cao",IF(H15>=5,"Trung bình","Thấp"))) | 0.5 | 32 | =J15*K15 | Accept | Theo dõi văn bản; cố vấn pháp lý | Có văn bản mới | Điều chỉnh roadmap R2 | Hà | Chấp nhận, theo dõi | 2026-02-13 |
| R15 | Mối đe doạ | SMS OTP chậm/thất bại | Vendor | Nhà cung cấp lỗi → không đăng nhập được | 2 | 3 | =F16*G16 | =IF(H16>=17,"Rất cao",IF(H16>=10,"Cao",IF(H16>=5,"Trung bình","Thấp"))) | 0.3 | 24 | =J16*K16 | Transfer | Hợp đồng 2 nhà cung cấp; fallback | Tỷ lệ OTP thành công < 95% | Chuyển nhà cung cấp dự phòng | Dũng | Đang theo dõi | 2026-02-09 |
| R16 | Mối đe doạ | Nhánh feature sống lâu gây merge conflict lớn | Kỹ thuật | Nhánh dài → merge khó → mất vài ngày | 3 | 3 | =F17*G17 | =IF(H17>=17,"Rất cao",IF(H17>=10,"Cao",IF(H17>=5,"Trung bình","Thấp"))) | 0.5 | 24 | =J17*K17 | Avoid | Luật nhánh ≤ 5 ngày; PR nhỏ | Nhánh mở > 5 ngày | Dành 2 ngày merge cho cả đội | Dũng | Đang theo dõi | 2026-04-13 |
| R17 | Mối đe doạ | Vượt ngân sách do crashing và thay thế nhân sự | Chi phí | Dùng dự phòng cho nhiều việc | 4 | 3 | =F18*G18 | =IF(H18>=17,"Rất cao",IF(H18>=10,"Cao",IF(H18>=5,"Trung bình","Thấp"))) | 0.7 | 40 | =J18*K18 | Mitigate | Theo dõi hằng tuần; quy tắc dùng dự phòng | Dùng > 50% dự phòng trước T30 | Cắt phạm vi Could | Hà | Đang theo dõi | 2026-04-20 |
| R18 | Mối đe doạ | Không đủ người dùng thật cho UAT | Người dùng | Nhà hàng/tài xế bận → UAT thiếu dữ liệu | 2 | 3 | =F19*G19 | =IF(H19>=17,"Rất cao",IF(H19>=10,"Cao",IF(H19>=5,"Trung bình","Thấp"))) | 0.3 | 24 | =J19*K19 | Mitigate | Lịch UAT đặt trước; bồi dưỡng | < 70% người tham gia xác nhận | Dùng nhóm đại diện nhỏ | Châu | Đang theo dõi | 2026-04-06 |
| O01 | Cơ hội | Nhà hàng đối tác sẵn sàng beta sớm | Người dùng | Beta sớm → phản hồi thật trước UAT | 3 | 3 | =F20*G20 | =IF(H20>=17,"Rất cao",IF(H20>=10,"Cao",IF(H20>=5,"Trung bình","Thấp"))) | 0.5 | 24 | =J20*K20 | Enhance | Mời 3 nhà hàng dùng thử staging | Nhà hàng xác nhận |  | Lan | Đang khai thác | 2026-03-16 |
| O02 | Cơ hội | Vendor bản đồ tặng credit khởi đầu | Vendor | Giảm chi phí bản đồ | 2 | 2 | =F21*G21 | =IF(H21>=17,"Rất cao",IF(H21>=10,"Cao",IF(H21>=5,"Trung bình","Thấp"))) | 0.3 | 12 | =J21*K21 | Exploit | Đàm phán ở lần gia hạn | Vendor xác nhận |  | Ánh | Đang theo dõi | 2026-03-16 |
| TONG_MOI_DOA |  | Tổng EMV mối đe doạ còn hiệu lực |  |  |  |  |  |  |  |  | =SUMIFS(L2:L21,B2:B21,"Mối đe doạ") |  |  |  |  |  |  |  |

## D.4 Kế hoạch ứng phó rủi ro

📎 Nguồn: `templates/risk-raid/risk-response-plan.md`

**Tên tài liệu:** Kế hoạch ứng phó rủi ro — top rủi ro FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 20/04/2026 (tuần 16)
**Mục đích & khi nào dùng:** Mô tả chi tiết cách ứng phó cho các rủi ro lớn nhất: chiến lược, hành động, trigger, kế hoạch dự phòng, chi phí, rủi ro còn lại; dùng cho top 5–8 rủi ro (Score ≥ 12).

---

#### 1. Bốn chiến lược cho rủi ro tiêu cực

| Chiến lược | Ý nghĩa | Ví dụ |
|---|---|---|
| **Avoid** (tránh) | Loại bỏ nguyên nhân | Luật nhánh ≤ 5 ngày để không có nhánh dài |
| **Mitigate** (giảm) | Giảm xác suất hoặc tác động | Pair để giảm bus factor |
| **Transfer** (chuyển giao) | Chuyển tác động sang bên khác | Dùng tokenization của PayEasy, pentest bên ngoài |
| **Accept** (chấp nhận) | Không làm gì hoặc dự phòng | Chấp nhận thay đổi quy định nhỏ, có dự phòng |

Cho cơ hội: **Exploit, Enhance, Share, Accept**.

#### 2. Kế hoạch chi tiết

| ID | Rủi ro | Score | EMV (triệu) | Chiến lược | Hành động phòng ngừa | Trigger | Kế hoạch dự phòng (contingency) | Chi phí ứng phó | Chủ sở hữu | Hạn | Rủi ro còn lại |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R01 | PayEasy trễ chứng nhận | 20 | 72,0 | Mitigate | Họp vendor 2 lần/tuần; ngày hứa bằng văn bản; leo thang qua Sponsor | Vendor báo trễ | Crashing thanh toán E2E; fast-tracking kiểm thử bảo mật; thuê thêm Dev/QA 4 tuần | ≈ 110 triệu từ dự phòng | Hà | Liên tục | Trung bình |
| R02 | Mất Backend senior (bus factor 1) | 15 | 32,4 | Mitigate | Pair; ADR; tài liệu API | Đơn nghỉ việc | Điều động bench; tuyển thay thế | ≈ 60 triệu | Dũng | Liên tục | Trung bình |
| R03 | Sponsor thêm yêu cầu | 12 | 28,0 | Mitigate | Parking lot; CR; out-of-scope | ≥ 2 yêu cầu ngoài phạm vi/tháng | Hoán đổi hạng mục Could | Trong CR | Hà | Liên tục | Thấp |
| R05 | Hiệu năng realtime | 12 | 30,0 | Mitigate | Spike; test tải mỗi sprint | p95 > 5 giây | Giảm tần suất cập nhật | Trong sprint | Dũng | Sprint 8 | Thấp |
| R07 | Nợ kỹ thuật | 12 | 22,4 | Mitigate | Bảng nợ; 10% sprint | Coverage giảm 2 sprint | Sprint trả nợ sau UAT | Trong sprint | Dũng | Liên tục | Trung bình |
| R10 | Nhà hàng/tài xế không dùng | 12 | 24,0 | Mitigate | Workshop; nhóm thử nghiệm | Khảo sát < 70% | Hỗ trợ tận nơi | Trong ngân sách đào tạo | Lan | UAT | Thấp |
| R17 | Vượt ngân sách | 12 | 28,0 | Mitigate | Theo dõi tuần; quy tắc dự phòng | Dùng > 50% dự phòng trước T30 | Cắt hạng mục Could | Không | Hà | Liên tục | Trung bình |
| R06 | Lộ dữ liệu thẻ/PII | 5 | 80,0 | Transfer | Tokenization; pentest 45 triệu | Pentest thấy lỗ hổng cao | Kế hoạch ứng phó sự cố dữ liệu | 45 triệu | Dũng | UAT | Thấp |

**Tổng EMV các rủi ro Score ≥ 12:** 72,0 + 32,4 + 28,0 + 30,0 + 22,4 + 24,0 + 28,0 = **236,8 triệu**, nằm trong dự phòng 256,8 triệu (đủ 92%).

#### 3. Quy tắc sử dụng dự phòng

1. Chỉ dùng cho rủi ro có ID trong Risk Register.
2. PM tự dùng ≤ 5% ngân sách (≈ 120 triệu) và báo cáo trong tuần; vượt cần Sponsor duyệt bằng văn bản.
3. Ghi vào budget-tracking cột dự phòng đã dùng.

---

#### Cách dùng cho dự án của bạn

1. Chọn 5–8 rủi ro Score cao nhất để lập kế hoạch chi tiết.
2. Với mỗi rủi ro: một chiến lược, hành động phòng ngừa, trigger đo được, kế hoạch dự phòng, người chịu trách nhiệm.
3. So tổng EMV của rủi ro chính với dự phòng; nếu thiếu, thảo luận với Sponsor sớm.
4. Rà kế hoạch ở họp RAID hằng tuần; cập nhật rủi ro còn lại sau mỗi hành động.
5. Khi trigger xảy ra, kích hoạt kế hoạch dự phòng và chuyển rủi ro thành Issue (Ch19).


## D.5 RAID Log

📎 Nguồn: `templates/risk-raid/FoodNow-RAID-Log.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| RAID_ID | Type | Title | Description | Owner | Status | Score_or_Priority | Date_Raised | Need_By | Promised_Date | Response_Action | Linked_IDs | Ghi_chu |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-01 | Risk | PayEasy trễ chứng nhận | Vendor quá tải → chứng nhận trễ → trễ end-to-end/UAT | Hà | Đã xảy ra → I-006 | 20 | 2025-12-08 |  |  | Họp vendor 2 lần/tuần; contingency: crashing | RR:R01 |  |
| R-02 | Risk | Mất Backend senior (bus factor 1) | Sơn giữ dịch vụ đơn hàng/thanh toán | Dũng | Đã xảy ra → I-004 | 15 | 2026-03-02 |  |  | Pair; ADR | RR:R02 |  |
| R-03 | Risk | Sponsor thêm yêu cầu ngoài phạm vi | Scope creep | Hà | Đang theo dõi | 12 | 2025-12-08 |  |  | Parking lot; CR | RR:R03 |  |
| R-04 | Risk | Hiệu năng theo dõi thời gian thực | Tải cao → chậm | Dũng | Đang theo dõi | 12 | 2026-02-09 |  |  | Spike; test tải mỗi sprint | RR:R05 |  |
| R-05 | Risk | Nhà hàng/tài xế không chấp nhận quy trình mới | Adoption thấp | Lan | Đang theo dõi | 12 | 2026-01-12 |  |  | Workshop; nhóm thử nghiệm | RR:R10 |  |
| R-06 | Risk | Đội CS chưa sẵn sàng go-live | Thiếu quy trình hỗ trợ | Hà | Đang theo dõi | 9 | 2026-01-27 |  |  | Huy vào đội UAT | RR:R11 |  |
| R-07 | Risk | Nhánh feature sống lâu gây conflict | Merge khó | Dũng | Đang theo dõi | 9 | 2026-04-13 |  |  | Luật nhánh ≤ 5 ngày | RR:R16 |  |
| R-08 | Risk | Vượt ngân sách do crashing | Dùng dự phòng nhiều | Hà | Đang theo dõi | 12 | 2026-04-20 |  |  | Theo dõi tuần | RR:R17 |  |
| A-01 | Assumption | Đội đủ 12 FTE từ 26/01/2026 | Backend 2 vào từ tuần 4 | Hà | Đã kiểm chứng (26/01) |  | 2025-12-15 | 2026-01-26 |  | Điều động nội bộ | I-001 | Đúng |
| A-02 | Assumption | Khách cung cấp API dữ liệu nhà hàng trước 15/03/2026 | Cần cho tích hợp và migrate dữ liệu | Châu | Sai (nhận 03/04) |  | 2026-01-05 | 2026-03-15 |  | Theo dõi; escalate | D-03; I-002 | Trễ 19 ngày |
| A-03 | Assumption | PayEasy cấp sandbox 27/03/2026 | Cần cho tích hợp | Hà | Đã kiểm chứng (27/03) |  | 2026-01-05 | 2026-03-27 | 2026-03-27 | Họp vendor | D-01 | Đúng |
| A-04 | Assumption | Nhà hàng/tài xế sẵn sàng tham gia UAT | Cần cho UAT vòng 1 | Châu | Đang theo dõi |  | 2026-01-12 | 2026-07-27 |  | Lịch UAT đặt trước | D-07 |  |
| A-05 | Assumption | MVP chỉ cần thanh toán thẻ + COD (không ví) | Theo Scope v1.1 | Hà | Đã kiểm chứng |  | 2026-02-13 |  |  | Ghi vào Scope |  |  |
| A-06 | Assumption | Không ai nghỉ Tết dài hơn 1 tuần | Kế hoạch năng lực | Hà | Sai một phần (2 người) |  | 2026-01-12 | 2026-02-23 |  | Rà phép |  | Tác động nhỏ |
| A-07 | Assumption | Apple review ≤ 3 ngày làm việc | Cho lịch phát hành iOS | Khoa | Đang theo dõi |  | 2026-03-16 |  |  | Submit beta sớm | R09 |  |
| A-08 | Assumption | API bản đồ đủ quota cho MVP | Chi phí và độ ổn định | Ánh | Đang theo dõi |  | 2026-03-16 |  |  | Giám sát quota |  |  |
| A-09 | Assumption | Sponsor/PO phản hồi trong 2 ngày làm việc | Không chặn sprint | Hà | Đang theo dõi (PO chậm 1–2 lần) |  | 2025-12-15 |  |  | Họp cố định | R04 |  |
| A-10 | Assumption | Sơn ở lại đến hết dự án | Giả định nhân sự | Hà | Sai (nghỉ việc T14) |  | 2026-01-05 |  |  | Xem I-004 | I-004 | Đã sai |
| I-001 | Issue | Thiếu 1 Backend khi kickoff | Vị trí Backend 2 trống | Hà | Đã đóng (26/01) | P2 | 2026-01-05 |  |  | Điều động nội bộ | A-01 |  |
| I-002 | Issue | API dữ liệu nhà hàng chưa được gửi | Trễ so với 15/03 | Châu | Đã đóng (03/04) | P3 | 2026-03-16 |  |  | Escalate lên Sponsor; nhận API 03/04 | A-02; D-03 | Trễ 19 ngày |
| I-003 | Issue | Sprint 1 chỉ đạt 40% cam kết | Đội chưa quen; Tết; thiếu Backend | Hà | Đã đóng (retro) | P3 | 2026-02-27 |  |  | Retro; giảm cam kết Sprint 2 |  |  |
| I-004 | Issue | Sơn nghỉ việc | Mất Backend senior | Dũng | Đang xử lý | P1 | 2026-04-06 |  |  | Điều bench; pair Backend 2 | R-02 | Ch43 |
| I-005 | Issue | Tuấn bị rút 50% sang dự án khác | 09/03–03/04 | Hà | Đã đóng (03/04) | P3 | 2026-03-09 |  |  | Khoa nhận giỏ hàng; bench Backend |  |  |
| I-006 | Issue | PayEasy báo trễ chứng nhận 3 tuần | 28/04–29/05 → 19/06 | Hà | Đang xử lý | P1 | 2026-04-20 |  |  | Kích hoạt contingency | R-01 | Ch21 |
| D-01 | Dependency | PayEasy cấp sandbox | Cần cho tích hợp | Yến | Đã giao (27/03) |  | 2026-01-05 | 2026-03-27 | 2026-03-27 | Họp vendor | A-03 |  |
| D-02 | Dependency | PayEasy cấp chứng nhận thanh toán | Cần trước end-to-end | Yến | Trễ (mới hứa 19/06) |  | 2026-01-05 | 2026-05-29 | 2026-06-19 | Escalate | R-01; I-006 | Trễ 3 tuần |
| D-03 | Dependency | Khách gửi API dữ liệu nhà hàng | Cho tích hợp/migrate | Châu | Đã giao (03/04) |  | 2026-01-05 | 2026-03-15 | 2026-03-15 | Escalate | A-02; I-002 | Trễ 19 ngày |
| D-04 | Dependency | Nhà cung cấp SMS: tài khoản sandbox | Cho OTP | Dũng | Đã giao (13/03) |  | 2026-02-09 | 2026-03-09 | 2026-03-09 | Theo dõi |  | Trễ 4 ngày |
| D-05 | Dependency | API key bản đồ | Cho định tuyến | Ánh | Đã giao (02/03) |  | 2026-02-09 | 2026-03-02 | 2026-03-02 |  |  |  |
| D-06 | Dependency | Apple Developer account được duyệt | Cho beta iOS | Khoa | Đã giao (27/03) |  | 2026-03-16 | 2026-03-30 | 2026-03-27 |  |  | Sớm 3 ngày |
| D-07 | Dependency | Nhà hàng/tài xế thử nghiệm sẵn sàng UAT | Cho UAT vòng 1 | Châu | Đang theo dõi |  | 2026-04-06 | 2026-07-27 | 2026-07-27 | Lịch UAT | A-04 |  |
| D-08 | Dependency | Cố vấn pháp lý rà điều khoản sử dụng | Cho go-live | Hà | Đang theo dõi |  | 2026-04-06 | 2026-06-15 | 2026-06-15 |  |  |  |

## D.6 Change Request

📎 Nguồn: `templates/change-request/change-request-form.md`

**Tên tài liệu:** Change Request (CR) — mẫu điền sẵn: CR-001
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — nộp 09/03/2026, CCB quyết định 12/03/2026
**Mục đích & khi nào dùng:** Ghi lại một đề xuất thay đổi phạm vi/lịch/chi phí/chất lượng để đánh giá và quyết định; dùng cho mọi thay đổi ngoài baseline.

---

#### 1. Thông tin chung

| Trường | Nội dung |
|---|---|
| Mã CR | **CR-001** |
| Ngày đề xuất | 09/03/2026 |
| Người đề xuất | Trần Quốc Bảo (Sponsor) |
| Tên thay đổi | Đưa "Đặt món theo nhóm" vào MVP |
| Loại | Thêm phạm vi (ngoài baseline; hiện ở R2) |
| Mức khẩn | Thường (không khẩn cấp) |
| Người đánh giá | Hà (PM), Dũng, Lan, Nam |

#### 2. Mô tả thay đổi

**Nhu cầu:** Nhiều nhóm công sở đặt chung; Sponsor muốn có tính năng này để marketing chiến dịch "văn phòng".
**Mô tả:** Một người tạo phiên đặt nhóm, chia sẻ link; nhiều người thêm món; chia hoá đơn; một lần thanh toán.
**Giá trị kỳ vọng:** Tăng giá trị đơn trung bình và số khách mới từ nhóm văn phòng (giả định của Sponsor, chưa có số liệu).

#### 3. Đánh giá tác động (tóm tắt — chi tiết ở `impact-assessment.md`)

| Khía cạnh | Tác động |
|---|---|
| Scope | Thêm 1 epic (≈ 104 ngày công theo PERT) |
| Time | Trễ khoảng **4 tuần** nếu giữ nguyên đội; đường găng không đổi nhưng nhánh dev mất float |
| Cost | ≈ 104 ngày × 1,25 triệu = **130 triệu** (T&M) |
| Risk | Tăng rủi ro thanh toán (chia hoá đơn); lộ thêm tích hợp |
| Quality | Thêm kiểm thử thanh toán nhóm |
| Resource | Backend đã quá tải T13–T16 |

#### 4. Các phương án

| Phương án | Mô tả | Tác động |
|---|---|---|
| A | Đưa vào MVP, giữ đội | Trễ ~4 tuần hoặc cắt hạng mục khác |
| B | Đưa vào MVP và cắt hạng mục khác cùng cỡ | Mất báo cáo, thông báo nâng cao |
| C | **Giữ ở Release 2** (khuyến nghị) | Không đổi baseline |
| D | Làm bản tối giản (chỉ chia link, không chia hoá đơn) ở R1 | Chi phí ≈ 35 ngày |

#### 5. Khuyến nghị của PM

Chọn **C**, xếp đặt món theo nhóm vào R2 sau khi có dữ liệu MVP; cân nhắc **D** cho R1 nếu dữ liệu ủng hộ.

#### 6. Quyết định của CCB (12/03/2026)

| Trường | Nội dung |
|---|---|
| Quyết định | **Từ chối đưa vào MVP; giữ ở R2 (phương án C)** |
| Người duyệt | Bảo (chủ trì), Châu, Hà, Dũng, Nam |
| Baseline thay đổi? | Không |
| Hành động | Cập nhật Roadmap v1.0; ghi vào Change Log; thông báo đội |

---

#### Cách dùng cho dự án của bạn

1. Mọi yêu cầu ngoài baseline phải vào form; không nhận thay đổi bằng lời nói.
2. Điền mục 3 với số liệu do người làm ước lượng, không PM đoán.
3. Luôn có ít nhất 3 phương án (gồm "không làm" hoặc "làm sau").
4. CCB quyết định; ghi người, ngày, có đổi baseline không.
5. Thông báo kết quả cho người đề xuất và đội trong 24 giờ.


## D.7 Đánh giá tác động

📎 Nguồn: `templates/change-request/impact-assessment.md`

**Tên tài liệu:** Đánh giá tác động thay đổi — CR-001
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 11/03/2026
**Mục đích & khi nào dùng:** Phân tích tác động của một CR lên scope, lịch, chi phí, rủi ro, chất lượng, nguồn lực để CCB quyết định; dùng trước mọi buổi CCB.

---

#### 1. Ước lượng công (do người làm)

| Hạng mục | Người ước | Ngày công (O / M / P) | PERT E |
|---|---|---|---|
| Backend: phiên đặt nhóm, chia hoá đơn | Dũng, Sơn | 22 / 30 / 45 | 31,2 |
| Mobile: giao diện nhóm, chia sẻ link | Khoa | 30 / 40 / 55 | 40,8 |
| Thanh toán nhóm (PayEasy) | Dũng | 10 / 15 / 25 | 15,8 |
| Kiểm thử | Nam | 8 / 10 / 16 | 10,7 |
| UX/UI | Mai Anh | 4 / 5 / 8 | 5,3 |
| **Tổng** | | | **≈ 103,8** |

PERT E = (O + 4M + P) / 6. Tổng E ≈ **104 ngày công** (khoảng lạc quan–bi quan: 74–149). Bất định lớn vì thanh toán nhóm.

#### 2. Tác động lên các ràng buộc

| Ràng buộc | Tác động | Cách tính |
|---|---|---|
| **Scope** | +1 epic (E12) | Ngoài baseline |
| **Time** | **+4 tuần** nếu giữ đội | Chỉ Backend/Mobile làm được (~6,5 FTE): 6,5 × 4,74 ngày/tuần × 0,87 ≈ 26,8 ngày/tuần; 104 ÷ 26,8 ≈ **3,9 tuần** |
| **Cost** | ≈ 130 triệu | 104 ngày × 1,25 triệu/ngày (T&M) |
| **Risk** | Thêm rủi ro thanh toán | Ghi vào Risk Register |
| **Quality** | Thêm kiểm thử thanh toán nhóm | Tăng thời gian UAT |
| **Resource** | Backend đã quá tải 145% T13–T16 | Không đủ nếu không thêm người |

#### 3. Đường găng và float

- Nhánh dev có float 5 ngày; +104 ngày công trên nhóm 6,5 FTE làm float bằng 0 và **trễ go-live nếu không giảm phạm vi khác**.
- Đường găng (thanh toán) không đổi, nhưng chia hoá đơn cần tích hợp thêm với PayEasy, có thể làm chuỗi găng dài hơn.

#### 4. Kết luận đánh giá

Thay đổi hợp lệ về giá trị nhưng **không phù hợp ràng buộc ưu tiên** (Time cố định, Cost trần, Quality thanh toán bất khả nhượng). Khuyến nghị C (giữ ở R2) hoặc D (bản tối giản ở R1).

---

#### Cách dùng cho dự án của bạn

1. Gọi người làm ước lượng theo O/M/P cho từng hạng mục; PM không tự đoán.
2. Chuyển công thành thời gian bằng năng lực **của nhóm thực sự làm việc đó**, không dùng cả đội.
3. Kiểm tra tác động lên đường găng và float; cập nhật Risk Register.
4. Nêu ít nhất 3 phương án và khuyến nghị.
5. Gửi CCB trước buổi họp 1 ngày làm việc.


## D.8 Change Log

📎 Nguồn: `templates/change-request/change-log.csv` (bảng dưới là bản đọc của tệp CSV; công thức Excel giữ nguyên trong tệp gốc).

| CR_ID | Date_Requested | Requester | Title | Type | Scope_Impact_pd | Schedule_Impact_weeks | Cost_MVND | Decision | Decision_Date | Approver | Baseline_Changed | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-001 | 2026-03-09 | Trần Quốc Bảo | Đưa đặt món theo nhóm vào MVP | Thêm phạm vi | 104 | 4 | =F2*1.25 | Từ chối — giữ ở R2 | 2026-03-12 | CCB (Bảo chủ trì) | Không | Cân nhắc bản tối giản ở R1 |
| CR-002 | 2026-04-16 | Trần Quốc Bảo | Thêm đăng nhập bằng Apple/Google | Thêm phạm vi | 18 | 1 | =F3*1.25 | Hoãn — R1 | 2026-04-23 | CCB | Không | Ưu tiên thấp hơn thanh toán |
| CR-003 | 2026-06-22 | Phan Quang Huy | Màn hình hướng dẫn cho tài xế mới | Thêm nhỏ | 8 | 0 | =F4*1.25 | Duyệt — dùng T&M | 2026-06-25 | CCB | Có (Scope v1.2) | Trong ngân sách CR của khách |
| CR-004 | 2026-07-02 | Phan Quang Huy | Đổi luồng huỷ đơn theo yêu cầu CS | Đổi trong phạm vi | 6 | 0 | =F5*1.25 | Duyệt | 2026-07-09 | CCB | Không | Trong epic E3; PO xếp backlog |
| CR-005 | 2026-08-03 | Lê Minh Châu | Sửa quy tắc tính phí giao (lỗi quy tắc) | Khẩn cấp | 4 | 0 | =F6*1.25 | Duyệt khẩn | 2026-08-03 | Bảo + Hà | Có (Scope v1.3) | Duyệt trong 24 giờ |
