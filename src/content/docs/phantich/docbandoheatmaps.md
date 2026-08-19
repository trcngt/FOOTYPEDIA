---
title: "10.4. Cách Đọc Bản Đồ Nhiệt & Báo Cáo Trận Đấu"
description: "Hướng dẫn thực hành đọc hiểu Heatmap, Touchmap, Shot Map, Radar Chart và cấu trúc một bản báo cáo phân tích chiến thuật sau trận đấu."
sidebar:
  order: 4
---

Sau khi đã nắm vững các chỉ số định lượng ($xG, xA, PPDA$), việc trực quan hóa dữ liệu qua các biểu đồ không gian và đọc báo cáo chiến thuật là bước cuối cùng để bạn phân tích một trận đấu ở góc nhìn của một chuyên gia phân tích dữ liệu (Data Analyst).

---

## 🗺️ 1. Giải Mã Các Loại Bản Đồ Không Gian

```text
CÁC LOẠI BIỂU ĐỒ TRỰC QUAN HÓA TRÊN SÂN
├── HEATMAP (Bản đồ nhiệt): Mật độ hiện diện và di chuyển theo thời gian
├── TOUCHMAP (Bản đồ chạm bóng): Vị trí chính xác của từng lần tiếp xúc bóng
├── PASS MAP / NETWORK: Mạng lưới chuyền bóng & cự ly đội hình trung bình
└── SHOT MAP (Bản đồ dứt điểm): Tọa độ, chất lượng (xG) và kết quả cú sút
```
1. Bản Đồ Nhiệt (Heatmap)
Quy ước màu sắc: Vùng màu Đỏ / Cam biểu thị nơi cầu thủ dành nhiều thời gian hoạt động nhất; vùng Vàng / Xanh lục là khu vực di chuyển lướt qua.
Cách đọc:
* Hậu vệ biên hiện đại (Attacking Full-back) sẽ có vệt đỏ trải dài dọc theo đường biên dọc bên phần sân đối phương.
* Tiền vệ quét (Anchor Man) sẽ có vùng đỏ đậm bao phủ chính diện ngay trước vòng cấm địa sân nhà.

2. Bản Đồ Chạm Bóng (Touchmap)
* Khác với Heatmap (đo vị trí đứng), Touchmap ghi lại chính xác từng tọa độ $(X, Y)$ khi cầu thủ chạm vào bóng.
* Giúp phân biệt cầu thủ di chuyển không bóng nhiều nhưng chạm bóng ít (ví dụ: tiền đạo hút người) với cầu thủ trực tiếp tham gia điều tiết nhịp độ.

---
## 🎯 2. Cách Đọc Bản Đồ Dứt Điểm (Shot Map)
Bản đồ dứt điểm tái hiện bức tranh toàn cảnh về hiệu quả tấn công của một cá nhân hoặc một đội bóng:
```text
QUY ƯỚC TRÊN SHOT MAP
├── Vị trí chấm: Tọa độ nơi tung ra cú sút
├── Kích thước chấm: Tỷ lệ xG của cú sút (Chấm càng to = xG càng cao / cơ hội càng rõ rệt)
└── Ký hiệu / Màu sắc:
    ├── Chấm tròn đặc: Bàn thắng (Goal)
    ├── Chấm tròn rỗng: Sút trúng đích bị cản phá (Saved)
    ├── Dấu gạch chéo (X): Sút ra ngoài (Off Target)
    └── Hình tam giác / vuông: Sút bị chặn (Blocked)
```
Dấu hiệu đội tấn công chất lượng: Có mật độ chấm tròn lớn tập trung dày đặc bên trong vòng cấm 5m50 và khu vực chấm 11m (thay vì dàn trải các chấm nhỏ li ti ngoài vòng 16m50).

---
## 🕸️ 3. Biểu Đồ Mạng Nhện (Radar / Percentile Chart)
Radar Chart là công cụ trực quan nhất để phác họa hồ sơ năng lực (Player Profile) của một cầu thủ so với các đồng nghiệp cùng vị trí trong giải đấu.
```text
THANG ĐO BÁCH PHÂN VỊ (PERCENTILE RANK - 0 ĐẾN 100)
├── 90th - 99th Percentile: Nằm trong Top 10% cầu thủ xuất sắc nhất ở chỉ số đó
├── 50th Percentile: Mức trung bình của giải đấu
└── 1st - 10th Percentile: Nằm trong nhóm 10% thấp nhất
```
Ứng dụng: Giúp người tuyển trạch nhìn thấy ngay điểm mạnh vượt trội (vùng biểu đồ phình to) và điểm yếu chí mạng (vùng biểu đồ lõm vào) của mục tiêu chuyển nhượng.

---
## 📋 4. Cấu Trúc 4 Bước Đọc Bản Báo Cáo Sau Trận (Post-Match Report)
```text
QUY TRÌNH PHÂN TÍCH NHANH TRẬN ĐẤU
├── Bước 1: So sánh Tỷ số thực tế vs xG (Ai là người tạo ra cơ hội chất lượng hơn?)
├── Bước 2: Đánh giá Field Tilt & PPDA (Đội nào kiểm soát thế trận ở 1/3 sân cuối?)
├── Bước 3: Xem Pass Network (Hệ thống luân chuyển bóng có bị nghẽn ở đâu không?)
└── Bước 4: Kiểm tra Shot Map & Key Passes (Các phương án hãm thành chính đến từ đâu?)
```
<ElicitationsGroup message="Bạn đã hoàn thành trọn vẹn Tầng 10 Phân Tích! Bạn muốn làm gì tiếp theo?">

  <Elicitation label="Kiểm tra & Cập nhật sidebar trong astro.config.mjs" query="Kiểm tra cấu hình sidebar trong file astro.config.mjs để đảm bảo toàn bộ 10 tầng tri thức đã được liên kết chính xác."/>
  <Elicitation label="Chạy lệnh kiểm tra build dự án" query="Hướng dẫn chạy build thử nghiệm toàn bộ dự án Footypedia để kiểm tra lỗi cú pháp và liên kết gãy."/>
</ElicitationsGroup>