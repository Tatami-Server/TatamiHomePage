// コンポーネントインポート
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';
import JoinBtn from '../components/JoinBtn';
import Igusa from '../components/Igusa';
import FlexLink from "../../util/FlexLink";

// imgインポート
import joinDiscord from '../../images/Join.images/join1.png';
import joinTwichSub from '../../images/Join.images/join2.png';

const Join = () => {
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="サーバー接続方法"/>
        <Subtitle subtitle="畳サーバー公式Discord"/>
        <div className='subtitle-content'>
          <p>
            畳サーバーで遊ぶにはDiscordサーバーへの参加が必須になります。<br/>
            Discordサーバーに参加したら、まず最初に利用規約をご確認ください！
          </p>
          <JoinBtn size="large"/>
        </div>
        <Subtitle subtitle="Discordにはいったら..."/>
        <div className='subtitle-content'>
          <img className='subtitle-img' src={joinDiscord} alt="利用規約とはじめにをよく見てね"></img>
          <p>
            Discordに加入したら、管理が確認次第
            <span className='green'>Tatamiロール</span>
            が付与されます。<br/>
            （もし１日以上待っても
            <span className='green'>Tatamiロール</span>
            が付与されない場合は、大変お手数をおかけしますが
            <FlexLink href={"https://forms.gle/4v4KK23h1i6UTCae9"} className="contact-link">
            お問い合わせ・意見箱
            </FlexLink>
            、またはDiscordの
            <span className='bold'>＃チケット作成</span>
            チャンネルまでご連絡いただけますと幸いです）<br/>
            <span className='green'>Tatamiロール</span>
            が付与されますと、鯖民交流に必要なチャンネルが表示されるようになります。
          </p>
        </div>
        <Subtitle subtitle="限定企画に参加したい！"/>
        <div className='subtitle-content'>
          <img className='subtitle-img' src={joinTwichSub} alt="サブスクライバーとは？"></img>
          <p>
            当サーバーにはサブスクライブ制度が存在します。<br/>
            なお当サーバーのサブスクライバーとは、鯖主:
            <FlexLink href={"https://www.twitch.tv/Ototaki0622/"}>
            おとたきのTwitchチャンネル
            </FlexLink>
            のサブスクライブをしている人を指します。
            サブスクライブをすると自動的に
            <span className='green'>サブスクライバーロール</span> 
            が付与されます。<br/>
            <span className='green'>サブスクライバーロール</span>
            が付与されますと、限定企画の募集やイベントの優先参加枠を獲得することができます。<br/>
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
      <Igusa text="サーバーや企画への参加の仕方をまとめてみました。
        分からないことがあったらDiscordやお問い合わせで聞くといいわ。
        サーバーで待ってるからね。"
      />
    </div>
  );
}
export default Join;