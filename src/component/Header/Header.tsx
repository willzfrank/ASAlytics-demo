import React from 'react';

import './Header.css';

const logo = require('../../assets/Logo.png');
const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <img src={logo} alt="logo" />
        <input type="button" value="ANALYSE ASAs" className="header--btn" />
      </div>
      <div>
        <h2>
          List of Algorand Standard Assets <br />
          on ASAlytics
        </h2>
      </div>
    </header>
  );
};

export default Header;
