import React from "react";
import "./Portfolio.css";
import "../../mediaQueries.css";
import AppDemo from "../../images/portfolio_item1.png";
import covid19App from "../../images/COVID19-APP-demo.gif";
import codepengif from "../../images/codepen-demoGif.gif";

const Portfolio = () => (
  <section className='portfolio' id='portfolio'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Portfolio</h1>
        <h6>View some of my recent work</h6>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-img has-margin-right'>
          <img src={codepengif} alt='App-demo' />
        </div>
        <div className='portfolio-description'>
          <h6>Web Development</h6>
          <h1>Blog Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis incidunt qui aliquid sequi eveniet pariatur! Quisquam
            reiciendis deserunt harum necessitatibus dolor, asperiores quos
            alias aliquid rem maiores eaque vitae!
          </p>
          <a target='_blank' href='/' className='cta'>
            Live Demo
          </a>
          <br />
          <a target='_blank' href='/' className='cta'>
            Github Repository
          </a>
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-description has-margin-right'>
          <h6>Web Design</h6>
          <h1>Lorem Ipsem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis incidunt qui aliquid sequi eveniet pariatur! Quisquam
            reiciendis deserunt harum necessitatibus dolor, asperiores quos
            alias aliquid rem maiores eaque vitae!
          </p>
          <a target='_blank' href='/' className='cta'>
            Live Demo
          </a>
          <br />
          <a target='_blank' href='/' className='cta'>
            Github Repository
          </a>
        </div>
        <div className='portfolio-img'>
          <img src={codepengif} alt='App-demo' />
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-img has-margin-right'>
          <img src={covid19App} alt='' />
        </div>
        <div className='portfolio-description'>
          <h6>Data Visualization</h6>
          <h1>COVID-19 Data Tracker</h1>
          <p>
            A responsive web app built with react.js and chart.js libraries that
            visually displays real time COVID-19 Stats worldwide and from each
            country.
          </p>
          <a
            target='_blank'
            href='https://covid19-datanow.netlify.app/'
            className='cta'
          >
            Live Demo
          </a>
          <br />
          <a
            target='_blank'
            href='https://github.com/sidbhanushali/COVID19-Data-App'
            className='cta'
          >
            Github Repository
          </a>
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-description has-margin-right'>
          <h6>Web Development</h6>
          <h1>Codepen Clone</h1>
          <p>
            A simple and minimal clone of the popular code sharing website,
            codepen.io, to code and compile in real-time HTML, CSS, and
            Javascript snippets. Built with react.js
          </p>
          <a
            target='_blank'
            href='https://react-codepen-clone.netlify.app/'
            className='cta'
          >
            Live Demo
          </a>
          <br />
          <a
            target='_blank'
            href='https://github.com/sidbhanushali/codepen-react-clone'
            className='cta'
          >
            Github Repository
          </a>
        </div>
        <div className='portfolio-img'>
          <img src={codepengif} alt='App-demo' />
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
