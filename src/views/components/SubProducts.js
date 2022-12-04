import Style from '../../style/components/SubProduct.module.css';

import FlexLink from "src/util/FlexLink";

const SubProducts = ({products}) => {
  return (
    <div className={Style["sub-products"]}>
      {products.map(({ href, imgTitle, img, title, description }) => {
        return (
          <div className={Style.product}>
            <FlexLink href={href}>
              <div className={Style["product-img-box"]}>
                <div className={Style["text-box"]}>
                  <h3>{imgTitle}</h3>
                </div>
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
export default SubProducts;