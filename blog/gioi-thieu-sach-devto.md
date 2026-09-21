---
title: "Project Manager phần mềm: làm gì, học gì? Và một cuốn sách miễn phí bằng tiếng Việt"
published: false
description: "Vị trí PM trong dự án phần mềm thực tế ra sao, và cuốn sách 47 chương + 105 template miễn phí trên GitHub để bạn tự học."
tags: vietnamese, projectmanagement, career, opensource
---

Nếu bạn là dev lâu năm được "đẩy lên" làm PM, hoặc người mới muốn chuyển sang quản lý dự án phần mềm, có thể bạn từng gặp cảnh này: đọc xong vài bài về Scrum, Gantt, PMBOK, nhưng vào dự án thật vẫn không biết bắt đầu từ đâu — ai duyệt thay đổi, báo cáo cho sếp thế nào, khách đòi thêm tính năng thì trả lời ra sao, và tại sao dự án "đang xanh" bỗng nhiên trễ ba tháng.

Bài này nói ngắn gọn về vị trí PM, rồi giới thiệu một cuốn sách **miễn phí, tiếng Việt** mà mình viết để lấp khoảng trống đó.

## PM phần mềm thực sự làm gì?

Ngoài đời, PM không phải người "giao việc và hỏi tiến độ". Công việc thật sự xoay quanh mấy nhóm việc:

- **Làm rõ phạm vi.** Biến câu "làm giống app X" thành danh sách yêu cầu kiểm tra được, kèm danh sách *không làm*.
- **Lập kế hoạch có thể tin được.** WBS, ước lượng, lịch, đường găng, ngân sách có dự phòng — để khi bị hỏi "bao giờ xong?" bạn trả lời bằng khoảng và giả định, không bằng cảm tính.
- **Quản lý rủi ro và thay đổi.** RAID log, quy trình change request, CCB. Thay đổi không xấu; thay đổi *không ai biết* mới xấu.
- **Điều hành thực thi.** Scrum/Kanban/hybrid, backlog, họp hiệu quả, quản lý đội và xung đột.
- **Cầu nối với kỹ thuật.** Hiểu branching, versioning, CI/CD, release đủ để không bị "nói gì nghe nấy" và cũng không làm phiền dev vô ích.
- **Giám sát và báo cáo.** EVM (SPI/CPI), báo cáo RAG, quản lý kỳ vọng khách hàng, xử lý sự cố.
- **Đưa vào chạy và đóng dự án.** UAT, Go/No-Go, cutover, hypercare, lessons learned, đo lợi ích.

Điểm chung: PM tạo ra **sự rõ ràng** — về mục tiêu, trách nhiệm, rủi ro và quyết định — để đội kỹ thuật làm được việc.

## Vì sao mình viết cuốn sách này

Tài liệu tốt về quản lý dự án có nhiều, nhưng phần lớn hoặc là lý thuyết chung chung, hoặc bằng tiếng Anh và không gắn với bối cảnh phần mềm. Mình muốn một cuốn:

1. **Đi từ zero đến thực chiến** — không cần biết trước PMBOK.
2. **Có một dự án xuyên suốt.** Toàn bộ sách bám theo một case study là **FoodNow** (ứng dụng giao đồ ăn, ngân sách 2,4 tỷ, 12 người, 39 tuần). Bạn thấy WBS, lịch, EVM, RAID, release, sự cố lúc go-live, đến bài học sau dự án — cùng một bộ số liệu, không phải ví dụ rời rạc.
3. **Có template dùng ngay** — 105 file (Markdown/CSV) cho Charter, WBS, RAID, Change Request, Status Report, Go/No-Go, Lessons Learned…
4. **Có bài tập và đáp án**, kể cả các tình huống "khó nói" như khách đòi thêm tính năng, thành viên chủ chốt nghỉ việc, cổng thanh toán trễ.

## Trong sách có gì?

**47 chương, chia 9 phần + 8 phụ lục:**

| Phần | Nội dung |
|---|---|
| 0. Nhập môn | Dự án là gì, vai trò PM, vòng đời và mô hình, lộ trình chứng chỉ |
| 1. Khởi động | Business case, Charter, stakeholder, phạm vi, kickoff |
| 2. Lập kế hoạch | WBS, ước lượng, Gantt/critical path, roadmap, ngân sách, chất lượng, nguồn lực |
| 3. Rủi ro, thay đổi, mua sắm | Risk, RAID, change control, vendor, quản lý cấu hình |
| 4. Thực thi | Scrum, backlog, Kanban, hybrid, lãnh đạo, họp, PM và kỹ thuật |
| 5. Delivery plan & release | Branching, versioning/tagging, deployment pipeline |
| 6. Giám sát & chất lượng | EVM, báo cáo, kỳ vọng khách hàng, UAT, sự cố & khủng hoảng |
| 7. Đóng & vận hành | Go-live, closure, lessons learned, đo lợi ích, PMO |
| 8. Bài tập tình huống | Năm bộ tình huống + capstone FoodNow |
| Phụ lục | Chỉ mục template, thuật ngữ (146 mục), checklist nhanh, tài liệu tham khảo, chứng chỉ PM |

Mỗi chương theo cùng một khung: mục tiêu học → nội dung → tình huống FoodNow → bài tập → sai lầm thường gặp → tóm tắt.

## Đọc ở đâu, dùng thế nào?

Sách hoàn toàn **miễn phí**, để trên GitHub:

👉 **https://github.com/phamtuanchip/book_pm**

- **Bản PDF** nằm trong thư mục `dist/` (`quan-ly-du-an-phan-mem-tu-zero-den-thuc-chien.pdf`) — tải về đọc offline.
- **Bản HTML** cũng nằm trong `dist/` (mở `index.html`), có sơ đồ Mermaid.
- **Bản Markdown** trong `book/`, **template** trong `templates/` — bạn có thể copy về dùng cho dự án của mình.
- Muốn tự build lại: `npm install` rồi `npm run build` và `npm run build:pdf`.

Gợi ý cách đọc: nếu bạn đang đứng trước dự án thật, đừng đọc tuần tự. Mở phụ lục checklist nhanh, chọn template đang cần (Charter, RAID, Change Request), rồi đọc chương tương ứng.

## Một lưu ý trung thực

Đây là bản thảo đầy đủ nhưng chưa phải bản cuối. Một số thông tin có thể thay đổi theo thời gian — đặc biệt là **chứng chỉ (PMP/CAPM/PMI-ACP)** và **quy định pháp lý về dữ liệu cá nhân**; mình đã đối chiếu từ nguồn công khai nhưng bạn nên kiểm tra lại với nguồn chính thức trước khi ra quyết định. Số liệu FoodNow là giả lập để minh hoạ.

## Góp ý và đóng góp

Thấy lỗi, thiếu chỗ, hoặc muốn bổ sung tình huống từ kinh nghiệm thực tế của bạn? Mở **Issue** hoặc **Pull Request** trên repo. Nếu sách hữu ích, một ⭐ trên GitHub và chia sẻ cho đồng nghiệp là cách hỗ trợ tốt nhất.

Chúc bạn quản lý dự án bớt "chữa cháy" và nhiều buổi go-live êm hơn.
