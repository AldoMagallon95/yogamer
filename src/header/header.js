import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yogamer.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <a href="https://yo-gamer-nft.gitbook.io/yo-gamer-genesis/" className={styles.whitepaper}>Whitepaper</a>
      </div>
      <Link to="/about" className={styles.about}>Acerca de mí</Link>
    </header>
  );
};

export default Header;
