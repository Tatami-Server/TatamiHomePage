import React from 'react';
import FlexLink from '../../util/FlexLink';
import Menu from '../components/Menu';
import JoinBtn from '../components/JoinBtn';

import logo from '../../images/Home.images/logo.png';
import Style from '../../style/components/Header.module.css';


const Header = () => {

  return (
    <header className={Style.header}>
        <FlexLink href={`/`}>
          <img className={Style.logo} src={logo} alt="畳アイコン" />
        </FlexLink>
        <div className={Style.rightContent}>
          <JoinBtn/>
          <Menu right noOverlay/>
        </div>
    </header>
  );
}
export default Header;