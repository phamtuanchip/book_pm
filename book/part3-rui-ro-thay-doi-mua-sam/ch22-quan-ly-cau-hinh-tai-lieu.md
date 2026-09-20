# Chương 22: Quản lý cấu hình, tài liệu & tri thức dự án

## Mục tiêu học

- Xác định được cái gì cần đặt dưới quản lý phiên bản (code, tài liệu, cấu hình).
- Dựng được cấu trúc thư mục tài liệu, quy ước đặt tên và phiên bản.
- Áp dụng nguyên tắc "nguồn sự thật duy nhất" và phân quyền.
- Vận hành Decision Log và ADR ở mức PM.
- Bảo vệ dữ liệu khách hàng và sao lưu tài liệu quan trọng.

## 22.1 Vì sao quản lý cấu hình

**Quản lý cấu hình** (configuration management) là việc kiểm soát các **thành phần** của dự án — code, tài liệu, cấu hình môi trường — để mọi người biết **phiên bản nào là chuẩn**, ai đã đổi gì, khi nào và vì sao. Khi không có nó, dấu hiệu quen thuộc là: "Bản nào mới nhất?", "Sao bên mình chạy khác bên bạn?", "Ai sửa cái này?".

Rủi ro kép của phần mềm: **thông tin sai còn nguy hiểm hơn thiếu thông tin**, vì người ta hành động tự tin dựa trên bản cũ. Hai đội dùng hai bản đặc tả sẽ xây hai thứ không khớp — và chỉ phát hiện khi ghép lại.

## 22.2 Cái gì cần đặt dưới quản lý phiên bản

| Loại | Ví dụ | Công cụ | Ghi chú |
|---|---|---|---|
| **Mã nguồn** | Backend, mobile, web | Git | Chính sách nhánh (Ch31) |
| **Cấu hình môi trường/hạ tầng** | Terraform, script CI/CD | Git (IaC) | Không cấu hình tay mà không ghi lại |
| **Tài liệu yêu cầu/thiết kế** | Scope, SRS, API contract | Confluence có lịch sử | Bản được duyệt = baseline |
| **Tài liệu quản lý dự án** | Charter, PM Plan, RAID | Confluence/Sheet | Nhãn phiên bản, chủ sở hữu |
| **Quyết định** | Decision Log, ADR | Confluence/Git | Bất biến sau khi ghi |
| **Bí mật** (khoá, mật khẩu) | API key, mật khẩu DB | Kho bí mật (vault) | **Không** để trong Git/chat |

Nguyên tắc: nếu thứ đó **thay đổi và có người phụ thuộc vào nó**, nó cần được quản lý phiên bản.

## 22.3 Cấu trúc thư mục và quy ước

Cấu trúc gợi ý (chi tiết ở mẫu):

```
FoodNow/
├── 00-Quan-ly-du-an/   ├── 01-Yeu-cau/   ├── 02-Thiet-ke/   ├── 03-Phat-trien/
├── 04-Kiem-thu/        ├── 05-Phat-hanh/  ├── 06-Van-hanh/  ├── 07-Vendor-Hop-dong/
└── 99-Archive/
```

**Quy ước đặt tên và phiên bản** (ví dụ):

- Tên tệp: `YYYY-MM-DD_Loai_Ten_vX.Y`.
- `v0.x` nháp · `v1.0` được duyệt · `v1.1` sửa nhỏ · `v2.0` baseline mới.
- Đầu mỗi tài liệu: **Chủ sở hữu · Phiên bản · Ngày · Trạng thái**.
- Bản lỗi thời: đánh dấu rõ và chuyển vào Archive, không xoá.

📎 Mẫu đầy đủ: `templates/pm-plan/project-folder-structure.md`

## 22.4 Nguồn sự thật duy nhất

**Single source of truth** (SSOT): với mỗi loại thông tin, chỉ **một nơi** là bản chính; các nơi khác chỉ **liên kết** tới đó, không sao chép. Ví dụ:

