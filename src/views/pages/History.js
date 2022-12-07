import Historyimg from '../../images/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';

import Style from '../../style/pages/History.module.css';




const History = () => {

  return (
    <div>
      <Header/>
      <main>
        <div className={Style["warp-content-wrapper"]} 
          style={{backgroundImage: `url(${Historyimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:"cover",
          }}>
          <div className={Style["warp-content-title"]}>
            <h3>畳サーバーの</h3>
            <h3>歴史</h3>
          </div>
        </div>
        <HistoryContent/>
        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default History;