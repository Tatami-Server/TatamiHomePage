// コンポーネントインポート
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';
import HistoryWarps from '../components/HistoryWarps';
import Igusa from '../components/Igusa';

// reactの機能をインポート
import { useRef ,createRef, useEffect, useState} from 'react';

// json(データ)をインポート
import HistoryJson from '../../json/History.json';

// 画像インポート
import Historyimg from '../../images/History.images/history.png';
import tatami from '../../images/Igusa.images/sister1.png';

// cssインポート
import Style from '../../style/pages/History.module.css';

const History = () => {

  const historyContentRefs = useRef([]);
      {HistoryJson.forEach((_,i) => {
        historyContentRefs.current[i] = createRef();
      })};

  const[scrollPosition, setScrollPosition]= useState(window.scrollY);
  const onScroll= () => setScrollPosition(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll",onScroll)
    return() => window.removeEventListener("scroll",onScroll)
  });

  return (
    <>
      <Header/>
      <HistoryWarps 
      contentRef={historyContentRefs.current} 
      scrollPosition={scrollPosition}
      />
      <main>
        <div className={Style["history-hero-content-wrapper"]} 
          style={{backgroundImage: `url(${Historyimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:"cover",
          }}>
          <div className={Style["history-hero-content-title"]}>
            <h3>畳サーバーの</h3>
            <h3>歴史</h3>
          </div>
        </div>

        {HistoryJson.map((history,i) => {
          return(
            <div ref={historyContentRefs.current[i]} key={i}>
              <HistoryContent {...history}>
              </HistoryContent>
            </div>
          );
        })};

        <UpArrow/>
      </main>
      <Igusa text="ここでは畳サーバーの歴史を知ることができるわ。
        決して順調ではなく何度も困難にぶち当たっているんです…。
        それでも遊んでくださるみなさんのおかげで続けてこれているわ。
        本当にありがとう。"
        image={tatami}
      />
      <Footer/>
    </>
  );
}
export default History;