import MainProductStyle from '../../style/components/MainProduct.module.css';

import Product from './Product.js';
import '../../style/components/Product.css';


const MainProducts = ({products}) => {
  return (
    <div className={MainProductStyle["main-products"]}>
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