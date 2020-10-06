import React from "react";
import "./Footer.css";
import "../../mediaQueries.css";

const Footer = () => (
  <footer className='copyright'>
    <div id='up' className='up'>
      <i className='fas fa-chevron-up' />
    </div>
    <a href='https://www.github.com/sidbhanushali'>
      <p>© Siddharth Bhanushali</p>
    </a>
  </footer>
);

export default Footer;
