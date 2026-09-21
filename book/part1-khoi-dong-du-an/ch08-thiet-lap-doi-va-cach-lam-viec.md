# Chương 8: Thiết lập đội & cách làm việc

## Mục tiêu học

- Chọn được cơ cấu đội phù hợp quy mô dự án và biết cách xin/tuyển nguồn lực.
- Soạn được Team Charter và Working Agreement mà cả đội cùng thống nhất.
- Viết được Definition of Ready và Definition of Done sơ bộ.
- Chọn công cụ theo nguyên tắc, không theo thói quen, và thiết kế onboarding 5 ngày.
- Xử lý được đặc thù đội phân tán/remote/offshore.

## 8.1 Cơ cấu đội theo quy mô

Một đội dự án phần mềm hiệu quả thường có **5–9 người làm việc trực tiếp** cùng một mục tiêu; quá 9–10 người thì giao tiếp bùng nổ và nên tách đội. Quy mô 8–15 người (như sách này hướng tới) thường là **một đội lớn hoặc hai đội nhỏ có Tech Lead chung**.

| Quy mô | Cơ cấu điển hình | Ghi chú |
|---|---|---|
| 3–5 người | 1 Lead kiêm PM/BA, 2–3 Dev, 1 QA | PM thường kiêm nhiều vai |
| 6–9 người | PM, BA, Tech Lead, 3–4 Dev, 1–2 QA, UX bán thời gian | Một đội Scrum |
| 10–15 người | Như trên + nhiều nhóm (Mobile/Backend/Web) + DevOps | Cân nhắc tách thành 2 đội (Ch26) |

Đội FoodNow (12 người tương đương FTE, gồm UX và DevOps 50%): PM, BA, Tech Lead, 2 Backend, 3 Mobile, 1 Web/Admin FE, QA Lead + 1 QA, UX/UI (50%), DevOps (50%).

Nguyên tắc dựng đội:

- **Đội chức năng chéo** (cross-functional): đủ kỹ năng để giao một tính năng từ đầu đến cuối mà không chờ đội khác.
- **Ổn định**: hạn chế xoay vòng người giữa sprint; mỗi lần đổi người mất vài tuần lấy lại đà.
- **Rõ vai trò**: dùng RACI (Ch06); tránh hai người cùng nghĩ mình là "quyết định".
- **Kỹ năng bổ sung nhau**: có người senior để kèm; đừng dồn toàn junior hoặc toàn senior.

## 8.2 Xin và tuyển nguồn lực

Khi thiếu người, PM có bốn hướng — mỗi hướng một đánh đổi:

| Hướng | Thời gian | Chi phí | Rủi ro | Khi nào dùng |
|---|---|---|---|---|
| **Điều động nội bộ** từ dự án khác | Nhanh (1–2 tuần) | Thấp | Người mới với dự án; ảnh hưởng dự án cũ | Cần nhanh, có người phù hợp |
| **Tuyển mới** | Chậm (4–8 tuần) | Cao | Onboarding lâu; rủi ro chọn sai | Nhu cầu dài hạn |
| **Freelancer/vendor ngắn hạn** | Nhanh (2–3 tuần) | Vừa–cao | Chất lượng khó biết; rủi ro bảo mật, bàn giao | Việc rõ phạm vi, ngắn hạn |
| **Điều chỉnh phạm vi/lịch** | Tức thời | Về tính năng/lịch | Sponsor không thích | Khi không tìm được người |

Nguyên tắc: **chọn hướng bằng dữ liệu**, và luôn có phương án dự phòng. Ghi nhu cầu vào RAID nếu nguồn lực còn chưa chắc.

## 8.3 Team Charter và Working Agreement

**Team Charter** ghi sứ mệnh, giá trị và vai trò của đội. **Working Agreement** (thoả thuận làm việc) ghi các quy tắc hằng ngày: giờ làm việc, cách giao tiếp, code review, quy tắc họp, làm thêm giờ, cách xử lý bất đồng.

Điểm quan trọng: **đội cùng viết, không phải PM viết rồi phát**. Người tự đề xuất quy tắc mới tuân thủ. PM đóng vai người điều phối buổi workshop 60–90 phút và ghi lại.

