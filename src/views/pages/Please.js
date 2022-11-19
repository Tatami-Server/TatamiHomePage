import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';


const Please = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="運営からのお願い"/>
          <Subtitle subtitle="投票にご協力ください！"/>
          <Subtitle subtitle="ツイートして盛り上げよう（＃畳サーバー）"/>
          <Subtitle subtitle="プロフィールカードを作ってみよう（＃畳サーバープロフィールカード)"/>
          <Subtitle subtitle="サーバー維持の為いろんな方と交流してみてください！"/>
        
      </main>
      <Footer/>
    </div>
  );
}
export default Please;