import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';

import FlexLink from "src/util/FlexLink";

// cssインポート
import '../../style/pages/Join.css';


// imgインポート
import joinDiscord from '../../imges/Join.images/join1.png';
import joinTwichSub from '../../imges/Join.images/join2.png';


const Join = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="サーバー接続方法"/>
          <div className='join-content'>
            <Subtitle subtitle="畳サーバー公式Discord"/>
            <p>
              畳サーバーで遊ぶにはDiscordサーバーへの参加が必須になります。<br/>
              Discordサーバーに参加したら、まず最初に利用規約をご確認ください！
            </p>
            <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
              <button className='join_btn'>参加はこちらから！</button>
            </FlexLink>
          </div>
          <div className='join-content'>
            <Subtitle subtitle="Discordにはいったら..."/>
            <img src={joinDiscord} alt="利用規約とはじめにをよく見てね"></img>
            <p>
              Discordに加入したら、管理が確認次第<span className='green'>Tatamiロール</span>が付与されます。<br/>
              （もし１日以上待っても<span className='green'>Tatamiロール</span>が付与されない場合は、大変お手数をおかけしますが
              <FlexLink href={"https://forms.gle/4v4KK23h1i6UTCae9"} className="contact-link">
              お問い合わせ・意見箱
              </FlexLink>
              、またはDiscordの<span className='bold'>＃チケット作成</span>チャンネルまでご連絡いただけますと幸いです）<br/>
              <span className='green'>Tatamiロール</span>が付与されますと、鯖民交流に必要なチャンネルが表示されるようになります。
            </p>
          </div>
          <div className='join-content'>
            <Subtitle subtitle="限定企画に参加したい！"/>
            <img src={joinTwichSub} alt="サブスクライバーとは？"></img>
            <p>
              当サーバーにはサブスクライブ制度が存在します。<br/>
              なお当サーバーのサブスクライバーとは、鯖主:
              <FlexLink href={"https://www.twitch.tv/Ototaki0622/"}>
              おとたきのTwitchチャンネル
              </FlexLink>
              のサブスクライブをしている人を指します。
              サブスクライブをすると自動的に<span className='green'>サブスクライバーロール</span> が付与されます。<br/>
              <span className='green'>サブスクライバーロール</span> が付与されますと、限定企画の募集やイベントの優先参加枠を獲得することができます。<br/>
              ほかにもメリットはたくさんあります。詳しくは
              <FlexLink href={`/sbuscription/`}>
              こちら
              </FlexLink>
              からご確認ください。
            </p>
          </div>
          <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Join;