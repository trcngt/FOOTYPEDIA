---
title: 0. Tổng Quan Phân Tích Dữ Liệu Bóng Đá
description: Khám phá cuộc cách mạng số liệu, cách các CLB chuyên nghiệp ứng dụng Data Analytics để tuyển trạch, đánh giá hiệu quả và đọc trận đấu.
sidebar:
  order: 0
---

Bóng đá hiện đại không còn được đánh giá đơn thuần bằng cảm tính hay mắt thường. Các câu lạc bộ hàng đầu thế giới (tiêu biểu như Brighton, Brentford, Liverpool, Manchester City) đều sở hữu bộ phận khoa học dữ liệu (Data Science Dept) phân tích hàng triệu sự kiện trên sân nhằm tối ưu hóa chiến thuật, phát hiện tài năng ẩn và đưa ra quyết định chuyển nhượng chính xác.

---

## 📊 1. Bản Đồ Hệ Thống Dữ Liệu Bóng Đá

```text
HỆ THỐNG DỮ LIỆU & CHỈ SỐ BÓNG ĐÁ
├── 1. CHỈ SỐ TẤN CÔNG & DỨT ĐIỂM
│   ├── xG (Expected Goals - Bàn thắng kỳ vọng)
│   ├── xA / xAG (Expected Assists / Expected Assisted Goals - Kiến tạo kỳ vọng)
│   ├── npxG (Non-penalty xG - xG không tính phạt đền)
│   └── SCA / GCA (Shot / Goal-Creating Actions - Hành động tạo dứt điểm / bàn thắng)
│
├── 2. CHỈ SỐ PHÂN PHỐI & TỊNH TIẾN BÓNG
│   ├── PrgP / PrgC (Progressive Passes / Carries - Chuyền & Dẫn bóng tịnh tiến)
│   ├── Passes into Final Third / Penalty Area (Chuyền vào 1/3 sân đối phương / Vòng cấm)
│   ├── Key Passes (Đường chuyền mở ra cơ hội dứt điểm)
│   └── Pass Networks & Packing Rate (Mạng lưới & Tỷ lệ loại bỏ đối thủ bằng đường chuyền)
│
├── 3. CHỈ SỐ PHÒNG NGỰ & PRESSING
│   ├── PPDA (Passes Per Defensive Action - Cường độ pressing)
│   ├── Field Tilt (Độ nghiêng kiểm soát sân bóng ở 1/3 cuối sân)
│   ├── High Turnovers (Đoạt lại quyền kiểm soát bóng tầm cao)
│   └── Tackles + Interceptions (Tắc bóng & Đánh chặn chuẩn hóa)
│
└── 4. HÌNH THỨC TRỰC QUAN HÓA (VISUALIZATION)
    ├── Heatmap (Bản đồ nhiệt phạm vi hoạt động)
    ├── Touchmap (Bản đồ tọa độ các điểm chạm bóng)
    ├── Shot Map (Bản đồ phân bổ góc sút & chất lượng cơ hội)
    └── Radar / Percentile Chart (Biểu đồ mạng nhện so sánh hồ sơ cầu thủ)
```
---
## 🛰️ 2. Hai Tầng Dữ Liệu Gốc: Event Data vs Tracking Data
Mọi chỉ số nâng cao đều được tính toán từ hai nguồn dữ liệu thô:
```text
HAI TẦNG DỮ LIỆU BÓNG ĐÁ
├── 1. EVENT DATA (Dữ liệu sự kiện - ~3.000 sự kiện/trận)
│   ├── Ghi lại: Mỗi khi cầu thủ chạm bóng (Chuyền, Sút, Tắc bóng, Rê dắt...)
│   └── Thông tin đi kèm: Cầu thủ thực hiện, Thời gian (giây), Tọa độ (X, Y), Kết quả
│
└── 2. TRACKING DATA (Dữ liệu quang học - ~3.000.000 điểm dữ liệu/trận)
    ├── Ghi lại: Tọa độ liên tục của toàn bộ 22 cầu thủ và trái bóng (25 khung hình/giây)
    └── Thông tin đi kèm: Tốc độ di chuyển, Gia tốc, Khoảng cách cự ly đội hình, Không gian mở
```
---
## 🔍 3. Dữ Liệu Truyền Thống vs Dữ Liệu Nâng Cao
``` text
SO SÁNH HAI TRƯỜNG PHÁI DỮ LIỆU
├── DỮ LIỆU TRUYỀN THỐNG (Dễ gây hiểu lầm):
│   ├── Số cú sút: 20 cú sút xa 30m vẫn tính bằng 20 cú sút cận thành 5m
│   ├── Tỷ lệ kiểm soát bóng %: Cầm bóng nhiều nhưng chuyền an toàn ở sân nhà
│   └── Số pha tắc bóng: Cầu thủ tắc bóng nhiều có thể do phán đoán vị trí kém
│
└── DỮ LIỆU NÂNG CAO (Advanced Metrics - Bóc tách bản chất):
    ├── xG trên mỗi cú sút (xG/Shot): Đo lường chất lượng thật sự của cơ hội
    ├── Field Tilt: Cho biết đội bóng có thật sự áp đặt đối thủ ở 1/3 sân cuối hay không
    └── Progressive Distance: Đo lường mức độ tịnh tiến bóng về phía khung thành đối phương
```

