import React from 'react';
import './footer.css';
import telegramLogo from '../assets/telegram-logo-944.png';
import mediumLogo from '../assets/RGB/Medium-Symbol-White-RGB@1x.png';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://t.me/Opengame1" target="_blank" rel="noreferrer">
        <img src={telegramLogo} alt="Telegram" />
      </a>
      <a href="https://medium.com/@yogamernftjuegos/primeros-tokens-no-fungibles-del-universo-yo-gamer-nft-6d7b181539cb" target="_blank" rel="noreferrer">
        <img src={mediumLogo} alt="Medium" />
      </a>
    </footer>
  );
}

export default Footer;
