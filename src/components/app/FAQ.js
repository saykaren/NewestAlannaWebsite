import React from "react";
import FAQData from "../Data/FAQData";

const FAQ = () => (
  <div className="web_section_box">
    <h3 className="web_section_title">FAQ / Payment</h3>
    <div className="notes">
      Note: Please feel free to reach out to <a href="mailto:alannaeeverett@gmail.com">me</a> with any questions.{" "}
    </div>
    {FAQData.map((faq, faqIndex) => (
      <section className="serviceSingleSection" key={faqIndex}>
        <h2 className="serviceHeading">{faq.Question}</h2>
        <article>{faq.Answer}</article>
      </section>
    ))}
      <section className="serviceSingleSection">
        <h2 className="serviceHeading">What is the best way to get in touch with you?</h2>
        <article>Please feel free to email me at: <a href="mailto:alannaeeverett@gmail.com">alannaeeverett@gmail.com</a> <br/> Call or text me: <a href="tel:+3035221514">303.522.1514</a></article>
      </section>
  </div>
);

export default FAQ;
