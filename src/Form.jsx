import React, { useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const currencyOptions = [
  'EUR', 'USD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN',
  'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD',
  'BRL', 'CAD', 'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN',
  'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR'
];

const freecurrencyapi = new Freecurrencyapi('YOUR-API-KEY');

const ConversionForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    baseCurrency: 'EUR',
    targetCurrency: 'USD',
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { amount, baseCurrency, targetCurrency } = formData;

    // Perform the conversion (you can implement this logic or call an API here)
    const conversionResult = convertCurrency(parseFloat(amount), baseCurrency, targetCurrency);
    setResult(conversionResult);
  };

  const convertCurrency = (amount, baseCurrency, targetCurrency) => {
    // Implement your currency conversion logic here
    // For simplicity, let's assume a simple conversion rate of 1 base currency unit = 2 target currency units
    return amount * 2;
  };

  return (
    <div>
      <h1>Currency Conversion</h1>
      <form onSubmit={handleSubmit} className="glass-form">
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Base Currency:
          <select
            name="baseCurrency"
            value={formData.baseCurrency}
            onChange={handleInputChange}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label>
          Target Currency:
          <select
            name="targetCurrency"
            value={formData.targetCurrency}
            onChange={handleInputChange}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <br/>
        <button type="submit" className="convert-button">Convert</button>
      </form>
      {result !== null && (
        <div className="result-container">
          <h2>Conversion Result</h2>
          <p>{formData.amount} {formData.baseCurrency} is equal to {result} {formData.targetCurrency}</p>
        </div>
      )}
    </div>
  );
};

export default ConversionForm;
