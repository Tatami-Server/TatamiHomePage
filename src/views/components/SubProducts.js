import SubProductStyle from '../../style/components/SubProduct.module.css';

import Product from './Product.js';
import '../../style/components/Product.css';

const SubProducts = ({products}) => {
  return (
    <div className={SubProductStyle["sub-products"]}>
    {products.map(({ href, imgTitle, img, title, description }) => {
      return (
        <Product
          href={href}
          imgTitle={imgTitle}
          img={img}
          title={title}
          description={description}
        />
      );
    })}
  </div>
  );
}
export default SubProducts;