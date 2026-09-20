**Tên tài liệu:** Chính sách nhánh (Branching Policy) — FoodNow
**Dự án:** FoodNow MVP → R1
**Phiên bản / ngày:** v1.1 — 08/05/2026 (v1.0 ngày 30/01/2026; v1.1 thêm luật nhánh ≤ 5 ngày sau sự cố Sprint 6)
**Mục đích & khi nào dùng:** Quy định các loại nhánh, cách đặt tên, merge, bảo vệ và ngoại lệ; dùng cho mọi repo của dự án.

---

## 1. Chiến lược theo repo

| Repo | Chiến lược MVP | Sau go-live | Lý do |
|---|---|---|---|
| `foodnow-backend` | **GitFlow-lite** | Trunk-based + daily deploy (tuần 44+) | API dùng chung; UAT cần release branch |
| `foodnow-web` (nhà hàng + Admin) | GitFlow-lite | Trunk-based (tuần 44+) | Như backend |
| `foodnow-mobile` (iOS/Android) | GitFlow-lite | **Giữ** release train 2 tuần | App store review 1–3 ngày |
| `foodnow-infra` (IaC) | GitHub Flow (main + PR) | Giữ | Thay đổi nhỏ, có review bắt buộc |

## 2. GitFlow-lite

| Nhánh | Vai trò | Tạo từ | Merge về | Sống bao lâu |
|---|---|---|---|---|
| `main` | Luôn phản ánh production; mỗi commit là một tag phát hành | — | — | Vĩnh viễn |
| `develop` | Tích hợp liên tục; nguồn của staging | `main` | — | Vĩnh viễn |
| `feature/*` | Một story/nhóm nhỏ | `develop` | `develop` (PR) | **≤ 5 ngày** |
| `release/x.y.z` | Ổn định bản phát hành (chỉ sửa lỗi) | `develop` | `main` **và** `develop` | Vài ngày–vài tuần |
| `hotfix/x.y.z` | Sửa khẩn production | `main` (tag prod) | `main` **và** `develop` | ≤ 1 ngày |

**Bỏ so với GitFlow đầy đủ:** không dùng nhánh `support/*`; không tạo `release/*` cho từng sprint (chỉ cho rc); merge bằng squash để giữ lịch sử gọn.

## 3. Đặt tên nhánh

`feature/FN-123-them-gio-hang` · `bugfix/FN-456-loi-tinh-gia` · `release/1.0.0` · `hotfix/1.0.1`
Quy tắc: bắt đầu bằng loại nhánh, có mã Jira, chữ thường không dấu, nối bằng gạch ngang.

## 4. Pull Request

- PR **nhỏ** (< 400 dòng thay đổi); **review trong 24 giờ**; ≥ 1 approver (thanh toán: 2).
- CI xanh (build, test, lint, quét bảo mật) mới được merge.
- Dùng `pull-request-template.md`; liên kết story Jira.
- Merge bằng **squash** vào `develop`; **merge commit** cho `release/*` và `hotfix/*` về `main`.

## 5. Nhánh sống lâu và luật 5 ngày (v1.1)

- **Nhánh `feature/*` không được mở quá 5 ngày làm việc**; ngày thứ 4 báo trong Daily; ngày thứ 5 phải tách nhỏ, rebase hoặc dùng feature flag.
- Cập nhật (rebase/merge từ `develop`) ít nhất mỗi ngày.
- Chia tính năng lớn thành PR nhỏ ẩn sau feature flag thay vì một nhánh dài.
- Bảng theo dõi nhánh cũ hằng tuần (tuổi nhánh).

## 6. Bảo vệ nhánh

Xem `branch-protection-checklist.md`: bắt buộc PR, ≥ 1 review, CI xanh, cấm force-push `main`/`develop`, cấm xoá.

## 7. Ngoại lệ

Hotfix khẩn cấp có thể có 1 approver (Tech Lead) sau khi Hà và Bảo duyệt; ghi vào release log.

---

## Cách dùng cho dự án của bạn

1. Chọn chiến lược cho từng repo bằng ma trận (`delivery-strategy-decision-matrix.md`).
2. Định nghĩa bảng nhánh; thêm luật tuổi nhánh phù hợp đội bạn.
3. Bật branch protection theo checklist.
4. Đo tuổi nhánh hằng tuần; báo khi > 5 ngày.
5. Xem lại sau mỗi sự cố merge; ghi thay đổi vào lịch sử phiên bản.
