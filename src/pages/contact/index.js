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
    {
      name: 'Minecraft畳サーバーそのものに対して',
      value: 'Minecraft畳サーバーそのものに対して',
    },
    {
      name: '生活サーバーについて',
      value: '生活サーバーについて',
    },
    {
      name: 'イベントサーバーについて',
      value: 'イベントサーバーについて',
    },
    {
      name: '24時間イベントサーバーについて',
      value: '24時間イベントサーバーについて',
    },
    {
      name: '配信について',
      value: '配信について',
    },
    {
      name: '畳サーバーの認証について',
      value: '畳サーバーの認証について',
    },
    {
      name: '配布データ「マイクラスコットランドヤード」について',
      value: '配布データ「マイクラスコットランドヤード」について',
    },
    {
      name: '配布データ「マイクラバカ人狼」について',
      value: '配布データ「マイクラバカ人狼」について',
    },
    {
      name: '畳サーバー 運営へのご希望について',
      value: '畳サーバー 運営へのご希望について',
    },
    {
      name: 'その他',
      value: 'その他',
    },
  ]

  const CheckboxTopic = () => {
    return (
      topicCheckboxes.map((topicCheckbox,i) => {
        return (
          <div className={Style["topicCheckboxes"]}>
            <input className={Style["Input-chackbox"]} id={"checbox" + i} type="checkbox" name={topicCheckbox.name}
              value=" "/>
            <label for={"checbox" + i}  className={Style["Input-chackbox-label"]}>
              {topicCheckbox.value}
            </label>
          </div>

        );
      })
    );
  }

  return (
    <div>

      <Heading heading="お問い合わせ・意見箱" />
      <Subtitle subtitle="お気軽にお問い合わせください" />
      <div className='subtitle-content'>
        <div className={Style["Contact-contents-wrapper"]}>
          <p>
            畳サーバーに関するご質問・ご提案・ご要望等を受け付けております。匿名での送信も可能です。<br />
            お気軽に
            <Link href={"https://forms.gle/4v4KK23h1i6UTCae9"}>
              お問い合わせ・意見箱
            </Link>
            までお問い合わせください。※基本的に返信をすることはございません。<br />
            返信を希望される場合は、Discordの
            <span className={Style["bold"]}>＃チケット作成</span>
            をご利用ください。
          </p>
          <form id='form' onsubmit="return false;">
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["Norequired-tag"]}>任意</p>
                <label for="name" className={Style["item-name"]}>ニックネームをお書きください。(匿名での送信も可能です)</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" name="お名前" id="name" placeholder="ニックネームをお書きください。"></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["Norequired-tag"]}>任意</p>
                <label for="name" className={Style["item-name"]}>返信をご希望の方は、連絡のつくアカウントやメールアドレスをお書きください。</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" name="メールアドレス" id="mail" placeholder="example@example.com"></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせの内容を選択してください。(複数選択可能)</label>
              </div>
              <div className={Style["Input-screen"]}>
                <CheckboxTopic />
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせのタイトルを入力してください</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="text" name="タイトル" id="title" placeholder="お問い合わせのタイトル"></input>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["required-tag"]}>必須</p>
                <label for="name" className={Style["item-name"]}>お問い合わせの内容をご記入ください</label>
              </div>
              <div className={Style["Input-screen"]}>
                <textarea name="お問い合わせの内容" id="inquiry-details"
                  placeholder="お問い合わせの内容"></textarea>
              </div>
            </div>
            <div className={Style["Input-item"]}>
              <div className={Style["item"]}>
                <p className={Style["Norequired-tag"]}>任意</p>
                <label for="name" className={Style["item-name"]}>ファイルや画像を貼り付けてください</label>
              </div>
              <div className={Style["Input-screen"]}>
                <input type="file" name="ファイルのアップロード" id="file" ></input>
              </div>
            </div>
            <div className={Style["Reserv-btn"]}>
              <button id="form-submit-button" type="button" onclick="submit();">
                <p>上記の内容で送信する</p>
              </button>
            </div>
          </form>
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