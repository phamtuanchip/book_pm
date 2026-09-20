# Phụ lục F — Bộ checklist nhanh

Năm checklist, mỗi cái vừa một trang. In ra, tích từng dòng, ghi lý do nếu không tích được. Chi tiết và mẫu đầy đủ nằm ở các chương/templates được dẫn.

## F.1 Checklist khởi động dự án

- [ ] Business Case có phương án "không làm gì", payback/ROI, phân tích độ nhạy (Ch05)
- [ ] Charter ký: mục tiêu SMART; **ràng buộc ưu tiên một dòng**; quyền hạn PM bằng ngưỡng (Ch05)
- [ ] Ngân sách sơ bộ có dự phòng gắn với rủi ro (Ch14)
- [ ] Stakeholder rà bằng 8 nhóm + 4 câu hỏi; Register và RACI (mỗi việc một "A") (Ch06)
- [ ] Scope Statement: in-scope, ≥ 5 out-of-scope, tiêu chí chấp nhận, giả định (Ch07)
- [ ] Đội đủ người; Team Charter + Working Agreement + DoR/DoD sơ bộ (Ch08)
- [ ] Chọn mô hình (Hybrid/Agile/Waterfall) bằng ma trận; hợp đồng khớp mô hình (Ch03)
- [ ] Kickoff nội bộ và với khách; parking lot; biên bản 24 giờ (Ch09)
- [ ] Pre-mortem 90 phút; Risk Register và RAID khởi tạo (Ch18–19)
- [ ] Kênh giao tiếp, lịch họp, quy tắc leo thang (Ch06)
- [ ] Chiến lược delivery (A/B) và chính sách nhánh/tag chốt trong Sprint 0 (Ch30–32)
- [ ] Hỏi Tech Lead 10 câu; ghi bus factor (Ch29)

## F.2 Checklist hằng tuần của PM

- [ ] **Thứ Hai:** rà RAID 15 phút (Issue, Dependency ≤ 14 ngày, top 5 rủi ro, assumption) (Ch19)
- [ ] Cập nhật lịch và dự báo (SPI, velocity, đường găng) (Ch12, Ch34)
- [ ] Kiểm tra ngân sách: PV/AC/CPI, dự phòng đã dùng (Ch14)
- [ ] 1-1 với 2 người trong đội (Ch27)
- [ ] Đồng bộ PO (ưu tiên, Ready ≥ 2 sprint) và vendor (ngày hứa) (Ch24, Ch21)
- [ ] Xem chất lượng: bug Critical/High mở, coverage, tuổi nhánh > 5 ngày (Ch15, Ch31)
- [ ] Xử lý change request/CCB nếu có (Ch20)
- [ ] Giờ sâu ≥ 2 khung; giữ ≤ 25% thời gian họp (Ch02, Ch28)
- [ ] **Thứ Sáu 15:00:** gửi báo cáo tuần 1 trang: RAG bằng số, top 3 rủi ro, quyết định cần (Ch35)
- [ ] Tin xấu nào chưa báo? Báo trong hôm nay (Ch35)

## F.3 Checklist trước go-live

- [ ] Go/No-Go đã ký; tiêu chí bắt buộc đạt; QA Lead không phản đối (Ch37)
- [ ] Không Critical/High; UAT 100% + sign-off (Ch37)
- [ ] Hiệu năng và bảo mật đạt; chứng nhận vendor còn hiệu lực (Ch15, Ch21)
- [ ] Tag đã tạo, bất biến; bản chạy production = bản đã qua UAT (Ch32)
- [ ] **Config diff staging ↔ production** đã rà (Ch30, Ch38)
- [ ] Cutover diễn tập ≥ 2 lần; thời gian thật ≤ mục tiêu (Ch39)
- [ ] Rollback plan: tiêu chí bằng số, người quyết, điểm không quay lại (Ch39)
- [ ] Sao lưu và kiểm tra khôi phục (Ch39)
- [ ] Giám sát, cảnh báo, kill switch/feature flag sẵn sàng (Ch33)
- [ ] Runbook, war room, danh sách liên hệ khẩn (Ch38–39)
- [ ] Đào tạo ≥ 90%; CS có kịch bản (Ch39)
- [ ] Truyền thông cho từng nhóm; hypercare có đội trực và SLA (Ch39)
- [ ] Release notes hai bản; release log sẵn (Ch32)

## F.4 Checklist đóng dự án

- [ ] Deliverable bàn giao đủ; biên bản nghiệm thu ký (Ch40)
- [ ] Tồn đọng có kế hoạch và người phụ trách (Ch40)
- [ ] Bàn giao kỹ thuật bằng thực hành; runbook, kiến trúc, cấu hình, bí mật (Ch40)
- [ ] Thanh toán mốc cuối; hợp đồng vendor đóng/chuyển; chi phí cuối đối chiếu (Ch21, Ch40)
- [ ] Thu hồi quyền, đổi khoá, xoá dữ liệu thật ngoài production (Ch22, Ch40)
- [ ] Retro cấp dự án; lessons learned "Khi X, thì Y" có chủ sở hữu (Ch40)
- [ ] Đưa bài học vào template/checklist tổ chức (Ch41)
- [ ] Kế hoạch đo lợi ích 1/3/6/12 tháng có owner (Ch41)
- [ ] Ghi nhận cá nhân; giải phóng nguồn lực (Ch40)
- [ ] Báo cáo đóng dự án ký (Ch40)

## F.5 Checklist khi dự án đang "đỏ"

- [ ] Xác nhận đỏ bằng số (SPI/CPI, đường găng, chất lượng) — không cảm tính (Ch34)
- [ ] Báo Sponsor **trong 24 giờ** với dữ kiện + phương án (Ch35)
- [ ] Chẩn đoán nguyên nhân gốc: người, quy trình, vendor, yêu cầu, ước lượng (Ch38)
- [ ] Chọn 2–4 trong 5 đòn bẩy: cắt scope · thêm người đúng cách · đổi cách làm · làm rõ quyết định · reset kỳ vọng (Ch38)
- [ ] Không "thêm người + tăng ca" như phản xạ (Ch16, Ch27)
- [ ] Recovery plan: mục tiêu định lượng, mốc kiểm tra, điểm dừng (Ch38)
- [ ] Dự báo mới bằng **khoảng** và độ tin cậy (Ch11)
- [ ] Cập nhật baseline qua CR nếu đổi; ghi Decision Log (Ch20, Ch22)
- [ ] Bảo vệ đội: giới hạn OT ≤ 2 tuần, theo dõi 1-1 (Ch27)
- [ ] Đo lại hằng tuần; nếu điểm dừng bị chạm → xem xét dời/cắt thêm/dừng (Ch38)
