import MainProductStyle from '../../style/components/MainProduct.module.css';

import FlexLink from "src/util/FlexLink";

const MainProducts = ({products}) => {
  return (
    <div className={MainProductStyle["main-products"]}>
    {products.map(({href, img, title, description}) => {
      return (
        <div className={MainProductStyle.product}>
        <FlexLink href={href}>
          <div className={MainProductStyle["product-img-box"]}>
            <div className={MainProductStyle.fill}>
              <img src={img} alt="サーバー参加方法" />
            </div>
          </div>
        </FlexLink>
        <div className={MainProductStyle["product-text"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      );
    })}
  </div>
  );
}
export default MainProducts;