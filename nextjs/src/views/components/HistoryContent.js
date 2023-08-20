// コンポーネントインポート
import Subtitle from './Subtitle';

// カルーセルインポート
import Carousel from 'react-bootstrap/Carousel';

// cssインポート
import Style from '../../style/components/HistoryContent.module.css';

import Image from "next/image";

const Historycontent = ({year,histories}) => {

    function slideImage(images) {if(images.length === 1) {
      return(
        <Image src={`${process.env.PUBLIC_URL}/HistoryContent.images/${images}`}alt="歴史の写真" />
      )
      } else {
        return(
          <Carousel className={Style.Carousel} >
            {/* returnなしでも書ける↓例　他のも統一する。 */}
            {images.map((img,index) => 
              <Carousel.Item interval={2000} key={index}> 
              <Image
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/HistoryContent.images/${img}`}
                alt="First slide"
              /> 
              </Carousel.Item>
            )}
          </Carousel>
        )
      }
    }

  return (
          <div  id={year}>
            <Subtitle subtitle={year} className={Style["subtitle-year"]}/>
            {histories.map(({month,images,title,discription},index) => {
              return (
                <div className={Style["history-content"]} key={index}>
                    <div className={Style["img-box"]}>
                    {slideImage(images)}
                    </div>
                    <div className={Style["text-box"]}>
                      <p className={Style.month}>{month}</p>
                      <p className={Style.title}>{title}</p>
                      <p className={Style.discription}>{discription}</p>
                    </div>
                  </div>
                );
            })}
          </div>
  );
}
export default Historycontent;