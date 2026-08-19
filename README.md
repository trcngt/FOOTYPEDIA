# ⚽ FOOTYPEDIA

> Thư viện bách khoa toàn thư kỹ thuật số về bóng đá — tổng hợp thông tin, số liệu, lịch sử và chiến thuật bóng đá.

🔗 **Live Demo:** [footypedia.vercel.app](https://footypedia.vercel.app/)

---

## 📌 Tính năng chính

* 📖 **Tài liệu & Bài viết chi tiết:** Tối ưu hóa đọc bài viết với định dạng MDX linh hoạt.
* ⚡ **Hiệu năng cao:** Xây dựng trên nền tảng Astro giúp tải trang cực nhanh và tối ưu SEO.
* 🌓 **Hỗ trợ giao diện:** Dark/Light mode mặc định theo hệ thống.
* 🔍 **Tìm kiếm thông minh:** Tích hợp bộ tìm kiếm nội dung nhanh chóng.
* 📱 **Responsive:** Hiển thị mượt mà trên cả máy tính và thiết bị di động.

---

## 🛠️ Công nghệ sử dụng

* **Framework:** [Astro](https://astro.build/)
* **Theme / Documentation Kit:** [Starlight](https://starlight.astro.build/)
* **Nội dung:** MDX & Markdown
* **Ngôn ngữ:** TypeScript / JavaScript, CSS
* **Hosting / Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Cài đặt & Chạy trên máy cục bộ (Local Development)

### Yêu cầu hệ thống
* **Node.js**: Phiên bản 18 trở lên
* **npm**, **pnpm**, hoặc **yarn**

---
## Cấu trúc thư mục cơ bản
```text
FOOTYPEDIA/
├── public/              # Tài nguyên tĩnh (ảnh, favicon, fonts)
├── src/
│   ├── assets/          # Hình ảnh xử lý qua Astro
│   └── content/
│       └── docs/        # Toàn bộ bài viết, nội dung MDX của Footypedia
├── astro.config.mjs     # File cấu hình Astro & Starlight
├── package.json
└── tsconfig.json
```
