import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';



const Helper = () => {
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="運営応募"/>
        <Subtitle subtitle="運営って何？"/>
        <Subtitle subtitle="よくある質問"/>
        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default Helper;