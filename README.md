# Bữa Cơm Nhà (EatAtHome)

Ứng dụng gợi ý món ăn gia đình Việt Nam thông minh, giúp bạn trả lời câu hỏi "Hôm nay ăn gì?" dựa trên nguyên liệu sẵn có trong tủ lạnh.

## Tính năng chính

- 🍱 **Mâm cơm gợi ý**: Tự động đề xuất mâm cơm cân bằng dinh dưỡng (Mặn + Rau + Canh).
- 🍜 **Có gì nấu nấy**: Nhập nguyên liệu bạn có, AI (Gemini) sẽ gợi ý món ăn phù hợp.
- 📅 **Lên lịch nấu ăn**: Lên kế hoạch cho Bữa Trưa và Bữa Tối hàng tuần.
- 🍌 **Tạo ảnh AI**: Tự động tạo ảnh minh họa món ăn chân thực bằng AI.
- 🛒 **Danh sách đi chợ**: Tự động tổng hợp nguyên liệu cần mua từ thực đơn đã lên lịch.

## Công nghệ sử dụng

- **Frontend**: React Native (Expo), Expo Router, AsyncStorage.
- **Backend**: Node.js, Express, Better-SQLite3.
- **AI**: Google Gemini 1.5/2.5 Flash thông qua Generative Language API.

## Hướng dẫn cài đặt

### 1. Server

```bash
cd server
npm install
cp .env.example .env # Cấu hình GEMINI_API_KEY của bạn
npm run seed     # Khởi tạo dữ liệu mẫu
npm run dev      # Chạy server ở cổng 3001
```

### 2. Mobile

```bash
cd mobile
npm install
npx expo start   # Quét mã QR bằng ứng dụng Expo Go
```

## Cấu trúc thư mục

- `/mobile`: Mã nguồn ứng dụng di động (React Native).
- `/server`: Mã nguồn Backend API và Quản lý dữ liệu.
- `database.sqlite`: CSDL SQLite chính.

---
Phát triển bởi Đội ngũ Bữa Cơm Nhà.
