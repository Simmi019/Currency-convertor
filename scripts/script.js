const API_KEY = '8b4733ead7bee54740051e54';
const API_BASE_URL = 'https://v6.exchangerate-api.com/v6';

const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');
const swapBtn = document.getElementById('swap-btn');

let currencies = [];

async function fetchCurrencies() {
    const response = await fetch(`${API_BASE_URL}/${API_KEY}/codes`);
    const data = await response.json();
    currencies = data.supported_codes;
    currencies.forEach(([code, name]) => {
        const option = new Option(`${code} - ${name}`, code);
        fromCurrencySelect.add(option.cloneNode(true));
        toCurrencySelect.add(option);
    });
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';
}

async function convertCurrency() {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const response = await fetch(`${API_BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`);
    const data = await response.json();

    if (data.result === 'success') {
        const convertedAmount = data.conversion_result.toFixed(2);
        resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
}

function swapCurrencies() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
}

convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);

fetchCurrencies();
