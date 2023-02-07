import Dashboard from '../admin/components/dashboard/Dashboard'

import hero from '../images/Home.images/hero2.png';
import logo from '../images/Home.images/logo.png';

import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'

import Style from '../style/pages/Home.module.css';


export default function AdminTopPage() {
  return (
    <div>
      <Dashboard>
        <section className={Style["hero-content-warpper"]}>
          <div className={Style.hero}
            style={{backgroundImage: `url(${hero})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:"cover",
          }}>
          <div className={Style["first-view-header"]}>
              <div className={Style.spuare}></div>
              <div className={Style.triangle}></div>
              <div className={`${Style.triangle} ${Style.line}`}></div>
              <img className={Style.logo} src={logo} alt="畳アイコン" />
          </div>
            <div className={Style["arrow-icon"]} >
              <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
                <IoIosArrowDown/>
              </IconContext.Provider>
            </div>
            <div className={Style["online-player"]}>
              <div className={Style["player-number"]}>
                <h2>３人オンライン！</h2>
              </div>
              <div className={Style["player-face"]}>
                <img></img>
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    </div>
  );
}