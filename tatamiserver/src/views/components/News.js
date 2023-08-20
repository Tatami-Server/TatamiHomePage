import { useEffect, useState } from 'react'

import { getAll } from '../../lib/firebase';

// コンポーネントインポート
import Link from '../../util/Link';

// cssインポート
import Style from '../../style/components/News.module.css';
import FormatDate from '../../util/FormatDate';

const News = () => {
  const [ newsData, setNewsData ] = useState([])
  useEffect(() => {
    getAll('notice', { sort: { field: 'date', order: 'desc' } })
      .then((data) => setNewsData(data))
  }, [])

  return (
    <div className={Style.newsContainer}>
        <h2>お知らせ</h2> 
        <div  className={Style.newsTable}>
          {newsData.map(({ url, date, title },index) => {
            return(
              <div className={Style.news} key={index}>
                <p className={Style.newsDate}>
                  <FormatDate date={date} />
                </p>
                <p className={Style.newsContent}>
                  <Link className={Style.newsHlef} href={ url }>{ title } </Link>
                </p>
              </div>
            );
          })}
        </div>
    </div>
  );
}
export default News;