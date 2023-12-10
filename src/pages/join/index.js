// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import UpArrow from '@components/UpArrow';
import JoinBtn from '@components/JoinBtn';
import Igusa from '@components/Igusa';
import Link from 'next/link';
import Image from "next/image";

// 画像インポート
import joinDiscord from '/public/images/Join.images/join1.png';
import joinTwichSub from '/public/images/Join.images/join2.png';
import tatami from '/public/images/Igusa.images/sister1.png';

const Join = () => {
  return (
    <div>
        <Heading heading="サーバー接続方法"/>
        <Subtitle subtitle="畳サーバー公式Discord"/>
        <div className='subtitle-content'>
          <p>
            畳サーバーで遊ぶにはDiscordサーバーへの参加が必須になります。<br/>
            Discordサーバーに参加したら、まず最初に<Link href={"/rules/"}>利用規約</Link>をご確認ください！
          </p>
          <JoinBtn size="large"/>
        </div>
        <Subtitle subtitle="Discordにはいったら..."/>
        <div className='subtitle-content'>
          <Image className='subtitle-img' src={joinDiscord} alt="利用規約とはじめにをよく見てね"></Image>
          <p>
            Discordに加入しましたら<span className='green'> #ルール </span>より利用規約を確認し、テキストの最後にある同意ボタンを押して規約に同意してください。
            <br />
            同意後は自動的に<span className='green'> Tatamiロール </span>が付与されサーバーへの接続方法や鯖民交流に必要なチャンネルが表示されるようになります。
          </p>
        </div>
        <Subtitle subtitle="限定企画に参加したい！"/>
        <div className='subtitle-content'>
          <Image className='subtitle-img' src={joinTwichSub} alt="サブスクライバーとは？"></Image>
          <p>
            当サーバーにはサブスクライブ制度が存在します。<br/>
            なお当サーバーのサブスクライバーとは、鯖主:
            <Link href={"https://www.twitch.tv/Ototaki0622/"}>
            おとたきのTwitchチャンネル
            </Link>
            のサブスクライブをしている人を指します。
            サブスクライブをすると自動的に
            <span className='green'>サブスクライバーロール</span> 
            が付与されます。<br/>
            <span className='green'>サブスクライバーロール</span>
            が付与されますと、限定企画の募集やイベントの優先参加枠を獲得することができます。<br/>
            ほかにもメリットはたくさんあります。詳しくは
            <Link href={`/subscription/`}>
            こちら
            </Link>
            からご確認ください。
          </p>
        </div>
        <UpArrow/>
      <Igusa text="サーバーや企画への参加の仕方をまとめてみました。
        分からないことがあったらDiscordやお問い合わせで聞くといいわ。
        サーバーで待ってるからね。"
        image={tatami}
        creator="ナミヤ 和 様"
      />
    </div>
  );
}
export default Join;