import React from 'react';
import FlexLink from 'src/util/FlexLink';

import logo from '../../images/Home.images/logo.png';
import HeaderStyle from '../../style/components/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={HeaderStyle["items-container"]}>
        <img className={HeaderStyle.logo} src={logo} alt="畳アイコン" />
        <div className={HeaderStyle.contents}>
          <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
            <button className={HeaderStyle["join-btn"]}>参加はこちらから！</button>
          </FlexLink>
          <div className={HeaderStyle.hamburger}>
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