Nguyên tắc viết quy tắc tốt:

- **Cụ thể, đo được**: "PR dưới 400 dòng, review trong 24 giờ" thay vì "PR nhỏ, review sớm".
- **Ít mà thật**: 8–12 quy tắc; nhiều hơn thì không ai nhớ.
- **Có cách xử lý vi phạm nhẹ nhàng**: nhắc ở retro, không "phạt".
- **Xem lại định kỳ** ở retro.

📎 Mẫu đầy đủ: `templates/project-charter/team-charter-working-agreement.md`

Trích vài quy tắc của đội FoodNow:

| Chủ đề | Thoả thuận |
|---|---|
| Khung trùng lặp | 10:00–16:00, kể cả khi làm từ xa |
| Daily Scrum | 08:45, ≤ 15 phút, chỉ mục tiêu và blocker |
| Code review | PR < 400 dòng; review trong 24 giờ; CI xanh mới merge |
| Làm thêm giờ | Ngoại lệ, PM đồng ý, không quá 2 tuần liền |
| Bất đồng | Nêu phương án và đánh đổi; 2 ngày chưa chốt thì chuyển Tech Lead (kỹ thuật) hoặc PM (ràng buộc) |

### Definition of Ready và Definition of Done

- **Definition of Ready (DoR)**: điều kiện để một story được **đưa vào sprint** (có tiêu chí chấp nhận, ước lượng được, đã rõ phụ thuộc, vừa trong sprint).
- **Definition of Done (DoD)**: điều kiện để một story được coi là **xong** (code review, test xanh, QA kiểm thử, không bug nghiêm trọng, PO chấp nhận).

Ở giai đoạn này chỉ cần bản **sơ bộ** ngắn; bản đầy đủ theo giai đoạn (quality gates) học ở Ch15, và DoR gắn với backlog ở Ch24.

## 8.4 Công cụ: nguyên tắc chọn, không hướng dẫn cài

Sách này **không** hướng dẫn cài đặt hay quản trị công cụ. Nguyên tắc chọn:

| Nhu cầu | Ví dụ công cụ phổ biến | Tiêu chí chọn |
|---|---|---|
| Quản lý công việc | Jira, Trello, Azure DevOps | Phù hợp quy trình đội; báo cáo được; khách xem được nếu cần |
| Tài liệu và tri thức | Confluence, Notion, wiki | Một nguồn sự thật; phân quyền; tìm kiếm tốt |
| Giao tiếp | Slack, Teams | Kênh theo mục đích; tích hợp thông báo |
| Mã nguồn | Git (GitHub/GitLab/Bitbucket) | Branch protection, code review, CI tích hợp |
| Thiết kế | Figma | Cộng tác, bàn giao cho Dev |

Ba nguyên tắc: **(1) Dùng cái đội đã quen** trừ khi có lý do mạnh; **(2) ít công cụ nhất có thể** — mỗi công cụ thêm là một nơi để thông tin lạc; **(3) khách hàng cần truy cập gì?** — quyết định sớm về quyền xem.

## 8.5 Môi trường dev/staging/prod

Một hệ thống cần tối thiểu ba môi trường: **dev** (Dev tự do thử), **staging** (giống production, để kiểm thử/UAT), **production** (người dùng thật). Nguyên tắc: staging phải **giống production nhất có thể** (cấu hình, dữ liệu mô phỏng). Chi tiết ở Ch30 (Environment Matrix) và Ch29. PM cần đảm bảo môi trường có ngân sách và người chịu trách nhiệm (DevOps) ngay từ Sprint 0.

## 8.6 Onboarding thành viên mới trong 5 ngày

Người mới hiệu quả nhanh khi **có việc thật nhỏ để làm ngay từ ngày 1–2** và có một **buddy**. Khung 5 ngày:

| Ngày | Trọng tâm | Đầu ra |
|---|---|---|
| 1 | Chào đón, bức tranh chung, cài môi trường | Chạy được app local |
| 2 | Kiến trúc, quy trình | PR đầu tiên (rất nhỏ) |
| 3 | Sản phẩm và người dùng | Hiểu luồng đặt đơn |
| 4 | Đóng góp thật | Story đầu tiên vào review |
| 5 | Nhìn lại, cải thiện onboarding | Phản hồi được ghi lại |

