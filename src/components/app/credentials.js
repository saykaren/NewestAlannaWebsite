import React from 'react';
import './App.css';
import HeroSection from './heroSection';

function Credentials(){
  return(
    <div>
      <main
        className="credentials"
      >
        <h2
          id="credentialTitle"
        >
          <strong>
            Alanna Everett's Credentials
          </strong> 
        </h2>
        
        <section
          id="licenseNumber"
          className="credentialDetails"
        >
          <strong>
            License Number:
          </strong>
            152423 
          <br></br>
          <a 
            href="https://apps.colorado.gov/cde/licensing/Lookup/LicenseLookup.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            License Lookup
          </a>
        </section>

        <section
        id="occupation"
        className="credentialDetails"
        >
          <strong>
            Occupation:
          </strong> 
            Psychologist
        </section>
      
        <section
          id="address"
          className="credentialDetails"
        >
          <strong>
            Address:
          </strong>
        Thornton, CO
        </section>
      </main>
      <HeroSection />
    </div>
  );
}



export default Credentials