import React from 'react';
import './App.css';
import HeroSection from './heroSection';

function Credentials(){
  return(
    <div>
      <HeroSection />
   
      <div
        className={"credentials"}
      >
        <div
          id={"credentialTitle"}
        >
          <strong>Alanna Everett's Credentials</strong> 
        </div>
        
        <div
          id={"licenseNumber"}
          className={"credentialDetails"}
        >
          <strong>License Number:</strong> 152423 <br></br>
          <a 
            href={"https://apps.colorado.gov/cde/licensing/Lookup/LicenseLookup.aspx"} 
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            License Lookup
            </a>
        </div>

        <div
        id={"occupation"}
        className={"credentialDetails"}
        >
          <strong>Occupation:</strong> Psychologist
        </div>
      
      <div
      id={"address"}
      className={"credentialDetails"}
      >
          <strong>Address:</strong> Thornton, CO
        </div>
      </div>
    </div>
  );
}



export default Credentials