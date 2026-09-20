# book_pm — Kế hoạch biên soạn sách "Quản Lý Dự Án Phần Mềm — Từ Zero Đến Thực Chiến"

Sách dạy nghề Project Manager (PM) cho dự án phát triển phần mềm bằng tiếng Việt: từ khái niệm
quản lý dự án cơ bản, quy trình, quy chuẩn, bộ tài liệu mẫu điền sẵn (Charter, WBS, Timeline/Gantt,
Roadmap, Risk/RAID, Change Request, báo cáo...), đến cách ứng phó các tình huống cụ thể qua bài tập
tình huống có đáp án phân tích.

> **Trạng thái: đã dựng khung (M1) — đang viết từ Ch01.** README này được thiết kế để **một AI
> (hoặc người) đọc xong là có thể tự viết từng chương mà không cần hỏi lại**. Mọi quyết định về
> cấu trúc, văn phong, case study, mẫu tài liệu đều nằm trong file này. Khi có mâu thuẫn giữa
> ý tưởng riêng và README → theo README; nếu thấy README sai/thiếu thì **sửa README trước**, rồi mới viết.

## 0. Cách dùng README này (dành cho AI viết sách)

**Quy trình viết mỗi chương (bắt buộc theo thứ tự):**

1. Đọc **mục 4 (Quy ước chương)**, **mục 5 (Văn phong)**, **mục 7 (Case study bible)** — luôn luôn, mỗi lần.
2. Đọc **"brief" của chương** ở mục 6 (mục tiêu, nội dung bắt buộc, template đi kèm, tình huống FoodNow, bài tập).
3. Đọc chương liền trước (để nối mạch) và mọi chương được brief nhắc tới ở dòng "Liên kết".
4. Viết file `book/<part>/chXX-slug.md` theo khung ở mục 4. Nếu chương có template: tạo file trong
   `templates/<loai>/` **trước**, rồi mới viết chương trích/dẫn từ template.
5. Tự kiểm bằng **checklist Definition of Done (mục 9)**. Không đạt → sửa, chưa đánh dấu xong.
6. Cập nhật **bảng tiến độ (mục 11)**: đổi `⬜` → `✅`, ghi số từ. Cập nhật `book/manifest.json`.
7. Commit riêng cho mỗi chương: `docs(chXX): <tiêu đề chương>`.

**Thứ tự viết khuyến nghị:** viết theo số chương tăng dần (mạch kiến thức và case study phụ thuộc
nhau). Ngoại lệ: Phụ lục B–D (mẫu đầy đủ) viết ngay sau khi xong Phần 2 để các chương sau dẫn
chiếu đúng.

**Không tự bịa số liệu FoodNow.** Mọi tên người, ngày, ngân sách, số lượng phải lấy từ mục 7. Cần
dữ kiện mới → thêm vào mục 7 trước rồi mới dùng (để các chương khác thấy được).

## 1. Mục tiêu

- Dạy nghề PM phần mềm từ con số 0 đến mức **điều hành được một dự án 6–12 tháng, đội 8–15 người**.
- Bao phủ trọn vòng đời: khởi động → lập kế hoạch → thực thi → giám sát → đóng dự án → vận hành,
  cho cả **Waterfall, Agile (Scrum/Kanban) và Hybrid**.
- Mỗi chương liên quan đến tài liệu có **mẫu thật điền sẵn ví dụ** trong `templates/` — copy dùng
  được ngay (Markdown + CSV mở bằng Excel/Google Sheets; sơ đồ bằng Mermaid).
- Có phần **bài tập tình huống** (Phần 8): người đọc tự xử lý trước, đối chiếu đáp án phân tích sau.
- Chất lượng đủ để phát hành công khai. Định dạng: **HTML + PDF** trước, **EPUB** sau.

## 2. Đối tượng độc giả

- Sinh viên/Fresher/Dev/QA/BA muốn chuyển sang PM; PM mới nhận dự án đầu tiên.
- **Không yêu cầu** biết PMBOK/PRINCE2 hay từng làm PM. Có hiểu biết sơ về phần mềm là đủ (biết
  Dev/Tester làm gì); chương nào dùng thuật ngữ kỹ thuật phải giải thích ngắn lần đầu xuất hiện.
- Sách dạy **cách làm và tư duy quyết định**, không phải sách luyện thi (không có ngân hàng câu hỏi thi). Nhưng có **hệ thống chứng chỉ đầy đủ**
  (Ch04, mục 6.8, Phụ lục H): nên học/thi chứng chỉ nào, thứ tự, cách ôn, và bảng ánh xạ nội dung sách ↔ đề cương thi để dùng sách làm nền tảng ôn thi.

## 3. Cấu trúc thư mục

```
book_pm/
├── book/
│   ├── manifest.json                       # Mục lục (title, parts[].chapters[]{num,slug,title})
│   ├── part0-nhap-mon/                     # Ch 1-4
│   ├── part1-khoi-dong-du-an/              # Ch 5-9
│   ├── part2-lap-ke-hoach/                 # Ch 10-17
│   ├── part3-rui-ro-thay-doi-mua-sam/      # Ch 18-22
│   ├── part4-thuc-thi-va-dieu-hanh/        # Ch 23-29
│   ├── part5-delivery-plan-va-release/     # Ch 30-33 (branching, tagging, release, deploy)
│   ├── part6-giam-sat-bao-cao-chat-luong/  # Ch 34-38
│   ├── part7-dong-du-an-va-van-hanh/       # Ch 39-41
│   ├── part8-bai-tap-tinh-huong/           # Ch 42-47
│   └── part9-phu-luc/                      # Phụ lục A-H
├── templates/                              # File mẫu thật — xem mục 8
│   ├── project-charter/  stakeholder-comms/  wbs/  timeline-gantt/  roadmap/
│   ├── estimation/  budget/  quality/  pm-plan/  risk-raid/  change-request/
│   ├── delivery-plan/  sprint-agile/  status-report/  meeting/  go-live/  closure/
├── tools/                                  # build.js, build-pdf.js, style.css (copy từ ../book_ba/tools)
├── dist/                                   # HTML + PDF đã build (commit sẵn)
├── package.json                            # scripts: build, build:pdf, build:all (như book_ba)
└── README.md
```

Tên file chương: `chXX-slug-khong-dau.md` (XX hai chữ số). Phụ lục: `appendix-x-slug.md`.
Slug trong `manifest.json` phải trùng tên file (bỏ `.md`).

## 4. Quy ước cho mỗi chương

Mọi chương dùng đúng khung sau (heading tiếng Việt, đánh số mục `XX.Y`):

```markdown
# Chương XX: <Tiêu đề>

## Mục tiêu học
- 3–5 gạch đầu dòng, mỗi dòng bắt đầu bằng động từ đo được ("Phân biệt được…", "Lập được…").

## XX.1 … XX.n   (thân chương — các mục theo brief)
   - Định nghĩa ngắn → giải thích → ví dụ FoodNow → (khi có) sơ đồ Mermaid / bảng.
   - Mục dùng template: trích **một phần** template (đoạn quan trọng nhất) ngay trong chương,
     kèm dòng: "📎 Mẫu đầy đủ: `templates/<loai>/<file>`".

## Tình huống FoodNow
   - 1 đoạn kể việc xảy ra trong dự án tại giai đoạn này, có tên nhân vật (mục 7), số liệu cụ thể,
     và cho thấy PM đã làm/quyết định gì và vì sao.

## Bài tập
   - 2–4 bài. Ít nhất 1 bài "làm ra sản phẩm" (điền template, lập WBS…) và 1 bài "tình huống ngắn"
     (3–6 dòng đề, không kèm đáp án trong chương; đáp án gợi ý ở cuối dưới thẻ <details>).

## Sai lầm thường gặp
   - 4–6 mục dạng: **Sai lầm** → hậu quả thực tế → **Cách khắc phục**.

## Tóm tắt & tiếp theo
   - 3–5 gạch đầu dòng ôn lại; 1–2 câu dẫn sang chương sau (nêu số chương).
```

Yêu cầu định lượng: **2.500–4.500 từ/chương** (chương template-nặng và chương tình huống có thể
tới 5.500). Mỗi chương **≥ 1 sơ đồ Mermaid hoặc bảng so sánh**; chương lập kế hoạch/lịch **bắt buộc**
có sơ đồ (Gantt/flowchart). Chương Phần 8 (bài tập tình huống) dùng khung riêng ở mục 6.9.

## 5. Văn phong & thuật ngữ

- Tiếng Việt, giọng **mentor thực chiến**: thẳng, cụ thể, có chính kiến ("Nên… vì…", "Đừng…, vì…"),
  xưng "bạn"; không giáo điều, không sáo rỗng, không kể lể lý thuyết dài không có ví dụ.
- Thuật ngữ chuyên ngành **giữ tiếng Anh** khi ngành dùng tiếng Anh (Sprint, Backlog, WBS, Gantt,
  Stakeholder, Scope creep, Baseline…). Lần đầu xuất hiện: **in đậm + giải nghĩa tiếng Việt trong
  ngoặc**. Các lần sau dùng nhất quán một cách gọi. Bảng thuật ngữ chuẩn: Phụ lục E.
- Ví dụ luôn cụ thể (con số, ngày, tên người); **không** dùng "ví dụ: công ty A, dự án X".
- Mỗi khái niệm trả lời được 3 câu: **Là gì? Khi nào dùng? Làm thế nào?** (+ khi nào KHÔNG dùng).
- Nêu rõ **đánh đổi** (trade-off) thay vì "cách đúng duy nhất". PM giỏi là người chọn có lý do.
- Khối trích dẫn `>` dùng cho: lưu ý quan trọng, mẹo thực chiến. Không lạm dụng (≤ 3 khối/chương).
- Không chèn nội dung chung chung kiểu AI ("Trong thế giới ngày nay…"). Không kết chương bằng lời khen.
- Không sao chép nguyên văn PMBOK/Scrum Guide/tài liệu có bản quyền: diễn đạt lại bằng lời mình,
  trích tối đa vài từ khoá/khái niệm. Nêu nguồn ở Phụ lục G.
- Số liệu ngành (tỷ lệ dự án thất bại…) chỉ dùng khi chắc nguồn; nếu không → nói định tính.

## 6. Mục lục & brief từng chương (47 chương + 8 phụ lục)

Mỗi brief gồm: **Nội dung bắt buộc** (mục phải có), **Template**, **FoodNow** (tình huống), **Bài tập**,
**Liên kết** (chương phải đọc/dẫn chiếu). Người viết được thêm mục phụ nếu cần, không được bỏ mục bắt buộc.

### Phần 0 — Nhập môn (Ch 1–4)

**Ch01 — Dự án và quản lý dự án là gì?** (`ch01-du-an-va-quan-ly-du-an`)
- Bắt buộc: định nghĩa dự án (tạm thời, duy nhất, có đầu ra) vs vận hành (operations) vs sản phẩm;
  ràng buộc "tam giác" Scope–Time–Cost (+ Quality, Risk, Resource); vì sao dự án phần mềm hay trễ/vượt
  ngân sách (5 nguyên nhân gốc: yêu cầu mù mờ, ước lượng lạc quan, thay đổi không kiểm soát, giao
  tiếp kém, bỏ qua rủi ro); thế nào là dự án "thành công" (đúng hạn ≠ thành công: giá trị kinh doanh).
