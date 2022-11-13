import React from 'react';
import './SubProduct.css';
const SubProduct = (props) => {
  return (
    <div className="subProduct">
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
      <div className="subProductText">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default SubProduct;