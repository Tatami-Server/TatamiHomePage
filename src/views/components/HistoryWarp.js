import HistoryJson from '../../json/History.json';
import AnchorLink from "react-anchor-link-smooth-scroll";

import Style from '../../style/components/HistoryWarp.module.css';

const HistoryWarp= () => {
  // const elm = documet.getElementById({year});
  // const elemHeight = elm.clientHeight;
  return (
      <ul className={Style["warp-content"]}>
          {HistoryJson.map(({year}) =>{
        return(
          // {window.addEventListener("scroll", function(){
          //   let scroll = window.pageYOffset;
          //   if(scroll > 4000){

          //   }
          // })}
          <AnchorLink href={'#'+year} >
            <li className={Style["warp-year"]}>{year}</li>
          </AnchorLink>
        );
      })}
      </ul>
  );
}
export default HistoryWarp;