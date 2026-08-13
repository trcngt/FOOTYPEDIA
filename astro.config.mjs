import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Footypedia',
			description: 'Bách khoa toàn thư bóng đá bài bản',
			sidebar: [
				{
					label: '1. Luật Bóng Đá',
					autogenerate: { directory: 'luatchoi' },
				},
				{
					label: '2. Vị Trí Cầu Thủ',
					autogenerate: { directory: 'vitri' },
				},
				{
					label: '3. Sơ Đồ & Chiến Thuật',
					autogenerate: { directory: 'chienthuat' },
				},
				{
					label: '4. Style & Kỹ Năng',
					autogenerate: { directory: 'phongcach' },
				},
				{
					label: '5. Hồ Sơ Cầu Thủ',
					autogenerate: { directory: 'cauthu' },
				},
				{
					label: '6. Các Giải Đấu',
					autogenerate: { directory: 'giaidau' },
				},
				{
					label: '7. Chuyển Nhượng & Tài Chính',
					autogenerate: { directory: 'chuyennhuong' },
				},
				{
					label: '8. Lịch Sử & Cột Mốc',
					autogenerate: { directory: 'lichsu' },
				},
				{
					label: '9. HLV & Trường Phái',
					autogenerate: { directory: 'hlv' },
				},
				{
					label: '10. Văn Hóa & Derby',
					autogenerate: { directory: 'vanhoa' },
				},
			],
		}),
	],
});