📎 Mẫu đầy đủ: `templates/meeting/onboarding-checklist.md`

Chỉ số nên đo: **thời gian đến PR đầu tiên được merge** (mục tiêu ≤ 5 ngày làm việc).

## 8.7 Đội phân tán, remote, offshore

Khi đội không ngồi chung, cần ba điều chỉnh:

1. **Khung trùng lặp** (overlap hours): tối thiểu 3–4 giờ/ngày để họp đồng bộ; ngoài ra làm bất đồng bộ (asynchronous).
2. **Văn bản hoá nhiều hơn**: quyết định, thiết kế ghi rõ; đừng dựa vào ký ức từ cuộc gọi.
3. **Múi giờ và văn hoá**: luân phiên giờ họp bất tiện; tôn trọng ngày lễ từng nơi; hiểu khác biệt giao tiếp (ngại nói "không").

Với đội offshore, thêm: người kết nối (bridge) hai phía, buổi handover cuối ngày, và một mục tiêu chung thay vì "đội họ" và "đội mình".

## Đi sâu: thoả thuận làm việc và xây văn hoá đội từ tuần đầu

### Working Agreement: mười dòng là đủ

Thay vì tài liệu dài, đội cùng viết khoảng mười dòng: giờ core hours (ví dụ 10:00–16:00), kênh cho việc khẩn và không khẩn, thời gian phản hồi kỳ vọng, định nghĩa xong (DoD), quy tắc PR và review, cách báo bị chặn, cách xử lý bất đồng, cách gọi nhau trong họp. Dán ở nơi ai cũng thấy và xem lại ở mỗi retrospective.

### Đội phân tán: bốn quy tắc giảm ma sát

| Quy tắc | Lý do |
|---|---|
| **Ghi lại quyết định bằng văn bản** | Người ở múi giờ/lịch khác không phải hỏi lại |
| **Họp có agenda và biên bản một dòng mỗi quyết định** | Tránh họp "cho có" |
| **Ưu tiên giao tiếp bất đồng bộ** | Bảo vệ thời gian tập trung |
| **Một buổi gặp mặt hoặc video gần gũi mỗi sprint** | Duy trì quan hệ, giảm hiểu lầm |

### Onboarding một người mới trong năm ngày

Ngày 1: tài khoản, môi trường, gặp đội; ngày 2: đọc Charter, backlog, kiến trúc; ngày 3: sửa một lỗi nhỏ cùng người kèm; ngày 4: PR đầu tiên; ngày 5: chia sẻ ngắn về điều còn khó hiểu. Danh sách kiểm này giúp người mới đóng góp trong tuần đầu thay vì tuần thứ tư.

### Chọn công cụ theo nhu cầu, không theo mốt

Ba công cụ tối thiểu: theo dõi công việc (backlog/Jira), giao tiếp (chat), lưu tài liệu (wiki/thư mục có cấu trúc). Thêm công cụ chỉ khi có vấn đề cụ thể mà công cụ hiện tại không giải được, và chỉ định người sở hữu cho từng công cụ.

## Tình huống FoodNow

Thứ Hai 05/01/2026, kickoff. Hà nhìn danh sách đội: mười hai người trên giấy nhưng **chỉ có một Backend** (Sơn); vị trí Backend thứ hai còn trống. Dũng nói: "Không có Backend thứ hai thì tích hợp thanh toán và API sẽ nghẽn ngay từ Sprint 1." Hà đánh giá bốn hướng: tuyển mới mất 4–8 tuần (quá chậm), freelancer tăng rủi ro bảo mật ở luồng thanh toán, điều chỉnh phạm vi thì chưa cần vì mới tuần đầu. Chị chọn **điều động nội bộ**: xin giám đốc BrightSoft một Backend đang rảnh từ dự án khác, và song song mở tuyển một người thay thế dài hạn làm phương án dự phòng.

