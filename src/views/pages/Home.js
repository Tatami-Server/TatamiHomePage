// 画像をインポート
import logo from '../../imges/Home.images/logo.png';
import hero from '../../imges/Home.images/hero2.png';
import join from '../../imges/Home.images/join.png';
import event from '../../imges/Home.images/event.png';
import life from '../../imges/Home.images/life.jpg';
import donation from '../../imges/Home.images/donation.jpg';
import map from '../../imges/Home.images/map.png';
import omikuzi from '../../imges/Home.images/omikuzi.jpg';
import please from '../../imges/Home.images/please.jpg';
import application from '../../imges/Home.images/application.jpg';
import history from '../../imges/Home.images/history.jpg';
import sns from '../../imges/Home.images/sns.jpg';
import inquery from '../../imges/Home.images/inquery.jpg';

import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'

// コンポーネントをインポート
import MainProducts from '../components/MainProducts';
import SubProducts from '../components/SubProducts';
import News from '../components/News.js';
import Footer from '../components/Footer.js';
import SeparatorLine from '../components/SeparatorLine';
import UpArrow from '../components/UpArrow';

import '../../style/pages/Home.css';

function Home() {
  const SubProductsList = [
    { href: `/map/`, imgTitle: "マップ", img: map, title: "配布マップ", description: "当サーバーが提供している配布マップ等を紹介しています。" },
    { href: `/history/`, imgTitle: "歴史", img: history, title: "畳サーバーの歴史", description: "当サーバーの過去を知ることができます。過去にこんな事が...。" },
    { href: `/sns/`, imgTitle: "SNS", img: sns, title: "公式SNS", description: "Twitch・YouTube・Twitter等のURLを記載しています。" },
    { href: `/sbuscription/`, imgTitle: "ご寄付", img: donation, title: "サブスクライブ・ご寄付", description: "平素よりご支援いただきありがとうございます！" },
    { href: `/helpre/`, imgTitle: "応募", img: application, title: "運営への応募", description: "建築や開発など、私たちと共に制作しませんか？" },
    { href: `/contact/`, imgTitle: "問い合わせ", img: inquery, title: "お問い合わせ・意見箱", description: "意見や要望はこちらから！" },
    { href: `/please/`, imgTitle: "お願い", img: please, title: "運営からのお願い", description: "サーバーの維持や盛り上げのためにお願いしていることを記載しています。" },
    { href: "omikuji.html", imgTitle: "おみくじ", img: omikuzi, title: "畳おみくじ", description: "今日の運勢とクエストを占おう！ちょっとした遊び心で用意したコンテンツです。" }
  ];
  const MainProductsList = [
    { href: `/join/`, imgTitle: "参加方法", img: join, title: "サーバー参加方法", description: "Discordやマイクラサーバーへの参加方法を紹介しています。" },
    { href: `/life/`, imgTitle: "生活鯖", img: life, title: "生活サーバー", description: "半年ぶりに復活した新しい生活サーバーについて紹介しています。" },
    { href: `/event/`, imgTitle: "イベント", img: event, title: "イベント一覧", description: "当サーバーが提供しているイベント一覧とルールを紹介しています。" }
  ];

  return (
    <body>
      <div className="first_view_header">
        <div className="headerContainer">
          <div className="spuare"></div>
          <div className="triangle"></div>
          <div className="triangle line"></div>
          <img className="logo" src={logo} alt="畳アイコン" />
        </div>
      </div>
      <section className="hero">
        <img className="heroPhoto" src={hero} alt="ハロウィンの写真" />
        <div className="arrowIcon">
          <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
            <IoIosArrowDown/>
          </IconContext.Provider>
        </div>
      </section>

      <main>
        <section className="products">
          <MainProducts products={MainProductsList}/>
          <SeparatorLine/>
          <SubProducts products={SubProductsList}/>
        </section>
      <SeparatorLine/>
      <News/>
      <UpArrow/>
      </main>
      <Footer />

    </body>
  );
}

export default Home;