- Template: — . FoodNow: giới thiệu dự án + đội (tóm tắt mục 7). Bài tập: phân loại 6 hoạt động là
  "dự án" hay "vận hành"; xác định ràng buộc ưu tiên của 3 tình huống. Liên kết: mục 7.

**Ch02 — Vai trò Project Manager trong dự án phần mềm** (`ch02-vai-tro-project-manager`)
- Bắt buộc: PM làm gì/không làm gì; PM vs Scrum Master vs Product Owner vs BA vs Tech Lead vs
  Engineering Manager (bảng RACI đơn giản); PM trong công ty outsource vs product vs in-house;
  10 đầu việc hằng ngày/hằng tuần của PM; kỹ năng cứng/mềm; 3 kiểu PM (điều phối, người phục vụ, "cảnh sát")
  và vì sao kiểu thứ ba thất bại; đạo đức nghề nghiệp (nói thật về rủi ro, không "ngâm" tin xấu).
- Template: `meeting/pm-weekly-routine.md` (lịch làm việc tuần mẫu của PM). FoodNow: ngày đầu tiên của
  chị Hà (PM). Bài tập: viết mô tả công việc PM cho đội 10 người; tình huống Dev hỏi "PM có quyền
  quyết định kỹ thuật không?". Liên kết: Ch01.

**Ch03 — Vòng đời dự án phần mềm & các mô hình: Waterfall, Agile, Hybrid** (`ch03-vong-doi-du-an-va-mo-hinh`)
- Bắt buộc: 5 nhóm quy trình (Khởi động, Lập kế hoạch, Thực thi, Giám sát, Đóng) & vòng đời SDLC;
  Waterfall/V-model; Agile (Manifesto, 12 nguyên tắc tóm lược); Scrum, Kanban, XP tóm tắt; Hybrid;
  **bảng tiêu chí chọn mô hình** (độ ổn định yêu cầu, hợp đồng, quy mô, rủi ro, tuân thủ pháp lý,
  mức tham gia của khách); ma trận "hợp đồng fixed-price vs T&M vs dedicated team" × mô hình.
- Template: `pm-plan/methodology-decision-matrix.md`. FoodNow: vì sao chọn Hybrid (khung Waterfall
  cho ngân sách/mốc + Scrum bên trong). Bài tập: chọn mô hình cho 4 dự án giả định + giải thích.
  Liên kết: Ch01, Ch23.

**Ch04 — Bộ khung kiến thức, chứng chỉ & lộ trình nghề PM** (`ch04-khung-kien-thuc-chung-chi-lo-trinh`)
- Bắt buộc: các bộ khung kiến thức (PMBOK — diễn đạt lại; PRINCE2; Scrum Guide; ISO 21500/21502 mức nhận biết);
  lộ trình nghề Fresher → Team Lead → PM → Senior PM → Program/Delivery Manager → Head of PMO; bảng đối chiếu
  thuật ngữ PMBOK ↔ Agile ↔ cách gọi trong sách này; mức lương/vai trò chỉ nêu định tính.
- **Hệ thống chứng chỉ PM (mục 6.8)** — bắt buộc có đủ: bản đồ 5 nhóm chứng chỉ, bảng 4 cấp độ (L0–L3), khung ra quyết định
  "học chứng chỉ nào, khi nào, vì sao", lộ trình khuyến nghị theo giai đoạn nghề, kế hoạch ôn thi mẫu, và **ánh xạ nội dung sách ↔ đề cương thi** (Phụ lục H).
  Nguyên tắc nêu rõ cho người đọc: chứng chỉ **không thay thế** kinh nghiệm; chọn theo mục tiêu nghề + yêu cầu thị trường tuyển dụng, không săn "nhiều chứng chỉ".
- Template: `pm-plan/pm-career-roadmap.md`, `pm-certification-map.csv`, `certification-decision-matrix.md`, `certification-study-plan.md`.
  FoodNow: Hà (6 năm KN, từng là BA) đứng trước lựa chọn PMP hay PSM — tự đánh giá theo ma trận và chọn PSM I trước (rẻ, nhanh, hợp Hybrid) rồi PMP sau 12 tháng.
  Bài tập: lập kế hoạch chứng chỉ 24 tháng cho bản thân (chọn ≤ 3 chứng chỉ, lịch học theo tuần, ngân sách, mốc thi dự phòng).

### Phần 1 — Khởi động dự án (Ch 5–9)

**Ch05 — Business Case & Project Charter** (`ch05-business-case-project-charter`)
- Bắt buộc: vì sao có dự án (vấn đề/cơ hội), business case (chi phí – lợi ích – ROI/payback đơn giản –
  phương án "không làm gì"); tiêu chí thành công đo được; Charter gồm: mục đích, mục tiêu SMART,
  phạm vi sơ bộ (in/out), deliverable chính, mốc chính, ngân sách sơ bộ, giả định, ràng buộc, rủi ro
  cấp cao, stakeholder chính, quyền hạn của PM, chữ ký Sponsor; Charter ≠ Kế hoạch dự án.
- Template: `project-charter/FoodNow-Business-Case.md`, `FoodNow-Project-Charter.md` (điền đầy đủ).
  FoodNow: buổi thuyết phục Sponsor duyệt ngân sách. Bài tập: viết Charter cho dự án "app đặt lịch cắt tóc".
  Liên kết: Ch01, Phụ lục B.

**Ch06 — Stakeholder & Kế hoạch giao tiếp** (`ch06-stakeholder-va-ke-hoach-giao-tiep`)
- Bắt buộc: nhận diện stakeholder (checklist 8 nhóm); ma trận Quyền lực–Quan tâm (Mendelow) & chiến
  lược cho từng ô; Stakeholder Register; ma trận RACI (quy tắc: mỗi việc đúng 1 "A"); kế hoạch giao
  tiếp (ai–cần gì–kênh–tần suất–người phụ trách); quy tắc leo thang (escalation path).
- Template: `stakeholder-comms/stakeholder-register.csv`, `raci-matrix.csv`, `communication-plan.md`.
  FoodNow: phát hiện stakeholder "ẩn" (CS Manager) sau khi dự án đã bắt đầu. Bài tập: lập register cho
  dự án của bạn. Liên kết: Ch05, Ch36.

**Ch07 — Xác định phạm vi (Scope) & yêu cầu cấp cao** (`ch07-xac-dinh-pham-vi`)
- Bắt buộc: Scope Statement (in-scope / out-of-scope / deliverable / tiêu chí chấp nhận / giả định);
  product scope vs project scope; MVP và cách cắt phạm vi; yêu cầu cấp cao → epic (PM không thay BA
  viết chi tiết — nêu ranh giới, dẫn sang `book_ba` để đọc thêm); kỹ thuật chống scope creep ngay từ
  đầu (danh sách "out of scope" tường minh, dấu vết phê duyệt).
- Template: `project-charter/scope-statement.md`. FoodNow: chốt MVP 3 loại người dùng, đẩy "thanh toán
  ví điện tử" ra Release 2. Bài tập: viết scope statement + 5 mục out-of-scope. Liên kết: Ch05, Ch10, Ch20.

**Ch08 — Thiết lập đội & cách làm việc** (`ch08-thiet-lap-doi-va-cach-lam-viec`)
- Bắt buộc: cơ cấu đội theo quy mô; cách tuyển/xin nguồn lực; Team Charter & Working Agreement;
  Definition of Ready/Done sơ bộ; chọn công cụ (Jira/Trello/Confluence/Slack/Git — nguyên tắc chọn,
  không hướng dẫn cài); môi trường (dev/staging/prod); onboarding thành viên mới trong 5 ngày;
  đội phân tán/remote/offshore (múi giờ, overlap hours).
- Template: `project-charter/team-charter-working-agreement.md`, `meeting/onboarding-checklist.md`.
  FoodNow: dựng đội 12 người trong 3 tuần khi thiếu 1 Backend. Bài tập: viết working agreement.

**Ch09 — Kickoff meeting** (`ch09-kickoff-meeting`)
- Bắt buộc: kickoff nội bộ vs kickoff với khách; mục đích; agenda 90 phút; chuẩn bị (deck 10 slide,
  tài liệu gửi trước); cách dẫn dắt; kết quả cần có (RACI xác nhận, kênh liên lạc, lịch họp định kỳ,
  danh sách câu hỏi mở); biên bản họp.
- Template: `meeting/kickoff-agenda-and-deck-outline.md`, `meeting/meeting-minutes.md`.
  FoodNow: kickoff bị Sponsor thay đổi mục tiêu ngay giữa cuộc họp — PM xử lý. Bài tập: soạn agenda
  kickoff cho dự án của bạn. Liên kết: Ch05, Ch06.

### Phần 2 — Lập kế hoạch (Ch 10–17)

**Ch10 — WBS (Work Breakdown Structure)** (`ch10-wbs`)
- Bắt buộc: WBS là gì/không là gì (phân rã **deliverable**, không phải danh sách việc theo thời gian);
  quy tắc 100%; các cách phân rã (theo deliverable / giai đoạn / thành phần) & khi nào dùng; WBS
  Dictionary; work package (8–80 giờ); mã hoá 1.1.2; WBS cho Waterfall vs cho Agile (Epic→Feature→Story);
  liên hệ WBS → ước lượng → lịch.
- Template: `wbs/FoodNow-WBS.md` (cây Mermaid + bảng), `FoodNow-WBS.csv` (mã, tên, mô tả, người phụ
  trách, ước lượng, phụ thuộc), `wbs-dictionary.md`. FoodNow: WBS 4 cấp của MVP (~60 work package).
  Bài tập: lập WBS cho "website đặt phòng khách sạn nhỏ". Sai lầm: WBS theo người thay vì deliverable.

**Ch11 — Ước lượng** (`ch11-uoc-luong`)
- Bắt buộc: ước lượng ≠ cam kết; nón bất định (cone of uncertainty); bottom-up/analogous/parametric;
  three-point (PERT: (O+4M+P)/6, độ lệch chuẩn (P−O)/6); Planning Poker, story points, T-shirt,
  velocity; buffer & contingency (nên đặt ở đâu); cách trả lời "khi nào xong?" bằng **khoảng** + độ tin cậy;
  ước lượng công sức người-ngày ↔ lịch (hệ số năng suất 0,6–0,7).
- Template: `estimation/three-point-estimate.csv` (có công thức PERT), `estimation-checklist.md`.
  FoodNow: khách ép "làm 3 tháng", đội ước lượng 5 tháng — PM đàm phán bằng dữ liệu. Bài tập: tính PERT
  cho 5 task. Liên kết: Ch10, Ch12, Ch24.

**Ch12 — Lập lịch: Timeline, Gantt, Critical Path** (`ch12-lap-lich-gantt-critical-path`)
- Bắt buộc: 4 loại quan hệ phụ thuộc (FS/SS/FF/SF), lead/lag; đường găng (CPM) — tính tay ví dụ
  mạng nhỏ (ES/EF/LS/LF, float); rút ngắn lịch: crashing vs fast-tracking; lịch theo mốc (milestone);
  lịch Agile (theo sprint/release); ràng buộc nguồn lực (san tải), ngày nghỉ lễ VN (Tết);
  đọc và trình bày Gantt cho lãnh đạo.
- Template: `timeline-gantt/FoodNow-Gantt.md` (Mermaid `gantt`), `FoodNow-Schedule.csv` (task, start,
  end, duration, predecessor, resource, %), `critical-path-worksheet.md`. FoodNow: Gantt 9 tháng với
  đường găng nằm ở tích hợp thanh toán. Bài tập: tính đường găng mạng 8 nút. Liên kết: Ch10, Ch11.

