# Chương 39: Go-live & Cutover

## Mục tiêu học

- Chọn chiến lược phát hành (big bang, phased, canary, blue-green) theo rủi ro.
- Lập Cutover Plan theo giờ (runbook) và xác định điểm không quay lại.
- Lập Rollback Plan với tiêu chí kích hoạt bằng số và người quyết định.
- Thiết kế hypercare (thời gian, trực, SLA, tiêu chí kết thúc).
- Lập kế hoạch truyền thông, đào tạo người dùng và di chuyển dữ liệu.

## 39.1 Chiến lược phát hành

**Go-live** là thời điểm hệ thống bắt đầu phục vụ người dùng thật. **Cutover** là quá trình chuyển từ hệ thống/quy trình cũ sang mới. Chọn chiến lược theo rủi ro:

| Chiến lược | Mô tả | Ưu | Nhược | Khi dùng |
|---|---|---|---|---|
| **Big bang** | Chuyển toàn bộ cùng lúc | Nhanh, một lần | Rủi ro dồn; khó lùi | Hệ thống nhỏ, ít phụ thuộc |
| **Phased** | Chuyển theo nhóm (vùng, đối tượng, tính năng) | Giảm rủi ro, học dần | Kéo dài; chạy song song | Hệ thống lớn, nhiều nhóm người dùng |
| **Canary** | Cho một phần nhỏ lưu lượng dùng bản mới, theo dõi, mở rộng | Phát hiện lỗi sớm | Cần giám sát | Web/backend trưởng thành |
| **Blue-green** | Hai môi trường giống nhau; chuyển lưu lượng | Chuyển và lùi tức thì | Tốn hạ tầng; DB phức tạp | Hệ thống quan trọng, ngân sách cho phép |

FoodNow chọn **phased + canary**: 40 nhà hàng và 90 tài xế đầu tiên (đã đào tạo), cutover vào 02:00 sáng thứ Bảy (lượng đơn thấp nhất), marketing đại chúng dồn sang Chủ nhật–thứ Hai để có 1–2 ngày an toàn.

## 39.2 Cutover Plan và runbook

**Cutover Plan** là kế hoạch từ T−7 ngày đến T+7 ngày, và **runbook** là bản chi tiết từng bước trong đêm chuyển. Nội dung:

- **Lịch theo ngày**: freeze (T−7), diễn tập lần 2 (T−5), đào tạo cuối (T−3), sao lưu và kiểm tra khôi phục (T−2), tag (T−1), cutover (T), theo dõi (T+1), rà tuần đầu (T+7).
- **Timeline theo giờ** cho đêm cutover: mỗi bước có **giờ, việc, người, xác nhận, nếu lỗi**.
- **Điểm không quay lại** (point of no return): thời điểm sau đó lùi là rất tốn kém (ví dụ kích hoạt thanh toán live). Xác định trước, thông báo cho mọi người, và trước điểm này tiêu chí rollback phải nhạy nhất.
- **Diễn tập** ít nhất hai lần trên staging với thời gian thật; FoodNow diễn tập 10/09 (24 phút), 24/09 và 28/09.
- **Dùng lại kiến thức Phần 5**: cutover = deploy **tag `v1.0.0`** từ artifact đã qua UAT; rollback = deploy lại **tag trước** (`v0.16.0`); hotfix = `v1.0.1` (Ch32).

📎 Mẫu đầy đủ: `templates/go-live/cutover-plan.md`, `templates/delivery-plan/deployment-runbook.md`

## 39.3 Rollback Plan

**Rollback Plan** trả lời: **khi nào** quay lại, **bằng cách nào**, **ai quyết**, **mất bao lâu**.

- **Tiêu chí kích hoạt bằng số**: lỗi đặt đơn > 5% trong 10 phút; mất/lệch tiền; sập > 10 phút; hỏng dữ liệu; không ổn định trong 90 phút. Không để quyết định cảm tính lúc 3 giờ sáng.
- **Người quyết**: Incident Commander đề xuất, Tech Lead xác nhận, Sponsor quyết khi có tiền/dữ liệu.
- **Đường lùi** theo thành phần: backend/web (tag cũ), mobile (ẩn bản mới, cờ), DB (khôi phục bản sao), thanh toán (kill switch), toàn hệ thống (quay lại hệ thống cũ chạy song song).
- **Sau rollback**: thông báo, đối soát, báo cáo, Go/No-Go mới.

