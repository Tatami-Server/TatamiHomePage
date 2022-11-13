import React from 'react';
import './MainProduct.css';
const MainProduct = (props) => {
  return (
    <div className="mainProduct">
      <a href={props.href}>
        <div className="productImgBox">
          <div className="textBox">
            <h3>{props.imgTitle}</h3>
          </div>
          <div className="fill">
            <img src={props.img} alt="サーバー参加方法" />
          </div>
        </div>
      </a>
      <div className="mainProductText">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default MainProduct;