**Ch13 — Roadmap & Release Plan** (`ch13-roadmap-va-release-plan`)
- Bắt buộc: roadmap ≠ Gantt (mục tiêu/kết quả, không cam kết ngày chi tiết); Now–Next–Later;
  Roadmap theo theme/outcome; roadmap cho lãnh đạo vs cho đội vs cho khách; release plan (release
  train, mục tiêu từng release, tiêu chí go/no-go); lộ trình MVP → R1 → R2; cách cập nhật roadmap
  mà không "lật kèo".
- Template: `roadmap/FoodNow-Product-Roadmap.md` (Mermaid timeline + bảng Now/Next/Later),
  `FoodNow-Release-Plan.md`, `roadmap.csv`. FoodNow: Roadmap 3 release qua 12 tháng, R2 bị dời khi có
  yêu cầu pháp lý. Bài tập: vẽ roadmap Now–Next–Later cho dự án của bạn. Liên kết: Ch07, Ch12, Ch24.

**Ch14 — Ngân sách & quản lý chi phí** (`ch14-ngan-sach-va-chi-phi`)
- Bắt buộc: cấu trúc chi phí dự án phần mềm (nhân sự, hạ tầng/cloud, license, vendor, đào tạo, dự phòng);
  tính chi phí theo man-month & billing rate; contingency reserve vs management reserve; cost baseline;
  theo dõi (Actual vs Planned); cash flow theo mốc thanh toán; chi phí thay đổi; tính ROI/NPV đơn giản
  để bảo vệ ngân sách.
- Template: `budget/FoodNow-Budget.csv` (có công thức), `budget-tracking.csv`. FoodNow: ngân sách
  2,4 tỷ VND (chi tiết mục 7), dự phòng 12%. Bài tập: lập ngân sách cho đội 6 người/4 tháng.

**Ch15 — Kế hoạch chất lượng** (`ch15-ke-hoach-chat-luong`)
- Bắt buộc: chất lượng = phù hợp mục đích + không lỗi nghiêm trọng; Definition of Done; quality gates
  theo giai đoạn; chiến lược kiểm thử (unit/integration/system/UAT/performance/security) ở mức PM cần
  biết; code review, CI, coverage; chỉ số chất lượng (defect density, escaped defects, bug leakage);
  chi phí chất lượng (phòng ngừa vs sửa lỗi).
- Template: `quality/quality-plan.md`, `definition-of-done.md`, `quality-gates-checklist.md`. FoodNow:
  đặt ngưỡng "không còn bug Critical/High" cho go-live. Bài tập: viết DoD cho đội của bạn.

**Ch16 — Kế hoạch nguồn lực & năng lực đội** (`ch16-ke-hoach-nguon-luc`)
- Bắt buộc: Resource Plan (ai – vai trò – % thời gian – từ/đến); biểu đồ tải (resource histogram);
  san tải; nhân sự chia sẻ nhiều dự án (chi phí chuyển ngữ cảnh); bus factor; kế hoạch đào tạo;
  công thức "thêm người vào dự án trễ làm nó trễ hơn" (Brooks) và khi nào thêm người hợp lý.
- Template: `pm-plan/resource-plan.csv`. FoodNow: 1 Dev bị rút 50% sang dự án khác. Bài tập: san tải bảng nguồn lực.

**Ch17 — Project Management Plan tổng hợp** (`ch17-project-management-plan`)
- Bắt buộc: PM Plan gồm những kế hoạch phụ nào (scope, schedule, cost, quality, resource, comms, risk,
  procurement, change, config); baseline (scope/schedule/cost) & khi nào được đổi; cách tổng hợp
  ngắn gọn (8–15 trang, không phải 100 trang); review với Sponsor & ký duyệt; PM Plan "sống" cho Agile.
- Template: `pm-plan/FoodNow-Project-Management-Plan.md` (bản đủ, liên kết tới các template khác),
  `baseline-register.md`. FoodNow: buổi review PM Plan với Sponsor. Bài tập: lắp PM Plan từ các bài tập trước.

### Phần 3 — Rủi ro, thay đổi, mua sắm (Ch 18–22)

**Ch18 — Quản lý rủi ro** (`ch18-quan-ly-rui-ro`)
- Bắt buộc: rủi ro vs vấn đề (issue); quy trình (nhận diện → phân tích định tính/định lượng → ứng phó
  → theo dõi); 5 nguồn nhận diện (brainstorm, checklist, lessons learned, pre-mortem, SWOT); ma trận
  Xác suất × Tác động; 4 chiến lược cho rủi ro tiêu cực (Avoid/Mitigate/Transfer/Accept) + cho cơ
  hội (Exploit/Enhance/Share/Accept); risk owner, trigger, contingency plan, risk appetite; EMV cơ bản.
- Template: `risk-raid/FoodNow-Risk-Register.csv` (≥ 15 rủi ro thật), `pre-mortem-worksheet.md`,
  `risk-response-plan.md`. FoodNow: rủi ro cổng thanh toán trễ chứng nhận. Bài tập: pre-mortem cho dự án của bạn.

**Ch19 — RAID Log: Risk, Assumption, Issue, Dependency** (`ch19-raid-log`)
- Bắt buộc: 4 thành phần & ranh giới; vòng đời từng loại (Assumption được kiểm chứng/đóng ra sao,
  Issue được leo thang khi nào, Dependency có ngày cần/ngày hứa); nhịp rà soát hằng tuần 15 phút;
  RAID vs Risk Register; chuyển đổi qua lại (rủi ro xảy ra → issue).
- Template: `risk-raid/FoodNow-RAID-Log.csv` (cả 4 loại, ≥ 30 dòng), `raid-review-agenda.md`.
  FoodNow: assumption "khách cung cấp API nhà hàng trước 15/3" bị sai. Bài tập: phân loại 12 câu thành R/A/I/D.
  Liên kết: Ch18. **Đồng bộ với `book_ba` Ch31 & `templates/raid-log` (xem mục 10).**

**Ch20 — Quản lý thay đổi (Change Control)** (`ch20-quan-ly-thay-doi`)
- Bắt buộc: nguồn thay đổi; scope creep vs change request hợp lệ; quy trình CR (đề xuất → đánh giá
  tác động scope/time/cost/risk/quality → Change Control Board → quyết định → cập nhật baseline → thông báo);
  CCB gồm ai, họp khi nào; thay đổi khẩn cấp; thay đổi trong Agile (backlog vs sprint đang chạy);
  cách nói "không"/"được, nhưng…" với khách; log thay đổi.
- Template: `change-request/change-request-form.md`, `impact-assessment.md`, `change-log.csv`.
  FoodNow: khách xin thêm "đặt món theo nhóm" tuần thứ 10. Bài tập: đánh giá tác động 1 CR cho sẵn.
  Liên kết: Ch07, Ch17, Ch44.

**Ch21 — Quản lý phụ thuộc, vendor & mua sắm** (`ch21-vendor-va-mua-sam`)
- Bắt buộc: make vs buy vs SaaS; các loại hợp đồng (Fixed-price, T&M, Cost-plus, Dedicated team) — ưu/nhược
  theo góc PM; RFP/RFQ tóm tắt; SLA, điều khoản chấp nhận, phạt; quản lý vendor hằng tuần; phụ thuộc bên ngoài
  (API đối tác, cổng thanh toán, app store) & kế hoạch dự phòng.
- Template: `pm-plan/procurement-plan.md`, `vendor-scorecard.csv`. FoodNow: nhà cung cấp cổng thanh toán
  trễ 3 tuần. Bài tập: chấm điểm 3 vendor theo scorecard.

**Ch22 — Quản lý cấu hình, tài liệu & tri thức dự án** (`ch22-quan-ly-cau-hinh-tai-lieu`)
- Bắt buộc: cái gì cần đặt dưới quản lý phiên bản (code, tài liệu, cấu hình); cấu trúc thư mục tài
  liệu dự án; quy ước đặt tên/phiên bản; nguồn sự thật duy nhất (single source of truth); phân quyền;
  quản lý quyết định (Decision Log / ADR mức PM); sao lưu; tuân thủ bảo mật dữ liệu khách hàng.
- Template: `pm-plan/project-folder-structure.md`, `decision-log.csv`. FoodNow: 2 đội dùng 2 bản spec
  khác nhau. Bài tập: dựng cấu trúc thư mục cho dự án của bạn.

### Phần 4 — Thực thi & điều hành (Ch 23–29)

**Ch23 — Scrum dưới góc nhìn PM** (`ch23-scrum-duoi-goc-nhin-pm`)
- Bắt buộc: PM làm gì khi đội chạy Scrum (không phải Scrum Master, nhưng phối hợp); vai trò/sự kiện/
  artifact tóm lược; Sprint Goal; cách nối kế hoạch Waterfall-khung với sprint; capacity planning;
  commitment vs forecast; khi Scrum không hợp (đội hỗ trợ, ops).
- Template: `sprint-agile/sprint-planning-template.md`, `capacity-planning.csv`, `sprint-goal-examples.md`.
  FoodNow: Sprint 1 thất bại (hoàn thành 40% cam kết) — phân tích nguyên nhân. Bài tập: tính capacity 1 sprint.

**Ch24 — Backlog & ưu tiên ở góc độ PM** (`ch24-backlog-va-uu-tien`)
- Bắt buộc: Product Backlog vs Sprint Backlog vs Release backlog; PM/PO/BA chia việc thế nào;
  MoSCoW, RICE/WSJF, Kano tóm tắt; refinement; Definition of Ready; quản lý tồn đọng; liên hệ backlog ↔ WBS ↔ roadmap.
- Template: `sprint-agile/product-backlog.csv` (≥ 25 story, có ưu tiên & ước lượng), `dor-checklist.md`.
  FoodNow: cuộc chiến ưu tiên giữa Marketing và Vận hành. Bài tập: ưu tiên 12 story bằng MoSCoW + RICE.
  Liên kết: `book_ba` Ch23–24, Ch26.

**Ch25 — Kanban & chỉ số dòng chảy (Flow metrics)** (`ch25-kanban-va-flow-metrics`)
- Bắt buộc: bảng Kanban, WIP limit, các cột; lead time/cycle time/throughput; cumulative flow diagram (CFD)
  đọc thế nào; khi nào dùng Kanban thay Scrum (bảo trì, hỗ trợ); Scrumban; dự báo bằng Monte Carlo (mức khái niệm).
- Template: `sprint-agile/kanban-board-setup.md`, `flow-metrics.csv`. FoodNow: đội bảo trì sau go-live chuyển sang Kanban.
  Bài tập: tính cycle time trung bình từ 15 thẻ.

**Ch26 — Hybrid & mở rộng quy mô (nhiều đội)** (`ch26-hybrid-va-nhieu-doi`)
- Bắt buộc: Hybrid thực tế (khung ngân sách/mốc + Agile bên trong; "Water-Scrum-Fall" và cách tránh);
  phối hợp 2–5 đội (Scrum of Scrums, đồng bộ release, quản lý phụ thuộc chéo đội); PI planning/SAFe (mức nhận biết);
  quản lý chương trình (program) vs dự án; kiến trúc & ranh giới đội.
- Template: `sprint-agile/scrum-of-scrums-agenda.md`, `cross-team-dependency-board.csv`. FoodNow: tách 2 đội (Mobile / Backend+Web) từ R2.
  Bài tập: vẽ bản đồ phụ thuộc giữa 3 đội.

