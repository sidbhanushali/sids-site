import React from "react";
import "./Portfolio.css";
import "../../mediaQueries.css";
import AppDemo from "../../images/portfolio_item1.png";

const Portfolio = () => (
  <section className='portfolio' id='portfolio'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Portfolio</h1>
        <h6>View some of my recent work</h6>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-img has-margin-right'>
          <img src={AppDemo} alt='App-demo' />
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
          <a href='/' className='cta'>
            View Details
          </a>
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-description has-margin-right'>
          <h6>Web Design</h6>
          <h1>Product Layout</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis incidunt qui aliquid sequi eveniet pariatur! Quisquam
            reiciendis deserunt harum necessitatibus dolor, asperiores quos
            alias aliquid rem maiores eaque vitae!
          </p>
          <a href='/' className='cta'>
            View Details
          </a>
        </div>
        <div className='portfolio-img'>
          <img src={AppDemo} alt='App-demo' />
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-img has-margin-right'>
          <img src={AppDemo} alt='' />
        </div>
        <div className='portfolio-description'>
          <h6>Web Design</h6>
          <h1>Product Sketch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis incidunt qui aliquid sequi eveniet pariatur! Quisquam
            reiciendis deserunt harum necessitatibus dolor, asperiores quos
            alias aliquid rem maiores eaque vitae!
          </p>
          <a href='/' className='cta'>
            View Details
          </a>
        </div>
      </div>

      <div className='portfolio-item'>
        <div className='portfolio-description has-margin-right'>
          <h6>Web Design</h6>
          <h1>Product Layout</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis incidunt qui aliquid sequi eveniet pariatur! Quisquam
            reiciendis deserunt harum necessitatibus dolor, asperiores quos
            alias aliquid rem maiores eaque vitae!
          </p>
          <a href='/' className='cta'>
            View Details
          </a>
        </div>
        <div className='portfolio-img'>
          <img src={AppDemo} alt='App-demo' />
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
