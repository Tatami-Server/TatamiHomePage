import Historyimg from '../../imges/History.images/history.png';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UpArrow from '../components/UpArrow';
import HistoryContent from '../components/HistoryContent';

import HistoryStyle from '../../style/pages/History.module.css';


const History = () => {
  return (
    <div>
      <Header/>
      <main>
        <div className={HistoryStyle["warp-content-wrapper"]}>
          <img src={Historyimg}></img>
          <div className={HistoryStyle["warp-content-container"]}>
            <div className={HistoryStyle["warp-content-title"]}>
              <h3>畳サーバーの歴史</h3>
              <h3 className={HistoryStyle.year}>２０２２年</h3>
            </div>
            <div className={HistoryStyle["warp-container"]}>
              <p>特定の年へワープ！</p>
              <ul>
                <li>2022</li>
                <li>2021</li>
                <li>2020</li>
              </ul>
            </div>
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