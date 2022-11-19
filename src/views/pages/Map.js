import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';



const Map = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="配布マップ等"/>
          <Subtitle subtitle="配布イベント（プラグイン）"/>
          <Subtitle subtitle="配布イベント（データパック）"/>
          <Subtitle subtitle="配布マップ"/>
        
      </main>
      <Footer/>
    </div>
  );
}
export default Map;