Trong Sprint 0 (tuần 2–3), Hà tổ chức workshop 90 phút để cả đội viết Working Agreement (14/01/2026). Có tranh luận về giờ làm việc; Mai Anh (chia sẻ 50%) đề xuất khung trùng lặp thay vì giờ cứng — cả đội đồng ý. Ngày 26/01 (tuần 4) Backend điều động vào; Hà dùng checklist onboarding 5 ngày và giao Sơn làm buddy. Đội đủ 12 người trong 3 tuần. PR đầu tiên của người mới được merge vào ngày thứ 4. Hà ghi rủi ro tuyển dài hạn vào RAID để không quên.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Working Agreement.** Viết Working Agreement cho đội 8 người (5 Dev, 1 QA, 1 BA, 1 PM; 2 người làm từ xa ở múi giờ chênh 5 giờ): ≥ 10 quy tắc cụ thể, đo được; kèm DoR và DoD sơ bộ.

**Bài 2 (làm ra sản phẩm).** Lập checklist onboarding 5 ngày cho một Mobile Dev mới vào đội của bạn.

**Bài 3 (tình huống ngắn).** Tuần thứ 2 của dự án, bạn phát hiện đội thiếu một QA và ngân sách chưa cho phép tuyển. Nêu 3 phương án và chọn một.

<details>
<summary>Gợi ý đáp án Bài 3</summary>

Phương án A: điều động QA nội bộ 50% (nhanh, rẻ; nhưng dự án khác thiếu). B: Dev tăng thời gian tự kiểm thử + tự động hoá (không tốn thêm người; nhưng chậm feature). C: thuê QA freelance ngắn hạn cho giai đoạn UAT (chi phí vừa; rủi ro bàn giao). Khuyến nghị: A cho giai đoạn đầu + B (tăng test tự động), C khi tới UAT. Ghi rủi ro vào RAID và báo Sponsor nhu cầu ngân sách sớm nếu cần C. Sai lầm: im lặng "để xem sao" và để chất lượng trôi.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** PM tự viết Working Agreement rồi phát. → **Hậu quả:** đội không thấy sở hữu, quy tắc chỉ nằm trên giấy. **Cách khắc phục:** workshop chung, cả đội đề xuất.
2. **Sai lầm:** Quy tắc chung chung ("review sớm"). → **Hậu quả:** mỗi người hiểu một kiểu, không thể nhắc. **Cách khắc phục:** dùng con số (24 giờ, 400 dòng).
3. **Sai lầm:** Tuyển mới khi cần người gấp. → **Hậu quả:** người tới khi dự án đã trễ. **Cách khắc phục:** điều động nội bộ ngay + tuyển dài hạn song song.
4. **Sai lầm:** Bỏ onboarding, "cứ vào làm là biết". → **Hậu quả:** người mới lạc, mất 3–4 tuần mới hiệu quả. **Cách khắc phục:** checklist 5 ngày, buddy, task nhỏ ngày 2.
5. **Sai lầm:** Nhiều công cụ chồng chéo. → **Hậu quả:** thông tin lạc, mất thời gian tìm. **Cách khắc phục:** nguyên tắc "ít công cụ, một nguồn sự thật".
6. **Sai lầm:** Đội phân tán mà không có khung trùng lặp. → **Hậu quả:** chờ nhau 1 ngày cho mỗi câu hỏi. **Cách khắc phục:** thống nhất giờ trùng lặp và văn bản hoá quyết định.

## Tóm tắt & tiếp theo

- Đội hiệu quả 5–9 người, chức năng chéo, ổn định; 10–15 người cân nhắc tách đội.
- Thiếu người: chọn giữa điều động nội bộ, tuyển mới, freelancer, hoặc điều chỉnh phạm vi — theo dữ liệu.
- Working Agreement do đội cùng viết, cụ thể, đo được; DoR/DoD sơ bộ ngắn gọn.
- Chọn công cụ theo nguyên tắc; onboarding 5 ngày với buddy; đội phân tán cần khung trùng lặp và văn bản hoá.

Chương 9 kết thúc Phần 1 bằng **kickoff meeting**: dẫn dắt buổi họp khởi động và xử lý khi mọi thứ thay đổi giữa buổi.
