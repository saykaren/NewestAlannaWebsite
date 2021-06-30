import React from "react";

const ContactMe = () => (
  <main className="web_section_box">
 <h3 className="web_section_title">Contact Dr. Everett</h3>

 <section className="serviceSingleSection">
 <h2 className="serviceHeading">Email (Preferred)</h2>
      <a href="mailto:alannaeeverett@gmail.com">alannaeeverett@gmail.com</a>
    </section>

    <section className="serviceSingleSection">
    <h2 className="serviceHeading">Phone (Text Allowed)</h2>
      <a href="tel:+3035221514">303.522.1514</a>
    </section>

    <section className="serviceSingleSection">
        <h2 className="serviceHeading">Serving Areas</h2>
        <article>North of Colorado Springs and South of Fort Collins. Please reach out directly if outside that coverage area. </article>
      </section>

  </main>
);

export default ContactMe;
