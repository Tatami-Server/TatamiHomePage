// リアクトアイコンインポート
import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'

// コンポーネントをインポート
import MainProducts from '@components/MainProducts';
import SubProducts from '@components/SubProducts';
import News from '@components/News.js';
import SeparatorLine from '@components/SeparatorLine';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';

// reactの機能をインポート
import { useRef} from 'react';

// 画像をインポート
import logo from '@images/Home.images/logo.png';
import hero from '@images/Home.images/hero2.png';
import donation from '@images/Home.images/donation.jpg';
import map from '@images/Home.images/map.png';
import omikuzi from '@images/Home.images/omikuzi.jpg';
import please from '@images/Home.images/please.jpg';
import application from '@images/Home.images/application.jpg';
import history from '@images/Home.images/history.jpg';
import sns from '@images/Home.images/sns.jpg';
import inquery from '@images/Home.images/inquery.jpg';
import event from '@images/Home.images/event.png';
import life from '@images/Home.images/life.png';
import join from '@images/Home.images/join.png';
import tatami from '@images/Igusa.images/sister1.png';

// cssインポート
import Style from '@style/pages/Home.module.css';

import Image from "next/image";
import TopLayout from '@layouts/TopLayout';

import { getAll } from '@lib/firebase';


function Home({news}) {

  const SubProductsList = [
    { href: `/map/`, imgTitle: "マップ", img: map, title:"配布マップ", description: "当サーバーが提供している\n配布マップ等を紹介しています。" },
    { href: `/history/`, imgTitle: "歴史", img: history, title: "畳サーバーの歴史", description: "当サーバーの過去を知ることができます。過去にこんな事が...。" },
    { href: `/sns/`, imgTitle: "SNS", img: sns, title: "公式SNS", description: "Twitch・YouTube・Twitter等のURLを記載しています。" },
    { href: `/sbuscription/`, imgTitle: "ご寄付", img: donation, title: "サブスクライブ・ご寄付", description: "平素よりご支援いただきありがとうございます！" },
    { href: `/helpre/`, imgTitle: "応募", img: application, title: "運営への応募", description: "建築や開発など、私たちと共に制作しませんか？" },
    { href: `/contact/`, imgTitle: "問い合わせ", img: inquery, title: "お問い合わせ・意見箱", description: "意見や要望はこちらから！" },
    { href: `/please/`, imgTitle: "お願い", img: please, title: "運営からのお願い", description: "サーバーの維持や盛り上げのためにお願いしていることを記載しています。" },
    { href: `/omikuzi/`, imgTitle: "おみくじ", img: omikuzi, title: "畳おみくじ", description: "今日の運勢とクエストを占おう！ちょっとした遊び心で用意したコンテンツです。" }
  ];
  const MainProductsList = [
    { href: `/join/`,  img: join, title: "サーバー参加方法", description: "Discordやマイクラサーバーへの参加方法を紹介しています。" },
    { href: `/life/`,  img: life, title: "生活サーバー", description: "半年ぶりに復活した新しい生活サーバーについて紹介しています。" },
    { href: `/event/`,  img: event, title: "イベント一覧", description: "当サーバーが提供しているイベント一覧とルールを紹介しています。" }
  ];
  
  function scrollToRef(ref) {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  }
  const myRef = useRef(null);

  return (
    <>
      <section className={Style["hero-content-warpper"]}>
        <div className={Style.hero}>
        <div className={Style["first-view-header"]}>
            <div className={Style.spuare}></div>
            <div className={Style.triangle}></div>
            <div className={`${Style.triangle} ${Style.line}`}></div>
            <Image className={Style.logo} src='/images/Home.images/logo.png' width={300} height={300} alt="畳アイコン" />
        </div>
          <div className={Style["arrow-icon"]} onClick={() => scrollToRef(myRef)}>
            <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
              <IoIosArrowDown/>
            </IconContext.Provider>
          </div>
        </div>
      </section>
      <main ref={myRef}>
        <section className={Style.products}>
          <MainProducts products={MainProductsList}/>
          <SeparatorLine/>
          <SubProducts products={SubProductsList}/>
        </section>
        <SeparatorLine/>
        <News news={news} />
        <UpArrow/>
      </main>
      <Igusa text="はじめまして、伊草 タタミです。よろしくお願いするわ。
        いつかすごい畳職人になって、みんなに最高の畳を提供するのが夢なの。
        まずはサーバー参加方法を確認するといいわよ。
        配布が気になるなら、配布マップ等も確認するといいんじゃないかしら。
        ちなみに誕生日は8/23よ。覚えていてね。"
        image={tatami}
        creator="ナミヤ 和 様"
      />
    </>
  );
}

export async function getStaticProps() {
  const news = await getAll('notice', { sort: { field: 'date', order: 'desc' } })

  console.log(news)
  return {
    props: { news },
    revalidate: 60,
  }
}

Home.Layout = TopLayout

export default Home;