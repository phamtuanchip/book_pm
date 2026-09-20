# Chương 32: Versioning, Tagging & Release Management theo kế hoạch

## Mục tiêu học

- Đánh số phiên bản theo Semantic Versioning và giải thích khi nào tăng MAJOR, MINOR, PATCH.
- Giải thích tag là gì, vì sao mọi bản lên UAT/production phải có tag, và ánh xạ tag ↔ Release Plan ↔ Jira Fix Version ↔ môi trường.
- Mô tả quy trình cắt release theo GitFlow, hotfix và back-merge.
- Lập Release Checklist, Release Notes và ghi vết audit.
- Xử lý phiên bản mobile, rollback bằng tag cũ và hỗ trợ nhiều phiên bản.

## 32.1 Semantic Versioning

**Semantic Versioning** (SemVer) đánh số phiên bản dạng **MAJOR.MINOR.PATCH** để con số **nói lên loại thay đổi**:

| Số | Tăng khi | Ví dụ |
|---|---|---|
| **MAJOR** | Thay đổi **không tương thích ngược** (breaking) hoặc release lớn | 1.x.x → 2.0.0 |
| **MINOR** | Thêm tính năng **tương thích ngược** | 1.0.x → 1.1.0 |
| **PATCH** | Sửa lỗi **tương thích ngược** | 1.0.0 → 1.0.1 |

Hậu tố: **`-rc.N`** (release candidate — ứng viên phát hành), **`-beta.N`**. Thứ tự ưu tiên: `1.0.0-rc.1 < 1.0.0-rc.2 < 1.0.0`. Trước khi có bản chính thức dùng **0.x**: FoodNow dùng `v0.N.0` cho bản cuối mỗi sprint.

PM không cần quyết định từng con số, nhưng cần **bảo đảm quy ước tồn tại** và mọi người theo: ai đọc "1.0.1" là biết hotfix, "1.1.0" là có tính năng mới, "2.0.0" cảnh báo thay đổi lớn.

## 32.2 Tag: đóng dấu một bản

**Tag** là nhãn gắn vào **một commit cụ thể** và **không đổi**. Nó trả lời "bản đang chạy production chính xác là mã nguồn nào?" Vì vậy quy tắc bắt buộc: **mọi bản lên UAT hoặc production phải có tag**, và chỉ pipeline/Release Manager được tạo tag. Không có tag, không thể tái hiện, rollback hay kiểm toán.

**Quy ước tag theo Release Plan (FoodNow):**

| Tag | Ý nghĩa | Môi trường |
|---|---|---|
| `v0.N.0` | Cuối Sprint N (`v0.1.0` 27/02 … `v0.16.0` 25/09) | Staging |
| `v1.0.0-rc.1` / `rc.2` | Ứng viên phát hành (27/07, 04/09) | UAT |
| `v1.0.0` | **Go-live** (tag 02/10; deploy 03/10 02:00) | Production |
| `v1.0.1` | **Hotfix** (03/10) | Production |
| `v1.1.0` | R1 (Q1/2027) | Production |

### Ánh xạ tag ↔ Release Plan ↔ Jira ↔ môi trường

| Tag | Release Plan | Jira Fix Version | Môi trường | Người duyệt |
|---|---|---|---|---|
| `v0.N.0` | MVP (sprint) | `FN-MVP-0.N` | Staging | Dũng + Nam |
| `v1.0.0-rc.N` | MVP (UAT) | `FN-MVP-1.0` | UAT | Dũng + Nam + Châu |
| `v1.0.0` | MVP go-live | `FN-MVP-1.0` | Production | Bảo (Go/No-Go) |
| `v1.0.1` | Hotfix | `FN-MVP-1.0.1` | Production | Hà + Dũng + Bảo |

Mỗi story trong Jira gắn **Fix Version**; nhờ đó danh sách "bản này gồm gì" sinh tự động và **truy vết** hai chiều: từ story tới tag, từ tag tới story.

📎 Mẫu đầy đủ: `templates/delivery-plan/tagging-and-versioning-policy.md`

## 32.3 Cắt release theo GitFlow từng bước

1. **Feature freeze**: từ 17/07 không thêm tính năng; kiểm thử mở rộng.
2. **Cắt `release/1.0.0` từ `develop`** (24/07): nhánh dành cho ổn định.
3. **Chỉ sửa lỗi** trên `release/1.0.0`; mỗi lỗi qua PR + test.
4. **Tag rc**: `v1.0.0-rc.1` (27/07) → triển khai UAT; sau No-Go và sửa lỗi → `rc.2` (04/09).
5. **Khi Go**: tag `v1.0.0` trên `release/1.0.0`; **merge về `main`** (đánh dấu production) **và về `develop`** (để develop nhận các bản sửa lỗi).
6. **Deploy** từ tag; ghi vào release log.

