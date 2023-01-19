import { stack as Burger } from 'react-burger-menu';

export default props =>{
  return (
    <Burger{...props}>
      <a href="/">Home</a>
      <a href="/join/">サーバー参加方法</a>
      <a href="/event/">イベント一覧</a>
      <a href="/map/">配布マップ</a>
      <a href="/life/">生活サーバー</a>
      <a href="/history/">歴史</a>
      <a href="/please/">運営からのお願い</a>
      <a href="/sbuscription/">サブスクライブ・ご寄付</a>
      <a href="/sns/">公式SNS等</a>
      <a href="/contact/">お問い合わせ・意見箱</a>
      <a href="/helpre/">運営への応募</a>
    </Burger>
  );
};