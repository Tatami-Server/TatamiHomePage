import AnchorLink from "react-anchor-link-smooth-scroll";

import Style from '../../style/components/HistoryWarp.module.css';

import HistoryJson from '../../json/History.json';
import { useEffect, useState } from "react";

const HistoryWarps= ({contentRef,scrollPosition}) => {
  const [selected, setSelected] = useState([]);
  
  useEffect(() => {
    judgeInsideOrNot()
  });

  const judgeInsideOrNot= () => {
    HistoryJson.map((_,i) => {
        console.log(contentRef[i])
        const {top,bottom} = contentRef[i].current.getBoundingClientRect()
    
        const offset = 200;

        const topPos = top + scrollPosition - offset
        const bottomPos = bottom + scrollPosition - offset
        
        setSelected((prevSelected) => {
          prevSelected[i] = scrollPosition> topPos && scrollPosition< bottomPos ? Style['selected']: ''

          return prevSelected
        });

    })
    }


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 300) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
      <div className={`${Style["warp-container"]} ${isScrolled ? Style['is-scrolled'] : ''}`}>
      <ul className={Style["warp-content"]}>
        {HistoryJson.map(({year},i) =>
          <AnchorLink href={'#'+year} key={i}>
            <li className={`${Style["warp-year"]} ${selected[i]} `}>{year}</li>
          </AnchorLink>
        )}
      </ul>
      </div>
    );
}
export default HistoryWarps;