Sai lầm hay gặp: quên merge về `develop` — bản sau tái xuất lỗi cũ.

## 32.4 Hotfix

Khi production có lỗi nghiêm trọng: (1) **ổn định** (tắt flag/rollback) trước; (2) tạo **`hotfix/1.0.1` từ tag production**; (3) sửa tối thiểu + test; (4) review nhanh; (5) tag **PATCH** `v1.0.1`; (6) deploy theo runbook; (7) **back-merge** về `main` và `develop`; (8) ghi phê duyệt khẩn và bài học.

**Phê duyệt khẩn cấp**: Hà, Dũng duyệt trong 15 phút, Bảo được thông báo (duyệt nếu ảnh hưởng tiền/dữ liệu); ghi vào release log và CR khẩn (Ch20).

📎 Mẫu đầy đủ: `templates/delivery-plan/hotfix-procedure.md`

## 32.5 Release Candidate và tiêu chí lên production

**Release Candidate (RC)** là bản **có thể** thành bản chính thức nếu không có lỗi chặn. Tiêu chí lên production (nối **Go/No-Go**, Ch37): không còn Critical/High; UAT đạt; hiệu năng và bảo mật đạt; rollback và cutover đã diễn tập; đội hỗ trợ sẵn sàng; Sponsor ký. Nguyên tắc: **bản chạy production phải là chính bản đã qua UAT** (cùng tag/cùng artifact), không build lại.

## 32.6 Changelog, Release Notes và Release Checklist

**Changelog** (kỹ thuật): danh sách thay đổi theo tag. **Release Notes**: hai bản — **cho người dùng** (ngôn ngữ thường, lợi ích) và **cho kỹ thuật** (tag, Fix Version, API/migration, flag, rủi ro, rollback). **Release Checklist**: trước — trong — sau (Go/No-Go đã ký, tag, khác biệt cấu hình, rollback, cutover rehearsal, giám sát, đào tạo CS; sau: smoke test, thông báo, hypercare, cập nhật log).

📎 Mẫu đầy đủ: `templates/delivery-plan/release-notes-template.md`, `release-checklist.md`

## 32.7 Mobile, rollback và audit

- **Mobile**: `versionName` theo SemVer; `versionCode`/build number **tăng đơn điệu**; backend hỗ trợ **≥ 2 phiên bản app**; **force update** khi lỗi nghiêm trọng hoặc phiên bản quá cũ.
- **Rollback**: deploy lại **tag cũ** theo runbook (ví dụ `v1.0.1` → `v1.0.0`); không sửa tay trên server; nếu có migration DB cần đường lùi.
- **Audit**: `release-log.csv` ghi tag, ngày, giờ, môi trường, người duyệt, Fix Version; đây là bằng chứng "ai duyệt, khi nào, tag nào chạy ở đâu".
- **Cherry-pick/backport**: khi hỗ trợ nhiều phiên bản, chuyển bản sửa lỗi từ `main` sang nhánh hỗ trợ (chỉ lỗi nghiêm trọng).

📎 Mẫu đầy đủ: `templates/delivery-plan/release-log.csv` (20 dòng: `v0.1.0` → `v1.0.1`)

## Tình huống FoodNow

Thứ Sáu 27/02/2026, cuối Sprint 1, Hà xem lần đầu bản build lên staging và nhận tin từ Ánh: **`v0.1.0`** đã được tag. Chị mở release log ghi dòng đầu tiên (27/02, 17:30, Sprint 1, Staging, duyệt Dũng + Nam, Fix Version `FN-MVP-0.1`). Từ đó, mỗi hai tuần một tag mới: `v0.2.0` (13/03) … đến `v0.11.0` (17/07). Ngày 24/07, sau feature freeze, Dũng cắt **`release/1.0.0`** và ngày 27/07 tag **`v1.0.0-rc.1`** cho UAT (Ánh triển khai, Nam xác nhận). Sau No-Go lần 1 (21/08, 47 defect gồm 3 Critical), đội sửa trên `release/1.0.0` và tag **`v1.0.0-rc.2`** ngày 04/09; UAT vòng 2 và Go lần 2 ngày 16/09.

Ngày 02/10, Dũng tag **`v1.0.0`** trên commit đã qua UAT; 02:00 sáng thứ Bảy 03/10 Ánh deploy từ chính tag đó. Khoảng 02:40 hệ thống báo bất thường (Ch38); đội ổn định lúc 06:10, tag **`v1.0.1`** hotfix lúc 11:30 và deploy 12:10. Điều quan trọng: **rollback về `v0.16.0` đã có runbook** (≤ 30 phút) nhưng đội không dùng vì sự cố nằm ở cấu hình, có thể sửa nhanh hơn. Chị Hà mở release log để trả lời anh Bảo: "Bản đang chạy là `v1.0.1`, gồm hotfix cấu hình cache, duyệt bởi em, Dũng và anh lúc 11:45." Anh Bảo hỏi "Mai bản nào?" — Hà đáp: "Vẫn `v1.0.1`; bản tiếp theo là `v1.0.2` chỉ khi có lỗi, còn tính năng mới sẽ là `v1.1.0` cho R1."

