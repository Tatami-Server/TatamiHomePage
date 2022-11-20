import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import SubProducts from '../components/SubProducts';
import UpArrow from '../components/UpArrow';

// cssインポート
import '../../style/pages/Life.css';

// imgインポート
import life1 from '../../imges/Life.images/life1.png'
import life2 from '../../imges/Life.images/life2.png'

import map from '../../imges/Home.imges/map.png';


const Life = () => {
  const funPointList=[
    { href: `/map/`, imgTitle: "マップ", img: map, title: "配布マップ", description: "当サーバーが提供している配布マップ等を紹介しています。" },
  ];
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="畳生活サーバー"/>
          <div className='life-content'>
            <Subtitle subtitle="生活サーバーで遊ぼう！"/>
            <div className='life-img-container'>
              <img src={life1}></img>
              <img src={life2}></img>
            </div>
            <p>
              当鯖はイベントのイメージが強いかもしれませんが、24時間対応の生活サーバーも運営しております。<br/>
              やりこみ要素として職業機能やガチャ機能を用意しております。<br/>
              以下では生活サーバーを楽しむポイントを紹介します。<br/>
              ガチャの中身が新しくなりました！
            </p>
          </div>
          <div className='life-content'>
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
