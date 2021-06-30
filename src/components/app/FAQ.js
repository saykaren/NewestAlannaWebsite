import React from "react";
import FAQData from "../Data/FAQData";

const FAQ = () => (
  <div className="web_section_box">
    <h3 className="web_section_title">FAQ / Payment</h3>
    <div className="notes">
      Note: Please feel free to reach out to me with any questions.{" "}
    </div>
    {FAQData.map((faq, faqIndex) => (
      <section className="serviceSingleSection" key={faqIndex}>
        <h2 className="serviceHeading">{faq.Question}</h2>
        <article>{faq.Answer}</article>
      </section>
    ))}
  </div>
);

export default FAQ;
