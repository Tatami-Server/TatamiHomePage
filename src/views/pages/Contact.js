import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Subtitle from '../components/Subtitle';


const Contact = () => {
  return (
    <div>
      <Header/>
      <main>
          <Heading heading="お問い合わせ・意見箱"/>
          <Subtitle subtitle="お気軽にお問い合わせください"/>
        
      </main>
      <Footer/>
    </div>
  );
}
export default Contact;