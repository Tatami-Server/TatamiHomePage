import Historyimg from '../../images/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';
import HistoryWarp from '../components/HistoryWarp';

import Style from '../../style/pages/History.module.css';

import { useRef,createRef} from 'react';

import HistoryJson from '../../json/History.json';



const History = () => {
  // const historyContentRef = useRef(null);
  // window.addEventListener('scroll', () => {
  //   const yearPos = historyContentRef
  //   const topPos = yearPos.getBoundingClientRect().top + window.scrollY
  //   const bottomPos = yearPos.getBoundingClientRect().bottom + window.scrollY
  //   const a = window.scrollY
  //   console.log('topPos'+topPos);
  //   console.log('bootomPos'+bottomPos);
  //   console.log(a)
  // });

  const historyContentRefs = useRef([]);
  HistoryJson.forEach((_,i) => {
    historyContentRefs.current[i] = createRef();
  })
  return (
    <>
      <Header/>
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

        {HistoryJson.map((history,i) =>{
          return(
            <div ref={historyContentRefs.current[i]} key={i}>
              <HistoryContent {...history}/>
            </div>
          );
        })};
        <UpArrow/>
      </main>
      <HistoryWarp/>
      <Footer/>
    </>
  );
}
export default History;