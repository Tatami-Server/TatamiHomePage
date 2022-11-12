import {ImTwitter} from 'react-icons/im'
import {AiFillYoutube} from 'react-icons/ai'
import {SiTwitch} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import { IconContext } from 'react-icons'

import React from 'react';
import './Footer.css';

const Footer = () => {
  const FooterIconList=[
    {href:"https://twitter.com/tatami_mc",reactIcon:ImTwitter},
    {href:"https://www.youtube.com/channel/UCnXR4abcAVt8Cial0rbLe3A",reactIcon:AiFillYoutube},
    {href:"https://www.twitch.tv/Ototaki0622/" ,reactIcon:SiTwitch},
    {href:"https://discord.gg/t4YAKKxaq9",reactIcon:SiDiscord}
  ]
  console.log(FooterIconList);
  return (
    <footer>
      <div className="footerContainer">
        <p>(c)畳サーバー</p>
        <p className="footerText">JEでもBEでも遊べるマイクラサーバー</p>
        <ul className="icons">
          <IconContext.Provider value={{color: '#fff', size: '30px'}}>
            {FooterIconList.map((iconItem) =>{
              return(
              <li>
                <a href={iconItem.href} target="_blank">
                <iconItem.reactIcon/>
                </a>
              </li>
              );
            })}
          </IconContext.Provider>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;