import '../../style/components/Product.css';
import '../../style/components/SubProduct.css';

import Product from './Product.js';

const SubProducts = ({products}) => {
  return (
    <div className="sub-products">
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