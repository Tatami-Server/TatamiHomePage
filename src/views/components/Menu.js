// リアクトバーガーメニューをインポート
import { stack as Burger } from 'react-burger-menu';

// コンポーネントインポート
import FlexLink from '../../util/FlexLink';

// cssインポート
import '../../style/components/Menu.css';

const Menu = (props) => {

  const links = [
    { href: "/", text: "Home" },
    { href: "/join/", text: "サーバー参加方法" },
    { href: "/event/", text: "イベント一覧" },
    { href: "/map/", text: "配布マップ" },
    { href: "/life/", text: "生活サーバー" },
    { href: "/history/", text: "畳サーバーの歴史" },
    { href: "/please/", text: "運営からのお願い" },
    { href: "/sbuscription/", text: "サブスクライブ・ご寄付" },
    { href: "/sns/", text: "公式SNS等" },
    { href: "/contact/", text: "お問い合わせ・意見箱" },
    { href: "/helpre/", text: "運営への応募" },
  ];

  return (
    <div className='burger-container'>
      <Burger {...props}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <FlexLink href={link.href}>{link.text}</FlexLink>
            </li>
          ))}
        </ul>
      </Burger>
    </div>
  );
};
export default Menu;