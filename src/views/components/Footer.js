import { ImTwitter } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import { SiTwitch } from 'react-icons/si'
import { SiDiscord } from 'react-icons/si'
import { IconContext } from 'react-icons'

import FooterStyle from '../../style/components/Footer.module.css';

const Footer = () => {
  const FooterIconList = [
    { href: "https://twitter.com/tatami_mc", reactIcon: ImTwitter },
    { href: "https://www.youtube.com/channel/UCnXR4abcAVt8Cial0rbLe3A", reactIcon: AiFillYoutube },
    { href: "https://www.twitch.tv/Ototaki0622/", reactIcon: SiTwitch },
    { href: "https://discord.gg/t4YAKKxaq9", reactIcon: SiDiscord }
  ]
  return (
    <footer>
      <div className={FooterStyle["footer-contents-container"]}>
        <p>(c)畳サーバー</p>
        <p className={FooterStyle.footerText}>JEでもBEでも遊べるマイクラサーバー</p>
        <ul className={FooterStyle.icons}>
            {FooterIconList.map((iconItem) => {
              return (
                <IconContext.Provider value={{ color: '#fff', size: '30px' }}>
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