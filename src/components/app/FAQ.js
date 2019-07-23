import React from 'react';
import './App.css';

const FAQ =() => (
    <div>
      <h1
        id="faqTitle"
        className="faqTitles"
      >
        <strong>
          Frequently Asked Questions
        </strong>
      </h1>

      <main
       className="faq"
      >
        <section
          className="faqBox"
        >
          <h2
            className="faqQuestion"
          >
            <strong>
              What is the cost?
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              Pricing Details
            </summary>
              $250 March-August (Off season) 
              <br></br>
              $350 September-February
          </details>
        </section>
          
        <section
          className="faqBox"
        >
          <h2
              className="faqQuestion"
          >
            <strong>
              Where does the testing take place?
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              In your home
            </summary>
              To ensure your child is most comfortable while taking the test I make it convenient by coming to your home to administer the test. We can also schedule the test at a local library or other location if requested. 
          </details>
        </section>

        <section
          className="faqBox"
        >
          <h2
              className="faqQuestion"
          >
            <strong>
              What do I need to prepare at our house for the test?
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              Quite Working Space
            </summary>
              We will need a quite working space (table and chair). Access for your child to a snack and drink is helpful too. I make sure to take as many breaks as your child needs as I want to ensure we allow their inner genius to shine. As to not disturb your child please have any siblings stay in another room or arrange for them to be entertained while testing takes place. 
          </details>
        </section>

        <section
          className="faqBox"
        >
          <h2
              className="faqQuestion"
          >
            <strong>
              How can I prepare my child for this test?
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              Testing Child's Innate Knowledge
            </summary>
            No preparation is needed as this test will expose your child’s innate knowledge. 
          </details>
        </section>

        <section
          className="faqBox"
        >
          <h2
              className="faqQuestion"
          >
            <strong>
              What tests do you administer? 
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              WPPSI-IV and others
            </summary>
            WPPSI-IV Wechsler Preschool and Primary Scale of Intelligence-Fourth Edition
          </details>
        </section>

        <section
          className="faqBox"
        >
          <h2
              className="faqQuestion"
          >
            <strong>
              How long does it take to obtain the results of the test?
            </strong>
          </h2>
          <details
            className="faqAnswer"
          >
            <summary>
              Details of Turnaround Time
            </summary>
            I ask for 1-2 weeks to prepare the final test result and issue a signed final PDF report. There is an option to expedite the result to 3 business days with a $50 convenience fee.
          </details>
        </section>
      </main>
    </div>
  );

export default FAQ