**Ch27 — Lãnh đạo & quản lý con người** (`ch27-lanh-dao-va-quan-ly-con-nguoi`)
- Bắt buộc: giai đoạn phát triển đội (Tuckman); động lực (autonomy–mastery–purpose); phản hồi (SBI);
  1-1 hằng tuần; xử lý xung đột (thỏa hiệp/hợp tác/…); xử lý thành viên yếu kém & "ngôi sao" kiêu; quá tải/burnout;
  ra quyết định & ủy quyền; quản lý lên (Sponsor) & quản lý ngang (PM khác/trưởng phòng); văn hoá nói thật.
- Template: `meeting/one-on-one-template.md`, `feedback-sbi-template.md`. FoodNow: xung đột Dev senior – QA lead.
  Bài tập: soạn lời phản hồi SBI cho 2 tình huống.

**Ch28 — Họp hiệu quả & nghi thức dự án** (`ch28-hop-hieu-qua`)
- Bắt buộc: các cuộc họp cần có & không cần có (bảng: mục đích – tần suất – thời lượng – thành phần – đầu ra);
  agenda, timebox, quyết định-hành động-người-hạn; biên bản 1 trang; họp từ xa; "no-meeting day";
  Steering Committee (SteerCo) họp thế nào; retrospective mẫu (Start-Stop-Continue, 4Ls, Sailboat).
- Template: `meeting/steerco-agenda.md`, `retrospective-formats.md`, `action-item-log.csv`.
  FoodNow: cắt 30% thời gian họp mà không mất thông tin. Bài tập: kiểm toán lịch họp của đội bạn.

**Ch29 — PM và kỹ thuật: CI/CD, môi trường, nợ kỹ thuật, DevOps** (`ch29-pm-va-ky-thuat`)
- Bắt buộc: PM cần hiểu gì về kỹ thuật (không cần code): kiến trúc mức khái niệm (client–server, API, DB, cloud),
  CI/CD, feature flag, môi trường (branching/release/deploy đi sâu ở **Phần 5, Ch30–33** — ở đây chỉ nhắc và dẫn sang); nợ kỹ thuật & cách "thương lượng" thời gian trả nợ;
  spike; hỏi Tech Lead 10 câu đúng; bảo mật & tuân thủ cơ bản (OWASP top-level, PDPA/Nghị định 13 VN mức nhận biết).
- Template: `quality/technical-debt-register.csv`, `questions-for-tech-lead.md`. FoodNow: Dev đề xuất refactor 2 tuần khi sát hạn.
  Bài tập: ra quyết định trả nợ kỹ thuật theo bảng chi phí trì hoãn.

### Phần 5 — Delivery Plan & Release Engineering (Ch 30–33)

Phần này trả lời câu hỏi PM hay bị hỏi mà ít sách dạy: **"Code đi từ máy Dev đến tay người dùng theo kế hoạch nào — nhánh nào,
tag nào, release khi nào, deploy bao lâu một lần?"** Hai mô hình chính được dạy song song, so sánh công bằng để người đọc chọn theo bối cảnh:
**(A) Branching & Release theo kế hoạch (GitFlow / release train, tag theo release plan)** và
**(B) Trunk-based + Daily Deployment (deploy hằng ngày, tách deploy khỏi release bằng feature flag)**.
PM **không** cần biết gõ lệnh Git; PM cần hiểu đủ để duyệt chiến lược, đặt chính sách, đọc được release và hỏi đúng câu. Lệnh Git chỉ ở mức
minh hoạ (khối `bash` ≤ 15 dòng/đoạn), luôn giải thích ý nghĩa bằng lời.

**Ch30 — Delivery Plan tổng thể: từ Roadmap đến từng bản phát hành** (`ch30-delivery-plan-tong-the`)
- Bắt buộc: Delivery Plan là gì (nối Roadmap Ch13 → Release Plan → lịch build/deploy thực tế) và khác Release Plan/Gantt ở đâu; các cấp
  phát hành: build nội bộ → staging → UAT → production; **release cadence** (mỗi sprint / 2–4 tuần / hằng ngày) và cách chọn;
  **Environment Matrix** (dev/QA/staging/UAT/prod: mục đích, ai deploy, dữ liệu, cổng vào); **Release Calendar** (tính freeze, Tết, lễ,
  cửa sổ deploy, ngày cấm deploy như chiều thứ Sáu); mapping **Sprint → Release candidate → Tag → Môi trường**; quy tắc Scope Freeze/Code Freeze;
  ai chịu trách nhiệm (Release Manager: PM/Tech Lead/DevOps — bảng RACI); **bảng quyết định chọn chiến lược A vs B**: quy mô đội, mức tự động
  hoá test, yêu cầu tuân thủ/kiểm toán, hợp đồng theo mốc, app mobile vs web/backend, tần suất khách muốn nhận bản.
  Lưu ý mobile: App Store/Google Play có review 1–3 ngày → **không "daily deploy" bản app**, chỉ backend/web/feature flag remote.
- Template: `delivery-plan/FoodNow-Delivery-Plan.md`, `release-calendar.csv`, `environment-matrix.md`, `delivery-strategy-decision-matrix.md`.
  FoodNow: Hà chọn **GitFlow-lite + release theo sprint** cho MVP (hợp đồng theo mốc, app mobile, cần UAT) và lập kế hoạch chuyển sang
  **trunk-based + daily deploy cho backend/web** sau go-live (R1). Bài tập: chọn chiến lược cho 3 dự án cho sẵn + lập release calendar 3 tháng.
  Liên kết: Ch03, Ch12, Ch13, Ch23, Ch29.

**Ch31 — Chiến lược nhánh (Branching Strategy): GitFlow, GitHub Flow, Trunk-based** (`ch31-chien-luoc-nhanh-branching`)
- Bắt buộc: vì sao cần chiến lược nhánh; **GitFlow đầy đủ**: `main`, `develop`, `feature/*`, `release/*`, `hotfix/*` — vai trò từng nhánh,
  luồng merge, khi nào tạo/xoá, sơ đồ Mermaid `gitGraph`; **GitFlow-lite** (bỏ bớt nhánh); **GitHub Flow** (main + feature ngắn hạn + PR);
  **Trunk-based Development** (nhánh ≤ 1–2 ngày, commit vào trunk thường xuyên, feature flag); bảng so sánh 4 mô hình (độ phức tạp, tốc độ,
  rủi ro conflict, độ ổn định release, yêu cầu tự động hoá, hợp với ai); quy ước tên nhánh (`feature/FN-123-them-gio-hang`, gắn mã Jira);
  Pull Request: nhỏ, review trong 24h, checklist PR; **branch protection** (bắt buộc review, CI xanh, cấm force-push `main`); chiến lược merge
  (merge commit / squash / rebase) mức PM cần biết; monorepo vs multi-repo với 3 app FoodNow → mỗi repo dùng chiến lược gì;
  **nhánh sống lâu & merge conflict** (dấu hiệu cảnh báo, chính sách: nhánh > 5 ngày phải báo).
- Template: `delivery-plan/branching-strategy.md` (chính sách nhánh FoodNow), `gitflow-diagram.md` (Mermaid gitGraph: 1 sprint + 1 hotfix),
  `trunk-based-workflow.md`, `pull-request-template.md`, `branch-protection-checklist.md`.
  FoodNow: Sprint 7 (T18) hai nhánh feature sống 3 tuần gây conflict 200 file — Dũng đề xuất luật "nhánh tối đa 5 ngày".
  Bài tập: vẽ gitGraph cho tình huống cho sẵn; viết chính sách nhánh cho đội 6 người. Liên kết: Ch29, Ch30, Ch32.

**Ch32 — Versioning, Tagging & Release Management theo kế hoạch** (`ch32-versioning-tagging-release`)
- Bắt buộc: **Semantic Versioning** `MAJOR.MINOR.PATCH` (+ `-rc.1`, `-beta.2`) — khi nào tăng số nào; **tag** là gì (đóng dấu commit, bất biến) và vì sao
  mọi bản lên UAT/prod đều phải có tag; **quy ước tag theo Release Plan** (`v0.N.0` cuối mỗi sprint → staging; `v1.0.0-rc.N` cho UAT; `v1.0.0` = go-live;
  `v1.0.1` = hotfix); mapping **tag ↔ Release Plan ↔ Jira Fix Version ↔ môi trường**; quy trình cắt release theo GitFlow từng bước
  (tạo `release/1.0.0` → chỉ sửa lỗi → tag → merge về `main` & `develop`); **Hotfix procedure** (từ tag prod, sửa, tag PATCH, back-merge, phê duyệt khẩn cấp);
  **Release Candidate** & tiêu chí lên prod (nối Go/No-Go Ch37); **Changelog & Release Notes** (cho kỹ thuật vs cho người dùng); **Release Checklist**
  (trước–trong–sau); phiên bản app mobile (versionName/versionCode, force update, backend hỗ trợ ≥ 2 phiên bản app); rollback bằng deploy lại tag cũ;
  lưu vết audit (ai duyệt, khi nào, tag nào chạy ở đâu); cherry-pick/backport khi hỗ trợ nhiều phiên bản.
- Template: `delivery-plan/tagging-and-versioning-policy.md`, `release-checklist.md`, `release-notes-template.md`, `hotfix-procedure.md`,
  `release-log.csv` (FoodNow: toàn bộ tag v0.1.0 → v1.0.1 với ngày, sprint, môi trường, người duyệt, Fix Version).
  FoodNow: v0.1.0 (T8) … v0.17.0, v1.0.0-rc.1 (T30, UAT), rc.2 (T35), **v1.0.0 (T39 go-live)**, **v1.0.1 hotfix (T39, sự cố cache)**.
  Bài tập: gán số phiên bản cho 8 thay đổi cho sẵn; viết release notes cho 1 bản; lập release checklist. Liên kết: Ch13, Ch31, Ch37, Ch38, Ch39.

**Ch33 — Deployment Pipeline & Daily Deployment** (`ch33-deployment-pipeline-daily-deployment`)
- Bắt buộc: **CI/CD pipeline** (build → test → scan → package → deploy) và các cổng chất lượng; **Continuous Delivery vs Continuous Deployment**;
  **Daily Deployment (deploy nhiều lần/ngày)**: điều kiện tiên quyết (test tự động đáng tin, trunk-based, feature flag, monitoring, rollback nhanh, PR nhỏ),
  một ngày deploy điển hình, "**deploy ≠ release**" (tách bằng feature flag / dark launch); chiến lược giảm rủi ro: rolling, **blue-green**, **canary**,
  staged rollout %; mobile: phased release, remote config; vòng đời feature flag (dọn flag cũ, flag debt); **DORA metrics** (Deployment Frequency, Lead Time for Changes,
  Change Failure Rate, Time to Restore) — công thức, các mức elite/high/medium/low (nêu nguồn ở Phụ lục G, diễn đạt lại), PM dùng để báo cáo hệ thống,
  **không chấm điểm cá nhân**; cửa sổ deploy & chính sách "không deploy chiều thứ Sáu/trước lễ"; on-call & quy trình khi deploy hỏng;
  **so sánh (A) Release theo kế hoạch vs (B) Daily deploy** — bảng đánh đổi + lộ trình chuyển A→B 6 bước (tăng test tự động → rút ngắn nhánh → thêm feature flag →
  deploy staging hằng ngày → canary prod → daily prod); tuân thủ/kiểm toán khi daily deploy (approval tự động, change record sinh từ pipeline).
