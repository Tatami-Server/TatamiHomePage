// コンポーネントインポート
import Link from "../../util/Link";

// 画像インポート
import gara from "../../images/SubProduct.images/gara.jpg"

// cssインポート
import Style from '../../style/components/SubProduct.module.css';

import Image from "next/image";

const SubProducts = ({products}) => {
  return (
    <div className={Style["sub-products"]}>
      {products.map(({ href, imgTitle, img, title, description },index) => {
        return (
          <div className={Style.product} key={index}>
            <Link href={href}>
              <div className={Style["product-img-box"]}>
                <div className={Style["text-box"]}>
                  <div className={Style.gara}
                    //   style={{backgroundImage: `url(${gara})`,
                    //   backgroundRepeat: 'no-repeat',
                    //   backgroundSize:"cover",
                    // }}
                    >
                    <h3>{imgTitle}</h3>
                  </div>
                </div>
                <div className={Style.fill}>
                  <Image src={img} alt="サーバー参加方法" />
                </div>
              </div>
              <div className={Style["product-text"]}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default SubProducts;