## Bài tập

**Bài 1 (làm ra sản phẩm) — Gán số phiên bản.** Hiện tại là `v1.2.3`. Gán số phiên bản tiếp theo cho 8 thay đổi (độc lập, mỗi thay đổi tính từ v1.2.3): (1) sửa lỗi hiển thị giá; (2) thêm khuyến mãi (tương thích ngược); (3) đổi định dạng trả về API đơn hàng (không tương thích); (4) tăng tốc truy vấn; (5) thêm endpoint mới; (6) sửa lỗi bảo mật nghiêm trọng; (7) bỏ endpoint cũ; (8) bản thử nghiệm của tính năng đánh giá món (chưa phát hành chính thức, là ứng viên).

**Bài 2 (làm ra sản phẩm) — Release Notes.** Viết release notes (hai phần) cho `v1.1.0` của R1 (khuyến mãi, đánh giá món) với ≥ 3 điểm mới, 2 cải thiện, 2 thay đổi kỹ thuật.

**Bài 3 (làm ra sản phẩm) — Release Checklist.** Lập Release Checklist (≥ 15 mục chia trước/trong/sau) cho hệ thống của bạn.

**Bài 4 (tình huống ngắn).** Sau go-live bạn phát hiện bản trên production có một lỗi nghiêm trọng nhưng bản `develop` đã có 3 tính năng mới chưa xong. Dev đề xuất "lấy develop, sửa rồi deploy luôn cho nhanh". Bạn phản hồi thế nào?

<details>
<summary>Gợi ý đáp án</summary>

**Bài 1:** (1) 1.2.4; (2) 1.3.0; (3) 2.0.0; (4) 1.2.4; (5) 1.3.0; (6) 1.2.4 (hotfix); (7) 2.0.0; (8) 1.3.0-rc.1 (hoặc beta). **Bài 4:** Chẩn đoán: develop chứa mã chưa được kiểm chứng; deploy nó là đưa tính năng dở lên production. Quy trình đúng: hotfix **từ tag production**, sửa tối thiểu, tag PATCH, back-merge. Phương án A: hotfix từ tag (khuyến nghị). B: nếu có feature flag, deploy develop với flag tắt — chỉ khi đã kiểm thử đủ (không khuyến nghị lúc khẩn cấp). Lời nói mẫu: "Mình sửa từ tag đang chạy để bản vá chỉ có đúng thay đổi cần thiết, rồi back-merge vào develop. Lấy cả develop là thêm ba thứ chưa test vào production." Sai lầm: gộp tính năng vào hotfix; quên back-merge.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Deploy bản không có tag. → **Hậu quả:** không tái hiện/rollback/kiểm toán được. **Cách khắc phục:** mọi bản UAT/production có tag; bảo vệ tag.
2. **Sai lầm:** Build lại bản cho production khác với bản UAT. → **Hậu quả:** chạy bản chưa được kiểm chứng. **Cách khắc phục:** cùng artifact/tag đi qua các môi trường.
3. **Sai lầm:** Hotfix từ `develop`. → **Hậu quả:** kéo tính năng dở lên production. **Cách khắc phục:** hotfix từ tag production.
4. **Sai lầm:** Quên back-merge. → **Hậu quả:** lỗi tái xuất. **Cách khắc phục:** checklist hotfix hai chiều.
5. **Sai lầm:** Đánh số tuỳ tiện. → **Hậu quả:** không ai hiểu bản đổi gì. **Cách khắc phục:** SemVer, bảng quy ước.
6. **Sai lầm:** Không ghi release log. → **Hậu quả:** không biết ai duyệt, khi nào. **Cách khắc phục:** log bắt buộc, tự động nếu có thể.

## Tóm tắt & tiếp theo

- SemVer: MAJOR (breaking), MINOR (tính năng), PATCH (sửa lỗi), hậu tố rc/beta; FoodNow dùng `v0.N.0` cuối sprint.
- Tag bất biến; mọi bản UAT/production phải có tag; ánh xạ tag ↔ Release Plan ↔ Fix Version ↔ môi trường.
- Cắt `release/*`, chỉ sửa lỗi, tag rc → tag final, merge về `main` và `develop`; hotfix từ tag production, back-merge.
- Release notes hai bản, checklist trước–trong–sau, mobile versionCode và force update, rollback bằng tag cũ, audit bằng release log.

Chương 33 chuyển sang **deployment pipeline và daily deployment**: mô hình B.
