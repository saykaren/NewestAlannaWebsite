import React from "react";
import ReferenceSection from "./ReferenceSection";
import ContactMe from "./ContactMe";

const ServiceSection = () => (
  <div className="web_section_box">
    <h3 className="web_section_title">Services Offered By Dr. Everett</h3>
    <div className="notes">
      Note: I am currently limiting the scope of my services to better serve my
      audience{" "}
    </div>
    <div className="services">
      <section className="serviceSingleSection">
        <h2 className="serviceHeading">GT Assessment</h2>
        <article>
          Giftedness screening, including IQ testing (WISC-V or WAIS-IV,
          depending on age), for ages 6 and older. Body of evidence. Early
          access for kindergarten.
        </article>
      </section>

      <section className="serviceSingleSection">
        <h2 className="serviceHeading">Psychotherapy</h2>
        <article>
          "Psychotherapy" means the treatment, diagnosis, testing, assessment,
          or counseling in a professional relationship to assist individuals or
          groups to alleviate mental disorders, understand unconscious or
          conscious motivation, resolve emotional, relationship, or attitudinal
          conflicts, or modify behaviors that interfere with effective
          emotional, social, or intellectual functioning. Psychotherapy follows
          a planned procedure of intervention that takes place on a regular
          basis, over a period of time, or in the cases of testing, assessment,
          and brief psychotherapy, psychotherapy can be a single intervention.
        </article>
      </section>
      <section className="serviceSingleSection">
        <h2 className="serviceHeading">Educational Consulting</h2>
        <article>
          Educational consultants are individuals who assist schools,
          educational bodies and organisations or even parents and students
          through problems they may have encountered related to education. Dr.
          Everett specializes in working with students who have learning
          challenges (learning disabilities) or have behavioral/emotional
          difficulties, as well as their families. She will work with you (and
          the schools if necessary) to help your child be as successful as
          possible.
        </article>
      </section>

      <section className="serviceSingleSection">
        <h2 className="serviceHeading">Comprehensive Assessments</h2>
        <article>
        <ul>
          <li>
          Giftedness
          </li>
          <li>
          Twice Exceptionality (2e)
          </li>
          <li>
          Specific Learning Disabilities (Reading, Writing, Math)
          </li>
          <li>
          Executive Function Deficits
          </li>
          <li>
          ADHD
          </li>
        </ul>
        
 

          <details>
          Simply put, a comprehensive assessment is an evaluation tool or system
          that allows teachers to do the following things: Assess students'
          overall understanding of the curriculum or skill. Boost students'
          learning through improved teaching strategies.
          </details>
        </article>
      </section>
    </div>
  </div>
);

export default ServiceSection;
