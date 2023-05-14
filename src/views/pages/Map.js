import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';
import SubProducts from '../components/SubProducts';
import Tatamin from '../components/tatamin';

import map1 from '../../images/map.images/map1.png';



const Map = () => {
  const pluginList=[
    {href: "https://www.youtube.com/watch?v=C6j53vGcVAk", imgTitle: <>スコットランドヤード</>, img: map1, title: "マイクラスコットランドヤード", description:<>ボードゲーム「スコットランドヤード」をマイクラで再現！<br/>最大6名。4~5人プレイ推奨。<br/>1試合1時間~2時間想定。</>},
  ]
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="配布マップ等"/>
        <Subtitle subtitle="配布イベント（プラグイン）"/>
          <p>※プライグインの動作確認にはpaperまたはspigot環境が必要です。</p>
          <div className='subtitle-content'>
            <div className="Products">
              <SubProducts products={pluginList}/>
            </div>
          </div>
        <Subtitle subtitle="配布イベント（データパック）"/>
          <div className='subtitle-content'>
            <p>現在ありません。</p>
          </div>
        <Subtitle subtitle="配布マップ"/>
          <div className='subtitle-content'>
            <p>現在ありません。</p>
          </div>
        <UpArrow/>
      </main>
      <Tatamin/>
      <Footer/>
    </div>
  );
}
export default Map;