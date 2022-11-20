import React from 'react';
import FlexLink from 'src/util/FlexLink';

import logo from '../../imges/Home.imges/logo.png';
import '../../style/components/Header.css';

const Header = () => {
  return (
    <header>
      <div className="items_container">
        <img className="logo" src={logo} alt="畳アイコン" />
        <div className='contents'>
          <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
            <button className='join_btn'>参加はこちらから！</button>
          </FlexLink>
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