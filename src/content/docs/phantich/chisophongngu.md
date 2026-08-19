---
title: "10.3. Chỉ Số Phòng Ngự, Cường Độ Pressing & Ép Sân"
description: "Giải mã các chỉ số phòng ngự nâng cao gồm cường độ pressing (PPDA), độ nghiêng áp đặt (Field Tilt), đoạt bóng tầm cao và tắc bóng chuẩn hóa."
sidebar:
  order: 3
---

Trong bóng đá hiện đại, hiệu quả phòng ngự không chỉ được tính bằng số lần phá bóng hay cản phá của hậu vệ. Cách một đội bóng gây áp lực, thu hồi quyền kiểm soát bóng từ xa và bóp nghẹt không gian chơi bóng của đối thủ mới là thước đo chính xác nhất.

---

## ⚡ 1. Cường Độ Pressing (PPDA - Passes Per Defensive Action)

**PPDA** là chỉ số đo lường số đường chuyền đối phương được phép thực hiện trước khi đội phòng ngự tung ra một hành động can thiệp (tắc bóng, cắt bóng, phạm lỗi) ở 60% chiều dài sân phía đối thủ.

```text
CÔNG THỨC TÍNH PPDA
PPDA = (Số đường chuyền của đối thủ ở khu vực phòng ngự của họ) ÷ (Tổng số hành động phòng ngự của đội bạn ở khu vực đó)
```
```text
QUY CHUẨN ĐỌC CHỈ SỐ PPDA
├── PPDA thấp (Dưới 8.0 - 10.0): Đội bóng pressing tầm cao cực kỳ hung hãn (như Liverpool thời Klopp, Man City)
├── PPDA trung bình (10.0 - 13.0): Đội bóng duy trì khối trung bình (Mid-block), áp sát chọn lọc
└── PPDA cao (Trên 15.0): Đội bóng lùi sâu phòng ngự (Low-block), nhường quyền kiểm soát bóng cho đối thủ
```
---
## 📐 2. Độ Nghiêng Sân Khấu (Field Tilt)
Kiểm soát bóng (Possession %) tổng thể đôi khi không phản ánh đúng sự áp đảo nếu một đội chỉ chuyền qua lại giữa hai trung vệ và thủ môn. Field Tilt giải quyết triệt để vấn đề này.
```text
CÔNG THỨC FIELD TILT
Field Tilt (%) = (Số đường chuyền của đội nhà ở 1/3 cuối sân) ÷ (Tổng số đường chuyền ở 1/3 cuối sân của cả hai đội) × 100
```
* Field Tilt > 65%: Đội bóng hoàn toàn làm chủ thế trận, đẩy lùi đối thủ về sát vòng cấm địa.
* Field Tilt = 50%: Trận đấu diễn ra giằng co, cân bằng ở khu vực nguy hiểm.
* Field Tilt < 35%: Đội bóng chấp nhận chơi phòng ngự phản công hoặc đang bị dồn ép nghẹt thở.

---
## 🔄 3. Đoạt Bóng Tầm Cao & Chuyển Trạng Thái (High Turnovers)
```text
CÁC DẠNG ĐOẠT BÓNG TẦM CAO
├── High Turnover: Pha đoạt lại quyền kiểm soát bóng trong phạm vi 40 mét tính từ khung thành đối phương
├── Shot-Ending High Turnover: Pha đoạt bóng tầm cao dẫn thẳng đến một cú dứt điểm trong vòng 5 giây
└── Goal-Ending High Turnover: Pha đoạt bóng tầm cao trực tiếp dẫn đến một bàn thắng
```
Ý nghĩa: Đội bóng có nhiều pha đoạt bóng tầm cao thành bàn là những cỗ máy chuyển đổi trạng thái phản công nhanh nguy hiểm nhất.

---
## 🛡️ 4. Tắc Bóng & Đánh Chặn Chuẩn Hóa (pAdj Tackles/Interceptions)
Một đội bóng kiểm soát bóng tới 70% thời lượng trận đấu sẽ có rất ít thời gian để thực hiện tắc bóng, dẫn đến số liệu phòng ngự thô bị thấp một cách bất công.

* pAdj (Possession-Adjusted): Dữ liệu tắc bóng và cắt bóng sau khi đã được chuẩn hóa theo tỷ lệ kiểm soát bóng của đối thủ, giúp so sánh chính xác năng lực tranh chấp giữa một trung vệ của đội bóng cầm bóng nhiều và một trung vệ của đội chơi phòng ngự lùi sâu.

<ElicitationsGroup message="Tiếp theo, bạn muốn viết bài nào?">
  <Elicitation label="Viết tiếp bài 10.4: Đọc Bản Đồ Nhiệt & Báo Cáo" query="Viết tiếp bài 10.4 (Cách Đọc Bản Đồ Nhiệt & Báo Cáo Sau Trận) dạng khối code: src/content/docs/phantich/docbandoheatmaps.md"/>
  <Elicitation label="Kiểm tra toàn bộ thư mục Tầng 10" query="Kiểm tra cấu trúc và liên kết của toàn bộ các file trong thư mục src/content/docs/phantich/."/>
</ElicitationsGroup>