- Template: `delivery-plan/daily-deployment-policy.md`, `deployment-runbook.md`, `ci-cd-pipeline-stages.md` (Mermaid), `feature-flag-register.csv`,
  `dora-metrics.csv` (12 tuần dữ liệu FoodNow, có công thức), `release-strategy-migration-plan.md`.
  FoodNow: sau hypercare (T44) backend/web chuyển sang trunk-based + daily deploy: tuần đầu 3 deploy/tuần → tuần 8 hằng ngày; Change Failure Rate 22% → 9%;
  1 deploy lỗi rollback trong 6 phút nhờ flag. Bài tập: tính 4 chỉ số DORA từ log cho sẵn; lập kế hoạch chuyển đổi 6 bước; tình huống: Sponsor đòi
  "deploy tính năng ngay trong ngày" — trả lời thế nào. Liên kết: Ch15, Ch29, Ch31, Ch32, Ch39.

### Phần 6 — Giám sát, báo cáo, chất lượng (Ch 34–38)

**Ch34 — Theo dõi tiến độ: burndown, velocity, EVM** (`ch34-theo-doi-tien-do-evm`)
- Bắt buộc: burndown/burnup, velocity, CFD (nhắc lại); **EVM** đầy đủ: PV, EV, AC, SV, CV, SPI, CPI, EAC, ETC,
  TCPI — công thức + ví dụ số; đọc đèn xanh/vàng/đỏ (ngưỡng); "watermelon status" (xanh ngoài đỏ trong);
  dự báo ngày hoàn thành; khi nào chỉ số nói dối.
- Template: `status-report/evm-calculator.csv` (có công thức), `burndown-data.csv`. FoodNow: tuần 20, SPI 0,82 — đọc & hành động.
  Bài tập: tính EVM cho bộ số cho sẵn. Liên kết: Ch12, Ch14.

**Ch35 — Báo cáo trạng thái & dashboard** (`ch35-bao-cao-trang-thai`)
- Bắt buộc: báo cáo tuần 1 trang (tóm tắt RAG, thành tựu, kế hoạch tuần sau, rủi ro/issue top 3, quyết định cần Sponsor,
  chỉ số); báo cáo cho SteerCo (tháng); dashboard (số nào đáng có, số nào "vanity"); viết tin xấu: mẫu email/tin nhắn;
  nguyên tắc "không bất ngờ" (no surprises).
- Template: `status-report/weekly-status-report.md`, `monthly-steerco-report.md`, `bad-news-email-template.md`.
  FoodNow: 3 báo cáo tuần liên tiếp cho thấy diễn biến từ xanh → vàng → đỏ. Bài tập: viết báo cáo tuần từ dữ liệu cho sẵn.

**Ch36 — Quản lý kỳ vọng & khách hàng khó** (`ch36-quan-ly-ky-vong-khach-hang`)
- Bắt buộc: kỳ vọng hình thành thế nào; nghệ thuật nói "không"; đàm phán (lợi ích vs lập trường, BATNA);
  khách đổi ý liên tục; khách "biết code" & can thiệp kỹ thuật; sponsor vắng mặt; demo định kỳ để khóa kỳ vọng;
  xử lý khủng hoảng niềm tin; văn bản hoá (email chốt lại sau họp).
- Template: `meeting/expectation-reset-script.md`, `negotiation-prep-sheet.md`. FoodNow: Sponsor đòi tính năng mới không tăng ngân sách.
  Bài tập: role-play kịch bản đàm phán (kịch bản cho sẵn).

**Ch37 — Kiểm thử, UAT & chuẩn bị phát hành** (`ch37-uat-va-chuan-bi-phat-hanh`)
- Bắt buộc: phân biệt các cấp kiểm thử; PM lập kế hoạch UAT (người test, dữ liệu, môi trường, lịch, tiêu chí);
  quản lý defect (severity vs priority, triage, SLA sửa lỗi, defect burn-down); tiêu chí Go/No-Go; regression;
  bug bash; sign-off UAT.
- Template: `quality/uat-plan.md`, `defect-triage-rules.md`, `go-no-go-checklist.md`. FoodNow: UAT tuần 30, 47 defect, 3 Critical.
  Bài tập: ra quyết định Go/No-Go từ bảng dữ liệu. Liên kết: Ch15, `book_ba` Ch34.

**Ch38 — Xử lý sự cố, leo thang & quản trị khủng hoảng dự án** (`ch38-su-co-leo-thang-khung-hoang`)
- Bắt buộc: phân cấp sự cố (dự án vs production); quy trình ứng phó (phát hiện → ổn định → điều tra → khôi phục → rút bài học);
  war room; leo thang đúng lúc, đúng người, kèm phương án; giao tiếp trong khủng hoảng (nội bộ/khách); dự án "đỏ" — 5 đòn bẩy
  cứu dự án (cắt scope, thêm người đúng cách, đổi cách làm, làm rõ quyết định, reset kỳ vọng); khi nào đề xuất dừng dự án.
- Template: `status-report/incident-report.md`, `project-recovery-plan.md`. FoodNow: sự cố production ngày đầu go-live.
  Bài tập: lập recovery plan cho dự án "đỏ" cho sẵn.

### Phần 7 — Đóng dự án & vận hành (Ch 39–41)

**Ch39 — Go-live & Cutover** (`ch39-go-live-va-cutover`)
- Bắt buộc: chiến lược phát hành (big bang, phased, canary, blue-green – mức PM); Cutover plan theo giờ (runbook);
  rollback plan & điểm không quay lại; hypercare (thời gian, trực, SLA); truyền thông go-live; đào tạo người dùng; dữ liệu migrate.
- Template: `go-live/cutover-plan.md` (timeline theo giờ), `rollback-plan.md`, `hypercare-plan.md`, `user-training-plan.md`.
  Dùng lại tag/release/rollback đã học ở Ch32–33 (cutover = deploy tag `v1.0.0`, rollback = tag trước đó; hotfix `v1.0.1`).
  FoodNow: đêm go-live 02:00 sáng thứ Bảy. Bài tập: lập cutover plan cho 1 hệ thống cho sẵn.

**Ch40 — Đóng dự án, bài học kinh nghiệm & bàn giao** (`ch40-dong-du-an-va-lessons-learned`)
- Bắt buộc: đóng giai đoạn vs đóng dự án; checklist đóng (deliverable đã bàn giao, nghiệm thu, thanh toán, hợp đồng, tài liệu,
  quyền truy cập, giải phóng nguồn lực); bàn giao vận hành (KT handover, runbook, SLA); Lessons Learned
  (retro cấp dự án, cách viết bài học **hành động được**); ghi nhận & chia tay đội; báo cáo đóng dự án.
- Template: `closure/project-closure-report.md`, `handover-checklist.md`, `lessons-learned-register.csv`, `acceptance-certificate.md`.
  FoodNow: đóng MVP, 12 bài học. Bài tập: viết 5 bài học hành động được từ đoạn kể cho sẵn.

**Ch41 — Sau dự án: đo lợi ích, PMO & danh mục dự án** (`ch41-loi-ich-pmo-portfolio`)
- Bắt buộc: benefits realization (đo giá trị sau 1/3/6 tháng); KPI thành công; PMO là gì (Supportive/Controlling/Directive), khi nào
  công ty cần; portfolio/program/project; chọn & ưu tiên dự án; quản lý đồng thời nhiều dự án; xây dựng phương pháp luận nội bộ.
- Template: `closure/benefits-realization-plan.md`, `pmo-starter-kit.md`. FoodNow: kết quả sau 3 tháng go-live so với Business Case.
  Bài tập: lập kế hoạch đo lợi ích cho 1 dự án.

### Phần 8 — Bài tập tình huống (Ch 42–47) — xem khung riêng mục 6.9

- **Ch42 — Tình huống về phạm vi & khách hàng** (`ch42-tinh-huong-pham-vi-khach-hang`): 6 tình huống (scope creep "tiện thể",
  yêu cầu mù mờ sát hạn, khách đổi ý sau UAT, Sponsor đòi giảm giá, khách không chịu ký nghiệm thu, yêu cầu vi phạm quy định).
- **Ch43 — Tình huống về tiến độ & nguồn lực** (`ch43-tinh-huong-tien-do-nguon-luc`): 6 tình huống (trễ 30% giữa dự án, Dev
  nghỉ việc giữa sprint, nhân sự chia sẻ, deadline bất khả thi, ước lượng sai hệ thống, nhiều đội lệch nhịp).
- **Ch44 — Tình huống về con người & xung đột** (`ch44-tinh-huong-con-nguoi-xung-dot`): 6 tình huống (Senior Dev từ chối làm theo
  quy trình, hai lead cãi nhau, thành viên hiệu suất kém, đội kiệt sức OT, stakeholder chính trị/phá đám, PM mới bị đội "test").
- **Ch45 — Tình huống về kỹ thuật & chất lượng** (`ch45-tinh-huong-ky-thuat-chat-luong`): 6 tình huống (bug Critical trước go-live,
  hiệu năng không đạt, nợ kỹ thuật, sự cố production, lộ dữ liệu, môi trường staging không ổn định).
- **Ch46 — Tình huống về vendor, ngân sách & pháp lý** (`ch46-tinh-huong-vendor-ngan-sach-phap-ly`): 6 tình huống (vendor trễ,
  vượt ngân sách 20%, cắt ngân sách giữa chừng, hợp đồng fixed-price mà scope mập mờ, thay đổi quy định, dừng dự án).
- **Ch47 — Capstone: FoodNow từ ý tưởng đến sau go-live** (`ch47-capstone-foodnow`): kể lại toàn bộ vòng đời dự án theo dòng thời gian,
  chỉ ra 10 quyết định then chốt của PM; bản đồ tài liệu (tài liệu nào ra đời ở giai đoạn nào, liên kết ra sao); 3 phiên bản
  "nếu làm khác đi" (What-if); bài tập cuối: người đọc lập bộ tài liệu khởi động + kế hoạch cho dự án của chính mình.
  Liên kết: toàn bộ sách; bắt buộc đối chiếu mục 7.

#### 6.8 Hệ thống chứng chỉ PM (nội dung bắt buộc cho Ch04 + Phụ lục H)

**Quy tắc bắt buộc khi viết:** thông tin chứng chỉ **thay đổi thường xuyên** (điều kiện, số câu, lệ phí, thời hạn hiệu lực, tên gọi). Vì vậy:
(1) chỉ nêu số liệu cụ thể khi chắc chắn; (2) mỗi thẻ chứng chỉ có dòng "**Kiểm tra lại trên trang chính thức của tổ chức cấp — thông tin có thể đã đổi**" và ngày biên soạn;
(3) **không ghi lệ phí và mức lương cụ thể** — chỉ mức tương đối ($/$$/$$$, tuần học ước lượng, đánh dấu "ước lượng của tác giả"); (4) không copy nội dung đề thi/ngân hàng câu hỏi (vi phạm bản quyền & đạo đức thi);
(5) khuyến khích học từ **tài liệu chính thức** của tổ chức cấp (Scrum Guide, PMBOK Guide, Agile Practice Guide, PRINCE2 manual…).

**Bản đồ 5 nhóm chứng chỉ** (mỗi nhóm nêu: mục tiêu, ai nên học, chứng chỉ tiêu biểu):

