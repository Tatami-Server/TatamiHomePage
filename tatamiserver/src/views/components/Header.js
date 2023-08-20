// コンポーネントインポート
import Link from '../../util/Link';
import Menu from '../components/Menu';
import JoinBtn from '../components/JoinBtn';

// 画像インポート
import logo from '../../images/Home.images/logo.png';

// cssインポート
import Style from '../../style/components/Header.module.css';

import Image from "next/image";

const Header = () => {
  return (
    <header className={Style.header}>
        <Link href={`/`}>
          <Image className={Style.logo} src={logo} alt="畳アイコン" />
        </Link>
        <div className={Style.rightContent}>
          <JoinBtn size="small"/>
          <Menu right noOverlay/>
        </div>
    </header>
  );
}
export default Header;