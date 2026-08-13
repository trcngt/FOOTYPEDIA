import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Footypedia',
			description: 'Bách khoa toàn thư bóng đá dành cho người mới bắt đầu',
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
					label: 'Hướng Dẫn',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Tài Liệu Tham Khảo',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});