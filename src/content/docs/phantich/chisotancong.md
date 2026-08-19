---
title: "10.1. Chỉ Số Tấn Công: xG, xA, SCA & GCA"
description: Giải mã các chỉ số đo lường hiệu quả tấn công hiện đại gồm bàn thắng kỳ vọng (xG), kiến tạo kỳ vọng (xA) và các hành động tạo cơ hội.
sidebar:
  order: 1
---

Trong bóng đá hiện đại, số bàn thắng ghi được đôi khi bị ảnh hưởng bởi yếu tố may mắn hoặc phong độ nhất thời. Các chỉ số tấn công nâng cao giúp bóc tách chính xác chất lượng cơ hội mà cầu thủ và đội bóng tạo ra.

---

## 🎯 1. Bàn Thắng Kỳ Vọng (Expected Goals - xG)

**xG (Expected Goals)** là thước đo xác suất một cú dứt điểm sẽ chuyển hóa thành bàn thắng, nhận giá trị trong khoảng từ **0.00 đến 1.00**.

```text
CÁC YẾU TỐ TÍNH TOÁN xG CỦA MỘT PHA DỨT ĐIỂM
├── Khoảng cách đến khung thành (Distance to goal)
├── Góc sút (Angle to goal)
├── Bộ phận dứt điểm: Chân thuận, chân không thuận hay đánh đầu
├── Loại đường chuyền trước đó: Chọc khe, tạt bóng, bóng bật ra hay đá phạt
└── Bối cảnh dứt điểm: Đối mặt thủ môn, bị áp sát hay đệm bóng cận thành
```
Ví dụ quy đổi xG:
* Quả phạt đền (Penalty): Luôn có giá trị cố định xG = 0.79 (tương đương 79% cơ hội thành bàn).
* Đệm bóng cận thành 3m không ai kèm: xG = 0.85 - 0.95.
* Sút xa từ cự ly 30m: xG = 0.02 - 0.04 (chỉ có 2% đến 4% cơ hội thành bàn).

---
## ⚖️ 2. npxG & Phân Tích Hiệu Suất Dứt Điểm
```text
CÁC BIẾN THỂ CỦA CHỈ SỐ xG
├── npxG (Non-Penalty xG): Tổng xG không bao gồm các quả đá phạt đền
└── xG Overperformance / Underperformance: Đánh giá khả năng chuyển hóa cơ hội
```
* Overperformance (Số bàn thắng > xG): Cầu thủ có kỹ năng dứt điểm xuất chúng (như Erling Haaland, Son Heung-min) hoặc đang có phong độ cực cao.

* Underperformance (Số bàn thắng < xG): Cầu thủ bỏ lỡ nhiều cơ hội ngon ăn (như Nicolas Jackson, Darwin Núñez ở một số giai đoạn).

---
## 🅰️ 3. Kiến Tạo Kỳ Vọng (Expected Assists - xA / xAG)
* xA (Expected Assists): Đo lường xác suất một đường chuyền sẽ trở thành một pha kiến tạo thành bàn, bất kể cầu thủ nhận bóng có sút trúng đích hay không.

* xAG (Expected Assisted Goals): Chỉ tính xG của cú sút ngay sau đường chuyền đó (phản ánh trực tiếp đóng góp tạo bàn thắng).

---
## ⚡ 4. Hành Động Tạo Cơ Hội: SCA & GCA
```text
CHUỖI TẠO BÀN THẮNG (CREATING ACTIONS)
├── SCA (Shot-Creating Actions): 2 hành động trực tiếp dẫn đến một cú sút
│   └── Bao gồm: Chuyền bóng, rê dắt (Take-on), kiếm về quả phạt đền/đá phạt
│
└── GCA (Goal-Creating Actions): 2 hành động trực tiếp dẫn đến một bàn thắng thực tế
```

---
## 🧤 5. Post-Shot xG (PSxG / xGOT) — Độ Hiểm Của Cú Sút
Nếu xG đo chất lượng cơ hội trước khi sút, thì PSxG (Post-Shot Expected Goals) đo độ khó của cú sút sau khi bóng đã rời chân (tính đến quỹ đạo bay vào góc hiểm, lực sút và vị trí bóng hướng đến khung thành)
* Đánh giá cú sút: Một cơ hội xG thấp (0.05) nhưng cầu thủ sút cầu vồng găm thẳng vào góc chữ A sẽ có PSxG vọt lên 0.80 - 0.90.
* Đánh giá thủ môn (PSxG +/-): Nếu thủ môn đối mặt với tổng PSxG là 40.0 mà chỉ để thủng lưới 32 bàn -> Thủ môn đã cản phá xuất sắc cứu thua hơn kỳ vọng +8.0 bàn.

<Elicitations message="Tiếp theo, bạn muốn làm gì?">
  <Elicitation label="Viết bài 10.3: Chỉ Số Phòng Ngự & Pressing" query="Viết tiếp bài 10.3 (Chỉ Số Phòng Ngự & Pressing: PPDA, Field Tilt) dạng khối code: src/content/docs/phantich/chisophongngu.md"/>
  <Elicitation label="Viết bài 10.4: Đọc Bản Đồ Nhiệt & Báo Cáo" query="Viết tiếp bài 10.4 (Cách Đọc Bản Đồ Nhiệt & Báo Cáo Sau Trận) dạng khối code: src/content/docs/phantich/docbando-heatmaps.md"/>
</Elicitations>