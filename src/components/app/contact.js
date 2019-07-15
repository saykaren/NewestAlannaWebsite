import React from 'react';
import './App.css';

function ContactMe(){
  return(
    <div
      className={"contactMe"}
      
    >
      <div
        id={"contactTitle"}
      >
        <strong>Contact Me</strong>
      </div>
      
      <div
        id={"email"}
        className={"contactMeDetails"}
      >
        <strong>Email:</strong> <a href="mailto:alannaeeverett@gmail.com">alannaeeverett@gmail.com</a>
      </div>
      <div
      id={"phone"}
      className={"contactMeDetails"}
      >
        <strong>Phone:</strong> <a href="tel:+3035221514">303.522.1514</a>
      </div>
     <div
     id={"address"}
     className={"contactMeDetails"}
     >
        <strong>Address:</strong> Thornton, CO
      </div>
    </div>

  );
}



export default ContactMe