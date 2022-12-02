import HistoryJson from '../../json/History.json';
import Subtitle from '../components/Subtitle';


import HistoryContentStyle from '../../style/components/HistoryContent.module.css';

const Historycontent = () => {
  return (
    <div>
      {HistoryJson.map(({year,histories}) =>{
        console.log(HistoryJson)
        console.log(histories)
        return(
          <div>
          <Subtitle subtitle={year}/>
          {histories.map(({month,img,title,discription}) => {
              return (
                <div className={HistoryContentStyle["history-content"]}>
                  <div className={HistoryContentStyle["img-box"]}>
                    <img src={`${process.env.PUBLIC_URL}/HistoryContent.images/${img}`}alt="歴史の写真"></img>
                  </div>
                  <div className={HistoryContentStyle["text-box"]}>
                    <p className={HistoryContentStyle.month}>{month}</p>
                    <p className={HistoryContentStyle.title}>{title}</p>
                    <p className={HistoryContentStyle.discription}>{discription}</p>
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