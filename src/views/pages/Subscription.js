import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';


const Subscription = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="サブスクライブ・ご寄付について"/>
          <Subtitle subtitle="サブスクライバーとは？"/>
          <Subtitle subtitle="サブスクライブのメリット！"/>
          <Subtitle subtitle="ご寄付"/>
        
      </main>
      <Footer/>
    </div>
  );
}
export default Subscription;