| Nhóm | Mục đích | Chứng chỉ tiêu biểu (danh sách phải phủ đủ) |
|---|---|---|
| **1. Quản lý dự án tổng quát (Predictive/Hybrid)** | Nền tảng PM, được thị trường công nhận rộng nhất | **PMI: CAPM, PMP**, PgMP (program), PfMP (portfolio) · **PRINCE2 Foundation/Practitioner** (PeopleCert) · **IPMA Level D/C/B/A** · **CompTIA Project+** · **Google Project Management Certificate** (Coursera — nhập môn) · ISO 21500 mức nhận biết |
| **2. Agile & Scrum** | Điều hành dự án Agile, đội Scrum | **Scrum.org: PSM I/II/III, PSPO I/II/III, PAL-E, PSK (Kanban)** · **Scrum Alliance: CSM, CSPO, A-CSM, CSP-SM** · **PMI-ACP** · **Kanban University: KMP/KMP II** · **AgilePM (APMG) Foundation/Practitioner** |
| **3. Scale, Program & Enterprise Agile** | Nhiều đội, tổ chức lớn | **SAFe: SAFe Agilist (SA), SAFe Scrum Master (SSM), SAFe POPM, SAFe RTE, SAFe Release Train…** · Disciplined Agile (PMI DASM/DASSM) · **Scrum@Scale** (mức nhận biết) · MSP (Managing Successful Programmes) |
| **4. Vận hành, DevOps, quản trị dịch vụ IT** | Nối dự án → vận hành, delivery/release | **ITIL 4 Foundation** → ITIL 4 Managing Professional · **DevOps Foundation** (DevOps Institute/PeopleCert) · **AWS Cloud Practitioner / Azure AZ-900 / Google Cloud Digital Leader** (hiểu cloud) · ISTQB Foundation (hiểu kiểm thử — bổ trợ Ch15, Ch37) |
| **5. Chuyên sâu bổ trợ** | Rủi ro, lịch, chất lượng, kinh doanh, an toàn thông tin | **PMI-RMP** (rủi ro) · **PMI-SP** (lịch) · **PMI-PBA / IIBA CBAP–CCBA** (BA — liên hệ `book_ba`) · **Lean Six Sigma Yellow/Green Belt** · **ISO/IEC 27001 Foundation/Lead Implementer** (bảo mật, nhận biết) · **PMI-PMOCP** (PMO) · **CISSP/Security+** (chỉ khi làm dự án bảo mật; mức nhận biết) |

**4 cấp độ và điều kiện chuyển cấp** (không dùng số năm cứng ngoài điều kiện chính thức của từng chứng chỉ):

| Cấp | Đối tượng | Mục tiêu | Chứng chỉ ứng viên (chọn 1–2) |
|---|---|---|---|
| **L0 — Nhập môn** | Sinh viên, chưa có kinh nghiệm dự án | Có từ vựng & tư duy nền | CAPM, Google PM Certificate, PSM I/CSM (nếu Agile), ITIL 4 Foundation, AWS/Azure cơ bản |
| **L1 — Junior PM / Team Lead** | 1–3 năm điều phối đội | Điều hành đội & sprint | **PSM I**, CSM, PMI-ACP (khi đủ điều kiện), PRINCE2 Foundation, ISTQB Foundation |
| **L2 — Project Manager** | Đã dẫn dự án end-to-end | Được công nhận toàn diện | **PMP** (chuẩn vàng thị trường), PRINCE2 Practitioner, PSM II, SAFe Agilist/SSM, ITIL 4 Foundation |
| **L3 — Senior PM / Program / PMO** | Nhiều dự án/nhiều đội | Chiến lược, danh mục, tổ chức | **PgMP, PfMP, PMI-RMP, PMI-PMOCP**, SAFe RTE/Program Consultant, IPMA C/B, MSP |

**Khung "thẻ chứng chỉ"** (mỗi chứng chỉ dùng đúng khung này ở Phụ lục H và `pm-certification-map.csv`):
`Tên · Tổ chức cấp · Nhóm/Cấp (L0–L3) · Ai nên thi · Điều kiện đăng ký · Hình thức thi (số câu/thời gian/ngôn ngữ — chỉ khi chắc chắn) · Nội dung/Domain chính · Hiệu lực & gia hạn · Chi phí tương đối · Tuần học ước lượng · Chứng chỉ tiền đề/tiếp theo · Giá trị trên thị trường VN (định tính) · Chương sách liên quan · Nguồn học chính thức · Ngày biên soạn`.

**Lộ trình khuyến nghị theo persona** (Ch04 & Phụ lục H phải có, kèm sơ đồ Mermaid `flowchart`):
- **Fresher/sinh viên:** L0 (Google PM Certificate hoặc CAPM) → PSM I → (sau 1–2 năm) PMP hoặc PMI-ACP.
- **Dev/QA chuyển PM:** PSM I → CSM/PSPO I → PRINCE2 Foundation hoặc CAPM → PMP khi đủ kinh nghiệm dẫn dự án.
- **BA chuyển PM (như Hà):** PSM I → PMP → (tuỳ) PMI-PBA/CBAP để giữ mảng yêu cầu.
- **PM 5+ năm:** PMP (nếu chưa có) → SAFe Agilist/PSM II → PMI-RMP hoặc ITIL 4 → PgMP/PfMP/PMO nếu hướng quản lý cấp cao.
- **Làm ở công ty outsource/xuất khẩu phần mềm:** ưu tiên PMP, PSM/CSM, ITIL 4 Foundation, AWS/Azure cơ bản. **Dự án khu vực công/châu Âu/Anh/Úc:** cân nhắc PRINCE2. **Doanh nghiệp lớn dùng SAFe:** SAFe Agilist/SSM.

**Khung ra quyết định "có nên thi chứng chỉ X?"** (`certification-decision-matrix.md`, chấm 1–5 mỗi tiêu chí, tổng trọng số): mục tiêu nghề · yêu cầu tin tuyển dụng thực tế (đọc ≥ 20 JD) · yêu cầu của khách/đối tác ·
mức phủ so với công việc hiện tại · chi phí (tiền + thời gian) · điều kiện đăng ký · hạn gia hạn (PDU/SEU/Renewal) · giá trị dài hạn. Kèm 3 ví dụ điền sẵn (Hà chọn PSM I; Dũng — Tech Lead — chọn CSM; Lan — BA — chọn PMI-PBA).

**Kế hoạch ôn thi mẫu** (`certification-study-plan.md`): 8 tuần cho chứng chỉ Scrum (PSM I) và 12 tuần cho PMP, mỗi tuần: mục tiêu, tài liệu chính thức, đọc chương sách nào, luyện đề, ôn lại lỗi sai (error log), thi thử mức đạt trước khi đặt lịch; quy tắc "chỉ thi khi 3 đề thử liên tiếp vượt ngưỡng tự đặt"; kế hoạch dự phòng nếu trượt; gia hạn & duy trì (PDU/CPE, tham gia cộng đồng, viết blog).

**Cảnh báo đạo đức & thực tế (bắt buộc có hộp riêng):** không dùng "braindump"/đề thi rò rỉ; không làm bài thi hộ; chứng chỉ ≠ năng lực; đừng dồn chứng chỉ khi chưa có kinh nghiệm; ghi trung thực kinh nghiệm khi đăng ký (PMI kiểm tra/audit); tính chi phí gia hạn trước khi thi.

#### 6.9 Khung riêng cho chương tình huống (Ch42–46)

Mỗi tình huống dùng đúng khung này (cả 6 tình huống trong 1 chương, mỗi tình huống 500–800 từ đề + 400–700 từ đáp án):

```markdown
### Tình huống XX.n — <Tên ngắn gọn>
**Giai đoạn dự án:** … · **Độ khó:** ★☆☆ / ★★☆ / ★★★ · **Kỹ năng luyện:** … · **Chương liên quan:** ChYY
**Bối cảnh:** 5–8 dòng, có nhân vật (mục 7) và số liệu cụ thể (ngày, %, tiền).
**Dữ kiện:** bảng/gạch đầu dòng — những gì PM biết được (+ 1–2 dữ kiện gây nhiễu).
**Câu hỏi:** 3–4 câu (Bạn sẽ làm gì trong 24 giờ đầu? Bạn nói gì với X? Bạn cập nhật tài liệu nào?).
<details><summary>Phân tích & đáp án tham khảo</summary>
1. Chẩn đoán vấn đề gốc (không chỉ triệu chứng) · 2. Các phương án + đánh đổi (bảng) ·
3. Phương án khuyến nghị + lý do · 4. Kịch bản lời nói mẫu / email mẫu (nếu tình huống có giao tiếp) ·
5. Tài liệu phải cập nhật (RAID/CR/Plan/Report) · 6. Sai lầm điển hình khi xử lý · 7. Nếu làm khác đi: phòng ngừa từ đầu.
</details>
```

Quy tắc: đề **không** gợi ý đáp án; đáp án **không phải "1 đáp án duy nhất"** — nêu rõ ít nhất 2 hướng hợp lệ + đánh đổi.
Mỗi chương tình huống kết bằng bảng "kỹ năng đã luyện" và 3 tình huống mở để người đọc tự viết đáp án.

### Phụ lục (`part9-phu-luc`)

- **A — Chỉ mục toàn bộ bộ template** (gồm cả `delivery-plan/`) (bảng: tên – mục đích – dùng ở giai đoạn nào – chương – đường dẫn).
- **B — Mẫu Project Charter + Business Case đầy đủ (FoodNow)** — bản in từ `templates/project-charter/`.
- **C — Mẫu WBS + Timeline/Gantt + Roadmap đầy đủ (FoodNow)** — bản in từ `templates/wbs|timeline-gantt|roadmap/`.
- **D — Mẫu Project Management Plan + Risk/RAID + Change Request đầy đủ (FoodNow).**
- **D2 — Mẫu Delivery Plan đầy đủ (FoodNow)**: Delivery Plan + Release Calendar + chính sách nhánh/tag + release log + DORA (bản in từ `templates/delivery-plan/`).
- **E — Bảng thuật ngữ PM (Glossary)**: ≥ 120 mục Anh–Việt, mỗi mục 1–2 dòng, sắp A–Z; thêm cột "Chương".
- **F — Bộ checklist nhanh**: khởi động / hằng tuần / trước go-live / đóng dự án / "dự án đang đỏ" (mỗi cái 1 trang).
- **H — Hồ sơ chứng chỉ PM & ánh xạ đề cương thi**: (1) "thẻ chứng chỉ" cho từng chứng chỉ theo khung ở mục 6.8 (≥ 20 thẻ);
  (2) bảng ánh xạ **chương sách ↔ domain/nội dung thi** cho PMP, CAPM, PMI-ACP, PSM I, CSM, PRINCE2 Foundation, ITIL 4 Foundation, SAFe Agilist (mỗi chứng chỉ 1 bảng: domain → chương → mức phủ Đủ/Một phần/Cần học thêm);
  (3) lộ trình mẫu theo 4 persona (Fresher, Dev chuyển PM, BA chuyển PM, PM 5+ năm); (4) khung kế hoạch ôn thi 8/12 tuần.
- **G — Tài liệu tham khảo & học thêm** (sách, chuẩn, khoá học, cộng đồng; chỉ liệt kê nguồn thật, chắc chắn tồn tại).

## 7. Case study bible — "FoodNow" (nguồn sự thật duy nhất)

