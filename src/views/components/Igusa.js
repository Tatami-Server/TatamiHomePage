// reactの機能をインポート
import React, { useState } from 'react';

// 画像インポート
import tatami from '../../images/Igusa.images/sister1.png';
import fusuma from '../../images/Igusa.images/sister2.png';
import tatamiMaru from '../../images/Igusa.images/tatamimaru.png';

// cssインポート
import Style from '../../style/components/Igusa.module.css';

const Igusa = (props) => {

  const [showImage, setShowImage] = useState(false);

  function handleClick() {
    setShowImage(!showImage);
  }

  return (
    <>
      <img className={`${Style['igusa-maru']} ${!showImage ? Style['show']: Style['visible'] }`} src={tatamiMaru} alt="Image" onClick={handleClick} />
      <div className={`${Style['igusa-wrapper']} ${showImage ? Style['show']: Style['visible']}`} onClick={handleClick}>
        <div className={Style['igusa-container']}>
          <div className={Style['igusa']}>
            <img className={Style['igusa-img']} src={props.image} alt="Image" />
            <div  className={Style['igusa-text-container']}>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Igusa;