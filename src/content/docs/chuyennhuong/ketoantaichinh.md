---
title: 7.2. Kinh Tế Học & Kế Toán Bóng Đá (Amortisation)
description: Khám phá bí mật kế toán bóng đá, cách tính khấu hao chuyển nhượng (Amortisation), giá trị sổ sách và phương pháp ghi nhận lợi nhuận bán cầu thủ.
sidebar:
  order: 2
---

Trong bóng đá hiện đại, chi phí mua cầu thủ không được ghi nhận toàn bộ ngay trong năm tài chính thực hiện thương vụ. Thay vào đó, các câu lạc bộ áp dụng nguyên tắc kế toán tài sản vô hình để chia nhỏ chi phí theo từng năm qua cơ chế **Khấu hao (Player Amortisation)**.

---

## 🧮 1. Cơ Chế Khấu Hao (Player Amortisation)

Khi CLB chiêu mộ cầu thủ, quyền đăng ký thi đấu được tính là tài sản vô hình. Mức phí chuyển nhượng gốc sẽ được chia đều theo số năm của hợp đồng ban đầu:

```text
CÔNG THỨC KHẤU HAO HÀNG NĂM
Khấu hao mỗi năm = Tổng phí chuyển nhượng ÷ Thời hạn hợp đồng (năm)
```

Ví dụ minh họa:
* CLB mua cầu thủ với mức phí €100 triệu, ký hợp đồng 5 năm.

* Chi phí khấu hao ghi nhận hàng năm trên sổ sách:
```text
€100m ÷ 5 năm = €20m / năm
```
* Báo cáo tài chính năm đầu chỉ tính chi phí mua cầu thủ là €20 triệu (chưa bao gồm lương), thay vì ghi nhận một lần €100 triệu.

---
## 📈 2. Giá Trị Sổ Sách & Lợi Nhuận Bán Cầu Thủ
Giá trị sổ sách còn lại (Net Book Value) của một cầu thủ sẽ giảm dần qua từng năm thi đấu:

```text
TÍNH GIÁ TRỊ SỔ SÁCH CÒN LẠI
Giá trị sổ sách còn lại = Phí mua ban đầu - (Khấu hao mỗi năm × Số năm đã thi đấu)

TÍNH LỢI NHUẬN BÁN CẦU THỦ (TRANSFER PROFIT)
Lợi nhuận kế toán = Giá bán thực tế - Giá trị sổ sách còn lại
```
Bài toán thực tế:
1. CLB mua cầu thủ với giá €50 triệu, hợp đồng 5 năm (khấu hao €10m/năm).

2. Sau 2 năm cống hiến, giá trị sổ sách còn lại của cầu thủ là:
```text
€50m - (€10m × 2) = €30 triệu
```
3. Bước sang năm thứ 3, CLB bán cầu thủ này cho đội khác với giá €60 triệu:
```text
€60m (Giá bán) - €30m (Giá trị sổ sách) = €30 triệu LỢI NHUẬN
```
Ý nghĩa kế toán: Khoản lãi €30 triệu này được ghi nhận ngay lập tức 100% vào doanh thu/lợi nhuận của năm tài chính đó, giúp cải thiện chỉ số tài chính của CLB rất nhanh.

---
## 💎 3. Cầu Thủ Học Viện (Pure Profit)
Cầu thủ do lò đào tạo của CLB tự phát triển (Homegrown / Academy Player) không tốn phí chuyển nhượng mua về, nên giá trị sổ sách ban đầu bằng €0.
```text
CẦU THỦ HỌC VIỆN (PURE PROFIT)
Giá trị sổ sách = €0
Toàn bộ số tiền bán được = 100% Lợi nhuận ròng thuần túy (Pure Profit)
```

* Khi bán một tài năng tự đào tạo (ví dụ: Mason Mount, Cole Palmer), toàn bộ tiền thu về được ghi nhận trực tiếp vào lợi nhuận kế toán.

* Đây là lý do các CLB thường ưu tiên bán cầu thủ học viện khi cần cân đối sổ sách gấp để tránh vi phạm quy định tài chính.

---
## 📊 4. Bảng Thuật Ngữ Kế Toán Cần Biết

```text
BỘ CHỈ SỐ KẾ TOÁN BÓNG ĐÁ
├── Amortisation (Khấu hao phân bổ theo hợp đồng)
├── Impairment (Giảm giá trị tài sản khi chấn thương nặng/xuống phong độ)
├── Book Value / Net Book Value (Giá trị còn lại trên sổ sách kế toán)
├── Capital Gain / Transfer Profit (Lãi từ việc bán cầu thủ)
├── Transfer Loss (Lỗ khi bán thấp hơn giá trị sổ sách)
├── Gross Transfer Spend (Tổng tiền chi mua cầu thủ)
├── Net Transfer Spend (Chi tiêu ròng: Tiền mua - Tiền bán)
└── Wage-to-Revenue Ratio (Tỷ lệ Quỹ lương / Tổng doanh thu)
```
<Elicitations message="Tiếp theo, bạn muốn viết bài 7.3?">
  <Elicitation label="Viết tiếp bài 7.3: Luật FFP" query="Viết tiếp bài 7.3 (Luật Công Bằng Tài Chính & Squad Cost Rule) dạng file md thuần: src/content/docs/chuyennhuong/luatffp.md"/>
  <Elicitation label="Kiểm tra lại bài 7.2" query="Kiểm tra lại cấu trúc và công thức trong file ketoan-taichinh.md."/>
</Elicitations>