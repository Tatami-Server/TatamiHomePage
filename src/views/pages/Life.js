import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import Product from '../components/Product';

import '../../style/components/SubProduct.css'
import '../../style/components/Product.css';


const Life = () => {
  const funPointList=[
    {}
  ]
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="畳生活サーバー"/>
          <Subtitle subtitle="生活サーバーで遊ぼう！"/>
          
          <Subtitle subtitle="生活サーバーを楽しむポイント"/>
          <div className="subProducts">
            {funPointList.map(({ href, imgTitle, img, title, description }) => {
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
      </main>
      <Footer/>
    </div>
  );
}
export default Life;
