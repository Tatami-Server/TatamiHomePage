// アイコンインポート
import { ImTwitter } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import { SiTwitch } from 'react-icons/si'
import { SiDiscord } from 'react-icons/si'
import { IconContext } from 'react-icons'

// cssインポート
import Style from '@style/components/Footer.module.scss';

const Footer = () => {

  const FooterIconList = [
    { href: "https://twitter.com/tatami_mc", reactIcon: ImTwitter },
    { href: "https://www.youtube.com/channel/UCnXR4abcAVt8Cial0rbLe3A", reactIcon: AiFillYoutube },
    { href: "https://www.twitch.tv/Ototaki0622/", reactIcon: SiTwitch },
    { href: "https://discord.gg/t4YAKKxaq9", reactIcon: SiDiscord }
  ]
  
  return (
    <footer className={Style.footer}>
      <div className={Style["footer-contents-container"]}>
        <p>(c)畳サーバー</p>
        <p className={Style.footerText}>JEでもBEでも遊べるマイクラサーバー</p>
        <ul className={Style.icons}>
            {FooterIconList.map((iconItem,index) => {
              return (
                <IconContext.Provider value={{ color: '#fff', size: '30px' }} key={index}>
                  <li>
                    <a href={iconItem.href} target="_blank" rel="noopener noreferrer">
                      <iconItem.reactIcon />
                    </a>
                  </li>
                </IconContext.Provider>
              );
            })}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;