| Thông tin | Nguồn chính | Không dùng làm nguồn |
|---|---|---|
| Đặc tả yêu cầu | Confluence (Lan sở hữu) | PDF trong email, bản in |
| Công việc và trạng thái | Jira | Bảng tính riêng, chat |
| Thiết kế | Figma | Ảnh chụp màn hình |
| Mã nguồn | Git | Bản zip gửi qua chat |
| Ngày hứa của vendor | RAID Log | Trí nhớ, email rời |

Khi phải xuất bản sao (gửi khách xem PDF), **ghi rõ "bản sao tại ngày X, bản chính ở đâu"**. Thêm thông báo thay đổi: khi đặc tả đổi, hệ thống báo cho người liên quan (watch/notify), không dựa vào nhắc miệng.

## 22.5 Phân quyền và bảo mật dữ liệu

- **Quyền tối thiểu cần thiết** (least privilege): người chỉ cần đọc thì không cấp viết; tài liệu hợp đồng chỉ PM và Tech Lead.
- **Khách hàng** đọc phần liên quan; **vendor** chỉ đọc phần họ cần.
- **Dữ liệu khách hàng thật** chỉ ở môi trường được phép; dùng dữ liệu giả trong dev/staging; không dán dữ liệu cá nhân/thẻ vào tài liệu hay chat.
- **Thu hồi quyền** khi người rời đội trong 1 ngày làm việc.
- **Tuân thủ**: bảo vệ dữ liệu cá nhân là yêu cầu pháp lý ở Việt Nam (Ch29 nói mức nhận biết); PM cần hỏi Tech Lead và pháp lý các yêu cầu áp dụng.
- **Sao lưu**: công cụ tài liệu có sao lưu riêng; xuất bản chính hằng tháng và cất ở nơi độc lập.

## 22.6 Quản lý quyết định: Decision Log và ADR

Ba tháng sau ai cũng quên **vì sao** đã chọn thế. **Decision Log** ghi mỗi quyết định quan trọng: ngày, quyết định, bối cảnh, phương án đã cân nhắc, người quyết, tác động, tài liệu liên quan. Nó chống hai bệnh: tranh cãi lại quyết định cũ và người mới không hiểu lịch sử.

**ADR** (Architecture Decision Record) là phiên bản kỹ thuật do Tech Lead sở hữu: ghi bối cảnh, lựa chọn, hệ quả. PM không viết ADR nhưng **yêu cầu có ADR** cho quyết định lớn (thanh toán, kiến trúc) và liên kết vào Decision Log.

Quy tắc: **quyết định bất biến** — nếu đổi, ghi quyết định mới nói rõ thay thế quyết định cũ; không sửa lịch sử.

📎 Mẫu đầy đủ: `templates/pm-plan/decision-log.csv` (17 quyết định của FoodNow)

## 22.7 Tri thức dự án

Tri thức nằm ở đầu người sẽ mất khi họ rời. Để giữ lại:

- **Tài liệu ngắn, đúng lúc**: hướng dẫn build, cách deploy, cách xử lý sự cố (runbook).
- **Pair và rotation**: chia sẻ kiến thức (giảm bus factor, Ch16).
- **Retro và lessons learned** ghi lại (Ch28, Ch40).
- **Trang "Bắt đầu tại đây"** cho người mới (onboarding, Ch08).

## Tình huống FoodNow

Thứ Hai 30/03/2026, tuần 13. Trong buổi rà RAID, Khoa (Mobile) hỏi Backend: "Endpoint tạo đơn thiếu trường `delivery_note`?" Sơn ngạc nhiên: "Có từ tuần trước rồi mà?" Hoá ra Lan cập nhật đặc tả API lên Confluence (v4) sau khi thống nhất với Châu, nhưng đội Mobile vẫn dùng **file PDF v3** được gửi qua email ba tuần trước. Hai đội xây hai bản. Kết quả: khoảng **5 ngày công** làm lại ở phía Mobile và một buổi họp căng thẳng.

