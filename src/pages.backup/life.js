// コンポーネントインポート
import Header from '@components/Header';
import Footer from '@components/Footer';
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import SubProducts from '@components/SubProducts';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';


// 画像インポート
import life1 from '@images/Life.images/life1.png'
import life2 from '@images/Life.images/life2.png'
import lifeJob from '@images/Life.images/life-job.png'
import lifeEvent from '@images/Life.images/life-event.png'
import lifeCommond from '@images/Life.images/life-commond.png'
import lifeGacha from '@images/Life.images/life-gacha.png'
import lifeMap from '@images/Life.images/life-map.png'
import lifeShop from '@images/Life.images/life-shop.png'
import tatami from '@images/Igusa.images/sister1.png';

// cssインポート
import Style from '@style/pages/Life.module.css';
import Image from "next/image";

const Life = () => {

  const funPointList=[
    { href: `https://seesaawiki.jp/tatamiserver/d/%bf%a6%b6%c8%b5%a1%c7%bd`, imgTitle: "職業", img: lifeJob, title: "職業機能", description: <>昨年やっていた職業システムが、報酬額調整の上復活！<br/>採掘や建築、冒険など多彩な職業の中から選んで楽しみながら稼ごう！</>},
    { href: `https://seesaawiki.jp/tatamiserver/d/%a5%ac%a5%c1%a5%e3%b5%a1%c7%bd`, imgTitle: "ガチャ", img: lifeGacha, title: "ガチャ機能", description: <>貯めたお金の使い道、ガチャはいかがですか？レアなブロックやガチャでしか手に入らないアイテムを手に入れよう！<br/>URを引き当ててSNSで自慢するのもあり!</>},
    { href: `https://seesaawiki.jp/tatamiserver/d/%a5%b3%a5%de%a5%f3%a5%c9%b0%ec%cd%f7`, imgTitle: "コマンド", img: lifeCommond, title: "コマンド一覧", description: <>生活サーバーで使えるお金や職業に関するコマンドはもちろんのこと、座ったり、寝そべったり、頭にアイテムをかぶったり等のちょっとした楽しいコマンドもまとめています。</> },
    { href: `https://map.tatamiserver.com/`, imgTitle: "webマップ", img: lifeMap, title: "Webマップ", description: <>Web上で生活サーバーのマップが確認できる！？<br/>町の発展状況やオンライン状況を確認しよう。</>},
    { href: `https://seesaawiki.jp/tatamiserver/d/%a5%b7%a5%e7%a5%c3%a5%d7%ba%ee%c0%ae%ca%fd%cb%a1`, imgTitle: "お店", img: lifeShop, title: "自動ショップ", description: <>誰でも簡単に無人のお店を作れちゃう!<br/>オフラインでも稼げるし、買うほうも楽々!</>},
    { href: `https://twitter.com/tatami_mc`, imgTitle: "イベント", img: lifeEvent, title: "季節イベント", description: <>夏祭りやハロウィンなどの季節系イベントもご用意！<br/>最新情報はここをクリックしてTwitterで確認だ!</>},
  ];

  return (
    <div>
      <Header/>
      <main>
        <Heading heading="畳生活サーバー"/>
        <Subtitle subtitle="生活サーバーで遊ぼう！"/>
          <div className='subtitle-content'>
            <div className={Style["life-img-container"]}>
              <Image className='subtitle-img'  src={life1} alt="生活鯖写真" />
              <Image className='subtitle-img'  src={life2} alt="生活鯖写真" />
            </div>
            <p>
              当鯖はイベントのイメージが強いかもしれませんが、24時間対応の生活サーバーも運営しております。<br/>
              やりこみ要素として職業機能やガチャ機能を用意しております。<br/>
              以下では生活サーバーを楽しむポイントを紹介します。<br/>
              ガチャの中身が新しくなりました！
            </p>
          </div>
        <Subtitle subtitle="生活サーバーを楽しむポイント"/>
          <div className='subtitle-content'>
            <div className="Products">
              <SubProducts products={funPointList}/>
            </div>
          </div>
        <UpArrow/>
      </main>
      <Igusa text="今年7月末に復活した生活サーバーに関する情報を掲載しているわ。
        ガチャや職業等のやりこみ要素を楽しもう！"
        image={tatami}
        creator="ナミヤ 和 様"
      />
      <Footer/>
    </div>
  );
}
export default Life;
