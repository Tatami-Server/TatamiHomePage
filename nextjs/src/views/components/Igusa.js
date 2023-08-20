// reactの機能をインポート
import React, { useState } from 'react';

// 画像インポート
import tatamiMaru from '../../images/Igusa.images/tatamimaru.png';
import kyuusu from '../../images/Igusa.images/kyuusu.svg'

// cssインポート
import Style from '../../style/components/Igusa.module.css';

import Image from "next/image";

const Igusa = (props) => {

  const [showImage, setShowImage] = useState(false);

  function handleClick() {
    setShowImage(!showImage);
  }

  return (
    <>
      <div className={`${Style['igusa-maru']} ${!showImage ? Style['show']: Style['visible'] }`} src={tatamiMaru} alt="Image" onClick={handleClick}>
        <Image className={Style['kyuusu']} src={kyuusu}/>
        <p>？？？</p>
      </div>
      <div className={`${Style['igusa-wrapper']} ${showImage ? Style['show']: Style['visible']}`} onClick={handleClick}>
        <div className={Style['igusa-container']}>
          <div className={Style['igusa']}>
            <Image className={Style['igusa-img']} src={props.image} alt="Image" />
            <div  className={Style['igusa-text-container']}>
              <p>{props.text}</p>
              <p>提供：{props.creator}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Igusa;