import React from "react";
import "./Contact.css";
import "../../mediaQueries.css";

const Contact = () => (
  <section className='contact' id='contact'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Contact</h1>
        <h6>
          Let's create something together! Get in touch: <br />
          <a className='cta' id='email' href='mailto:sbhanushali415@gmail.com'>
            sbhanushali415@gmail.com
          </a>
        </h6>
      </div>
    </div>
  </section>
);

export default Contact;
