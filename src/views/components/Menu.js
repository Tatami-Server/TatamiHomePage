import { stack as Burger } from 'react-burger-menu';

import { Link } from "react-router-dom";

export default props =>{

  return (
    <Burger{...props}>
      <Link to="/">Home</Link>
      <Link to="/join/">サーバー参加方法</Link>
      <Link to="/event/">イベント一覧</Link>
      <Link to="/map/">配布マップ</Link>
      <Link to="/life/">生活サーバー</Link>
      <Link to="/history/">畳サーバーの歴史</Link>
      <Link to="/please/">運営からのお願い</Link>
      <Link to="/sbuscription/">サブスクライブ・ご寄付</Link>
      <Link to="/sns/">公式SNS等</Link>
      <Link to="/contact/">お問い合わせ・意見箱</Link>
      <Link to="/helpre/">運営への応募</Link>
    </Burger>
  );
};