import '../../style/components/Product.css';

import FlexLink from "src/util/FlexLink";

const Product = (props) => {
  return (
    <div className="product">
      <FlexLink href={props.href}>
        <div className="product-img-box">
          <div className="text-box">
            <h3>{props.imgTitle}</h3>
          </div>
          <div className="fill">
            <img src={props.img} alt="サーバー参加方法" />
          </div>
        </div>
      </FlexLink>
      <div className="product-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Product;