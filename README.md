# Saving Interest Calculator

A compact, aesthetically pleasing web application that mimics the Windows 7 Aero window with dark mode, helping you calculate savings interest based on the real-world formula used in Vietnam.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/saving-interest](https://www.sieu.io.vn/github/saving-interest)

## ✨ Features

- **Windows 7 Aero Style Interface** – Title bar, drop shadow, and close/minimize/maximize buttons for a nostalgic look
- **Modern Dark Mode** – A sleek, easy-on-the-eyes dark theme
- **Automatic Vietnamese Currency Formatting** – Thousands separator with dots (e.g., 1.000.000)
- **Beautiful Date Picker** – Powered by Flatpickr with Vietnamese language support
- **Flexible Calculation** – Enter any 4 fields, and the "Calculate" button for the remaining field will light up; click it to automatically compute the inverse
- **Real-World Formula** – Uses the standard Vietnamese savings interest formula: `Interest = Amount × Interest Rate × Days / 365`
- **Fully Offline Capable** – Works entirely offline (except Flatpickr loaded from CDN)

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Flatpickr (for the date picker)

## 📁 Project Structure

```
saving-interest/
├── index.html    # Main HTML file
├── style.css     # Stylesheet
├── script.js     # JavaScript calculation logic
└── README.md     # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/saving-interest.git
   ```
2. **Navigate to the project folder**   
   ```bash
   cd saving-interest
   ```
3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server (e.g., Live Server in VS Code)

## 📝 How It Works

1. **Enter the known values** – Fill in any 4 of the 5 available fields:
   - **Số tiền gửi** (Deposit Amount)
   - **Lãi suất** (Interest Rate, %/year)
   - **Ngày bắt đầu** (Start Date)
   - **Ngày nhận lãi** (Maturity Date)
   - **Lãi dự kiến** (Expected Interest)
2. **Click the "Tính" (Calculate) button** – The button next to the empty field will light up. Click it to calculate the missing value.
3. **View the result** – The calculated value appears in the corresponding field, automatically formatted as Vietnamese currency where applicable.

**Formula:**
> Interest = Deposit Amount × (Interest Rate / 100) × (Days Deposited) / 365

**Where:**
> Days Deposited = Maturity Date − Start Date (rounded up)

**Example:**

- Deposit Amount: 100.000.000 VND
- Interest Rate: 6.5%/year
- Start Date: 01/01/2026
- Maturity Date: 01/07/2026 (181 days)
- Expected Interest: 3.224.657 VND

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
