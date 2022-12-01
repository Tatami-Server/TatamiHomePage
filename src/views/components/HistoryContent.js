import img2020_9 from '../../images/History.images/2020/history2020-1.png';
import img2020_10 from '../../images/History.images/2020/history2020-2.png';
import img2020_11 from '../../images/History.images/2020/history2020-3.png';

import img2021_2to3_1 from '../../images/History.images/2021/history2021-1-1.png';
import img2021_2to3_2 from '../../images/History.images/2021/history2021-1-2.png';
import img2021_2to3_3 from '../../images/History.images/2021/history2021-1-3.png';
import img2021_2to3_4 from '../../images/History.images/2021/history2021-1-4.png';
import img2021_2to3_5 from '../../images/History.images/2021/history2021-1-5.png';
import img2021_5 from '../../images/History.images/2021/history2021-2.png';
import img2021_6 from '../../images/History.images/2021/history2021-3.png';
import img2021_7 from '../../images/History.images/2021/history2021-4.png';
import img2021_8_1 from '../../images/History.images/2021/history2021-5-1.png';
import img2021_8_2 from '../../images/History.images/2021/history2021-5-2.png';
import img2021_9 from '../../images/History.images/2021/history2021-6.png';
import img2021_10_1 from '../../images/History.images/2021/history2021-7-1.png';
import img2021_10_2 from '../../images/History.images/2021/history2021-7-2.png';
import img2021_11_1 from '../../images/History.images/2021/history2021-8-1.png';
import img2021_11_2 from '../../images/History.images/2021/history2021-8-2.png';
import img2021_12_1 from '../../images/History.images/2021/history2021-9-1.png';
import img2021_12_2 from '../../images/History.images/2021/history2021-9-2.png';
import img2021_12_3 from '../../images/History.images/2021/history2021-9-3.png';
import img2021_12_4 from '../../images/History.images/2021/history2021-9-4.png';

import img2022_1_1 from '../../images/History.images/2022/history2022-1-1.png';
import img2022_1_2 from '../../images/History.images/2022/history2022-1-2.png';
import img2022_1_3 from '../../images/History.images/2022/history2022-1-3.png';
import img2022_2_1 from '../../images/History.images/2022/history2022-2-1.png';
import img2022_2_2 from '../../images/History.images/2022/history2022-2-2.png';
import img2022_2_3 from '../../images/History.images/2022/history2022-2-3.png';
import img2022_3_1 from '../../images/History.images/2022/history2022-3-1.png';
import img2022_3_2 from '../../images/History.images/2022/history2022-3-2.png';
import img2022_4 from '../../images/History.images/2022/history2022-4.png';
import img2022_5_1 from '../../images/History.images/2022/history2022-5-1.png';
import img2022_5_2 from '../../images/History.images/2022/history2022-5-2.png';
import img2022_5_3 from '../../images/History.images/2022/history2022-5-3.png';
import img2022_6 from '../../images/History.images/2022/history2022-6.png';
import img2022_7_1 from '../../images/History.images/2022/history2022-7-1.png';
import img2022_7_2 from '../../images/History.images/2022/history2022-7-2.png';
import img2022_7_3 from '../../images/History.images/2022/history2022-7-3.png';
import img2022_7_4 from '../../images/History.images/2022/history2022-7-4.png';
import img2022_8 from '../../images/History.images/2022/history2022-8.png';
import img2022_9 from '../../images/History.images/2022/history2022-9.png';
import img2022_10 from '../../images/History.images/2022/history2022-10.png';
import img2022_11 from '../../images/History.images/2022/history2022-11.png';

import HistoryJson from '../../json/History.json';


import HistoryContentStyle from '../../style/components/HistoryContent.module.css';

const Historycontent = () => {
  return (
    <div>
        {HistoryJson.y2020.map(({month,img,title,discription}) => {
            return (
              <div className={HistoryContentStyle["history-content"]}>
                <div className={HistoryContentStyle["img-box"]}>
                  <img src={`${process.env.PUBLIC_URL}/History.images/2022/${img}`}alt="歴史の写真"></img>
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
}
export default Historycontent;