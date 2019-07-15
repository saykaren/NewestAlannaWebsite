import React from 'react';
import './App.css';

function ContactMe(){
  return(
    <main
      className={"contactMe"}
    >
      <section
        id={"contactTitle"}
      >
        <strong>Contact Me</strong>
      </section>
      
      <section
        id={"email"}
        className={"contactMeDetails"}
      >
        <strong>
          Email:
        </strong> 
        <a href="mailto:alannaeeverett@gmail.com">
          alannaeeverett@gmail.com
        </a>
      </section>

      <section
        id={"phone"}
        className={"contactMeDetails"}
      >
        <strong>
          Phone:
        </strong> 
        <a href="tel:+3035221514">
          303.522.1514
        </a>
      </section>
     <section
      id={"address"}
      className={"contactMeDetails"}
     >
      <strong>
        Address:
      </strong> 
        Thornton, CO
      </section>
    </main>
  );
}



export default ContactMe