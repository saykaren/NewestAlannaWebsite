import React from "react";

const ContactMe = () => (
  <main className="contactMe, web_section_box">
    <section id="contactTitle">
      <span className="strong">Contact Me</span>
    </section>

    <section id="email" className="contactMeDetails">
      <i className="fa fa-envelope" aria-hidden="true"></i>
      <a href="mailto:alannaeeverett@gmail.com">alannaeeverett@gmail.com</a>
    </section>

    <section id="phone" className="contactMeDetails">
      <i className="fa fa-phone" aria-hidden="true"></i>
      <a href="tel:+3035221514">303.522.1514</a>
    </section>

    <section id="address" className="contactMeDetails">
      <i className="fa fa-map-marker" aria-hidden="true"></i>
      Thornton, CO
    </section>
  </main>
);

export default ContactMe;
