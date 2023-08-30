// リアクトアイコンインポート
import { ImTwitter } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import { SiTwitch } from 'react-icons/si'
import { SiDiscord } from 'react-icons/si'
import {FaWikipediaW} from 'react-icons/fa';
import { IconContext } from 'react-icons'

// コンポーネントインポート
import Heading from '@components/Heading';
import Igusa from '@components/Igusa';

// 画像インポート
import tatami from '/public/images/Igusa.images/sister1.png';

// cssインポート
import Style from '@style/pages/SNS.module.css';

const SNS = () => {

  const SnsContentList1 =[
    {icon:AiFillYoutube, color: '#B13E3E',title:"畳YouTube", discription:"メインの動画も切り抜き名場面もこのチャンネルで投稿しています。"},
    {icon:SiDiscord, color:'#4E649C', title:"畳Discord", discription:"畳サーバーで遊ぶ際に参加が必要となるサーバーです。リンク先の利用規約をご確認の上、お楽しみください！"},
    {icon:ImTwitter, color:'#52A7AC', title:"畳Twitter", discription:"イベント情報や最新情報をお伝えしています。"},
    {icon:ImTwitter, color:'#52A7AC', title:"おとたきTwitter（鯖主）", discription:"配信通知を流したり、今夜の配信内容をフォロワーに決めてもらったりすることがあります。もちろんつぶやきも！"},
    {icon:SiTwitch, color:'#6660A7', title:"おとたきTwitch（鯖主）", discription:"基本火・木・日夜の定期配信をしています。Mincraft中心ですが、最近は歌枠やSwitch配信も始めました。"},
    {icon:FaWikipediaW, color:'#617A4E', title:"畳公式Wiki", discription:"当ホームページにも書いているようなイベント一覧や各種SNS等が載っています。また、イベントの詳細ルールも搭載されています。"},
  ]

  return (
    <div>
        <Heading heading="公式SNS等"/>
        <div className={Style["sns-wrapper"]}>
          {SnsContentList1.map((item) => {
            return(
              <div className={Style["sns-content"]}>
                <div className={Style.icon}>
                  <IconContext.Provider value={{ color: item.color, size: '60px' }}>
                    <item.icon />
                  </IconContext.Provider>
                </div>
                <h3 className={Style["sns-title"]}>{item.title}</h3>
                <p className={Style["sns-discription"]}>{item.discription}</p>
              </div>
            );
          })}
        </div>
      <Igusa text="ここでは畳サーバーの関連SNSや関連サイトを掲載しているわ。
        たさん種類があるけど、それぞれよろしくね。"
        image={tatami}
        creator="ナミヤ 和 様"
      />
    </div>
  );
}
export default SNS;