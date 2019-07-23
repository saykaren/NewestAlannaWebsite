import React from 'react';
import './App.css';

const ContactMe = () => (
    <main
      className="contactMe"
    >
      <section
        id="contactTitle"
      >
        <span className="strong">
          Contact Me
        </span>
      </section>
      
      <section
        id="email"
        className="contactMeDetails"
      >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <a href="mailto:alannaeeverett@gmail.com">
          alannaeeverett@gmail.com
        </a>
      </section>

      <section
        id="phone"
        className="contactMeDetails"
      >
        <i class="fa fa-phone" aria-hidden="true"></i>
        <a href="tel:+3035221514">
          303.522.1514
        </a>
      </section>
      
      <section
        id="address"
        className="contactMeDetails"
      >
        <i class="fa fa-map-marker" aria-hidden="true"></i>
          Thornton, CO
      </section>
    </main>
  );

export default ContactMe;