Lưu ý: **rollback không phải lúc nào cũng là lựa chọn tốt nhất** — nếu dữ liệu đã migration, rollback có thể rủi ro hơn sửa tiến (roll forward). Đó là lý do INC-001 không rollback (Ch38).

📎 Mẫu đầy đủ: `templates/go-live/rollback-plan.md`

## 39.4 Hypercare

**Hypercare** là giai đoạn hỗ trợ tăng cường ngay sau go-live, khi đội phát triển vẫn trực gần sản phẩm để xử lý sự cố nhanh và học từ người dùng thật.

| Thành phần | Nội dung FoodNow |
|---|---|
| Thời gian | 4 tuần (03/10–30/10/2026) |
| Trực | Tuần 1 07:00–23:00, đội đầy đủ; tuần 2–4 giờ hành chính + on-call |
| SLA | P1: 15 phút phản hồi/4 giờ giảm nhẹ; P2: 1 giờ/1 ngày |
| Nhịp | Daily 08:30, báo cáo ngày → tuần, retro |
| Chỉ số | Đơn/ngày, huỷ, thời gian giao, lỗi đặt đơn, ticket CS/100 đơn, escaped defects, đối soát |
| Kết thúc khi | Không P1/P2 mở; ≥ 7 ngày không P1; đối soát khớp; runbook cập nhật; bàn giao Kanban |

Kết quả hypercare FoodNow: đơn ngày đầu 61, tuần 1 trung bình 118, tuần 4 trung bình 205 đơn/ngày; 1 P1 (INC-001), 1 P2, 7 P3; **9 escaped defects**, 0 Critical còn mở; đối soát khớp 100%.

📎 Mẫu đầy đủ: `templates/go-live/hypercare-plan.md`

## 39.5 Truyền thông go-live, đào tạo và di chuyển dữ liệu

- **Truyền thông**: mỗi nhóm nhận thông tin khác nhau (đội: kế hoạch giờ; Sponsor: tình trạng theo giờ; nhà hàng/tài xế: sẵn sàng và hotline; khách: ra mắt; CS: kịch bản). Người gửi và thời điểm cụ thể.
- **Đào tạo người dùng**: nhà hàng (workshop 90 phút thực hành trên tablet), tài xế (60 phút, chạy thử tuyến giả lập), CS (2 ngày, 10 tình huống mẫu), Admin (3 giờ). Đo bằng **quiz và thực hành**, mục tiêu hoàn tất ≥ 90% (FoodNow đạt 94%).
- **Di chuyển dữ liệu**: xác định **cái gì** chuyển (hồ sơ nhà hàng và thực đơn), **cái gì không** (đơn cũ ở app bên thứ ba), cách **đối chiếu** (số lượng, mẫu 10%), và **rollback dữ liệu**. Không dùng dữ liệu cá nhân thật cho diễn tập.

📎 Mẫu đầy đủ: `templates/go-live/user-training-plan.md`

## Tình huống FoodNow

Thứ Sáu 02/10/2026, 17:00, họp go-live 15 phút; Hà đọc lại từng dòng checklist: Go/No-Go đã ký (16/09); tag `v1.0.0` được Dũng tạo lúc 18:00; sao lưu DB kiểm tra khôi phục 24 phút; danh sách 40 nhà hàng và 90 tài xế đã đào tạo (94%); CS sẵn sàng; giám sát và cảnh báo bật; anh Bảo xác nhận Go. Chị dặn cả đội ngủ sớm và ngồi phòng chỉ huy từ 01:30.

02:00 sáng thứ Bảy 03/10, Ánh bật trang bảo trì; 02:05 Dũng chạy migration; 02:15 deploy backend từ tag `v1.0.0`; 02:30 web/Admin; **02:40 điểm không quay lại**: kích hoạt PayEasy live; 02:45 Nam chạy smoke test — đạt 100%; 03:15 Khoa phát hành app store; 03:30 tắt trang bảo trì. Nhưng ngay 02:40 cảnh báo giá không nhất quán đã vang (Ch38); đội xử lý trong war room và ổn định lúc 06:10. Vì đội đã diễn tập, việc chuyển hệ thống chính diễn ra đúng kế hoạch 90 phút; chỉ có sự cố cấu hình cache — điều diễn tập trên staging không thể tái hiện. Hà báo cáo cho anh Bảo ba lần trong đêm, như đã hứa trong kế hoạch truyền thông. Sáng, nhà hàng đầu tiên nhận đơn thật lúc 07:12; tối cùng ngày có **61 đơn**. Chiều 03/10, `v1.0.1` đã lên và đội chuyển sang chế độ hypercare.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Cutover plan.** Lập cutover plan cho một hệ thống cho sẵn: app đặt lịch cho 30 phòng khám, chuyển từ sổ giấy + Excel sang hệ thống mới, đội 8 người, cutover cuối tuần. Gồm: chiến lược (phased hay big bang, lý do), lịch T−7…T+7, timeline theo giờ cho cutover (≥ 10 bước), điểm không quay lại, tiêu chí rollback (bằng số), đường lùi, di chuyển dữ liệu, truyền thông.

