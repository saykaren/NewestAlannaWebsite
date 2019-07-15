import React from 'react';
import './App.css';
import ContactMe from './contact';
import alannaHero from '../../assets/alanna_heroPic.jpg'

function HeroSection(){
  return(
    <div>
      <div
        className={"heroSection"}
        id={"heroImage"}
      >
        
        <div
        id={"heroText"}
        >
          Alanna Everett
        <div id={"heroTitle"}>
          Psychologist
        </div>

        </div>

        <img src={alannaHero}
          alt={"Alanna Teaching"} 
          id={"heroContactPic"}
          rel={"noopener noreferrer"}
        />
        <div id={"buttonSignUp"}>
                      <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
                        target={"_blank" }
                        rel={"noopener noreferrer"}
                      className={"button"} 
                      id={"buttonMain"}>
                        IQ Testing Schedule</a>
        </div>
      </div> 
    <ContactMe />
    </div> 
  );
};


export default HeroSection