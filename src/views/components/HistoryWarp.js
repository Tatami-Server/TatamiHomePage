import HistoryJson from '../../json/History.json';
import AnchorLink from "react-anchor-link-smooth-scroll";

import Style from '../../style/components/HistoryWarp.module.css';

const HistoryWarp= () => {

  return (
      <ul className={Style["warp-content"]}>
          {HistoryJson.map(({year}) =>{
        return(
          <div key={year}>


            <AnchorLink href={'#'+year} >
              <li className={Style["warp-year"]}>{year}</li>
            </AnchorLink>
          </div>
        );
      })}
      </ul>
  );
}
export default HistoryWarp;