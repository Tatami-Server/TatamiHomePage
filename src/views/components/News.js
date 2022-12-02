import NewsJson from '../../json/News.json';

import Style from '../../style/components/News.module.css';

const News = () => {
  const { newsData } = NewsJson
  return (
    <div className={Style.newsContainer}>
        <h2>お知らせ</h2> 
        <div  className={Style.newsTable}>
          {newsData.map(({ href, date, content }) => {
            return(
              <div className={Style.news}>
                <p className={Style.newsDate}>{ date }</p>
                <p className={Style.newsContent}>
                  <a className={Style.newsHlef} href={ href }>{ content } </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
export default News;