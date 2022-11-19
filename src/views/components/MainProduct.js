import '../../style/components/Product.css';
import '../../style/components/MainProduct.css';

import Product from '../components/Product.js';


const MainProduct = ({list}) => {
  return (
    <div className="main-products">
    {list.map((productItem) => {
      return (
        <Product
          {...productItem}
        />
      );
    })}
  </div>
  );
}
export default MainProduct;