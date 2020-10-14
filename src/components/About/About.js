import React from "react";
import "./About.css";
import "../../mediaQueries.css";

const About = () => (
  <section id='about' className='about'>
    <div className='container'>
      <div className='about-details' data-aos='fade-in' data-aos-delay={200}>
        <div className='about-heading'>
          <h1>About</h1>
          <h6>Myself</h6>
        </div>
        <p>
          Hey Everyone! My name is Siddharth Bhanushali, you can call me Sid if
          you like! I am currently full stack developer and a class of 2020 grad
          in Information Systems from San Francisco State University. I love to
          explore technology and develop interesting things out of it. I love
          open-source, learning new tech, and interacting with the tech
          community. I have experience developing and delpoying full stack
          applications in javascript, react.js, node.js and with various web
          technologies. I have experience developing with Python, as well. I
          love learning and finding out creative and efficient ways to solve any
          problems at hand.
        </p>
        <div className='social-media'>
          <ul className='nav-list'>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/sidbhanushali'
                className='icon-link'
              >
                <i className='fab fa-linkedin' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/sidbhanushali'
                className='icon-link'
              >
                <i className='fab fa-github' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://dev.to/sidbhanushali'
                className='icon-link'
              >
                <i className='mdi mdi-dev-to' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
