import logo from '../imges/App.imges/logo.png';
import hero from '../imges/App.imges/hero2.png';
import join from '../imges/App.imges/join.png';
import event from '../imges/App.imges/event.png';
import life from '../imges/App.imges/life.jpg';
// import donation from '../imges/App.imges/donation.jpg';
// import map from '../imges/App.imges/map.png';
// import omikuzi from '../imges/App.imges/omikuzi.jpg';
// import please from '../imges/App.imges/please.jpg';
// import application from '../imges/App.imges/application.jpg';
// import history from '../imges/App.imges/history.jpg';
// import sns from '../imges/App.imges/sns.jpg';
// import inquery from '../imges/App.imges/inquery.jpg';

import MainProduct from './MainProduct.js';
// import SubProduct from './SubProduct.js';
import './App.css';

function App() {
  const MainProductsList=[
    {href:"join.html",imgTitle:"参加方法",img:join,title:"サーバー参加方法",Description:"Discordやマイクラサーバーへの参加方法を紹介しています。"},
    {href:"life.html",imgTitle:"生活鯖",img:life,title:"生活サーバー",Description:"半年ぶりに復活した新しい生活サーバーについて紹介しています。"},
    {href:"event.html",imgTitle:"イベント",img:event,title:"イベント一覧",Description:"当サーバーが提供しているイベント一覧とルールを紹介しています。"}
  ];
  // const SubProductsList=[
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""},
  //   {href:"",imgTitle:"",img:join,title:"",Description:""}
  // ]
  return (
    <body>
      <header>
      <div className="headerContainer">
        <div className="spuare"></div>
        <div className="triangle"></div>
        <div className="triangle line"></div>
        <img className="logo" src={logo} alt="畳アイコン"/>
      </div>
    </header>
    <section className="hero">
      <img className= "heroPhoto"src={hero} alt="ハロウィンの写真"/>
    </section>
    
    <div className="mainPage">
      <section className="products">
        <div className="mainProducts">
          {MainProductsList.map((productItem) =>{
            return(
            <MainProduct
              href={productItem.href}
              imgTitle={productItem.imgTitle}
              img={productItem.img}
              title={productItem.title}
              Description={productItem.Description}
            />
            );
          })}

        </div>
        <div className="subProducts">
          
        </div>
      </section>
    </div>  
  </body>
  );
}

export default App;
