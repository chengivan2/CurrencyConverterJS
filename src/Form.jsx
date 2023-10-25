import React, { useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import './Form.css'

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
    baseCurrency: 'USD',
    targetCurrency: 'EUR',
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
    freecurrencyapi.latest({
        base_currency: baseCurrency,
        currencies: targetCurrency
      }).then(response => {
        // Handle the response here
        console.log(response.data[targetCurrency]);
    
        // You can store the response in a variable if needed
        //const conversionData = response;
    
        setResult(response.data[targetCurrency] * amount); // Set the result in state for display
      }).catch(error => {
        console.error('API request failed:', error);
      });
  };

  return (
    <div className="glass-form-container">
      <h1>Currency Conversion</h1>
      <form onSubmit={handleSubmit} className="glass-form">
        <div className='input-container'>
        <label>
          Amount: <br/>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </label>
    
        <label>
          Base Currency: <br/>
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
          Target Currency: <br/>
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
        </div>
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
