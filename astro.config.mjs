import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Footypedia',
			description: 'Bách khoa toàn thư bóng đá bài bản',
			customCss: ['./src/styles/custom.css'], // <-- Khai báo file CSS ở đây
			sidebar: [
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
					label: '3. Sơ Đồ',
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
					label: '6. Hồ Sơ Cầu Thủ',
					collapsed: true,
					items: [{ autogenerate: { directory: 'cauthu' } }],
				},
				{
					label: '7. Các Giải Đấu',
					collapsed: true,
					items: [{ autogenerate: { directory: 'giaidau' } }],
				},
				{
					label: '8. Chuyển Nhượng & Tài Chính',
					collapsed: true,
					items: [{ autogenerate: { directory: 'chuyennhuong' } }],
				},
				{
					label: '9. Lịch Sử & Cột Mốc',
					collapsed: true,
					items: [{ autogenerate: { directory: 'lichsu' } }],
				},
				{
					label: '10. HLV & Trường Phái',
					collapsed: true,
					items: [{ autogenerate: { directory: 'hlv' } }],
				},
				{
					label: '11. Văn Hóa & Derby',
					collapsed: true,
					items: [{ autogenerate: { directory: 'vanhoa' } }],
				},
			],
		}),
	],
});