import React from "react";
import "./Header.css";
import "../../mediaQueries.css";

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <span className='navbar-toggle' id='js-navbar-toggle'>
          <i className='fas fa-bars' />
        </span>
        <ul className='main-nav' id='js-menu'>
          <li>
            <a href='index.html' className='nav-links'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='nav-links'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='nav-links'>
              Services
            </a>
          </li>
          <li>
            <a href='#portfolio' className='nav-links'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#experience' className='nav-links'>
              Experience
            </a>
          </li>
          <li>
            <a href='#personal' className='nav-links'>
              Personal
            </a>
          </li>
          <li>
            <a href='#contact' className='nav-links'>
              Contact
            </a>
          </li>
          <li>
            <a
              id='Dev.to blog'
              href='https://dev.to/sidbhanushali'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-links'
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className='landing-text'>
        <h1>Siddharth Bhanushali</h1> <br />
        {/* animated h6 */}
        <h6>
          Full Stack
          <span
            className='txt-type'
            data-wait='1000ms'
            data-words='["Developer", "Designer", "Enthusiast"]'
          />
        </h6>
        <a className='landingbtn' href='#portfolio'>
          <p> See my work! </p>
        </a>
      </div>
    </header>
  );
};

export default Header;
