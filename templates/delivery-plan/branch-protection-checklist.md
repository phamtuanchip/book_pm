**Tên tài liệu:** Checklist bảo vệ nhánh (Branch Protection)
**Dự án:** FoodNow
**Phiên bản / ngày:** v1.0 — 12/01/2026
**Mục đích & khi nào dùng:** Bảo đảm cấu hình bảo vệ nhánh đúng trên mọi repo; dùng khi tạo repo và rà soát mỗi quý.

---

## `main`

- [ ] Bắt buộc Pull Request (không push trực tiếp)
- [ ] Bắt buộc ≥ 1 approval (**2** với repo thanh toán); người tạo PR không tự duyệt
- [ ] Bắt buộc CI xanh (build, test, lint, quét bảo mật)
- [ ] Bắt buộc nhánh cập nhật với `main` trước khi merge
- [ ] Cấm force-push; cấm xoá nhánh
- [ ] Bắt buộc lịch sử tuyến tính hoặc squash (theo chính sách)
- [ ] Chỉ Tech Lead/DevOps được merge `release/*`, `hotfix/*` vào `main`
- [ ] Tag được bảo vệ (chỉ pipeline/Release Manager tạo `v*`)

## `develop`

- [ ] Bắt buộc PR + ≥ 1 approval + CI xanh
- [ ] Cấm force-push
- [ ] Merge squash cho `feature/*`

## `release/*` và `hotfix/*`

- [ ] Chỉ sửa lỗi (không tính năng mới); ghi trong PR
- [ ] Phải merge về **cả** `main` và `develop`
- [ ] Hotfix có duyệt của PM + Tech Lead (khẩn: ghi nhận sau)

## Chung

- [ ] CODEOWNERS cho module thanh toán và hạ tầng
- [ ] Quét bí mật (secret scanning) bật
- [ ] Rà quyền admin repo mỗi quý; thu hồi quyền người rời đội
- [ ] Bảng theo dõi nhánh > 5 ngày gửi báo cáo tuần

## Kết quả rà soát 12/01/2026

| Repo | main | develop | tag | CODEOWNERS |
|---|---|---|---|---|
| backend | ✔ | ✔ | ✔ | ✔ |
| web | ✔ | ✔ | ✔ | — |
| mobile | ✔ | ✔ | ✔ | — |
| infra | ✔ | — | ✔ | ✔ |

---

## Cách dùng cho dự án của bạn

1. Bật các mục trong nền tảng Git bạn dùng; chụp màn hình cấu hình làm bằng chứng.
2. Điều chỉnh số approver theo rủi ro repo.
3. Lập lịch rà soát mỗi quý và sau khi đổi quyền.
4. Kiểm tra bằng thử: thử push trực tiếp vào `main` — phải bị chặn.
5. Ghi bất thường vào RAID.
