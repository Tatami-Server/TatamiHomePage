import AnchorLink from "react-anchor-link-smooth-scroll";

import Style from '../../style/components/HistoryWarp.module.css';

import HistoryJson from '../../json/History.json';
import { useEffect, useState } from "react";

const HistoryWarps= ({contentRef,scrollPosition}) => {
  // console.log(contentRef)
  const [selected, setSelected] = useState([]);
  
  useEffect(() => {
    judgeInsideOrNot()
  });

  const judgeInsideOrNot= () => {
    HistoryJson.map((_,i) => {
        console.log(contentRef[i])
      // if(contentRef[i]) {
        const {top,bottom} = contentRef[i].current.getBoundingClientRect()
    
        const offset = 200;

        const topPos = top + scrollPosition - 200
        const bottomPos = bottom + scrollPosition - 200
        
        setSelected((prevSelected) => {
          prevSelected[i] = scrollPosition> topPos && scrollPosition< bottomPos ? Style['selected']: ''

          return prevSelected
        });

      // }
    })
    }
    return (
      <ul className={Style["warp-content"]}>
        {HistoryJson.map(({year},i) =>
          <AnchorLink href={'#'+year} key={i}>
            <li className={`${Style["warp-year"]} ${selected[i]} `}>{year}</li>
          </AnchorLink>
        )}
      </ul>
    );
}
export default HistoryWarps;