import React from 'react';
import './css/News.css';

import NewsJson from '../json/News.json'

const News = () => {
  const { newsData } = NewsJson
  return (
    <div className="newsContainer">
        <h2>お知らせ</h2> 
        <div  className="newsTable">
          {newsData.map(({ href, date, content }) => {
            return(
              <div className="news">
                <p className="newsDate">{ date }</p>
                <p className="newsContent"><a className="newsHlef" href={ href }>{ content } </a></p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
export default News;