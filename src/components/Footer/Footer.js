import React from 'react';
import style from './footer.css';
import { Link } from 'react-router-dom';
import { Current_Year } from '../../Config';

const Footer = () => (
  <div className={style.footer}>
    <Link to="/home" className={style.logo}>
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
    <div className={style.right}>@NBA {Current_Year} All Right Reserved</div>
  </div>
);

export default Footer;
