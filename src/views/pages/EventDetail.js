// コンポーネントインポート
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getOne } from '../../lib/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Heading from '../components/Heading';

import Style from '../../style/pages/EventDetail.module.css'

import parse from 'html-react-parser';

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
        <Heading heading={ eventData.title }/>
        <div className={Style["event-body"]}>{ parse(`${eventData.body}`) }</div>
      </main>
      <Footer/>
    </div>
  );
}
export default EventDetail;
