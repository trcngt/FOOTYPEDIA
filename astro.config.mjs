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
					items: [{ autogenerate: { directory: '01-luat-choi' } }],
				},
				{
					label: '2. Vị Trí Cầu Thủ',
					items: [{ autogenerate: { directory: '02-vi-tri' } }],
				},
				{
					label: '3. Sơ Đồ & Chiến Thuật',
					items: [{ autogenerate: { directory: '03-chien-thuat' } }],
				},
				{
					label: '4. Cầu Thủ & Style',
					items: [{ autogenerate: { directory: '04-cau-thu' } }],
				},
				{
					label: '5. Các Giải Đấu',
					items: [{ autogenerate: { directory: '05-giai-dau' } }],
				},
				{
					label: '6. Thống Kê & Chỉ Số',
					items: [{ autogenerate: { directory: '06-thong-ke' } }],
				},
				{
					label: '7. Chuyển Nhượng & Tài Chính',
					items: [{ autogenerate: { directory: '07-chuyen-nhuong' } }],
				},
				{
					label: '8. Lịch Sử & Cột Mốc',
					items: [{ autogenerate: { directory: '08-lich-su' } }],
				},
				{
					label: '9. HLV & Trường Phái',
					items: [{ autogenerate: { directory: '09-hlv-truong-phai' } }],
				},
				{
					label: '10. Văn Hóa & Derby',
					items: [{ autogenerate: { directory: '10-van-hoa' } }],
				},
			],
		}),
	],
});