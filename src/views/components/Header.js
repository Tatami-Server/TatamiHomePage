import React from 'react';
import FlexLink from 'src/util/FlexLink';

import logo from '../../images/Home.images/logo.png';
import Style from '../../style/components/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={Style["items-container"]}>
        <FlexLink href={`/`}>
          <img className={Style.logo} src={logo} alt="畳アイコン" />
        </FlexLink>
        <div className={Style.contents}>
          <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
            <button className={Style["join-btn"]}>参加はこちらから！</button>
          </FlexLink>
          <div className={Style.hamburger}>
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