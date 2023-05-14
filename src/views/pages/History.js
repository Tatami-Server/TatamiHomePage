import Historyimg from '../../images/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';
import HistoryWarps from '../components/HistoryWarps';
import Tatamin from '../components/tatamin';

import Style from '../../style/pages/History.module.css';

import { useRef ,createRef, useEffect, useState} from 'react';

import HistoryJson from '../../json/History.json';


const History = () => {
  // 外で定義しているので使える↓
  const historyContentRefs = useRef([]);
      {HistoryJson.forEach((_,i) => {
        // ここで書き換えてる↓？
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
      <Tatamin/>
      <Footer/>
    </>
  );
}
export default History;