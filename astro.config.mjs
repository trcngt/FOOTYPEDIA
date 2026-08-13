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
					items: [{ autogenerate: { directory: 'luatchoi' } }],
				},
				{
					label: '2. Vị Trí Cầu Thủ',
					items: [{ autogenerate: { directory: 'vitri' } }],
				},
				{
					label: '3. Sơ Đồ & Chiến Thuật',
					items: [{ autogenerate: { directory: 'chienthuat' } }],
				},
				{
					label: '4. Style & Kỹ Năng',
					items: [{ autogenerate: { directory: 'phongcach' } }],
				},
				{
					label: '5. Hồ Sơ Cầu Thủ',
					items: [{ autogenerate: { directory: 'cauthu' } }],
				},
				{
					label: '6. Các Giải Đấu',
					items: [{ autogenerate: { directory: 'giaidau' } }],
				},
				{
					label: '7. Chuyển Nhượng & Tài Chính',
					items: [{ autogenerate: { directory: 'chuyennhuong' } }],
				},
				{
					label: '8. Lịch Sử & Cột Mốc',
					items: [{ autogenerate: { directory: 'lichsu' } }],
				},
				{
					label: '9. HLV & Trường Phái',
					items: [{ autogenerate: { directory: 'hlv' } }],
				},
				{
					label: '10. Văn Hóa & Derby',
					items: [{ autogenerate: { directory: 'vanhoa' } }],
				},
			],
		}),
	],
});