import { stack as Burger } from 'react-burger-menu';

// import { FlexLink } from "react-router-dom";
import FlexLink from '../../util/FlexLink';

export default props =>{

  return (
    <Burger{...props}>
      <FlexLink href="/">Home</FlexLink>
      <FlexLink href="/join/">サーバー参加方法</FlexLink>
      <FlexLink href="/event/">イベント一覧</FlexLink>
      <FlexLink href="/map/">配布マップ</FlexLink>
      <FlexLink href="/life/">生活サーバー</FlexLink>
      <FlexLink href="/hishrefry/">畳サーバーの歴史</FlexLink>
      <FlexLink href="/please/">運営からのお願い</FlexLink>
      <FlexLink href="/sbuscription/">サブスクライブ・ご寄付</FlexLink>
      <FlexLink href="/sns/">公式SNS等</FlexLink>
      <FlexLink href="/contact/">お問い合わせ・意見箱</FlexLink>
      <FlexLink href="/helpre/">運営への応募</FlexLink>
    </Burger>
  );
};