**Bài 2 (làm ra sản phẩm).** Viết kế hoạch hypercare 3 tuần: thời gian, đội trực, SLA, chỉ số, tiêu chí kết thúc.

**Bài 3 (tình huống ngắn).** Ở bước 3 của cutover, migration DB mất 40 phút thay vì 10 phút dự kiến. Cửa sổ bảo trì còn 50 phút. Bạn làm gì?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 3:** Chẩn đoán: bước quan trọng chậm 4 lần; ảnh hưởng cửa sổ. Phương án A: tiếp tục nếu tiến độ migration rõ và vẫn còn thời gian, kéo dài cửa sổ bảo trì và thông báo; B: dừng và rollback nếu không dự đoán được thời gian hoàn thành hoặc có dấu hiệu lỗi; C: nếu có, chạy migration song song bằng cách tối ưu (không nên thay đổi giữa chừng). Khuyến nghị: kiểm tra tiến độ migration (phần trăm, tốc độ) trong 5 phút; nếu dự đoán hoàn thành trong 15 phút, tiếp tục và báo Sponsor kéo dài cửa sổ; nếu không dự đoán được thì rollback theo tiêu chí. Lời nói mẫu: "Migration chậm hơn diễn tập. Mình có 5 phút để quyết: nếu nó còn ≤ 15 phút thì tiếp tục và kéo dài bảo trì; nếu không đoán được thì lùi." Sai lầm: tiếp tục vô hạn vì đã đầu tư; hoặc lùi hoảng loạn không theo tiêu chí.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Không diễn tập cutover. → **Hậu quả:** thời gian và bước thật khác kế hoạch. **Cách khắc phục:** diễn tập ≥ 2 lần với thời gian thật.
2. **Sai lầm:** Tiêu chí rollback cảm tính. → **Hậu quả:** tranh cãi lúc 3 giờ sáng. **Cách khắc phục:** ngưỡng bằng số, người quyết định rõ.
3. **Sai lầm:** Không xác định điểm không quay lại. → **Hậu quả:** bất ngờ sau khi mở giao dịch thật. **Cách khắc phục:** xác định, thông báo, kiểm tra kỹ trước điểm đó.
4. **Sai lầm:** Bỏ hypercare hoặc giải tán đội ngay sau go-live. → **Hậu quả:** sự cố đầu tiên không có người xử lý. **Cách khắc phục:** hypercare có SLA, đội trực, tiêu chí kết thúc.
5. **Sai lầm:** Đào tạo qua slide. → **Hậu quả:** người dùng lúng túng, ticket tăng. **Cách khắc phục:** thực hành, quiz và trực tại chỗ ngày đầu.
6. **Sai lầm:** Không kế hoạch dữ liệu. → **Hậu quả:** thiếu/sai dữ liệu ngày đầu. **Cách khắc phục:** liệt kê cái chuyển/không chuyển, đối chiếu, phương án lùi.

## Tóm tắt & tiếp theo

- Chọn chiến lược theo rủi ro: big bang, phased, canary, blue-green; FoodNow: phased + canary.
- Cutover Plan theo ngày và theo giờ, điểm không quay lại, diễn tập; cutover = deploy tag, rollback = tag cũ.
- Rollback Plan: tiêu chí bằng số, người quyết, đường lùi; rollback không phải lúc nào cũng tốt hơn sửa tiến.
- Hypercare có SLA, đội trực, chỉ số, tiêu chí kết thúc; truyền thông, đào tạo, dữ liệu là một phần của go-live.

Chương 40 nói về **đóng dự án, lessons learned và bàn giao**.
