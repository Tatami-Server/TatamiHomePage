import React from 'react';

import logo from '../imges/App.imges/logo.png';

const Header = () => {
  return (
    <header>
      <div className="headerLogo">
      <img className="logo" src={logo} alt="畳アイコン" />
      </div>
      <div className='joinBtn'>

      </div>
      <div className='headerNav'>

      </div>
    </header>
  );
}
export default Header;