import '../../style/components/Product.css';
import '../../style/components/SubProduct.css';

import Product from '../components/Product.js';

const SubProduct = ({list}) => {
  return (
    <div className="sub-products">
    {list.map(({ href, imgTitle, img, title, description }) => {
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
export default SubProduct;