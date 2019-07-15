import React from 'react';
import './App.css';
import ContactMe from './contact';
import alannaHero from '../../assets/alanna_heroPic.jpg'

function HeroSection(){
  return(
    <div>
      <main
        className={"heroSection"}
        id={"heroImage"}
      >
        
        <h1
        id={"heroText"}
        >
          Alanna Everett
          <h2 id={"heroTitle"}>
            Psychologist
          </h2>
        </h1>

        <img src={alannaHero}
          alt={"Alanna Teaching"} 
          id={"heroContactPic"}
          rel={"noopener noreferrer"}
        />
        <h3 id={"buttonSignUp"}>
          <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
            target={"_blank" }
            rel={"noopener noreferrer"}
            className={"button"} 
            id={"buttonMain"}
          >
            IQ Testing Schedule
          </a>
        </h3>
      </main> 
    <ContactMe />
    </div> 
  );
};


export default HeroSection