// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';
import Link from 'next/link';
import Sister1 from '@images/Igusa.images/sister1.png';

// cssインポート
import Style from '@style/pages/Contact.module.css';

const Contact = () => {
  return (
    <div>

        <Heading heading="お問い合わせ・意見箱"/>
        <Subtitle subtitle="お気軽にお問い合わせください"/>
        <div className='subtitle-content'>
          <p>
            畳サーバーに関するご質問・ご提案・ご要望等を受け付けております。匿名での送信も可能です。<br/>
            お気軽に
            <Link  href={"https://forms.gle/4v4KK23h1i6UTCae9"}>
              お問い合わせ・意見箱
            </Link>
            までお問い合わせください。※基本的に返信をすることはございません。<br/>
            返信を希望される場合は、Discordの
            <span className={Style["bold"]}>＃チケット作成</span>
            をご利用ください。
          </p>
        </div>
        <UpArrow/>
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