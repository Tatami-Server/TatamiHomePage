import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';
import LargeCategory from '../components/LargeCategory';

import twitchImg from '../../images/Subscription.images/twitchImg.png';
import sub1 from '../../images/Subscription.images/sub1-1.png';
import sub2 from '../../images/Subscription.images/sub1-2.png';
import sub3 from '../../images/Subscription.images/sub1-3.png';
import sub4 from '../../images/Subscription.images/sub1-4.png';
import sub5 from '../../images/Subscription.images/sub1-5.png';
import sub6 from '../../images/Subscription.images/sub1-6.png';
import sub7 from '../../images/Subscription.images/sub1-7.png';
import doneruLogo from '../../images/Subscription.images/doneru-logo.png';

import Style from '../../style/pages/Subscription.module.css';

const Subscription = () => {
  const LargeCategoryContent=[
    {title:"限定企画に参加できる！", img:sub1, description:"村人防衛戦・スコットランドヤード・人数制限のある配布マップ等の限定企画に参加できます！"},
    {title:"通常イベントも優先参加可能！", img:sub2, description:"人狼のような参加人数制限があるイベントについても、より優先的にゲームに参加できます。"},
    {title:"Twitchで広告がつかない！", img:sub3, description:"Twitchの生配信を広告なしで視聴できるようになります。快適です!"},
    {title:"チャネルポイント「Takika」が貯まりやすい！", img:sub4, description:<>Twitchの視聴や継続ログインで得られるチャンネルポイント「Takika」が貯まりやすくなります!<br/>貯めたポイントは、ゲームリクエストや企画提案、歌枠での曲のリクエスト等に使うことができます。</>},
    {title:"専用スタンプが使用可能に！", img:sub5, description:"Twitch及びDiscordでオリジナルスタンプが利用可能になります!配信や会話を盛り上げよう！"},
    {title:"お名前の横にサブスクライバーバッジが付く", img:sub6, description:<>サブスクライバーの証となるバッジが付与され、他の方と違った雰囲気を出すことが可能です。<br/>しかもこのバッジは、サブスク年月によって成長していきます。</>},
    {title:"付近vcMODが使用できる（Java版限定）", img:sub7, description:<>サブスクライバー限定で、付近vcMODでの通話ができるようになりました!<br/>味方との連携をする際や敵の位置を察知する際など、楽しさの幅がぐっと広がります！</>},
  ];
  const SpecialThenksList=["Yukina様", "S2ns_mash様", "まりゅ🐴様", "虚空教信者様"] 
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="サブスクライブ・ご寄付について"/>
        <Subtitle subtitle="サブスクライバーとは？"/>
        <div className='subtitle-content'>
          <img className='subtitle-img' src={twitchImg} alt="twitchの画像"></img>
        </div>
        <Subtitle subtitle="サブスクライブのメリット！"/>
        <div className='subtitle-content'>
          <div className={Style["LargeCategory-wrapper"]}>
            {LargeCategoryContent.map(( {title, img, description }) => {
              return (
                <div className={Style["LargeCategory-container"]}>
                  <LargeCategory LargeCategory={title}/>
                  <div className={Style["LargeCategory-content"]}>
                    <img src={img} alt="サブスクライブイメージ画像"></img>
                    <p>{description}</p>
                  </div>
                </div>
                );
              })}
          </div>
        </div>
        <Subtitle subtitle="ご寄付"/>
        <div className='subtitle-content'>
          <img src={doneruLogo} alt="doneruのロゴ"></img>
          <p>
            平素より、畳サーバー並びに鯖主:おとたきの活動に関心をお寄せくださり、
            誠にありがとうございます。<br/>
            この度、サーバー維持の資金として、ご寄付を募ることに致しました。
          </p>
          <ul>
            <li>[使用実績/使用予定]</li>
            <li>Minecraft有料サーバーのレンタル</li>
            <li>配信機材　静音キーボード　オーディオインターフェース等の購入</li>
            <li>新規ゲームやシステムの開発</li>
          </ul>
          <p>
            PayPalまたはクレジットカードでのご寄付が可能です。<br/>
            ご寄付くださった方は、Special Thanksにて氏名(またはニックネーム)を掲載させていただきます。
          </p>
          <p className={Style["special-thenks"]}>Special Thenks</p>
          <table>
          {SpecialThenksList.map((name) => {
            return (
              <tr>
                <td>{name}</td>
              </tr>
              );
            })}
          </table>
        </div>
        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Subscription;