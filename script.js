// Khởi tạo Flatpickr cho 2 ô ngày
flatpickr("#start-date", {
    dateFormat: "d/m/Y",
    locale: "vn"
});

flatpickr("#end-date", {
    dateFormat: "d/m/Y",
    locale: "vn"
});

// Hàm hỗ trợ
function parseDate(dateStr) {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getDaysDifference(start, end) {
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

function formatNumber(num) {
    if (!num) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function parseNumber(numStr) {
    return parseFloat(numStr.replace(/\./g, '')) || 0;
}

// Elements
const principalInput = document.getElementById('principal');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const rateInput = document.getElementById('rate');
const interestInput = document.getElementById('interest');

const calcPrincipalBtn = document.getElementById('calc-principal');
const calcStartDateBtn = document.getElementById('calc-start-date');
const calcEndDateBtn = document.getElementById('calc-end-date');
const calcRateBtn = document.getElementById('calc-rate');
const calcInterestBtn = document.getElementById('calc-interest');

function checkFilled(excludeId) {
    const fields = [principalInput, startDateInput, endDateInput, rateInput, interestInput];
    return fields.filter(f => f.id !== excludeId && f.value.trim() !== '').length === 4;
}

function updateButtons() {
    calcPrincipalBtn.disabled = !checkFilled('principal');
    calcStartDateBtn.disabled = !checkFilled('start-date');
    calcEndDateBtn.disabled = !checkFilled('end-date');
    calcRateBtn.disabled = !checkFilled('rate');
    calcInterestBtn.disabled = !checkFilled('interest');
}

// Format số tiền khi nhập
[principalInput, interestInput].forEach(input => {
    input.addEventListener('input', () => {
        let raw = input.value.replace(/\./g, '');
        if (/^\d*$/.test(raw)) {
            input.value = formatNumber(raw);
        }
        updateButtons();
    });
});

// Các input còn lại chỉ cần update button
[startDateInput, endDateInput, rateInput].forEach(input => {
    input.addEventListener('input', updateButtons);
});

// Các hàm tính toán
function calculateInterest() {
    const p = parseNumber(principalInput.value);
    const s = parseDate(startDateInput.value);
    const e = parseDate(endDateInput.value);
    const r = parseFloat(rateInput.value.replace(',', '.')) / 100;
    if (p && s && e && r) {
        const days = getDaysDifference(s, e);
        const interest = Math.round(p * r * days / 365);
        interestInput.value = formatNumber(interest);
    }
}

function calculatePrincipal() {
    const i = parseNumber(interestInput.value);
    const s = parseDate(startDateInput.value);
    const e = parseDate(endDateInput.value);
    const r = parseFloat(rateInput.value.replace(',', '.')) / 100;
    if (i && s && e && r) {
        const days = getDaysDifference(s, e);
        const principal = Math.round(i / (r * days / 365));
        principalInput.value = formatNumber(principal);
    }
}

function calculateStartDate() {
    const p = parseNumber(principalInput.value);
    const e = parseDate(endDateInput.value);
    const r = parseFloat(rateInput.value.replace(',', '.')) / 100;
    const i = parseNumber(interestInput.value);
    if (p && e && r && i) {
        const days = Math.round(i * 365 / (p * r));
        const start = addDays(e, -days);
        const formatted = formatDate(start);
        startDateInput.value = formatted;
        flatpickr(startDateInput).setDate(start);
    }
}

function calculateEndDate() {
    const p = parseNumber(principalInput.value);
    const s = parseDate(startDateInput.value);
    const r = parseFloat(rateInput.value.replace(',', '.')) / 100;
    const i = parseNumber(interestInput.value);
    if (p && s && r && i) {
        const days = Math.round(i * 365 / (p * r));
        const end = addDays(s, days);
        const formatted = formatDate(end);
        endDateInput.value = formatted;
        flatpickr(endDateInput).setDate(end);
    }
}

function calculateRate() {
    const p = parseNumber(principalInput.value);
    const s = parseDate(startDateInput.value);
    const e = parseDate(endDateInput.value);
    const i = parseNumber(interestInput.value);
    if (p && s && e && i) {
        const days = getDaysDifference(s, e);
        const rate = (i * 365 / (p * days) * 100).toFixed(2);
        rateInput.value = rate;
    }
}

// Gắn sự kiện cho các nút
calcPrincipalBtn.addEventListener('click', calculatePrincipal);
calcStartDateBtn.addEventListener('click', calculateStartDate);
calcEndDateBtn.addEventListener('click', calculateEndDate);
calcRateBtn.addEventListener('click', calculateRate);
calcInterestBtn.addEventListener('click', calculateInterest);

// Khởi tạo trạng thái ban đầu
updateButtons();
