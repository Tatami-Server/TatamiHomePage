// reactの機能インポート
import {useState, useEffect} from 'react';

// リアクトアイコンインポート
import{AiFillHome} from 'react-icons/ai';
import { IconContext } from 'react-icons'

// コンポーネントインポート
import Link from 'next/link';
import Image from "next/image";

//コンポーネントインポート
import Menu from '@components/Menu';

// 画像インポート
import tatami from '/public/images/Igusa.images/sister1.png';
import fusuma from '/public/images/Igusa.images/sister2.png';
import daikichi from '/public/images/omikuzi.images/daikichi.jpg';
import tyuukichi from '/public/images/omikuzi.images/tyuukichi.png';
import kichi from '/public/images/omikuzi.images/kichi.jpg';
import syoukichi from '/public/images/omikuzi.images/syoukichi.jpg';
import kyou from '/public/images/omikuzi.images/kyou.png';
import syouzi1 from '/public/images/omikuzi.images/syouzi1.png';
import syouzi2 from '/public/images/omikuzi.images/syouzi2.png';


// cssインポート
import Style from '@style/pages/Omikuzi.module.css';
import { red } from '@mui/material/colors';

// 音インポート
import useSound from 'use-sound';
// import atariSound from '@music/atari.mp3';
// import zyakiSound from '@music/zyaki.mp3';
// import patiSound from '@music/pati.mp3';

const Omikuzi = () => {

  const [playAtari] = useSound('/music/atari.mp3');
  const [playZyaki] = useSound('/music/zyaki.mp3');
  const [playPati] = useSound('/music/pati.mp3');

  const playDelayedAtariSound = () => {
    setTimeout(() => {
      playAtari();
    }, 1000); // 1秒の遅延
  };

  const playDelayedPatiSound = () => {
    setTimeout(() => {
      playPati();
    }, 2000); // 2秒の遅延
  };

  
  const questList = [
    '鉄道で旅をしよう',
    '5000G消費しよう',
    'ガチャを５回引こう',
    '10000G稼ごう',
    '1部屋以上建築しよう',
    '＃畳サーバ―でツイ―トしよう',
    '駅周りを開拓しよう',
    'ガチャを１０回引こう',
    'ネザライトインゴットを獲得しよう',
  ];

  const fortunes = [
    { name: "大吉", probability: 0.05, text: '絶好調!!今日はURが出る予感!!', image: daikichi },
    { name: "凶", probability: 0.05, text:  'そんな日もあるさ、切り抜きで動画でも見て笑おうよ', image: kyou},
    { name: "小吉", probability: 0.25, text: '大体いつも通りの1日だよ!', image: syoukichi },
    { name: "吉", probability: 0.25, text: 'こういう日は配信アーカイブでも見直そう。', image:kichi},
    { name: "中吉", probability: 0.3, text: '新たな場所を冒険するといいことあるかも！', image: tyuukichi }
  ];
  fortunes.sort((a, b) => a.probability - b.probability);
  function getRandomFortune() {
    const random = Math.random();
    let cumulativeProbability = 0;
    for (const fortune of fortunes) {
      cumulativeProbability += fortune.probability;
      if (random <= cumulativeProbability) {
        return { name: fortune.name, text: fortune.text, image: fortune.image};
      }
    }
  }
  const [fortune, setFortune] = useState("");
  const [questText, setquestText] = useState("[おみくじスタート]ボタンを押してね！");
  const [fortuneImage, setFortuneImage] = useState("");
  const [btnText, setBtnText] = useState("おみくじスタート");

  const [isOpen, setisOpen] = useState(false);


  // おみくじスタートボタンを押したとき
  function handleButtonClick() {

    const randomFortune = getRandomFortune();
    setisOpen(!isOpen);
    setBtnText("おみくじスタート")
    if(isOpen) return; 
    setBtnText("もう一度引く");

    setFortune(randomFortune.name);
    setquestText(randomFortune.text);
    setFortuneImage(randomFortune.image);

    if(randomFortune.name === "大吉") {
      playZyaki();
      playDelayedAtariSound ();
      playDelayedPatiSound();
    }

    // isCheckedがtrueの要素を省いた配列を作成
    const filteredItems = quests.filter(item => !item.isChecked);
    // ランダムに要素を選択
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    const selectedRandomQuest = filteredItems[randomIndex];
    setRandomQuest(selectedRandomQuest.label);   
  }


  // クエストリストをランダムにしている
  const [randomQuest, setRandomQuest] = useState('');

  
  const [quests, setQuests] = useState(
    questList.map((label, index) => ({ id: index + 1, label, isChecked: false }))
  );

  // チェックボックスの動き
  const handleCheckboxChange = (id) => {
    setQuests (quests.map((quest) =>  {
      if(quest.id == id){
        quest.isChecked = !quest.isChecked;
      }
      return quest;
    }));
  };

  // 日付,、曜日の取得
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();
  
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className={Style['omikuzi-page-wapper']}>
      <div className={Style['omikuzi-title-wapper']}>
        <h1 className={Style['omikuzi-title']}>畳おみくじ</h1>
        <h2 className={Style['omikuzi-title-text']}>{year}年{month}月{date}日（{daysOfWeek[dayOfWeek]}）の運勢とクエスト</h2>
        <div  className={Style['omikuzi-menu']}>
          <Menu right noOverlay/>
        </div>
      </div>
      <div className={Style['home-icon']}>
        <IconContext.Provider value={{ color: '#436644', size: '50px' }} >
          <Link href="/">
            <AiFillHome/>
          </Link>
        </IconContext.Provider>
      </div>
      <div className={Style['omikuzi-content-wapper']}>
        <div className={Style['quest-list-wapper']}>
          <div className={Style['quest-list-container']}>
            <div className={Style['quest-list']}>
              <p>特定のクエストを拒否</p>
              <div className={Style['label-wrapper']}>
              {quests.map((quest) => (
                <label key={quest.id} >
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(quest.id)}
                  />
                  {quest.label}
                </label>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className={Style['omikuzi-wapper']}>
          <div className={Style['fortune-container']} style={{backgroundImage: `url(${fortuneImage})`}}>
            <div className={Style['fortune-door']}>
              <Image 
                src={syouzi2} 
                className={`${Style['fortune-door-left']} ${isOpen ? Style.openLeft : ''}`}
              ></Image>
              <Image 
                src={syouzi1} 
                className={`${Style['fortune-door-right']} ${isOpen ? Style.openRight : ''}`}
              ></Image>
            </div>
              
            <div className={Style['fortune-line-thick']}>
              <div className={Style['fortune-line-thin']}>
                <div className={Style['fortune']}>{fortune}</div>
                <div className={Style['quest']}>
                  <p>{randomQuest}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style['fortune-btn-container']}> 
            <button className={Style['btn']} onClick={handleButtonClick}>{btnText}</button>
          </div>
        </div>
        <div className={Style['igusa-container']}>
          <div className={Style['igusa-text-container']}>
            <p className={Style['quest-text']}>{questText}</p>
          </div>
          <Image className={Style['fusuma-img']} src={fusuma}></Image>
        </div>
      </div>
    </div>
  );
}
export default Omikuzi;