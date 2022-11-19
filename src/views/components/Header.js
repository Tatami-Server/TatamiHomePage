import React from 'react';

import logo from '../../imges/App.imges/logo.png';
import '../../style/components/Header.css';

const Header = () => {
  return (
    <header>
      <div className="items_container">
        <img className="logo" src={logo} alt="畳アイコン" />
        <div className='contents'>
          <a href="https://discord.com/invite/t4YAKKxaq9">
            <button className='join_btn'>参加はこちらから！</button>
          </a>
          <div className='hamburger'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;