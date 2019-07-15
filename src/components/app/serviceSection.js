import React from 'react';
import './App.css';
import ReferenceSection from './reference';
import ContactMe from './contact';


function ServiceSection(){
  return(
    <div>
    <div
      className={"services"}

    >
      <div className={"serviceSingleSection"}>
        <div className={"serviceHeading"}>
        IQ Testing
        </div>
          <div>
            The primary reason I receive requests for IQ Testing is for admissions into a gifted school or program. There are a variety of benefits why you should consider testing your child:
            <ul>
              <li>Reason One</li>
              <li>Reason Two</li>
              <li>Reason Three</li>
            </ul>
            
          </div>

      </div>
       <div className={"serviceSingleSection"}>
        <div className={"serviceHeading"}>
        How IQ Testing Conducted
        </div>
          <div>
            Sectionto reassure parents of your skills
              Lorem ipsum dolor sit amet, urbanitas mnesarchum has eu. Has quis adipisci no, iudico eligendi consulatu ex nec. Agam iusto consequuntur ius ne, eos ad viris recusabo antiopam, at mei nibh affert ignota. Sit an lobortis sadipscing.
            
              Lorem ipsum dolor sit amet, urbanitas mnesarchum has eu. Has quis adipisci no, iudico eligendi consulatu ex nec. Agam iusto consequuntur ius ne, eos ad viris recusabo antiopam, at mei nibh affert ignota. Sit an lobortis sadipscing.
          </div>
      </div>
      
   <div className={"serviceSingleSection"}>
        <div className={"serviceHeading"}>
        How to schedule IQ Testing
        </div>
          <div>
             If you live within a 20 mile radius of Thornton, CO I would be grateful to help adminster your child's IQ Testing. Please find my availibility at the link below. Please contact me at <a href="alannaeeverett@gmail.com" target="_blank">alannaeeverett@gmail.com </a> with any questions or too see if I service your area. 
          </div>

          <div>
            <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
              target={"_blank" }
              className={"button"} 
              id={"buttonSign"}
              rel={"noopener noreferrer"}
            >
              Sign Up
            </a>

     </div>
     <br></br>
     <br></br>
      </div>
       
    </div>
    <ReferenceSection />
    <ContactMe />
    
    </div>
  )
}

export default ServiceSection