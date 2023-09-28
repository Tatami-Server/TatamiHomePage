import React, { useState } from 'react';

// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';
import Link from 'next/link';
import Sister1 from '/public/images/Igusa.images/sister1.png';

// cssインポート
import Style from '@style/pages/Contact.module.scss';

const Contact = () => {

  const topicCheckboxes = [
    'Minecraft畳サーバーそのものに対して',
    '生活サーバーについて',
    'イベントサーバーについて',
    '24時間イベントサーバーについて',
    '配信について',
    '畳サーバーの認証について',
    '配布データ「マイクラスコットランドヤード」について',
    '配布データ「マイクラバカ人狼」について',
    '畳サーバー 運営へのご希望について',
  ]

  const CheckboxTopic = () => {
    return (
      topicCheckboxes.map((topicCheckbox, i) => {
        return (
          <div className={Style["topicCheckboxes"]} key={topicCheckbox}>
            <input className={Style["Input-chackbox"]} id={"checbox" + i} type="checkbox" name="entry.1515577470"
              value={topicCheckbox} />
            <label for={"checbox" + i} className={Style["Input-chackbox-label"]}>
              {topicCheckbox}
            </label>
          </div>

        );
      })
    );
  }

    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      // フォームの送信処理を追加する場合、ここに追加します。
    };

  return (
    <div>

      <Heading heading="お問い合わせ・意見箱" />
      <Subtitle subtitle="お気軽にお問い合わせください" />
      <div className='subtitle-content'>
        <div className={Style["Contact-contents-wrapper"]}>
          <p>
            畳サーバーに関するご質問・ご提案・ご要望等を受け付けております。匿名での送信も可能です。<br />
            お気軽にお問い合わせください。※基本的に返信をすることはございません。<br />
            返信を希望される場合は、Discordの
            <span className={Style["bold"]}>＃チケット作成</span>
            をご利用ください。
          </p>
          {!submitted ? (
          <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScrfFjwolk-AVfgHLMVatXeJlK1XuzAn8MgF-aVYDl5a4HL2A/formResponse" 
            target="hidden_iframe" 
            onSubmit={handleSubmit} 
            method="POST" 
            id="mG61Hd"
            >
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["Norequired-tag"]}>任意</p>
                <label for="name" className={Style["item-name"]}>ニックネームをお書きください。(匿名での送信も可能です)</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" id="name" placeholder="ニックネームをお書きください。" name="entry.1337207535" ></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["Norequired-tag"]}>任意</p>
                <label for="name" className={Style["item-name"]}>返信をご希望の方は、連絡のつくアカウントやメールアドレスをお書きください。</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" name="entry.638518570" id="mail" placeholder="example@example.com"></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせの内容を選択してください。(複数選択可能)</label>
              </div>
              <div className={Style["Input-screen"]}>
                <CheckboxTopic />
                <div className={Style["topicCheckboxes"]}>
                  <input className={Style["Input-chackbox"]} id="other-option" type="checkbox" name="entry.1515577470"
                    value="__other_option__"  />
                  <label for="other-option" className={Style["Input-chackbox-label"]}>その他:</label>
                  <input type="text" className={Style["other-option"]} name="entry.1515577470.other_option_response" />
                </div>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせのタイトルを入力してください</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" name="entry.1958689868" id="title" placeholder="お問い合わせのタイトル"></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせの内容をご記入ください</label>
              </div>
              <div className={Style["Input-screen"]}>
                <textarea name="entry.1518817003" id="inquiry-details"
                  placeholder="お問い合わせの内容" ></textarea>
                  <p>※画像や動画のアップロードを希望される場合は、discordの #チケット作成 チャンネルまでお願いします。</p>
              </div>
            </div>
            <div className={Style["Reserv-btn"]}>
              <button id="form-submit-button" type="submit">
                <p>上記の内容で送信する</p>
              </button>
            </div>
          </form>
          ) : (
            <div className={Style["thanks-card"]}>
              <div className={Style["card-text"]}>
                <p>お問い合わせありがとうございます。<br/>送信完了しました。</p>
                <a href='/'>
                <button>ホームに戻る</button>
                </a>
              </div>
            </div>
            )}
        </div>
      </div>
      <UpArrow />
      <Igusa text="ここではお問い合わせについて掲載しているわ。
        うちの鯖主はお問い合わせフォームを作る技術はもっていないみたい…。
        お問い合わせ・意見箱というGoogleフォームがあるからそれを使ってね。"
        image={Sister1}
        creator="ナミヤ 和 様"
      />
    </div>
  );
}
export default Contact;