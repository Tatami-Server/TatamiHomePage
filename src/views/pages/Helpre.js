import {BsPlusLg} from 'react-icons/bs'
import { IconContext } from 'react-icons'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';

import FlexLink from "src/util/FlexLink";

import React, {useState} from 'react';

import HelperStyle from '../../style/pages/Helpre.module.css';
const Helper = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  const QuestionList=[
    {question:"面接の流れを教えてください。", answer:<>まずは指定のGoogleフォームで開発経験や希望する班をお聞きします。
                                        回答を送信するとDiscordへの招待リンクが届きますので入室してください。
                                        入室後 #面接の流れチャンネルをご確認の上、
                                        #面接日時決定チャンネルで面接希望日時を複数記入いただきます。
                                        面接は30分程度を予定しております。(複数班希望されると長くなりやすいです。)
                                        面接終了後、面接官同士で審議を行い合否通知をDiscord上でお出しします。
                                        ※Googleフォームも上記の記事からご記入いただけます。</>},
    {}
  ]
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="運営応募"/>
        <Subtitle subtitle="運営って何？"/>
          <div className='subtitle-content'>
            <p>
              運営とは、畳サーバーのイベント開発やマップ製作、テクスチャ作成、動画編集等様々な分野でお手伝いをいただいている方の総称です。<br/>
              もちろん全てを出来なければならないわけではありませんし、足りない技術は覚えながら補えば構いません。<br/>
              <FlexLink href="https://mineidea.net/projects/6160894485">
              詳細はこちらから！
              </FlexLink>
            </p>
          </div>
        <Subtitle subtitle="よくある質問"/>
        <div className={HelperStyle["Question-wrapper"]}>
        {QuestionList.map(({question, answer}) => {
            return (
              <div className={HelperStyle["QandA-container"]}>
                <button onClick={toggle}>{open? 'close':'open'}</button>
                  <div className={HelperStyle["question-container"]}>
                    <div className={HelperStyle["q-icon"]}>Q</div>
                    <p className={HelperStyle.question}>{question}</p>
                    <IconContext.Provider value={{ color: '#436644', size: '20px' }}>
                      <BsPlusLg className={`${HelperStyle["plus-icon"]} ${HelperStyle.rotate}`}/>
                    </IconContext.Provider>
                </div>
                <div className={open? 'isOpen':'isClose'} >
                  <div className={HelperStyle["answer-container"]}>
                  <div className={HelperStyle["a-icon"]}>A</div>
                  <p className={HelperStyle.answer}>{answer}</p>
                  </div>
                </div>
              </div>
              );
            })}
        </div>

        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Helper;