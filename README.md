# Công cụ tính lãi tiết kiệm - Giao diện Windows 7 Dark

Một ứng dụng web nhỏ gọn, đẹp mắt mô phỏng cửa sổ Windows 7 Aero với chế độ tối, giúp tính lãi tiết kiệm theo công thức thực tế tại Việt Nam.

## Tính năng nổi bật

- Giao diện giống Windows 7 (title bar, bóng đổ, nút đóng/thu nhỏ/phóng to)
- Chế độ tối hiện đại, dễ nhìn
- Tự động format tiền tệ Việt Nam (dấu chấm ngăn cách hàng nghìn)
- Chọn ngày bằng lịch đẹp (Flatpickr) hỗ trợ tiếng Việt
- Linh hoạt: Nhập đủ 4 ô → nút "Tính" ở ô còn lại sẽ sáng lên → bấm để tự động tính ngược
- Công thức: Lãi = Số tiền × Lãi suất × Số ngày / 365
- Hoạt động hoàn toàn offline (trừ Flatpickr từ CDN)

## Cấu trúc thư mục
lai-tiet-kiem/<br>
├── index.html<br>
├── style.css<br>
├── script.js<br>
└── README.md<br>

## Cách sử dụng

1. Tạo một thư mục mới
2. Tạo 3 file: `index.html`, `style.css`, `script.js`
3. Copy nội dung tương ứng từ bên trên vào từng file
4. Mở file `index.html` bằng trình duyệt (Chrome, Edge, Firefox...)

> Ứng dụng hoạt động tốt nhất khi có kết nối mạng lần đầu (để tải Flatpickr). Sau đó có thể dùng offline.

## Công thức tính
> Lãi dự kiến = Số tiền gửi × (Lãi suất / 100) × (Số ngày gửi) / 365

Trong đó:<br>
Số ngày gửi = Ngày nhận lãi - Ngày bắt đầu (làm tròn lên)
