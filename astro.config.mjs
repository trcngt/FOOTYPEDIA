import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://footypedia.vercel.app',
	integrations: [
		starlight({
			title: 'Footypedia',
			description: 'Bách khoa toàn thư bóng đá bài bản từ cơ bản đến nâng cao.',
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/trcngt/FOOTYPEDIA',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/trcngt/FOOTYPEDIA/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			credits: false,
			sidebar: [
				{
					label: 'Trang Chủ',
					link: '/',
				},
				{
					label: '1. Luật Bóng Đá',
					collapsed: true,
					items: [{ autogenerate: { directory: 'luatchoi' } }],
				},
				{
					label: '2. Vị Trí Cầu Thủ',
					collapsed: true,
					items: [{ autogenerate: { directory: 'vitri' } }],
				},
				{
					label: '3. Sơ Đồ & Chiến Thuật',
					collapsed: true,
					items: [{ autogenerate: { directory: 'sodo' } }],
				},
				{
					label: '4. Style & Kỹ Năng',
					collapsed: true,
					items: [{ autogenerate: { directory: 'phongcach' } }],
				},
				{
					label: '5. Hồ Sơ Cầu Thủ',
					collapsed: true,
					items: [{ autogenerate: { directory: 'cauthu' } }],
				},
				{
					label: '6. Các Giải Đấu',
					collapsed: true,
					items: [{ autogenerate: { directory: 'giaidau' } }],
				},
				{
					label: '7. Chuyển Nhượng & Tài Chính',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chuyennhuong' } }],
				},
				{
					label: '8. Lịch Sử & Cột Mốc',
					collapsed: true,
					items: [{ autogenerate: { directory: 'lichsu' } }],
				},
				{
					label: '9. HLV & Trường Phái',
					collapsed: true,
					items: [{ autogenerate: { directory: 'hlv' } }],
				},
				{
					label: '10. Văn Hóa & Derby',
					collapsed: true,
					items: [{ autogenerate: { directory: 'vanhoa' } }],
				},
			],
		}),
	],
});

/* Ẩn hoàn toàn các nhóm sidebar đang đóng khi người dùng đang ở trong 1 chuyên mục cụ thể */
.sidebar-content > ul > li > details:not([open]) {
  display: none !important;
}

/* Tùy chỉnh để nút Trang Chủ vẫn luôn hiển thị trên cùng */
.sidebar-content > ul > li:has(a[href="/"]) {
  display: block !important;
}