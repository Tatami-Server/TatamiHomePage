import HistoryJson from '../../json/History.json';
import Subtitle from '../components/Subtitle';


import Style from '../../style/components/HistoryContent.module.css';

const Historycontent = () => {
  return (
    <div>
      {HistoryJson.map(({year,histories}) =>{
        return(
          <div>
            <Subtitle subtitle={year}/>
            {histories.map(({month,img,title,discription}) => {
                return (
                  <div className={Style["history-content"]}>
                    <div className={Style["img-box"]}>
                      <img src={`${process.env.PUBLIC_URL}/HistoryContent.images/${img}`}alt="歴史の写真"></img>
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