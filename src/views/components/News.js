import NewsJson from '../../json/News.json';

import NewsStyle from '../../style/components/News.module.css';

const News = () => {
  const { newsData } = NewsJson
  return (
    <div className={NewsStyle.newsContainer}>
        <h2>お知らせ</h2> 
        <div  className={NewsStyle.newsTable}>
          {newsData.map(({ href, date, content }) => {
            return(
              <div className={NewsStyle.news}>
                <p className={NewsStyle.newsDate}>{ date }</p>
                <p className={NewsStyle.newsContent}>
                  <a className={NewsStyle.newsHlef} href={ href }>{ content } </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
export default News;