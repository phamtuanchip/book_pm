**Tên tài liệu:** Sprint Planning — Sprint 2 (mẫu điền sẵn)
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** v1.0 — 02/03/2026 (Sprint 2: 02/03–13/03/2026)
**Mục đích & khi nào dùng:** Chuẩn bị và ghi kết quả Sprint Planning: Sprint Goal, capacity, story được chọn; dùng ở đầu mỗi sprint.

---

## 1. Thông tin sprint

| Mục | Nội dung |
|---|---|
| Sprint | Sprint 2 |
| Thời gian | 02/03 – 13/03/2026 (10 ngày làm việc) |
| Product Owner | Lê Minh Châu |
| Người điều phối | Dũng (kỹ thuật) + Hà (PM hỗ trợ) |
| Sprint 1 (tham chiếu) | Cam kết 55 SP, hoàn thành 22 SP (40%) |

## 2. Sprint Goal

> **Khách hàng có thể đăng ký/đăng nhập bằng OTP và duyệt danh sách nhà hàng trên app (staging), với dữ liệu nhà hàng mẫu.**

Tiêu chí đạt Goal: (1) OTP hoạt động trên iOS/Android staging; (2) danh sách nhà hàng hiển thị từ API; (3) demo được cho Châu cuối sprint.

## 3. Capacity

| Người | Ngày làm | Nghỉ | Availability | Focus | Capacity (ngày) |
|---|---|---|---|---|---|
| Dũng | 10 | 0 | 50% | 0,7 | 3,5 |
| Sơn | 10 | 0 | 100% | 0,7 | 7,0 |
| Backend 2 | 10 | 0 | 100% | 0,7 | 7,0 |
| Khoa | 10 | 0 | 100% | 0,7 | 7,0 |
| Tuấn | 10 | 0 | 75% (bị rút 50% từ 09/03) | 0,7 | 5,25 |
| Quỳnh | 10 | 0 | 100% | 0,7 | 7,0 |
| FE Web | 10 | 0 | 100% | 0,7 | 7,0 |
| Nam | 10 | 0 | 100% | 0,7 | 7,0 |
| QA | 10 | 0 | 100% | 0,7 | 7,0 |
| Mai Anh | 10 | 0 | 50% | 0,7 | 3,5 |
| Ánh | 10 | 0 | 50% | 0,7 | 3,5 |
| **Tổng** | | | | | **64,75** |

Tham chiếu: Sprint 1 xong 22 SP với 62 ngày capacity → **0,355 SP/ngày**. Sprint 2 dự báo: 64,75 × 0,355 ≈ **23 SP**.

## 4. Story được chọn (cam kết 24 SP — dự báo 23 SP)

| ID | Story | SP | Người | Ghi chú |
|---|---|---|---|---|
| FN-101 | Đăng ký bằng số điện thoại + OTP | 5 | Khoa, Sơn | Phụ thuộc SMS sandbox (D-04) |
| FN-102 | Đăng nhập, quên phiên | 3 | Khoa | |
| FN-103 | API danh sách nhà hàng | 5 | Backend 2 | |
| FN-104 | Màn hình danh sách nhà hàng (iOS) | 5 | Tuấn, Quỳnh | |
| FN-105 | Màn hình danh sách nhà hàng (Android) | 3 | Quỳnh | |
| FN-106 | Kiểm thử OTP tự động | 3 | QA | |
| **Tổng** | | **24** | | Dư 1 SP so với dự báo → "stretch" nếu có |

## 5. Rủi ro và phụ thuộc trong sprint

- D-04 SMS sandbox (cần 09/03; trễ 4 ngày) → dùng mock OTP đến khi sandbox sẵn sàng.
- Tuấn giảm 50% từ 09/03 → Khoa nhận phần chung.

## 6. Kết quả (điền ở cuối sprint)

| Chỉ số | Kết quả |
|---|---|
| Story hoàn thành / cam kết | 23 SP / 24 SP (96%) |
| Sprint Goal đạt? | Đạt (demo 13/03) |
| Velocity | 23 SP |
| Nhận xét retro | Cam kết dựa trên capacity thực, đội ổn định hơn |

---

## Cách dùng cho dự án của bạn

1. Viết Sprint Goal trước khi chọn story; Goal là một câu mô tả giá trị, không phải danh sách việc.
2. Tính capacity thật (ngày làm − nghỉ × availability × focus); trừ phép, chia sẻ, onboarding.
3. Dùng velocity/năng suất gần nhất (SP/ngày) để dự báo, không dùng mong muốn.
4. Cam kết ở mức dự báo hoặc thấp hơn 5–10%; giữ một story "stretch".
5. Ghi rủi ro/phụ thuộc trong sprint và kết quả ở cuối để học.
