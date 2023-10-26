import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="logo"><a href="#">CONVERTLY</a></div>
      <nav className={`nav ${menuVisible ? 'visible' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <ul>
          <li><a target= '_blank' href="https://ivanthedev.guru">Ivan</a></li>
          <li><a target= '_blank' href="https://everapi.com/">EverAPI</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

