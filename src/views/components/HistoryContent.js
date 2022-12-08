import HistoryJson from '../../json/History.json';
import Subtitle from '../components/Subtitle';

import Carousel from 'react-bootstrap/Carousel';

import Style from '../../style/components/HistoryContent.module.css';

const Historycontent = () => {
  return (
    <div>
      {HistoryJson.map(({year,histories}) =>{
        return(
          <div id={year}>
            <Subtitle subtitle={year} className={Style["subtitle-year"]}/>
            {histories.map(({month,images,title,discription}) => {

              function slideImage() {if(images.length === 1) {
                return(
                  <img src={`${process.env.PUBLIC_URL}/HistoryContent.images/${images}`}alt="歴史の写真"></img>
                )
              } else {
                return(
                  <Carousel className={Style.Carousel} >
                    {images.map((img) => 
                      <Carousel.Item interval={2000}> 
                      <img
                        key={img}
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
                <div className={Style["history-content"]}>
                    <div className={Style["img-box"]}>
                    {slideImage()}
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
      })}
    </div>
  );
}
export default Historycontent;