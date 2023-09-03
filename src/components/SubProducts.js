// コンポーネントインポート
import Link from "next/link";

// cssインポート
import Style from '@style/components/SubProduct.module.css';

import Image from "next/image";
import MultiLineText from "./MultiLineText";

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
                  <Image src={img} width={600} height={300} alt={imgTitle} />
                </div>
              </div>
              <div className={Style["product-text"]}>
                <h2>{title}</h2>
                <MultiLineText text={description} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default SubProducts;