import logo from '../imges/App.imges/logo.png';
import hero from '../imges/App.imges/hero2.png';
import join from '../imges/App.imges/join.png';
import event from '../imges/App.imges/event.png';
import life from '../imges/App.imges/life.jpg';
import donation from '../imges/App.imges/donation.jpg';
import map from '../imges/App.imges/map.png';
import omikuzi from '../imges/App.imges/omikuzi.jpg';
import please from '../imges/App.imges/please.jpg';
import application from '../imges/App.imges/application.jpg';
import history from '../imges/App.imges/history.jpg';
import sns from '../imges/App.imges/sns.jpg';
import inquery from '../imges/App.imges/inquery.jpg';
import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'

import Product from './Product.js';
import Footer from './Footer.js';
import News from './News.js';
import './css/App.css';
import './css/MainProduct.css';
import './css/SubProduct.css';
import './css/Product.css';

function App() {
  const MainProductsList = [
    { href: "join.html", imgTitle: "参加方法", img: join, title: "サーバー参加方法", description: "Discordやマイクラサーバーへの参加方法を紹介しています。" },
    { href: "life.html", imgTitle: "生活鯖", img: life, title: "生活サーバー", description: "半年ぶりに復活した新しい生活サーバーについて紹介しています。" },
    { href: "./Event.js", imgTitle: "イベント", img: event, title: "イベント一覧", description: "当サーバーが提供しているイベント一覧とルールを紹介しています。" }
  ];
  const SubProductsList = [
    { href: "offer.html", imgTitle: "マップ", img: map, title: "配布マップ", description: "当サーバーが提供している配布マップ等を紹介しています。" },
    { href: "history.html", imgTitle: "歴史", img: history, title: "畳サーバーの歴史", description: "当サーバーの過去を知ることができます。過去にこんな事が...。" },
    { href: "sns.html", imgTitle: "SNS", img: sns, title: "公式SNS", description: "Twitch・YouTube・Twitter等のURLを記載しています。" },
    { href: "sub.html", imgTitle: "ご寄付", img: donation, title: "サブスクライブ・ご寄付", description: "平素よりご支援いただきありがとうございます！" },
    { href: "helper.html", imgTitle: "応募", img: application, title: "運営への応募", description: "建築や開発など、私たちと共に制作しませんか？" },
    { href: "contact.html", imgTitle: "問い合わせ", img: inquery, title: "お問い合わせ・意見箱", description: "意見や要望はこちらから！" },
    { href: "please.html", imgTitle: "お願い", img: please, title: "運営からのお願い", description: "サーバーの維持や盛り上げのためにお願いしていることを記載しています。" },
    { href: "omikuji.html", imgTitle: "おみくじ", img: omikuzi, title: "畳おみくじ", description: "今日の運勢とクエストを占おう！ちょっとした遊び心で用意したコンテンツです。" }
  ]

  return (
    <body>
      <header>
        <div className="headerContainer">
          <div className="spuare"></div>
          <div className="triangle"></div>
          <div className="triangle line"></div>
          <img className="logo" src={logo} alt="畳アイコン" />
        </div>
      </header>
      <section className="hero">
        <img className="heroPhoto" src={hero} alt="ハロウィンの写真" />
        <div className="arrowIcon">
          <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
            <IoIosArrowDown/>
          </IconContext.Provider>
        </div>
      </section>

      <div className="mainPage">
        <section className="products">
          <div className="mainProducts">
            {MainProductsList.map((productItem) => {
              return (
                <Product
                  {...productItem}
                />
              );
            })}

          </div>
          <div className="subProducts">
            {SubProductsList.map(({ href, imgTitle, img, title, description }) => {
              return (
                <Product
                  href={href}
                  imgTitle={imgTitle}
                  img={img}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        </section>
      <News/>
      </div>
      <Footer />

    </body>
  );
}

export default App;
