import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';
import UpArrow from '../components/UpArrow';


const History = () => {
  return (
    <div>
      <Header/>
      <main>
        <Heading heading="畳サーバーの歴史"/>
        <Subtitle subtitle="2020年"/>
        <UpArrow/>
      </main>
      <Footer/>
    </div>
  );
}
export default History;