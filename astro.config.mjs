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
					label: '4. Style & Kỹ Năng Chuyên Môn',
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
			],
		}),
	],
});