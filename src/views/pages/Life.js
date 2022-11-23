import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import SubProducts from '../components/SubProducts';
import UpArrow from '../components/UpArrow';

// cssインポート
import LifeStyle from '../../style/pages/Life.module.css';

// imgインポート
import life1 from '../../imges/Life.images/life1.png'
import life2 from '../../imges/Life.images/life2.png'
import lifeJob from '../../imges/Life.images/life-job.png'
import lifeEvent from '../../imges/Life.images/life-event.png'
import lifeCommond from '../../imges/Life.images/life-commond.png'
import lifeGacha from '../../imges/Life.images/life-gacha.png'
import lifeMap from '../../imges/Life.images/life-map.png'
import lifeShop from '../../imges/Life.images/life-shop.png'


const Life = () => {
  const funPointList=[
    { href: `/map/`, imgTitle: "職業", img: lifeJob, title: "職業機能", description: <>昨年やっていた職業システムが、報酬額調整の上復活！<br/>採掘や建築、冒険など多彩な職業の中から選んで楽しみながら稼ごう！</>},
    { href: `/map/`, imgTitle: "ガチャ", img: lifeGacha, title: "ガチャ機能", description: <>貯めたお金の使い道、ガチャはいかがですか？<br/>レアなブロックやガチャでしか手に入らないアイテムを手に入れよう！<br/>URを引き当ててSNSで自慢するのもありですね!</>},
    { href: `/map/`, imgTitle: "コマンド", img: lifeCommond, title: "コマンド一覧", description: <>生活サーバーで使えるお金や職業に関するコマンドはもちろんのこと、座ったり、寝そべったり、頭にアイテムをかぶったり等のちょっとした楽しいコマンドもまとめています。</> },
    { href: `/map/`, imgTitle: "webマップ", img: lifeMap, title: "Webマップ", description: <>Web上で生活サーバーのマップが確認できる！？<br/>町の発展状況やオンライン状況を確認しよう。</>},
    { href: `/map/`, imgTitle: "お店", img: lifeShop, title: "自動ショップ", description: <>誰でも簡単に無人のお店を作れちゃう!<br/>オフラインでも稼げるし、買うほうも楽々!</>},
    { href: `/map/`, imgTitle: "イベント", img: lifeEvent, title: "季節イベント", description: <>夏祭りやハロウィンなどの季節系イベントもご用意！<br/>最新情報はここをクリックしてTwitterで確認だ!</>},
  ];
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="畳生活サーバー"/>
          <div className={LifeStyle["life-content"]}>
            <Subtitle subtitle="生活サーバーで遊ぼう！"/>
            <div className={LifeStyle["life-img-container"]}>
              <img src={life1} alt="生活鯖写真"></img>
              <img src={life2} alt="生活鯖写真"></img>
            </div>
            <p>
              当鯖はイベントのイメージが強いかもしれませんが、24時間対応の生活サーバーも運営しております。<br/>
              やりこみ要素として職業機能やガチャ機能を用意しております。<br/>
              以下では生活サーバーを楽しむポイントを紹介します。<br/>
              ガチャの中身が新しくなりました！
            </p>
          </div>
          <div className={LifeStyle["life-content"]}>
            <Subtitle subtitle="生活サーバーを楽しむポイント"/>
            <div className="Products">
              <SubProducts products={funPointList}/>
            </div>
          </div>
          <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Life;