Hà không tìm "ai lỗi". Chị hỏi: "Làm sao để lần sau không thể xảy ra?" Cả đội đồng ý ba việc: (1) **Confluence là nguồn duy nhất**; PDF chỉ là bản sao có ghi "ngày X, bản chính ở đâu"; (2) khi đặc tả đổi, đặt **thông báo tự động** vào kênh Slack của Mobile và Backend; (3) đầu mỗi sprint, Lan xuất **danh sách thay đổi đặc tả** trong Sprint Planning. Hà cũng viết `project-folder-structure.md` (06/04/2026) với quy ước phiên bản và bắt đầu Decision Log từ những quyết định đã có (DL-001…DL-012). Sau này khi anh Bảo hỏi "Tại sao mình chọn PayEasy?", Hà mở DL-012 và chỉ ra điểm scorecard, thay vì phải nhớ lại.

## Bài tập

**Bài 1 (làm ra sản phẩm) — Cấu trúc thư mục.** Dựng cấu trúc thư mục tài liệu cho dự án của bạn (≥ 6 thư mục), quy ước tên/phiên bản, bảng phân quyền cho 3 nhóm người, danh sách "nguồn sự thật" cho 6 loại thông tin.

**Bài 2 (làm ra sản phẩm).** Lập Decision Log ≥ 8 quyết định (từ dự án của bạn hoặc giả định) với đủ cột: ngày, quyết định, bối cảnh, phương án, người quyết, tác động.

**Bài 3 (tình huống ngắn).** Hai đội nhận hai phiên bản đặc tả khác nhau và đã làm 2 tuần. Bạn xử lý thế nào trong 24 giờ đầu? Nêu 2 hướng.

<details>
<summary>Gợi ý đáp án Bài 3</summary>

**Chẩn đoán:** lỗi quy trình (nhiều nguồn, không có thông báo thay đổi), không phải lỗi cá nhân. **24 giờ đầu:** (1) xác định chính xác khác biệt giữa hai bản (Lan + hai Tech Lead); (2) xác nhận với PO bản đúng; (3) ước lượng công làm lại. **Phương án A:** đội sai sửa theo bản đúng (chi phí = công làm lại). **Phương án B:** nếu bản sai tốt hơn, PO duyệt thay đổi đặc tả (CR nếu ngoài baseline). **Khuyến nghị:** A, và ghi Issue/bài học. **Phòng ngừa:** nguồn sự thật duy nhất, thông báo thay đổi, danh sách thay đổi ở mỗi Sprint Planning. **Sai lầm:** đổ lỗi; sửa bằng cách gửi thêm một PDF mới.
</details>

## Sai lầm thường gặp

1. **Sai lầm:** Lưu bản chính trong email/chat. → **Hậu quả:** không ai tìm, nhiều bản lệch. **Cách khắc phục:** một nguồn, các nơi khác liên kết.
2. **Sai lầm:** Không nhãn phiên bản/ngày. → **Hậu quả:** không biết bản nào mới. **Cách khắc phục:** quy ước tên và đầu trang bắt buộc.
3. **Sai lầm:** Xoá bản cũ. → **Hậu quả:** mất lịch sử để đối chiếu, tranh cãi. **Cách khắc phục:** Archive.
4. **Sai lầm:** Cho mọi người quyền viết mọi nơi. → **Hậu quả:** sửa nhầm, lộ hợp đồng/dữ liệu. **Cách khắc phục:** least privilege, rà quyền định kỳ.
5. **Sai lầm:** Không ghi quyết định. → **Hậu quả:** tranh cãi lại, người mới không hiểu lý do. **Cách khắc phục:** Decision Log, ADR.
6. **Sai lầm:** Dữ liệu thật trong tài liệu/chat. → **Hậu quả:** rủi ro pháp lý và bảo mật. **Cách khắc phục:** dữ liệu giả; kho bí mật; thu hồi quyền khi rời đội.

## Tóm tắt & tiếp theo

- Quản lý cấu hình giữ cho mọi người biết bản chuẩn; quản lý phiên bản cho code, cấu hình, tài liệu, quyết định; bí mật đặt trong kho riêng.
- Cấu trúc thư mục, quy ước tên/phiên bản, nguồn sự thật duy nhất, thông báo khi đổi.
- Phân quyền tối thiểu, bảo vệ dữ liệu khách hàng, sao lưu.
- Decision Log và ADR bảo tồn lý do quyết định; quyết định bất biến, chỉ thay thế.

Hết Phần 3. Chương 23 mở Phần 4 (thực thi): **Scrum dưới góc nhìn PM**.
