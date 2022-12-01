import Historyimg from '../../images/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import Subtitle from '../components/Subtitle';
import HistoryContent from '../components/HistoryContent';

import HistoryStyle from '../../style/pages/History.module.css';




const History = () => {

  return (
    <div>
      <Header/>
      <main>
        <div className={HistoryStyle["warp-content-wrapper"]} 
          style={{backgroundImage: `url(${Historyimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:"cover",
          }}>
          <div className={HistoryStyle["warp-content-title"]}>
            <h3>畳サーバーの</h3>
            <h3>歴史</h3>
          </div>
        </div>
        <Subtitle subtitle="２０２０年"/>
        <HistoryContent/>
        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default History;