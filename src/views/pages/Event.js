import join from '../../imges/App.imges/join.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import SubProduct from '../components/SubProduct';

import '../../style/components/SubProduct.css'


const Event = () => {
  const eventProductList=[
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%a6%a1%bc%a5%eb%a5%d0%a5%c8%a5%eb", imgTitle:"逃走中", img:join, title:"逃走中", description:"オリジナルマップとオリジナルミッションで繰り広げる逃亡劇！"}
  ]
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="イベント一覧"/>
          <Subtitle subtitle="通常イベント（イベントサーバー）"/>
          <SubProduct list={eventProductList}/>
          <Subtitle subtitle="通常イベント（イベントサーバー）"/>
          <Subtitle subtitle="サブスクライバー限定イベント（イベントサーバー）"/>
          <Subtitle subtitle="常時イベント（常時サーバー）"/>
          <Subtitle subtitle="生活サーバー"/>
      </main>
      <Footer/>
    </div>
  );
}
export default Event;
