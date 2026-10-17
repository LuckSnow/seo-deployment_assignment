# Nest — SEO & Deployment

- Sinh viên: Tạ Thanh Tâm
- MSSV: N25DCAT103
- Nhánh nộp bài: `lam-bai`
- Frontend: https://nest-n25dcat103.vercel.app
- Backend: https://nest-api-n25dcat103.onrender.com
- Pull request: https://github.com/LuckSnow/seo-deployment_assignment/pull/5

## Cấu hình

Vercel dùng Next.js, Root Directory `frontend`, Production Branch `lam-bai`.
Hai biến môi trường cho Production:

```dotenv
API_BASE_URL=https://nest-api-n25dcat103.onrender.com
SITE_URL=https://nest-n25dcat103.vercel.app
```

Render dùng Node.js, Root Directory `backend`, nhánh `lam-bai`, Build Command
`npm ci`, Start Command `npm start`, Health Check Path `/api/health`, gói Free.
Service lắng nghe cổng `PORT` do Render cấp; không cần database.

## Kiểm tra

- `/api/health` trên backend trả HTTP 200 và `{"status":"ok"}`.
- `/api/products` trên backend trả HTTP 200, `total: 6` và sáu sản phẩm.
- Frontend lấy sản phẩm từ backend và render nội dung trên server.
- Canonical, Open Graph, Twitter Card, robots và sitemap dùng `SITE_URL`.
- Ảnh chia sẻ PNG: `/images/nest-share.png` (1200 × 630).
- Build local: đặt `SITE_URL` HTTPS rồi chạy `npm ci` và `npm run build` trong `frontend`.

Render Free có thể ngủ khi không có truy cập. Frontend chờ API tối đa 55 giây;
nếu API chưa sẵn sàng, mở `/api/health`, đợi `ok` rồi tải lại trang.
Giữ PR mở và hai deployment hoạt động đến khi có điểm.
