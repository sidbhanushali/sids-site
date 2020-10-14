import React from "react";
import "./Services.css";
import "../../mediaQueries.css";

const Services = () => (
  <section className='services' id='services'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Skills</h1>
        <h6>What I can do for you</h6>
      </div>
      {/* <div class="my-skills"> */}
      <div className='skill' data-aos='fade-in' data-aos-delay={100}>
        {/* </div> */}
        <div className='icon-container'>
          <i className='fas fa-pencil-ruler' />
        </div>
        <h1>Front-End</h1>
        <p>
          have designed and built front-end projects in the purestack
          (HTML,CSS,JS) in React.js and with the express handlebars framework.
        </p>
        <div className='skillicons'>
          <div className='skillicon-box'>
            <i className='devicon-html5-plain colored' />
            <span className='skillicon-title'>
              <p> HTML5 </p>
            </span>
          </div>
          <div className='skillicon-box'>
            <i className='devicon-css3-plain-wordmark colored' />
            <span className='skillicon-title'>
              <p> CSS3 </p>
            </span>
          </div>
          <div className='skillicon-box'>
            <i className='devicon-javascript-plain colored' />
            <span className='skillicon-title'>
              <p> Javascript </p>
            </span>
          </div>
          <div className='skillicon-box'>
            <i className='devicon-bootstrap-plain colored' />
            <span className='skillicon-title'>
              <p> Bootstrap </p>
            </span>
          </div>
          <div className='skillicon-box'>
            <i className='devicon-handlebars-plain colored' />
            <span className='skillicon-title'>
              <p>Handlebars</p>
            </span>
          </div>
          <div className='skillicon-box'>
            <i className='devicon-react-original colored' />
            <span className='skillicon-title'>
              <p>React</p>
            </span>
          </div>
        </div>{" "}
        <br />
        <div className='skill' data-aos='fade-in' data-aos-delay={200}>
          <div className='icon-container'>
            <i className='fas fa-laptop-code' />
          </div>
          <h1>Back End</h1>
          <p>
            I have experience in building and designing back-end architecture in
            Node.js/express and in Django. I have built back end systems by
            making CRUD REST API's that serve json data to the front-end and
            making back-end systems that serve the front-end directly to the
            routes using template engines.{" "}
          </p>
          <div className='skillicons'>
            <div className='skillicon-box'>
              <i className='devicon-mongodb-plain' />
              <span className='skillicon-title'>
                <p>MongoDB</p>
              </span>
            </div>
            <div className='skillicon-box'>
              <i className='devicon-nodejs-plain colored' />
              <span className='skillicon-title'>
                <p>Node.js</p>
              </span>
            </div>
            <div className='skillicon-box'>
              <i className='devicon-express-original' />
              <span className='skillicon-title'>
                <p>Express</p>
              </span>
            </div>
            <div className='skillicon-box'>
              <i className='devicon-python-plain colored' />
              <span className='skillicon-title'>
                <p>python</p>
              </span>
            </div>
            <div className='skill' data-aos='fade-in' data-aos-delay={300}>
              <div className='icon-container'>
                <i className='fas fa-paint-brush' />
              </div>
              <h1>DevOps </h1>
              <p>
                I have familiarity working with the various tools and
                technologies that are used in the devops lifecycle. I have used
                Git for Continuous Development, Jenkins and Travis CI for
                Continuous Integration. Docker and Puppet for continous
                Deployment, Selenium for Automation testing, and Nagios for
                Continous Monitoring
              </p>
              <div className='skillicons'>
                <div className='skillicon-box'>
                  <i className='devicon-docker-plain colored' />
                  <span className='skillicon-title'>
                    <p>Docker</p>
                  </span>
                </div>
                <div className='skillicon-box'>
                  <i className='devicon-git-plain colored' />
                  <span className='skillicon-title'>
                    <p>Git</p>
                  </span>
                </div>
                <div className='skillicon-box'>
                  <i className='fas fa-terminal' />
                  <span className='skillicon-title'>
                    <p>bash/shell</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
