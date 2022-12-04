import Style from '../../style/components/MainProduct.module.css';

import FlexLink from "src/util/FlexLink";

const MainProducts = ({products}) => {
  return (
    <div className={Style["main-products"]}>
      {products.map(({href, img, title, description}) => {
        return (
          <div className={Style.product}>
            <FlexLink href={href}>
              <div className={Style["product-img-box"]}>
                <div className={Style.fill}>
                  <img src={img} alt="サーバー参加方法" />
                </div>
              </div>
            </FlexLink>
            <div className={Style["product-text"]}>
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