import Historyimg from '../../images/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';
import HistoryWarp from '../components/HistoryWarp';

import Style from '../../style/pages/History.module.css';




const History = () => {

  return (
    <div>
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
        <HistoryContent/>
        <UpArrow/>
      </main>
      <HistoryWarp/>
      <Footer/>
    </div>
  );
}
export default History;