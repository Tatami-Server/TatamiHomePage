// 画像をインポート
import logo from '../../images/Home.images/logo.png';
import hero from '../../images/Home.images/hero2.png';
import donation from '../../images/Home.images/donation.jpg';
import map from '../../images/Home.images/map.png';
import omikuzi from '../../images/Home.images/omikuzi.jpg';
import please from '../../images/Home.images/please.jpg';
import application from '../../images/Home.images/application.jpg';
import history from '../../images/Home.images/history.jpg';
import sns from '../../images/Home.images/sns.jpg';
import inquery from '../../images/Home.images/inquery.jpg';
import event from '../../images/Home.images/event.png';
import life from '../../images/Home.images/life.png';
import join from '../../images/Home.images/join.png';


import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'

// コンポーネントをインポート
import MainProducts from '../components/MainProducts';
import SubProducts from '../components/SubProducts';
import News from '../components/News.js';
import Footer from '../components/Footer.js';
import SeparatorLine from '../components/SeparatorLine';
import UpArrow from '../components/UpArrow';

import HomeStyle from '../../style/pages/Home.module.css';

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
    { href: `/join/`,  img: join, title: "サーバー参加方法", description: "Discordやマイクラサーバーへの参加方法を紹介しています。" },
    { href: `/life/`,  img: life, title: "生活サーバー", description: "半年ぶりに復活した新しい生活サーバーについて紹介しています。" },
    { href: `/event/`,  img: event, title: "イベント一覧", description: "当サーバーが提供しているイベント一覧とルールを紹介しています。" }
  ];
  const goNextPage = () => {
    window.scrollTo({
      top: (0,500),
      behavior: "smooth",
    });
  };
  return (
    <body>
      <div className={HomeStyle["first-view-header"]}>
        <div className={HomeStyle.headerContainer}>
          <div className={HomeStyle.spuare}></div>
          <div className={HomeStyle.triangle}></div>
          <div className={`${HomeStyle.triangle} ${HomeStyle.line}`}></div>
          <img className={HomeStyle.logo} src={logo} alt="畳アイコン" />
        </div>
      </div>
      <section className={HomeStyle.hero}>
        <img className={HomeStyle.heroPhoto} src={hero} alt="ハロウィンの写真" />
        <div className={HomeStyle["arrow-icon"]} onClick={goNextPage}>
          <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
            <IoIosArrowDown/>
          </IconContext.Provider>
        </div>
      </section>

      <main>
        <section className={HomeStyle.products}>
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