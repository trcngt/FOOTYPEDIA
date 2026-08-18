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

			customCss: ['./src/styles/custom.css'],
			credits: false,
			sidebar: [
				{
					label: 'TRANG CHỦ',
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
					label: '4. Chiến Thuật',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chienthuat' } }],
				},
				{
					label: '5. Style & Kỹ Năng',
					collapsed: true,
					items: [{ autogenerate: { directory: 'phongcach' } }],
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
					label: '9. Văn Hóa & Derby',
					collapsed: true,
					items: [{ autogenerate: { directory: 'vanhoa' } }],
				},
			],
		}),
	],
});
