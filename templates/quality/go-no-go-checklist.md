**Tên tài liệu:** Go/No-Go Checklist — FoodNow MVP
**Dự án:** FoodNow MVP
**Phiên bản / ngày:** Lần 1: 21/08/2026 (No-Go) · Lần 2: 16/09/2026 (Go)
**Mục đích & khi nào dùng:** Quyết định phát hành dựa trên tiêu chí đo được đã ký từ trước; dùng ở mọi cuộc họp Go/No-Go.

---

## 1. Tiêu chí và kết quả

| # | Nhóm | Tiêu chí (đã ký 09/03/2026) | Lần 1 (21/08) | Lần 2 (16/09) |
|---|---|---|---|---|
| 1 | Chất lượng | Không còn bug **Critical** | ❌ 3 Critical | ✅ 0 |
| 2 | Chất lượng | Không còn bug **High** | ❌ 9 High | ✅ 0 |
| 3 | UAT | 100% kịch bản đã chạy | ✅ 100% | ✅ 100% (vòng 2: lõi + retest) |
| 4 | UAT | Sign-off Product/CS | ❌ chưa | ✅ Châu, Huy |
| 5 | Hiệu năng | p95 đặt đơn ≤ 2 giây ở tải 2× dự kiến | ✅ 1,8 s | ✅ 1,7 s |
| 6 | Bảo mật | Pentest: không lỗ hổng mức cao mở | ⚠️ 1 High mở | ✅ 0 |
| 7 | Thanh toán | Chứng nhận PayEasy còn hiệu lực; đối soát khớp 100% | ✅ | ✅ |
| 8 | Vận hành | Cutover và rollback đã diễn tập ≤ 30 phút | ❌ chưa diễn tập | ✅ 24 phút |
| 9 | Vận hành | Runbook và giám sát/cảnh báo sẵn sàng | ⚠️ một phần | ✅ |
| 10 | Con người | CS và người dùng chính được đào tạo | ⚠️ 60% | ✅ ≥ 90% |
| 11 | Tuân thủ | Điều khoản/pháp lý đã rà | ✅ | ✅ |
| 12 | Kinh doanh | Sponsor đồng ý ngày go-live | — | ✅ 03/10 |

## 2. Quy tắc quyết định

- **Go**: mọi tiêu chí "bắt buộc" (1, 2, 4, 5, 6, 7, 8) đạt.
- **Go có điều kiện**: chỉ khi tiêu chí không bắt buộc còn thiếu và có kế hoạch, ký bởi Sponsor và QA Lead.
- **No-Go**: ≥ 1 tiêu chí bắt buộc không đạt → xác định điều kiện để quay lại và ngày họp lại.
- Người quyết định: **Bảo**; khuyến nghị: Hà, Dũng, Nam. **QA Lead có quyền phản đối bằng văn bản**.

## 3. Kết quả

**21/08/2026 — NO-GO.** Lý do: 3 Critical, 9 High, chưa diễn tập cutover, chưa sign-off. Điều kiện quay lại: sửa 12 defect, rc.2, diễn tập cutover, UAT vòng 2. Họp lại 16/09.
**16/09/2026 — GO.** Mọi tiêu chí bắt buộc đạt; go-live 03/10 02:00.

---

## Cách dùng cho dự án của bạn

1. Ký tiêu chí Go/No-Go ngay từ giai đoạn lập kế hoạch (không phải lúc quyết định).
2. Đánh dấu tiêu chí "bắt buộc" và "nên có".
3. Điền số thật và bằng chứng (link báo cáo).
4. Cho QA Lead quyền phản đối bằng văn bản.
5. Ghi lại lý do quyết định và điều kiện quay lại.
