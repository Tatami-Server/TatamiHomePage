import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';



const Helper = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="運営応募"/>
          <Subtitle subtitle="運営って何？"/>
          <Subtitle subtitle="よくある質問"/>
        
      </main>
      <Footer/>
    </div>
  );
}
export default Helper;