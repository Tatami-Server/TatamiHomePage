import SubProductStyle from '../../style/components/SubProduct.module.css';

import FlexLink from "src/util/FlexLink";

const SubProducts = ({products}) => {
  return (
    <div className={SubProductStyle["sub-products"]}>
    {products.map(({ href, imgTitle, img, title, description }) => {
      return (
        <div className={SubProductStyle.product}>
        <FlexLink href={href}>
          <div className={SubProductStyle["product-img-box"]}>
            <div className={SubProductStyle["text-box"]}>
              <h3>{imgTitle}</h3>
            </div>
            <div className={SubProductStyle.fill}>
              <img src={img} alt="サーバー参加方法" />
            </div>
          </div>
        </FlexLink>
        <div className={SubProductStyle["product-text"]}>
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