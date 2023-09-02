// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import SubProducts from '@components/SubProducts';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';

// 画像インポート
import fusuma from '/public/images/Igusa.images/sister2.png';

import { getAll } from '@lib/firebase';
import groupBy from '@util/groupBy';

const Event = ({events}) => (
    <div>
      <Heading heading="イベント一覧"/>
      
      {events.map(([groupName, events]) => (
        <div key={groupName}>
          <Subtitle subtitle={groupName} />
          <div className="Products">
            <SubProducts products={events}/>
          </div>
        </div>
      ))}
      <UpArrow/>
      <Igusa text="初めまして！私は「井草フスマ」って言います！
        たくさんの人に元気や笑顔を振りまきたいの！
        イベントもたくさんあって、目移りしちゃうね！
        誕生日は4/26だよ!お祝いしてね!!"
        image={fusuma}
        creator="仙人亭 様"
      />
    </div>
  );

export async function getStaticProps() {
    const eventData = (await getAll('event', { sort: [{ field: 'updatedAt', order: 'desc' }]})).map(event => {
      return {
        ...event,
        href: event.url || `/event/${event.id}`,
        img: event.mainImg?.src || '',
        imgTitle: event.title,
        eventTypeName: event.eventType.title || ''
      }
    })

    return {
        props: { events: groupBy(eventData, 'eventTypeName', ['eventType.sortNum', 'asc']) },
        revalidate: 60,
    }
}

export default Event;
