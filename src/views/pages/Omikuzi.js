// reactの機能インポート
import {useState} from 'react';

// 画像インポート
import tatami from '../../images/Igusa.images/sister1.png';
import fusuma from '../../images/Igusa.images/sister2.png';


// cssインポート
import Style from '../../style/pages/Omikuzi.module.css';

const Omikuzi = () => {

  const fortunes = [
    { name: "大吉", probability: 0.05 },
    { name: "大凶", probability: 0.05 },
    { name: "凶", probability: 0.1 },
    { name: "小吉", probability: 0.25 },
    { name: "吉", probability: 0.25 },
    { name: "中吉", probability: 0.3 }
  ];
  fortunes.sort((a, b) => a.probability - b.probability);
  function getRandomFortune() {
    const random = Math.random();
    let cumulativeProbability = 0;
    for (const fortune of fortunes) {
      cumulativeProbability += fortune.probability;
      if (random <= cumulativeProbability) {
        return fortune.name;
      }
    }
  }
  const [fortune, setFortune] = useState("");

  // おみくじスタートボタンを押したとき
  function handleButtonClick() {
    const randomFortune = getRandomFortune();
    setFortune(randomFortune);

    const randomIndex = Math.floor(Math.random() * questList.length);
    const randomQuest = questList[randomIndex];
    setRandomQuest(randomQuest);
  }

  const questList = [
    '鉄道で旅をする',
    '5000G消費する',
    'ガチャを５回引く',
    '10000G稼ぐ',
    '一部屋以上建築する',
    '＃畳サーバーでツイートする',
    '駅周りを開拓する',
    'ガチャを１０回引く',
    'ネザライトインゴットを獲得する',
  ];
  
  // クエストリストをランダムにしている
  const [randomQuest, setRandomQuest] = useState('');
  const [checkboxes, setCheckboxes] = useState(
    questList.map((label, index) => ({ id: index + 1, label, isChecked: false }))
  );
  
  // チェックボックスの動き
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, isChecked: !checkbox.isChecked };
        }
        return checkbox;
      });
    });
  };

  return (
    <div className={Style['omikuzi-page-wapper']}>
      <div className={Style['omikuzi-title-wapper']}>
        <h1>畳おみくじ</h1>
        <h2>2023年5月20日の運勢とクエスト</h2>
      </div>
      <div className={Style['omikuzi-content-wapper']}>
        <div className={Style['quest-list-wapper']}>
          <div className={Style['quest-list-container']}>
            <p>特定のクエストを拒否</p>
            {checkboxes.map((checkbox) => (
              <label key={checkbox.id} className={Style['label-wrapper']}>
                <input
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                {checkbox.label}
              </label>
            ))}
          </div>
        </div>
        <div className={Style['omikuzi-wapper']}>
          <div className={Style['fortune-container']}>
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
            <button className={Style['btn']} onClick={handleButtonClick}>おみくじスタート</button>
          </div>
        </div>
        <div className={Style['igusa-container']}>
          <div className={Style['igusa-text-container']}>
            <p></p>
          </div>
          <img className={Style['fusuma-img']} src={fusuma}></img>
        </div>
      </div>
    </div>
  );
}
export default Omikuzi;