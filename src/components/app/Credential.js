import React from 'react';
import './App.css';
import HeroSection from './HeroPicture';

const Credentials = ()=> (
    <div>
      <main
        className="credentials"
      >
        <h2
          id="credentialTitle"
        >
          <span className="strong">
            Alanna Everett's Credentials
          </span>
        </h2>
        
        <section
          id="licenseNumber"
          className="credentialDetails"
        >
          <span className="strong">
            License Number:
          </span>
            152423 
          <div>
            <a 
              href="https://apps.colorado.gov/cde/licensing/Lookup/LicenseLookup.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              License Lookup
            </a>
          </div>
        </section>

        <section
        id="occupation"
        className="credentialDetails"
        >
          <span className="strong">
            Occupation:
          </span> 
            Psychologist
        </section>
      
        <section
          id="address"
          className="credentialDetails"
        >
          <span className="strong">
            Address:
          </span>
          Thornton, Colorado
        </section>
      </main>
      <HeroSection />
    </div>
  );

export default Credentials