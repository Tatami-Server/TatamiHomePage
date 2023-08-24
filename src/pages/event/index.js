// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import SubProducts from '@components/SubProducts';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';

// 画像インポート
import normalEvent1 from '@images/event.images/event1-1.png';
import normalEvent2 from '@images/event.images/event1-2.png';
import normalEvent3 from '@images/event.images/event1-3.png';
import normalEvent4 from '@images/event.images/event1-4.png';
import normalEvent5 from '@images/event.images/event1-5.png';
import normalEvent6 from '@images/event.images/event1-6.png';
import normalEvent7 from '@images/event.images/event1-7.png';
import subEvent1 from '@images/event.images/event2-1.png';
import subEvent2 from '@images/event.images/event2-2.png';
import subEvent3 from '@images/event.images/event2-3.png';
import subEvent4 from '@images/event.images/event2-4.png';
import subEvent5 from '@images/event.images/event2-5.png';
import subEvent6 from '@images/event.images/event2-6.png';
import allTimeEvent1 from '@images/event.images/event3-1.png';
import allTimeEvent2 from '@images/event.images/event3-2.png';
import allTimeEvent3 from '@images/event.images/event3-3.png';
import allTimeEvent4 from '@images/event.images/event3-4.png';
import lifeSarver1 from '@images/event.images/event4-1.png';
import fusuma from '@images/Igusa.images/sister2.png';

import { getAll } from '@lib/firebase';
import groupBy from '@util/groupBy';

