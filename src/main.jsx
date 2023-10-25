import React from 'react'
import ReactDOM from 'react-dom/client'
import ConversionForm from './Form.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-container">
      <ConversionForm />
      <Footer />
    </div>
  </React.StrictMode>
)
