import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import SubProducts from '../components/SubProducts';
import UpArrow from '../components/UpArrow';

import join from '../../imges/Home.imges/join.png';

const Event = () => {
  const eventProductList=[
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%a6%a1%bc%a5%eb%a5%d0%a5%c8%a5%eb", imgTitle:"逃走中", img:join, title:"逃走中", description:"オリジナルマップとオリジナルミッションで繰り広げる逃亡劇！"},
  ]
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="イベント一覧"/>
          <Subtitle subtitle="通常イベント（イベントサーバー）"/>
          <div className="Products">
            <SubProducts products={eventProductList}/>
          </div>
          <Subtitle subtitle="通常イベント（イベントサーバー）"/>
          <Subtitle subtitle="サブスクライバー限定イベント（イベントサーバー）"/>
          <Subtitle subtitle="常時イベント（常時サーバー）"/>
          <Subtitle subtitle="生活サーバー"/>
          <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Event;