const Event = ({events}) => {

  const eventsGroup = groupBy(events, 'eventType')

  console.log(eventsGroup.normal)

  const normalEventList=[
    {href:"https://seesaawiki.jp/tatamiserver/d/%c6%a8%c1%f6%c3%e6", imgTitle:"逃走中", img:normalEvent1, title:"逃走中", description:"オリジナルマップとオリジナルミッションで繰り広げる逃亡劇！"},
    {href:"https://seesaawiki.jp/tatamiserver/d/PvP", imgTitle:"PｖP", img:normalEvent2, title:"PｖP", description:"日々マップとルールが増え続ける2チーム対抗戦"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%a6%a1%bc%a5%eb%a5%d0%a5%c8%a5%eb", imgTitle:"ウールバトル", img:normalEvent3, title:"ウールバトル", description:"羊毛でビーコンを守る防壁を作成、敵拠点は壊して攻略！"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%de%a5%a4%a5%af%a5%e9%a5%d0%a5%ab%bf%cd%cf%b5", imgTitle:"バカ人狼", img:normalEvent4, title:"マイクラバカ人狼", description:<>役職「バカ」もある!? <br/>マイクラでより高度な人狼を楽しもう！</>},
    {href:"https://seesaawiki.jp/tatamiserver/d/%b5%b4%a4%b4%a4%c3%a4%b3", imgTitle:"鬼ごっこ", img:normalEvent5, title:"鬼ごっこ", description:"入れ替わり鬼・氷鬼・増え鬼の3種類を用意したオーソドックスな鬼ごっこイベント。"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%bb%e0%cb%b4%a5%b2%a1%bc%a5%e0%28%8e%c3%8e%de%8e%bd%8e%b9%8e%de%8e%b0%8e%d1%29", imgTitle:"デスゲーム", img:normalEvent6, title:"死亡ゲーム(ﾃﾞｽｹﾞｰﾑ)", description:"指定された死に方が出来るとポイントがもらえるゲーム。"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%b5%a5%d0%a5%a4%a5%d0%a5%ebPvP", imgTitle:"サバイバルPｖP", img:normalEvent7, title:"サバイバルPｖP", description:"敵コアの場所がわからないPvP。復活不可能で、武具や防衛施設は自分たちで作成する。"},
  ];
  const subEventList=[
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%b9%a5%b3%a5%c3%a5%c8%a5%e9%a5%f3%a5%c9%a5%e4%a1%bc%a5%c9", imgTitle:"スコットランドヤード", img:subEvent1, title:<>マイクラ<br/>スコットランドヤード</>, description:<>ボードゲーム「スコットランドヤード」をマイクラで再現! (配布もしています!)<br/>警察の包囲網を突破せよ!</>},
    {href:"https://seesaawiki.jp/tatamiserver/d/%c2%bc%bf%cd%cb%c9%b1%d2%c0%ef", imgTitle:"村人防衛戦", img:subEvent2, title:"村人防衛戦", description:"ウェーブ制の防衛ゲーム。迫りくるモンスターから村人を守り切れ!"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%e9%a5%f3%a5%c0%a5%e0%c6%fe%a4%ec%c2%d8%a4%ef%a4%ea%a5%d0%a5%c8%a5%eb%a5%ed%a5%ef%a5%a4%a5%e4%a5%eb", imgTitle:"バトルロワイヤル", img:subEvent3, title:<>ランダム入れ替わり<br/>バトルロワイヤル</>, description:"数十秒に１回プレイヤーの居場所が変わる世界でバトルロワイヤル。"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%c5%fa%a4%a8%a4%c6%a5%d3%a5%c3%a5%af%a5%ea%a1%aa%3fMOB%a5%af%a5%a4%a5%ba%21", imgTitle:"MOBクイズ!", img:subEvent4, title:"答えてビックリ!?MOBクイズ!", description:"お題に沿ったMOBを連れてきて回答するゲーム。MOBには単語が書かれている。"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a4%c7%a4%ad%a4%eb%b8%c0%cd%d5%a4%cf%a4%ca%a4%f3%a4%c7%a4%b7%a4%e7%a4%a6%a1%aa", imgTitle:"言葉", img:subEvent5, title:"できる言葉はなんでしょう！", description:"ひらがなを集めて並べ替え、敵チームより早く回答するゲーム。ヒントを得るにはサバイバル能力が問われる。"},
    {href:"https://seesaawiki.jp/tatamiserver/d/1%bb%fe%b4%d6%b0%ca%c6%e2%a4%cb%b9%e7%ce%ae%a4%c7%a4%ad%a4%eb%a4%ce%a4%ab%a1%aa%a1%a9", imgTitle:"目指せ合流！", img:subEvent6, title:"1時間以内に合流できるのか!?", description:"リスペクト企画。ばらばらの場所にスポーンしたプレイヤーが、地形や形跡を頼りに合流を目指すゲーム。"},
  ];
  const allTimeEventList=[
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%a2%a5%b9%a5%ec%a5%c1%a5%c3%a5%af", imgTitle:"ロビーアスレ", img:allTimeEvent1, title:"ロビーアスレ", description:"24時間遊べる数々のアスレで楽しもう!"},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%e9%a5%c3%a5%bb%a1%bc%a5%e9%a1%bc%a5%b2%a1%bc%a5%e0", imgTitle:"ラッセーラ", img:allTimeEvent2, title:"ラッセーラーゲーム", description:"ボードゲーム「ラッセーラーゲーム」をマイクラで再現!<br>リズムを覚えてみんなで遊ぼう！"},
    {href:"https://seesaawiki.jp/tatamiserver/d/Knock%20Shot", imgTitle:"Knock Shot", img:allTimeEvent3, title:"Knock Shot", description:<>対戦相手を戦場から吹き飛ばせ!<br/>2段ジャンプも使って相手を翻弄しよう!</>},
    {href:"https://seesaawiki.jp/tatamiserver/d/%a5%c1%a5%e3%a5%ec%a5%f3%a5%b8%a5%bf%a5%ef%a1%bc", imgTitle:"チャレンジタワー", img:allTimeEvent4, title:"チャレンジタワー", description:<>プレイ回数制限がある一人用高難易度イベント。<br/>15階層あるタワーを運を味方につけて登り切れ!</>},
    
  ];
  const lifeSarver=[
    {href:"/life/", imgTitle:"生活鯖", img:lifeSarver1, title:"生活サーバー", description:"半年ぶりに復活！コインを使ったお買い物やガチャ機能を楽しもう!"},
    
  ];
  
  return (
    <div>
      <main>
          <Heading heading="イベント一覧"/>
          <Subtitle subtitle="通常イベント（イベントサーバー）"/>
          <div className="Products">
            <SubProducts products={normalEventList}/>
          </div>
          <Subtitle subtitle="サブスクライバー限定イベント（イベントサーバー）"/>
          <div className="Products">
            <SubProducts products={subEventList}/>
          </div>
          <Subtitle subtitle="常時イベント（常時サーバー）"/>
          <div className="Products">
            <SubProducts products={allTimeEventList}/>
          </div>
          <Subtitle subtitle="生活サーバー"/>
          <div className="Products">
            <SubProducts products={lifeSarver}/>
          </div>
          <Subtitle subtitle="管理画面イベント"/>
          <div className="Products">
            <SubProducts products={events}/>
          </div>
          <UpArrow/>
      </main>
      <Igusa text="初めまして！私は「井草フスマ」って言います！
        たくさんの人に元気や笑顔を振りまきたいの！
        イベントもたくさんあって、目移りしちゃうね！
        誕生日は4/26だよ!お祝いしてね!!"
        image={fusuma}
        creator="仙人亭 様"
      />
    </div>
  );
}

export async function getStaticProps() {
    const events = (await getAll('event')).map(event => {
      return {
        href: event.url || `/event/${event.id}`,
        img: event.mainImg?.src || '',
        imgTitle: event.title,
        ...event
      }
    })

    return {
        props: { events },
        revalidate: 60,
    }
}

export default Event;
