import React, { useState } from 'react';

import Style from '../../style/components/Tatamin.module.css';

import tatamin from '../../images/tatamin.images/sister1.png';
import tataminSister from '../../images/tatamin.images/sister2.png';
import tatamiMaru from '../../images/tatamin.images/tatamimaru.png';

const Tatamin = () => {
  const [showTatamin, setTatamin] = useState(false);

  function handleClick() {
    setTatamin(!showTatamin);
  }
  return (
    <>
      <img className={`${Style['tatamin-maru']} ${!showTatamin ? Style['show']: Style['visible'] }`} src={tatamiMaru} alt="Image" onClick={handleClick} />
      <div className={`${Style['tatamin-wrapper']} ${showTatamin ? Style['show']: Style['visible']}`} onClick={handleClick}>
        <div className={Style['tatamin-container']}>
          <div className={Style['tatamin']}>
            <img className={Style['tatamin-img']} src={tatamin} alt="Image" />
            <div  className={Style['tatamin-text-container']}>
              <p>こんにちは！私はたたみんです。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tatamin;