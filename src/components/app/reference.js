import React from 'react';
import './App.css';
import karenReference from '../../assets/reference_Karen.jpg'

function ReferenceSection(){
  return(
    <div>
      <h1 id={"referenceTitle"}>
        Reference Section
      </h1>
        <main id={"referenceSectionContainer"}>
          <section className={"reference"}>
            <img 
              src={"https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" } 
              className={"referenceImage"}
              alt={"tina"}
            />
            "Alanna was amazing! I worried about my son sitting that long for a test but Alanna made it very entertaining. Highly recommend her." 
            <strong>
              -Tina
            </strong> 
          </section>

          <section className={"reference"}>
              <img src={"https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80" }
                className={"referenceImage"}
                alt={"tina"}
              />          
              "I was amazed at how easy it was to schedule this test. My son doesn't sit still very long but Alanna allowed him to take multiple breaks to ensure he was focused on each section to get the best grade." 
              <strong>
                - Aaron
              </strong> 
          </section>

          <section className={"reference"}>
            <img src={"https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1650&q=80"} 
              className={"referenceImage"}
              alt={"tina"}
            />
            "Alanna did wonderful! I worried about my son sitting that long for a test but Alanna made it very entertaining. Highly recommend her." 
            <strong>
              -Bob
            </strong> 
          </section>

          <section className={"reference"}>
            <img src={karenReference}
              className={"referenceImage"}
              alt={"reference Karen"}
            />
            "I was amazed at how easy it was to schedule this test. Alanna made the process very easy and straightforward. She ensured all my questions were answered and most importantly that my daughter was comfortable while taking the test to do her best. Thank you Alanna!"
            <strong> 
              - Karen
            </strong> 
          </section>
        </main>
    </div>
  );
}

export default ReferenceSection