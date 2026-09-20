**Tên tài liệu:** Mẫu Pull Request (PR) — FoodNow
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 12/01/2026 (điều chỉnh 08/05/2026)
**Mục đích & khi nào dùng:** Chuẩn hoá mô tả và checklist cho mọi PR; đặt làm template mặc định trong repo.

---

```markdown
## Mục đích
<!-- Vì sao cần thay đổi này? Liên kết story Jira: FN-123 -->

## Thay đổi gì
<!-- 3–5 gạch đầu dòng -->

## Cách kiểm thử
<!-- Bước để reviewer thử; test đã thêm -->

## Ảnh hưởng
- [ ] Đổi API (có phiên bản/backward-compatible; đã thông báo ≥ 1 sprint nếu breaking)
- [ ] Đổi cấu hình/migration DB (đã ghi rollback)
- [ ] Đổi feature flag (đã cập nhật register)

## Checklist tác giả
- [ ] PR < 400 dòng (nếu lớn hơn: đã giải thích lý do/chia nhỏ)
- [ ] Nhánh mở ≤ 5 ngày làm việc
- [ ] CI xanh (build, test, lint, quét bảo mật)
- [ ] Unit test cho logic mới; coverage không giảm (thanh toán ≥ 85%)
- [ ] Không có bí mật/dữ liệu thật trong code
- [ ] Tài liệu/API cập nhật
- [ ] Tag/Fix version Jira đúng

## Checklist reviewer
- [ ] Hiểu mục đích; logic đúng
- [ ] Test đủ, rõ
- [ ] Bảo mật (quyền, dữ liệu nhạy cảm, injection)
- [ ] Không phá tương thích ngược
```

## Quy tắc review

- Review trong **24 giờ** (trunk-based: 4 giờ).
- ≥ 1 approver; thanh toán ≥ 2.
- Nhận xét nhắm vào code, không vào người; phân loại: *blocker*, *gợi ý*, *hỏi*.

---

## Cách dùng cho dự án của bạn

1. Lưu vào `.github/pull_request_template.md` (hoặc tương đương).
2. Điều chỉnh ngưỡng (số dòng, coverage) theo đội.
3. Đo thời gian review và kích thước PR hằng tuần.
4. Khi thay đổi lớn hơn ngưỡng, yêu cầu giải thích.
5. Xem lại template ở retro.
