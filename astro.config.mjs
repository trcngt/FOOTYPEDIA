import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Footypedia',
			description: 'Bách khoa toàn thư bóng đá dành cho người mới bắt đầu',
			sidebar: [
				{
					label: 'Danh Mục Tra Cứu',
					items: [{ autogenerate: { directory: '' } }],
				},
			],
		}),
	],
});