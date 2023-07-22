// コンポーネントインポート
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getOne } from '../../lib/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';


const EventDetail = () => {
  const [ eventData, setEventData ] = useState([])
  const {id} = useParams()
  useEffect(() => {
    getOne('event', id).then((data) => setEventData(data))
  }, [])

  
  return (
    <div>
      <Header/>
      <main>
        <h2>{ eventData.title }</h2>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eventData.body) }}></div>
      </main>
      <Footer/>
    </div>
  );
}
export default EventDetail;