---
## ⏱️ 4. Quy Chuẩn "Per 90" (P90) — Chìa Khóa So Sánh Công Bằng
Trong bóng đá, so sánh tổng số lượng (bàn thắng, kiến tạo, tắc bóng) thường không chính xác nếu số phút thi đấu của các cầu thủ khác nhau.
```text
CÔNG THỨC CHUẨN HÓA PER 90
Chỉ số P90 = (Tổng số lần thực hiện ÷ Tổng số phút thi đấu thực tế) × 90
```
Ý nghĩa: Giúp đánh giá hiệu suất của một cầu thủ dự bị thường xuyên vào sân 20-30 phút/trận một cách công bằng với cầu thủ đá chính trọn vẹn 90 phút.

---
## 💼 5. Các Ứng Dụng Thực Tế Của Data Analytics Trong CLB
* Tuyển trạch thông minh (Data-Driven Scouting / Moneyball): Tìm kiếm các viên ngọc thô có chỉ số vượt trội ở các giải đấu nhỏ với mức giá rẻ trước khi thị trường phát hiện.

* Chuẩn bị trước trận đấu (Pre-match Analysis): Phân tích điểm yếu trong cấu trúc phòng ngự đối thủ và hướng tấn công ưa thích của họ.

* Tối ưu hóa tình huống cố định (Set-piece Design): Thiết kế các bài phạt góc và đá phạt trực tiếp dựa trên xác suất thành bàn cao nhất.

* Y học & Thể lực thể thao (Sports Science): Theo dõi tải trọng vận động (High-speed Running, Sprint Distance) để xoay tua đội hình và phòng ngừa chấn thương cơ bắp.

---
## 📖 6. Lộ Trình Các Bài Viết Chi Tiết
* Chỉ Số Tấn Công: xG, xA, SCA, GCA: Giải mã công thức tính bàn thắng kỳ vọng và chất lượng dứt điểm.

* Chỉ Số Phân Phối & Tịnh Tiến: Progressive Passes, Key Passes và cách đánh giá một tiền vệ tổ chức.

* Chỉ Số Phòng Ngự & Pressing: PPDA, Field Tilt, High Turnovers và chỉ số phòng ngự.

* Đọc Bản Đồ Nhiệt & Báo Cáo Trận Đấu: Hướng dẫn đọc Heatmap, Touchmap, Shot Map và Radar Chart sau mỗi vòng đấu.

<Elicitations message="Tiếp theo, bạn muốn viết bài nào trong Tầng Phân Tích Dữ Liệu?">
  <Elicitation label="Viết tiếp bài 1: Chỉ Số Tấn Công (xG, xA, SCA)" query="Viết tiếp bài 1 (Chỉ Số Tấn Công: xG, xA, SCA, GCA) dạng khối code: src/content/docs/phantich/chisotancong.md"/>
  <Elicitation label="Viết tiếp bài 2: Chỉ Số Phân Phối & Tịnh Tiến" query="Viết tiếp bài 2 (Chỉ Số Phân Phối & Kiểm Soát: Progressive, Pass Maps) dạng khối code: src/content/docs/phantich/chisophanphoi.md"/>
</Elicitations>