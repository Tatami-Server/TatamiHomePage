import NewsJson from '../../json/News.json';

import Style from '../../style/components/News.module.css';

import FlexLink from '../../util/FlexLink';

const News = () => {
  const { newsData } = NewsJson
  return (
    <div className={Style.newsContainer}>
        <h2>お知らせ</h2> 
        <div  className={Style.newsTable}>
          {newsData.map(({ href, date, content },index) => {
            return(
              <div className={Style.news} key={index}>
                <p className={Style.newsDate}>{ date }</p>
                <p className={Style.newsContent}>
                  <FlexLink className={Style.newsHlef} href={ href }>{ content } </FlexLink>
                </p>
              </div>
            );
          })}
        </div>
    </div>
  );
}
export default News;