Dự án dùng **xuyên suốt sách**. Đây là **cùng vũ trụ với `book_ba`** (app đặt đồ ăn FoodNow) nhưng nhìn từ ghế PM.
**Trước khi viết Ch01, đọc `../book_ba/book/part6-cong-cu-nang-cao/ch40-case-study-tong-hop.md` và
`../book_ba/book/part7-phu-luc/appendix-d-mau-incremental-delivery-plan.md`**; nếu số liệu/tên ở đó khác mục này,
**ghi mâu thuẫn vào mục 10 và ưu tiên giữ mục này** (vì góc nhìn PM cần thêm dữ kiện), trừ khi khác biệt là sai logic rõ ràng.

**Doanh nghiệp:** FoodNow JSC (Hà Nội) — startup giao đồ ăn nội thành muốn có app riêng thay vì phụ thuộc app bên thứ ba.
**Nhà thực hiện:** công ty phần mềm **BrightSoft** (outsource, Hà Nội) — PM thuộc BrightSoft; hợp đồng **Hybrid**:
khung fixed-price theo giai đoạn (MVP, R1, R2) + change request tính theo T&M.

**Con số chuẩn**

| Hạng mục | Giá trị |
|---|---|
| Thời gian MVP (từ kickoff đến go-live) | **9 tháng** — kickoff **05/01/2026**, go-live MVP **Thứ Bảy 03/10/2026** (tuần 39), hypercare 4 tuần |
| Phạm vi MVP | 3 app: Khách hàng (iOS/Android), Nhà hàng (web tablet), Tài xế (Android); Admin web; cổng thanh toán thẻ + COD |
| Ngân sách MVP | **2,4 tỷ VND** = 2,14 tỷ chi phí kế hoạch + **dự phòng (contingency) 12% ≈ 0,26 tỷ**; ngân sách 3 phần: nhân sự 78%, hạ tầng & license 9%, vendor (cổng thanh toán, SMS, bản đồ) 6%, đào tạo & khác 7% |
| Đội chuẩn | 12 người (chi tiết dưới) |
| Sprint | 2 tuần; Sprint 0 = 2 tuần chuẩn bị; ~18 sprint đến go-live |
| Mục tiêu kinh doanh | 500 đơn/ngày sau 3 tháng go-live; tỷ lệ huỷ đơn < 5%; thời gian giao TB < 35 phút; Payback < 18 tháng |
| Release | **MVP** (10/2026) → **R1** (Q1/2027: khuyến mãi, đánh giá) → **R2** (Q3/2027: ví điện tử, đặt theo nhóm) |

**Nhân vật (dùng đúng tên, đúng vai trò)**

| Tên | Vai trò | Ghi chú tính cách/tình huống dùng |
|---|---|---|
| **Nguyễn Thu Hà** | Project Manager (BrightSoft) — nhân vật chính, "bạn" trong nhiều tình huống | 6 năm kinh nghiệm, từng là BA; cẩn trọng, nói thẳng |
| **Trần Quốc Bảo** | Sponsor / CEO FoodNow | Nóng vội, hay thêm ý tưởng mới; quan tâm ngày launch |
| **Lê Minh Châu** | Product Owner (FoodNow) | Hiểu nghiệp vụ, thiếu thời gian |
| **Phạm Đức Dũng** | Tech Lead (BrightSoft) | Senior, cẩn thận kỹ thuật, hay đòi refactor |
| **Vũ Thị Lan** | Business Analyst | Đồng nghiệp thân cận PM (liên hệ `book_ba`) |
| **Đỗ Hoàng Nam** | QA Lead | Cứng rắn về chất lượng, xung đột với Dũng ở Ch27/Ch44 |
| **Ngô Thanh Sơn** | Backend Dev (senior) | Là người nghỉ việc ở tình huống Ch43 |
| **Hoàng Mai Anh** | UX/UI Designer | Chia sẻ 50% với dự án khác (Ch16) |
| **Đặng Văn Khoa** | Mobile Dev (iOS+Android) | Hai Mobile Dev khác: Bùi Tuấn, Lý Quỳnh |
| **Trịnh Ngọc Ánh** | DevOps (50% thời gian) | Hạ tầng, CI/CD |
| **Phan Quang Huy** | Customer Service Manager (FoodNow) | Stakeholder "ẩn" phát hiện muộn (Ch06) |
| **Cao Thị Yến** | Đại diện Vendor cổng thanh toán "PayEasy" | Trễ chứng nhận 3 tuần (Ch18, Ch21) |

Đội chuẩn 12 người: PM, BA, Tech Lead, 2 Backend, 3 Mobile, 1 Web/Admin FE, QA Lead + 1 QA, UX/UI (50%), DevOps (50%) — điều chỉnh
số đầu người trong ngân sách cho khớp khi lập `FoodNow-Budget.csv` (đội thực tế 11–12 FTE-tương-đương).

**Dòng thời gian chuẩn (các chương phải bám theo)**

| Tuần | Sự kiện |
|---|---|
| Trước T1 | Business case, Charter ký (12/2025) |
| T1 (05/01/2026) | Kickoff; phát hiện thiếu 1 Backend; Sprint 0 bắt đầu T2 |
| T3–T5 | Chốt scope MVP; WBS; phát hiện stakeholder ẩn (CS Manager) ở T4 |
| T4 | Chốt chiến lược nhánh & Delivery Plan: GitFlow-lite, release theo sprint, tag SemVer (Ch30–32) |
| T6 | Khách ép rút MVP xuống 6 tháng; đội ước lượng 9 — đàm phán, giữ 9 tháng bằng cắt scope (ví điện tử → R2) |
| T7–T8 | Sprint 1 hoàn thành 40% cam kết (Ch23); Tết Nguyên Đán 2026 nghỉ (tính vào lịch) |
| T8 | Tag đầu tiên **v0.1.0** (cuối Sprint 1) lên staging; mỗi cuối sprint tag `v0.N.0` (Ch32) |
| T10 | CR "đặt món theo nhóm" (Ch20) → đẩy sang R2 |
| T14 | Sơn nghỉ việc (Ch43) — mất 2 tuần bù |
| T16 | PayEasy báo trễ chứng nhận 3 tuần (Ch21); kích hoạt contingency |
| T18 | Sprint 7: nhánh feature sống 3 tuần gây conflict 200 file → luật "nhánh ≤ 5 ngày" (Ch31) |
| T20 | SPI = 0,82, CPI = 0,96 (Ch34); recovery bằng cắt bớt Feature "đánh giá món" → R1 |
| T24 | Xung đột Dũng–Nam về refactor vs tính năng (Ch27/Ch44) |
| T28–T29 | Freeze tính năng; UAT bắt đầu T30 |
| T30 | Cắt `release/1.0.0`, tag **v1.0.0-rc.1** cho UAT; rc.2 ở T35 (Ch32) |
| T30–T33 | UAT: 47 defect, 3 Critical; Go/No-Go lần 1 = **No-Go** (T33), lần 2 = **Go** (T37) |
| T39 (03/10/2026) | Go-live 02:00 sáng thứ Bảy; sự cố production 4 giờ đầu (Ch38) do cấu hình cache; hotfix **v1.0.1** trong ngày (Ch32, Ch38) |
| T39–T43 | Hypercare |
| T44–T52 | Backend/web chuyển sang trunk-based + daily deploy (Ch33); Change Failure Rate 22% → 9% |
| T44 | Đóng dự án MVP, 12 bài học; ngân sách thực chi 2,31 tỷ (dưới 2,4 tỷ) |
| +3 tháng | 430 đơn/ngày (85% mục tiêu); tỷ lệ huỷ 6% (chưa đạt) → kế hoạch R1 điều chỉnh (Ch41) |

> Ghi chú lịch: tuần 39 kể từ 05/01/2026 rơi khoảng cuối tháng 9/2026; Ch12 khi vẽ Gantt phải tính đúng ngày cụ thể (kể cả Tết
> 16–22/02/2026 nghỉ ~1 tuần và lễ 30/4–1/5, 2/9). Nếu tính ra khác 03/10/2026, **sửa lại bảng này** (một nguồn duy nhất) rồi cập nhật các chương đã viết.

**Quy tắc dùng case study:** mỗi chương có 1 đoạn "Tình huống FoodNow" bám dòng thời gian trên; nhân vật hành xử nhất quán;
tài liệu mẫu trong `templates/` là **bản FoodNow ở đúng thời điểm** (vd. Charter = 12/2025; Risk Register = tuần 16; Status Report = tuần 20).

## 8. Bộ template (thư mục `templates/`)

Nguyên tắc: **điền đủ, không để "[điền vào]" trống** — ví dụ FoodNow thật, đủ dài để thấy cách dùng (bảng ≥ 10 dòng khi phù hợp). Hai mô hình delivery (A: GitFlow/tag theo plan, B: trunk-based/daily deploy) đều phải có template riêng, và tag/ngày trong `release-log.csv` phải khớp mục 7 và `release-calendar.csv`.
Mỗi file bắt đầu bằng khung 4 dòng: `Tên tài liệu · Dự án · Phiên bản/ngày · Mục đích & khi nào dùng`, và cuối file có mục
**"Cách dùng cho dự án của bạn"** (3–5 bước sửa mẫu). Định dạng: `.md` cho văn bản, `.csv` (UTF-8 có BOM, dấu phẩy, mở được trong Excel)
cho bảng có tính toán/lọc; công thức Excel viết sẵn trong ô (bắt đầu `=`) ở các file tính (PERT, EVM, ngân sách).

| Thư mục | File bắt buộc |
|---|---|
| `project-charter/` | FoodNow-Business-Case.md, FoodNow-Project-Charter.md, scope-statement.md, team-charter-working-agreement.md |
| `stakeholder-comms/` | stakeholder-register.csv, raci-matrix.csv, communication-plan.md |
| `wbs/` | FoodNow-WBS.md (Mermaid), FoodNow-WBS.csv (~60 work package), wbs-dictionary.md |
| `timeline-gantt/` | FoodNow-Gantt.md (Mermaid gantt), FoodNow-Schedule.csv, critical-path-worksheet.md |
| `roadmap/` | FoodNow-Product-Roadmap.md, FoodNow-Release-Plan.md, roadmap.csv |
| `estimation/` | three-point-estimate.csv, estimation-checklist.md |
| `budget/` | FoodNow-Budget.csv, budget-tracking.csv |
| `quality/` | quality-plan.md, definition-of-done.md, quality-gates-checklist.md, uat-plan.md, defect-triage-rules.md, go-no-go-checklist.md, technical-debt-register.csv, questions-for-tech-lead.md |
| `pm-plan/` | FoodNow-Project-Management-Plan.md, baseline-register.md, methodology-decision-matrix.md, pm-certification-map.csv, certification-decision-matrix.md, certification-study-plan.md, resource-plan.csv, procurement-plan.md, vendor-scorecard.csv, project-folder-structure.md, decision-log.csv, pm-career-roadmap.md |
| `risk-raid/` | FoodNow-Risk-Register.csv, FoodNow-RAID-Log.csv, pre-mortem-worksheet.md, risk-response-plan.md, raid-review-agenda.md |
| `change-request/` | change-request-form.md, impact-assessment.md, change-log.csv |
| `delivery-plan/` | FoodNow-Delivery-Plan.md, release-calendar.csv, environment-matrix.md, delivery-strategy-decision-matrix.md, branching-strategy.md, gitflow-diagram.md (Mermaid gitGraph), trunk-based-workflow.md, pull-request-template.md, branch-protection-checklist.md, tagging-and-versioning-policy.md, release-checklist.md, release-notes-template.md, hotfix-procedure.md, release-log.csv, daily-deployment-policy.md, deployment-runbook.md, ci-cd-pipeline-stages.md, feature-flag-register.csv, dora-metrics.csv, release-strategy-migration-plan.md |
| `sprint-agile/` | sprint-planning-template.md, capacity-planning.csv, sprint-goal-examples.md, product-backlog.csv, dor-checklist.md, kanban-board-setup.md, flow-metrics.csv, scrum-of-scrums-agenda.md, cross-team-dependency-board.csv |
| `status-report/` | weekly-status-report.md, monthly-steerco-report.md, bad-news-email-template.md, evm-calculator.csv, burndown-data.csv, incident-report.md, project-recovery-plan.md |
| `meeting/` | pm-weekly-routine.md, onboarding-checklist.md, kickoff-agenda-and-deck-outline.md, meeting-minutes.md, steerco-agenda.md, retrospective-formats.md, action-item-log.csv, one-on-one-template.md, feedback-sbi-template.md, expectation-reset-script.md, negotiation-prep-sheet.md |
| `go-live/` | cutover-plan.md, rollback-plan.md, hypercare-plan.md, user-training-plan.md |
| `closure/` | project-closure-report.md, handover-checklist.md, lessons-learned-register.csv, acceptance-certificate.md, benefits-realization-plan.md, pmo-starter-kit.md |

