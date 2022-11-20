import '../../style/components/Product.css';
import '../../style/components/MainProduct.css';

import Product from './Product.js';


const MainProducts = ({products}) => {
  return (
    <div className="main-products">
    {products.map((productItem) => {
      return (
        <Product
          {...productItem}
        />
      );
    })}
  </div>
  );
}
export default MainProducts;