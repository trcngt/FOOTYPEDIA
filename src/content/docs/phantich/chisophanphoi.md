---
title: "10.2. Chỉ Số Phân Phối, Kiểm Soát & Tịnh Tiến Bóng"
description: "Khám phá các chỉ số đo lường khả năng luân chuyển bóng hiện đại gồm Progressive Passes, Progressive Carries, Key Passes và Pass Networks."
sidebar:
  order: 2
---

Trong bóng đá hiện đại, một tiền vệ chuyền bóng chính xác 95% chưa chắc đã là một tiền vệ xuất sắc nếu phần lớn các đường chuyền đều là chuyền ngang hoặc chuyền về sân nhà. Các chỉ số phân phối nâng cao giúp phân biệt giữa **chuyền bóng an toàn vô hại** và **chuyền bóng mang tính đột biến xuyên tuyến**.

---

## 🚀 1. Hành Động Tịnh Tiến Bóng (Progressive Actions)

Theo định nghĩa của các nền tảng phân tích dữ liệu lớn (như Opta, StatsBomb, FBref), một hành động được coi là **tịnh tiến (Progressive)** khi đưa bóng tiến gần về phía khung thành đối phương một khoảng cách tối thiểu nhất định:

```text
TIÊU CHUẨN ĐƯỜNG CHUYỀN / KÉO BÓNG TỊNH TIẾN
├── Chuyền từ sân nhà: Đưa bóng tiến lên phía trước tối thiểu 10 - 15 mét
├── Chuyền ở sân đối phương: Đưa bóng tiến lên phía trước tối thiểu 10 mét
└── Ngoại lệ: Không tính các đường chuyền xuất phát từ 40% phần sân nhà sâu nhất
```
```text
PHÂN LOẠI HÀNH ĐỘNG TỊNH TIẾN
├── PrgP (Progressive Passes): Tổng số đường chuyền tịnh tiến thành công
└── PrgC (Progressive Carries): Tổng số lần cầu thủ tự dẫn bóng tịnh tiến lên phía trước
```
Ý nghĩa: Cầu thủ sở hữu chỉ số PrgP và PrgC cao (như Kevin De Bruyne, Martin Ødegaard, Frenkie de Jong) là những "máy kéo" đưa đội bóng thoát khỏi áp lực pressing và tiếp cận vùng cấm địa đối thủ.

---
## 🎯 2. Đường Chuyền Quyết Định & Chọc Khe
* Key Passes (KP): Đường chuyền trực tiếp tạo cơ hội cho đồng đội tung ra một cú dứt điểm (bất kể cú sút đó có thành bàn hay không).

* Passes into Final Third: Số đường chuyền thành công đưa bóng từ 2/3 sân nhà vào 1/3 sân đối phương (Final Third) — thước đo khả năng áp đặt thế trận.

* Passes into Penalty Area: Số đường chuyền xuyên thẳng vào vòng cấm địa 16m50 (không tính các quả đá phạt góc/cố định).

* Through Balls (Chọc khe): Đường chuyền xuyên qua khe hở giữa các hậu vệ đối phương để đồng đội băng xuống đối mặt thủ môn.

---
## 📈 3. Mối Đe Dọa Kỳ Vọng (Expected Threat - xT)
xT (Expected Threat) là mô hình chia sân cỏ thành các ô vuông (thường là 16 x 12 ô) và gán cho mỗi ô một giá trị xác suất ghi bàn.
* Cách tính: Khi cầu thủ chuyền hoặc rê bóng từ một khu vực có xác suất bàn thắng thấp (ví dụ: giữa sân = 0.01) đến một khu vực nguy hiểm hơn (ví dụ: mép vòng cấm = 0.08), họ được cộng +0.07 xT.
* Ý nghĩa: Ghi nhận công lao của những cầu thủ thực hiện "đường chuyền tiền kiến tạo" (pre-assist) mở toang hàng phòng ngự mà các chỉ số truyền thống bỏ sót.
---
## 🕸️ 4. Mạng Lưới Chuyền Bóng (Pass Networks) & Packing Rate
```text
CÁC HÌNH THỨC PHÂN TÍCH LUÂN CHUYỂN BÓNG
├── PASS NETWORKS (Mạng lưới chuyền bóng):
│   ├── Kích thước chấm tròn: Thể hiện số lần chạm bóng / chuyền bóng của cầu thủ
│   ├── Độ dày đường nối: Thể hiện tần suất hai cầu thủ chuyền bóng cho nhau
│   └── Vị trí chấm: Thể hiện vị trí trung bình trên sân khi chạm bóng
│
└── PACKING RATE (Chỉ số loại bỏ đối thủ):
    └── Đo lường số lượng cầu thủ phòng ngự đối phương bị vượt qua bởi một đường chuyền
```
Nhận diện qua Pass Network: Giúp huấn luyện viên phát hiện đội bóng có đang bị "lệch cánh" (chỉ tấn công cánh phải mà bỏ quên cánh trái) hay tiền đạo cắm có đang bị "cô lập" khỏi các tiền vệ hay không.

<ElicitationsGroup message="Tiếp theo, bạn muốn chuẩn hóa bài nào?">

  <Elicitation label="Cập nhật chuẩn hóa bài 10.3: Phòng Ngự & Pressing" query="Viết lại bài 10.3 (Chỉ Số Phòng Ngự, Cường Độ Pressing & Ép Sân) hoàn chỉnh và chuẩn hóa: src/content/docs/phantich/chisophongngu.md"/>
  <Elicitation label="Viết tiếp bài 10.4: Đọc Bản Đồ Nhiệt & Báo Cáo" query="Viết bài 10.4 (Cách Đọc Bản Đồ Nhiệt, Touchmap & Báo Cáo Sau Trận) dạng khối code: src/content/docs/phantich/docbando-heatmaps.md"/>
</ElicitationsGroup>