import React from 'react';
import FlexLink from 'src/util/FlexLink';
import Menu from '../components/Menu';

import logo from '../../images/Home.images/logo.png';
import Style from '../../style/components/Header.module.css';

import '../../style/components/Menu.css';

const Header = () => {

  return (
    <header>
      {/* <div className={Style["items-container"]}> */}
        <FlexLink href={`/`}>
          <img className={Style.logo} src={logo} alt="畳アイコン" />
        </FlexLink>
        {/* <div className={Style.contents}> */}
          <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
            <button className={Style["join-btn"]}>参加はこちらから！</button>
          </FlexLink>
        {/* </div> */}
      {/* </div> */}
      <Menu right />
    </header>
  );
}
export default Header;