**Yêu cầu riêng cho ba template "đinh" mà người dùng nêu (WBS, Timeline, Roadmap):**
- `FoodNow-WBS.csv`: cột `WBS_ID, Level, Name, Description, Owner, Estimate_Days, Depends_On, Status`; cây 4 cấp
  (1 Quản lý dự án · 2 Phân tích & thiết kế · 3 Phát triển (App KH/NH/TX, Admin, Backend/API) · 4 Kiểm thử · 5 Hạ tầng & DevOps · 6 Tích hợp bên thứ ba ·
  7 Triển khai & đào tạo · 8 Đóng dự án); tổng Estimate_Days phải khớp ngân sách/đội ở mục 7 (ghi dòng tổng kiểm tra).
- `FoodNow-Gantt.md`: Mermaid `gantt` có `dateFormat YYYY-MM-DD`, section theo giai đoạn, đánh dấu `crit` cho đường găng, milestone (Kickoff, Scope Freeze,
  UAT Start, Go-Live); kèm bảng đọc-hiểu đường găng. `FoodNow-Schedule.csv` cùng nội dung dạng bảng, ngày phải khớp.
- `FoodNow-Product-Roadmap.md`: 3 release theo Now–Next–Later + theme/outcome/OKR từng release; **không** có ngày chi tiết cho "Later".

## 9. Definition of Done — chương/template được coi là xong khi

**Với chương:**
- [ ] Đúng khung mục 4, đủ mọi mục "Nội dung bắt buộc" trong brief; 2.500–4.500 từ (hoặc ngoại lệ đã nêu).
- [ ] Có mục tiêu học đo được; ≥ 1 sơ đồ Mermaid/bảng; đoạn "Tình huống FoodNow" khớp mục 7 (tên, ngày, số liệu).
- [ ] Bài tập ≥ 2, có ≥ 1 bài làm-ra-sản-phẩm; bài tình huống có đáp án trong `<details>`.
- [ ] Sai lầm thường gặp 4–6 mục có "Cách khắc phục"; tóm tắt & dẫn sang chương sau đúng số chương.
- [ ] Mọi tham chiếu "Chương N"/"Phụ lục X"/đường dẫn template đúng và tồn tại (chạy script kiểm ở mục 12).
- [ ] Thuật ngữ nhất quán với Phụ lục E; lần đầu dùng có giải nghĩa; không có văn AI chung chung; không sao chép nguyên văn nguồn có bản quyền.
- [ ] Sơ đồ Mermaid render được (`npm run build` không lỗi); công thức/tính toán trong chương **đã tự kiểm lại** (PERT, EVM, đường găng, ngân sách).

**Với template:**
- [ ] Điền đầy đủ dữ liệu FoodNow đúng thời điểm; con số khớp mục 7 và khớp giữa các file (WBS ↔ Schedule ↔ Budget ↔ Resource plan).
- [ ] CSV mở được trong Excel (UTF-8 BOM), công thức đúng; MD có khung 4 dòng đầu + mục "Cách dùng cho dự án của bạn".

## 10. Quyết định đã chốt & vấn đề mở

**Đã chốt**
- Ngôn ngữ: tiếng Việt, thuật ngữ ngành giữ tiếng Anh (mục 5). Cách xưng hô: "bạn".
- Bao phủ cả Waterfall/Agile/Hybrid; case study **Hybrid** (mục 7). PM là người của **công ty outsource** (BrightSoft) — góc nhìn phổ biến nhất
  với độc giả Việt Nam; các chương nêu thêm khác biệt nếu làm PM ở công ty product/in-house.
- Cùng vũ trụ FoodNow với `book_ba` (sách chị em); dẫn chiếu chéo bằng câu "Xem thêm sách *IT Business Analyst — Từ Zero Đến Thành Thạo*, Chương N" — không copy nội dung.
- Delivery: dạy song song **(A) GitFlow/release theo kế hoạch + tag** và **(B) trunk-based + daily deploy** (Phần 5, Ch30–33); case study dùng A cho MVP (mobile, hợp đồng theo mốc, cần UAT) rồi chuyển B cho backend/web sau go-live. Không dạy chi tiết lệnh Git/cấu hình CI công cụ cụ thể.
- Không hướng dẫn cài đặt/quản trị công cụ (Jira/MS Project); chỉ nêu cách dùng cho công việc PM.
- Template ở dạng Markdown/CSV/Mermaid (mở được mọi nơi, diff được bằng git); **không** làm file `.mpp`/`.xlsx` nhị phân ở giai đoạn đầu.
- Build: tái sử dụng `tools/` của `book_ba` (markdown-it + Mermaid + highlight.js), phát hành HTML + PDF, EPUB sau.

**Vấn đề mở (xử lý khi gặp, ghi kết quả vào đây)**
- [x] Đối chiếu `book_ba` Ch40 & Phụ lục D: không có số liệu ngân sách/lịch trùng lặp để mâu thuẫn; giữ nguyên mục 7.
- [ ] Kiểm tra ngày: tuần 39 có đúng 03/10/2026 không (mục 7)? Tính lại lịch với Tết 2026 và lễ.
- [ ] Ngưỡng RAG (xanh/vàng/đỏ) chốt ở Ch34: đề xuất SPI ≥ 0,95 xanh; 0,85–0,95 vàng; < 0,85 đỏ — xác nhận khi viết Ch34 rồi giữ nhất quán ở Ch35, Ch47.

## 11. Bảng tiến độ

Trạng thái: ⬜ chưa · 🟨 đang viết · ✅ xong (đạt mục 9). Cột "Từ" ghi số từ thực tế.

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| M0 | Chốt kế hoạch (README) | ✅ |
| M1 | Dựng khung: `package.json`, `tools/` (copy từ book_ba), `book/manifest.json`, thư mục rỗng | ✅ |
| M2 | Phần 0 (Ch01–04) — chi tiết ở PROGRESS.md | ✅ |
| M3 | Phần 1 (Ch05–09) + templates `project-charter/`, `stakeholder-comms/`, `meeting/` (kickoff) | ⬜ |
| M4 | Phần 2 (Ch10–17) + templates `wbs/`, `timeline-gantt/`, `roadmap/`, `estimation/`, `budget/`, `quality/`, `pm-plan/` | ⬜ |
| M5 | Phần 3 (Ch18–22) + `risk-raid/`, `change-request/` | ⬜ |
| M6 | Phần 4 (Ch23–29) + `sprint-agile/` | ⬜ |
| M6b | Phần 5 Delivery Plan (Ch30–33) + `delivery-plan/` | ⬜ |
| M7 | Phần 6 (Ch34–38) + `status-report/`, phần còn lại `quality/`, `meeting/` | ⬜ |
| M8 | Phần 7 (Ch39–41) + `go-live/`, `closure/` | ⬜ |
| M9 | Phần 8 (Ch42–47) bài tập tình huống + capstone | ⬜ |
| M10 | Phụ lục A–H (H = hồ sơ chứng chỉ; kiểm tra lại thông tin chứng chỉ với nguồn chính thức trước khi phát hành) | ⬜ |
| M11 | Rà soát toàn bộ: script kiểm (mục 12), đọc lại độc lập, sửa mâu thuẫn số liệu FoodNow | ⬜ |
| M12 | Build HTML + PDF, commit `dist/` | ⬜ |
| M13 | EPUB | ⬜ |

Chi tiết từng chương (điền khi xong): copy bảng này vào cuối README hoặc `PROGRESS.md` dạng `| Ch | Tiêu đề | Trạng thái | Từ |`.

## 12. Pipeline xuất bản & kiểm tra

- **Khung (M1):** `cp -r ../book_ba/tools ./tools`; tạo `package.json` (dependencies: `markdown-it`; devDependencies: `puppeteer`; scripts: `build`, `build:pdf`, `build:all`
  như `book_ba`); sửa tiêu đề/subtitle trong `tools/build.js`, `manifest.json`. `npm install`, `npm run build` phải chạy được với 1 chương mẫu trước khi viết hàng loạt.
- **Build:** `npm run build` đọc `book/manifest.json` + `book/<part>/*.md` → `dist/` (sidebar, prev/next, Mermaid, highlight). `npm run build:pdf` → PDF. Mỗi lần thêm chương phải thêm vào `manifest.json`.
- **Script kiểm (viết ở M11, chạy trước mỗi commit lớn):** (1) mọi `slug` trong manifest có file; (2) mọi link nội bộ & đường dẫn `templates/...` tồn tại; (3) "Chương N" nhắc trong văn bản
  tồn tại và đúng chủ đề; (4) code fence cân bằng; (5) Mermaid parse được; (6) đếm từ mỗi chương nằm trong khoảng; (7) tên nhân vật/ngày mốc chỉ xuất hiện đúng như mục 7 (grep các tên và ngày chuẩn).
- **EPUB:** sau khi HTML+PDF ổn — dùng lại Markdown nguồn qua Pandoc hoặc thư viện Node; không viết lại nội dung.
- Commit: mỗi chương/template một commit riêng, thông điệp `docs(chXX): …` hoặc `feat(templates): …`.

## 13. Prompt mẫu để giao cho AI viết một chương

```
Bạn đang viết sách "Quản Lý Dự Án Phần Mềm — Từ Zero Đến Thực Chiến" trong repo book_pm.
1) Đọc README.md mục 0, 4, 5, 7, 9. 2) Đọc brief của Ch<XX> ở mục 6 và chương Ch<XX-1>.
3) Nếu chương có template: tạo file trong templates/ theo mục 8 trước.
4) Viết book/<part>/ch<XX>-<slug>.md đúng khung mục 4, tiếng Việt, đủ nội dung bắt buộc,
   dùng đúng số liệu/nhân vật ở mục 7, tự tính lại mọi phép tính.
5) Tự kiểm theo mục 9; cập nhật manifest.json và bảng tiến độ mục 11; commit.
Không hỏi lại trừ khi README mâu thuẫn hoặc thiếu dữ kiện — khi đó ghi vào mục 10 và chọn phương án hợp lý nhất.
```
