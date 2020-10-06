import React from "react";
import "./Experience.css";
import "../../mediaQueries.css";

const Experience = () => (
  <section className='experience' id='experience'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Work Experience</h1>
        <h6>Past and current jobs</h6>
      </div>
      <div className='timeline'>
        <ul>
          <li className='date' data-date='2019 - Present'>
            <h1>Globant</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae officiis incidunt qui aliquid sequi eveniet pariatur!
              Quisquam reiciendis deserunt harum necessitatibus dolor,
              asperiores quos alias aliquid rem maiores eaque vitae!
            </p>
          </li>
          <li className='date' data-date='2018 - 2019'>
            <h1>Lagash</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae officiis incidunt qui aliquid sequi eveniet pariatur!
              Quisquam reiciendis deserunt harum necessitatibus dolor,
              asperiores quos alias aliquid rem maiores eaque vitae!
            </p>
          </li>
          <li className='date' data-date='2018 - 2018'>
            <h1>SISTRAN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae officiis incidunt qui aliquid sequi eveniet pariatur!
              Quisquam reiciendis deserunt harum necessitatibus dolor,
              asperiores quos alias aliquid rem maiores eaque vitae!
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
