import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src="./ivan-cropped.png" alt="Footer Image" className="footer-image" />
        <ul className="footer-list">
          <li><a target='_blank' href="https://ivanthedev.guru">Ivan the Dev</a></li>
          <li><a target='_blank' href="">EverAPI</a></li>
        </ul>
        <p>&copy; Ivan the Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
